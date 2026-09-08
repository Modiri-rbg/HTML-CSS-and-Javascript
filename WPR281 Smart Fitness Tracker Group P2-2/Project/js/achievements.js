document.addEventListener("DOMContentLoaded", () => {
    checkAchievements(); // Check achievements when the page loads
    document.getElementById("reset-achievements").addEventListener("click", resetAchievements);
});

function checkAchievements() {
    // Retrieve stored workout stats from localStorage
    let totalWorkouts = parseInt(localStorage.getItem("totalWorkouts")) || 0;
    let totalCalories = parseInt(localStorage.getItem("totalCalories")) || 0;
    let totalTime = parseInt(localStorage.getItem("totalTime")) || 0;
    
    console.log("Checking achievements...");
    console.log("Total Workouts:", totalWorkouts);
    console.log("Total Calories:", totalCalories);
    console.log("Total Time:", totalTime);
    
    // Loop through each unfinished achievement and check if it should be completed
    let achievements = document.querySelectorAll("#unfinished-achievements .achievement");
    achievements.forEach(achievement => {
        let id = achievement.getAttribute("data-id");
        if (
            (id === "first-workout" && totalWorkouts >= 1) ||
            (id === "burn-1000" && totalCalories >= 1000) ||
            (id === "five-workouts" && totalWorkouts >= 5) ||
            (id === "train-10-hours" && totalTime >= 600) // 600 minutes = 10 hours
        ) {
            completeAchievement(achievement);
        }
    });
}

function completeAchievement(element) {
    // Mark an achievement as completed and move it to the completed section
    element.classList.add("completed");
    document.getElementById("completed-achievements").appendChild(element);
}

function logWorkout(duration, calories) {
    // Retrieve stored workout stats from localStorage
    let totalWorkouts = parseInt(localStorage.getItem("totalWorkouts")) || 0;
    let totalCalories = parseInt(localStorage.getItem("totalCalories")) || 0;
    let totalTime = parseInt(localStorage.getItem("totalTime")) || 0;

    // Update totals
    totalWorkouts++;
    totalCalories += parseInt(calories);
    totalTime += parseInt(duration);
    
    // Store updated stats in localStorage
    localStorage.setItem("totalWorkouts", totalWorkouts);
    localStorage.setItem("totalCalories", totalCalories);
    localStorage.setItem("totalTime", totalTime);
    
    console.log("Workout logged:", { duration, calories, totalWorkouts, totalCalories, totalTime });
    
    checkAchievements(); // Re-check achievements after logging a workout
}

function resetAchievements() {
    // Reset all stored workout stats in localStorage
    localStorage.removeItem("totalWorkouts");
    localStorage.removeItem("totalCalories");
    localStorage.removeItem("totalTime");
    
    // Move all completed achievements back to the unfinished section
    document.querySelectorAll("#completed-achievements .achievement").forEach(achievement => {
        achievement.classList.remove("completed");
        document.getElementById("unfinished-achievements").appendChild(achievement);
    });
    
    console.log("Achievements reset and moved back to unfinished section.");
}

window.checkAchievements = checkAchievements; // Ensure checkAchievements is accessible

