from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('services/', views.services, name='services'),
    path('services/website-development/', views.web_development, name='web_development'),
    path('careers/', views.careers, name='careers'),
    path('contact/', views.contact, name='contact'),
    path('contact/ajax/', views.contact_ajax, name='contact_ajax'),
    path('contact-submit/', views.contact_submit, name='contact_submit'),
    path('api/contact', views.contact_submit, name='api_contact'),
]
