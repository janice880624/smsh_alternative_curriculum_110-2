document.getElementById("webppt").addEventListener("click", function () {
  swal({
    icon: "info",
    buttons: {
      Btn: false,
      first: {
        text: "first",
        visible: true
      },
      second: {
        text: "second",
        visible: true
      }
    }
  }).then((value) => {
    if (value === "first") {
      window.location.href =
        "https://www.canva.com/design/DAE5vt2nkCA/X-1CQIWVA7F2Mhjd5pdAGg/view";
    }
    if (value === "second") {
      window.location.href =
        "https://www.canva.com/design/DAE6Z6oy_ZY/GLLAM2rKYUpf4WlOL3DU-Q/view";
    }
  });
});
