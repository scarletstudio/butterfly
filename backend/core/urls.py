from core.views import view_user
from django.urls import path

urlpatterns = [
    path("user", view_user),
]
