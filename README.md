# Simple Calculator Web Application

## Overview
This project is a simple web application that performs a basic arithmetic operation. Users can input two numbers, and the application will calculate the sum of those numbers and add the first prime number greater than the larger of the two inputs. The result is displayed on a user-friendly web page.

## Features
- Accepts two numeric inputs from the user.
- Calculates the sum of the two numbers.
- Adds the first prime number greater than the larger input to the sum.
- Displays the result in a clear and simple format.
- Responsive design for use on desktop and mobile devices.
- Beautiful design and fonts using Vanta.js backgrounds and fonts from Google fonts.
  
## Installation
To set up this project on your local machine, follow these steps:

### Prerequisites

- Python 3.x installed
- Git installed

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/AliSinaDevelo/calculator-project.git
   cd calculator-project

2. Set up a virtual environment:

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

3. Install the required dependancies:

    ```bash
    pip3 install -r requirements.txt

4. Apply migrations to set up the database:

    ```bash
    python3 manage.py migrate

5. Collect static file:

    ```bash
    python3 manage.py collectstatic

## Running the Application

To run the application, use the following command, then open your web browser and navigate to http://127.0.0.1:8000/ to access the application:

    ```bash
    python manage.py runserver



## Usage

1. Enter two numbers in the input fields.
2. Click the "Calculate" button.
3. The result will be displayed below the form, showing the sum of the two numbers plus the first prime number greater than the larger of the two inputs.

Example:
- Input: `5` and `10`
- Output: `18` (because 5 + 10 = 15, and the first prime number greater than 10 is 3, so 15 + 3 = 18)

## Technologies Used


- Django 
- Python
- HTML5
- CSS3
- Vanta.js
- Three.js
- Google fonts
- JavaScript (Fetch API)
- Git and GitHub for version control



