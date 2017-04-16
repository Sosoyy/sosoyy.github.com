;
(function (win) {
    var deviceWidth = document.documentElement.clientWidth;
    WindowResize();
    $(window).resize(function () {
        WindowResize();
    });

    function WindowResize() {
        deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 750) deviceWidth = 750;
        document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    }
})(window);

var deleteLog = false;


$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['cover', 'contract', 'exp', 'pro', 'skill','contractagain', '3q'],
        sectionsColor: ['#292929', '#292929', '#292929', '#292929', '#292929', '#292929'],
        loopTop: true,
        loopBottom: true
    });
});


var html5_option = {
    series: [
        {
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:88,
                itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#4c8afe'
							}, {
								offset: 0.7,
								color: '#6976ff'
							}, {
								offset: 1,
								color: '#7f66ff'
							}]
						)
					},
					emphasis: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#4c8afe'
							}, {
								offset: 0.7,
								color: '#6976ff'
							}, {
								offset: 1,
								color: '#7f66ff'
							}]
						)
					}
				}},
                {value:12,
                  itemStyle: {
					normal: {
						color:'#f6f6f6',
					},
					emphasis: {
						color: '#f6f6f6'
					 }	
					}
				},
            ]
        }
    ]
};
var htmlChart = echarts.init($('.html')[0]);
htmlChart.setOption(html5_option);
var css_option = {
    series: [
        {
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:Math.random()*90 + 80,
                itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#4c8afe'
							}, {
								offset: 0.7,
								color: '#6976ff'
							}, {
								offset: 1,
								color: '#7f66ff'
							}]
						)
					},
					emphasis: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#4c8afe'
							}, {
								offset: 0.7,
								color: '#6976ff'
							}, {
								offset: 1,
								color: '#7f66ff'
							}]
						)
					}
				}},
                {value:20,
                  itemStyle: {
					normal: {
						color:'#f6f6f6',
					},
					emphasis: {
						color: '#f6f6f6'
					 }	
					}
				},
            ]
        }
    ]
};
var cssChart = echarts.init($('.css')[0]);
cssChart.setOption(css_option);
var jqChart = echarts.init($('.jQuery')[0]);
jqChart.setOption(html5_option);
var angChart = echarts.init($('.angular')[0]);
css_option.series[0].data[0].value = 70;
css_option.series[0].data[1].value = 30;
angChart.setOption(css_option);

var reactChart = echarts.init($('.react')[0]);
css_option.series[0].data[0].value = 80;
css_option.series[0].data[1].value = 20;
reactChart.setOption(css_option);

var nodejsChart = echarts.init($('.nodejs')[0]);
css_option.series[0].data[0].value = 70;
css_option.series[0].data[1].value = 30;
nodejsChart.setOption(css_option);
var backboneChart = echarts.init($('.backbone')[0]);
css_option.series[0].data[0].value = 78;
css_option.series[0].data[1].value = 22;
backboneChart.setOption(css_option);
var EchartsChart = echarts.init($('.Echarts')[0]);
css_option.series[0].data[0].value = 80;
css_option.series[0].data[1].value = 20;
EchartsChart.setOption(css_option);

var bootstrapChart = echarts.init($('.bootstrap')[0]);
css_option.series[0].data[0].value = 85;
css_option.series[0].data[1].value = 15;
bootstrapChart.setOption(css_option);