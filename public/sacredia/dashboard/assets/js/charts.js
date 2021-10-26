(function($) {
  'use strict';

  // Bar chart
  var barChart = new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Free users", "Subscribed users", "All users"],
      datasets: [{
        label: "Number of User",
        backgroundColor: ["#FFEAE5", "#FF6A47", "#022147"],
        data: [2478, 5267, 1734, 3384, 1433]
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Membership Types'
      }
    }
  });

  //Line Chart
  var ctx = document.getElementById('line-chart').getContext("2d");
  var gradientStroke = ctx.createLinearGradient(0, 0, 0, 450);
  gradientStroke.addColorStop(0, '#FF6A47');

  var gradientFill = ctx.createLinearGradient(0, 0, 0, 450);
  gradientFill.addColorStop(0, "rgba(255, 106, 72, 0.5)");
  gradientFill.addColorStop(1, "rgba(255, 234, 229, 0.10)");

  // all data
  var data_1 = [1800, 1600, 2300, 2800, 3600, 2900, 3000, 3800, 3600];
  var data_2 = [4100, 3800, 3200, 3400, 2700, 2600, 3300, 3000, 2900];
  var labels = ["Jan-01", "Jan-04", "Jan-5", "Jan-17", "Jan-20", "Jan-25", "Jan-26", "Jan-27", "Jan-30"];

  var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: "Amount Donated $",
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 2,
        fill: true,
        backgroundColor: gradientFill,
        borderWidth: 1,
        data: data_1
      }]
    },
    options: {
      legend: {
        display: false,
        position: "bottom"
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 200,
            padding: 20
          },
          gridLines: {
            drawTicks: false,
            display: false
          }

        }],
        xAxes: [{
          gridLines: {
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
          }
        }]
      }
    }
  });

})(jQuery);
