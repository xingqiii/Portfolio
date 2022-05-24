from django.urls import path
from .views import Back_endView
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView)

urlpatterns = [
    path('api-token/', TokenObtainPairView.as_view()),
    path('api-token-refresh/', TokenRefreshView.as_view()),
    path('back_end/', Back_endView.as_view(), name='Back_end_view')
]
