from rest_framework.generics import ListAPIView
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticated

from backend.cars.models import Car
from backend.cars.serializers import CarSerializer
from backend.users.permissions import CarOwnerPermission


class CarListAPIView(ListAPIView):

    model = Car
    serializer_class = CarSerializer

    #def get_queryset(self):
    #    return Car.objects.filter(user=self.request.user)


class CarDetailAPIView(RetrieveAPIView):

    model = Car
    serializer_class = CarSerializer
    #permission_classes = (IsAuthenticated, CarOwnerPermission)
