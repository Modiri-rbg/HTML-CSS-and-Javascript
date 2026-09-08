// Goal Tracking
document.getElementById("goal-form").addEventListener("submit", function (e) {
  e.preventDefault();
  // goal details to display on the form using their ids
  const goalDescription = document.getElementById("goal-description").value;
  const target = document.getElementById("target").value;

  const goalItem = document.createElement("li");
  goalItem.textContent = `${goalDescription} - Target: ${target}`;

  document.getElementById("goal-list").appendChild(goalItem);

  // Clear form
  document.getElementById("goal-form").reset();
});
