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
  </section>
  `;

  let subHeader = `
  <section class="subHeader__container">
    <div class="subHeader_menu__container">
      <li class="menu_item home">
        <a href="/">INICIO</a>
      </li>
      <li class="menu_item modelo">
        <a href="/">MODELO EDUCATIVO</a>
      </li>
      <li class="menu_item programa">
        <a href="/">PROGRAMA ACADEMICO</a>
      </li>
      <li class="menu_item plataforma">
        <a href="login">PLATAFORMA</a>
      </li>
      <li class="menu_item contacto">
        <a href="contact">CONTACTO</a>
      </li>
      <li class="menu_item pago">
        <a href="login">PAGO EN LINEA</a>
      </li>
    </div>
  </section>
  `;

  let domElement = document.querySelector("header");

  domElement.innerHTML = header + subHeader;
})();
