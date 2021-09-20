import createVueComponent from '../createVueComponent';
var Album = createVueComponent('AlbumIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['polyline', {
  points: '11 3 11 11 14 8 17 11 17 3'
}]]);
export default Album;