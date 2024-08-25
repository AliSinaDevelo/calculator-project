from django.shortcuts import render
import math
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

# create helper functions

def total_sum(num1, num2):
    return num1 + num2 

def is_prime(num):
    # checks if a number is prime
    if num < 2:
        return False
    # use the algorithm to check between 2 and the square root of the number
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

def next_prime(num) :
    # finds the next prime number greater than the given number
    prime = num + 1
    while not is_prime(prime):
        prime += 1
    return prime

@csrf_exempt
def calculate(request):
    # handles the POST request to Perform calculations
    if request.method == "POST":
        try:
            # get input from the POST 
            num1 = int(request.POST.get('num1'))
            num2 = int(request.POST.get('num2'))

            # calculate the sum
            sum = total_sum(num1, num2)

            # find the maximum number
            greater_num = max(num1, num2)

            # find the next prime number
            prime = next_prime(greater_num)

            # add the prime number to the sum
            result = sum + prime

            # return the result as a JSON response
            return JsonResponse({'result': result, 'total_sum': sum, 'next_prime': prime})
        except(ValueError, TypeError):
            return JsonResponse({'error': 'Invalid Input'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid Request'}, status=405)


def index(request):
    return render(request, 'calculator/index.html')
