function updateCountdown(id, startDate, courseName) {
  const now = new Date().getTime();
  const distance = startDate - now;

  if (distance < 0) {
    document.getElementById(
      id
    ).innerHTML = `${courseName} has already started!`;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    id
  ).innerHTML = `${courseName}: ${days}d ${hours}h ${minutes}m ${seconds}s until the course starts`;
}

const higherCertificateDate = new Date("September 1, 2024 00:00:00").getTime();
const diplomaDate = new Date("October 1, 2024 00:00:00").getTime();
const bitDate = new Date("November 1, 2024 00:00:00").getTime();
const bcomDate = new Date("December 1, 2024 00:00:00").getTime();

function updateAllCountdowns() {
  updateCountdown(
    "higherCertificate",
    higherCertificateDate,
    "Higher Certificate"
  );
  updateCountdown("diploma", diplomaDate, "Diploma");
  updateCountdown("bit", bitDate, "BIT");
  updateCountdown("bcom", bcomDate, "BCOM");
}

setInterval(updateAllCountdowns, 1000);
