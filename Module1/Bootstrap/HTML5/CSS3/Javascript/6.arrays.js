<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Community Events</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #eef2f3;
      text-align: center;
      padding: 40px;
    }

    input, button {
      padding: 10px;
      margin: 5px;
      font-size: 16px;
    }

    .event-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 30px;
      gap: 20px;
    }

    .event-card {
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      padding: 20px;
      width: 260px;
      text-align: left;
    }

    .event-card h3 {
      color: #2c3e50;
      margin-bottom: 10px;
    }

    .event-card p {
      margin: 5px 0;
    }
  </style>
</head>
<body>

  <h1>Community Events</h1>

  <!-- Input form -->
  <div>
    <input type="text" id="eventName" placeholder="Event Name">
    <input type="text" id="eventCategory" placeholder="Category (e.g., music)">
    <button onclick="addEvent()">Add Event</button>
    <button onclick="showMusicEvents()">Show Only Music Events</button>
    <button onclick="showAllEvents()">Show All</button>
  </div>

  <!-- Event cards container -->
  <div class="event-container" id="eventContainer"></div>

  <script>
    // Initial event array
    let events = [
      { name: "Rock Concert", category: "music" },
      { name: "Painting Class", category: "art" },
      { name: "Workshop on Baking", category: "food" },
      { name: "Jazz Night", category: "music" }
    ];

    // Render event cards using .map()
    function renderEvents(eventArray) {
      const container = document.getElementById("eventContainer");
      container.innerHTML = ""; // Clear previous

      const cards = eventArray.map(event => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
          <h3>${formatTitle(event)}</h3>
          <p>Category: ${event.category}</p>
        `;
        return card;
      });

      cards.forEach(card => container.appendChild(card));
    }

    // Format display title using .map() idea
    function formatTitle(event) {
      return event.name.includes("Workshop") ? event.name : `Workshop on ${event.name}`;
    }

    // Add new event using .push()
    function addEvent() {
      const name = document.getElementById("eventName").value.trim();
      const category = document.getElementById("eventCategory").value.trim().toLowerCase();

      if (name && category) {
        events.push({ name, category }); // .push() for new event
        renderEvents(events);
        document.getElementById("eventName").value = "";
        document.getElementById("eventCategory").value = "";
      } else {
        alert("Please enter both name and category.");
      }
    }

    // Filter to show only music events
    function showMusicEvents() {
      const musicEvents = events.filter(e => e.category === "music"); // .filter()
      renderEvents(musicEvents);
    }

    function showAllEvents() {
      renderEvents(events);
    }

    // Initial render
    renderEvents(events);
  </script>

</body>
</html>
