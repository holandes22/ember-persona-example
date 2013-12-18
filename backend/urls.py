from django.contrib import admin
from django.conf.urls import patterns, include, url

from backend.users.views import UserListAPIView, UserDetailAPIView
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
        r'^api/auth/login/$',
        'users.views.login',
        name='login',
    ),
    url(
        r'^api/users/$',
        UserListAPIView.as_view(),
        name='user-list',
    ),
    url(
        r'^api/users/(?P<pk>\d+/$)',
        UserDetailAPIView.as_view(),
        name='user-detail',
    ),
    # Admin
    url(r'^admin/', include(admin.site.urls)),
)
