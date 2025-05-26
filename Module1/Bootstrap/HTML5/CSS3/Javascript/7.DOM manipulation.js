<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Registration</title>
  <style>
    body {
      font-family: sans-serif;
      background: #f0f2f5;
      padding: 40px;
      text-align: center;
    }

    .event-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-top: 30px;
    }

    .event-card {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      width: 250px;
      text-align: left;
    }

    .event-card h3 {
      margin: 0 0 10px;
      color: #333;
    }

    .event-card p {
      margin: 5px 0;
    }

    .event-card button {
      margin-top: 10px;
      padding: 8px 12px;
      font-size: 14px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .register-btn {
      background-color: #2ecc71;
      color: white;
    }

    .cancel-btn {
      background-color: #e74c3c;
      color: white;
    }

    .disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  </style>
</head>
<body>

  <h1>Upcoming Events</h1>
  <div class="event-container" id="eventContainer"></div>

  <script>
    // Event data
    const events = [
      { id: 1, name: "Coding Bootcamp", date: "2025-06-15", seats: 5 },
      { id: 2, name: "Music Festival", date: "2025-07-01", seats: 2 },
      { id: 3, name: "Art Workshop", date: "2025-07-20", seats: 0 }
    ];

    // Track user registrations (eventId => true)
    const registeredEvents = {};

    // Render all event cards dynamically
    function renderEvents() {
      const container = document.querySelector("#eventContainer");
      container.innerHTML = "";

      events.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";

        const isRegistered = registeredEvents[event.id];

        card.innerHTML = `
          <h3>${event.name}</h3>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Seats Left:</strong> ${event.seats}</p>
        `;

        const btn = document.createElement("button");

        if (isRegistered) {
          btn.textContent = "Cancel Registration";
          btn.className = "cancel-btn";
          btn.onclick = () => cancel(event.id);
        } else {
          btn.textContent = "Register";
          btn.className = "register-btn";
          btn.disabled = event.seats <= 0;
          if (btn.disabled) btn.classList.add("disabled");
          btn.onclick = () => register(event.id);
        }

        card.appendChild(btn);
        container.appendChild(card);
      });
    }

    // Register for an event
    function register(eventId) {
      const event = events.find(e => e.id === eventId);
      if (event && event.seats > 0) {
        event.seats--;
        registeredEvents[eventId] = true;
        renderEvents();
        alert(`You registered for "${event.name}"`);
      }
    }

    // Cancel registration
    function cancel(eventId) {
      const event = events.find(e => e.id === eventId);
      if (event) {
        event.seats++;
        delete registeredEvents[eventId];
        renderEvents();
        alert(`You canceled your registration for "${event.name}"`);
      }
    }

    // Initial render
    renderEvents();
  </script>

</body>
</html>
