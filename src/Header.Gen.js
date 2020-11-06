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
      <li class="menu_item">
        <a href="/">QUIENES SOMOS</a>
      </li>
      <li class="menu_item">
        <a href="/">MODELO EDUCATIVO</a>
      </li>
      <li class="menu_item">
        <a href="/">PROGRAMA ACADEMICO</a>
      </li>
      <li class="menu_item">
        <a href="/">PLATAFORMA</a>
      </li>
      <li class="menu_item">
        <a href="/">CONTACTO</a>
      </li>
      <li class="menu_item">
        <a href="login">PAGO EN LINEA</a>
      </li>
    </div>
  </section>
  `;

  let domElement = document.querySelector("header");

  domElement.innerHTML = header + subHeader;
})();
