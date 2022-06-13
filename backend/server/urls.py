from django.urls import include, path

from . import views

urlpatterns = [
    path("", views.hello),
    path("attributes/", include("attributes.urls")),
    path("chat/", include("chat.urls")),
    path("core/", include("core.urls")),
    path("ratings/", include("ratings.urls")),
]
