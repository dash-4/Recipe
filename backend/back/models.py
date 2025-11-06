from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    ingredients = models.JSONField(default=list)  # ← JSONField, не TextField
    steps = models.JSONField(default=list)        # ← JSONField
    cooking_time = models.PositiveIntegerField(null=True, blank=True)
    servings = models.PositiveIntegerField(null=True, blank=True)
    difficulty = models.CharField(
        max_length=10,
        choices=[('easy', 'Легко'), ('medium', 'Средне'), ('hard', 'Сложно')],
        default='easy'
    )
    # created_by = models.ForeignKey(...)  ← УДАЛИ ЭТУ СТРОКУ
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title