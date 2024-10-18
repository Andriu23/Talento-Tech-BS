function good() {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
}
function saber() {
    Swal.fire({
        title: "¿Astronomía Universal?",
        text: "¿Quieres saber más sobre el universo?",
        icon: "question"
      });
}
function peligro() {
    Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "Algo salió mal.",
        footer: '<a href="#">¿Por qué ocurrió este problema?</a>'
      });
}
function save() {
    Swal.fire({
        title: "Estas seguro que deseas guardar los cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `No Guardar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Esta guardado=)", "", "success");
        } else if (result.isDenied) {
          Swal.fire("No se guardaron los cambios", "", "warning");
        }
      });
}