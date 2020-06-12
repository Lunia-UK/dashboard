var chart    = document.getElementById('stepsGraph').getContext('2d'),
gradient = chart.createLinearGradient(0, 0, 0, 450);
gradient.addColorStop(0, 'rgba(21, 51, 103, 0.5)');
gradient.addColorStop(1, 'rgba(11, 26, 52, 0.5)');


var data  = {
labels: [ 'Mon', '2', '3', '4', '5', '6', '7'  ],
datasets: [{ 
    barThickness: 40,
    backgroundColor: gradient,
    borderWidth: 1,
	borderColor: 'rgb(0, 174, 255)',
    data: [30, 20, 10, 40, 50, 60, 70]
}]
};


var options = {
responsive: true,
maintainAspectRatio: true,
animation: {
    easing: 'easeInOutQuad',
    duration: 520
},
scales: {
    xAxes: [{
        gridLines: {
            color: 'rgba(200, 200, 200, 0.05)',
            lineWidth: 1
        }
    }],
    yAxes: [{
  display: false,
        gridLines: {
            color: 'rgba(200, 200, 200, 0.08)',
            lineWidth: 1
        }
    }]
},
legend: {
    display: false
},
tooltips: {
    titleFontFamily: 'Open Sans',
    backgroundColor: 'rgba(0,0,0,0.3)',
    titleFontColor: '#50D2B7',
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10
}
};


var chartInstance = new Chart(chart, {
type: 'bar',
data: data,
    options: options
});
