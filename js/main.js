document.addEventListener("DOMContentLoaded", function () {
  /* punto #2 */
  console.log("Contenido del DOM cargado");

  /* punto #3 */
  const txtValue = (document.getElementById(
    "origen"
  ).value = `<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>`);

  /*  punto #4*/
  const activeTxt = document.getElementById("origen");
  const txt = document.getElementsByTagName("input");
  const button = document.getElementsByTagName("button")[0];
  //console.log(btn) el boton para desabilitarlo estaria en la posicion [0];

  activeTxt.addEventListener("click", function () {
    disableTxtBtn(txt, button);
  });

  /* Punto #5 */
  /* Replace */
  const btnReplace = document.getElementById("btn-reemplazar");
  btnReplace.addEventListener("click", function () {
    const origenValue = document.getElementById("origen").value;
    const destenyTxt = (document.getElementById(
      "destino"
    ).innerHTML = `${origenValue}`);
    document.getElementById("origen").value = "";
  });

  /* Resto de botones */
  let btns = document.getElementsByClassName("btn-agregar");
  // console.log(msg);
  function runningBtns() {
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function (event) {
        const data = document.getElementById("origen").value;
        switch (i) {
          case 0:
            document.getElementById("destino").innerHTML += `   ${data.repeat(
              1
            )}`;
            break;
          case 1:
            document.getElementById("destino").innerHTML += `   ${data.repeat(
              5
            )}`;
            break;
          case 2:
            document.getElementById("destino").innerHTML += `   ${data.repeat(
              10
            )}`;
            break;
          case 3:
            let n = prompt("¿Cuántas veces quieres agregar el texto?");
            if (n !== null) {
              document.getElementById("destino").innerHTML = `${data.repeat(
                parseInt(n)
              )}`;
            }
            break;
          default:
            break;
        }
      });
    }
  }

  runningBtns();

  /* Punto #6 */
  // Obtengo referencia a los buttones
  const buttons = document.querySelectorAll('input[type="button"], button');

  // Obtengo referencia al div con id destino
  const desteny = document.getElementById("destino");

  // Función para vaciar el contenido del div destino
  function clearContent() {
    desteny.innerText = "";
  }

  // Función para convertir a mayúsculas el contenido del div destino
  function convertToCapital() {
    desteny.innerText = desteny.innerText.toUpperCase();
  }

  // Función para convertir a minúsculas el contenido del div destino
  function convertToLowerCase() {
    desteny.innerText = desteny.innerText.toLowerCase();
  }

  // Asignar funciones a los buttons usando un bucle for
  for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener("click", function () {
      if (btn.classList.contains("btn-vaciar")) {
        clearContent();
      } else if (btn.classList.contains("btn-convertir-a-mayusculas")) {
        convertToCapital();
      } else {
        convertToLowerCase();
      }
    });
  }

  // Punto 7: Obtener un HTMLCollection con todos los <li> de la página
  var listItems = document.getElementsByTagName("li");

  // Iterar sobre los elementos de la lista
  for (let i = 0; i < listItems.length; i++) {
    // Agregar al inicio de su contenido el texto "[Ok] "
    listItems[i].innerHTML = "[Ok] " + listItems[i].innerHTML;
  }
});

function disableTxtBtn(txt, button) {
  console.log("click");
  for (let i = 0; i < txt.length; i++) {
    txt[i].disabled = false;
  }
  button.disabled = false;
}
