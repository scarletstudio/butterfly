from chat.views import view_block_user
from django.urls import path

urlpatterns = [
    path("block_user", view_block_user),
]
