import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
 
// Create the chart
const config = {
    chart: {
        type: 'column'
    },
    title: {
        text: '나의 식단 영양소 성분'
    },
    subtitle: {
        text: '영양소 성분으로 건강 상태를 확인하세요!'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'g'
        }
 
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}g'
            }
        }
    },
 
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
 
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: '칼로리',
            y: 60,
            drilldown: '칼로리'
        }, {
            name: '탄수화물',
            y: 12.4,
            drilldown: '탄수화물'
        }, {
            name: '단백질',
            y: 1.2,
            drilldown: '단백질'
        }, {
            name: '지방',
            y: 0.2,
            drilldown: '지방'
        }]
    }],
    drilldown: {
        series: [{
            name: '칼로리',
            id: '칼로리',
            data: [
                [
                    'v11.0',
                    24.13
                ],
                [
                    'v8.0',
                    17.2
                ],
                [
                    'v9.0',
                    8.11
                ],
                [
                    'v10.0',
                    5.33
                ],
                [
                    'v6.0',
                    1.06
                ],
                [
                    'v7.0',
                    0.5
                ]
            ]
        }, {
            name: '탄수화물',
            id: '탄수화물',
            data: [
                [
                    'v40.0',
                    5
                ],
                [
                    'v41.0',
                    4.32
                ],
                [
                    'v42.0',
                    3.68
                ],
                [
                    'v39.0',
                    2.96
                ],
                [
                    'v36.0',
                    2.53
                ],
                [
                    'v43.0',
                    1.45
                ],
                [
                    'v31.0',
                    1.24
                ],
                [
                    'v35.0',
                    0.85
                ],
                [
                    'v38.0',
                    0.6
                ],
                [
                    'v32.0',
                    0.55
                ],
                [
                    'v37.0',
                    0.38
                ],
                [
                    'v33.0',
                    0.19
                ],
                [
                    'v34.0',
                    0.14
                ],
                [
                    'v30.0',
                    0.14
                ]
            ]
        }, {
            name: '단백질',
            id: '단백질',
            data: [
                [
                    'v35',
                    2.76
                ],
                [
                    'v36',
                    2.32
                ],
                [
                    'v37',
                    2.31
                ],
                [
                    'v34',
                    1.27
                ],
                [
                    'v38',
                    1.02
                ],
                [
                    'v31',
                    0.33
                ],
                [
                    'v33',
                    0.22
                ],
                [
                    'v32',
                    0.15
                ]
            ]
        }, {
            name: '지방',
            id: '지방',
            data: [
                [
                    'v8.0',
                    2.56
                ],
                [
                    'v7.1',
                    0.77
                ],
                [
                    'v5.1',
                    0.42
                ],
                [
                    'v5.0',
                    0.3
                ],
                [
                    'v6.1',
                    0.29
                ],
                [
                    'v7.0',
                    0.26
                ],
                [
                    'v6.2',
                    0.17
                ]
            ]
        }]
    }
};
 
class CustomerGraph extends React.Component {
    render() {
        return (
            <div>
                <ReactHighcharts config={config}></ReactHighcharts>
            </div>
        );
    }
}
 
export default CustomerGraph;