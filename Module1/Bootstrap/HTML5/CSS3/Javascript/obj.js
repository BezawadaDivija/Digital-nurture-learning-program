<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Objects & Prototypes</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      text-align: center;
      padding: 40px;
    }

    .event-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .event-card {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      width: 280px;
    }

    .event-card h3 {
      color: #2c3e50;
    }

    .event-card p {
      margin: 6px 0;
    }

    .event-card button {
      padding: 8px 14px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      margin-top: 10px;
      cursor: pointer;
    }

    .event-card pre {
      background: #eee;
      padding: 10px;
      border-radius: 5px;
      margin-top: 10px;
      text-align: left;
    }
  </style>
</head>
<body>

  <h1>Event List Using Objects and Prototypes</h1>
  <div class="event-container" id="eventContainer"></div>

  <script>
    // Define Event class
    function Event(name, date, seats) {
      this.name = name;
      this.date = date;
      this.seats = seats;
    }

    // Add checkAvailability method to prototype
    Event.prototype.checkAvailability = function() {
      return this.seats > 0 ? "Seats available" : "Sold out";
    };

    // Create sample events
    const eventList = [
      new Event("Tech Talk", "2025-07-10", 5),
      new Event("Design Workshop", "2025-08-01", 0),
      new Event("Startup Expo", "2025-09-15", 12)
    ];

    // Render events
    const container = document.getElementById("eventContainer");

    eventList.forEach(event => {
      const card = document.createElement("div");
      card.className = "event-card";

      // List all properties and values using Object.entries
      const entries = Object.entries(event);
      let details = '';
      entries.forEach(([key, value]) => {
        details += `${key}: ${value}\n`;
      });

      card.innerHTML = `
        <h3>${event.name}</h3>
        <p>Date: ${event.date}</p>
        <p>Seats: ${event.seats}</p>
        <p>Status: ${event.checkAvailability()}</p>
        <pre>${details}</pre>
        <button onclick="alert('${event.name} - ${event.checkAvailability()}')">Check</button>
      `;

      container.appendChild(card);
    });
  </script>

</body>
</html>
