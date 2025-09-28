$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// Formulario de envio
const miFormulario = document.getElementById('miFormulario');
function getDataInfo() {

  miFormulario.reset();

  modal_gracias = document.getElementById('modalGracias')

  modal_gracias.showModal();

}


