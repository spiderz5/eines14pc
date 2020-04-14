function desplega() {
  document.getElementById("menuSubmenu").classList.toggle("mostra");
}

function load() {
  var menudesplegable = document.getElementById("linkDesplegaSubmenu2");
  menudesplegable.addEventListener("click", desplega, false);
}

document.addEventListener("DOMContentLoaded", load, false);

window.onclick = function (event) {
  if (!event.target.matches(".linkDesplegaSubmenu")) {
    var itemsSubmenu = document.getElementsByClassName("elementsSubmenu");
    var i;
    for (i = 0; i < itemsSubmenu.length; i++) {
      var itemSubmenu = itemsSubmenu[i];
      if (itemSubmenu.classList.contains("mostra")) {
        itemSubmenu.classList.remove("mostra");
      }
    }
  }
};
