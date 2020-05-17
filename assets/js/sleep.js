var ctx = document.getElementById("sleepChart");
    Chart.defaults.global.defaultFontColor = '#fff';
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ['Mon','Tues','Wed','Thur','Fri','Sat','Sun'],
    datasets: [{
      label: 'REM',
      borderColor: 'rgb(204, 153, 255)',
      backgroundColor: 'rgba(204, 153, 255, 0.2)',
      data: [25,28,27,24,29,26,25]
    },{
      label: 'Deep sleep',
      borderColor: 'rgb(0, 153, 255)',
      backgroundColor: 'rgba(0, 153, 255, 0.2)',
      data: [128,135,137,124,126,129,131]
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
          type: 'linear',
          position: 'left',
          gridLines: {
            color: "#ffffff1e" ,
            },
          }],
      },
    legend: {
      display: true,
      labels: {
          fontColor: '#fff'
      }
    }
    }
    });