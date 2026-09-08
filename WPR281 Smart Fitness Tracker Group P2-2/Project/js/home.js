document.addEventListener("DOMContentLoaded", () => {
    loadHomeFavorites();
});
  
function loadHomeFavorites() {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const homeFavoritesGrid = document.getElementById("home-favorites-grid");
  
  homeFavoritesGrid.innerHTML = ""; // Clear grid before loading
  
  if (favorites.length === 0) {
    homeFavoritesGrid.innerHTML = "<p>No favorite workouts yet. Add some from the Favorites page!</p>";
    return;
  }
  
  favorites.forEach((workoutName) => {
    const workoutDiv = document.createElement("div");
    workoutDiv.classList.add("workout");
    workoutDiv.setAttribute("data-name", workoutName);
    workoutDiv.textContent = workoutName;
  
    // Add click event to log workout
    workoutDiv.addEventListener("click", () => logWorkoutFromHome(workoutName));
  
    homeFavoritesGrid.appendChild(workoutDiv);
  });
}
  
function logWorkoutFromHome(workoutName) {
  const duration = prompt(`Enter duration for ${workoutName} (minutes):`, "30");
  const calories = prompt(`Enter calories burned for ${workoutName}:`, "300");
  let workoutDate = prompt(`Enter date of workout (DD-MM-YYYY):`, new Date().toLocaleDateString("en-GB"));

  if (duration && calories && workoutDate) {
    logWorkout(duration, calories, workoutDate, workoutName);

    console.log("Workout logged from Home page:", { workoutName, duration, calories, workoutDate });

    if (typeof updateGraphs === "function") {
      console.log("Updating graphs from Home page...");
      updateGraphs();
    } else {
      console.error("updateGraphs() is not defined!");
    }

    if (typeof displayLoggedWorkouts === "function") {
      displayLoggedWorkouts();
    }
    if (typeof checkAchievements === "function") {
      checkAchievements();
    }

    alert(`Logged workout: ${workoutName}\nDuration: ${duration} minutes\nCalories Burned: ${calories}\nDate: ${workoutDate}`);
  }
}


  
window.logWorkout = logWorkout;
window.updateGraphs = updateGraphs;
window.checkAchievements = checkAchievements;
  