from django.contrib import admin
from django.conf import settings
from django.conf.urls import patterns, include, url

from backend.cars.views import CarListAPIView, CarDetailAPIView


admin.autodiscover()

urlpatterns = patterns(
    'backend',
    # API
    url(
        r'^api/cars/$',
        CarListAPIView.as_view(),
        name='car-list',
    ),
    url(
        r'^api/cars/(?P<pk>\d+)/$',
        CarDetailAPIView.as_view(),
        name='car-detail',
    ),
    url(
        r'^api/v1/user/auth/token/',
        'users.views.get_auth_token',
        name='token',
    ),
    url(
        r'^api/v1/user/auth/login/',
        'users.views.login',
        name='login',
    ),
    url(
        r'^api/v1/user/auth/logout/',
        'users.views.logout',
        name='logout',
    ),
    url(
        r'^api/v1/user/',
        UserDetailAPIView.as_view(),
        name='user-detail',
    ),
    # Admin
    url(r'^admin/', include(admin.site.urls)),
)
