from django.http import HttpResponse


def view_block_user(request):
    return HttpResponse(status=200)
