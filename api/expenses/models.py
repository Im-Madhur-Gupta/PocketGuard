from django.db import models

class expenses_Model(models.Model):
    Monthly_limit = models.IntegerField(blank=True, null=True),
    Fruits_vegetables = models.IntegerField(blank=True, null=True),
    Fuel = models.IntegerField(blank=True, null=True),
    Clothes = models.IntegerField(blank=True, null=True),
    Transporation = models.IntegerField(blank=True, null=True),
    Entertainment = models.IntegerField(blank=True, null=True),
    Dining = models.IntegerField(blank=True, null=True),
    Liesure = models.IntegerField(blank=True, null=True),
    Grocery = models.IntegerField(blank=True, null=True),
    Electronics = models.IntegerField(blank=True, null=True),
    Furniture = models.IntegerField(blank=True, null=True),

    