// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function () {
    // 初始化所有图表
    initInvestmentChart();
    initExpenditurePieChart();
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
function initExpenditurePieChart() {
    const chartDom = document.getElementById('expenditurePieChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom, 'dark');

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
            data: ['社会福利', '社会救助', '民政管理事物', '行政事业单位养老支出']
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
                data: [
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

    // // 添加鼠标hover事件
    // myChart.on('mouseover', function (params) {
    //     if (params.componentType === 'series' && params.seriesType === 'pie') {
    //         // 创建标记图片元素 - 使用自定义div样式而不是图片
    //         const marker = document.createElement('div');
    //         marker.id = 'pie-marker';
    //         marker.style.cssText = `
    //             position: fixed;
    //             left: ${params.event.offsetX + chartDom.getBoundingClientRect().left}px;
    //             top: ${params.event.offsetY + chartDom.getBoundingClientRect().top - 80}px;
    //             width: auto;
    //             height: auto;
    //             padding: 10px 15px;
    //             background-color: rgba(3, 18, 45, 0.7);
    //             border: 1px solid #4992ff;
    //             border-radius: 5px;
    //             z-index: 100;
    //             pointer-events: none;
    //             color: #fff;
    //             font-size: 14px;
    //             box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    //             overflow: visible;
    //         `;

    //         // 计算百分比
    //         const percentage = (params.value / 12188.6 * 100).toFixed(2);

    //         // 添加标记内容 - 模拟图片中的样式
    //         marker.innerHTML = `
    //             <div style="display: flex; align-items: center;z-index=100;">
    //                 <div style="width: 8px; height: 8px; border-radius: 50%; background-color: ${params.color}; margin-right: 8px;"></div>
    //                 <div style="font-weight: bold;">${params.name}</div>
    //             </div>
    //             <div style="margin-top: 5px; margin-left: 16px; color: #29edf3; white-space: nowrap;">
    //                 ${params.value.toFixed(2)} (${percentage}%)
    //             </div>
    //         `;

    //         // 移除旧的标记（如果存在）
    //         const oldMarker = document.getElementById('pie-marker');
    //         if (oldMarker) {
    //             oldMarker.remove();
    //         }

    //         // 添加到body而不是图表容器
    //         document.body.appendChild(marker);
    //     }
    // });

    // // 移除鼠标离开时的标记
    // myChart.on('mouseout', function () {
    //     const marker = document.getElementById('pie-marker');
    //     if (marker) {
    //         marker.remove();
    //     }
    // });

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