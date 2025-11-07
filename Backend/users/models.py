from django.db import models

class User(models.Model):
    cid = models.CharField(max_length=10, unique=True, blank=True)
    name = models.CharField(max_length=47)
    role = models.CharField(max_length=10, default='buyer')
    phone_number = models.CharField(max_length=10)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=200)
    village = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    pincode = models.CharField(max_length=100)

    class Meta:
        unique_together = ('role', 'phone_number', 'email')

    def save(self, *args, **kwargs):
        if not self.cid:
            last_user = User.objects.order_by('-id').first()
            next_id = 1 if not last_user else last_user.id + 1
            self.cid = f"CID{next_id:04d}"

        super().save(*args, **kwargs)