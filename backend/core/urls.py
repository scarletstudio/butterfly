from django.urls import path

from backend.core.views import view_join_community, view_user

urlpatterns = [
    path("user/<str:uid>", view_user),
    path("community/<str:community>/join/<str:uid>", view_join_community),
]
