//applyShadow by Troncoso
//Source: https://stackoverflow.com/a/34424040
//Modifications: directY calculation simplified by Lucius
function applyShadow(element, dp) {
  if (dp == 0) {
    element.style.boxShadow = "none";
  } else {
    var shadow = "0px ";

    var ambientY = dp;
    var ambientBlur = dp == 1 ? 3 : dp * 2;
    var ambientAlpha = (dp + 10 + (dp / 9.38)) / 100;

    shadow += ambientY + "px " + ambientBlur + "px rgba(0, 0, 0, " + ambientAlpha + "), 0px ";

    var directY = dp < 10 ? Math.floor(dp / 2) + 1 : dp - 4;
    var directBlur = dp == 1 ? 3 : dp * 2;
    var directAlpha = (24 - Math.round(dp / 10)) / 100;

    shadow += directY + "px " + directBlur + "px rgba(0, 0, 0, " + directAlpha + ")";

    element.style.boxShadow = shadow;
  }
}
