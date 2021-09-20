import createVueComponent from '../createVueComponent';
var Clock = createVueComponent('ClockIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['polyline', {
  points: '12 6 12 12 16 14'
}]]);
export default Clock;