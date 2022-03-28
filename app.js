function webclassclick (){
  console.log("web 被點擊")
  swal({
    title: "網頁設計入門",
    text: "請選擇難易度",
    icon: "success",
    buttons: {
      Btn: false,
      first: {
        text: "HTML",
        visible: true
      },
      second: {
        text: "CSS",
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
}

function imgclick (){
  console.log("web 被點擊")
  swal({
    title: "尚未開放",
    text: "請選擇難易度",
    icon: "error",
  });
}