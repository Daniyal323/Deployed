from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.utils import timezone
from django_countries import countries
import requests
import json
import re
from .models import Service, TeamMember, ContactInquiry
from .forms import ContactForm

def home(request):
    services = Service.objects.filter(is_active=True)[:8]
    leadership_team = TeamMember.objects.filter(is_active=True)[:3]
    
    context = {
        'services': services,
        'leadership_team': leadership_team,
        'settings': settings,
    }
    return render(request, 'main/home.html', context)

def about(request):
    leadership_team = TeamMember.objects.filter(is_active=True)
    context = {
        'leadership_team': leadership_team,
    }
    return render(request, 'main/about.html', context)

def services(request):
    services = Service.objects.filter(is_active=True)
    context = {
        'services': services,
    }
    return render(request, 'main/services.html', context)

def web_development(request):
    """Web Development service page"""
    context = {
        'settings': settings,
    }
    return render(request, 'main/services/web_development.html', context)

def careers(request):
    return render(request, 'main/careers.html')

def verify_recaptcha(recaptcha_response):
    """Verify reCAPTCHA response with Google"""
    try:
        data = {
            'secret': settings.RECAPTCHA_PRIVATE_KEY,
            'response': recaptcha_response
        }
        response = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
        result = response.json()
        print(f"reCAPTCHA verification result: {result}")  # Debug log
        return result.get('success', False)
    except Exception as e:
        print(f"reCAPTCHA verification error: {e}")
        return False

def send_contact_email(contact_inquiry):
    """Send email notification for new contact inquiry"""
    try:
        subject = f'New Contact Inquiry from {contact_inquiry.full_name} - {contact_inquiry.company_name}'
        
        # Create HTML email content
        html_message = f"""
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .header {{ background-color: #4f46e5; color: white; padding: 20px; text-align: center; }}
                .content {{ padding: 20px; }}
                .info-table {{ width: 100%; border-collapse: collapse; margin: 20px 0; }}
                .info-table th, .info-table td {{ border: 1px solid #ddd; padding: 12px; text-align: left; }}
                .info-table th {{ background-color: #f8f9fa; font-weight: bold; width: 30%; }}
                .info-table tr:nth-child(even) {{ background-color: #f9f9f9; }}
                .services {{ background-color: #e8f4fd; padding: 10px; border-radius: 5px; }}
                .footer {{ background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }}
            </style>
        </head>
        <body>
            <div class="header">
                <h2>New Contact Inquiry - Deployed</h2>
            </div>
            
            <div class="content">
                <p><strong>A new contact inquiry has been submitted through the website.</strong></p>
                
                <table class="info-table">
                    <tr>
                        <th>Full Name</th>
                        <td>{contact_inquiry.full_name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td><a href="mailto:{contact_inquiry.email}">{contact_inquiry.email}</a></td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>{contact_inquiry.phone_number}</td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>{contact_inquiry.country.name}</td>
                    </tr>
                    <tr>
                        <th>Company Name</th>
                        <td>{contact_inquiry.company_name}</td>
                    </tr>
                    <tr>
                        <th>Company URL</th>
                        <td>{'<a href="' + contact_inquiry.company_url + '" target="_blank">' + contact_inquiry.company_url + '</a>' if contact_inquiry.company_url else 'Not provided'}</td>
                    </tr>
                    <tr>
                        <th>Region</th>
                        <td>{contact_inquiry.get_region_display()}</td>
                    </tr>
                    <tr>
                        <th>Budget</th>
                        <td>{contact_inquiry.budget}</td>
                    </tr>
                    <tr>
                        <th>Services Interested</th>
                        <td class="services">{contact_inquiry.services}</td>
                    </tr>
                    <tr>
                        <th>Project Details</th>
                        <td>{contact_inquiry.project_details}</td>
                    </tr>
                    <tr>
                        <th>Inquiry Date</th>
                        <td>{contact_inquiry.created_at.strftime('%B %d, %Y at %I:%M %p')}</td>
                    </tr>
                </table>
                
                <p><strong>Next Steps:</strong></p>
                <ul>
                    <li>Review the inquiry details above</li>
                    <li>Respond to the client within 24 hours</li>
                    <li>Update the inquiry status in the admin panel</li>
                    <li>Schedule a follow-up call if qualified</li>
                </ul>
            </div>
            
            <div class="footer">
                <p>This email was automatically generated from the Deployed website contact form.</p>
                <p>To manage this inquiry, please log in to the admin panel.</p>
            </div>
        </body>
        </html>
        """
        
        # Create plain text version
        plain_message = f"""
        New Contact Inquiry - Deployed
        
        Contact Information:
        - Name: {contact_inquiry.full_name}
        - Email: {contact_inquiry.email}
        - Phone: {contact_inquiry.phone_number}
        - Country: {contact_inquiry.country.name}
        
        Company Information:
        - Company: {contact_inquiry.company_name}
        - Website: {contact_inquiry.company_url or 'Not provided'}
        - Region: {contact_inquiry.get_region_display()}
        
        Project Information:
        - Budget: {contact_inquiry.budget}
        - Services: {contact_inquiry.services}
        - Details: {contact_inquiry.project_details}
        
        Inquiry Details:
        - Date: {contact_inquiry.created_at.strftime('%B %d, %Y at %I:%M %p')}
        
        Please respond to this inquiry within 24 hours.
        """
        
        send_mail(
            subject=subject,
            message=plain_message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=settings.CONTACT_EMAIL_RECIPIENTS,
            html_message=html_message,
            fail_silently=False,
        )
        print(f"Email sent successfully to {settings.CONTACT_EMAIL_RECIPIENTS}")  # Debug log
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            contact_inquiry = form.save()
            
            # Send email notification
            email_sent = send_contact_email(contact_inquiry)
            
            if email_sent:
                contact_inquiry.email_sent = True
                contact_inquiry.email_sent_at = timezone.now()
                contact_inquiry.save(update_fields=['email_sent', 'email_sent_at'])
                messages.success(request, 'Thank you for your inquiry! We will get back to you soon.')
            else:
                messages.success(request, 'Thank you for your inquiry! We have received your message and will get back to you soon.')
            
            return redirect('main:contact')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = ContactForm()
    
    context = {
        'form': form,
        'settings': settings,
    }
    return render(request, 'main/contact.html', context)

@csrf_exempt
@require_http_methods(["POST"])
def contact_ajax(request):
    """Handle AJAX contact form submission"""
    try:
        form = ContactForm(request.POST)
        if form.is_valid():
            contact_inquiry = form.save()
            
            # Send email notification
            email_sent = send_contact_email(contact_inquiry)
            
            if email_sent:
                contact_inquiry.email_sent = True
                contact_inquiry.email_sent_at = timezone.now()
                contact_inquiry.save(update_fields=['email_sent', 'email_sent_at'])
            
            return JsonResponse({
                'success': True,
                'message': 'Thank you for your inquiry! We will get back to you soon.'
            })
        else:
            return JsonResponse({
                'success': False,
                'message': 'Please correct the errors in the form.',
                'errors': form.errors
            })
    except Exception as e:
        return JsonResponse({
            'success': False,
            'message': 'An error occurred. Please try again.'
        })

@csrf_exempt
@require_http_methods(["POST"])
def contact_submit(request):
    """Handle contact form submission from home page"""
    try:
        print("Contact form submission started")  # Debug log
        print(f"POST data: {request.POST}")  # Debug log
        
        # Verify reCAPTCHA first
        recaptcha_response = request.POST.get('g-recaptcha-response')
        print(f"reCAPTCHA response: {recaptcha_response}")  # Debug log
        
        if not recaptcha_response:
            return JsonResponse({
                'success': False,
                'message': 'Please complete the reCAPTCHA verification.'
            })
        
        if not verify_recaptcha(recaptcha_response):
            return JsonResponse({
                'success': False,
                'message': 'reCAPTCHA verification failed. Please try again.'
            })
        
        # Validate required fields
        required_fields = [
            'first_name', 'last_name', 'email', 'country', 'phone_number',
            'budget', 'company_name', 'region', 'project_details'
        ]
        
        for field in required_fields:
            if not request.POST.get(field, '').strip():
                return JsonResponse({
                    'success': False,
                    'message': f'{field.replace("_", " ").title()} is required.'
                })
        
        # Check if at least one service is selected
        services = request.POST.getlist('services')
        print(f"Selected services: {services}")  # Debug log
        
        if not services:
            return JsonResponse({
                'success': False,
                'message': 'Please select at least one service you are interested in.'
            })
        
        # Validate email format
        email = request.POST.get('email')
        if email:
            email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
            if not re.match(email_pattern, email):
                return JsonResponse({
                    'success': False,
                    'message': 'Please enter a valid email address.'
                })
        
        # Validate country code
        country_code = request.POST.get('country')
        if country_code not in dict(countries):
            return JsonResponse({
                'success': False,
                'message': 'Please select a valid country.'
            })
        
        # Prepare data for saving
        data = {
            'first_name': request.POST.get('first_name').strip(),
            'last_name': request.POST.get('last_name').strip(),
            'email': request.POST.get('email').lower().strip(),
            'country': country_code,
            'phone_number': request.POST.get('phone_number').strip(),
            'budget': request.POST.get('budget').strip(),
            'company_name': request.POST.get('company_name').strip(),
            'company_url': request.POST.get('company_url', '').strip(),
            'region': request.POST.get('region'),
            'project_details': request.POST.get('project_details').strip(),
            'services': ', '.join(services),
        }
        
        # Clean company URL
        if data['company_url'] and not data['company_url'].startswith(('http://', 'https://')):
            data['company_url'] = 'https://' + data['company_url']
        
        print(f"Data to save: {data}")  # Debug log
        
        # Create contact inquiry
        contact_inquiry = ContactInquiry.objects.create(**data)
        print(f"Contact inquiry created with ID: {contact_inquiry.id}")  # Debug log
        
        # Send email notification
        email_sent = send_contact_email(contact_inquiry)
        
        if email_sent:
            contact_inquiry.email_sent = True
            contact_inquiry.email_sent_at = timezone.now()
            contact_inquiry.save(update_fields=['email_sent', 'email_sent_at'])
            print("Email sent and status updated")  # Debug log
        
        return JsonResponse({
            'success': True,
            'message': 'Thank you for your inquiry! We will get back to you soon.'
        })
        
    except Exception as e:
        print(f"Error in contact_submit: {e}")
        import traceback
        traceback.print_exc()  # Print full error traceback
        return JsonResponse({
            'success': False,
            'message': 'An error occurred. Please try again.'
        })