/* Horário de funcionamento — usado no site e no cardápio.
   Dias: 0 = domingo … 6 = sábado. Horas em minutos desde 00h. */
(function () {
  var HORARIO = {
    1: [690, 1260], 2: [690, 1260], 3: [690, 1260], 4: [690, 1260], 5: [690, 1260], // seg–sex 11h30–21h
    6: [540, 840] // sábado 9h–14h
  };
  var DIAS = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

  function hm(min) { var h = Math.floor(min / 60), m = min % 60; return h + "h" + (m ? String(m).padStart(2, "0") : ""); }

  function agoraSP() {
    try {
      var p = new Intl.DateTimeFormat("en-US", { timeZone: "America/Sao_Paulo", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
      var o = {}; p.forEach(function (x) { o[x.type] = x.value; });
      var dia = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(o.weekday);
      return { dia: dia, min: (parseInt(o.hour, 10) % 24) * 60 + parseInt(o.minute, 10) };
    } catch (e) { var d = new Date(); return { dia: d.getDay(), min: d.getHours() * 60 + d.getMinutes() }; }
  }

  function status() {
    var a = agoraSP(), hoje = HORARIO[a.dia];
    if (hoje && a.min >= hoje[0] && a.min < hoje[1]) return { aberto: true, texto: "Aberto agora · até " + hm(hoje[1]) };
    if (hoje && a.min < hoje[0]) return { aberto: false, texto: "Fechado · abre hoje às " + hm(hoje[0]) };
    for (var i = 1; i <= 7; i++) {
      var d = (a.dia + i) % 7;
      if (HORARIO[d]) return { aberto: false, texto: "Fechado · abre " + (i === 1 ? "amanhã" : DIAS[d]) + " às " + hm(HORARIO[d][0]) };
    }
    return { aberto: false, texto: "Fechado" };
  }

  document.querySelectorAll("[data-status]").forEach(function (el) {
    var s = status();
    el.textContent = s.texto;
    el.classList.add(s.aberto ? "is-open" : "is-closed");
  });
})();
