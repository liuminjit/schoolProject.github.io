
	var myChart_62 = echarts.init(document.getElementById('page_62'));
		
	var option_62 = {
    animationDuration: function () {return 2000;},
	backgroundColor: '#fff',
    title : {
        text: '3.24-3.30 销售套数前十汇总',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['斗门','前山','唐家','金湾']
    },
    toolbox: {
        show : true,
        feature : {
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'区块名',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:90, name:'斗门'},
                {value:15, name:'前山'},
                {value:23, name:'唐家'},
                {value:21, name:'金湾'}
            ]
        }
    ]
};
        //切换的功能
        var bar = true;
        var change = function (){
            if (bar) {
            $('#page_6').hide();
            $('#page_62').show();
            myChart_62.setOption(option_62);
            
            }else{
                $('#page_62').hide();
                $('#page_6').show();
                myChart_6.setOption(option_6);
            }
            bar = !bar;
        }