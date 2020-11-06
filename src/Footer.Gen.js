(function () {
  let footer = `
    <section class="footer__container">
        <div class="ft_tittle_container">
            <p>
                <a href="/">Dorothea E. Orem</a>
            </p>
        </div>

        <div class="ft_main_container">
            <p>
                La Escuela de Enfermería Dorothea Orem se encuentra incorporada a la
                Secretaría de Educacion del Estado de Coahuila y comparte un ideal,
                una filosofía y un compromiso adquirido en conjunto con el resto de
                las Escuelas de Enfermería del Estado comprometidas con la Sociedad y
                su Medio Ambiente, así como las Instituciones Sanitario-Asistenciales,
                en formar según la legislación vigente, profesionales enfermeros
                íntegros, impregnados de valores éticos y capaces de dar respuesta y
                adelantarse a las necesidades de cuidados de las personas, respetando
                sus derechos, valores, costumbres y creencias.
            </p>

        <hr/>

        <div class="ft_contact_container">
          <p>Llama al 415 3686 ó</p>
          <p>Envía un correo a [CORREO]</p>
        </div>

      </div>

        <div class="ft_copy_container">
            <p>&copy;Todos los derechos reservados</p>
        </div>

        <div class="ft_dir_container">
            <p>[Dirreccion de la escuela]</p>
        </div>
    </section>
    `;

    let domElement = document.querySelector("footer")

    domElement.innerHTML = footer
})();
