<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Registration (AJAX)</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f2f2f2;
      padding: 40px;
    }

    h1 {
      text-align: center;
      color: #333;
    }

    form {
      max-width: 400px;
      margin: 0 auto;
      background: #fff;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
      color: #444;
    }

    input, select {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    button {
      margin-top: 20px;
      width: 100%;
      padding: 10px;
      background: #3498db;
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

    .loading {
      color: orange;
    }
  </style>
</head>
<body>

  <h1>Register for an Event</h1>

  <form id="registrationForm">
    <label>Name:</label>
    <input type="text" name="name" required>

    <label>Email:</label>
    <input type="email" name="email" required>

    <label>Event:</label>
    <select name="event" required>
      <option value="">-- Choose an event --</option>
      <option value="React Bootcamp">React Bootcamp</option>
      <option value="Jazz Night">Jazz Night</option>
      <option value="Art Workshop">Art Workshop</option>
    </select>

    <button type="submit">Submit</button>
    <div class="message" id="message"></div>
  </form>

  <script>
    const form = document.getElementById('registrationForm');
    const messageBox = document.getElementById('message');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const formData = new FormData(form);
      const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        event: formData.get('event')
      };

      // Show loading message
      messageBox.textContent = 'Submitting...';
      messageBox.className = 'message loading';

      // Simulate delay using setTimeout
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
        .then(res => {
          if (!res.ok) throw new Error('Network response was not ok');
          return res.json();
        })
        .then(data => {
          messageBox.textContent = 'Registration successful!';
          messageBox.className = 'message success';
          form.reset();
        })
        .catch(error => {
          messageBox.textContent = 'Something went wrong. Please try again.';
          messageBox.className = 'message error';
          console.error(error);
        });
      }, 1500); // 1.5 second delay
    });
  </script>

</body>
</html>
