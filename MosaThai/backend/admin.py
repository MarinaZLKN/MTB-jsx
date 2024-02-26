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
    MerchandisePhoto,
    Size, Schedule,
)

class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('name', 'date_created', 'email')


admin.site.register(Post)
admin.site.register(Trainer)
admin.site.register(Price)
admin.site.register(Merchandise)
admin.site.register(Feedback, FeedbackAdmin)
admin.site.register(TrainingRegistration)
admin.site.register(Contact)
admin.site.register(AboutUs)
admin.site.register(MerchandisePhoto)
admin.site.register(Size)
admin.site.register(Schedule)

