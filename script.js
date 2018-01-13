// eslint-disable-next-line
var r = new Ractive({
  el: '#app',
  template: '#template',
  data: {
    name: ''
  } 
});

r.on('submit', function(e) {
  e.original.preventDefault();

  this.set('name', this.get('val'));
  this.set('val', '');
});