// Contenido de las lecciones (ejemplos)
const lessons = [
  { type: "video", content: "Insertar video aquí" },
  { type: "texto", content: "Insertar texto aquí" },
  { type: "ejercicio", content: "Insertar ejercicio aquí" },
  { type: "opciones", content: "Insertar opciones aquí" },
];

let currentLesson = 0;

const lessonCounter = document.getElementById("lessonCounter");
const lessonContent = document.getElementById("lessonContent");

function updateLessonContent() {
  const lesson = lessons[currentLesson];
  lessonContent.innerHTML = lesson.content;
  lessonCounter.textContent = `Lección ${currentLesson + 1} de ${
    lessons.length
  }`;
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

// Mostrar la primera lección al cargar la página
updateLessonContent();
