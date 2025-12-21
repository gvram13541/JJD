from django.db import models

class Products(models.Model):
    i_id = models.CharField(max_length=10, unique=True, blank=True)
    i_name = models.CharField(max_length=100)
    quantity_in = models.DecimalField(decimal_places=2, max_digits=10)
    quantity_out = models.DecimalField(decimal_places=2, max_digits=10)
    image_path = models.URLField(unique=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

    def __str__(self):
        return self.i_name
    
    def save(self, *args, **kwargs):
        if not self.i_id:
            last_item = Products.objects.order_by('-id').first()
            next_id = 1 if not last_item else last_item.id + 1
            self.i_id = f"IID{next_id:04d}"
        super().save(*args, **kwargs)

class ProductVariants(models.Model):
    v_id = models.CharField(max_length=10, unique=True, blank=True)
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name="variants")
    size = models.DecimalField(max_digits=10, decimal_places=2)
    metric = models.CharField(max_length=10)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

    def __str__(self):
        return f"{self.product.i_id}{self.size}{self.metric}{self.cost}"
    
    def save(self, *args, **kwargs):
        if not self.v_id:
            last_variant = ProductVariants.objects.order_by('-id').first()
            next_id = 1 if not last_variant else last_variant.id+1
            self.v_id = f"PVID{next_id:04d}"
        return super().save(*args, **kwargs)
    
    def change_availability(self):
        if self.product.quantity_in <= self.product.quantity_out:
            self.available = False
            self.save(update_fields=["available"])
    
