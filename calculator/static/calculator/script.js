

document.getElementById('calcForm').addEventListener('submit', async function(e) {
  // Prevent default from submission
  e.preventDefault(); 

  // get values from input
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;

  // convert input val to Number
  num1 = Number(num1);
  num2 = Number(num2);

  // prep POST data
  let fromData = new URLSearchParams();
  // DEBUG : console.log('Form data:', fromData.toString());

  fromData.append('num1', num1);
  fromData.append('num2', num2);

  try {
    // Send a POST request to the server
    let response = await fetch('/calculate/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': getCookie('csrftoken')
      },
      body: fromData
    });

    // Parse Json
    let data = await response.json();


    // print result
    if (response.ok) {
      let sum = data.total_sum;
      let nextPrime = data.next_prime;
      let finalResult = data.result;
            
      // Update the HTML with detailed results
      document.getElementById('sumResult').innerHTML = `Sum of the numbers: ${Number(sum)}`;
      document.getElementById('primeResult').innerHTML = `Next prime number greater than the larger number: ${nextPrime}`;
      document.getElementById('result').innerHTML = `Result: ${finalResult}`;
    } else {
      document.getElementById('result').innerHTML = 'Error: ' + data.error;
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

// Get CSRF token from cookie
// add csrf token using the function below
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
