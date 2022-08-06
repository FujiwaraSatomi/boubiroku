const throw404 = () => {
  document.getElementById("article-title").innerHTML = "お探しのページは見つかりませんでした。";
  document.getElementById("article").innerHTML = "";
  document.getElementById("article-tagicon").style.display = "none";
  document.title = "ページが見つかりません | ただの忘備録";
}
const param = (() => {
  if (1 < document.location.search.length) {
    var query = document.location.search.substring(1);
    var parameters = query.split('&');
    var result = new Object();
    for (var i = 0; i < parameters.length; i++) {
      var element = parameters[i].split('=');
      var paramName = decodeURIComponent(element[0]);
      var paramValue = decodeURIComponent(element[1]);
      result[paramName] = decodeURIComponent(paramValue);
    }
    return result;
  }
  return null;
})();

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", () => {
    var nav = document.getElementsByTagName("nav")[0];
    if(window.scrollY <= 10) {
      nav.classList.remove("onscroll");
    } else {
      nav.classList.add("onscroll");
    }
  });
);
