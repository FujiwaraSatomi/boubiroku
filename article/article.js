document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(document.getElementById("data").innerHTML);
  document.getElementById("article").innerHTML = marked.parse(data.raw.replaceAll("&lt;", "<").replaceAll("&gt;", ">"));
  document.getElementById("article-title").innerHTML = data.title;
  document.getElementById("article-tag").innerHTML = data.tag;
  document.getElementById("article-tag").href = "/boubiroku/search/?q=tag%3A" + encodeURIComponent(data.tag);
  document.getElementById("article-date").innerHTML = unix2date(data.createtime);
  document.getElementById("article-date").setAttribute("title", unix2date(data.createtime, !0));
  document.getElementById("article-edit").innerHTML = unix2date(data.edittime);
  document.getElementById("article-edit").setAttribute("title", unix2date(data.edittime, !0));
  document.title = data.title + " | ただの忘備録";
})