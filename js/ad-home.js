$(document).ready(function () {
  // Función para enviar el formulario de edición de usuario al backend
  const obtenerDatos = () => {
    // Enviar los datos al backend
    $.ajax({
      url: 'http://127.0.0.1:8080/api/v1/countUsers', // Reemplaza esto con la URL correcta de tu backend
      method: 'GET', // Utiliza el método HTTP correspondiente (PUT, POST, etc.)
      contentType: 'application/json',
      success: function (response) {
        console.log('Usuario editado exitosamente:', response);

        $.each(response, (key, value)=>{
          $("#" + key).text(value);
        })
//        $("#info-name").text(response.estudiante.nombres + " " + response.estudiante.apellidos)
//        $("#info-email").text(response.estudiante.correo)
        // Aquí puedes realizar cualquier acción adicional después de editar el usuario
      },
      error: function (error) {
        console.error('Error al editar usuario:', error);
      }
    });
  };

  // Manejar el evento submit del formulario
  obtenerDatos(); // Llamar a la función para enviar el formulario de edición
});
