from django.core.mail import send_mail
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Post, Trainer, Price, Merchandise, Feedback, TrainingRegistration, Contact, Schedule, \
    Category
from .serializers import (
    PostSerializer,
    TrainerSerializer,
    PriceSerializer,
    MerchandiseSerializer,
    FeedbackSerializer,
    TrainingRegistrationSerializer,
    ContactSerializer,
    ScheduleSerializer, CategorySerializer,
)


def main(request):
    return render(request, 'base.html')



class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class TrainerViewSet(viewsets.ModelViewSet):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer


class PriceViewSet(viewsets.ModelViewSet):
    queryset = Price.objects.all()
    serializer_class = PriceSerializer


class MerchandiseViewSet(viewsets.ModelViewSet):
    queryset = Merchandise.objects.all()
    serializer_class = MerchandiseSerializer


class MerchandiseByCategoryViewSet(viewsets.ViewSet):
    def list(self, request):
        merchandise = Merchandise.objects.all()
        categories_with_merchandise = {}
        for item in merchandise:
            category_id = item.category.id
            if category_id not in categories_with_merchandise:
                categories_with_merchandise[category_id] = {
                    'category_name': item.category.name,
                    'merchandise': []
                }
            categories_with_merchandise[category_id]['merchandise'].append(MerchandiseSerializer(item).data)

        return Response(categories_with_merchandise.values())


class FeedbackView(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = FeedbackSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

# class TrainingRegistrationViewSet(viewsets.ModelViewSet):
#     queryset = TrainingRegistration.objects.all()
#     serializer_class = TrainingRegistrationSerializer



class TrainingRegistrationViewSet(viewsets.ModelViewSet):
    queryset = TrainingRegistration.objects.all()
    serializer_class = TrainingRegistrationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            instance = serializer.instance

            subject = 'Uus trenni registreerimine'
            message = f'Nimi: {instance.name}\nEmail: {instance.email}\nTelefoni number: {instance.phone_number}\nLevel: {instance.level}\nLapsevanema nimi: {instance.parent_name}\nVanus: {instance.age}'

            sender_email = instance.email
            send_mail(
                subject,
                message,
                sender_email,
                ['grenkabulka@gmail.com'],  # here will be mosa.thai.boxing@gmail.com
                fail_silently=False,
            )

            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer