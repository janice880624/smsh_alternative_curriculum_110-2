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
        text: "CSS-1",
        visible: true
      },
      third: {
        text: "CSS-2",
        visible: true
      },
      fourth: {
        text: "小組網站",
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
    if (value === "third") {
      window.location.href =
        "https://www.canva.com/design/DAE85hoXRVQ/n0N6VeTJS8jxKJEsV4ut7w/view";
    }
    if (value === "fourth") {
      window.location.href =
        "https://www.canva.com/design/DAE9F7vOqlU/AlCa5HCysUfCki7o3CLulA/view";
    }
  });
}

function opclick (){
  console.log("web 被點擊")
  swal({
    title: "Open Processing",
    text: "請選擇難易度",
    icon: "success",
    buttons: {
      Btn: false,
      first: {
        text: "初階",
        visible: true
      }
    }
  }).then((value) => {
    if (value === "first") {
      window.location.href =
        "https://www.canva.com/design/DAE1Jo9wfg4/GQVZ4teoA59ZqsXUqrf9PA/view";
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