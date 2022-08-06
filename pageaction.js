const throw404 = () => {
  document.getElementById("article-title").innerHTML = "お探しのページは見つかりませんでした。";
  document.getElementById("article").innerHTML = "";
  document.getElementById("article-tagicon").style.display = "none";
  document.title = "ページが見つかりません | ただの忘備録";
}
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
