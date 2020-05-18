var chart    = document.getElementById('myChart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(0, 174, 255, 0.7)');
gradient.addColorStop(0.3, 'rgba(0, 174, 255, 0.30)');
gradient.addColorStop(1, 'rgba(0, 174, 255, 0)');


var data  = {
    labels: [ 'Jan','Feb','Mar','Apr','May','Jun','Jui','Aug','Sep','Oct','Nov','Dec' ],
    datasets: [{
			label: 'Distance',
			backgroundColor: gradient,
			borderWidth: 1,
			borderColor: 'rgb(0, 174, 255)',
			data: [2,3,2,4,2.5,2.1,1.5,1.1,1.3,1.6,1.8,2]
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
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
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
    type: 'line',
    data: data,
		options: options
});
