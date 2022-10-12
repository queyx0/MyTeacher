from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.views import Response

# Create your views here.

class HomeAppView(APIView):
  def get(self, request, format=None):
    return Response({"nome": "Antonio", "idade": 23}, status=200)


