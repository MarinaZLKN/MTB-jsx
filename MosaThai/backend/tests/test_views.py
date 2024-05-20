import pytest
from rest_framework.test import APIClient
from rest_framework import status
from django.core import mail

@pytest.mark.django_db
def test_create_training_registration():
    client = APIClient()
    url = "http://127.0.0.1:8000/v1/registrations/"
    data = {
        'name': 'Test Name',
        'email': 'test@example.com',
        'phone_number': '123456789',
        'level': 'beginner',
        'parent_name': 'Parent Name',
        'age': 10
    }

    response = client.post(url, data, format='json')
    assert response.status_code == status.HTTP_201_CREATED
    assert len(mail.outbox) == 1
    assert mail.outbox[0].subject == 'Uus trenni registreerimine'
    assert 'Test Name' in mail.outbox[0].body


