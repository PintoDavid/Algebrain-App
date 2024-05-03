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
  // Mostrar ventana emergente (popup)
  if (
    confirm(
      "¿Está seguro que desea regresar al menú? Se perderá el progreso actual."
    )
  ) {
    // Redireccionar al usuario si confirma
    window.location.href = "tema1_leccion1de4.html";
  } else {
    // No hacer nada si el usuario cancela
  }
});

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
      alert("¡Respuesta correcta!");
      nextButton.disabled = false;
      correctAnswerSelected = true;
    } else {
      alert("Respuesta incorrecta. Por favor, inténtalo de nuevo.");
    }
  } else {
    alert("Por favor, selecciona una respuesta.");
  }
});

updateLessonContent();
