import createVueComponent from '../createVueComponent';
var BatteryLow = createVueComponent('BatteryLowIcon', [['rect', {
  x: '2',
  y: '7',
  width: '16',
  height: '10',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '22',
  x2: '22',
  y1: '11',
  y2: '13'
}], ['line', {
  x1: '6',
  x2: '6',
  y1: '10',
  y2: '14'
}]]);
export default BatteryLow;