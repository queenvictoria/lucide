import createVueComponent from '../createVueComponent';
var Webcam = createVueComponent('WebcamIcon', [['circle', {
  cx: '12',
  cy: '10',
  r: '8'
}], ['circle', {
  cx: '12',
  cy: '10',
  r: '3'
}], ['path', {
  d: 'M12 22v-4m-5 4h5-5zm10 0h-5 5z'
}]]);
export default Webcam;