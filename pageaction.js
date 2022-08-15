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
const unix2date = (unix, time) => {
  let unixtime = new Date(unix * 1000);
  return "" + unixtime.toLocaleDateString() + (time ? " " + unixtime.toLocaleTimeString() : "");
}

const show_title = (e) => {
  let title = document.getElementById("hover_title");
  if(!title) {
    let temp = document.createElement("div");
    temp.id = "hover_title";
    temp.classList.add("title");
    temp.innerHTML = '<div class="title-triangle"></div><div class="title-value"></div>';
    document.body.append(temp);
    title = document.getElementById("hover_title");
  }
  let pos = e.getBoundingClientRect();
  title.style.top = window.pageYOffset + pos.top + pos.height / 2 + 5 + "px";
  title.style.left = pos.left + pos.width / 2 + "px";
  title.style.display = null;
  title.children[1].innerHTML = e.getAttribute("data-orig-title");
}
const hide_title = (e) => {
  let title = document.getElementById("hover_title");
  if(title.children[1].innerHTML = e.getAttribute("data-orig-title")) {
    title.style.display = "none";
  }
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
  document.getElementById("navbar-narrow-open-button").addEventListener("click", () => {
    document.getElementById("nav-hamburger").classList.add("open");
  });
  document.getElementById("navbar-narrow-close-button").addEventListener("click", () => {
    document.getElementById("nav-hamburger").classList.remove("open");
  });
  setInterval(() => {
    let title = document.querySelectorAll("*[title]");
    for(let i = 0; i < title.length; i++) {
      let local_title = title[i].getAttribute("title");
      title[i].setAttribute("data-orig-title", local_title);
      title[i].addEventListener("mouseenter", (e) => {
        show_title(e.target);
      });
      title[i].addEventListener("mouseleave", (e) => {
        hide_title(e.target);
      });
      title[i].removeAttribute("title");
    }
  }, 250)
});
