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
const lessonContent = document.getElementById("lessonContent");
const nextButton = document.getElementById("nextButton");
const confirmButton = document.getElementById("confirmButton");

function updateLessonContent() {
  const lesson = lessons[currentLesson];
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
  }
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
    updateLessonContent();
  }
});

document.getElementById("nextButton").addEventListener("click", () => {
  if (currentLesson < lessons.length - 1) {
    currentLesson++;
    updateLessonContent();
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

updateLessonContent();
