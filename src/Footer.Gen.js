(function () {
  let footerMinText = `Dorothea Orem`;
  let footerNormalText = `
    La Escuela de Enfermería Dorothea Orem se encuentra incorporada a la
    Secretaría de Educacion del Estado de Coahuila y comparte un ideal,
    una filosofía y un compromiso adquirido en conjunto con el resto de
    las Escuelas de Enfermería del Estado comprometidas con la Sociedad
    y su Medio Ambiente, así como las Instituciones
    Sanitario-Asistenciales, en formar según la legislación vigente,
    profesionales enfermeros íntegros, impregnados de valores éticos y
    capaces de dar respuesta y adelantarse a las necesidades de cuidados
    de las personas, respetando sus derechos, valores, costumbres y
    creencias.`;

  let footer = `
  <section>
    <div class="footer_info__container vOne">

      <div>
        <img class="footer_logo" src="/img/logo.png" alt=".logo" />
      </div>

      <div class="footer_info_text text">
        <p id="footerText"></p>
      </div>

      <div>
        <a href="https://www.facebook.com/Enfdorothea">
            <img
            class="footer_icon facebook"
            src="img/fb.png"/>
        </a>
      </div>

    </div>

    <div class="footer_info__container vTwo">

      <div>
        <img class="footer_logo" src="/img/sep_logo.png" alt=".logo" />
      </div>

      <div class="footer_info_text links">
        <li><a href="planes">Nuestros Planes</a></li>
        <li><a href="modelo">Modelo Educativo</a></li>
      </div>

      <div>
        <a href="https://twitter.com/dorothea_orem">
          <img
          class="footer_icon twitter"
          src="img/twitter.png"/>
        </a>
      </div>
      
    </div>
  </section>`;

  const minWidth = 768;

  let domElement = document.querySelector("footer");
  domElement.innerHTML = footer;

  let textID = document.getElementById("footerText");

  window.innerWidth <= minWidth
    ? (textID.innerHTML = footerMinText)
    : (textID.innerHTML = footerNormalText);

  window.addEventListener("resize", () => {
    window.innerWidth <= minWidth
      ? (textID.innerHTML = footerMinText)
      : (textID.innerHTML = footerNormalText);
  });

})();
