from rest_framework.serializers import ModelSerializer

from backend.users.models import User


class UserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'full_name', 'short_name')
