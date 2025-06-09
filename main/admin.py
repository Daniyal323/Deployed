from django.contrib import admin
from django.utils.html import format_html
from django.utils import timezone
from .models import Service, TeamMember, ContactInquiry

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'is_featured', 'is_active', 'order', 'created_at']
    list_filter = ['is_featured', 'is_active', 'created_at']
    list_editable = ['is_featured', 'is_active', 'order']
    search_fields = ['name', 'description']
    ordering = ['order', 'name']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'image', 'icon')
        }),
        ('Display Options', {
            'fields': ('is_featured', 'is_active', 'order')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'designation', 'is_leadership', 'is_active', 'order', 'joined_date']
    list_filter = ['designation', 'is_leadership', 'is_active', 'joined_date']
    list_editable = ['is_leadership', 'is_active', 'order']
    search_fields = ['first_name', 'last_name', 'designation', 'bio']
    ordering = ['order', 'first_name', 'last_name']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Personal Information', {
            'fields': ('first_name', 'last_name', 'designation', 'bio', 'image')
        }),
        ('Social Links', {
            'fields': ('linkedin_url', 'twitter_url', 'github_url'),
            'classes': ('collapse',)
        }),
        ('Display Options', {
            'fields': ('is_leadership', 'is_active', 'order', 'joined_date')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = [
        'full_name', 'email', 'company_name', 'region', 
        'status', 'priority', 'email_status', 'created_at'
    ]
    list_filter = [
        'status', 'priority', 'region', 'country', 'email_sent', 'created_at'
    ]
    list_editable = ['status', 'priority']
    search_fields = [
        'first_name', 'last_name', 'email', 'company_name', 
        'phone_number', 'project_details'
    ]
    ordering = ['-created_at']
    readonly_fields = [
        'created_at', 'updated_at', 'services_list', 
        'email_sent', 'email_sent_at'
    ]
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('first_name', 'last_name', 'email', 'country', 'phone_number')
        }),
        ('Company Information', {
            'fields': ('company_name', 'company_url', 'region')
        }),
        ('Project Details', {
            'fields': ('budget', 'services', 'services_list', 'project_details')
        }),
        ('Email Tracking', {
            'fields': ('email_sent', 'email_sent_at'),
            'classes': ('collapse',)
        }),
        ('Internal Tracking', {
            'fields': ('status', 'priority', 'assigned_to', 'notes', 'follow_up_date'),
            'classes': ('collapse',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at', 'contacted_at'),
            'classes': ('collapse',)
        }),
    )
    
    def get_queryset(self, request):
        return super().get_queryset(request).select_related()
    
    def services_list(self, obj):
        """Display services as a formatted list"""
        services = obj.services_list
        if services:
            return ', '.join(services)
        return 'None'
    services_list.short_description = 'Selected Services'
    
    def email_status(self, obj):
        """Display email status with color coding"""
        if obj.email_sent:
            return format_html(
                '<span style="color: green; font-weight: bold;">✓ Sent</span><br>'
                '<small style="color: gray;">{}</small>',
                obj.email_sent_at.strftime('%m/%d/%Y %I:%M %p') if obj.email_sent_at else 'Unknown'
            )
        else:
            return format_html('<span style="color: red; font-weight: bold;">✗ Not Sent</span>')
    email_status.short_description = 'Email Status'
    email_status.admin_order_field = 'email_sent'
    
    actions = [
        'mark_as_contacted', 'mark_as_qualified', 'mark_as_closed_won',
        'resend_notification_email', 'mark_high_priority'
    ]
    
    def mark_as_contacted(self, request, queryset):
        updated = queryset.update(
            status='contacted',
            contacted_at=timezone.now()
        )
        self.message_user(request, f'{updated} inquiries marked as contacted.')
    mark_as_contacted.short_description = 'Mark selected inquiries as contacted'
    
    def mark_as_qualified(self, request, queryset):
        updated = queryset.update(status='qualified')
        self.message_user(request, f'{updated} inquiries marked as qualified.')
    mark_as_qualified.short_description = 'Mark selected inquiries as qualified'
    
    def mark_as_closed_won(self, request, queryset):
        updated = queryset.update(status='closed_won')
        self.message_user(request, f'{updated} inquiries marked as closed won.')
    mark_as_closed_won.short_description = 'Mark selected inquiries as closed won'
    
    def mark_high_priority(self, request, queryset):
        updated = queryset.update(priority='high')
        self.message_user(request, f'{updated} inquiries marked as high priority.')
    mark_high_priority.short_description = 'Mark selected inquiries as high priority'
    
    def resend_notification_email(self, request, queryset):
        """Resend notification emails for selected inquiries"""
        from .views import send_contact_email
        
        success_count = 0
        for inquiry in queryset:
            if send_contact_email(inquiry):
                inquiry.email_sent = True
                inquiry.email_sent_at = timezone.now()
                inquiry.save(update_fields=['email_sent', 'email_sent_at'])
                success_count += 1
        
        if success_count > 0:
            self.message_user(
                request, 
                f'Successfully resent notification emails for {success_count} inquiries.'
            )
        else:
            self.message_user(
                request, 
                'Failed to resend notification emails. Please check email configuration.',
                level='ERROR'
            )
    resend_notification_email.short_description = 'Resend notification emails'

# Customize admin site header and title
admin.site.site_header = 'Deployed Admin'
admin.site.site_title = 'Deployed Admin Portal'
admin.site.index_title = 'Welcome to Deployed Administration'
