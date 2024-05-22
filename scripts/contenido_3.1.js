/*  COMO FUNCIONA LA MATRIZ DE CONTENIDO
{
    0: "Lección X: Nombre de la lección",
    1: "Descripcion del problema/ejercicio o de la temática. Si no hay nada para poner dejalo vacío",
    2: "Link del video de la lección. Está en la columna videos del guion de pantallas o la ruta para poner la imagen del problema con solo 4 posibles respuestas.",
    3: {
      0: respuesta 1,
      1: respuesta 2,
      2: respuesta 3,
      3: respuesta 4,
    },
    4: Cual respuesta es la correcta. Pon el número anterior de la lista de las opciones de respuesta + 1. Procura que sean números y evita usar palabras,
  }*/
const lecciones = [
  {
    0: "Lección 1: Definición del sistema de ecuaciones lineales",
    1: "Es una técnica fundamental en álgebra lineal para resolver sistemas de ecuaciones lineales. Su objetivo es transformar un sistema de ecuaciones lineales en otro equivalente pero más simple, hasta llegar a una forma escalonada o reducida que permita fácilmente encontrar la solución.",
    2: "https://www.youtube.com/embed/p2AIFY1b9qk?si=uJVwmLQ_Sq6iP_OL",
    3: {
      0: 1,
      1: 10,
      2: 999,
      3: 100,
    },
    4: 4,
  },
  {
    0: "Lección 1: Definición del sistema de ecuaciones lineales",
    1: "En el siguiente sistema lineal, resolver lo siguiente:",
    2: "./resources/images/Problemas/Pagina_3.1/Ejercicio_3.1_1.png",
    3: {
      0: "x=2.8 𝑦 =2.4",
      1: "x=1 𝑦 =3.5",
      2: "x=8 𝑦 =4",
      3: "x=8.2 𝑦 =4.2",
    },
    4: 1,
  },
  {
    0: "Lección 1: Definición del sistema de ecuaciones lineales",
    1: "Juan tiene 20 billetes en su cartera, compuestos de billetes de $10 y $5. El valor total de los billetes es de $200. ¿Cuántos billetes de cada denominación tiene?",
    2: "./resources/images/Problemas/Pagina_3.1/Ejercicio_3.1_2.png",
    3: {
      0: "4 de $10 y 20 de $5",
      1: "20 de $10 y 0 de $5",
      2: "10 de $10 y 5 de $5",
      3: "5 de $10 y 20 de $5",
    },
    4: 2,
  },
  {
    0: "Lección 1: Definición del sistema de ecuaciones lineales",
    1: "Cambio",
    2: "./resources/images/Problemas/Pagina_3.1/Ejercicio_3.1_2.png",
    3: {
      0: "4 de $10 y 20 de $5",
      1: "20 de $10 y 0 de $5",
      2: "10 de $10 y 5 de $5",
      3: "5 de $10 y 20 de $5",
    },
    4: 2,
  },
];

let currentLesson = 0;
let correctAnswerSelected = false;

const lessonCounter = document.getElementById("lessonCounter");
const nextButton = document.getElementById("nextButton");
const confirmButton = document.getElementById("confirmButton");
const titulo = document.getElementById("Titulo");
const contenido = document.getElementById("Texto");
const imgT = document.getElementById("imgT");
const video = document.getElementById("video");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");

titulo.textContent = lecciones[0][0];
function updateLessonContent(valor) {
  lessonCounter.textContent = `Progreso ${currentLesson + 1} de ${
    lecciones.length
  }`;
  contenido.textContent = lecciones[valor][1];
  if (valor > 0) {
    imgT.src = lecciones[valor][2];
    //texto
    opt1.textContent = lecciones[valor][3][0];
    opt2.textContent = lecciones[valor][3][1];
    opt3.textContent = lecciones[valor][3][2];
    opt4.textContent = lecciones[valor][3][3];
  } else {
    video.src = lecciones[valor][2];
    opt1.style.display = "none";
    opt2.style.display = "none";
    opt3.style.display = "none";
    opt4.style.display = "none";
  }
  if (valor == lecciones.length - 1) {
    nextButton.textContent = "Finalizar";
  }
}
//botones
correctAnswerSelected = false;
opt1.addEventListener("click", () => {
  if (lecciones[currentLesson][4] !== 1) {
    alert("Respuesta incorrecta, vuelve a intentar");
    return 0;
  }
  alert("Solucionado");
  correctAnswerSelected = true;
});
opt2.addEventListener("click", () => {
  if (lecciones[currentLesson][4] !== 2) {
    alert("Respuesta incorrecta, vuelve a intentar");
    return 0;
  }
  alert("Solucionado");
  correctAnswerSelected = true;
});
opt3.addEventListener("click", () => {
  if (lecciones[currentLesson][4] !== 3) {
    alert("Respuesta incorrecta, vuelve a intentar");
    return 0;
  }
  alert("Solucionado");
  correctAnswerSelected = true;
});
opt4.addEventListener("click", () => {
  if (lecciones[currentLesson][4] !== 4) {
    alert("Respuesta incorrecta, vuelve a intentar");
    return 0;
  }
  alert("Solucionado");
  correctAnswerSelected = true;
});

document.getElementById("backButton").addEventListener("click", () => {
  showBackMenuPopup();
});

document.getElementById("cancelBackButton").addEventListener("click", () => {
  hideBackMenuPopup();
});

document.getElementById("confirmBackButton").addEventListener("click", () => {
  window.location.href = "Pagina_3.0.html";
  hideBackMenuPopup();
});

function showBackMenuPopup() {
  const backMenuPopup = document.getElementById("backMenuPopup");
  backMenuPopup.style.display = "block";
}

function hideBackMenuPopup() {
  const backMenuPopup = document.getElementById("backMenuPopup");
  backMenuPopup.style.display = "none";
}

document.getElementById("prevButton").addEventListener("click", () => {
  if (currentLesson > 0) {
    currentLesson--;
    updateLessonContent(currentLesson);
  }
  if (currentLesson == 0) {
    correctAnswerSelected = false;
    video.style.display = "block";
    imgT.style.display = "none";
    opt1.style.display = "none";
    opt2.style.display = "none";
    opt3.style.display = "none";
    opt4.style.display = "none";
    updateLessonContent(currentLesson);
    return 0;
  }
});

document.getElementById("nextButton").addEventListener("click", () => {
  if (currentLesson == 0) {
    currentLesson++;
    correctAnswerSelected = false;
    video.style.display = "none";
    imgT.style.display = "block";
    opt1.style.display = "block";
    opt2.style.display = "block";
    opt3.style.display = "block";
    opt4.style.display = "block";
    updateLessonContent(currentLesson);
    return 0;
  }
  if (currentLesson < lecciones.length - 1 && correctAnswerSelected === true) {
    currentLesson++;
    correctAnswerSelected = false;
    updateLessonContent(currentLesson);
    return 0;
  }
  if (correctAnswerSelected !== true)
    alert("Por favor seleciona la respuesta correcta");
  if (currentLesson == lecciones.length - 1 && correctAnswerSelected === true) {
    correctAnswerSelected = false;
    window.location.href = "Pagina_3.0.html";
    currentLesson = 0;
  }
});

document.getElementById("confirmButton").addEventListener("click", () => {
  const selectedOption = document.querySelector(
    'input[name="respuesta"]:checked'
  );
  if (selectedOption) {
    const selectedValue = selectedOption.value;
    const lesson = lessons[currentLesson];
    if (selectedValue === lesson.answer) {
      showPopup("¡Respuesta correcta!");
      nextButton.disabled = false;
      correctAnswerSelected = true;
    } else {
      showPopup("Respuesta incorrecta. Por favor, inténtalo de nuevo.");
    }
  } else {
    showPopup("Por favor, selecciona una respuesta.");
  }
});

function showPopup(message) {
  const popup = document.getElementById("customPopup");
  const popupMessage = document.getElementById("popupMessage");
  popupMessage.textContent = message;
  popup.style.display = "block";
}

document.getElementById("closePopupButton").addEventListener("click", () => {
  const popup = document.getElementById("customPopup");
  popup.style.display = "none";
});

updateLessonContent(currentLesson);
