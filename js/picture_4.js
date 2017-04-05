        // 基于准备好的dom，初始化echarts实例
        var myChart_4 = echarts.init(document.getElementById('page_4'));

       

        var colors = ['#fff', '#d14a61', '#675bba'];

        option_4 = {
            animationDuration: function () {return 2000;},
            color: colors,

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                right: '10%'
            },
            toolbox: {
                feature: {
                    saveAsImage: {
                        show: true
                    }
                }
            },
            legend: {
                data: ['销售套数', '成交均价']
            },
            xAxis: [{
                type: 'category',
                
                data: ['3月24','3月25','3月26','3月27','3月28','3月29','3月30']
            }],
            yAxis: [{
                type: 'value',
                name: '销售套数',
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} '
                },
                splitLine:{
                    show:false,
                }
            }, {

            }, {
                type: 'value',
                name: '成交均价',
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: '{value} '
                },
                splitLine:{
                    show:false,
                }
            }],
            series: [{
                name: '销售套数',
                type: 'bar',
                itemStyle: {
                normal: {
                    color: 'tomato',
                    barBorderColor: 'tomato',
                    barBorderWidth: 6,
                    barBorderRadius:0,
                    label : {
                        show: true, position: 'insideTop'
                    }
                }
                },
                data: [53, 68, 37, 30, 31, 28, 30]
            }, {
                name: '成交均价',
                type: 'line',
                label : {
                        show: true, position: 'outSideTop'
                    },
                yAxisIndex: 2,
                data: [19.772, 18.477, 23.880, 18.142, 17.210, 21.838, 20.072]
            }]
        };