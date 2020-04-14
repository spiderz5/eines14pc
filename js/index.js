function desplegaSubmenu() {
  document.getElementById("menuSubmenu").classList.toggle("mostra");
}

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
