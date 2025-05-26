<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Manager</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f9f9f9;
      padding: 40px;
      text-align: center;
    }

    input, select, button {
      padding: 10px;
      margin: 5px;
      font-size: 16px;
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
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      width: 260px;
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
      padding: 8px 14px;
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

  <h1>Event Manager</h1>

  <!-- Event Addition Form -->
  <div>
    <input type="text" id="eventName" placeholder="Event Name">
    <input type="date" id="eventDate">
    <input type="number" id="eventSeats" placeholder="Seats">
    <input type="text" id="eventCategory" placeholder="Category">
    <button onclick="handleAddEvent()">Add Event</button>
  </div>

  <!-- Category Filter -->
  <div>
    <input type="text" id="searchCategory" placeholder="Search by Category">
    <button onclick="handleFilter()">Filter</button>
  </div>

  <div class="event-container" id="eventContainer"></div>

  <script>
    const events = [];

    // Closure to track total registrations per category
    function categoryRegistrationCounter() {
      const counters = {};
      return function(category) {
        if (!counters[category]) counters[category] = 0;
        counters[category]++;
        console.log(`Total registrations for '${category}': ${counters[category]}`);
      };
    }

    const countRegistration = categoryRegistrationCounter();

    // Add a new event
    function addEvent(name, date, seats, category) {
      events.push({ name, date, seats: parseInt(seats), category });
      renderEvents(events);
    }

    // Register a user for an event
    function registerUser(index) {
      const event = events[index];
      if (event.seats > 0) {
        event.seats--;
        alert(`Registered for ${event.name}`);
        countRegistration(event.category);
        renderEvents(events);
      } else {
        alert("No seats available.");
      }
    }

    // Filter events by a category using a callback
    function filterEventsByCategory(category, callback) {
      const filtered = events.filter(event => callback(event, category));
      renderEvents(filtered);
    }

    // DOM Handling Functions
    function handleAddEvent() {
      const name = document.getElementById("eventName").value;
      const date = document.getElementById("eventDate").value;
      const seats = document.getElementById("eventSeats").value;
      const category = document.getElementById("eventCategory").value;

      if (name && date && seats && category) {
        addEvent(name, date, seats, category);
        document.getElementById("eventName").value = '';
        document.getElementById("eventDate").value = '';
        document.getElementById("eventSeats").value = '';
        document.getElementById("eventCategory").value = '';
      } else {
        alert("Please fill all fields.");
      }
    }

    function handleFilter() {
      const category = document.getElementById("searchCategory").value.trim();
      if (category) {
        filterEventsByCategory(category.toLowerCase(), (event, cat) => event.category.toLowerCase() === cat);
      } else {
        renderEvents(events);
      }
    }

    // Render events to DOM
    function renderEvents(eventList) {
      const container = document.getElementById("eventContainer");
      container.innerHTML = "";
      eventList.forEach((event, index) => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
          <h3>${event.name}</h3>
          <p>Date: ${event.date}</p>
          <p>Category: ${event.category}</p>
          <p>Seats: ${event.seats}</p>
          <button onclick="registerUser(${index})" ${event.seats <= 0 ? "disabled" : ""}>Register</button>
        `;
        container.appendChild(card);
      });
    }

    // Initial dummy data
    addEvent("JavaScript Meetup", "2025-06-10", 5, "tech");
    addEvent("Art Showcase", "2025-07-05", 3, "art");
    addEvent("Startup Pitch", "2025-06-15", 10, "business");
  </script>

</body>
</html>
