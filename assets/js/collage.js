/*Funciones con las que podemos mover las fotos*/
function drag(evento) {
  // Tomamos las fotos usando su id
  evento.dataTransfer.setData('text', evento.target.id);
}

function permitirDrop(evento) {
  evento.preventDefault();
}

function drop(evento) {
  evento.preventDefault();
  // Recuperando los datos y dejandolos en el contenedor
  var foto = evento.dataTransfer.getData('text');
  evento.target.appendChild(document.getElementById(foto));
}