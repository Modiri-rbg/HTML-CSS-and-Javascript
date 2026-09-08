document.addEventListener("DOMContentLoaded", () => {
    const countdownDisplay = document.getElementById("countdown"); // Element to display countdown timer
    const challengeTitle = document.getElementById("challenge-title"); // Element to display challenge name
    const resetButton = document.getElementById("reset-challenge"); // Button to reset the challenge
    let countdownInterval;

    function startCountdown(targetDate) {
        clearInterval(countdownInterval); // Clear any existing countdown interval

        countdownInterval = setInterval(() => {
            const now = new Date().getTime(); // Get current time
            const timeLeft = targetDate - now; // Calculate time remaining

            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                if (countdownDisplay) countdownDisplay.textContent = "Time to start your challenge!!";
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // Calculate days left
            const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24); // Calculate hours left
            const minutes = Math.floor((timeLeft / (1000 * 60)) % 60); // Calculate minutes left
            const seconds = Math.floor((timeLeft / 1000) % 60); // Calculate seconds left

            if (countdownDisplay) {
                countdownDisplay.textContent = `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }

    function resetChallenge() {
        localStorage.removeItem("challengeName"); // Remove stored challenge name
        localStorage.removeItem("challengeDate"); // Remove stored challenge date
        clearInterval(countdownInterval); // Clear countdown timer
        if (challengeTitle) challengeTitle.textContent = "No Challenge Set";
        if (countdownDisplay) countdownDisplay.textContent = "00:00:00";
    }

    if (resetButton) {
        resetButton.addEventListener("click", resetChallenge); // Attach reset function to reset button
    }

    // Load saved challenge from localStorage
    const savedChallengeName = localStorage.getItem("challengeName");
    const savedChallengeDate = localStorage.getItem("challengeDate");
    if (savedChallengeName && savedChallengeDate) {
        if (challengeTitle) challengeTitle.textContent = savedChallengeName;
        startCountdown(parseInt(savedChallengeDate)); // Start countdown with saved date
    }

    // Handle form submission to set a new challenge
    const challengeForm = document.getElementById("challenge-form");
    if (challengeForm) {
        challengeForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form from reloading the page
            
            const challengeName = document.getElementById("challenge-name").value; // Get challenge name
            const challengeDate = new Date(document.getElementById("challenge-date").value).getTime(); // Get challenge date
            
            if (isNaN(challengeDate)) {
                alert("Please select a valid date and time."); // Validate input
                return;
            }

            localStorage.setItem("challengeName", challengeName); // Save challenge name
            localStorage.setItem("challengeDate", challengeDate); // Save challenge date

            if (challengeTitle) challengeTitle.textContent = challengeName;
            startCountdown(challengeDate); // Start countdown with new date

            challengeForm.reset(); // Clear form fields
        });
    }
});
