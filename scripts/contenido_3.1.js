const lecciones = [
  {
    0: "Introducción al sistema de ecuaciones lineales.",
    1: "Es una técnica fundamental en álgebra lineal para resolver sistemas de ecuaciones lineales. Su objetivo es transformar un sistema de ecuaciones lineales en otro equivalente pero más simple, hasta llegar a una forma escalonada o reducida que permita fácilmente encontrar la solución.",
    2: "./img/IMG1.png",
    3: {
      0: 1,
      1: 10,
      2: 999,
      3: 100
    },
    4: 4
  },
  {
    0: "Introducción al sistema de ecuaciones lineales.",
    1: "Es una técnica fundamental en álgebra lineal para resolver sistemas de ecuaciones lineales. Su objetivo es transformar un sistema de ecuaciones lineales en otro equivalente pero más simple, hasta llegar a una forma escalonada o reducida que permita fácilmente encontrar la solución.",
    2: "./img/IMG1.png",
    3: {
      0: 1,
      1: 10,
      2: 1100,
      3: 100
    },
    4: 2
  }

]
const lessons = [
  { type: "video", content: "Insertar video aquí" },
  { type: "texto", content: "Insertar texto aquí" },
  { type: "ejercicio", content: "Insertar ejercicio aquí" },
  {
    type: "respuestaMultiple",
    question: "¿Cuál es la capital de Francia?",
    options: ["París", "Madrid", "Londres", "Roma"],
    answer: "París",
  },
];

let currentLesson = 0;
let correctAnswerSelected = false;

const lessonCounter = document.getElementById("lessonCounter");
const nextButton = document.getElementById("nextButton");
const confirmButton = document.getElementById("confirmButton");
const titulo = document.getElementById("Titulo")
const contenido = document.getElementById("Texto")
const imgT = document.getElementById("imgT")
const opt1 = document.getElementById("opt1")
const opt2 = document.getElementById("opt2")
const opt3 = document.getElementById("opt3")
const opt4 = document.getElementById("opt4")

titulo.textContent = lecciones[0][0];
function updateLessonContent(valor) {
  /* const lesson = lessons[currentLesson];
  lessonCounter.textContent = `Lección ${currentLesson + 1} de ${
    lessons.length
  }`;
  lessonContent.innerHTML = "";

  if (lesson.type === "respuestaMultiple") {
    const exerciseDiv = document.createElement("div");
    exerciseDiv.classList.add("exercise");

    const questionElement = document.createElement("h2");
    questionElement.textContent = lesson.question;
    exerciseDiv.appendChild(questionElement);

    const optionsList = document.createElement("ul");
    lesson.options.forEach((option) => {
      const optionItem = document.createElement("li");
      const optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.name = "respuesta";
      optionInput.value = option;
      optionItem.appendChild(optionInput);
      optionItem.appendChild(document.createTextNode(option));
      optionsList.appendChild(optionItem);
    });
    exerciseDiv.appendChild(optionsList);

    lessonContent.appendChild(exerciseDiv);
    nextButton.disabled = true;
    confirmButton.style.display = "block";
  } else {
    lessonContent.textContent = lesson.content;
    nextButton.disabled = false;
    confirmButton.style.display = "none";
  } */
  
  lessonCounter.textContent = `Lección ${currentLesson+1} de ${lecciones.length}`;
  contenido.textContent = lecciones[valor][1]
  imgT.src = lecciones[valor][2]
  //texto 
  opt1.textContent = lecciones[valor][3][0]
  opt2.textContent = lecciones[valor][3][1]
  opt3.textContent = lecciones[valor][3][2]
  opt4.textContent = lecciones[valor][3][3]

  //botones
  opt1.addEventListener('click', () => {
    correctAnswerSelected=false;
    if (lecciones[valor][4] !== 1) { alert('¡Hiciste clic en el botón!'); return; }
    alert('Solucionado');
    correctAnswerSelected=true;
  })
  opt2.addEventListener('click', () => {
    correctAnswerSelected=false;
    if (lecciones[valor][4] !== 2) { alert('¡Hiciste clic en el botón!'); return; }
    alert('Solucionado');
    correctAnswerSelected=true;
  })
  opt3.addEventListener('click', () => {
    correctAnswerSelected=false;
    if (lecciones[valor][4] !== 3) { alert('¡Hiciste clic en el botón!'); return; }
    alert('Solucionado');
    correctAnswerSelected=true;
  })
  opt4.addEventListener('click', () => {
    correctAnswerSelected=false;
    if (lecciones[valor][4] !== 4) { alert('¡Hiciste clic en el botón!'); return; }
    alert('Solucionado');
    correctAnswerSelected=true;
  })
}

document.getElementById("backButton").addEventListener("click", () => {
  showBackMenuPopup();
});

document.getElementById("cancelBackButton").addEventListener("click", () => {
  hideBackMenuPopup();
});

document.getElementById("confirmBackButton").addEventListener("click", () => {
  window.location.href = "seleccion_temas.html";
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
});

document.getElementById("nextButton").addEventListener("click", () => {
  if (currentLesson < lecciones.length - 1 && correctAnswerSelected===true) {
    currentLesson++;
    updateLessonContent(currentLesson);
  }
  if(correctAnswerSelected!==true) alert('Por favor seleciona la respuesta correcta')
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

updateLessonContent(currentLesson)