/**
 * popup.js - 处理地图点位和弹出框之间的交互
 * 鼠标悬停在地图点上时显示弹出框，移开时隐藏
 */
document.addEventListener('DOMContentLoaded', function () {
    // 获取所有的地图点和弹出框
    const points = document.querySelectorAll('.point');
    const popup = document.getElementById('districtInfo');

    // 设置弹出框的初始状态为隐藏
    popup.classList.remove('visible');

    // 定义每个点对应的区域名称和数据
    const pointsData = {
        'point_1': {
            title: '鹤山街道',
            data: {
                '民政服务机构': '579个',
                '民政服务对象': '136,681人',
                '民政补贴发放': '681,579万元',
                '民政补贴人数': '8980人'
            }
        },
        'point_2': {
            title: '蒲江街道',
            data: {
                '民政服务机构': '486个',
                '民政服务对象': '125,472人',
                '民政补贴发放': '572,690万元',
                '民政补贴人数': '7685人'
            }
        },
        'point_3': {
            title: '复兴街道',
            data: {
                '民政服务机构': '532个',
                '民政服务对象': '142,563人',
                '民政补贴发放': '612,485万元',
                '民政补贴人数': '8296人'
            }
        },
        'point_4': {
            title: '西来镇',
            data: {
                '民政服务机构': '428个',
                '民政服务对象': '98,765人',
                '民政补贴发放': '485,632万元',
                '民政补贴人数': '6584人'
            }
        },
        'point_5': {
            title: '大塘镇',
            data: {
                '民政服务机构': '385个',
                '民政服务对象': '87,643人',
                '民政补贴发放': '423,754万元',
                '民政补贴人数': '5927人'
            }
        },
        'point_6': {
            title: '光明镇',
            data: {
                '民政服务机构': '412个',
                '民政服务对象': '94,123人',
                '民政补贴发放': '468,935万元',
                '民政补贴人数': '6375人'
            }
        },
        'point_7': {
            title: '成佳镇',
            data: {
                '民政服务机构': '395个',
                '民政服务对象': '89,456人',
                '民政补贴发放': '452,789万元',
                '民政补贴人数': '6120人'
            }
        },
        'point_8': {
            title: '寿安镇',
            data: {
                '民政服务机构': '375个',
                '民政服务对象': '82,341人',
                '民政补贴发放': '438,267万元',
                '民政补贴人数': '5845人'
            }
        }
    };

    // 为每个地图点添加鼠标悬停事件
    points.forEach(point => {
        // 鼠标进入事件
        point.addEventListener('mouseenter', function () {
            // 获取当前点的位置信息和尺寸
            const pointRect = this.getBoundingClientRect();
            const mapRect = document.getElementById('mapContainer').getBoundingClientRect();

            // 设置弹出框位置 - 紧贴在点的右侧
            // 计算相对于地图容器的位置
            const pointX = pointRect.left - mapRect.left;
            const pointY = pointRect.top - mapRect.top;

            // 弹出框位置 - 设置在点的右侧，让它更靠近点
            popup.style.left = (pointX - 50) + 'px'; // 紧贴在点的右侧20px处
            popup.style.top = (pointY) + 'px';  // 稍微向上偏移，使内容居中对齐

            // 更新弹出框的内容
            const pointId = this.id;
            if (pointsData[pointId]) {
                updatePopupContent(pointId);
            }

            // 显示弹出框
            popup.classList.add('visible');
        });

        // 鼠标离开事件
        point.addEventListener('mouseleave', function () {
            // 隐藏弹出框
            popup.classList.remove('visible');
        });
    });

    // 更新弹出框内容的函数
    function updatePopupContent(pointId) {
        const data = pointsData[pointId];
        if (!data) return;

        // 更新标题
        const titleElement = popup.querySelector('.popup-title');
        if (titleElement) {
            titleElement.textContent = data.title;
        }

        // 更新内容
        const contentRows = popup.querySelectorAll('.popup-row');
        if (contentRows.length > 0 && data.data) {
            let i = 0;
            for (const [label, value] of Object.entries(data.data)) {
                if (i < contentRows.length) {
                    const labelElement = contentRows[i].querySelector('.popup-label');
                    const valueElement = contentRows[i].querySelector('.popup-value');

                    if (labelElement) labelElement.textContent = label;

                    if (valueElement) {
                        // 提取数值和单位
                        const match = value.match(/^([\d,]+)(.*)$/);
                        if (match) {
                            // 清除现有内容
                            valueElement.innerHTML = '';
                            // 添加数值
                            valueElement.textContent = match[1];
                            // 添加单位
                            if (match[2]) {
                                const unitSpan = document.createElement('span');
                                unitSpan.className = 'unit';
                                unitSpan.textContent = match[2];
                                valueElement.appendChild(unitSpan);
                            }
                        } else {
                            valueElement.textContent = value;
                        }
                    }

                    i++;
                }
            }
        }
    }
}); 