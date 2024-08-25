from django.shortcuts import render
import math
from django.http import JsonResponse
# Create your views here.

# create helper functions

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


