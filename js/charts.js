// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function () {
    // 初始化所有图表
    initInvestmentChart();

    data = [
        {
            value: 3219.65,
            name: '社会福利',
            itemStyle: { color: '#ff9a22' }
        },
        {
            value: 2346.78,
            name: '社会救助',
            itemStyle: { color: '#ff5a54' }
        },
        {
            value: 2567.93,
            name: '民政管理事物',
            itemStyle: { color: '#4992ff' }
        },
        {
            value: 2054.24,
            name: '行政事业单位养老支出',
            itemStyle: { color: '#29edf3' }
        }
    ]
    initExpenditurePieChart(data);
    // 为底部导航添加点击事件
    addNavEvents();
});

// 民政保障投入资金金额图表
function initInvestmentChart() {
    const chartDom = document.getElementById('investmentChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom, 'dark');

    const option = {
        backgroundColor: 'transparent',
        grid: {
            top: 25,
            right: 15,
            bottom: 20,
            left: 50,
            containLabel: true,
            backgroundColor: 'transparent',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            backgroundColor: 'rgba(0,10,52,0.7)',
            borderColor: '#4992ff',
            borderWidth: 1,
            textStyle: {
                color: '#fff'
            },
            formatter: '{b}<br/>{c} 万元'
        },
        xAxis: {
            type: 'category',
            data: ['12', '01', '02', '03', '04', '05'],
            boundaryGap: false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#6f9efb',
                fontSize: 9
            }
        },
        yAxis: {
            type: 'value',
            min: 40,
            max: 70,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            },
            name: '单位: 万元',
            nameGap: 10,
            nameTextStyle: {
                color: '#6f9efb',
                fontSize: 11,
                align: 'right',
                padding: [0, 0, 0, 0]
            }
        },
        series: [
            {
                data: [50, 42, 52, 56, 60, 64.34],
                type: 'line',
                smooth: true,
                symbol: 'none',
                itemStyle: {
                    color: '#29edf3'
                },
                lineStyle: {
                    color: '#29edf3',
                    width: 4,
                    shadowColor: 'rgba(41, 237, 243, 0.5)',
                    shadowBlur: 10
                },
                areaStyle: null,
                label: {
                    show: true,
                    position: 'top',
                    fontSize: 10,
                    color: '#fff',
                    distance: 5,
                    formatter: function (params) {
                        // Only show label for the last point
                        return params.dataIndex === 5 ? params.value : '';
                    }
                }
            }
        ]
    };

    myChart.setOption(option);

    // 响应窗口大小变化
    window.addEventListener('resize', function () {
        myChart.resize();
    });
}

// 上年度实际支出占比饼图
function initExpenditurePieChart(data) {
    const chartDom = document.getElementById('expenditurePieChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom, 'dark');
    var legend_data = [];
    var pieData = [];
    var colors = [['#288EF3', '#3BD8F7'], ['#FB9220', '#FBBE20'], ['#05E3E5', '#1AF4D7'], ['#ED981A', '#F34663'],
    ['#7295FF', '#7EB4FF'], ['#FF748B', '#FFA19A'], ['#FF748B', '#FFA19A'], ['#FF748B', '#FFA19A']];
    $.each(data, function (i, n) {
        legend_data.push(n.name);
        var v = {
            value: n.value, name: n.name, itemStyle: {
                color: {
                    type: 'linear', //线性渐变
                    x: 0, y: 0, x2: 0, y2: 1, colorStops: [{
                        offset: 0, color: colors[i][1] // 0% 处的颜色
                    }, {
                        offset: 1, color: colors[i][0] // 100% 处的颜色
                    }]
                }
            }
        };
        pieData.push(v)
    });
    console.log("pieData", pieData)
    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
            backgroundColor: 'rgba(0,10,52,0.7)',
            borderColor: '#4992ff',
            borderWidth: 1,
            textStyle: {
                color: '#fff'
            },
            show: true
        },
        legend: {
            orient: 'vertical',
            right: 0,
            top: 'center',
            itemWidth: 8,
            itemHeight: 8,
            icon: 'circle',
            textStyle: {
                color: '#a8c6ff',
                fontSize: 9
            },
            data: legend_data
        },
        series: [
            {
                name: '支出占比',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['30%', '50%'],
                roseType: 'area',
                zlevel: 10,
                itemStyle: {
                    borderColor: '#03122d',
                    borderWidth: 2
                },
                label: {
                    show: false
                },
                data: pieData,

            }
        ]
    };
    // 添加中心文本
    const graphic = {
        type: 'text',
        left: '25%',
        top: '45%',
        style: {
            text: '219.6',
            textAlign: 'center',
            fill: '#29edf3',
            fontSize: 12,
            fontWeight: 'bold'
        },
        z: 100
    };

    option.graphic = [graphic];

    myChart.setOption(option);

    // 响应窗口大小变化
    window.addEventListener('resize', function () {
        myChart.resize();
    });
}


// 为底部导航添加点击事件
function addNavEvents() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // 移除所有active类
            navItems.forEach(i => i.classList.remove('active'));
            // 给当前点击的元素添加active类
            this.classList.add('active');
        });
    });
} 