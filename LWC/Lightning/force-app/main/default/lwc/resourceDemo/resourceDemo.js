import { LightningElement, track, api } from 'lwc';
import rexourceContainer from '@salesforce/resourceUrl/SalesforceTrailHead';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';

export default class ResourceDemo extends LightningElement {
    @track error;
    //@track count = 0;
    chart;
    steppedChart;
    radarChart;
    @api greeting;
    @api heading;
    @api message;
    chartjsInitialized = false;

    /* generate the URL for the JavaScript, CSS and image file */
    chartjs = rexourceContainer + '/Static_Resource/js/chart.js';
    utilJs = rexourceContainer + '/Static_Resource/js/utils.js';
    styleCss = rexourceContainer + '/Static_Resource/css/style.css';
    einsteinURL = rexourceContainer + '/Static_Resource/image/einstein.png';
    astroURL = rexourceContainer + '/Static_Resource/image/astro.png';
    codeyURL = rexourceContainer + '/Static_Resource/image/Codey.png';
    trailheadLWCURL = rexourceContainer + '/Static_Resource/image/trailhead.png';
    koaURL = rexourceContainer + '/Static_Resource/image/Koa.png';
    
    renderedCallback() {
        /*eslint-disable */
        console.log('count');
        if (this.chartjsInitialized) {
            return;
        }
        this.chartjsInitialized = true;
        Promise.all([
            loadScript(this, this.utilJs),
            loadScript(this, this.chartjs),
            loadStyle(this, this.styleCss)
        ]).then(() => {
            this.generateSteppedChart();
        })
        .catch(error => {
            this.error = error;
            console.log(' Error Occured ', error);
        });
    }
    errorCallback(error, stack) {
        this.error = error;
        console.log(' this.error ', this.error);
    }
    generateSteppedChart(){
        var barChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Dataset 1',
				backgroundColor: [
					window.chartColors.red,
					window.chartColors.orange,
					window.chartColors.yellow,
					window.chartColors.green,
					window.chartColors.blue,
					window.chartColors.purple,
					window.chartColors.red
				],
				yAxisID: 'y-axis-1',
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}, {
				label: 'Dataset 2',
				backgroundColor: window.chartColors.grey,
				yAxisID: 'y-axis-2',
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}]
        };
        
        var dataSet = {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart - Multi Axis'
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                },
                scales: {
                    yAxes: [{
                        type: 'linear', 
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear', 
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }],
                }
            }
        }
        //document.querySelector
        const ctx = this.template
                    .querySelector('canvas.stepped')
                    .getContext('2d');
        this.steppedChart = new window.Chart(ctx, dataSet);


        var radarData = {
            labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
                datasets: [{
                    label: "Student A",
                    backgroundColor: "rgba(200,0,0,0.2)",
                    data: [65, 75, 70, 80, 60, 80]
                }, {
                    label: "Student B",
                    backgroundColor: "rgba(0,0,200,0.2)",
                    data: [54, 65, 60, 70, 70, 75]
                }]
            /*labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
            datasets: [{
                data: [80, 90, 80, 66]
            }]*/
        }


        var radarSet = {
            type: 'radar',
            data: radarData,
            options: {
                scale: {
                    angleLines: {
                        display: true
                    },
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                }
            }
        }

        const ctx1 = this.template
                    .querySelector('canvas.radar')
                    .getContext('2d');
        this.radarChart = new window.Chart(ctx1, radarSet);
    }
}