# In backend/urls.py

from django.contrib import admin
# Make sure 'include' is imported here
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

admin.site.site_header = "BERRY GADGETS Admin"
admin.site.site_title = "BERRY GADGETS Admin Portal"
admin.site.index_title = "Welcome to BERRY GADGETS Admin"

urlpatterns = [
    path('admin/', admin.site.urls),
    # Add this line to include your product app's URLs
    path('api/products/', include('products.urls')),

    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)