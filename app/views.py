from django.shortcuts import render
from django.contrib.auth import authenticate

# Rest Framework
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView

# import models
from django.contrib.auth.models import User

# Permissions
from rest_framework.permissions import IsAuthenticated
from .permissions import IsStaffOrTargetUser, CreateUserPermission

# import serializers
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	http_method_names = ['get', 'post', 'put', 'delete']
	permission_classes = (CreateUserPermission, )

class LoginView(APIView):
    ##authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = [permissions.AllowAny, ]

    def post(self, request, *args, **kwargs):
        data = request.data

        user = authenticate(username=data.get('username'), password=data.get('password'))

        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=200)
        return Response(status=400)
