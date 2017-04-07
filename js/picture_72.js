
        // 基于准备好的dom，初始化echarts实例
    type = "";
    data1 = [];
    data2 = [];
    var myChartTest = function(){
    myChart_7 = echarts.init(document.getElementById('page_7'));
    
        // 指定图表的配置项和数据
    option_71 = {
            
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
                data: data1,
                axisLabel: {
                        rotate: 50,
                        interval:0,
                },
            },
            yAxis: {
                type: 'value',
                min:0,
                axisLabel : {
                formatter: '{value} K'
                },
            },
            series: [
                {
                    name:'值',
                    type: type,
                    data:data2,
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

        }
        var append = function(){
            name1 = $('.form_input2')[0].value;
            name2 = $('.form_input2')[2].value;
            name3 = $('.form_input2')[4].value;
            value1 = $('.form_input2')[1].value;
            value2 = $('.form_input2')[3].value;
            value3 = $('.form_input2')[5].value;
            data1 = [name1,name2,name3];
            data2 = [value1,value2,value3];
        }
        // 42.754, 42.677, 42.371, 41.907, 39.895, 39.117, 37.794, 37.470, 36.034, 32.452
        //'天一居','华融琴海湾','华发首府','中铁·诺德国际','龙光玖龙湾','格力海岸','佳兆业水岸华都','红树别院','碧桂园濠月湾','恒荣城市溪谷'