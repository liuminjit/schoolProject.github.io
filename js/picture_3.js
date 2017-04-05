
        // 基于准备好的dom，初始化echarts实例
        var myChart_3 = echarts.init(document.getElementById('page_3'));

        var myData = ['前山', '新香洲', '吉大', '南屏', '三灶', '拱北'];
		option_3 = {
		    backgroundColor: '#fff',
		    title: {
		        text: '关注度和单价',
		        textStyle: {
		            color: '#000',
		            fontSize: 16,
		        },
		    },
		    legend: {
		        data: ['关注度', '单价'],
		        top: 4,
		        right: '10%',
		        textStyle: {
		            color: '#000',
		        },
		    },
		    tooltip: {
		        show: true,
		        trigger: 'axis',
		        formatter: '{b}<br/>{a}: {c}',
		        axisPointer: {
		            type: 'shadow',
		        }
		    },
		    toolbox: {
		        feature: {
		            saveAsImage: {
		                show: true
		            }
		        }
		    },
		    grid: [{
		        show: false,
		        left: '4%',
		        top: 60,
		        bottom: 30,
		        containLabel: true,
		        width: '46%',
		    }, {
		        show: false,
		        left: '46.5%',
		        top: 80,
		        bottom: 30,
		        width: '4%',
		    }, {
		        show: false,
		        right: '8%',
		        top: 60,
		        bottom: 30,
		        containLabel: true,
		        width: '54%',
		    }, ],

		    xAxis: [{
		        type: 'value',
		        inverse: true,
		        axisLine: {
		            show: false,
		        },
		        axisTick: {
		            show: false,
		        },
		        position: 'top',
		        axisLabel: {
		            show: true,
		            textStyle: {
		                color: '#B2B2B2',
		                fontSize: 12,
		            },
		        },
		        splitLine: {
		            show: true,
		            lineStyle: {
		                color: '#1F2022',
		                width: 0,
		                type: 'solid',
		            },
		        },
		    }, {
		        gridIndex: 1,
		        show: false,
		    }, {
		        gridIndex: 2,
		        type: 'value',
		        axisLine: {
		            show: false,
		        },
		        axisTick: {
		            show: false,
		        },
		        position: 'top',
		        axisLabel: {
		            show: true,
		            textStyle: {
		                color: '#B2B2B2',
		                fontSize: 1,
		            },
		        },
		        splitLine: {
		            show: true,
		            lineStyle: {
		                color: '#1F2022',
		                width: 0,
		                type: 'solid',
		            },
		        },
		    }, ],
		    yAxis: [{
		        type: 'category',
		        inverse: true,
		        position: 'right',
		        axisLine: {
		            show: false
		        },
		        axisTick: {
		            show: false
		        },
		        axisLabel: {
		            show: false,
		            margin: 8,
		            textStyle: {
		                color: '#9D9EA0',
		                fontSize: 3,
		            },

		        },
		        data: myData,
		    }, {
		        gridIndex: 1,
		        type: 'category',
		        inverse: true,
		        position: 'left',
		        axisLine: {
		            show: false
		        },
		        axisTick: {
		            show: false
		        },
		        axisLabel: {
		            show: true,
		            textStyle: {
		                color: '#9D9EA0',
		                fontSize: 3,
		            },

		        },
		        data: myData.map(function(value) {
		            return {
		                value: value,
		                textStyle: {
		                    align: 'center',
		                }
		            }
		        }),
		    }, {
		        gridIndex: 2,
		        type: 'category',
		        inverse: true,
		        position: 'left',
		        axisLine: {
		            show: false
		        },
		        axisTick: {
		            show: false
		        },
		        axisLabel: {
		            show: false,
		            textStyle: {
		                color: '#9D9EA0',
		                fontSize: 12,
		            },

		        },
		        data: myData,
		    }, ],
		    series: [{
		            name: '关注度',
		            type: 'bar',
		            barGap: 20,
		            barWidth: 12,
		            label: {
		                normal: {
		                    show: false,
		                },
		                emphasis: {
		                    show: true,
		                    position: 'left',
		                    offset: [0, 0],
		                    textStyle: {
		                        color: '#fff',
		                        fontSize: 14,
		                    },
		                },
		            },
		            itemStyle: {
		                normal: {
		                    color: '#659F83',
		                },
		                emphasis: {
		                    color: '#08C7AE',
		                },
		            },
		            data: [100, 96, 78, 72, 55, 51],
		        },


		        {
		            name: '单价',
		            type: 'bar',
		            barGap: 20,
		            barWidth: 12,
		            xAxisIndex: 2,
		            yAxisIndex: 2,
		            label: {
		                normal: {
		                    show: false,
		                },
		                emphasis: {
		                    show: true,
		                    position: 'right',
		                    offset: [0, 0],
		                    textStyle: {
		                        color: '#fff',
		                        fontSize: 14,
		                    },
		                },
		            },
		            itemStyle: {
		                normal: {
		                    color: '#F68989',
		                },
		                emphasis: {
		                    color: '#F94646',
		                },
		            },
		            data: [23.423, 25.380, 27.084, 30.211, 16.100, 27.930],
		        },
		    ],
		    animationDuration: function () {return 2000;}
		};