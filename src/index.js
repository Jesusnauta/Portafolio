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
