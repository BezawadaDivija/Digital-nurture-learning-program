<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Registration</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      text-align: center;
      padding-top: 50px;
    }

    .event-card {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      padding: 30px;
      max-width: 400px;
      margin: auto;
    }

    h1 {
      color: #2c3e50;
    }

    p {
      font-size: 18px;
      margin: 10px 0;
    }

    button {
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
      font-size: 16px;
    }

    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  </style>
</head>
<body>

  <div class="event-card">
    <h1>Event Details</h1>
    <p id="eventInfo"></p>
    <p id="seatsInfo"></p>
    <button onclick="register()">Register</button>
  </div>

  <script>
    // Event data
    const eventName = "Community Meetup";
    const eventDate = "June 15, 2025";
    let availableSeats = 5;

    // Display event info
    document.getElementById("eventInfo").textContent = 
      `Event: ${eventName} | Date: ${eventDate}`;
    document.getElementById("seatsInfo").textContent = 
      `Available Seats: ${availableSeats}`;

    // Handle registration
    function register() {
      if (availableSeats > 0) {
        availableSeats--; // Decrease seat count
        document.getElementById("seatsInfo").textContent = 
          `Available Seats: ${availableSeats}`;
        alert("Registration successful!");
      } 
      if (availableSeats === 0) {
        alert("No seats left!");
        document.querySelector("button").disabled = true;
      }
    }
  </script>

</body>
</html>
