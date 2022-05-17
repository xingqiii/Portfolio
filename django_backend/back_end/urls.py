from django.urls import path

from rest_framework import routers

from .views import Back_endViewSet

router = routers.DefaultRouter()
router.register('back_end', Back_endViewSet)

urlpatterns = router.urls
