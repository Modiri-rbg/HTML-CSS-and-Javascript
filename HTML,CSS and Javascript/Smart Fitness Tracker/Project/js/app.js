document
  .getElementById("workout-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const workoutType = document.getElementById("workout-type").value;
    const duration = parseInt(document.getElementById("duration").value);
    const calories = parseInt(document.getElementById("calories").value);
    const date = document.getElementById("date").value;

    // Update total stats for achievements
    let totalWorkouts = parseInt(localStorage.getItem("totalWorkouts")) || 0;
    let totalCalories = parseInt(localStorage.getItem("totalCalories")) || 0;
    let totalTime = parseInt(localStorage.getItem("totalTime")) || 0;

    totalWorkouts++;
    totalCalories += calories;
    totalTime += duration;

    localStorage.setItem("totalWorkouts", totalWorkouts);
    localStorage.setItem("totalCalories", totalCalories);
    localStorage.setItem("totalTime", totalTime);

    console.log("Updated stats for achievements:", {
      totalWorkouts,
      totalCalories,
      totalTime
    });

    // Update workoutData for the graph
    let workoutData = JSON.parse(localStorage.getItem("workoutData")) || {};
    workoutData[workoutType] = (workoutData[workoutType] || 0) + duration;
    localStorage.setItem("workoutData", JSON.stringify(workoutData));

    console.log("Workout logged:", workoutData);

    // Call both update functions
    if (typeof updateGraphs === "function") {
      updateGraphs();
    }
    if (typeof checkAchievements === "function") {
      checkAchievements();
    }

    // Store logged workout history
  let workoutHistory = JSON.parse(localStorage.getItem("workoutHistory")) || [];
  const newWorkout = {
    type: workoutType,
    duration: duration,
    calories: calories,
    date: date,
  };
  workoutHistory.push(newWorkout);
  localStorage.setItem("workoutHistory", JSON.stringify(workoutHistory));

  // Update the UI to show the logged workout
  displayLoggedWorkouts();


    showWorkoutPopup(workoutType, duration, calories, date);

    // Clear form
    document.getElementById("workout-form").reset();
  });

  document.addEventListener("DOMContentLoaded", () => {
    displayLoggedWorkouts();
  
    // Ensure buttons exist before adding event listeners
    const printAllBtn = document.getElementById("print-all-btn");
    const deleteAllBtn = document.getElementById("delete-all-btn");
  
    if (printAllBtn) {
      printAllBtn.addEventListener("click", printAllWorkouts);
    }
  
    if (deleteAllBtn) {
      deleteAllBtn.addEventListener("click", deleteAllWorkouts);
    }
  });

  // Function to Display Logged Workouts
  function displayLoggedWorkouts() {
    const workoutList = document.getElementById("workout-list");
    workoutList.innerHTML = ""; // Clear existing list
  
    let workoutHistory = JSON.parse(localStorage.getItem("workoutHistory")) || [];
    
    if (workoutHistory.length === 0) {
      workoutList.innerHTML = "<p>No workouts logged yet.</p>";
      return;
    }
  
    workoutHistory.forEach((workout, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${workout.type}</strong> - ${workout.duration} min, ${workout.calories} cal - ${workout.date}`;
      
      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.onclick = () => deleteLoggedWorkout(index);
  
      // Create print button
      const printBtn = document.createElement("button");
      printBtn.textContent = "Print";
      printBtn.classList.add("print-btn");
      printBtn.onclick = () => printWorkout(workout);
  
      // Append buttons
      li.appendChild(printBtn);
      li.appendChild(deleteBtn);
      workoutList.appendChild(li);
    });
  }
function printWorkout(workout) {
  const printWindow = window.open("", "_blank");

  printWindow.document.write(`
    <html>
    <head>
      <title>Workout Summary</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 20px;
        }
        .print-summary {
          border: 2px solid #333;
          padding: 20px;
          border-radius: 10px;
          max-width: 400px;
          margin: auto;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }
        h2 {
          margin-bottom: 10px;
        }
      </style>
    </head>
    <body>
      <div class="print-summary">
        <h2>Workout Summary</h2>
        <p><strong>Workout Type:</strong> ${workout.type}</p>
        <p><strong>Duration:</strong> ${workout.duration} minutes</p>
        <p><strong>Calories Burned:</strong> ${workout.calories}</p>
        <p><strong>Date:</strong> ${workout.date}</p>
      </div>
      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `);

  printWindow.document.close();
}



// Function to Delete a Logged Workout
function deleteLoggedWorkout(index) {
  let workoutHistory = JSON.parse(localStorage.getItem("workoutHistory")) || [];
  workoutHistory.splice(index, 1); // Remove the workout
  localStorage.setItem("workoutHistory", JSON.stringify(workoutHistory));
  displayLoggedWorkouts(); // Refresh the UI
}

// Ensure Logged Workouts Load on Page Load
document.addEventListener("DOMContentLoaded", displayLoggedWorkouts);

function showWorkoutPopup(workoutType, duration, calories, date) {
  const popup = document.createElement("div");
  popup.classList.add("workout-popup");
  popup.innerHTML = `
    <p><strong>Workout Logged!</strong></p>
    <p>Type: ${workoutType}</p>
    <p>Duration: ${duration} min</p>
    <p>Calories: ${calories}</p>
    <p>Date: ${date}</p>
  `;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000); // Popup disappears after 3 seconds
}

// Handle workout tips
document.getElementById("reminder-btn").addEventListener("click", function () {
  const tips = [
    "Stay hydrated!",
    "Consistency is key!",
    "Push yourself, but don't overdo it!",
    "Make sure to stretch before and after workouts!",
    "Eat your fruits and veg to maintain your diet!",
  ];
  alert(tips[Math.floor(Math.random() * tips.length)]);
});
// Handle print summary
document.getElementById("print-btn").addEventListener("click", function () {
  window.print();
});

// Function to Print All Workout Summaries
function printAllWorkouts() {
  let workoutHistory = JSON.parse(localStorage.getItem("workoutHistory")) || [];

  if (workoutHistory.length === 0) {
    alert("No workouts to print.");
    return;
  }

  const printWindow = window.open("", "_blank");

  let printContent = `
    <html>
    <head>
      <title>All Workout Summaries</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
        .summary-container { max-width: 600px; margin: auto; }
        .print-summary { border: 2px solid #333; padding: 15px; border-radius: 10px; margin-bottom: 10px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); }
        h2 { margin-bottom: 10px; }
      </style>
    </head>
    <body>
      <h2>All Workout Summaries</h2>
      <div class="summary-container">
  `;

  workoutHistory.forEach(workout => {
    printContent += `
      <div class="print-summary">
        <p><strong>Workout Type:</strong> ${workout.type}</p>
        <p><strong>Duration:</strong> ${workout.duration} minutes</p>
        <p><strong>Calories Burned:</strong> ${workout.calories}</p>
        <p><strong>Date:</strong> ${workout.date}</p>
      </div>
    `;
  });

  printContent += `
      </div>
      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `;

  printWindow.document.write(printContent);
  printWindow.document.close();
}

// Function to Delete All Workouts
function deleteAllWorkouts() {
  if (confirm("Are you sure you want to delete all logged workouts?")) {
    localStorage.removeItem("workoutHistory");
    displayLoggedWorkouts(); // Refresh the UI
  }
}

// Attach event listeners after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  displayLoggedWorkouts();
  
  document.getElementById("print-all-btn").addEventListener("click", printAllWorkouts);
  document.getElementById("delete-all-btn").addEventListener("click", deleteAllWorkouts);
});

window.updateGraphs = updateGraphs;
window.displayLoggedWorkouts = displayLoggedWorkouts;

