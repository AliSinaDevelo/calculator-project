

document.getElementById('calcForm').addEventListener('submit', async function(e) {
  // Prevent default from submission
  e.preventDefault(); 

  // get values from input
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;

  // prep POST data
  let fromData = new URLSearchParams();
  fromData.append('num1', num1);
  fromData.append('num2', num2);

  try {
    // Send a POST request to the server
    let response = await fetch('/calculate/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': getCookie('csrftoken') // add CSRF token
      },
      body: fromData
    });

    // Parse Json
    let data = await response.json();

    // print result
    if (response.ok) {
      document.getElementById('result').innerHTML = 'Result: ' + data.result;
    } else {
      document.getElementById('result').innerHTML = 'Error: ' + data.error;
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

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
