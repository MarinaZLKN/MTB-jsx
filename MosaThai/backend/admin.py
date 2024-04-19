from django import forms
from django.contrib import admin
from .models import (
    Post,
    Trainer,
    Price,
    Merchandise,
    Feedback,
    TrainingRegistration,
    Contact,
    AboutUs,
    Size, Schedule, Category,
)

class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('name', 'date_created', 'email')

class TrainingRegistrationAdmin(admin.ModelAdmin):
    list_display = ('name', 'date_created')


admin.site.register(Post)
admin.site.register(Trainer)
admin.site.register(Price)
admin.site.register(Merchandise)
admin.site.register(Feedback, FeedbackAdmin)
admin.site.register(TrainingRegistration)
admin.site.register(Contact)
admin.site.register(AboutUs)
admin.site.register(Size)
admin.site.register(Schedule)
admin.site.register(Category)

