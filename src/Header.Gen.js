(function () {
  let header = `
  <section class="header__container">
    <div class="title_logo__container">
      <img src="img/logo.png" alt=".logo"/>
    </div>
    <div id="title" class="title__container">
    </div>
  </section>`;

  let subHeader = `
  <section class="subHeader__container">
    <div class="subHeader_menu__container" id="menuContainer">
      <a href="/" class="activeSub">Inicio</a>
      <a href="modelo">Modelo Educativo</a>
      <a href="programas">Programa Académico</a>
      <a href="login">Plataforma</a>
      <a href="contacto">Contacto</a>
      <a href="login">Pago en línea</a>

      <a href="javascript:void(0);" id="btn" style="font-size:15px;" class="icon">&#9776;</a>
    </div>
  </section>`;

  let domElement = document.querySelector("header");
  domElement.innerHTML = header + subHeader;

  let btnSubHeader = document.getElementById("btn");
  btnSubHeader.onclick = () => displayMenu();

  let title = document.getElementById("title");

  window.innerWidth >= 1024
  ? (title.innerHTML = getTitle(1))
  : (title.innerHTML = getTitle(0));

  function displayMenu() {
    let x = document.getElementById("menuContainer");

    if (x.className === "subHeader_menu__container")
      x.className += " responsive";
    else x.className = "subHeader_menu__container";
  }

  /**
   * @param {number} mode
   */

  function getTitle(mode) {
    if (mode === 1) {
      return `
      <h1>
        Escuela de Enfermería para la Salud
      </h1>
      <h2>
        Dorothea E. Orem.
      </h2>
      `;
    } else
      return `
    <h1>
      Dorothea E. Orem.
    </h1>
    `;
  }

  window.addEventListener("resize", () => {
    window.innerWidth >= 1024
      ? (title.innerHTML = getTitle(1))
      : (title.innerHTML = getTitle(0));
  });
})();
