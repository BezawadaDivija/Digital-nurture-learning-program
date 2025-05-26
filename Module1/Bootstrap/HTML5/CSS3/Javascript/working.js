<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Registration Form</title>
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
      box-sizing: border-box;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    .error {
      color: red;
      font-size: 13px;
      margin-top: 3px;
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

    .success {
      color: green;
      margin-top: 20px;
      text-align: center;
    }
  </style>
</head>
<body>

  <h1>Event Registration</h1>
  <form id="registrationForm" novalidate>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <div class="error" id="nameError"></div>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <div class="error" id="emailError"></div>

    <label for="event">Select Event:</label>
    <select id="event" name="event">
      <option value="">-- Choose an event --</option>
      <option value="React Bootcamp">React Bootcamp</option>
      <option value="Jazz Night">Jazz Night</option>
      <option value="Art Exhibition">Art Exhibition</option>
    </select>
    <div class="error" id="eventError"></div>

    <button type="submit">Register</button>
    <div class="success" id="successMessage"></div>
  </form>

  <script>
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // prevent page reload

      // Clear previous errors
      document.getElementById('nameError').textContent = '';
      document.getElementById('emailError').textContent = '';
      document.getElementById('eventError').textContent = '';
      successMessage.textContent = '';

      // Access form values
      const { name, email, event: eventSelect } = form.elements;

      let isValid = true;

      // Simple validation
      if (!name.value.trim()) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
      }

      if (!email.value.trim()) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
      }

      if (!eventSelect.value) {
        document.getElementById('eventError').textContent = 'Please select an event.';
        isValid = false;
      }

      // If valid, show success
      if (isValid) {
        successMessage.textContent = `Thank you, ${name.value}! You’ve registered for "${eventSelect.value}".`;
        form.reset();
      }
    });
  </script>

</body>
</html>
