from django.db import models
from django.db.models import Q

class User(models.Model):
    cid = models.CharField(max_length=10, unique=True, blank=True)
    name = models.CharField(max_length=47)
    role = models.CharField(max_length=10, default='buyer')
    phone_number = models.CharField(max_length=10)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['role', 'phone_number'],
                name='unique_role_phone'
            ),
            models.UniqueConstraint(
                fields=['role', 'email'],
                name='unique_role_email'
            )
        ]

    def save(self, *args, **kwargs):
        if not self.cid:
            last_user = User.objects.order_by('-id').first()
            next_id = 1 if not last_user else last_user.id + 1
            self.cid = f"CID{next_id:04d}"

        super().save(*args, **kwargs)

class Address(models.Model):
    aid = models.CharField(max_length=10, unique=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='addresses')
    village = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    pincode = models.CharField(max_length=100)
    is_default = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['user'],
                condition=Q(is_default=True),
                name='unique_default_address_per_user'
            )
        ]

    def save(self, *args, **kwargs):
        if not self.aid:
            last_addr = Address.objects.order_by('-id').first()
            next_id = 1 if not last_addr else last_addr.id + 1
            self.aid = f"AID{next_id:04d}"

        return super().save(*args, **kwargs)