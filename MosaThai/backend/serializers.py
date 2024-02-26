from rest_framework import serializers
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


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = '__all__'


class TrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = '__all__'


class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = '__all__'


class MerchandisePhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MerchandisePhoto
        fields = '__all__'


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = '__all__'


class MerchandiseSerializer(serializers.ModelSerializer):
    photos = MerchandisePhotoSerializer(many=True, read_only=True)
    sizes = SizeSerializer(many=True, read_only=True)

    class Meta:
        model = Merchandise
        fields = '__all__'


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['name', 'email', 'phone_number', 'text']


class TrainingRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainingRegistration
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'


class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = '__all__'


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'