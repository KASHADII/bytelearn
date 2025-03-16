document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");
    
    // Toggle sidebar
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // Setup modal logic
    const modal = document.getElementById("setup-modal");
    if (!localStorage.getItem("userSetupComplete")) {
        modal.style.display = "block";
    }

    document.getElementById("setup-form").addEventListener("submit", (event) => {
        event.preventDefault();
        localStorage.setItem("userSetupComplete", "true");
        modal.style.display = "none";
    });

    // Responsive Chart Settings
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    // Performance Chart
    const ctx1 = document.getElementById("performanceChart").getContext("2d");
    new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["Learning", "Understanding", "Logical Thinking", "Creativity"],
            datasets: [{
                label: "Score",
                data: [85, 75, 90, 50],
                backgroundColor: ["#ffcc00", "#ff6666", "#66ccff", "#99ff99"]
            }]
        },
        options: chartOptions
    });

    // Test Attempted Chart
    const ctx2 = document.getElementById("testChart").getContext("2d");
    new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            datasets: [{
                label: "Test Attempted",
                data: [1, 1, 0, 1, 1, 0, 1],
                backgroundColor: ["green", "green", "red", "green", "green", "red", "green"]
            }]
        },
        options: chartOptions
    });
});
