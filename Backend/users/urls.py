from django.urls import path
from .views import RegisterView, LoginView, LogoutView, GetAddressView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='regiseter'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('getaddresses/', GetAddressView.as_view(), name='get_addresses')
]
