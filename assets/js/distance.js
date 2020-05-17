var ctx = document.getElementById("myChart");
    Chart.defaults.global.defaultFontColor = '#fff';
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jui','Aug','Sep','Oct','Nov','Dec'],
    datasets: [{
      label: 'Distance',
      borderColor: '#50D2B7',
      backgroundColor: 'rgba(80, 210, 184, 0.2)',
      data: [2,3,2,4,2.5,2.1,1.5,1.1,1.3,1.6,1.8,2]
    }
  ]
    },
    options: {
    
    responsive: true,
    scales: {
        xAxes: [{
          gridLines: {
          display: false,
          },
          }],
        yAxes: [{
          id: 'A',
          type: 'linear',
          position: 'left',
          gridLines: {
            color: "#ffffff1e" ,
            },
          },],
      },
    legend: {
      display: false,
      labels: {
          fontColor: '#fff'
      }
    }
    }
    });