         // 基于准备好的dom，初始化echarts实例
        var myChart_5 = echarts.init(document.getElementById('page_5'));

        option_5 = {
            animationDuration: function () {return 2000;},
            title : {
                text: '不同区域销售',
            },
            legend: {
                selectedMode:false,
                data:['销售套数']
            },
            toolbox: {
                show : true,
                feature : {
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['斗门','唐家','金湾','前山','南湾','其他']
                }
            ],
            yAxis : [
                {   
                    max: 140,
                    type : 'value',
                    boundaryGap: [0, 0.1]
                }
            ],
            series : [
                {
                    name:'销售套数',
                    type:'bar',
                    stack: 'sum',
                    barCategoryGap: '50%',
                    itemStyle: {
                        normal: {
                            color: 'tomato',
                            barBorderColor: 'tomato',
                            barBorderWidth: 6,
                            barBorderRadius:2,
                            label : {
                                show: true, position: 'insideTop'
                            }
                        }
                    },
                    data:[138, 43, 38, 15, 15, 28]
                },
                
            ]
        };
                            