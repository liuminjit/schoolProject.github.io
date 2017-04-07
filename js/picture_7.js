
        // 基于准备好的dom，初始化echarts实例
    var myChart_7 = echarts.init(document.getElementById('page_7'));
    
        // 指定图表的配置项和数据
    var option_71 = {
            
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {  
                    magicType: {type: ['line', 'bar']},
                    saveAsImage: {}
                }
            },
            legend: {
                data:['一周内TOP10',]
            },
            xAxis:  {
                type: 'category',
                boundaryGap: ['20%', '30%'],
                data: ['天一居','华融琴海湾','华发首府','中铁·诺德国际','龙光玖龙湾','格力海岸','佳兆业水岸华都','红树别院','碧桂园濠月湾','恒荣城市溪谷'],
                axisLabel: {
                        rotate: 50,
                        interval:0,
                },
            },
            yAxis: {
                type: 'value',
                min:18,
                axisLabel : {
                formatter: '{value} K'
                },
            },
            series: [
                {
                    name:'成交均价Top10',
                    type: 'bar',
                    data:[42.754, 42.677, 42.371, 41.907, 39.895, 39.117, 37.794, 37.470, 36.034, 32.452],
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
                                position: 'top',
                                formatter: '{c}',
                            }
                        }
                    },
                }
            ],
            grid: {
                right: '5px',
                bottom: '100px',
                top:'30px',
            },
            backgroundColor:'rgba(255, 255, 255, 1 )',
            animationDuration: function () {return 2000;}
        };

    var option_72 = {
            
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {  
                    magicType: {type: ['line', 'bar']},
                    saveAsImage: {}
                }
            },
            legend: {
                data:['一周内TOP10',]
            },
            xAxis:  {
                type: 'category',
                boundaryGap: ['20%', '30%'],
                data: ['k2.荔枝湾','华发首府','华融琴海湾','格力海岸','天一居','中铁·诺德国际','佳兆业水岸华都','仁恒滨海半岛','碧桂园濠月湾','红树别院'],
                axisLabel: {
                        rotate: 50,
                        interval:0,
                },
            },
            yAxis: {
                type: 'value',
                min:18,
                axisLabel : {
                formatter: '{value} K'
                },
            },
            series: [
                {
                    name:'成交均价Top10',
                    type:'bar',
                    data:[49.895 , 42.754, 41.776, 40.628, 40.416, 39.999, 39.600, 39.176, 38.249, 37.470],
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
                                position: 'top',
                                formatter: '{c}',
                            }
                        }
                    },
                }
            ],
            grid: {
                right: '5px',
                bottom: '100px',
                top:'30px',
            },
            backgroundColor:'rgba(255, 255, 255, 1 )',
            animationDuration: function () {return 2000;}
        };
var option_73 = {
            
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {  
                    magicType: {type: ['line', 'bar']},
                    saveAsImage: {}
                }
            },
            legend: {
                data:['一周内TOP10',]
            },
            xAxis:  {
                type: 'category',
                boundaryGap: ['20%', '30%'],
                data: ['格力海岸','华融琴海湾','华发首府','中信红树湾','佳兆业水岸华都','牛津公馆','天一居','中铁·诺德国际','碧桂园濠月湾','华策帝景湾'],
                axisLabel: {
                        rotate: 50,
                        interval:0,
                },
            },
            yAxis: {
                type: 'value',
                min:18,
                axisLabel : {
                formatter: '{value} K'
                },
            },
            series: [
                {
                    name:'成交均价Top10',
                    type:'bar',
                    data:[46.846 , 45.813, 42.598, 40.558, 39.771, 39.008, 37.923, 37.491, 36.902, 34.692],
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
                                position: 'top',
                                formatter: '{c}',
                            }
                        }
                    },
                }
            ],
            grid: {
                right: '5px',
                bottom: '100px',
                top:'30px',
            },
            backgroundColor:'rgba(255, 255, 255, 1 )',
            animationDuration: function () {return 2000;}
        };


    //切换方法
    var changePage_7_1 = function(){
            myChart_7.setOption(option_71)
        }
        var changePage_7_2 = function(){
            myChart_7.setOption(option_72)
        }
        var changePage_7_3 = function(){
            myChart_7.setOption(option_73)
        }