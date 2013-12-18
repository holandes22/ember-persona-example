from django.db import models
from backend.users.models import User


class Car(models.Model):

    user = models.ForeignKey(User, related_name='cars')
    brand = models.CharField(max_length=150)
    model = models.CharField(max_length=150)
