// // script.js
// const bloodPressureData = {
//     labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
//     datasets: [{
//         label: 'Systolic',
//         data: [120, 140, 160, 150, 140, 130],
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//         fill: false
//     }, {
//         label: 'Diastolic',
//         data: [80, 90, 78, 85, 90, 80],
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//         fill: false
//     }]
// };

// const bloodPressureChart = new Chart(document.getElementById('bloodPressureChart'), {
//     type: 'line',
//     data: bloodPressureData,
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });



const ctx = document.getElementById('bloodPressureChart').getContext('2d');

// Data for Chart.js
const data = {
    labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
    datasets: [{
            label: 'Systolic',
            data: [120, 150, 130, 160, 140, 155],
            borderColor: '#e91e63',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.4
        },
        {
            label: 'Diastolic',
            data: [80, 90, 85, 88, 78, 82],
            borderColor: '#3f51b5',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.4
        }
    ]
};

// Config
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: { display: true }
        },
        scales: {
            x: { title: { display: true, text: 'Months' } },
            y: { title: { display: true, text: 'Pressure (mmHg)' } }
        }
    }
};

// Render Chart
const bloodPressureChart = new Chart(ctx, config);