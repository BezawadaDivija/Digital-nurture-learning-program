<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Modern JS Events</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #f0f2f5;
      text-align: center;
    }

    .event-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 30px;
      gap: 20px;
    }

    .event-card {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      width: 250px;
      text-align: left;
    }

    .event-card h3 {
      margin: 0 0 10px;
    }

    .event-card p {
      margin: 4px 0;
    }
  </style>
</head>
<body>

  <h1>Upcoming Events (ES6+)</h1>
  <div class="event-container" id="eventContainer"></div>

  <script>
    // Original event data
    const originalEvents = [
      { id: 1, name: "React Bootcamp", date: "2025-06-20", category: "tech" },
      { id: 2, name: "Jazz Night", date: "2025-07-01", category: "music" },
      { id: 3, name: "Oil Painting", date: "2025-08-15", category: "art" }
    ];

    // Default parameter and destructuring
    const renderEventCard = ({ name, date, category }) => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Category:</strong> ${category}</p>
      `;
      return card;
    };

    // Use spread operator to clone list before filtering
    const displayEvents = (events = []) => {
      const container = document.querySelector("#eventContainer");
      container.innerHTML = "";

      // Clone and filter (e.g., exclude art events)
      const clonedEvents = [...events];
      const filteredEvents = clonedEvents.filter(({ category }) => category !== "art");

      filteredEvents.forEach(event => {
        const card = renderEventCard(event);
        container.appendChild(card);
      });
    };

    // Use let/const properly
    const init = () => {
      const today = new Date().toISOString().split("T")[0];
      let upcomingEvents = originalEvents.filter(({ date }) => date >= today);
      displayEvents(upcomingEvents);
    };

    // Load on page start
    init();
  </script>

</body>
</html>
