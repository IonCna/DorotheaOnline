(function () {
  let azar = Math.floor(Math.random() * 5);

  let src = `img/404_${azar}.png`;

  let domElement = document.getElementById("error_img");

  (function () {
    let _img = document.createElement("img");
    _img.src = src;
    _img.alt = ".imgReference";
    _img.id = "ErrorImg";

    domElement.appendChild(_img);
  })();

  
})();
