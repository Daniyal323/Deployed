from django import forms
from django_countries.fields import CountryField
from django_countries.widgets import CountrySelectWidget
from captcha.fields import ReCaptchaField
from captcha.widgets import ReCaptchaV2Checkbox
from .models import ContactInquiry

class ContactForm(forms.ModelForm):
    country = CountryField().formfield(
        widget=CountrySelectWidget(attrs={
            'class': 'form-select country-select',
            'id': 'countryCode'
        })
    )
    
    services = forms.MultipleChoiceField(
        choices=[
            ('Remote IT Resources', 'Remote IT Resources'),
            ('Custom Software Development', 'Custom Software Development'),
            ('Web Development', 'Web Development'),
            ('Mobile App Development', 'Mobile App Development'),
            ('AR/VR', 'AR/VR'),
            ('Gaming', 'Gaming'),
            ('Other IT Services', 'Other IT Services'),
        ],
        widget=forms.CheckboxSelectMultiple(attrs={
            'class': 'services-checkboxes'
        }),
        required=True,
        error_messages={
            'required': 'Please select at least one service you are interested in.'
        }
    )
    
    captcha = ReCaptchaField(
        widget=ReCaptchaV2Checkbox(
            attrs={
                'data-theme': 'light',
                'data-size': 'normal',
            }
        ),
        error_messages={
            'required': 'Please complete the reCAPTCHA verification.',
            'invalid': 'reCAPTCHA verification failed. Please try again.'
        }
    )

    class Meta:
        model = ContactInquiry
        fields = [
            'first_name', 'last_name', 'email', 'country', 'phone_number',
            'budget', 'company_name', 'company_url', 'region', 'services',
            'project_details', 'captcha'
        ]
        widgets = {
            'first_name': forms.TextInput(attrs={
                'class': 'form-input',
                'placeholder': 'Enter your first name',
                'required': True
            }),
            'last_name': forms.TextInput(attrs={
                'class': 'form-input',
                'placeholder': 'Enter your last name',
                'required': True
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-input',
                'placeholder': 'Enter your email address',
                'required': True
            }),
            'phone_number': forms.TextInput(attrs={
                'class': 'form-input phone-input',
                'placeholder': 'Enter your phone number',
                'required': True
            }),
            'budget': forms.TextInput(attrs={
                'class': 'form-input',
                'placeholder': 'Enter your budget range (e.g., $10,000 - $50,000)',
                'required': True
            }),
            'company_name': forms.TextInput(attrs={
                'class': 'form-input',
                'placeholder': 'Enter your company name',
                'required': True
            }),
            'company_url': forms.URLInput(attrs={
                'class': 'form-input',
                'placeholder': 'https://example.com (optional)'
            }),
            'region': forms.Select(attrs={
                'class': 'form-select',
                'required': True
            }),
            'project_details': forms.Textarea(attrs={
                'class': 'form-textarea',
                'placeholder': 'Tell us about your project requirements, timeline, and any specific needs...',
                'rows': 5,
                'required': True
            }),
        }
        error_messages = {
            'first_name': {
                'required': 'First name is required.',
                'max_length': 'First name must be less than 100 characters.'
            },
            'last_name': {
                'required': 'Last name is required.',
                'max_length': 'Last name must be less than 100 characters.'
            },
            'email': {
                'required': 'Email address is required.',
                'invalid': 'Please enter a valid email address.'
            },
            'phone_number': {
                'required': 'Phone number is required.'
            },
            'company_name': {
                'required': 'Company name is required.'
            },
            'budget': {
                'required': 'Budget information is required.'
            },
            'region': {
                'required': 'Please select your region.'
            },
            'project_details': {
                'required': 'Project details are required.'
            }
        }

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if email:
            email = email.lower().strip()
        return email

    def clean_phone_number(self):
        phone = self.cleaned_data.get('phone_number')
        if phone:
            # Remove any non-digit characters except + and spaces
            import re
            phone = re.sub(r'[^\d\+\s\-\(\)]', '', phone)
        return phone

    def clean_company_url(self):
        url = self.cleaned_data.get('company_url')
        if url and not url.startswith(('http://', 'https://')):
            url = 'https://' + url
        return url

    def save(self, commit=True):
        instance = super().save(commit=False)
        # Convert services list to comma-separated string
        if isinstance(self.cleaned_data['services'], list):
            instance.services = ', '.join(self.cleaned_data['services'])
        if commit:
            instance.save()
        return instance
