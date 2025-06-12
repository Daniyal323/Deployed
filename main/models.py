from django.db import models
from django_countries.fields import CountryField

class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='services/', blank=True, null=True)
    icon = models.CharField(max_length=50, blank=True, help_text="CSS class for icon")
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0, help_text="Order for display")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return self.name

class TeamMember(models.Model):
    DESIGNATION_CHOICES = [
        ('ceo', 'Chief Executive Officer'),
        ('cto', 'Chief Technology Officer'),
        ('cfo', 'Chief Financial Officer'),
        ('coo', 'Chief Operating Officer'),
        ('vp_engineering', 'VP of Engineering'),
        ('vp_sales', 'VP of Sales'),
        ('director', 'Director'),
        ('senior_manager', 'Senior Manager'),
        ('manager', 'Manager'),
        ('team_lead', 'Team Lead'),
        ('senior_developer', 'Senior Developer'),
        ('developer', 'Developer'),
        ('designer', 'Designer'),
        ('other', 'Other'),
    ]

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    designation = models.CharField(max_length=50, choices=DESIGNATION_CHOICES)
    bio = models.TextField()
    image = models.ImageField(upload_to='team/', blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    twitter_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    is_leadership = models.BooleanField(default=False, help_text="Show in leadership section")
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0, help_text="Order for display")
    joined_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'first_name', 'last_name']

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.get_designation_display()}"

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

class ContactInquiry(models.Model):
    REGION_CHOICES = [
        ('north-america', 'North America'),
        ('south-america', 'South America'),
        ('europe', 'Europe'),
        ('asia-pacific', 'Asia Pacific'),
        ('middle-east', 'Middle East'),
        ('africa', 'Africa'),
        ('oceania', 'Oceania'),
    ]

    STATUS_CHOICES = [
        ('new', 'New'),
        ('in_progress', 'In Progress'),
        ('contacted', 'Contacted'),
        ('qualified', 'Qualified'),
        ('proposal_sent', 'Proposal Sent'),
        ('closed_won', 'Closed Won'),
        ('closed_lost', 'Closed Lost'),
    ]

    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
        ('urgent', 'Urgent'),
    ]

    # Contact Information
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    country = CountryField(default='US')
    phone_number = models.CharField(max_length=20)
    
    # Company Information
    company_name = models.CharField(max_length=200)
    company_url = models.URLField(blank=True, null=True)
    region = models.CharField(max_length=50, choices=REGION_CHOICES)
    
    # Project Information
    budget = models.CharField(max_length=200, help_text="Budget range or amount")
    services = models.TextField(help_text="Comma-separated list of selected services")
    project_details = models.TextField()
    
    # Internal tracking
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='medium')
    assigned_to = models.CharField(max_length=100, blank=True, null=True, help_text="Sales person assigned")
    notes = models.TextField(blank=True, null=True, help_text="Internal notes")
    
    # Email tracking
    email_sent = models.BooleanField(default=False, help_text="Whether notification email was sent")
    email_sent_at = models.DateTimeField(blank=True, null=True, help_text="When notification email was sent")
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    contacted_at = models.DateTimeField(blank=True, null=True)
    follow_up_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Contact Inquiry'
        verbose_name_plural = 'Contact Inquiries'

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.company_name}"

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    @property
    def services_list(self):
        """Return services as a list"""
        if self.services:
            return [service.strip() for service in self.services.split(',')]
        return []

    def get_status_color(self):
        """Return color class for status"""
        status_colors = {
            'new': 'blue',
            'in_progress': 'yellow',
            'contacted': 'purple',
            'qualified': 'green',
            'proposal_sent': 'orange',
            'closed_won': 'green',
            'closed_lost': 'red',
        }
        return status_colors.get(self.status, 'gray')

    def get_priority_color(self):
        """Return color class for priority"""
        priority_colors = {
            'low': 'green',
            'medium': 'yellow',
            'high': 'orange',
            'urgent': 'red',
        }
        return priority_colors.get(self.priority, 'gray')

class BlogPost(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('archived', 'Archived'),
    ]

    CATEGORY_CHOICES = [
        ('technology', 'Technology'),
        ('development', 'Development'),
        ('design', 'Design'),
        ('business', 'Business'),
        ('ai', 'Artificial Intelligence'),
        ('cloud', 'Cloud Computing'),
        ('mobile', 'Mobile Development'),
        ('web', 'Web Development'),
        ('gaming', 'Gaming'),
        ('startup', 'Startup'),
        ('case_study', 'Case Study'),
        ('tutorial', 'Tutorial'),
        ('news', 'News'),
        ('other', 'Other'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    excerpt = models.TextField(max_length=300, help_text="Brief description for previews")
    content = models.TextField()
    featured_image = models.ImageField(upload_to='blog/', blank=True, null=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='technology')
    tags = models.CharField(max_length=200, blank=True, help_text="Comma-separated tags")
    author = models.CharField(max_length=100, default="Deployed Team")
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    is_featured = models.BooleanField(default=False)
    read_time = models.PositiveIntegerField(default=5, help_text="Estimated read time in minutes")
    views = models.PositiveIntegerField(default=0)
    published_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-published_at', '-created_at']

    def __str__(self):
        return self.title

    @property
    def tags_list(self):
        """Return tags as a list"""
        if self.tags:
            return [tag.strip() for tag in self.tags.split(',')]
        return []

class CaseStudy(models.Model):
    INDUSTRY_CHOICES = [
        ('healthcare', 'Healthcare'),
        ('fintech', 'Fintech'),
        ('ecommerce', 'E-commerce'),
        ('gaming', 'Gaming'),
        ('education', 'Education'),
        ('travel', 'Travel & Hospitality'),
        ('retail', 'Retail'),
        ('manufacturing', 'Manufacturing'),
        ('real_estate', 'Real Estate'),
        ('logistics', 'Logistics'),
        ('energy', 'Energy'),
        ('government', 'Government'),
        ('nonprofit', 'Non-profit'),
        ('startup', 'Startup'),
        ('enterprise', 'Enterprise'),
        ('other', 'Other'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    client_name = models.CharField(max_length=100)
    industry = models.CharField(max_length=20, choices=INDUSTRY_CHOICES)
    project_duration = models.CharField(max_length=50, help_text="e.g., '6 months', '1 year'")
    team_size = models.CharField(max_length=50, help_text="e.g., '5-8 developers'")
    
    # Content sections
    challenge = models.TextField(help_text="What was the problem/challenge?")
    solution = models.TextField(help_text="How did we solve it?")
    results = models.TextField(help_text="What were the outcomes/results?")
    
    # Technologies used
    technologies = models.TextField(help_text="Comma-separated list of technologies")
    services_provided = models.TextField(help_text="Comma-separated list of services")
    
    # Media
    featured_image = models.ImageField(upload_to='case_studies/', blank=True, null=True)
    before_image = models.ImageField(upload_to='case_studies/before/', blank=True, null=True)
    after_image = models.ImageField(upload_to='case_studies/after/', blank=True, null=True)
    
    # Metrics
    performance_improvement = models.CharField(max_length=100, blank=True, help_text="e.g., '50% faster load times'")
    cost_savings = models.CharField(max_length=100, blank=True, help_text="e.g., '30% cost reduction'")
    user_satisfaction = models.CharField(max_length=100, blank=True, help_text="e.g., '95% user satisfaction'")
    
    # Status and metadata
    is_featured = models.BooleanField(default=False)
    is_published = models.BooleanField(default=False)
    client_testimonial = models.TextField(blank=True, null=True)
    client_position = models.CharField(max_length=100, blank=True, null=True)
    project_url = models.URLField(blank=True, null=True, help_text="Live project URL if available")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Case Study'
        verbose_name_plural = 'Case Studies'

    def __str__(self):
        return f"{self.title} - {self.client_name}"

    @property
    def technologies_list(self):
        """Return technologies as a list"""
        if self.technologies:
            return [tech.strip() for tech in self.technologies.split(',')]
        return []

    @property
    def services_list(self):
        """Return services as a list"""
        if self.services_provided:
            return [service.strip() for service in self.services_provided.split(',')]
        return []

class Career(models.Model):
    EMPLOYMENT_TYPE_CHOICES = [
        ('full_time', 'Full Time'),
        ('part_time', 'Part Time'),
        ('contract', 'Contract'),
        ('internship', 'Internship'),
        ('freelance', 'Freelance'),
    ]

    EXPERIENCE_LEVEL_CHOICES = [
        ('entry', 'Entry Level'),
        ('junior', 'Junior'),
        ('mid', 'Mid Level'),
        ('senior', 'Senior'),
        ('lead', 'Lead'),
        ('principal', 'Principal'),
        ('director', 'Director'),
    ]

    DEPARTMENT_CHOICES = [
        ('engineering', 'Engineering'),
        ('design', 'Design'),
        ('product', 'Product'),
        ('sales', 'Sales'),
        ('marketing', 'Marketing'),
        ('hr', 'Human Resources'),
        ('finance', 'Finance'),
        ('operations', 'Operations'),
        ('customer_success', 'Customer Success'),
        ('qa', 'Quality Assurance'),
        ('devops', 'DevOps'),
        ('data', 'Data Science'),
        ('security', 'Security'),
        ('other', 'Other'),
    ]

    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    department = models.CharField(max_length=20, choices=DEPARTMENT_CHOICES)
    employment_type = models.CharField(max_length=15, choices=EMPLOYMENT_TYPE_CHOICES, default='full_time')
    experience_level = models.CharField(max_length=15, choices=EXPERIENCE_LEVEL_CHOICES)
    location = models.CharField(max_length=100, help_text="e.g., 'Remote', 'San Francisco, CA', 'Hybrid'")
    salary_range = models.CharField(max_length=100, blank=True, help_text="e.g., '$80,000 - $120,000'")
    
    # Job details
    description = models.TextField()
    responsibilities = models.TextField(help_text="Key responsibilities and duties")
    requirements = models.TextField(help_text="Required skills and qualifications")
    nice_to_have = models.TextField(blank=True, help_text="Preferred but not required skills")
    benefits = models.TextField(blank=True, help_text="Benefits and perks")
    
    # Application details
    application_deadline = models.DateField(blank=True, null=True)
    application_email = models.EmailField(blank=True, null=True)
    application_url = models.URLField(blank=True, null=True)
    
        # Status
    is_active = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False, help_text="Show in featured jobs section")
    is_remote = models.BooleanField(default=False)
    is_urgent = models.BooleanField(default=False)
    
    # Metadata
    posted_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    views = models.PositiveIntegerField(default=0)
    applications_count = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['-posted_date']
        verbose_name = 'Career Opening'
        verbose_name_plural = 'Career Openings'

    def __str__(self):
        return f"{self.title} - {self.get_department_display()}"

    @property
    def is_deadline_approaching(self):
        """Check if application deadline is within 7 days"""
        if self.application_deadline:
            from datetime import date, timedelta
            return self.application_deadline <= date.today() + timedelta(days=7)
        return False

class JobApplication(models.Model):
    STATUS_CHOICES = [
        ('submitted', 'Submitted'),
        ('under_review', 'Under Review'),
        ('shortlisted', 'Shortlisted'),
        ('interview_scheduled', 'Interview Scheduled'),
        ('interviewed', 'Interviewed'),
        ('offer_extended', 'Offer Extended'),
        ('hired', 'Hired'),
        ('rejected', 'Rejected'),
        ('withdrawn', 'Withdrawn'),
    ]

    # Job and applicant info
    career = models.ForeignKey(Career, on_delete=models.CASCADE, related_name='applications')
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    country = CountryField()
    
    # Application materials
    resume = models.FileField(upload_to='resumes/', help_text="Upload your resume (PDF preferred)")
    cover_letter = models.TextField(blank=True, null=True)
    portfolio_url = models.URLField(blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    
    # Experience and details
    years_of_experience = models.PositiveIntegerField(help_text="Total years of relevant experience")
    current_salary = models.CharField(max_length=100, blank=True, help_text="Current salary (optional)")
    expected_salary = models.CharField(max_length=100, blank=True, help_text="Expected salary")
    notice_period = models.CharField(max_length=100, blank=True, help_text="Notice period or availability")
    
    # Additional questions
    why_interested = models.TextField(help_text="Why are you interested in this position?")
    additional_info = models.TextField(blank=True, null=True, help_text="Any additional information")
    
    # Internal tracking
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='submitted')
    recruiter_notes = models.TextField(blank=True, null=True)
    interview_date = models.DateTimeField(blank=True, null=True)
    rating = models.PositiveIntegerField(blank=True, null=True, help_text="Rating out of 5")
    
    # Timestamps
    submitted_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-submitted_at']
        unique_together = ['career', 'email']  # Prevent duplicate applications

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.career.title}"

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    def get_status_color(self):
        """Return color class for status"""
        status_colors = {
            'submitted': 'blue',
            'under_review': 'yellow',
            'shortlisted': 'purple',
            'interview_scheduled': 'orange',
            'interviewed': 'orange',
            'offer_extended': 'green',
            'hired': 'green',
            'rejected': 'red',
            'withdrawn': 'gray',
        }
        return status_colors.get(self.status, 'gray')

class Newsletter(models.Model):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    is_active = models.BooleanField(default=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)
    unsubscribed_at = models.DateTimeField(blank=True, null=True)
    source = models.CharField(max_length=100, blank=True, help_text="Where they subscribed from")

    class Meta:
        ordering = ['-subscribed_at']

    def __str__(self):
        return self.email

class Testimonial(models.Model):
    client_name = models.CharField(max_length=100)
    client_position = models.CharField(max_length=100)
    client_company = models.CharField(max_length=100)
    client_image = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    testimonial_text = models.TextField()
    rating = models.PositiveIntegerField(default=5, help_text="Rating out of 5")
    project_type = models.CharField(max_length=100, blank=True, help_text="Type of project")
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return f"{self.client_name} - {self.client_company}"

class FAQ(models.Model):
    CATEGORY_CHOICES = [
        ('general', 'General'),
        ('services', 'Services'),
        ('pricing', 'Pricing'),
        ('process', 'Process'),
        ('support', 'Support'),
        ('careers', 'Careers'),
        ('technical', 'Technical'),
        ('other', 'Other'),
    ]

    question = models.CharField(max_length=200)
    answer = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='general')
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'question']
        verbose_name = 'FAQ'
        verbose_name_plural = 'FAQs'

    def __str__(self):
        return self.question

class CompanyInfo(models.Model):
    """Singleton model for company information"""
    
    # Company details
    company_name = models.CharField(max_length=100, default="Deployed")
    tagline = models.CharField(max_length=200, default="Engineering Next-Gen Software")
    description = models.TextField(default="We help startups and enterprises deploy scalable, secure, and impactful digital products.")
    
    # Contact information
    email = models.EmailField(default="business@deployed.com")
    phone = models.CharField(max_length=20, blank=True)
    address = models.TextField(blank=True)
    
    # Social media
    linkedin_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    facebook_url = models.URLField(blank=True)
    instagram_url = models.URLField(blank=True)
    youtube_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    
    # Statistics
    projects_completed = models.PositiveIntegerField(default=50)
    happy_clients = models.PositiveIntegerField(default=25)
    team_members = models.PositiveIntegerField(default=15)
    client_satisfaction = models.PositiveIntegerField(default=99, help_text="Percentage")
    
    # SEO
    meta_title = models.CharField(max_length=60, blank=True)
    meta_description = models.CharField(max_length=160, blank=True)
    
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Company Information'
        verbose_name_plural = 'Company Information'

    def __str__(self):
        return self.company_name

    def save(self, *args, **kwargs):
        # Ensure only one instance exists
        if not self.pk and CompanyInfo.objects.exists():
            raise ValueError('Only one CompanyInfo instance is allowed')
        super().save(*args, **kwargs)

    @classmethod
    def get_instance(cls):
        """Get or create the singleton instance"""
        instance, created = cls.objects.get_or_create(pk=1)
        return instance

class SiteSettings(models.Model):
    """Site-wide settings"""
    
    # reCAPTCHA
    recaptcha_site_key = models.CharField(max_length=100, blank=True)
    recaptcha_secret_key = models.CharField(max_length=100, blank=True)
    
    # Email settings
    contact_email = models.EmailField(default="business@deployed.com")
    careers_email = models.EmailField(default="careers@deployed.com")
    support_email = models.EmailField(default="support@deployed.com")
    
    # Features
    enable_blog = models.BooleanField(default=True)
    enable_careers = models.BooleanField(default=True)
    enable_newsletter = models.BooleanField(default=True)
    enable_testimonials = models.BooleanField(default=True)
    
    # Maintenance
    maintenance_mode = models.BooleanField(default=False)
    maintenance_message = models.TextField(blank=True, default="We're currently performing maintenance. Please check back soon!")
    
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Site Settings'
        verbose_name_plural = 'Site Settings'

    def __str__(self):
        return "Site Settings"

    def save(self, *args, **kwargs):
        # Ensure only one instance exists
        if not self.pk and SiteSettings.objects.exists():
            raise ValueError('Only one SiteSettings instance is allowed')
        super().save(*args, **kwargs)

    @classmethod
    def get_instance(cls):
        """Get or create the singleton instance"""
        instance, created = cls.objects.get_or_create(pk=1)
        return instance

