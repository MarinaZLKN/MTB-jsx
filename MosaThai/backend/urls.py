from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import main, TrainerViewSet, PriceViewSet, MerchandiseViewSet, FeedbackViewSet, \
    TrainingRegistrationViewSet, ContactViewSet, CategoryViewSet, PostViewSet, ScheduleViewSet, \
    MerchandiseByCategoryViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'trainers', TrainerViewSet)
router.register(r'prices', PriceViewSet)
router.register(r'merchandise', MerchandiseViewSet)
router.register(r'feedbacks', FeedbackViewSet)
router.register(r'registrations', TrainingRegistrationViewSet)
router.register(r'contacts', ContactViewSet)
router.register(r'category', CategoryViewSet)
router.register(r'shedule', ScheduleViewSet)
router.register(r'merchandise-by-category', MerchandiseByCategoryViewSet, basename='merchandise-by-category')


urlpatterns = [
    path('', main),
    path('v1/', include(router.urls)),
]