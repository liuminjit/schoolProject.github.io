
        // 基于准备好的dom，初始化echarts实例
        var myChart_1 = echarts.init(document.getElementById('page_1'));

        // 指定图表的配置项和数据
        var option_1 = {
        	
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
		        data:['新房房价','二手房价']
		    },
		    xAxis:  {
		        type: 'category',
		        boundaryGap: false,
		        data: ['16-9','16-10','16-11','16-12','17-1','17-2','17-3']
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
		            name:'新房房价',
		            type:'line',
		            data:[21.725, 20.255, 18.669, 20.427, 18.487, 20.409, 20.907],
		            // markLine: {
		            //     data: [
		            //         {type: 'average', name: '平均值'}
		            //     ]
		            // }
		        },
		        {
		            name:'二手房价',
		            type:'line',
		            data:[18.214, 18.620, 18.856, 18.948, 19.142, 19.573, 20.153],
		            // markLine: {
		            //     data: [
		            //         {type: 'average', name: '平均值'},
		            //     ]
		            // }
		        }
		    ],
		    grid: {
		    	right: '20px',
		    	bottom: '40px',
		    },
		    backgroundColor:'rgba(255, 255, 255, 1 )',
		    animationDuration: function () {return 3000;}
        };

        // 使用刚指定的配置项和数据显示图表。