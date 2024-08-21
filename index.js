const ctx = document.getElementById('growthChart').getContext('2d');
            const growthChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
                    datasets: [{
                        label: 'Jumlah Partisipan',
                        data: [2490, 4000, 6000, 8000, 10000],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
const video = document.getElementById("myVideo");
    // Tambahkan event listener "click"
    video.addEventListener("click", function() {
    // Periksa status pemutaran
    if (video.paused) {
                // Jika video dijeda, maka putar
                video.play();
              } else {
                // Jika video sedang diputar, maka jeda
                video.pause();
              }
            });