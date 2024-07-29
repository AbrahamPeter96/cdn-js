(function () {
  var uri =
    "https://authservice.ghlexperts.com/api/unified-script?access-key=pak_8dc7621d-8f16-49a3-8fce-c0ef6fc29061&host=" +
    window.location.hostname +
    "&path=" +
    window.location.pathname;
  var script_tag = document.createElement("script");
  script_tag.setAttribute("src", uri);
  document.head.appendChild(script_tag);
})();

var faviconURL =
  "https://www.barpatrol.net/wp-content/uploads/2024/03/Screenshot_2024-03-25_at_12.45.18_PM-removebg-preview.png";
var link =
  document.querySelector("link[rel*='icon']") || document.createElement("link");
link.type = "image/x-icon";
link.rel = "shortcut icon";
link.href = faviconURL;
document.getElementsByTagName("head")[0].appendChild(link);

function handleRouteChange() {
  const targetDiv = document.getElementById("app");
  targetDiv.classList.add("loading");
  setTimeout(() => {
    targetDiv.classList.remove("loading");
  }, 2000);
}
window.addEventListener("popstate", handleRouteChange);
(function (history) {
  var pushState = history.pushState;
  history.pushState = function (state) {
    if (typeof history.onpushstate == "function") {
      history.onpushstate({ state: state });
    }
    // Trigger the event manually
    handleRouteChange();
    return pushState.apply(history, arguments);
  };
  var replaceState = history.replaceState;
  history.replaceState = function (state) {
    if (typeof history.onreplacestate == "function") {
      history.onreplacestate({ state: state });
    }
    handleRouteChange();
    return replaceState.apply(history, arguments);
  };
})(window.history);
