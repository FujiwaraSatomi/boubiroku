const throw404 = () => {
  document.getElementById("article-title").innerHTML = "お探しのページは見つかりませんでした。";
  document.getElementById("article").innerHTML = "";
  document.getElementById("article-tagicon").style.display = "none";
  document.title = "ページが見つかりません | ただの忘備録";
}
const param = (() => {
  if (1 < document.location.search.length) {
    var parameters = document.location.search.substring(1).split('&');
    var result = new Object();
    for (var i = 0; i < parameters.length; i++) {
      var element = parameters[i].split('=');
      result[decodeURIComponent(element[0])] = decodeURIComponent(element[1]);
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
  document.getElementById("navbar-narrow-open-button").addEventListener("click", () => {
    document.getElementById("nav-hamburger").classList.add("open");
  });
  document.getElementById("navbar-narrow-close-button").addEventListener("click", () => {
    document.getElementById("nav-hamburger").classList.remove("open");
  })
});
