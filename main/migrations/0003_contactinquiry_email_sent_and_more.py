# Generated by Django 5.2.1 on 2025-06-09 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_blogpost_career_casestudy_companyinfo_faq_newsletter_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactinquiry',
            name='email_sent',
            field=models.BooleanField(default=False, help_text='Whether notification email was sent'),
        ),
        migrations.AddField(
            model_name='contactinquiry',
            name='email_sent_at',
            field=models.DateTimeField(blank=True, help_text='When notification email was sent', null=True),
        ),
    ]
