document.addEventListener("DOMContentLoaded", () => {
  checkAchievements(); // Check achievements when the page loads
  loadFavorites(); // Load favorite workouts from localStorage
});

function toggleFavorite(event, element) {
  event.stopPropagation(); // Prevent triggering logWorkout when clicking the heart
  const workout = element.parentElement;
  const favoriteContainer = document.getElementById("favorite-workouts");
  const workoutGrid = document.getElementById("workout-grid");

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (element.textContent === "♡") {
    element.textContent = "❤"; // Mark workout as favorite
    favoriteContainer.appendChild(workout);
    favorites.push(workout.getAttribute("data-name")); // Add to favorites list
  } else {
    element.textContent = "♡"; // Remove favorite mark
    workoutGrid.appendChild(workout);
    favorites = favorites.filter(
      (fav) => fav !== workout.getAttribute("data-name")
    ); // Remove from favorites list
  }

  localStorage.setItem("favorites", JSON.stringify(favorites)); // Save updated favorites list
}

function loadFavorites() {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteContainer = document.getElementById("favorite-workouts");
  const workoutGrid = document.getElementById("workout-grid");

  document.querySelectorAll(".workout").forEach((workout) => {
    if (favorites.includes(workout.getAttribute("data-name"))) {
      workout.querySelector(".heart").textContent = "❤"; // Display as favorite
      favoriteContainer.appendChild(workout);
    }
  });
}

function logWorkoutPrompt(workout) {
  const workoutName = workout.getAttribute("data-name"); // Get correct name
  const duration = prompt(`Enter duration for ${workoutName} (minutes):`, "30");
  const calories = prompt(`Enter calories burned for ${workoutName}:`, "300");
  let workoutDate = prompt(`Enter date of workout (DD-MM-YYYY):`, new Date().toLocaleDateString("en-GB"));

  if (duration && calories && workoutDate) {
    logWorkout(duration, calories, workoutDate, workoutName); // Pass correct workoutName
    alert(
      `Logged workout: ${workoutName}\nDuration: ${duration} minutes\nCalories Burned: ${calories}\nDate: ${workoutDate}`
    );
  }
}

function logWorkout(duration, calories, workoutDate, workoutName) {
  let totalWorkouts = parseInt(localStorage.getItem("totalWorkouts")) || 0;
  let totalCalories = parseInt(localStorage.getItem("totalCalories")) || 0;
  let totalTime = parseInt(localStorage.getItem("totalTime")) || 0;
  let workoutHistory = JSON.parse(localStorage.getItem("workoutHistory")) || [];
  let workoutData = JSON.parse(localStorage.getItem("workoutData")) || {};

  let workoutKey = workoutName.toLowerCase().replace(/\s+/g, "-");

  // Update total stats
  totalWorkouts++;
  totalCalories += parseInt(calories);
  totalTime += parseInt(duration);

  localStorage.setItem("totalWorkouts", totalWorkouts);
  localStorage.setItem("totalCalories", totalCalories);
  localStorage.setItem("totalTime", totalTime);

  const newWorkout = {
    type: workoutName,
    duration: parseInt(duration),
    calories: parseInt(calories),
    date: workoutDate,
  };
  workoutHistory.push(newWorkout);
  localStorage.setItem("workoutHistory", JSON.stringify(workoutHistory));

  workoutData[workoutKey] = (workoutData[workoutKey] || 0) + parseInt(duration);
  localStorage.setItem("workoutData", JSON.stringify(workoutData));

  console.log("Workout logged from Favorites or Home:", newWorkout);
  console.log("Updated workoutData in localStorage:", localStorage.getItem("workoutData"));

  if (typeof displayLoggedWorkouts === "function") {
    displayLoggedWorkouts();
  }
  if (typeof updateGraphs === "function") {
    console.log("Calling updateGraphs()...");
    updateGraphs();
  } else {
    console.error("updateGraphs() is not defined!");
  }

  if (typeof checkAchievements === "function") {
    checkAchievements();
  }
}

function checkAchievements() {
  let totalWorkouts = parseInt(localStorage.getItem("totalWorkouts")) || 0;
  let totalCalories = parseInt(localStorage.getItem("totalCalories")) || 0;
  let totalTime = parseInt(localStorage.getItem("totalTime")) || 0;

  let achievements = document.querySelectorAll(
    "#unfinished-achievements .achievement"
  );
  achievements.forEach((achievement) => {
    let id = achievement.getAttribute("data-id");
    if (
      (id === "first-workout" && totalWorkouts >= 1) ||
      (id === "burn-1000" && totalCalories >= 1000) ||
      (id === "five-workouts" && totalWorkouts >= 5) ||
      (id === "train-10-hours" && totalTime >= 600)
    ) {
      completeAchievement(achievement);
    }
  });
}

function completeAchievement(element) {
  element.classList.add("completed"); // Mark achievement as completed
  document.getElementById("completed-achievements").appendChild(element);
}

window.logWorkout = logWorkout; // Make function accessible globally
window.checkAchievements = checkAchievements; // Ensure achievements update