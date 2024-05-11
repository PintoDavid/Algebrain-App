const lecciones = [
  {
    0: "Introducción al sistema de ecuaciones lineales",
    1: "bla bla bla sistemas de ecuaciones lineales. Su objetivo es transformar un sistema de ecuaciones lineales en otro equivalente pero más simple, hasta llegar a una forma escalonada o reducida que permita fácilmente encontrar la solución.",
    2: "https://www.youtube.com/embed/p2AIFY1b9qk?si=m_v06liUj9F4eJIm",
    3: {
      0: 1,
      1: 10,
      2: 999,
      3: 100,
    },
    4: 4,
  },
  {
    0: "Introducción al sistema de ecuaciones lineales",
    1: "bla 2 bla 2 bla 2 resolver sistemas de ecuaciones lineales. Su objetivo es transformar un sistema de ecuaciones lineales en otro equivalente pero más simple, hasta llegar a una forma escalonada o reducida que permita fácilmente encontrar la solución.",
    2: "./img/IMG1.png",
    3: {
      0: 1,
      1: 10,
      2: 999,
      3: 100,
    },
    4: 4,
  },
  {
    0: "Introducción al sistema de ecuaciones lineales",
    1: "Es una técnica fundamental en álgebra lineal para resolver sistemas de ecuaciones lineales. Su objetivo es transformar un sistema de ecuaciones lineales en otro equivalente pero más simple, hasta llegar a una forma escalonada o reducida que permita fácilmente encontrar la solución.",
    2: "./img/IMG1.png",
    3: {
      0: 1,
      1: 10,
      2: 1100,
      3: 100,
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
  lessonCounter.textContent = `Lección ${currentLesson + 1} de ${
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
    alert("¡Hiciste clic en el botón!");
    return 0;
  }
  alert("Solucionado");
  correctAnswerSelected = true;
});
opt2.addEventListener("click", () => {
  if (lecciones[currentLesson][4] !== 2) {
    alert("¡Hiciste clic en el botón!");
    return 0;
  }
  alert("Solucionado");
  correctAnswerSelected = true;
});
opt3.addEventListener("click", () => {
  if (lecciones[currentLesson][4] !== 3) {
    alert("¡Hiciste clic en el botón!");
    return 0;
  }
  alert("Solucionado");
  correctAnswerSelected = true;
});
opt4.addEventListener("click", () => {
  if (lecciones[currentLesson][4] !== 4) {
    alert("¡Hiciste clic en el botón!");
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
  window.location.href = "Temas.html";
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
    window.location.href = "Temas.html";
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
