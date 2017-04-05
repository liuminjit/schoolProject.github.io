        var myChart_6 = echarts.init(document.getElementById('page_6'));
        
        var option_6 = {
            animationDuration: function () {return 2000;},
            backgroundColor: '#fff',

            title: {
                x: 'center',
                text: '按楼盘名-销售套数 TOP 10',
            },
            tooltip: {
                trigger: 'item'
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            grid: {
                borderWidth: 0,
                y: 80,
                y2: 80,

            },
            xAxis: [
                {
                   
                    type: 'category',
                    show: true,
                    data: ['招商依云水岸', '惠景慧园', '华发依山郡', '心海州', '中邦城市美墅', '金地扑满花园', '金地格林泊乐', '美湖湾', '时代倾城', '龙光玖龙府'],
                    axisLabel: {
                        rotate: 50,
                        interval:0,
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: true,
                    splitLine:{
                        show:false,
                    }
                }
            ],
            series: [
                {
                    name: '楼盘名',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                                  '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                   '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                   '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                                ];
                                return colorList[params.dataIndex]
                            },
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: '{c}',
                            }
                        }
                    },
                    data: [23,23,22,15,13,11,11,11,10,10],
                    
                }
            ]
        };