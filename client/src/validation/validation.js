const validation = (form) => {
  const errors = {};

  if (!form.name) {
    errors.name = "Este campo de nombre no puede estar vacío";
 } else {
    errors.name = "Nombre correcto";
  }


  if (form.duration !== "1") {
    errors.duration = "Escoge un aproximado de duración de tu actividad";
  }

  return errors;
};

export default validation;



  