import createVueComponent from '../createVueComponent';
var Bike = createVueComponent('BikeIcon', [['circle', {
  cx: '5.5',
  cy: '17.5',
  r: '3.5'
}], ['circle', {
  cx: '18.5',
  cy: '17.5',
  r: '3.5'
}], ['path', {
  d: 'M15 6a1 1 0 100-2 1 1 0 000 2zm-3 11.5V14l-3-3 4-3 2 3h2'
}]]);
export default Bike;