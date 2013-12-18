from django.db import models
from django.contrib.auth.models import AbstractUser

from rest_framework.authtoken.models import Token


class User(AbstractUser):

    full_name = models.CharField(max_length=150, default='')
    short_name = models.CharField(
        max_length=50,
        default='',
        help_text='How would you like to be addressed?',
    )

    def get_auth_token(self):
        token, created = Token.objects.get_or_create(user=self)
        return token.key
