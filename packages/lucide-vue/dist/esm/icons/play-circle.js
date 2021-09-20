import createVueComponent from '../createVueComponent';
var PlayCircle = createVueComponent('PlayCircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['polygon', {
  points: '10 8 16 12 10 16 10 8'
}]]);
export default PlayCircle;