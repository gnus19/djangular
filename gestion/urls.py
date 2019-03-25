"""gestion URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from rest_framework.routers import SimpleRouter
from rest_framework.authtoken.views import obtain_auth_token

from app import views

# Rest Simple Router
router = SimpleRouter()
router.register(r'users', views.UserViewSet)

# The API URLs are now determined automatically by the router
urlpatterns = [
	url(r'^admin/', admin.site.urls),
	url(r'^api/', include(router.urls)),
	url(r'^api/get_auth_token/', obtain_auth_token),
    url(r'^login/', views.LoginView.as_view()),
] + staticfiles_urlpatterns()
