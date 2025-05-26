<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Async Events Loader</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      padding: 40px;
      text-align: center;
    }

    .spinner {
      display: none;
      margin: 20px auto;
      border: 8px solid #f3f3f3;
      border-top: 8px solid #3498db;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .event-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 30px;
      gap: 20px;
    }

    .event-card {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      width: 250px;
      text-align: left;
    }

    .event-card h3 {
      margin-bottom: 5px;
      color: #333;
    }

    .event-card p {
      margin: 5px 0;
    }
  </style>
</head>
<body>

  <h1>Community Events (Async)</h1>
  <div class="spinner" id="spinner"></div>
  <div class="event-container" id="eventContainer"></div>

  <script>
    // Simulated mock API (returns a Promise that resolves after 2 seconds)
    function fetchEventsMock() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = true; // Set to false to simulate an error
          if (success) {
            resolve([
              { id: 1, name: "JavaScript Bootcamp", date: "2025-07-10", category: "tech" },
              { id: 2, name: "Music Fiesta", date: "2025-08-01", category: "music" },
              { id: 3, name: "Art in the Park", date: "2025-09-15", category: "art" }
            ]);
          } else {
            reject("Failed to fetch events.");
          }
        }, 2000);
      });
    }

    const spinner = document.getElementById("spinner");
    const container = document.getElementById("eventContainer");

    // Approach 1: .then() / .catch()
    /*
    spinner.style.display = "block";

    fetchEventsMock()
      .then(events => {
        spinner.style.display = "none";
        renderEvents(events);
      })
      .catch(err => {
        spinner.style.display = "none";
        container.innerHTML = `<p style="color:red;">Error: ${err}</p>`;
      });
    */

    // Approach 2: async/await
    async function loadEvents() {
      spinner.style.display = "block";
      try {
        const events = await fetchEventsMock();
        renderEvents(events);
      } catch (error) {
        container.innerHTML = `<p style="color:red;">Error: ${error}</p>`;
      } finally {
        spinner.style.display = "none";
      }
    }

    function renderEvents(events) {
      container.innerHTML = "";
      events.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
          <h3>${event.name}</h3>
          <p>Date: ${event.date}</p>
          <p>Category: ${event.category}</p>
        `;
        container.appendChild(card);
      });
    }

    // Start loading on page load
    loadEvents();
  </script>

</body>
</html>
