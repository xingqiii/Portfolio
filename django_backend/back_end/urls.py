from django.urls import path

from rest_framework import routers

from .views import Back_endView


urlpatterns = [
    path('back_end/', Back_endView.as_view(), name='Back_end_view')
]
