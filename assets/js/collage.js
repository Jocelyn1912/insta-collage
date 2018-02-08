function drag(evento) {
  console.log(evento.target.src);
  evento.dataTransfer.setData('text', evento.target.id);
}

function permitirDrop(evento){
  evento.preventDefault();
}
function drop(evento) {
  evento.preventDefault();
  var foto = evento.dataTransfer.getData('text');
  evento.target.appendChild(document.getElementById(foto));
}