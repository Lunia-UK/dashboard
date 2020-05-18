var chart    = document.getElementById('sleepChart').getContext('2d'),
gradientDeep = chart.createLinearGradient(0, 0, 0, 450);

gradientDeep.addColorStop(0, 'rgba(4, 36, 173, 0.7)');
gradientDeep.addColorStop(0.3, 'rgba(4, 36, 173, 0.30)');
gradientDeep.addColorStop(1, 'rgba(4, 36, 173, 0)');

gradientREM = chart.createLinearGradient(0, 0, 0, 450);

gradientREM.addColorStop(0, 'rgba(204, 153, 255, 0.7)');
gradientREM.addColorStop(0.3, 'rgba(204, 153, 255, 0.30)');
gradientREM.addColorStop(1, 'rgba(204, 153, 255, 0)');


var data  = {
    labels: [ 'Mon','Tues','Wed','Thur','Fri','Sat','Sun' ],
    datasets: [{
      label: 'REM',
      borderColor: 'rgb(204, 153, 255)',
      backgroundColor: gradientREM,
      data: [25,28,27,24,29,26,25]
    },{
      label: 'Deep sleep',
      borderColor: 'rgb(4, 36, 173)',
      backgroundColor: gradientDeep,
      data: [128,135,137,124,126,129,131]
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
			gridLines: {
				color: 'rgba(200, 200, 200, 0.0)',
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
