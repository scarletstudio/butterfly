from django.http import HttpResponse


def view_user(request):
    return HttpResponse(status=200)
