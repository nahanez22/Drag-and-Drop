const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", () => {
    console.log(`Estoy arrastrando el parrafo ${parrafo.innerText}`);
    parrafo.classList.add("dragging");
    event.dataTransfer.setData("id", parrafo.id);
    const elemento_fantasma = document.querySelector(".imagen-fantasma");
    event.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
  });

  parrafo.addEventListener("dragend", () => {
    // console.log("He terminado de arrastrar");
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (evento) => {
    evento.preventDefault();
    event.dataTransfer.dropEffect = "none";
    //console.log("Drag Over");
  });

  seccion.addEventListener("drop", () => {
    console.log("Drop");
    const id_parrafo = event.dataTransfer.getData("id");
    //console.log("Parrafo id: ", id_parrafo);
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });
});
