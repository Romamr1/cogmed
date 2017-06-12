import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

    @ViewChild('barCanvas') barCanvas;
    @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;


    OilPrice: {
        date: Date;
        aVal1: number;
        aVal2: number;
        total: number;
    }[];


    barChart: any;
    doughnutChart: any;
    lineChart: any;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {

    this.OilPrice = [{
          date: new Date(2005, 0, 1),
          aVal1: 36,
          aVal2: 44,
          total: 40
      }, {
          date: new Date(2005, 1, 1),
          aVal1: 41,
          aVal2: 47,
          total: 44
      }, {
          date: new Date(2005, 2, 1),
          aVal1: 44,
          aVal2: 52,
          total: 48
      }, {
          date: new Date(2005, 3, 1),
          aVal1: 44,
          aVal2: 54,
          total: 50
      }, {
          date: new Date(2005, 4, 1),
          aVal1: 43,
          aVal2: 49,
          total: 46
      }, {
          date: new Date(2005, 5, 1),
          aVal1: 49,
          aVal2: 57,
          total: 53
      }, {
          date: new Date(2005, 6, 1),
          aVal1: 50,
          aVal2: 58,
          total: 54
      }, {
          date: new Date(2005, 7, 1),
          aVal1: 57,
          aVal2: 67,
          total: 62
      }, {
          date: new Date(2005, 8, 1),
          aVal1: 60,
          aVal2: 66,
          total: 63
      }, {
          date: new Date(2005, 9, 1),
          aVal1: 57,
          aVal2: 63,
          total: 60
      }, {
          date: new Date(2005, 10, 1),
          aVal1: 54,
          aVal2: 60,
          total: 57
      }, {
          date: new Date(2005, 11, 1),
          aVal1: 55,
          aVal2: 59,
          total: 57
      }];
  };

  helloWorld() {
        alert('Hello world!');
  }



  ionViewDidLoad() {

        this.barChart = new Chart(this.barCanvas.nativeElement, {

            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }

        });


        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }

        });

        this.lineChart = new Chart(this.lineCanvas.nativeElement, {

            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointStyle: 'line',
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 30,
                        data: [
                          {x: 12, y: 15},
                          {x: 11, y: 14},
                          {x: 10, y: 13},
                          {x: 9, y: 12},
                          {x: 8, y: 11},
                          {x: 7, y: 10}],
                        spanGaps: true,
                    }
                ]
            }

        });

    }


}
