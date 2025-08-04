from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def get_dummy_data(request):
    data = {
        "name": "Vikas Prajapat",
        "referral_code": "vikas2025",
        "donations": 1200,
    }
    return JsonResponse(data)
