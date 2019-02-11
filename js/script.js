Highcharts.chart('over-all', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Sales over time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'text',
                title: {
                    text: "Month"
                }
            },
            yAxis: {
                title: {
                    text: 'Income'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'Monthly Sales',
                data: [
                    [
                        "Jan",
                        10000
                    ],
                    [
                        "Feb",
                        4000
                    ],
                    [
                        "Mar",
                        7000
                    ],
                    [
                        "Apr",
                        9000
                    ],
                    [
                        "May",
                        11000
                    ],
                    [
                        "Jun",
                        14000
                    ],
                    [
                        "Jul",
                        8000
                    ],
                    [
                        "Aug",
                        10500
                    ],
                    [
                        "Sep",
                        7500
                    ]
                ]
            }]
        });