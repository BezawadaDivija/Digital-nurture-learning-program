<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Upcoming Events</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      padding: 40px;
      text-align: center;
    }

    .event-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    .event-card {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      width: 250px;
    }

    .event-card h3 {
      margin: 10px 0;
      color: #2c3e50;
    }

    .event-card p {
      margin: 5px 0;
    }

    .event-card button {
      margin-top: 10px;
      padding: 10px 15px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .event-card button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  </style>
</head>
<body>

  <h1>Available Events</h1>
  <div class="event-container" id="eventContainer"></div>

  <script>
    // Sample event list
    const events = [
      { name: "Tech Conference", date: "2025-07-10", seats: 10 },
      { name: "Art Workshop", date: "2023-12-01", seats: 5 },
      { name: "Music Fest", date: "2025-05-30", seats: 0 },
      { name: "Community Picnic", date: "2025-08-15", seats: 3 }
    ];

    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD
    const container = document.getElementById("eventContainer");

    // Display only valid (upcoming and not full) events
    events.forEach((event, index) => {
      if (event.date >= today && event.seats > 0) {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
          <h3>${event.name}</h3>
          <p>Date: ${event.date}</p>
          <p>Seats Left: <span id="seats-${index}">${event.seats}</span></p>
          <button onclick="register(${index})" id="btn-${index}">Register</button>
        `;
        container.appendChild(card);
      }
    });

    // Registration logic with error handling
    function register(index) {
      try {
        const event = events[index];
        if (event.seats > 0) {
          event.seats--;
          document.getElementById(`seats-${index}`).textContent = event.seats;
          alert(`Registered for ${event.name}!`);
          if (event.seats === 0) {
            document.getElementById(`btn-${index}`).disabled = true;
            alert("Event is now full.");
          }
        } else {
          throw new Error("No seats left for this event.");
        }
      } catch (error) {
        alert("Error: " + error.message);
      }
    }
  </script>

</body>
</html>
