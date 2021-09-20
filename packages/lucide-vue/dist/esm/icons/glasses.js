import createVueComponent from '../createVueComponent';
var Glasses = createVueComponent('GlassesIcon', [['circle', {
  cx: '6',
  cy: '15',
  r: '4'
}], ['circle', {
  cx: '18',
  cy: '15',
  r: '4'
}], ['path', {
  d: 'M14 15a2 2 0 00-2-2 2 2 0 00-2 2'
}], ['path', {
  d: 'M2.5 13L5 7c.7-1.3 1.4-2 3-2'
}], ['path', {
  d: 'M21.5 13L19 7c-.7-1.3-1.5-2-3-2'
}]]);
export default Glasses;