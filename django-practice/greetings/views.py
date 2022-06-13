import imp
from django.views import generic
from .models import Greeting

# Create your views here.

class IndexView(generic.ListView):
  template_name = 'greetings/index.html'
  context_object_name = "greeting_list"

  def get_queryset(self):
    """Return all the greetings."""
    print(Greeting.objects.all())
    import sys
    sys.stdout.flush()
    return Greeting.objects.all()