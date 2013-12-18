from rest_framework.serializers import ModelSerializer

from backend.cars.models import Car


class CarSerializer(ModelSerializer):

    class Meta:
        model = Car
        read_only_fields = ('user',)
