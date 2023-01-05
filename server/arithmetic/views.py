import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


def parse_request(str):
    if '×' in str:
        str = str.replace('×', '*')

    if '÷' in str:
        str = str.replace('÷', '/')

    return str


@csrf_exempt
def calculate(request):
    if request.method == 'POST':
        # parse the json object
        body = json.loads(request.body)

        expression = body['expression']

        response = eval(parse_request(expression))

        return JsonResponse({
            'response': response
        })
    else:
        return JsonResponse({
            'error': 'invalid request method'
        })
