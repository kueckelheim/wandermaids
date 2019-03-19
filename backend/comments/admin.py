from django.contrib import admin
from .models import Comment

# make date field teadable in admin panel
class CommentAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at',)

# Register your models here.
admin.site.register(Comment, CommentAdmin)