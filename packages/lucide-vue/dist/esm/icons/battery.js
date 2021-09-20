import createVueComponent from '../createVueComponent';
var Battery = createVueComponent('BatteryIcon', [['rect', {
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
}]]);
export default Battery;