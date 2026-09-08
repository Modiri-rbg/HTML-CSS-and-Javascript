document.addEventListener("DOMContentLoaded", () => {
  console.log("charts.js is loaded");
  
  // Check if localStorage has workout data
  let workoutData = JSON.parse(localStorage.getItem("workoutData")) || {};
  console.log("Loaded workoutData from localStorage:", workoutData);
  
  const workoutTypes = ["running", "cycling", "strength-training", "swimming", "walking", "functional-training", "aerobics"];
  
  const canvas = document.getElementById("workout-chart");
  if (!canvas) {
      console.error("Canvas element not found!");
      return;
  }
  
  const ctx = canvas.getContext("2d");
  console.log("Chart.js Loaded:", typeof Chart !== "undefined");
  
  const defaultData = [0, 0, 0, 0, 0, 0, 0];
  const backgroundColors = ["#FF6384", "#36A2EB", "#FFCE56", "#ff6347", "#FFFF00", "#FF00FF", "#00FFFF"];
  
  let workoutChart = null;
  
  function createChart() {
      if (workoutChart) {
          workoutChart.destroy();
      }
      workoutChart = new Chart(ctx, {
          type: "bar",
          data: {
              labels: ["Running", "Cycling", "Strength Training", "Swimming", "Walking", "Functional Training", "Aerobics"],
              datasets: [{
                  label: "Workout Duration (minutes)",
                  data: workoutTypes.map((type, index) => workoutData[type] || defaultData[index]),
                  backgroundColor: backgroundColors,
              }],
          },
          options: {
              responsive: true,
              maintainAspectRatio: true,
              aspectRatio: 2,
              scales: {
                  y: {
                      beginAtZero: true,
                  },
              },
          },
      });
  }

createChart();

  // Update the chart when the page is visible again
  document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
          updateGraphs();
      }
  });
  
  updateGraphs();
});

function updateGraphs() {
    let updatedData = JSON.parse(localStorage.getItem("workoutData")) || {};
    console.log("updateGraphs() called! Current workout data:", updatedData);

    let graphData = workoutTypes.map(type => updatedData[type.toLowerCase().replace(/\s+/g, "-")] || 0);

    console.log("Final data being sent to the graph:", graphData);

    if (typeof workoutChart !== "undefined") {
        workoutChart.data.datasets[0].data = graphData;
        workoutChart.update();
        console.log("✅ Graph updated successfully!");
    } else {
        console.error("❌ workoutChart is undefined! The chart might not be initialized yet.");
    }
}
window.updateGraphs = updateGraphs; // Ensure updateGraphs() is always accessible

function resetGraphs() {
    console.log("🚀 Reset Graphs function triggered!");

    if (confirm("Are you sure you want to reset the workout graphs? This action cannot be undone.")) {
        console.log("User confirmed reset!");

        // Clear workout data from localStorage
        localStorage.removeItem("workoutData");
        localStorage.setItem("workoutData", JSON.stringify({})); // Store an empty object
        console.log("🗑️ Cleared localStorage workoutData!");
        location.reload();

        // Reset the chart data immediately
        if (typeof workoutChart !== "undefined" && workoutChart !== null) {
            console.log("📊 Resetting chart data...");
            let resetData = new Array(workoutChart.data.labels.length).fill(0);
            workoutChart.data.datasets[0].data = resetData;
            workoutChart.update();
            console.log("Graph visually reset!");
        } else {
            console.warn("workoutChart was not initialized before reset.");
        }

        // Ensure the chart is fully recreated
        console.log("📊 Recreating chart with reset data...");
        setTimeout(() => {
            createChart();
            updateGraphs(); // Update the graph immediately
            console.log("Chart successfully reset and updated!");
        }, 300);
    } else {
        console.log("❌ User canceled the reset.");
    }
}
window.resetGraphs = resetGraphs; //Ensure it's globally available





document.addEventListener("DOMContentLoaded", function () {
    console.log("📂 charts.js is loaded!");

    // ✅ Attach Reset Button
    setTimeout(() => {
        const resetButton = document.getElementById("reset-graphs-btn");
        if (resetButton) {
            resetButton.addEventListener("click", resetGraphs);
            console.log("✅ Reset Graphs button attached!");
        } else {
            console.error("❌ Reset Graphs button not found in DOM!");
        }
    }, 500);

    // ✅ Ensure the chart is initialized before calling updateGraphs()
    if (typeof createChart === "function") {
        createChart();
        console.log("✅ createChart() executed successfully.");
    } else {
        console.error("❌ createChart() is not defined!");
    }

    setTimeout(() => {
        if (typeof updateGraphs === "function") {
            updateGraphs();
            console.log("✅ updateGraphs() called successfully!");
        } else {
            console.error("❌ updateGraphs() is not defined!");
        }
    }, 1000);
});



