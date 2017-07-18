import React from 'react';
import EchartsBar from './component/bar';

export default class HelloCharts extends React.Component {
  render() {
    return (
      <EchartsBar
        title="Echarts 柱状图"
        xAxis={{
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        }}
        series={[
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]}
      />
    );
  }
}
