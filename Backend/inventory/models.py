from django.db import models

class Inventory(models.Model):
    i_id = models.CharField(max_length=10, unique=True, blank=True)
    i_name = models.CharField(max_length=100)
    quantity_in = models.DecimalField(decimal_places=10, max_digits=100)
    quantity_out = models.DecimalField(decimal_places=10, max_digits=100)
    cost = models.DecimalField(decimal_places=10, max_digits=100)
    metric = models.CharField(max_length=50)
    image_path = models.CharField(unique=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.i_id:
            last_item = Inventory.objects.order_by('-id').first()
            next_id = 1 if not last_item else last_item.i_id + 1
            self.i_id = self.cid = f"IID{next_id:04d}"

        super().save(*args, **kwargs)