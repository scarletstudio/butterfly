from django.urls import path

from backend.attributes.views import view_attribute, view_update_attribute

urlpatterns = [
    path("users/<str:uid>/<str:attribute>", view_attribute),
    path("users/<str:uid>/<str:attribute>/<str:code>", view_update_attribute),
]
