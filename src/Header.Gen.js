(function () {
  let header = `
  <section class="header__container">
    <div class="title__container">
      <h1 id="title">
        <p>Enfermería Dorothea E.</p>
      </h1>
      <h2>
        <p>Orem.</p>
      </h2>
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

  function displayMenu() {
    let x = document.getElementById("menuContainer");
  
    if (x.className === "subHeader_menu__container") x.className += " responsive";
    else x.className = "subHeader_menu__container";
  }
})();
