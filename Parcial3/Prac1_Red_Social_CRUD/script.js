let form = document.getElementById("form");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let post = document.getElementById("post");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textarea.value === "") {
    msg.innerHTML = "El comentario no puede estar vacio.";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

let data={};

let acceptData = () => {
  data["text"] = textarea.value;
  createPost();
  modal_close(); /* función agregada*/ 
};

let createPost = () => {
  let currentDate = new Date().toLocaleString(); // Obtener la fecha actual

  post.innerHTML += `
    <div class="public">
      <p class="date">Fecha y hora publicado: ${currentDate.toString()}</p>
      <p class="comentario">${data.text}</p>
      <span class="options">
        <i onclick="editpost(this)" class="fas fa-edit"></i>
        <i onclick="deletepost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
  `;
  textarea.value = "";
};

// Eventos para editar y eliminar los comentarios
let editpost = (e) => {
  
  textarea.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
  modal_open();/* función agregada*/ 
}

let deletepost = (e) => {
  e.parentElement.parentElement.remove();
}

/****************************** Modal *******************************+++*/

//Abrir modal
let modal_open=()=>{
  modal.showModal();
  /*
    Este es un metodo del modal, lo va abrir
    y lo va poner encima de todo el contenido
  */
};

let modal_close=()=>{
  modal.close(); //Con esto la ventana modal se va cerrar
};