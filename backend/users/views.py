from django.contrib.auth import logout as django_logout

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.decorators import authentication_classes
from rest_framework import status, exceptions
from rest_framework.generics import RetrieveAPIView
from django_browserid import verify, get_audience

from backend.users.models import User
from backend.users.serializers import UserSerializer


@api_view(['GET'])
def get_auth_token(request):

    if request.user.is_authenticated:
        return Response(
            request.user.get_auth_token(),
            status.HTTP_200_OK
        )
        raise exceptions.NotAuthenticated()


@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def login(request):
    assertion = request.POST.get('assertion', None)
    if not assertion:
        return Response(
            'assertion parameter is missing',
            status.HTTP_400_BAD_REQUEST
        )
    audience = get_audience(request)
    response = verify(assertion, audience)
    if response['status'] == 'okay':
        return Response({'email': response['email']})
    return Response(
        'Mozilla Persona assertion failed',
        status.HTTP_500_INTERNAL_SERVER_ERROR
    )


@api_view(['POST'])
def logout(request):
    django_logout(request)
    return Response()


class UserDetailAPIView(RetrieveAPIView):

    model = User
    serializer_class = UserSerializer
