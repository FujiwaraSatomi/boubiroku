let nav = document.querySelector("nav");
nav.innerHTML = `

<span><a href="/boubiroku">
  <span class="logo-1">た</span>
  <span class="logo-2">だ</span>
  <span class="logo-3">の</span>
  <span class="logo-4">忘</span>
  <span class="logo-5">備</span>
  <span class="logo-6">録</span>
</a></span>
<div class="margin-left-auto navbar-wide-width">
  <div class="search">
    <input type="text" placeholder="検索..." id="search">
    <i class="fa-solid fa-magnifying-glass" style="cursor: pointer" onclick="search()"></i>
  </div>
  <a href="/boubiroku/tags/">タグ一覧</a>
  <a href="https://github.com/yuzupon1133/boubiroku/issues">ご意見・ご要望</a>
  <!-- <a href="/boubiroku/create/" class="create">記事作成 <i class="fa-solid fa-pen"></i></a> -->
</div>
<div class="margin-left-auto navbar-narrow-width">
  <div id="navbar-narrow-open-button" class="navbar-narrow-button">
    <i class="fa-solid fa-bars"></i>
  </div>
</div>
<div id="nav-hamburger">
  <div id="navbar-narrow-close-button" class="navbar-narrow-button">
    <i class="fa-solid fa-xmark"></i>
  </div>
  <div>
    <input type="text" placeholder="検索...">
  </div>
  <div>
    <a href="/boubiroku/tags/">タグ一覧</a>
  </div>
  <div>
    <a href="https://github.com/yuzupon1133/boubiroku/issues">ご意見・ご要望</a>
  </div>
</div>

`;