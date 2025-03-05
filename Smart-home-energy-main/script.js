let budget = 50;
const energyData = [10, 15, 20, 30, 50, 60, 70];
const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const ctx = document.getElementById('energyChart').getContext('2d');
const energyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Energy Usage (kWh)',
            data: energyData,
            borderColor: '#007bff',
            borderWidth: 3,
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#ffffff'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: '#555'
                }
            },
            y: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: '#555'
                }
            }
        }
    }
});

function setBudget() {
    budget = document.getElementById('budget').value;
    checkAlert();
}

function checkAlert() {
    const maxUsage = Math.max(...energyData);
    if (maxUsage > budget) {
        document.getElementById('alert').innerText = '⚠️ Warning: Energy usage exceeded!';
    } else {
        document.getElementById('alert').innerText = '';
    }
}

checkAlert();
