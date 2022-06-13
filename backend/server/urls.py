from django.urls import include, path

from . import views

urlpatterns = [
    path("", views.hello),
    path("attributes/", include("attributes.urls")),
    path("chat/", include("chat.urls")),
    path("ratings/", include("ratings.urls")),
]
