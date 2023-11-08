let amigos = document.getElementById("boton");
let lista = document.getElementById("lista");
let image = document.getElementById("image");

function devAmigos() {
  image.style.display = "none";

  lista.innerText = "";

  $.get("http://localhost:5000/amigos", function (data) {
    data.forEach((element) => {
      var li = document.createElement("li");
      li.innerText = `Name: ${element.name}  /  Age: ${element.age}  /  Email: ${element.email}`;

      lista.appendChild(li);
    });
  });
}

amigos.addEventListener("click", devAmigos);

let busqueda = document.getElementById("search");
let input = document.getElementById("input");

function search() {
  image.style.display = "none";
  lista.innerHTML = "";
  var value = input.value;
  //console.log(value)

  if (value === "") {
    let noinput = document.createElement("li");
    noinput.innerText = "Ingresa un valor en el campo de Busqueda";
    lista.appendChild(noinput);
    return;
  }

  var swap = false;

  $.get(`http://localhost:5000/amigos/`, function (data) {
    data.forEach((element) => {
      if (element.id === parseInt(value)) {
        var lis = document.createElement("li");
        lis.innerText = `Name: ${element.name}  /  Age: ${element.age}  /  Email: ${element.email}`;
        lista.appendChild(lis);
        swap = true;
      }
    });

    if (!swap) {
      let nofind = document.createElement("li");
      nofind.innerText = "El Id de tu Amigo no ha sido encontrado";
      lista.appendChild(nofind);
    }

    input.value = "";
  });
}

busqueda.addEventListener("click", search);

let borrar = document.getElementById("delete");
let inputD = document.getElementById("inputDelete");

function borrarAmigo() {
  image.style.display = "none";
  lista.innerHTML = "";
  var valueD = inputD.value;

  if (valueD === "") {
    let deleteInput = document.createElement("li");
    deleteInput.innerText = "Ingresa un valor en el campo para Eliminarlo";
    lista.appendChild(deleteInput);
    return;
  }

  let swapD = false;

  $.get(`http://localhost:5000/amigos/`, function (data) {
    data.forEach((element) => {
      if (element.id === parseInt(valueD)) {

        swapD = true;

        $.ajax({
          url: `http://localhost:5000/amigos/${element.id}`,
          type: "DELETE",
          success: function () {
            let lits = document.createElement("li");
            lits.innerText = `Se ha eliminado el id: ${element.id}`;
            lista.appendChild(lits);
          },
        });
      }
    });

    if (!swapD) {
      let nofinds = document.createElement("li");
      nofinds.innerText =
        "El Id no coincide con ningun Amigo, no es posible borrarlo de la Base de Datos";
      lista.appendChild(nofinds);
    }

    inputD.value = "";
  });
}

borrar.addEventListener("click", borrarAmigo);
