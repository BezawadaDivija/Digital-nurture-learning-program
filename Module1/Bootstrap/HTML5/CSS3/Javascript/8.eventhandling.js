<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interactive Events</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #f4f4f4;
      text-align: center;
    }

    select, input {
      padding: 10px;
      margin: 10px;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    .event-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-top: 20px;
    }

    .event-card {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      padding: 20px;
      width: 260px;
      text-align: left;
    }

    .event-card h3 {
      margin-bottom: 5px;
    }

    .event-card p {
      margin: 4px 0;
    }

    .event-card button {
      margin-top: 10px;
      padding: 8px 12px;
      font-size: 14px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  </style>
</head>
<body>

  <h1>Community Event Explorer</h1>

  <div>
    <select id="categoryFilter" onchange="filterByCategory()">
      <option value="all">All Categories</option>
      <option value="music">Music</option>
      <option value="tech">Tech</option>
      <option value="art">Art</option>
    </select>

    <input type="text" id="searchInput" placeholder="Search by event name" onkeydown="handleSearchKey(event)">
  </div>

  <div class="event-container" id="eventContainer"></div>

  <script>
    const events = [
      { id: 1, name: "Rock Night", category: "music", seats: 10 },
      { id: 2, name: "JavaScript Workshop", category: "tech", seats: 5 },
      { id: 3, name: "Painting Class", category: "art", seats: 8 },
      { id: 4, name: "Jazz Concert", category: "music", seats: 0 },
    ];

    const registered = {};

    let currentCategory = "all";
    let currentSearch = "";

    // Render filtered and searched events
    function renderEvents() {
      const container = document.getElementById("eventContainer");
      container.innerHTML = "";

      const filtered = events.filter(event => {
        const matchCategory = currentCategory === "all" || event.category === currentCategory;
        const matchSearch = event.name.toLowerCase().includes(currentSearch.toLowerCase());
        return matchCategory && matchSearch;
      });

      filtered.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
          <h3>${event.name}</h3>
          <p>Category: ${event.category}</p>
          <p>Seats: ${event.seats}</p>
        `;

        const btn = document.createElement("button");
        btn.textContent = registered[event.id] ? "Registered" : "Register";
        btn.disabled = event.seats === 0 || registered[event.id];
        if (btn.disabled) btn.classList.add("disabled");

        // onclick for "Register"
        btn.onclick = () => {
          if (!registered[event.id] && event.seats > 0) {
            event.seats--;
            registered[event.id] = true;
            alert(`You registered for "${event.name}"`);
            renderEvents();
          }
        };

        card.appendChild(btn);
        container.appendChild(card);
      });
    }

    // onchange for category filter
    function filterByCategory() {
      const select = document.getElementById("categoryFilter");
      currentCategory = select.value;
      renderEvents();
    }

    // keydown for search input
    function handleSearchKey(event) {
      if (event.key === "Enter") {
        currentSearch = document.getElementById("searchInput").value;
        renderEvents();
      }
    }

    // Initial display
    renderEvents();
  </script>

</body>
</html>
