import createVueComponent from '../createVueComponent';
var Anchor = createVueComponent('AnchorIcon', [['circle', {
  cx: '12',
  cy: '5',
  r: '3'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '8'
}], ['path', {
  d: 'M5 12H2a10 10 0 0020 0h-3'
}]]);
export default Anchor;