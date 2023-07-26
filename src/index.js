// let menuVisible = false;

// function mostrar() {
//   if (menuVisible) {
//     document.getElementById("nav").classList = "";
//     menuVisible = false;
//   } else {
//     document.getElementById("nav").classList = "responsive";
//     menuVisible = true;
//   }
// }

// function seleccionar() {
//   document.getElementById("nav").classList = "";
//   menuVisible = false;
// }

function efectoHabilidades() {
  const skills = document.getElementById("skills");
  const distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    const habilidades = document.getElementsByClassName("progreso");
    const clasesHabilidades = [
      "javascript",
      "htmlcss",
      "reactredux",
      "express",
      "nodejs",
      "comunicacion",
      "trabajoenequipo",
      "creatividad",
      "dedicacion",
    ];
    for (let i = 0; i < habilidades.length; i++) {
      habilidades[i].classList.add(clasesHabilidades[i]);
    }
  }
}

window.addEventListener("scroll", efectoHabilidades);
