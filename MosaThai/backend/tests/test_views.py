import pytest
from rest_framework.test import APIClient
from rest_framework import status
from django.core import mail
from django.urls import reverse


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

@pytest.mark.django_db
def test_create_training_registration_bad_email():
    client = APIClient()
    url = "http://127.0.0.1:8000/v1/registrations/"
    bad_email_data = {
        'name': 'Test Name',
        'email': 'not-an-email',
        'phone_number': '123456789',
        'level': 'beginner',
        'parent_name': 'Parent Name',
        'age': 10
    }

    response = client.post(url, bad_email_data, format='json')
    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert 'email' in response.data

@pytest.mark.django_db
def test_create_training_registration_bad_phone_number():
    client = APIClient()
    url = "http://127.0.0.1:8000/v1/registrations/"
    bad_phone_data = {
        'name': 'Test Name',
        'email': 'test@example.com',
        'phone_number': '123ABC789',
        'level': 'beginner',
        'parent_name': 'Parent Name',
        'age': 10
    }

    response = client.post(url, bad_phone_data, format='json')
    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert 'phone_number' in response.data
@pytest.mark.django_db
def test_feedback_creation_success():
    client = APIClient()
    url = "http://127.0.0.1:8000/v1/feedbacks/"
    data = {
        'name': 'Random name',
        'email': 'test@example.com',
        'phone_number': '560485867',
        'text': 'This is a test feedback'
    }

    response = client.post(url, data, format='json')
    assert response.status_code == status.HTTP_201_CREATED
    assert 'name' in response.data
    assert 'text' in response.data
    assert response.data['email'] == 'test@example.com'
    assert response.data['phone_number'] == '560485867'


@pytest.mark.django_db
def test_feedback_creation_failure():
    client = APIClient()
    url = "http://127.0.0.1:8000/v1/feedbacks/"
    data = {
        'email': 'not-an-email'
    }

    response = client.post(url, data, format='json')
    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert 'email' in response.data


@pytest.mark.django_db
def test_feedback_creation_bad_phone_number():
    client = APIClient()
    url = "http://127.0.0.1:8000/v1/feedbacks/"
    bad_phone_data = {
        'name': 'Test User',
        'email': 'test@example.com',
        'phone_number': '12345ABC678',
        'text': 'Valid message text'
    }

    response = client.post(url, bad_phone_data, format='json')
    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert 'phone_number' in response.data



