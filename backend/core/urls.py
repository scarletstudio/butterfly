from django.urls import path

from . import views

urlpatterns = [
    path("user/<str:uid>", views.user.view_user),
]
