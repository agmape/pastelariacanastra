(function () {
  var dados = window.CARDAPIO || [];
  var main = document.getElementById("cardapio");
  var abas = document.getElementById("abas");
  var IMG = "assets/img/";

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function norm(s) { return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }

  function precos(it) {
    if (it.precos) {
      return '<span class="tamanhos">' + it.precos.map(function (p) {
        return '<span class="tam"><span>' + esc(p[0]) + '</span><span class="preco">R$ ' + esc(p[1]) + "</span></span>";
      }).join("") + "</span>";
    }
    return "";
  }

  function cartao(it) {
    return '<article class="cartao" data-busca="' + esc(norm(it.nome + " " + (it.desc || ""))) + '">' +
      '<img src="' + IMG + esc(it.foto) + '" alt="' + esc(it.nome) + '" loading="lazy"' + (it.contain ? ' class="contain"' : "") + ">" +
      '<div class="cartao-txt"><h4>' + esc(it.nome) + "</h4>" +
      (it.desc ? "<p>" + esc(it.desc) + "</p>" : "") +
      (it.preco ? '<span class="preco preco-grande">R$ ' + esc(it.preco) + "</span>" : precos(it)) +
      "</div></article>";
  }

  function linha(it) {
    var simples = !!it.preco;
    return '<li class="linha' + (simples ? "" : " linha-multi") + '" data-busca="' + esc(norm(it.nome + " " + (it.desc || ""))) + '">' +
      '<span class="nome">' + esc(it.nome) + (it.desc ? "<small>" + esc(it.desc) + "</small>" : "") + "</span>" +
      (simples ? '<span class="pontos" aria-hidden="true"></span><span class="preco">R$ ' + esc(it.preco) + "</span>" : precos(it)) +
      "</li>";
  }

  var html = "";
  dados.forEach(function (cat) {
    html += '<section class="cat' + (cat.enfeite ? " tem-enfeite" : "") + '" id="' + cat.id + '" aria-labelledby="t-' + cat.id + '">' +
      '<h2 class="faixa" id="t-' + cat.id + '"><img class="deco" src="' + IMG + cat.icone + '" alt="" aria-hidden="true"><span>' + esc(cat.titulo) + "</span></h2>" +
      (cat.frase ? '<p class="frase">' + esc(cat.frase) + "</p>" : "");
    html += '<div class="grupos">';
    cat.grupos.forEach(function (g) {
      var comFoto = g.itens.filter(function (i) { return i.foto; });
      var semFoto = g.itens.filter(function (i) { return !i.foto; });
      html += '<div class="grupo' + (comFoto.length ? " grupo-fotos" : "") + '">';
      if (g.titulo) html += '<h3 class="subfaixa">' + (g.icone ? '<img class="deco" src="' + IMG + g.icone + '" alt="" aria-hidden="true">' : "") + esc(g.titulo) + "</h3>";
      if (comFoto.length) html += '<div class="cartoes">' + comFoto.map(cartao).join("") + "</div>";
      if (semFoto.length) html += '<ul class="lista' + (g.colunas ? " lista-cols" : "") + '">' + semFoto.map(linha).join("") + "</ul>";
      html += "</div>";
    });
    if (cat.enfeite) html += '<img class="enfeite deco" src="' + IMG + cat.enfeite + '" alt="" aria-hidden="true">';
    html += "</div></section>";
  });
  main.insertAdjacentHTML("beforeend", html);

  abas.innerHTML = dados.map(function (c) {
    return '<a href="#' + c.id + '" data-alvo="' + c.id + '"><img class="deco" src="' + IMG + c.icone + '" alt="" aria-hidden="true">' + esc(c.titulo) + "</a>";
  }).join("");

  /* Aba ativa acompanha a rolagem */
  var links = Array.prototype.slice.call(abas.querySelectorAll("a"));
  function ativa(id) {
    links.forEach(function (a) {
      var on = a.dataset.alvo === id;
      a.classList.toggle("ativa", on);
      if (on) {
        a.setAttribute("aria-current", "true");
        var t = abas, l = a.offsetLeft - (t.clientWidth - a.offsetWidth) / 2;
        t.scrollTo({ left: l, behavior: "smooth" });
      } else a.removeAttribute("aria-current");
    });
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) ativa(e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll(".cat").forEach(function (s) { io.observe(s); });
  }

  /* Busca */
  var busca = document.getElementById("busca");
  var vazio = document.getElementById("vazio");
  busca.addEventListener("input", function () {
    var q = norm(busca.value.trim());
    var algum = false;
    document.querySelectorAll(".cat").forEach(function (sec) {
      var vis = 0;
      sec.querySelectorAll("[data-busca]").forEach(function (el) {
        var ok = !q || el.dataset.busca.indexOf(q) > -1;
        el.hidden = !ok; if (ok) vis++;
      });
      sec.querySelectorAll(".grupo").forEach(function (g) {
        g.hidden = !!q && !g.querySelector("[data-busca]:not([hidden])");
      });
      sec.hidden = !!q && vis === 0;
      sec.classList.toggle("buscando", !!q);
      if (vis) algum = true;
    });
    vazio.hidden = algum;
    if (!algum) vazio.textContent = "Nada encontrado para “" + busca.value.trim() + "”. Tente outra palavra, como pastel, coca ou bolo.";
  });

  /* Mesa (link do NFC: /cardapio?mesa=5) */
  var mesa = new URLSearchParams(location.search).get("mesa");
  if (mesa && /^\w{1,4}$/.test(mesa)) {
    var m = document.querySelector(".mesa");
    m.textContent = "Mesa " + mesa;
    m.hidden = false;
  }
})();
