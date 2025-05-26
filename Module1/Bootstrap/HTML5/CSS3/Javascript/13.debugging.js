<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Debug Registration</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f8f9fa;
      padding: 40px;
    }

    form {
      max-width: 400px;
      margin: auto;
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    h2 {
      text-align: center;
      color: #333;
    }

    label {
      display: block;
      margin-top: 15px;
    }

    input, select {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    button {
      margin-top: 20px;
      width: 100%;
      padding: 10px;
      background: #28a745;
      color: white;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .message {
      margin-top: 20px;
      text-align: center;
      font-weight: bold;
    }

    .success {
      color: green;
    }

    .error {
      color: red;
    }
  </style>
</head>
<body>

  <form id="registrationForm">
    <h2>Event Sign-Up</h2>

    <label>Name:</label>
    <input type="text" name="name" required>

    <label>Email:</label>
    <input type="email" name="email" required>

    <label>Event:</label>
    <select name="event" required>
      <option value="">-- Select an event --</option>
      <option value="JavaScript Bootcamp">JavaScript Bootcamp</option>
      <option value="Music Night">Music Night</option>
    </select>

    <button type="submit">Register</button>
    <div class="message" id="message"></div>
  </form>

  <script>
    const form = document.getElementById('registrationForm');
    const messageBox = document.getElementById('message');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      messageBox.textContent = '';
      messageBox.className = 'message';

      console.log('[DEBUG] Form submitted');

      const formData = new FormData(form);
      const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        event: formData.get('event')
      };

      // DEBUG: Log form data
      console.log('[DEBUG] Form Data:', userData);

      // Simulate network call with fetch
      setTimeout(() => {
        console.log('[DEBUG] Sending POST request...');

        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
          .then(response => {
            console.log('[DEBUG] Response status:', response.status);
            if (!response.ok) throw new Error('Failed to submit form');
            return response.json();
          })
          .then(data => {
            console.log('[DEBUG] Response payload:', data);
            messageBox.textContent = 'Registration successful!';
            messageBox.classList.add('success');
            form.reset();
          })
          .catch(error => {
            console.error('[DEBUG] Error during fetch:', error);
            messageBox.textContent = 'Submission failed. See console.';
            messageBox.classList.add('error');
          });
      }, 1000); // Simulated delay
    });
  </script>

</body>
</html>
