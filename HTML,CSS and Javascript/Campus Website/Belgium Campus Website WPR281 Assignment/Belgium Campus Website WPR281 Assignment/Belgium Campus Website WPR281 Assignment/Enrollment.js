document.addEventListener("DOMContentLoaded", () => {
  const enrollmentForm = document.getElementById("enrollment-form");
  const successMessageSection = document.getElementById("success-message");

  enrollmentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simulate enrollment process
    successMessageSection.classList.remove("hidden");
    setTimeout(() => {
      successMessageSection.classList.add("hidden");
      window.location.href = "index.html#home"; // Redirect to home
    }, 3000);
  });
});
