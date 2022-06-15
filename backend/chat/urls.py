from django.urls import path

from backend.chat.views import view_block_user

urlpatterns = [
    path("block_user", view_block_user),
]
