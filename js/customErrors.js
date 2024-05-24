export const errorTypes = [
    "valueMissing", "typeMissmatch",
    "patternMissmatch", "tooShort", "customError"
]

export const messages = {
    name: {
      valueMissing: "El campo nombre no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un nombre válido.",
      tooShort: "Por favor, ingrese un nombre válido.",
    },
    price: {
      valueMissing: "El campo precio no puede estar vacío.",
      typeMismatch: "Por favor, ingrese un precio válido.",
      tooShort: "Por favor, ingrese un precio válido.",
    },
    image: {
      valueMissing: "El campo imagen no puede estar vacío.",
      patternMismatch: "Por favor, ingrese una URL de imagen válida.",
      tooShort: "El campo no tiene caracteres suficientes.",
    },
  };  
