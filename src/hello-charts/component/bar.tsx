import React from 'react';
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

interface IBarProps {
  title?: string;
  xAxis?: {
    data: Array<string | number>;
  };
  series?: Array<Object>;
  width?: number;
  height?: number;
}

/**
 * 封装echarts的bar
 */
export default class EchartsBar extends React.Component<IBarProps> {
  _bar: HTMLElement | null;

  static defaultProps = {
    title: '',
    xAxis: {
      data: []
    },
    series: [],
    width: 500,
    height: 400
  };

  componentDidMount() {
    this._renderEchartsBar();
  }

  componentWillUmount() {
    echarts.dispose(this._bar);
  }

  render() {
    const { width, height } = this.props;

    return (
      <div
        ref={bar => (this._bar = bar)}
        style={{
          width,
          height
        }}
      />
    );
  }

  _renderEchartsBar = () => {
    //如果bar为null，返回
    if (this._bar == null) {
      return;
    }

    const { title, xAxis, series } = this.props;
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(this._bar);
    // 绘制图表
    myChart.setOption({
      title: { text: title },
      tooltip: {},
      xAxis,
      yAxis: {},
      series
    });
  };
}
