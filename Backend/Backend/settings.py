from pathlib import Path
from dotenv import load_dotenv
import os

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv('DJANGO_API_KEY')

DEBUG = True

ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]

CORS_ALLOW_CREDENTIALS = True

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:5173",
]

SESSION_COOKIE_SAMESITE = "Lax"
SESSION_COOKIE_SECURE = False

CSRF_COOKIE_SAMESITE = "Lax"
CSRF_COOKIE_SECURE = False

SESSION_COOKIE_HTTPONLY = True
CSRF_COOKIE_HTTPONLY = False

SESSION_ENGINE = 'django.contrib.sessions.backends.db'

INSTALLED_APPS = [
    'users',
    'inventory',
    'rest_framework',
    'corsheaders',
    'django.contrib.sessions',
    'django.contrib.auth',
    'django.contrib.contenttypes',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [],
    'DEFAULT_PERMISSION_CLASSES': [],
}

ROOT_URLCONF = 'Backend.urls'

WSGI_APPLICATION = 'Backend.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
