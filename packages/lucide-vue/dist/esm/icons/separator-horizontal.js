import createVueComponent from '../createVueComponent';
var SeparatorHorizontal = createVueComponent('SeparatorHorizontalIcon', [['line', {
  x1: '3',
  y1: '12',
  x2: '21',
  y2: '12'
}], ['polyline', {
  points: '8 8 12 4 16 8'
}], ['polyline', {
  points: '16 16 12 20 8 16'
}]]);
export default SeparatorHorizontal;