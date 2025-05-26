<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>jQuery Event Demo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #eef2f7;
      padding: 30px;
    }

    .container {
      max-width: 600px;
      margin: auto;
    }

    .event-card {
      display: none;
      background: white;
      padding: 20px;
      margin: 15px 0;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    #registerBtn {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    h2 {
      text-align: center;
    }

    .note {
      margin-top: 30px;
      font-style: italic;
      color: #555;
    }
  </style>
</head>
<body>

  <div class="container">
    <h2>Upcoming Events</h2>
    <button id="registerBtn">Toggle Event Cards</button>

    <div class="event-card" id="event1">
      <h3>React Workshop</h3>
      <p>Learn the basics of React in this interactive session.</p>
    </div>

    <div class="event-card" id="event2">
      <h3>Vue.js Bootcamp</h3>
      <p>Master Vue.js with real-world examples and projects.</p>
    </div>

    <div class="note">
      🧠 <strong>Why use frameworks like React or Vue?</strong><br>
      They offer **component-based architectures**, making it easier to **reuse code**, manage **state**, and build **scalable** and **maintainable** applications.
    </div>
  </div>

  <!-- jQuery CDN -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

  <script>
    $(document).ready(function () {
      $('#registerBtn').click(function () {
        console.log('Register button clicked');
        $('#event1, #event2').each(function () {
          if ($(this).is(':visible')) {
            $(this).fadeOut(400);
          } else {
            $(this).fadeIn(400);
          }
        });
      });
    });
  </script>

</body>
</html>
