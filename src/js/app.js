require('../css/style.css');
let peeps = require('./people.js');
let $ = require('jquery');

peeps.forEach(peep => {
  let text = peep.name;
$('body').append($('<h1 />', { text }));
})

console.log(peeps[1])
