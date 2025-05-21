// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function () {
    initAgeDistributionChart()
    initOrganChart()
    initInvestmentChart()
    initDeviceChart()
    initServiceChart()
    initEvaluateChart()
    // 为底部导航添加点击事件
    addNavEvents();
});

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
            containLabel: true
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
            formatter: '{b}<br/>{c} 人次'
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
            name: '单位: 人次',
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
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
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

function initAgeDistributionChart() {
    const chartDom = document.getElementById('ageDistributionChart');
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
            left: 0,
            top: 'center',
            itemWidth: 8,
            itemHeight: 8,
            icon: 'circle',
            textStyle: {
                color: '#a8c6ff',
                fontSize: 12
            },
            data: ['90岁以上', '80-90岁', '70-80岁', '60-70岁']
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '65%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                avoidLabelOverlap: false,
                itemStyle: {
                    borderColor: 'rgba(0, 35, 91, 0.3)',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{c}\n{d}%',
                    color: '#fff',
                    fontSize: 14,
                    lineHeight: 18
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true,
                    length: 15,
                    length2: 10,
                    smooth: true
                },
                data: [
                    { value: 1500, name: '90岁以上', itemStyle: { color: '#00cbff' } },
                    { value: 1700, name: '80-90岁', itemStyle: { color: '#3a9eff' } },
                    { value: 1800, name: '70-80岁', itemStyle: { color: '#00ffd0' } },
                    { value: 1600, name: '60-70岁', itemStyle: { color: '#ffa458' } }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', function () {
        myChart.resize();
    });
}
function initOrganChart() {
    const chartDom = document.getElementById('organChart');
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
            left: 0,
            top: 'center',
            itemWidth: 8,
            itemHeight: 8,
            icon: 'circle',
            textStyle: {
                color: '#a8c6ff',
                fontSize: 12
            },
            data: ['区域性养老服务中心', '社区养老设施', '社区为老服务站', '社区为老服务点']
        },
        series: [
            {
                name: '养老服务机构分布',
                type: 'pie',
                radius: ['40%', '65%'],
                center: ['60%', '50%'],
                roseType: 'radius',
                avoidLabelOverlap: false,
                itemStyle: {
                    borderColor: 'rgba(0, 35, 91, 0.3)',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{c}\n{d}%',
                    color: '#fff',
                    fontSize: 14,
                    lineHeight: 18
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true,
                    length: 15,
                    length2: 10,
                    smooth: true
                },
                data: [
                    { value: 15.81, name: '区域性养老服务中心', itemStyle: { color: '#00cbff' } },
                    { value: 37.42, name: '社区养老设施', itemStyle: { color: '#3a9eff' } },
                    { value: 67.78, name: '社区为老服务站', itemStyle: { color: '#00ffd0' } },
                    { value: 58.84, name: '社区为老服务点', itemStyle: { color: '#ffa458' } }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', function () {
        myChart.resize();
    });
}

function initDeviceChart() {
    const chartDom = document.getElementById('deviceChart');
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
            left: 0,
            top: 'center',
            itemWidth: 8,
            itemHeight: 8,
            icon: 'circle',
            textStyle: {
                color: '#a8c6ff',
                fontSize: 12
            },
            data: ['烟感', '紧急呼叫器', '摄像头', '智能手环']
        },
        series: [
            {
                name: '智能设备数量',
                type: 'pie',
                radius: ['40%', '65%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                avoidLabelOverlap: false,
                itemStyle: {
                    borderColor: 'rgba(0, 35, 91, 0.3)',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{c}\n{d}%',
                    color: '#fff',
                    fontSize: 14,
                    lineHeight: 18
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true,
                    length: 15,
                    length2: 10,
                    smooth: true
                },
                data: [
                    { value: 250, name: '烟感', itemStyle: { color: '#00cbff' } },
                    { value: 350, name: '紧急呼叫器', itemStyle: { color: '#3a9eff' } },
                    { value: 220, name: '摄像头', itemStyle: { color: '#00ffd0' } },
                    { value: 150, name: '智能手环', itemStyle: { color: '#ffa458' } }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', function () {
        myChart.resize();
    });
}

function initServiceChart() {
    const chartDom = document.getElementById('serviceChart');
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
            left: 0,
            top: 'center',
            itemWidth: 8,
            itemHeight: 8,
            icon: 'circle',
            textStyle: {
                color: '#a8c6ff',
                fontSize: 12
            },
            data: ['上门监测', '心理辅导', '家政', '助餐服务']
        },
        series: [
            {
                name: '智能设备数量',
                type: 'pie',
                radius: ['40%', '65%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                avoidLabelOverlap: false,
                itemStyle: {
                    borderColor: 'rgba(0, 35, 91, 0.3)',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{c}\n{d}%',
                    color: '#fff',
                    fontSize: 14,
                    lineHeight: 18
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true,
                    length: 15,
                    length2: 10,
                    smooth: true
                },
                data: [
                    { value: 250, name: '上门监测', itemStyle: { color: '#00cbff' } },
                    { value: 350, name: '心理辅导', itemStyle: { color: '#3a9eff' } },
                    { value: 220, name: '家政', itemStyle: { color: '#00ffd0' } },
                    { value: 150, name: '助餐服务', itemStyle: { color: '#ffa458' } }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', function () {
        myChart.resize();
    });
}

function initEvaluateChart() {
    const chartDom = document.getElementById('evaluateChart');
    if (!chartDom) return;
    const myChart = echarts.init(chartDom, 'dark');

    option = {
        backgroundColor: 'transparent',
        legend: {
            orient: 'vertical',
            left: 0,
            top: 'center',
            itemWidth: 8,
            itemHeight: 8,
            icon: 'circle',
            textStyle: {
                color: '#a8c6ff',
                fontSize: 12
            },
            data: ['服务态度', '服务质量', '响应速度', '整体满意度']
        },
        polar: {
            radius: [30, '80%']
        },
        angleAxis: {
            max: 4,
            startAngle: 75,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { show: false },
            splitLine: { show: false }
        },
        radiusAxis: {
            type: 'category',
            data: ['服务态度', '服务质量', '响应速度', '整体满意度'],
            show: false
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0,10,52,0.7)',
            borderColor: '#4992ff',
            borderWidth: 1,
            textStyle: {
                color: '#fff'
            }
        },
        series: {
            type: 'bar',
            data: [
                { value: 2, name: '服务态度', itemStyle: { color: '#00cbff' } },
                { value: 1.2, name: '服务质量', itemStyle: { color: '#3a9eff' } },
                { value: 2.4, name: '响应速度', itemStyle: { color: '#00ffd0' } },
                { value: 3.6, name: '整体满意度', itemStyle: { color: '#ffa458' } }
            ],
            coordinateSystem: 'polar',
            label: {
                show: false,
                position: 'middle',
                formatter: '{c}',
                color: '#fff',
                fontSize: 12
            }
        }
    };

    myChart.setOption(option);
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