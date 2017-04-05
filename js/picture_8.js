         // 基于准备好的dom，初始化echarts实例
        var myChart_8 = echarts.init(document.getElementById('page_8'));
        var myChart_81 = echarts.init(document.getElementById('page_81'));

        var labelTop = {
            normal : {
                label : {
                    show : true,
                    position : 'center',
                    formatter : '{b}',
                    textStyle: {
                        baseline : 'bottom'
                    }
                },
                labelLine : {
                    show : false
                }
            }
        };
        var labelFromatter = {
            normal : {
                label : {
                    formatter : function (params){
                        return 100 - params.value + '%'
                    },
                    textStyle: {
                        baseline : 'top'
                    }
                }
            },
        }
        var labelBottom = {
            normal : {
                color: '#ccc',
                label : {
                    show : true,
                    position : 'center'
                },
                labelLine : {
                    show : false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        var radius = [20, 30];
    var option_8 = {
            backgroundColor:'#fff',
            legend: {
                x : 'center',
                y : 'bottom',
                data:[
                    '招商地产','珠海华郡','高新建设','中邦置业','卡都海俊',
                    '金地集团', '裕利投资', '卓胜同兴', '国际赛车', '金地武汉'
                ]
            },
            title : {
                text: 'Top 10 开发商销量',
                subtext: '去化率环图',
                x: 'center'
            },
            toolbox: {
                show : true,
                feature : {                   
                    magicType : {
                        show: true, 
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                width: '20%',
                                height: '30%',
                                itemStyle : {
                                    normal : {

                                        label : {
                                            formatter : function (params){
                                                return 'other\n' + params.value + '%\n'
                                            },
                                            textStyle: {
                                                baseline : 'middle'
                                            }
                                        }
                                    },
                                } 
                            }
                        }
                    },
                    saveAsImage : {show: true}
                }
            },
            series : [
                {
                    type : 'pie',
                    center : ['10%', '30%'],
                    radius : radius,
                    x: '0%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:11, itemStyle : labelBottom},
                        {name:'招商地产', value:89, dataIndex:0,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['30%', '30%'],
                    radius : radius,
                    x:'20%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:97, itemStyle : labelBottom},
                        {name:'珠海华郡', value:6, dataIndex:1,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['50%', '30%'],
                    radius : radius,
                    x:'40%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:68, itemStyle : labelBottom},
                        {name:'高新建设', value:32,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['70%', '30%'],
                    radius : radius,
                    x:'60%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:60, itemStyle : labelBottom},
                        {name:'中邦置业', value:40,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['90%', '30%'],
                    radius : radius,
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:25, itemStyle : labelBottom},
                        {name:'卡都海俊', value:75,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['10%', '60%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x: '0%',    // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:27, itemStyle : labelBottom},
                        {name:'金地集团', value:73,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['30%', '60%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'20%',    // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:87, itemStyle : labelBottom},
                        {name:'裕利投资', value:13,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['50%', '60%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'40%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:27, itemStyle : labelBottom},
                        {name:'卓胜同兴', value:73,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['70%', '60%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'60%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:17, itemStyle : labelBottom},
                        {name:'国际赛车', value:83,itemStyle : labelTop}
                    ]
                },  
                {
                    type : 'pie',
                    center : ['90%', '60%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:17, itemStyle : labelBottom},
                        {name:'金地武汉', value:83,itemStyle : labelTop}
                    ]
                }
            ]
        };
    var option_81 = {

    backgroundColor:'#fff',
    title: {
        text: '开发商售房数TOP10',
        subtext: 'From data.house.163',  
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    xAxis : [
        {
            type : 'category',
            splitLine: {show:false},
            data : ['总售房','招商地产','珠海华郡','高新建设','中邦置业','卡都海俊','金地集团','裕利投资','卓胜同兴','国际赛车','金地武汉'],
            axisLabel: {
                        rotate: -50,
                        interval:0,
                    },
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'售房数',
            type:'bar',
            stack: '总量',
            itemStyle:{
                normal:{
                    barBorderColor:'rgba(0,0,0,0)',
                    color:'rgba(0,0,0,0)'
                },
                emphasis:{
                    barBorderColor:'rgba(0,0,0,0)',
                    color:'rgba(0,0,0,0)'
                }
            },
            data:[0, 110, 92, 74, 60, 47, 36, 26 ,16 ,7, 0 ]
        },
        {
            name:'售房数',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'inside'}}},
            data:[131, 20, 18, 18, 14, 13, 11, 10, 10, 9, 8]
        }
    ]
};
    var page_8 = true;
    var change_8 = function(){
        
        if (page_8) {
            $('#page_8').hide();
            myChart_81.setOption(option_81);
            $('#page_81').show();
        }else{
            // myChart_8.setOption(option_8);
            $('#page_8').show();
            $('#page_81').hide();
        }
        page_8 = !page_8;
    }