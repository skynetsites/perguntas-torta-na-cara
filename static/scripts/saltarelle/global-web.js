(function () {
  var aa = {};
  global.VEL = global.VEL || {};
  global.VEL.Skynet = global.VEL.Skynet || {};
  global.VEL.Skynet.Global = global.VEL.Skynet.Global || {};
  global.VEL.Skynet.Global.Controls =
    global.VEL.Skynet.Global.Controls || {};
  global.VEL.Skynet.Global.Controls.Breadcrumbs =
    global.VEL.Skynet.Global.Controls.Breadcrumbs || {};
  global.VEL.Skynet.Global.Extensions =
    global.VEL.Skynet.Global.Extensions || {};
  global.VEL.Skynet.Global.Helpers = global.VEL.Skynet.Global.Helpers || {};
  global.VEL.Skynet.Global.Interop = global.VEL.Skynet.Global.Interop || {};
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent =
    global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent || {};
  global.VEL.Skynet.Global.Modals = global.VEL.Skynet.Global.Modals || {};
  global.VEL.Skynet.Global.Modals.SharePages =
    global.VEL.Skynet.Global.Modals.SharePages || {};
  global.VEL.Skynet.Global.Pages = global.VEL.Skynet.Global.Pages || {};
  global.VEL.Skynet.Global.Panels = global.VEL.Skynet.Global.Panels || {};
  ss.initAssembly(aa, "VEL.Skynet.Global.Web");
  var ac = function () {};
  ac.__typeName = "VEL.Skynet.Global.LogHelper";
  ac.error = function (a, b, c) {
    if (ac.$1) {
      return;
    }
    ac.$1 = true;
    var d = {};
    d.message = b;
    d.scriptUrl = a;
    d.requestUrl = window.location.href;
    d.templateId = ac.$0(ServerModel.templateId);
    d.themeId = ac.$0(ServerModel.themeId);
    d.stackTrace = c;
    $.ajax({ type: "POST", url: "/errorajax/logjserror", data: d });
  };
  ac.event = function (a, b) {
    var c = {};
    c.name = a;
    c.requestUrl = window.location.href;
    c.value = b;
    $.ajax({ type: "POST", url: "/errorajax/logjsevent", data: c });
  };
  ac.$0 = function (a) {
    return a > 0 ? a : 0;
  };
  global.VEL.Skynet.Global.LogHelper = ac;
  var a5 = function () {};
  a5.__typeName = "VEL.Skynet.Global.Modules";
  global.VEL.Skynet.Global.Modules = a5;
  var dF = function () {};
  dF.__typeName = "VEL.Skynet.Global.Shell";
  dF.initialize = function () {
    dF.$Q = new d6.$ctor1(".js-progress-wrapper");
    dF.$T = new d6.$ctor1("#toast_popup_wrapper");
    dF.$S = new d6.$ctor1("#toast_popup");
    dF.$G = new d6.$ctor1("#last_message");
    dF.$C = new d6.$ctor1("#error_report");
    dF.$A = new d6.$ctor1("body");
    dF.isErrorPage = new d6.$ctor1("#error_wrapper").get_exists();
    if (dF.isGuest()) {
      dF.$n();
    } else {
      dF.$o();
    }
    dF.$z();
    dF.$8();
    window.addEventListener("error", dF.$e);
    dF.$w();
    if (ServerModel.isEmbed) {
      return;
    }
    var a = az.get("login9");
    if (ss.isNullOrUndefined(a)) {
      a = ServerModel.languageId.toString();
    }
    dF.$B = a;
    var b = new d6.$ctor1(".js-header-ajax");
    if (b.get_exists()) {
      $.get("/shellajax/header/" + dF.$B, function (c) {
        b.set_html(ss.cast(c, String));
        dF.$g();
        dF.$u();
        var d = new d8(".js-account-logout").getEach();
        for (var e = 0; e < d.length; e++) {
          var f = d[e];
          var g = { $: f.getAttribute("href") };
          f.onClick(
            ss.mkdel({ href: g }, function () {
              aN.removeItem("__newassignments");
              window.location.href = this.href.$;
            }),
            false,
            true
          );
        }
      });
    } else {
      dF.$0();
    }
    if (
      !dF.isGuest() &&
      VEL.Skynet.Global.Server.Switches.getBoolean(
        VEL.Skynet.Global.Server.Switches.static$1,
        VEL.Skynet.Global.Server.SwitchKeys.notifyForNewSubmissions
      )
    ) {
      $.get("/myresultsajax/getandrefreshnewsubmissionstate", function (c) {
        dF.$E = c;
        dF.$u();
        aN.storeBooleanInLocalStorage("__newassignments", c);
      });
    }
    dF.$t();
  };
  dF.loadSwitches = function (a) {
    var b = az.get("expt");
    var c = az.get("__debug__override");
    VEL.Skynet.Global.Server.Switches.static$1 =
      new VEL.Skynet.Global.Server.ClientSwitchContext(b, c);
    VEL.Skynet.Global.Server.Switches.initialize(a);
  };
  dF.isGuest = function () {
    return ss.isNullOrUndefined(az.get("login9"));
  };
  dF.getCurrentExperimentVariations = function () {
    var a = ss.coalesce(az.get("expt"), "");
    return VEL.Skynet.Global.Extensions.StringExtensions.toArrayOfIntegers(a);
  };
  dF.tryUpdateExperimentContext = function (a, b) {
    var c = Enumerable.from(a).where(function (h) {
      return !ss.contains(b, h);
    });
    var d = Enumerable.from(b).concat(c);
    var e = ss.arrayFromEnumerable(d).join(",");
    var f = az.set("expt", e, 31536000);
    if (f) {
      var g = az.get("__debug__override");
      VEL.Skynet.Global.Server.Switches.static$1 =
        new VEL.Skynet.Global.Server.ClientSwitchContext(e, g);
    }
    return f;
  };
  dF.$n = function () {
    if (
      ss.isNullOrUndefined(ServerModel.guestVisit) ||
      ServerModel.guestVisit.length === 0
    ) {
      return;
    }
    var a = dF.getCurrentExperimentVariations();
    var b = [];
    for (var c = 0; c < ServerModel.guestVisit.length; c++) {
      var d = { $: ServerModel.guestVisit[c] };
      if (
        Enumerable.from(a).any(
          ss.mkdel({ pageExperimentVariationIds: d }, function (i) {
            return ss.contains(this.pageExperimentVariationIds.$, i);
          })
        )
      ) {
        continue;
      }
      var e = new ss.Random().nextMax(d.$.length);
      var f = d.$[e];
      b.push(f);
    }
    if (b.length === 0) {
      return;
    }
    if (dF.tryUpdateExperimentContext(b, a)) {
      for (var g = 0; g < b.length; g++) {
        var h = b[g];
        $.get("/experimentajax/recruitguest?experimentVariationId=" + h);
      }
    }
  };
  dF.$o = function () {
    if (ServerModel.pageId === undefined) {
      return;
    }
    var a = dF.getCurrentExperimentVariations();
    $.post(
      "/experimentajax/recruitregistereduser/" + ServerModel.pageId,
      function (b) {
        if (b.length === 0) {
          return;
        }
        if (dF.tryUpdateExperimentContext(b, a)) {
          dF.$8();
        }
      }
    );
  };
  dF.$z = function () {
    var a = window.location.pathname + window.location.search;
    var b = ServerModel.pageId === undefined ? 0 : ServerModel.pageId;
    if (dF.isGuest()) {
      var c = ss.isNullOrEmptyString(document.referrer);
      var d;
      if (c) {
        d = "";
      } else {
        var e = document.referrer.toLowerCase();
        var f = e.split(String.fromCharCode(47));
        if (ss.startsWithString(e, "http") && f.length > 2) {
          d = f[2].split(String.fromCharCode(58))[0];
        } else {
          d = e;
        }
      }
      if (!ss.referenceEquals(d, window.location.hostname)) {
        var g = az.get("referrer2");
        if (ss.isNullOrUndefined(g)) {
          var h = d + "," + b;
          az.set("referrer2", h, 31536000);
          if (new ss.Random().nextMax(100) === 0) {
            var i = {};
            i.type = 1102;
            i.url = encodeURIComponent(a);
            i.pageId = b;
            $.post("/eventsajax/trackpage", i);
          }
        }
      }
    }
    if (new ss.Random().nextMax(500) === 0) {
      var j = {};
      j.type = 1103;
      j.url = encodeURIComponent(a);
      j.pageId = b;
      $.post("/eventsajax/trackpage", j);
    }
  };
  dF.$8 = function () {
    dF.$7(
      "style",
      "switch-styles",
      VEL.Skynet.Global.Server.Switches.getStyles(
        VEL.Skynet.Global.Server.Switches.static$1
      ),
      false
    );
    dF.$7(
      "script",
      "switch-strings",
      VEL.Skynet.Global.Server.Switches.getStringsScript(
        VEL.Skynet.Global.Server.Switches.static$1
      ),
      false
    );
    dF.$7(
      "script",
      "switch-scripts",
      VEL.Skynet.Global.Server.Switches.getScripts(
        VEL.Skynet.Global.Server.Switches.static$1
      ),
      true
    );
  };
  dF.$7 = function (a, b, c, d) {
    if (ss.isNullOrEmptyString(c)) {
      return;
    }
    var e = document.getElementById(b);
    if (ss.isValue(e)) {
      e.innerHTML = c;
      return;
    }
    var f = document.createElement(a);
    f.id = b;
    f.innerHTML = c;
    if (d) {
      window.setTimeout(function () {
        document.head.appendChild(f);
      }, 0);
    } else {
      document.head.appendChild(f);
    }
  };
  dF.$q = function (a, b) {
    var c = new d8(".js-result-notification-dot").getEach();
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      e.set_isVisible(a);
    }
    var f = b.getAttribute("href");
    if (a && !(f.indexOf("?ref=new") !== -1)) {
      b.setAttribute("href", f + "?ref=new");
    } else {
      if (!a && f.indexOf("?ref=new") !== -1) {
        b.setAttribute("href", ss.replaceAllString(f, "?ref=new", ""));
      }
    }
  };
  dF.$u = function () {
    if (
      !dF.isGuest() &&
      VEL.Skynet.Global.Server.Switches.getBoolean(
        VEL.Skynet.Global.Server.Switches.static$1,
        VEL.Skynet.Global.Server.SwitchKeys.notifyForNewSubmissions
      )
    ) {
      var a = new d6.$ctor1(".js-my-results");
      if (!a.get_exists()) {
        return;
      }
      if (!ss.isValue(dF.$E)) {
        dF.$q(aN.getBooleanFromLocalStorage("__newassignments"), a);
      } else {
        dF.$q(ss.unbox(dF.$E), a);
      }
    } else {
      aN.removeItem("__newassignments");
    }
  };
  dF.$w = function () {
    new dk(dF.$9(), dF.isGuest(), dF.$m()).setup();
  };
  dF.$t = function () {
    ax.cookieConsentIsEnabled = dF.$9() === 3;
    ax.run(
      function () {
        dF.$d(true);
      },
      function () {
        dF.$d(false);
      },
      dF.$m()
    );
  };
  dF.$g = function () {
    var a = new d6.$ctor1(".js-footer-ajax");
    if (a.get_exists()) {
      $.get(
        ServerModel.footerAjax,
        ss.mkdel(this, function (c) {
          a.set_html(ss.cast(c, String));
          new dW(".js-footer-languages .js-change-language", dF.$c, null);
          dF.$v();
          dF.$1();
        })
      );
    }
    am.initialize();
    ao.initialize();
    dF.$3();
    dF.$2();
    dF.$x();
    var b = new dU.$ctor3(".js-menu-button-mobile", dF.$y, true);
    dF.$H = new d6.$ctor1("#logo");
    dF.$D = new dU.$ctor3("#shell_faded_overlay", dF.$f, true);
    dF.$P = new dU.$ctor3("#profile_button", dF.$i, true);
    dF.$J = new d6.$ctor1(".js-overlay-menu");
    dF.$I = new dU.$ctor3(".js-overlay-mask", dF.$6, true);
    dF.$L = new d6.$ctor1("nav");
    dF.$K = new d6.$ctor1("#topbar_mobile_buttons");
    dF.$R = new d6.$ctor1(".js-search-suggestions-wrapper");
    dF.$F = new d6.$ctor1(".js-language-selector");
    new dU.$ctor3(".js-language-btn", dF.$h, true);
    new dW(".js-language-selector .js-change-language", dF.$c, null);
    dF.$0();
    dF.$U = $(window).width();
    $(window).on("resize", function (c) {
      dF.$j();
    });
    dF.$b();
  };
  dF.$b = function () {
    if (!ServerHelper.get_isGuest() && !ServerModel.isBasic) {
      return;
    }
    var a = $(".js-paid-required");
    var b = a.get();
    for (var c = 0; c < b.length; c++) {
      var d = b[c];
      var e = { $: $(d) };
      if (e.$.attr("href") === "#") {
        continue;
      }
      e.$.attr("title", Strings.resource_SubscriptionRequired_Tooltip);
      e.$.attr("href", "#");
      e.$.click(
        ss.mkdel({ obj: e }, function (f) {
          var g = ss.cast(
            ss.Enum.parse(
              VEL.Skynet.Global.Enums.SubscriptionRequiredFeatureEnum,
              this.obj.$.attr("data-paid-required-feature")
            ),
            ss.Int32
          );
          var h = new dz(g);
          h.open();
          f.preventDefault();
          f.stopPropagation();
        })
      );
    }
  };
  dF.$0 = function () {
    var a = new dW(".js-btn-load", null, null);
    a.onClicks(
      function (d) {
        d.addLoadingGif();
      },
      false,
      false
    );
    var b = new dU.$ctor3(".js-scroll-to-top", dF.scrollToTop, true);
    b.onClick(dF.scrollToTop, false, false);
    var c = new dW(".js-scroll-to-anchor", dF.$p, null);
    c.onClicks(dF.$p, false, false);
    $(window).on("pageshow", function (d) {
      a.getEach().forEach(function (e) {
        e.resetLoadingGif();
      });
    });
  };
  dF.scrollToTop = function () {
    var a = Math.min(350, ss.Int32.div(window.scrollY, 2));
    var b = new d6.$ctor1("html,body");
    b.animate("scrollTop", 0, a, null, null);
  };
  dF.scrollIntoView = function (a, b, c) {
    var d = window.scrollY;
    var e = window.scrollY + window.innerHeight;
    var f = a.get_domObject().offset().top - b;
    var g = a.get_domObject().offset().top + a.get_outerHeight() + b;
    if (f < d) {
      new d6.$ctor1("html,body").animate("scrollTop", f, 250, c, null);
    } else {
      if (g > e) {
        var h = Math.min(g - window.innerHeight, f);
        new d6.$ctor1("html,body").animate("scrollTop", h, 250, c, null);
      } else {
        if (!ss.staticEquals(c, null)) {
          c();
        }
      }
    }
  };
  dF.writeError = function (a) {
    if (a1.isRelease()) {
      return;
    }
    if (ss.isNullOrUndefined(a)) {
      dF.$C.set_isVisible(false);
      return;
    }
    dF.$C.CSS$1("background-color", "#ff0000");
    dF.$C.set_text(a);
    dF.$C.set_isVisible(true);
  };
  dF.displayMessage = function (a, b, c) {
    if (!a1.isRelease()) {
      dF.$G.set_text(a);
      dF.$G.set_isVisible(true);
    }
    if (c <= 0) {
      c = 4000;
    }
    dF.$S.set_html(a);
    dF.$S.removeClass("error");
    if (b) {
      dF.$T.fadeInOut(200, c, 1000);
    } else {
      dF.$T.fadeIn(200);
    }
  };
  dF.hideMessage = function () {
    dF.$T.set_isVisible(false);
  };
  dF.displayErrorMessage = function (a, b, c) {
    dF.displayMessage(a, b, c);
    dF.$S.addClass("error");
    dF.displayError = a;
  };
  dF.displayNetworkErrorMessage = function () {
    dF.displayErrorMessage(Strings.global_NetworkError, true, 0);
  };
  dF.hideProgress = function () {
    dF.$Q.set_isVisible(false);
  };
  dF.showProgress = function () {
    dF.$Q.set_isVisible(true);
  };
  dF.$p = function (a) {
    var b = a.get_href();
    if (ss.isNullOrUndefined(b) || !(b.indexOf("#") !== -1)) {
      return;
    }
    var c = new d6.$ctor1(
      "a[name=" + b.split(String.fromCharCode(35))[1] + "]"
    );
    if (c.get_exists()) {
      var d = new d6.$ctor1("html,body");
      d.animate(
        "scrollTop",
        c.get_domObject().offset().top,
        800,
        function () {
          c.focus();
        },
        null
      );
    }
  };
  dF.$j = function () {
    var a = $(window).width();
    if (a !== dF.$U) {
      dF.$U = a;
      dF.$5();
      dF.$6();
      dF.$x();
    }
  };
  dF.$f = function () {
    dF.$5();
    dF.$6();
  };
  dF.$y = function () {
    if (dF.$L.hasClass("open")) {
      dF.$5();
    } else {
      dF.$l();
    }
  };
  dF.$k = function () {
    dF.$D.addClass("open");
  };
  dF.$4 = function () {
    dF.$D.removeClass("open");
  };
  dF.$l = function () {
    dF.$A.CSS$1("overflow-y", "hidden");
    window.scrollTo(0, 0);
    dF.$L.addClass("open");
    dF.$k();
  };
  dF.$5 = function () {
    dF.$A.CSS$1("overflow-y", "auto");
    dF.$L.removeClass("open");
    dF.$4();
  };
  dF.$i = function () {
    var a =
      $(document).width() -
      dF.$P.get_domObject().offset().left -
      dF.$P.get_outerWidth();
    var b = $(document).width() - dF.$J.get_outerWidth() - 15;
    a = Math.min(a, b);
    dF.$6();
    dF.$J.set_isVisible(true);
    dF.$J.CSS("right", a);
    dF.$P.addClass("is-open");
    dF.$I.set_isVisible(true);
  };
  dF.$6 = function () {
    dF.$F.set_isVisible(false);
    dF.$I.set_isVisible(false);
    dF.$J.set_isVisible(false);
    dF.$P.removeClass("is-open");
  };
  dF.$x = function () {
    if (aB.isPortraitPhoneSized()) {
      return;
    }
    if (window.location.href.toLowerCase().indexOf("managepayments") !== -1) {
      new d6.$ctor1(".js-fix-payment").set_isVisible(false);
    }
    var a = [
      ".js-tag-line",
      ".js-home",
      ".js-username-display",
      ".js-community",
      ".js-features",
      ".js-upgrade",
    ];
    var b = new d6.$ctor1("header");
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      new d6.$ctor3(b.get_domObject(), d).set_isVisible(true);
    }
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      if (b.height() > 60) {
        new d6.$ctor3(b.get_domObject(), f).set_isVisible(false);
      } else {
        break;
      }
    }
  };
  dF.$2 = function () {
    var a = (window.location.pathname + window.location.search).toLowerCase();
    dF.$r(a, ".js-log-in");
    dF.$r(a, ".js-register");
    dF.$r(a, ".js-account-localization");
  };
  dF.$3 = function () {
    dF.$s(".js-register");
    dF.$s(".js-upgrade");
  };
  dF.$1 = function () {
    if (
      VEL.Skynet.Global.Server.Switches.getBoolean(
        VEL.Skynet.Global.Server.Switches.static$1,
        VEL.Skynet.Global.Server.SwitchKeys.userFeedback
      )
    ) {
      new dU.$ctor3(
        ".js-give-feedback",
        function () {
          new b7(0, 0, null).open();
        },
        true
      );
      new d6.$ctor1(".js-user-feedback").set_isVisible(true);
    }
    if (aB.isPhoneSized()) {
      return;
    }
    new dU.$ctor3(
      ".js-feedback-banner button",
      function () {
        new b7(2, ServerModel.pageId, null).open();
      },
      true
    );
  };
  dF.$v = function () {
    if (dF.$O === 3) {
      new d8(".js-old-policy").set_areVisible(false);
      new d8(".js-new-policy").set_areVisible(true);
      new dU.$ctor3(
        ".js-cookie-preferences",
        function () {
          ax.openPreferencesModal();
        },
        true
      );
    }
  };
  dF.$r = function (a, b) {
    var c = new dW(b, null, null);
    var d = c.getEach();
    for (var e = 0; e < d.length; e++) {
      var f = d[e];
      var g = f.get_href();
      if (ss.isValue(g)) {
        var h = dF.$a(a, g, ServerHelper.get_isLoggedIn());
        if (!ss.isNullOrEmptyString(h)) {
          if (g.indexOf("?") !== -1) {
            g += "&";
          } else {
            g += "?";
          }
          g += h;
          f.set_href(g);
        }
      }
    }
  };
  dF.$s = function (a) {
    if (ServerModel.pageId === 0 || ServerModel.pageId === undefined) {
      return;
    }
    var b = new dW(a, null, null);
    var c = ss.replaceAllString(
      ss.Enum.getName(
        VEL.Skynet.Global.Enums.PageIds,
        ServerModel.pageId
      ).toLowerCase(),
      "_",
      "-"
    );
    var d = b.getEach();
    for (var e = 0; e < d.length; e++) {
      var f = d[e];
      var g = f.get_href();
      if (ss.isValue(g)) {
        if (g.indexOf("?") !== -1) {
          g += "&ref=";
        } else {
          g += "?ref=";
        }
        g += c;
        f.set_href(g);
      }
    }
  };
  dF.$a = function (a, b, c) {
    if (
      ss.replaceAllString(a.split(String.fromCharCode(63))[0], "/", "")
        .length <= 2
    ) {
      return "";
    }
    if (a.indexOf("nocache=") !== -1 || b.indexOf("redirectto=") !== -1) {
      return "";
    }
    var d = a.indexOf("/account/") !== -1;
    if (c || !d) {
      return "redirectto=" + encodeURIComponent(a);
    }
    var e = a.indexOf("redirectto=") !== -1;
    if (d && e) {
      var f = new RegExp("redirectto=([^&]*)");
      var g = a.match(f);
      if (ss.isValue(g) && g.length > 0) {
        return g[0];
      }
    }
    if (a.indexOf("/account/login") !== -1 && !e) {
      var h = new d6.$ctor1("#RedirectTo");
      if (ss.isNullOrUndefined(h)) {
        return "";
      }
      return "redirectto=" + encodeURIComponent(h.getAttribute("value"));
    }
    return "";
  };
  dF.$h = function () {
    if (aB.isRTL()) {
      dF.$F.CSS$1("left", "5px");
      dF.$F.CSS$1("right", "auto");
    } else {
      dF.$F.CSS$1("left", "auto");
      dF.$F.CSS$1("right", "5px");
    }
    dF.$F.set_isVisible(true);
    dF.$I.set_isVisible(true);
  };
  dF.$c = function (a) {
    var b = a.getAttribute("data-language");
    window.location.href =
      "/account/redirectlanguage?languageId=" +
      b +
      "&redirectTo=" +
      encodeURIComponent(window.location.pathname + window.location.search);
  };
  dF.$e = function (a) {
    var b = ss.cast(a, dK);
    var c = ss.isValue(b.error)
      ? b.error.message || (b.error.get_message ? b.error.get_message() : null)
      : null;
    if (ss.isNullOrEmptyString(c)) {
      c = b.message;
    }
    var d = b.lineno + ":" + b.filename + ":" + c;
    dF.writeError(d);
    window.setTimeout(function () {
      var e = b.lineno + ":" + b.colno + " " + b.message;
      var f = null;
      if (ss.isValue(b.error)) {
        e +=
          "\r\n" +
          (b.error.message ||
            (b.error.get_message ? b.error.get_message() : null));
        f = b.error.stack || (b.error.get_stack ? b.error.get_stack() : null);
      }
      ac.error(b.filename, e, f);
    }, 100);
    dF.jsErrors += d + "|";
  };
  dF.getPolicyUpdateMode = function () {
    var a = VEL.Skynet.Global.Server.Switches.getString(
      VEL.Skynet.Global.Server.Switches.static$1,
      VEL.Skynet.Global.Server.SwitchKeys.updatedPolicyEffectiveDate
    );
    if (
      ServerModel.policyTestOnly &&
      !/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}Z$/.test(a)
    ) {
      return 1;
    }
    if (ss.isNullOrEmptyString(a)) {
      return 1;
    } else {
      try {
        return new Date() >=
          new Date(
            new Date(new Date(a).toISOString()).getTime() -
              0 * 24 * 60 * 60 * 1000
          )
          ? 3
          : new Date() >=
            new Date(
              new Date(new Date(a).toISOString()).getTime() -
                15 * 24 * 60 * 60 * 1000
            )
          ? 2
          : 1;
      } catch (b) {
        return 1;
      }
    }
  };
  dF.$9 = function () {
    if (dF.$O === 0) {
      dF.$O = dF.getPolicyUpdateMode();
    }
    return dF.$O;
  };
  dF.navigateWithProgressBar = function (a) {
    ag.displayProgress();
    $(window).one("pagehide", function (b) {
      ag.success(null, false);
    });
    window.location.href = a;
  };
  dF.$d = function (a) {
    var b = 0,
      c = new ss.TaskCompletionSource(),
      d,
      e,
      f,
      g,
      h;
    var i = function () {
      try {
        $sm1: for (;;) {
          switch (b) {
            case 0:
              b = -1;
              d = !dF.isGuest();
              e = ax.getAcceptType();
              f = a && e !== 2;
              g = f || !a;
              if (d && g) {
                dF.showProgress();
              }
              if (d) {
                h = ss.Task.fromPromise(
                  $.post("/consentajax/logcookieconsent"),
                  0
                );
                b = 2;
                h.continueWith(i);
                return;
              }
              b = 1;
              continue $sm1;
            case 2:
              b = -1;
              h.getAwaitedResult();
              b = 1;
              continue $sm1;
            case 1:
              b = -1;
              if (g) {
                window.location.reload();
              }
              b = -1;
              break $sm1;
            default:
              break $sm1;
          }
        }
        c.setResult(null);
      } catch (j) {
        c.setException(ss.Exception.wrap(j));
      }
    };
    i();
    return c.task;
  };
  dF.$m = function () {
    return (
      window.location.pathname.indexOf("/screen/interactive") !== -1 ||
      Enumerable.from([
        "/terms",
        "/privacy",
        "/cookie-policy",
        "/subprocessors",
      ]).any(function (a) {
        return (
          !(window.location.pathname.indexOf("/community") !== -1) &&
          ss.endsWithString(window.location.pathname, a)
        );
      })
    );
  };
  global.VEL.Skynet.Global.Shell = dF;
  var dI = function () {};
  dI.__typeName = "VEL.Skynet.Global.Shell$ErrorDetails";
  global.VEL.Skynet.Global.Shell$ErrorDetails = dI;
  var dK = function () {
    this.lineno = 0;
    this.colno = 0;
    this.filename = null;
    this.message = null;
    this.error = null;
  };
  dK.__typeName = "VEL.Skynet.Global.Shell$ErrorEvent";
  global.VEL.Skynet.Global.Shell$ErrorEvent = dK;
  var dM = function (a, b) {
    this.$9 = null;
    this.$a = null;
    this.$c = null;
    this.$7 = null;
    this.$d = null;
    this.$b = null;
    this.$e = 0;
    this.$8 = null;
    dV.$ctor1.call(this, a);
    this.$4(b);
  };
  dM.__typeName = "VEL.Skynet.Global.Controls.ActionsMenu";
  global.VEL.Skynet.Global.Controls.ActionsMenu = dM;
  var dO = function () {
    this.$9 = null;
    this.$5 = null;
    this.$4 = null;
    this.$a = 0;
    this.$6 = 0;
    this.$2 = 0;
    this.$7 = 0;
    this.$8 = 0;
    this.$3 = 0;
    this.$5 = new d6.$ctor1(".js-play-preload-loader");
    this.$4 = new d6.$ctor1(".js-play-log-message");
    this.$9 = new ss.Stopwatch();
    this.$9.start();
    this.$a = ss.Enum.getValues(VEL.Skynet.Global.PreloaderLogEnum).length;
    window.setTimeout(ss.mkdel(this, this.$0), 15000);
  };
  dO.__typeName = "VEL.Skynet.Global.Controls.ActivityPreloader";
  global.VEL.Skynet.Global.Controls.ActivityPreloader = dO;
  var dQ = function (a) {
    this.$1 = null;
    d6.$ctor1.call(this, a);
    this.$1 = this.find(d6).call(this, "source");
  };
  dQ.__typeName = "VEL.Skynet.Global.Controls.Audio";
  global.VEL.Skynet.Global.Controls.Audio = dQ;
  var dS = function (a) {
    dS.$ctor1.call(this, ".js-background-fader", a);
  };
  dS.__typeName = "VEL.Skynet.Global.Controls.BackgroundFader";
  dS.$ctor1 = function (a, b) {
    dU.$ctor3.call(this, a, b, true);
    dS.$0 = this;
  };
  dS.forceHide = function () {
    if (ss.isValue(dS.$0)) {
      dS.$0.set_isVisible(false);
    }
  };
  global.VEL.Skynet.Global.Controls.BackgroundFader = dS;
  var dU = function (a) {
    d6.$ctor2.call(this, $(a));
  };
  dU.__typeName = "VEL.Skynet.Global.Controls.Button";
  dU.$ctor1 = function (a) {
    d6.$ctor1.call(this, a);
  };
  dU.$ctor4 = function (a, b, c) {
    d6.$ctor3.call(this, a, b);
    this.onClick(c, false, true);
  };
  dU.$ctor3 = function (a, b, c) {
    d6.$ctor1.call(this, a);
    this.onClick(b, false, c);
  };
  dU.$ctor2 = function (a) {
    d6.$ctor2.call(this, a);
  };
  global.VEL.Skynet.Global.Controls.Button = dU;
  var dW = function (a, b, c) {
    this.$1 = null;
    d6.$ctor3.call(this, c, a);
    this.$1 = Enumerable.from(this.get_domObject().get())
      .select(function (d) {
        return new dU(d);
      })
      .toArray();
    if (!ss.staticEquals(b, null)) {
      this.get_domObject().on(
        "click",
        ss.mkdel(this, function (d) {
          d.preventDefault();
          d.stopPropagation();
          var e = $(d.target);
          var f = Enumerable.from(this.$1).firstOrDefault(function (g) {
            return (
              g.get_domObject().is(e) || g.get_domObject().find(e).length !== 0
            );
          }, ss.getDefaultValue(dU));
          if (ss.isValue(f)) {
            b(f);
          }
        })
      );
    }
  };
  dW.__typeName = "VEL.Skynet.Global.Controls.Buttons";
  global.VEL.Skynet.Global.Controls.Buttons = dW;
  var dY = function (a) {
    this.$0 = null;
    this.$0 = ss.cast(
      a,
      ss.isValue(a) && ss.isInstanceOfType(a, Element) && a.tagName === "CANVAS"
    );
  };
  dY.__typeName = "VEL.Skynet.Global.Controls.Canvas";
  dY.$ctor1 = function (a) {
    this.$0 = null;
    var b = $(a).get(0);
    this.$0 = ss.cast(
      b,
      ss.isValue(b) && ss.isInstanceOfType(b, Element) && b.tagName === "CANVAS"
    );
  };
  dY.create = function () {
    var a = new dY(document.createElement("canvas"));
    return a;
  };
  global.VEL.Skynet.Global.Controls.Canvas = dY;
  var d0 = function (a, b) {
    dU.$ctor2.call(this, $(a));
    if (!ss.staticEquals(b, null)) {
      this.get_domObject().on("click", function (c) {
        b();
      });
    }
  };
  d0.__typeName = "VEL.Skynet.Global.Controls.Checkbox";
  d0.$ctor2 = function (a, b, c) {
    dU.$ctor2.call(this, a.find(b));
    if (!ss.staticEquals(c, null)) {
      this.get_domObject().on("click", function (d) {
        c();
      });
    }
  };
  d0.$ctor1 = function (a, b) {
    dU.$ctor1.call(this, a);
    if (!ss.staticEquals(b, null)) {
      this.get_domObject().on("click", function (c) {
        b();
      });
    }
  };
  global.VEL.Skynet.Global.Controls.Checkbox = d0;
  var d2 = function (a, b) {
    this.$a = null;
    this.$8 = null;
    this.$7 = null;
    this.$6 = null;
    this.$9 = null;
    this.$5 = [];
    this.$4 = [];
    d6.$ctor1.call(this, a);
    this.$9 = b;
    new ei(a + " .js-templates-filters");
    new ei(a + " .js-locations-filters");
    this.$a = new d4(
      a + " .js-templates-filters",
      ss.mkdel(this, this.$2),
      ".js-templates-filters-tags"
    );
    this.$8 = new d4(
      a + " .js-locations-filters",
      ss.mkdel(this, this.$2),
      ".js-locations-filters-tags"
    );
    this.$6 = new dU.$ctor3(
      a + " .js-apply-filters",
      ss.mkdel(this, this.$1),
      true
    );
    this.$7 = new dW(
      a + " .js-clear-button",
      ss.mkdel(this, function (c) {
        this.$a.uncheckAll();
        this.$8.uncheckAll();
        this.$2();
      }),
      null
    );
    this.setupShowFilters();
    new dU.$ctor3(a + " .js-hide-filters", ss.mkdel(this, this.$3), true);
    $(window).on(
      "resize",
      ss.mkdel(this, function (c) {
        window.setTimeout(ss.mkdel(this, this.$3), 10);
      })
    );
    this.$5 = this.$a.getSelectedValues();
    this.$4 = this.$8.getSelectedValues();
  };
  d2.__typeName = "VEL.Skynet.Global.Controls.CommunityFilters";
  global.VEL.Skynet.Global.Controls.CommunityFilters = d2;
  var d4 = function (a, b, c) {
    this.$2 = null;
    this.$5 = null;
    this.$4 = null;
    this.$3 = null;
    d6.$ctor1.call(this, a);
    this.$5 = ss.isNullOrUndefined(c) ? null : $(c);
    this.$3 = new d6.$ctor3(this.get_domObject(), ".js-selected-filters-count");
    this.$4 = ss.mkdel(this, function () {
      this.$1();
      b();
    });
    var d = this.get_domObject().find(".js-checkbox-input");
    this.$2 = new Array(d.length);
    var e = d.get();
    for (var f = 0; f < e.length; f++) {
      var g = $(e[f]);
      var h = g.val();
      this.$2[f] = new d0(e[f], this.$4);
    }
    this.$1();
  };
  d4.__typeName = "VEL.Skynet.Global.Controls.CommunityFiltersCheckboxList";
  global.VEL.Skynet.Global.Controls.CommunityFiltersCheckboxList = d4;
  var d6 = function (a) {
    this.$1$1 = null;
    this.set_domObject($(a));
  };
  d6.__typeName = "VEL.Skynet.Global.Controls.Control";
  d6.$ctor1 = function (a) {
    this.$1$1 = null;
    this.set_domObject($(a));
  };
  d6.$ctor2 = function (a) {
    this.$1$1 = null;
    this.set_domObject(a);
  };
  d6.$ctor3 = function (a, b) {
    this.$1$1 = null;
    this.set_domObject(ss.isNullOrUndefined(a) ? $(b) : a.find(b));
  };
  d6.$ctor4 = function (a, b, c, d) {
    this.$1$1 = null;
    this.set_domObject(aL.buildTemplate(b, c));
    if (d) {
      this.$0(a);
    } else {
      this.appendTo(a);
    }
  };
  d6.create = function (a) {
    return function (b, c, d, e) {
      var f = ss.isNullOrUndefined(d) ? "" : ss.formatString("id='{0}'", d);
      var g = ss.isNullOrEmptyString(e)
        ? ""
        : ss.formatString("class='{0}'", e);
      var h = $(ss.formatString("<{0} {1} {2}></{0}>", c, f, g));
      var i = new a(h);
      if (ss.isNullOrUndefined(b)) {
        i.appendTo(new d6.$ctor1("body"));
      } else {
        i.appendTo(b);
      }
      return i;
    };
  };
  d6.createFromTemplate = function (a) {
    return function (b, c, d, e) {
      var f = aL.buildTemplate(c, d);
      var g = new a(f);
      if (e) {
        g.$0(b);
      } else {
        g.appendTo(b);
      }
      return g;
    };
  };
  d6.createFromHtml = function (a) {
    return function (b, c) {
      var d = $(c);
      var e = new a(d);
      e.appendTo(b);
      return e;
    };
  };
  global.VEL.Skynet.Global.Controls.Control = d6;
  var d8 = function (a) {
    this.$1 = null;
    d6.$ctor1.call(this, a);
    this.$1 = Enumerable.from(this.get_domObject().get())
      .select(function (b) {
        return new d6(b);
      })
      .toArray();
  };
  d8.__typeName = "VEL.Skynet.Global.Controls.Controls";
  d8.$ctor1 = function (a, b) {
    this.$1 = null;
    d6.$ctor3.call(this, a.get_domObject(), b);
    this.$1 = Enumerable.from(this.get_domObject().get())
      .select(function (c) {
        return new d6(c);
      })
      .toArray();
  };
  global.VEL.Skynet.Global.Controls.Controls = d8;
  var ea = function (a, b) {
    this.$c = null;
    this.$d = null;
    this.$b = null;
    this.$e = null;
    d6.$ctor2.call(this, a);
    this.$d = b;
    this.$c = new dH();
    this.$6();
  };
  ea.__typeName = "VEL.Skynet.Global.Controls.CurrentAssignments";
  global.VEL.Skynet.Global.Controls.CurrentAssignments = ea;
  var ec = function (a, b) {
    dG.$ctor1.call(this, a);
    var c = this.getData("dateformat", null, false);
    if (ss.isValue(c)) {
      $.datepicker.setDefaults({ dateFormat: c });
    }
    this.get_domObject().datepicker();
    this.$8();
    if (!ss.staticEquals(b, null)) {
      this.onChange(b, false);
    }
  };
  ec.__typeName = "VEL.Skynet.Global.Controls.DatePicker";
  global.VEL.Skynet.Global.Controls.DatePicker = ec;
  var ee = function () {};
  ee.__typeName = "VEL.Skynet.Global.Controls.DragStatusEnum";
  global.VEL.Skynet.Global.Controls.DragStatusEnum = ee;
  var eg = function () {
    this.$2 = null;
    this.$3 = null;
    this.$4 = null;
    this.$1 = null;
    this.$6 = 0;
    this.$7 = 0;
    this.$5 = 0;
    d6.$ctor1.call(this, ".js-drag-wrapper");
    this.$2 = new d6.$ctor1(".js-drag-icon");
    this.$3 = new d6.$ctor1(".js-drag-name");
    this.$4 = new d6.$ctor1(".js-drag-ok");
    this.$1 = new d6.$ctor1(".js-drag-blocked");
  };
  eg.__typeName = "VEL.Skynet.Global.Controls.DragWrapper";
  global.VEL.Skynet.Global.Controls.DragWrapper = eg;
  var ei = function (a) {
    this.$3 = null;
    this.$4 = null;
    this.$5 = null;
    d6.$ctor1.call(this, a);
    var b = this.get_domObject().find(" > .js-foldable-title > .fa");
    this.$3 = this.get_domObject().find(" > .js-foldable-content");
    new dU.$ctor4(
      this.get_domObject(),
      ".js-foldable-title",
      ss.mkdel(this, function () {
        this.get_domObject().toggleClass("open");
        b.toggleClass("fa-caret-right");
        b.toggleClass("fa-caret-down");
      })
    );
    this.$4 = new dU.$ctor4(
      this.get_domObject(),
      ".js-fold-partial-foldable",
      ss.mkdel(this, this.$1)
    );
    this.$5 = new dU.$ctor4(
      this.get_domObject(),
      ".js-unfold-partial-foldable",
      ss.mkdel(this, this.$2)
    );
    this.$1();
  };
  ei.__typeName = "VEL.Skynet.Global.Controls.Foldable";
  global.VEL.Skynet.Global.Controls.Foldable = ei;
  var ek = function (a) {
    d6.$ctor2.call(this, a);
  };
  ek.__typeName = "VEL.Skynet.Global.Controls.FolderTreeItem";
  ek.create = function (a, b, c) {
    for (var d = 0; d < b.Level; d++) {
      a.append(d6.create(d6).call(null, a, "div", null, "folder-indent"));
    }
    var e = d6
      .createFromTemplate(ek)
      .call(
        null,
        a,
        "folder_tree_item_template",
        [
          b.Name,
          VEL.Skynet.Global.Server.AssetHelper.getFolderImage(b.Color),
        ],
        false
      );
    e.onClick(
      function () {
        c(b);
      },
      false,
      true
    );
    return e;
  };
  global.VEL.Skynet.Global.Controls.FolderTreeItem = ek;
  var em = function (a, b) {
    this.$1 = null;
    d6.$ctor1.call(this, a);
    var c = b;
    if (ss.isNullOrUndefined(c)) {
      c = this.attribute("action");
    }
    this.$1 = c;
  };
  em.__typeName = "VEL.Skynet.Global.Controls.Form";
  global.VEL.Skynet.Global.Controls.Form = em;
  var eo = function (a) {
    d6.$ctor2.call(this, a);
  };
  eo.__typeName = "VEL.Skynet.Global.Controls.Icon";
  eo.$ctor1 = function (a, b) {
    d6.$ctor3.call(this, a, b);
  };
  eo.create = function (a, b) {
    return d6.create(eo).call(null, a, "i", null, b);
  };
  global.VEL.Skynet.Global.Controls.Icon = eo;
  var ab = function (a, b) {
    this.$1 = null;
    d6.call(this, a);
    this.$1 = ss.cast(
      a,
      ss.isValue(a) && ss.isInstanceOfType(a, Element) && a.tagName === "IFRAME"
    );
    if (!ss.staticEquals(b, null)) {
      this.$1.onload = function (c) {
        b();
      };
    }
  };
  ab.__typeName = "VEL.Skynet.Global.Controls.IFrame";
  global.VEL.Skynet.Global.Controls.IFrame = ab;
  var ad = function () {};
  ad.__typeName = "VEL.Skynet.Global.Controls.IItemsDragContainer";
  global.VEL.Skynet.Global.Controls.IItemsDragContainer = ad;
  var a6 = function (a) {
    this.$2 = null;
    d6.$ctor1.call(this, a);
    var b = this.get_domObject().get(0);
    this.$2 = ss.cast(
      b,
      ss.isValue(b) && ss.isInstanceOfType(b, Element) && b.tagName === "IMG"
    );
  };
  a6.__typeName = "VEL.Skynet.Global.Controls.Image";
  a6.$ctor1 = function (a, b, c) {
    this.$2 = null;
    d6.call(this, a);
    this.$2 = ss.cast(
      a,
      ss.isValue(a) && ss.isInstanceOfType(a, Element) && a.tagName === "IMG"
    );
    if (!ss.staticEquals(b, null)) {
      this.$2.onload = ss.mkdel(this, function (d) {
        b(this);
      });
    }
    if (!ss.staticEquals(c, null)) {
      this.$2.onerror = function (d) {
        c();
      };
    }
  };
  a6.create = function (a, b, c, d) {
    var e = new a6.$ctor1(document.createElement("img"), c, d);
    if (ss.isValue(b)) {
      e.get_element().setAttribute("crossOrigin", b);
    }
    if (ss.isValue(a)) {
      e.$2.src = a;
    }
    return e;
  };
  global.VEL.Skynet.Global.Controls.Image = a6;
  var dG = function (a) {
    this.$5 = null;
    this.$4 = null;
    this.$6 = null;
    this.$7 = null;
    d6.call(this, a);
  };
  dG.__typeName = "VEL.Skynet.Global.Controls.Input";
  dG.$ctor2 = function (a, b) {
    this.$5 = null;
    this.$4 = null;
    this.$6 = null;
    this.$7 = null;
    d6.$ctor1.call(this, a);
    this.onChange(b, false);
  };
  dG.$ctor1 = function (a) {
    this.$5 = null;
    this.$4 = null;
    this.$6 = null;
    this.$7 = null;
    d6.$ctor1.call(this, a);
  };
  dG.$ctor3 = function (a, b) {
    this.$5 = null;
    this.$4 = null;
    this.$6 = null;
    this.$7 = null;
    d6.$ctor3.call(this, a, b);
  };
  dG.$ctor4 = function (a, b, c) {
    this.$5 = null;
    this.$4 = null;
    this.$6 = null;
    this.$7 = null;
    d6.$ctor3.call(this, a, b);
    this.onChange(c, false);
  };
  dG.$ctor5 = function (a, b, c) {
    dG.$ctor3.call(this, a, b);
    this.setAttribute("placeholder", c);
  };
  global.VEL.Skynet.Global.Controls.Input = dG;
  var dJ = function (a, b) {
    this.$1 = null;
    d6.$ctor1.call(this, a);
    this.$1 = Enumerable.from(this.get_domObject().get())
      .select(function (c) {
        var d = new dG(c);
        d.onChange(function () {
          b(d);
        }, false);
        return d;
      })
      .toArray();
  };
  dJ.__typeName = "VEL.Skynet.Global.Controls.Inputs";
  global.VEL.Skynet.Global.Controls.Inputs = dJ;
  var dL = function (a, b, c) {
    this.$2 = null;
    ss.makeGenericType(dZ, [ss.Int32]).call(this, a);
    if (ss.isValue(b)) {
      this.set_value(ss.unbox(b));
    }
    if (!ss.staticEquals(c, null)) {
      this.onChange(c);
    }
  };
  dL.__typeName = "VEL.Skynet.Global.Controls.IntSelect";
  global.VEL.Skynet.Global.Controls.IntSelect = dL;
  var dN = function (a, b, c) {
    dU.$ctor2.call(this, null);
    var d = new aL("#generic_modal_template_btn", []);
    this.set_domObject(d.build([null, c, a]));
    this.get_domObject().on(
      "click",
      ss.mkdel(this, function (e) {
        this.addLoadingGif();
        e.preventDefault();
        e.stopPropagation();
        b();
      })
    );
  };
  dN.__typeName = "VEL.Skynet.Global.Controls.ModalButton";
  global.VEL.Skynet.Global.Controls.ModalButton = dN;
  var dP = function (a, b) {
    this.$8 = null;
    this.$a = null;
    this.$9 = null;
    dG.$ctor3.call(this, a, b);
    this.$8 = this.getDataAsInt("default", 0, false);
    this.$9 = this.getAttributeAsNullableInt("max");
    this.$a = this.getAttributeAsNullableInt("min");
    this.set_intValue(ss.coalesce(this.$8, 0));
    this.onBlur(
      ss.mkdel(this, function () {
        this.set_intValue(this.get_intValue());
      })
    );
  };
  dP.__typeName = "VEL.Skynet.Global.Controls.NumberInput";
  global.VEL.Skynet.Global.Controls.NumberInput = dP;
  var dR = function () {};
  dR.__typeName = "VEL.Skynet.Global.Controls.OrderByEnum";
  global.VEL.Skynet.Global.Controls.OrderByEnum = dR;
  var dT = function (a, b, c) {
    this.$6 = null;
    this.$5 = 0;
    this.$4 = null;
    this.$3$1 = false;
    dU.$ctor1.call(this, a);
    this.$6 = c;
    this.$5 = b;
    this.$4 = new d6.$ctor3(this.get_domObject(), ".js-order-arrow");
    this.set_canToggle(true);
    this.onClick(ss.mkdel(this, this.$1), false, true);
  };
  dT.__typeName = "VEL.Skynet.Global.Controls.OrderByToggle";
  global.VEL.Skynet.Global.Controls.OrderByToggle = dT;
  var dV = function (a) {
    this.$1 = false;
    d6.call(this, a);
  };
  dV.__typeName = "VEL.Skynet.Global.Controls.Panel";
  dV.$ctor1 = function (a) {
    this.$1 = false;
    d6.$ctor1.call(this, a);
  };
  dV.$ctor3 = function (a, b) {
    this.$1 = false;
    d6.$ctor3.call(this, a, b);
  };
  dV.$ctor2 = function (a) {
    this.$1 = false;
    d6.$ctor2.call(this, a);
  };
  global.VEL.Skynet.Global.Controls.Panel = dV;
  var dX = function (a, b) {
    this.$1 = null;
    dU.$ctor1.call(this, dX.$0(a));
    this.$1 = a;
    if (!ss.staticEquals(b, null)) {
      this.onChange(b);
    }
  };
  dX.__typeName = "VEL.Skynet.Global.Controls.Radio";
  dX.$ctor1 = function (a, b, c) {
    this.$1 = null;
    dU.$ctor4.call(this, a, dX.$0(b), null);
    this.$1 = b;
    if (!ss.staticEquals(c, null)) {
      this.onChange(c);
    }
  };
  dX.$0 = function (a) {
    if (ss.startsWithString(a, "#") || ss.startsWithString(a, ".")) {
      return a;
    }
    return "input:radio[name=" + a + "]";
  };
  global.VEL.Skynet.Global.Controls.Radio = dX;
  var dZ = function (a) {
    var b = function (c) {
      d6.$ctor1.call(this, c);
    };
    ss.registerGenericClassInstance(
      b,
      dZ,
      [a],
      {
        get_selectedOption: function () {
          return new d6.$ctor2(this.get_domObject().find("option:selected"));
        },
        get_label: function () {
          return new d6.$ctor2($("label[for=" + this.getAttribute("id") + "]"));
        },
        get_value: null,
        set_value: null,
        get_text: function () {
          var c = this.get_domObject().val();
          var d = this.get_domObject().find("option[value=" + c + "]");
          return d.text();
        },
        set_text: function (c) {
          var d = this.get_domObject().find("option[value=" + c + "]");
          this.get_domObject().val(d.val());
        },
        blur: function () {
          this.get_domObject().blur();
        },
        addOption: function (c, d, e) {
          this.get_domObject().append(this.$1(c, d, e));
        },
        prependOption: function (c, d, e) {
          this.get_domObject().prepend(this.$1(c, d, e));
        },
        $1: function (c, d, e) {
          var f = {};
          f.value = d;
          f.text = c;
          f.selected = e;
          return $("<option>", f);
        },
        filterVisibleOptions: null,
      },
      function () {
        return d6;
      },
      function () {
        return [];
      }
    );
    return b;
  };
  dZ.__typeName = "VEL.Skynet.Global.Controls.Select$1";
  ss.initGenericClass(dZ, aa, 1);
  global.VEL.Skynet.Global.Controls.Select$1 = dZ;
  var d1 = function (a) {
    this.$7 = null;
    this.$5 = null;
    this.$6 = null;
    this.$4 = null;
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
    this.$1$4 = null;
    if (navigator.share != undefined && aB.isPhoneSized()) {
      var b = new dU.$ctor4(
        a.get_domObject(),
        ".js-share-native",
        ss.mkdel(this, this.$3)
      );
      b.set_isVisible(true);
      this.$7 = b;
    } else {
      var c = new dU.$ctor4(
        a.get_domObject(),
        ".js-share-by-facebook",
        ss.mkdel(this, this.$1)
      );
      c.set_isVisible(true);
      this.$5 = c;
      var d = new dU.$ctor4(
        a.get_domObject(),
        ".js-share-by-pinterest",
        ss.mkdel(this, this.$2)
      );
      d.set_isVisible(true);
      this.$6 = d;
    }
    var e = new dU.$ctor3(".js-share-by-embed", ss.mkdel(this, this.$0), true);
    e.set_isVisible(true);
    this.$4 = e;
  };
  d1.__typeName = "VEL.Skynet.Global.Controls.SocialSharingBar";
  d1.$2 = function (a, b) {
    if (!ss.staticEquals(b, null)) {
      b(d1.$1(a), d1.$0(a));
    }
  };
  d1.$1 = function (a) {
    return a.getData("share-url", null, false);
  };
  d1.$0 = function (a) {
    return a.getData("share-title", null, false);
  };
  global.VEL.Skynet.Global.Controls.SocialSharingBar = d1;
  var d3 = function (a, b, c) {
    this.$2 = null;
    ss.makeGenericType(dZ, [String]).call(this, a);
    if (ss.isValue(b)) {
      this.set_value(b);
    }
    if (!ss.staticEquals(c, null)) {
      this.onChange(c);
    }
  };
  d3.__typeName = "VEL.Skynet.Global.Controls.StringSelect";
  global.VEL.Skynet.Global.Controls.StringSelect = d3;
  var d5 = function () {};
  d5.__typeName = "VEL.Skynet.Global.Controls.ValidateEnum";
  global.VEL.Skynet.Global.Controls.ValidateEnum = d5;
  var d7 = function (a) {
    d9.call(this, a);
  };
  d7.__typeName = "VEL.Skynet.Global.Controls.Breadcrumbs.BackBreadcrumb";
  d7.create = function (a, b) {
    var c = d6
      .createFromTemplate(d7)
      .call(null, b, "back_breadcrumb_template", [], false);
    var d = new dU.$ctor3(".js-breadcrumb-back", ss.mkdel(a, a.onBack), true);
    c.set_info(new VEL.Skynet.Global.Json.FolderInfo());
    return c;
  };
  global.VEL.Skynet.Global.Controls.Breadcrumbs.BackBreadcrumb = d7;
  var d9 = function (a) {
    this.$3$1 = null;
    dU.$ctor2.call(this, a);
  };
  d9.__typeName = "VEL.Skynet.Global.Controls.Breadcrumbs.Breadcrumb";
  global.VEL.Skynet.Global.Controls.Breadcrumbs.Breadcrumb = d9;
  var eb = function (a, b) {
    this.$6 = null;
    this.$3 = null;
    this.$4 = null;
    this.$5 = null;
    dV.$ctor1.call(this, ".js-breadcrumb-trail");
    this.$6 = a;
    this.$3 = this.getData("home-path", null, false);
    this.$4 = b;
  };
  eb.__typeName = "VEL.Skynet.Global.Controls.Breadcrumbs.BreadcrumbTrail";
  global.VEL.Skynet.Global.Controls.Breadcrumbs.BreadcrumbTrail = eb;
  var ed = function (a) {
    d9.call(this, a);
  };
  ed.__typeName = "VEL.Skynet.Global.Controls.Breadcrumbs.FolderBreadcrumb";
  ed.create$1 = function (a, b, c, d) {
    var e = new VEL.Skynet.Global.Json.FolderInfo();
    e.FolderId = 0;
    e.Path = c;
    e.Name = d;
    var f = e;
    return ed.create(a, b, f);
  };
  ed.create = function (a, b, c) {
    var d = d6
      .createFromTemplate(ed)
      .call(
        null,
        b,
        "folder_breadcrumb_template",
        [
          c.Path,
          c.Name,
          VEL.Skynet.Global.Server.AssetHelper.getFolderImage(c.Color),
        ],
        false
      );
    d.set_info(c);
    d.onClick(
      function () {
        a.onOpenFolder(d.get_info(), false);
      },
      false,
      true
    );
    d.setupDragAndDrop(a.getItemsDragContainer());
    return d;
  };
  global.VEL.Skynet.Global.Controls.Breadcrumbs.FolderBreadcrumb = ed;
  var ef = function (a) {
    d9.call(this, a);
  };
  ef.__typeName = "VEL.Skynet.Global.Controls.Breadcrumbs.HomeBreadcrumb";
  ef.create = function (a, b, c, d) {
    var e = d6
      .createFromTemplate(ef)
      .call(null, b, "home_breadcrumb_template", [c, d], false);
    var f = new VEL.Skynet.Global.Json.FolderInfo();
    f.FolderId = 0;
    f.Path = c;
    f.Name = d;
    e.set_info(f);
    var g = null;
    if (ServerModel.userId > 0) {
      g = function () {
        a.onOpenFolder(e.get_info(), false);
      };
    }
    e.onClick(g, false, true);
    e.setupDragAndDrop(a.getItemsDragContainer());
    return e;
  };
  global.VEL.Skynet.Global.Controls.Breadcrumbs.HomeBreadcrumb = ef;
  var eh = function (a) {
    d9.call(this, a);
  };
  eh.__typeName = "VEL.Skynet.Global.Controls.Breadcrumbs.RecycleBreadcrumb";
  eh.create = function (a) {
    var b = d6
      .createFromTemplate(eh)
      .call(null, a, "recycle_breadcrumb_template", null, false);
    return b;
  };
  global.VEL.Skynet.Global.Controls.Breadcrumbs.RecycleBreadcrumb = eh;
  var ej = function (a) {
    d9.call(this, a);
  };
  ej.__typeName = "VEL.Skynet.Global.Controls.Breadcrumbs.SearchBreadcrumb";
  ej.create = function (a) {
    var b = d6
      .createFromTemplate(ej)
      .call(null, a, "search_breadcrumb_template", null, false);
    return b;
  };
  global.VEL.Skynet.Global.Controls.Breadcrumbs.SearchBreadcrumb = ej;
  var el = function () {};
  el.__typeName = "VEL.Skynet.Global.Extensions.jQueryExtensions";
  el.getIntPoint = function (a) {
    if (ss.isNullOrUndefined(a)) {
      return null;
    }
    var b = a.originalEvent;
    if (ss.isValue(b)) {
      return new VEL.Skynet.Global.Extensions.IntPoint.$ctor1(
        b.pageX,
        b.pageY
      );
    }
    return new VEL.Skynet.Global.Extensions.IntPoint.$ctor1(a.pageX, a.pageY);
  };
  global.VEL.Skynet.Global.Extensions.jQueryExtensions = el;
  var en = function () {};
  en.__typeName = "VEL.Skynet.Global.Helpers.AcceptType";
  global.VEL.Skynet.Global.Helpers.AcceptType = en;
  var ep = function () {};
  ep.__typeName = "VEL.Skynet.Global.Helpers.ActivityHelper";
  ep.onThumbnailError = function (a) {
    a.onerror = null;
    if (!ep.$0) {
      var b = a.src.lastIndexOf(String.fromCharCode(47));
      if (b !== -1) {
        var c = a.src.substr(b + 1);
        if (c.length >= 32) {
          $.get("/resourceajax/reportscreenshot?guid=" + c);
          ep.$0 = true;
        }
      }
    }
    a.src = Assets.cdn["/content/images/no_screenshot.png".toLowerCase()];
  };
  ep.isTitleShareable = function (a) {
    if (ss.isNullOrEmptyString(a)) {
      return false;
    }
    a = a.toLowerCase().trim();
    var b = Strings.enterContent_Generic_Untitled.trim().toLowerCase();
    var c = Strings.enterContent_Generic_CopyOf.trim().toLowerCase();
    if (ss.endsWithString(c, "{0}")) {
      c = ss.replaceAllString(c, "{0}", "").trim();
      if (ss.startsWithString(a, b) || ss.startsWithString(a, c)) {
        return false;
      }
    } else {
      if (ss.startsWithString(c, "{0}")) {
        c = ss.replaceAllString(c, "{0}", "").trim();
        if (ss.startsWithString(a, b) || ss.endsWithString(a, c)) {
          return false;
        }
      } else {
      }
    }
    return true;
  };
  ep.getShortUrl = function (a, b) {
    var c = window.location.href.split(String.fromCharCode(47))[3];
    var d = c.length === 2 || (c.length === 5 && c.charCodeAt(2) === 45);
    if (d) {
      c = "/" + c;
    } else {
      c = "";
    }
    var e = window.location.host + c + "/resource/" + a;
    return b ? "https://" + e : e;
  };
  ep.getActivityUrl = function (a) {
    return "/resource/" + a;
  };
  ep.getActivityEditContentUrl = function (a, b, c) {
    var d = "/create/editcontent?guid=" + a;
    if (b !== 0) {
      d += "&templateId=" + b;
    }
    if (c !== 0) {
      d += "&folderId=" + c;
    }
    return d;
  };
  ep.initializeAuthorLink = function () {
    var a = $(".js-community-author");
    if (
      VEL.Skynet.Global.Server.Switches.getBoolean(
        VEL.Skynet.Global.Server.Switches.static$1,
        VEL.Skynet.Global.Server.SwitchKeys.hideAuthorLink
      )
    ) {
      a.remove();
      return;
    }
    a.removeClass("hidden");
    var b = $(".js-author-link-profile-image");
    if (
      !VEL.Skynet.Global.Server.Switches.getBoolean(
        VEL.Skynet.Global.Server.Switches.static$1,
        VEL.Skynet.Global.Server.SwitchKeys.authorLinkProfileImage
      )
    ) {
      b.remove();
      return;
    }
    b.removeClass("hidden");
  };
  global.VEL.Skynet.Global.Helpers.ActivityHelper = ep;
  var ae = function () {};
  ae.__typeName = "VEL.Skynet.Global.Helpers.AIContentGenerationHelper";
  ae.sendXmlHttpRequest = function (a, b, c, d, e) {
    var f = new XMLHttpRequest();
    f.onreadystatechange = function (g) {
      if (f.readyState !== 4) {
        return;
      }
      if (f.status === 400) {
        var h = ss.cast(
          JSON.parse(f.responseText),
          VEL.Skynet.Global.Json.AIContentGeneration
            .GenerateContentFailedResponse
        );
        d(h.Error);
        return;
      }
      if (f.status === 0) {
        d(e);
        return;
      }
      if (f.status !== 200) {
        d(null);
        return;
      }
      try {
        var i = ae.$0(f.responseText);
        c(i);
      } catch (j) {
        var k = ss.Exception.wrap(j);
        ac.error("AI content generation", k.get_message(), k.get_stack());
        d(null);
      }
    };
    f.open("POST", a, true);
    f.send(b);
  };
  ae.$0 = function (a) {
    var b = ["", "]", "}", "]}", "}]}", "]}]}"];
    for (var c = 0; c < b.length; c++) {
      var d = b[c];
      try {
        return JSON.parse(a + d);
      } catch (e) {}
    }
    return JSON.parse(a);
  };
  ae.generateSimilarItem = function (a, b, c, d, e, f) {
    var g = new FormData();
    g.append("prompt", a);
    var h =
      "/contentgenerationajax/aiassist?isGroupItem=" +
      f +
      "&templateId=" +
      b +
      "&guid=" +
      a5.app.get_document().get_guid();
    ae.sendXmlHttpRequest(
      h,
      g,
      c,
      function (i) {
        ae.onGenerateSimilarFailed(i, d, e);
      },
      Strings.aiContent_Modal_GenerationInterrupted
    );
  };
  ae.onGenerateSimilarFailed = function (a, b, c) {
    b.removeClass("js-in-progress in-progress");
    c.removeClass("hidden");
    $.post(
      "/contentgenerationajax/assistfailedevent?templateId=" +
        a5.app.get_document().get_template().get_id() +
        "&guid=" +
        a5.app.get_document().get_guid() +
        "&message=" +
        a
    );
  };
  ae.showFeedbackBanner = function (a, b) {
    if (
      !VEL.Skynet.Global.Server.Switches.getBoolean(
        VEL.Skynet.Global.Server.Switches.static$1,
        VEL.Skynet.Global.Server.SwitchKeys.aiAssistFeedbackBanner
      ) &&
      ss.coalesce(b, 0) > 0
    ) {
      return;
    }
    if (
      !VEL.Skynet.Global.Server.Switches.getBoolean(
        VEL.Skynet.Global.Server.Switches.static$1,
        VEL.Skynet.Global.Server.SwitchKeys.aiGenFeedbackBanner
      ) &&
      ss.coalesce(b, 0) === 0
    ) {
      return;
    }
    var c = new d6.$ctor1(".js-ai-feedback");
    c.removeClass("aiassist-feedback");
    c.removeClass("genai-feedback");
    c.addClass(ss.coalesce(b, 0) > 0 ? "aiassist-feedback" : "genai-feedback");
    c.set_isVisible(true);
    new dU.$ctor3(
      ".js-ai-feedback button",
      function () {
        new aU(a, ".js-ai-feedback", b).open();
      },
      true
    );
  };
  ae.isBannerVisible = function () {
    return new d6.$ctor1(".js-ai-feedback").get_isVisible();
  };
  global.VEL.Skynet.Global.Helpers.AIContentGenerationHelper = ae;
  var ag = function () {};
  ag.__typeName = "VEL.Skynet.Global.Helpers.AjaxHelper";
  ag.get_inProgress = function () {
    return ag.$1$1;
  };
  ag.set_inProgress = function (a) {
    ag.$1$1 = a;
  };
  ag.displayProgress = function () {
    ag.set_inProgress(true);
    dF.showProgress();
  };
  ag.isTrue = function (a) {
    return ss.isValue(a) && a.toString().toLowerCase() === "true";
  };
  ag.isFail = function (a) {
    if (ss.isNullOrUndefined(a)) {
      return true;
    }
    return a.toString().toLowerCase() === "false";
  };
  ag.success = function (a, b) {
    if (ss.isValue(a)) {
      dF.displayMessage(a, true, 0);
    } else {
      dF.hideMessage();
    }
    dF.hideProgress();
    if (!new d6.$ctor1(".js-policy").get_exists() && !b) {
      dc.closeActiveModal();
    }
    ag.set_inProgress(false);
  };
  ag.error = function (a) {
    dF.displayErrorMessage(
      ss.coalesce(a, Strings.myActivities_DefaultError),
      true,
      0
    );
    dF.hideProgress();
    dc.closeActiveModal();
    ag.set_inProgress(false);
  };
  ag.networkErrorAndReload = function (a, b, c) {
    dF.displayNetworkErrorMessage();
    window.setTimeout(function () {
      window.location.reload();
    }, 2000);
  };
  ag.isClientErrorStatusCode = function (a) {
    return a >= 400 && a < 500;
  };
  global.VEL.Skynet.Global.Helpers.AjaxHelper = ag;
  var ai = function () {};
  ai.__typeName = "VEL.Skynet.Global.Helpers.AppHelper";
  ai.load = function (a) {
    if (ss.isNullOrEmptyString(ServerModel.appBundleUrl)) {
      throw new ss.Exception(
        "Could not load app due to null or empty ServerModel.AppBundleUrl"
      );
    } else {
      $.ajaxSetup({ cache: true });
      var b = ServerModel.appBundleUrl.split(String.fromCharCode(59));
      ai.$0(0, b, a);
    }
  };
  ai.$0 = function (a, b, c) {
    if (a === b.length) {
      $.ajaxSetup({ cache: false });
      c();
    }
    $.getScript(b[a], function (d) {
      ai.$0(a + 1, b, c);
    });
  };
  global.VEL.Skynet.Global.Helpers.AppHelper = ai;
  var ak = function () {};
  ak.__typeName = "VEL.Skynet.Global.Helpers.AssignmentHelper";
  ak.setAssignment = function (a, b) {
    var c =
      "/resultajax/setassignment?activityId=" +
      a.get_activityId() +
      "&templateId=" +
      a.get_templateId() +
      "&activityGuid=" +
      a.get_activityGuid() +
      "&register=" +
      b.Registration +
      "&gameover=" +
      b.GameOver +
      "&deadline=" +
      encodeURIComponent(b.EndTimeString) +
      "&title=" +
      encodeURIComponent(b.Title) +
      "&pageId=" +
      ServerModel.pageId;
    return $.post(c);
  };
  ak.setAssignmentAsync = function (a, b) {
    return ss.Task.fromPromise(ak.setAssignment(a, b), 0);
  };
  ak.setGoogleClassroomAssignment = function (a, b, c) {
    var d =
      "/resultajax/setgoogleclassroomassignment?assignmentid=" +
      a +
      "&gccourseid=" +
      encodeURIComponent(b) +
      "&gccourseworkid=" +
      encodeURIComponent(c);
    return $.post(d);
  };
  ak.setGoogleClassroomAssignmentAsync = function (a, b, c) {
    return ss.Task.fromPromise(ak.setGoogleClassroomAssignment(a, b, c));
  };
  global.VEL.Skynet.Global.Helpers.AssignmentHelper = ak;
  var am = function () {};
  am.__typeName = "VEL.Skynet.Global.Helpers.AutoSaveHelper";
  am.initialize = function () {
    if (!am.$1()) {
      return;
    }
    var a = new d6.$ctor1(".js-auto-save-wrapper");
    var b = new dU.$ctor1(".js-auto-save-link");
    b.set_href(
      "/create/entercontent?guid=" +
        window.localStorage["autosave.guid"] +
        "&templateId=" +
        window.localStorage["autosave.templateid"] +
        "&autosave=true"
    );
    var c = new d6.$ctor1(".js-auto-save-title");
    c.set_text(am.$0());
    var d = new dU.$ctor3(
      ".js-auto-save-close",
      function () {
        am.clear();
        a.remove();
      },
      true
    );
    window.setTimeout(function () {
      a.slideDown(400, null);
    }, 1000);
  };
  am.clear = function () {
    window.localStorage.removeItem("autosave.guid");
  };
  am.$1 = function () {
    var a = window.localStorage["autosave.user"];
    if (
      !ss.referenceEquals(a, ServerModel.userId.toString()) ||
      ServerHelper.get_isGuest()
    ) {
      return false;
    }
    var b = window.localStorage["autosave.time"];
    if (ss.isValue(b)) {
      var c = parseInt(b);
      var d = VEL.Skynet.Global.Extensions.DateTimeExtensions.toUnix(
        new Date()
      );
      if (d - c > 604800000) {
        am.clear();
      }
    }
    var e = window.localStorage["autosave.guid"];
    return (
      ss.isValue(e) &&
      !ss.referenceEquals(ServerModel.activityGuid, e) &&
      !(window.location.href.indexOf("guid=" + e) !== -1)
    );
  };
  am.$0 = function () {
    var a = window.localStorage["autosave.title"];
    if (ss.isNullOrEmptyString(a) || a === "null") {
      return Strings.enterContent_Generic_Untitled;
    } else {
      return a;
    }
  };
  global.VEL.Skynet.Global.Helpers.AutoSaveHelper = am;
  var ao = function () {};
  ao.__typeName = "VEL.Skynet.Global.Helpers.BannerHelper";
  ao.initialize = function () {
    if (!ServerHelper.get_isLoggedIn()) {
      az.remove("licensetobeexpired");
      az.remove("newsubscriberfeedback");
      aN.removeItem("BannersToShow");
      $(".js-banner-wrapper").remove();
      return;
    }
    var a = aN
      .getList(VEL.Skynet.Global.Json.BannerJson)
      .call(null, "BannersToShow");
    ao.$5(a, "licensetobeexpired");
    ao.$5(a, "newsubscriberfeedback");
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      ao.$6(c);
    }
    aN.removeItem("BannersToShow");
  };
  ao.$6 = function (a) {
    var b = new d6.$ctor1("#banners_container");
    var c = new d6.$ctor1("#banner_template");
    var d = new d6.$ctor1(c.get_html());
    var e = d.find(d6).call(d, ".js-banner-content");
    var f = d.find(d6).call(d, ".js-banner-button");
    var g = d.find(d6).call(d, ".js-banner-dismiss");
    var h = d.find(d6).call(d, ".js-banner-prefix-icon");
    e.set_html(a.Msg);
    if (!ss.isNullOrEmptyString(a.BackgroundColour)) {
      d.CSS$1("background", a.BackgroundColour);
    }
    if (!ss.isNullOrEmptyString(a.PrefixIcon)) {
      h.addClass(a.PrefixIcon);
      h.removeClass("hidden");
      d.removeClass("no-prefix-icon");
    }
    if (ss.isNullOrEmptyString(a.ButtonText)) {
      f.remove();
    } else {
      f.set_html(a.ButtonText + f.get_html());
      f.set_isVisible(true);
      if (!ss.isNullOrEmptyString(a.Url)) {
        f.addClass("clickable");
        f.onClick(
          function () {
            ao.$2(d, a.BannerId);
            if (a.OpenInAnotherTab) {
              window.open(a.Url, "_blank");
            } else {
              window.location.href = a.Url;
            }
          },
          false,
          true
        );
      }
    }
    if (!ss.isNullOrEmptyString(a.TextColour)) {
      $(".js-banner-colour", d.get_domObject()).css("color", a.TextColour);
    }
    d.set_isVisible(true);
    g.onClick(
      function () {
        ao.$1(d, a.BannerId);
      },
      false,
      true
    );
    b.append(d);
  };
  ao.setup = function (a) {
    if (ServerModel.isEmbed) {
      return;
    }
    var b = aN
      .getList(VEL.Skynet.Global.Json.BannerJson)
      .call(null, "BannersToShow");
    ao.$0(a, b);
    aN.storeList(VEL.Skynet.Global.Json.BannerJson).call(
      null,
      "BannersToShow",
      b
    );
  };
  ao.$0 = function (a, b) {
    if (ss.isNullOrEmptyString(a.Msg) || ss.isNullOrEmptyString(a.BannerId)) {
      return;
    }
    if (
      Enumerable.from(b).any(function (f) {
        return ss.referenceEquals(f.BannerId, a.BannerId);
      })
    ) {
      return;
    }
    var c = {};
    if (!ao.$7(a.BannerId, c)) {
      b.push(a);
      return;
    }
    if (
      (a.EngagementRecurrence === 1 && c.$.IsEngaged) ||
      (a.DismissalRecurrence === 1 && !c.$.IsEngaged)
    ) {
      return;
    }
    if (
      (a.EngagementRecurrence === 0 &&
        c.$.IsEngaged &&
        ss.referenceEquals(c.$.DismissedDate, ao.$3())) ||
      (a.DismissalRecurrence === 0 &&
        !c.$.IsEngaged &&
        ss.referenceEquals(c.$.DismissedDate, ao.$3()))
    ) {
      return;
    }
    var d = {};
    var e = {};
    if (
      (a.EngagementRecurrence === 2 &&
        c.$.IsEngaged &&
        ao.$8(c.$.DismissedDate, d) &&
        ao.$8(a.ReminderDate, e) &&
        d.$ >= e.$) ||
      (a.DismissalRecurrence === 2 &&
        !c.$.IsEngaged &&
        ao.$8(c.$.DismissedDate, d) &&
        ao.$8(a.ReminderDate, e) &&
        d.$ >= e.$)
    ) {
      return;
    }
    b.push(a);
  };
  ao.$5 = function (a, b) {
    var c = az.get(b);
    if (!ss.isNullOrEmptyString(c)) {
      try {
        ao.$0(JSON.parse(c), a);
      } catch (d) {
        var e = ss.Exception.wrap(d);
      }
    }
  };
  ao.$7 = function (a, b) {
    b.$ = null;
    try {
      var c = aN
        .getList(VEL.Skynet.Global.Json.DismissedBannerJson)
        .call(null, "DismissedBanners");
      var d = Enumerable.from(c).firstOrDefault(function (f) {
        return ss.referenceEquals(f.BannerId, a);
      }, ss.getDefaultValue(VEL.Skynet.Global.Json.DismissedBannerJson));
      if (ss.isNullOrUndefined(d)) {
        return false;
      }
      b.$ = d;
      return true;
    } catch (e) {
      return false;
    }
  };
  ao.$1 = function (a, b) {
    ao.$4(a, b, false);
  };
  ao.$2 = function (a, b) {
    ao.$4(a, b, true);
  };
  ao.$4 = function (a, b, c) {
    a.remove();
    var d;
    try {
      d = aN
        .getList(VEL.Skynet.Global.Json.DismissedBannerJson)
        .call(null, "DismissedBanners");
    } catch (g) {
      d = [];
    }
    var e = Enumerable.from(d).firstOrDefault(function (h) {
      return ss.referenceEquals(h.BannerId, b);
    }, ss.getDefaultValue(VEL.Skynet.Global.Json.DismissedBannerJson));
    if (ss.isValue(e)) {
      ss.remove(d, e);
    }
    var f = new VEL.Skynet.Global.Json.DismissedBannerJson();
    f.BannerId = b;
    f.DismissedDate = ao.$3();
    f.IsEngaged = c;
    d.push(f);
    aN.storeList(VEL.Skynet.Global.Json.DismissedBannerJson).call(
      null,
      "DismissedBanners",
      d
    );
  };
  ao.$3 = function () {
    return ss.formatDate(new Date(), "yyyyMMdd");
  };
  ao.$8 = function (a, b) {
    b.$ = new Date(0);
    var c = ss.parseExactDate(a, "yyyyMMdd", ss.CultureInfo.invariantCulture);
    if (!ss.isValue(c)) {
      return false;
    }
    var d = ss.unbox(c);
    b.$ = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    return true;
  };
  global.VEL.Skynet.Global.Helpers.BannerHelper = ao;
  var aq = function () {};
  aq.__typeName = "VEL.Skynet.Global.Helpers.Base64Helper";
  aq.dataViewToBase64 = function (a) {
    var b = "";
    var c = a.byteLength;
    for (var d = 0; d < c; d++) {
      b += String.fromCharCode(a.getUint8(d));
    }
    return window.btoa(b);
  };
  aq.base64ToDataView = function (a) {
    var b = window.atob(a);
    var c = b.length;
    var d = new DataView(new ArrayBuffer(c));
    for (var e = 0; e < c; e++) {
      d.setUint8(e, b.charCodeAt(e));
    }
    return d;
  };
  global.VEL.Skynet.Global.Helpers.Base64Helper = aq;
  var at = function () {};
  at.__typeName = "VEL.Skynet.Global.Helpers.ClipboardHelper";
  at.copyToClipboard = function (a, b) {
    var c = document.createElement("textarea");
    c.textContent = a;
    c.style.top = "0";
    c.style.opacity = "0";
    c.style.left = "0";
    c.style.position = "fixed";
    b.append(c);
    c.focus();
    c.select();
    document.execCommand("copy");
    c.remove();
  };
  at.getClipboardImage = function (a, b, c) {
    try {
      var d = ((a.originalEvent || a).clipboardData || window.clipboardData)
        .items;
      for (var e = 0; e < d.length; e++) {
        var f = d[e];
        if (ss.startsWithString(f.type, "image")) {
          var g = { $: f.getAsFile() };
          if (ss.isValue(g.$)) {
            var h = { $: new FileReader() };
            h.$.onload = ss.mkdel({ reader: h, blob: g }, function (j) {
              var k = this.reader.$.result.toString();
              if (ss.startsWithString(k, "data:") && k.length < 150000) {
                var l = k.indexOf(",");
                if (l !== -1) {
                  b(k.substring(l + 1));
                  return;
                }
              }
              a6.create(
                this.reader.$.result.toString(),
                null,
                ss.mkdel({ blob: this.blob }, function (m) {
                  var n = ss.Int32.div(this.blob.$.size, 1024);
                  var o = m.convertToBase64(n, c);
                  b(o);
                }),
                null
              );
            });
            h.$.readAsDataURL(g.$);
          }
        }
      }
    } catch (i) {}
  };
  global.VEL.Skynet.Global.Helpers.ClipboardHelper = at;
  var av = function () {};
  av.__typeName = "VEL.Skynet.Global.Helpers.ConsentHelper";
  av.checkIfConsented = function (a, b, c) {
    if (av.$4(av.$2(a), a, b)) {
      return;
    } else {
      try {
        var d = av.$3(a);
        if (av.$4(d, a, b)) {
          av.accept(d.ConsentType, d.Version, d.Timestamp);
          return;
        }
      } catch (e) {
        ac.event(
          "corrupt_unsubmitted_consent",
          window.localStorage.getItem("unsubmitted_user_consents")
        );
        av.$0(a);
      }
    }
    $.get("/consentajax/userconsent/" + a)
      .success(function (f) {
        if (f.Found) {
          av.$6(f.Result);
          if (!av.$4(f.Result, a, b)) {
            c();
          }
        } else {
          c();
        }
      })
      .fail(c);
  };
  av.accept = function (a, b, c) {
    var d = new Date().toISOString();
    if (ss.isNullOrUndefined(c)) {
      var e = new VEL.Skynet.Global.Json.UnsubmittedUserConsentJson();
      e.ConsentType = a;
      e.Version = b;
      e.Timestamp = d;
      av.$7(e);
    }
    var f =
      "/consentajax/userconsent/?consentType=" +
      a.toString() +
      "&version=" +
      b +
      (ss.isNullOrUndefined(c)
        ? ""
        : "&elapsed=" +
          (new Date(Date.parse(d)).getTime() -
            new Date(Date.parse(c)).getTime()));
    $.post(f).success(function (g) {
      av.$6(g);
      av.$0(g.ConsentType);
    });
  };
  av.hasDismissedPolicyUpdateNotification = function () {
    if (ServerModel.isEmbed) {
      return true;
    }
    try {
      var a = aN
        .get(VEL.Skynet.Global.Json.PolicyNotificationDismissalJson)
        .call(null, "policy_update_dismissed");
      return ss.isValue(a) && a.Version === ServerModel.policyVersion;
    } catch (b) {
      return false;
    }
  };
  av.dismissPolicyUpdateNotification = function () {
    if (ServerModel.isEmbed) {
      return;
    }
    var a = new VEL.Skynet.Global.Json.PolicyNotificationDismissalJson();
    a.Version = ServerModel.policyVersion;
    a.Timestamp = new Date().toISOString();
    var b = a;
    aN.store(VEL.Skynet.Global.Json.PolicyNotificationDismissalJson).call(
      null,
      "policy_update_dismissed",
      b
    );
  };
  av.$4 = function (a, b, c) {
    if (ss.isNullOrUndefined(a)) {
      return false;
    }
    try {
      return a.ConsentType === b && a.Version >= c;
    } catch (d) {
      return false;
    }
  };
  av.$1 = function (a) {
    return function (b, c) {
      if (ServerModel.isEmbed) {
        return null;
      }
      var d = aN.getList(a).call(null, c);
      return Enumerable.from(d).firstOrDefault(function (e) {
        return e.ConsentType === b;
      }, ss.getDefaultValue(a));
    };
  };
  av.$2 = function (a) {
    return av
      .$1(VEL.Skynet.Global.Json.UserConsentJson)
      .call(null, a, "user_consents");
  };
  av.$3 = function (a) {
    return av
      .$1(VEL.Skynet.Global.Json.UnsubmittedUserConsentJson)
      .call(null, a, "unsubmitted_user_consents");
  };
  av.$5 = function (a) {
    return function (b, c) {
      if (ServerModel.isEmbed) {
        return;
      }
      var d = aN.getList(a).call(null, c);
      var e = Enumerable.from(d).indexOf(function (f) {
        return f.ConsentType === b.ConsentType;
      });
      if (e === -1) {
        d.push(b);
      } else {
        d[e] = b;
      }
      aN.storeList(a).call(null, c, d);
    };
  };
  av.$7 = function (a) {
    av.$5(VEL.Skynet.Global.Json.UnsubmittedUserConsentJson).call(
      null,
      a,
      "unsubmitted_user_consents"
    );
  };
  av.$6 = function (a) {
    av.$5(VEL.Skynet.Global.Json.UserConsentJson).call(
      null,
      a,
      "user_consents"
    );
  };
  av.$0 = function (a) {
    if (ServerModel.isEmbed) {
      return;
    }
    var b = aN
      .getList(VEL.Skynet.Global.Json.UnsubmittedUserConsentJson)
      .call(null, "unsubmitted_user_consents");
    var c = Enumerable.from(b).indexOf(function (d) {
      return d.ConsentType === a;
    });
    if (c >= 0) {
      ss.removeAt(b, c);
    }
    aN.storeList(VEL.Skynet.Global.Json.UnsubmittedUserConsentJson).call(
      null,
      "unsubmitted_user_consents",
      b
    );
  };
  av.removeAllLocalConsents = function () {
    if (ServerModel.isEmbed) {
      return;
    }
    aN.removeItem("user_consents");
    aN.removeItem("unsubmitted_user_consents");
  };
  av.cleanUpPolicyUpdateNotificationDismissal = function () {
    if (ServerModel.isEmbed) {
      return;
    }
    aN.removeItem("policy_update_dismissed");
  };
  global.VEL.Skynet.Global.Helpers.ConsentHelper = av;
  var ax = function () {};
  ax.__typeName = "VEL.Skynet.Global.Helpers.CookieConsentHelper";
  ax.run = function (a, b, c) {
    var d = 0,
      e = new ss.TaskCompletionSource(),
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w;
    var x = function () {
      try {
        $sm1: for (;;) {
          switch (d) {
            case 0:
              d = -1;
              if (!ax.cookieConsentIsEnabled) {
                f = ax.$0();
                d = 2;
                f.continueWith(x);
                return;
              }
              d = 1;
              continue $sm1;
            case 2:
              d = -1;
              f.getAwaitedResult();
              e.setResult(null);
              return;
            case 1:
              d = -1;
              g = new al();
              g.revision = 0;
              h = new au();
              h.expiresAfterDays = 364;
              g.cookie = h;
              g.categories = new an();
              i = g.categories;
              j = new ap();
              j.readOnly = true;
              i.essential = j;
              g.categories.functional = new ap();
              g.categories.functional.services = new aE();
              g.categories.analytics = new ap();
              g.categories.marketing = new ap();
              k = g.categories.functional.services;
              l = new aC();
              l.label = Strings.cookieConsent_Services_GoogleClassroom;
              k.googleClassroom = l;
              m = g.categories.functional.services;
              n = new aC();
              n.label = Strings.cookieConsent_Services_YouTube;
              m.youTube = n;
              g.onFirstConsent = a;
              g.onChange = b;
              g.autoShow = !c;
              g.language = new aw();
              g.language.default = "currentLanguage";
              g.language.rtl = aB.isRTL() ? ["currentLanguage"] : [];
              g.language.translations = new aI();
              g.language.translations.currentLanguage = new aG();
              g.language.translations.currentLanguage.consentModal = new ar();
              g.language.translations.currentLanguage.consentModal.title =
                Strings.cookieConsent_ConsentModal_Title;
              g.language.translations.currentLanguage.consentModal.description =
                ss.formatString(
                  Strings.cookieConsent_ConsentModal_Description2,
                  ax.$1(
                    a1.localize("/cookie-policy"),
                    Strings.policy_CookiePolicy,
                    ""
                  )
                );
              g.language.translations.currentLanguage.consentModal.acceptAllBtn =
                Strings.cookieConsent_ConsentModal_AcceptAllBtn;
              g.language.translations.currentLanguage.consentModal.acceptNecessaryBtn =
                Strings.cookieConsent_ConsentModal_AcceptNecessaryBtn;
              g.language.translations.currentLanguage.consentModal.showPreferencesBtn =
                Strings.cookieConsent_ConsentModal_ShowPreferencesBtn;
              g.language.translations.currentLanguage.consentModal.footer =
                ss.formatString(
                  "{0}{1}",
                  ax.$1(
                    a1.localize("/privacy"),
                    Strings.policy_PrivacyPolicy,
                    ""
                  ),
                  ax.$1(a1.localize("/terms"), Strings.policy_TermsOfUse, "")
                );
              g.language.translations.currentLanguage.preferencesModal =
                new ay();
              g.language.translations.currentLanguage.preferencesModal.title =
                Strings.cookieConsent_PrefModal_Title;
              g.language.translations.currentLanguage.preferencesModal.acceptAllBtn =
                Strings.cookieConsent_PrefModal_AcceptAllBtn;
              g.language.translations.currentLanguage.preferencesModal.acceptNecessaryBtn =
                Strings.cookieConsent_PrefModal_AcceptNecessaryBtn;
              g.language.translations.currentLanguage.preferencesModal.savePreferencesBtn =
                Strings.cookieConsent_PrefModal_SavePreferencesBtn;
              g.language.translations.currentLanguage.preferencesModal.closeIconLabel =
                Strings.cookieConsent_PrefModal_CloseIconLabel;
              o = g.language.translations.currentLanguage.preferencesModal;
              p = new aA();
              p.title = Strings.cookieConsent_PrefModal_TopTitle;
              p.description = Strings.cookieConsent_PrefModal_TopDescription;
              q = new aA();
              q.title = ss.formatString(
                '{0} <span class="pm__badge">{1}</span>',
                Strings.cookieConsent_Essential_Title2,
                Strings.cookieConsent_Essential_AlwaysEnabled
              );
              q.description = Strings.cookieConsent_Essential_Description;
              q.linkedCategory = "essential";
              r = new aA();
              r.title = Strings.cookieConsent_Functional_Title;
              r.description = Strings.cookieConsent_Functional_Description;
              r.linkedCategory = "functional";
              s = new aA();
              s.title = Strings.cookieConsent_Analytics_Title;
              s.description = Strings.cookieConsent_Analytics_Description;
              s.linkedCategory = "analytics";
              t = new aA();
              t.title = Strings.cookieConsent_Marketing_Title;
              t.description = Strings.cookieConsent_Marketing_Description;
              t.linkedCategory = "marketing";
              u = new aA();
              u.title = Strings.cookieConsent_PrefModal_BottomTitle;
              u.description = ss.formatString(
                "{0} {1}",
                Strings.cookieConsent_PrefModal_BottomDescription2,
                ax.$1(
                  a1.localize("/contact"),
                  Strings.cookieConsent_PrefModal_ContactUs,
                  "cc__link"
                )
              );
              o.sections = [p, q, r, s, t, u];
              v = az.get("__debug_cc_hide_from_bots");
              if (ss.isNullOrEmptyString(v)) {
                g.hideFromBots = true;
              } else {
                g.hideFromBots = /^\s*true\s*$/i.test(v);
              }
              w = ss.Task.fromPromise(CookieConsent.run(g));
              d = 3;
              w.continueWith(x);
              return;
            case 3:
              d = -1;
              w.getAwaitedResult();
              d = -1;
              break $sm1;
            default:
              break $sm1;
          }
        }
        e.setResult(null);
      } catch (y) {
        e.setException(ss.Exception.wrap(y));
      }
    };
    x();
    return e.task;
  };
  ax.openPreferencesModal = function () {
    if (!ax.cookieConsentIsEnabled) {
      return;
    }
    CookieConsent.showPreferences();
  };
  ax.getAcceptType = function () {
    if (!ax.cookieConsentIsEnabled) {
      return null;
    }
    var a = CookieConsent.getUserPreferences();
    switch (a.acceptType) {
      case "all":
        return 0;
      case "custom":
        return 1;
      case "necessary":
        return 2;
      default:
        return null;
    }
  };
  ax.areFunctionalCookiesAllowed = function () {
    if (!ax.cookieConsentIsEnabled) {
      return true;
    }
    return ss.contains(
      CookieConsent.getUserPreferences().acceptedCategories,
      "functional"
    );
  };
  ax.areAnalyticsCookiesAllowed = function () {
    if (!ax.cookieConsentIsEnabled) {
      return true;
    }
    return ss.contains(
      CookieConsent.getUserPreferences().acceptedCategories,
      "analytics"
    );
  };
  ax.areMarketingCookiesAllowed = function () {
    if (!ax.cookieConsentIsEnabled) {
      return true;
    }
    return ss.contains(
      CookieConsent.getUserPreferences().acceptedCategories,
      "marketing"
    );
  };
  ax.areFunctionalGoogleClassroomCookiesAllowed = function () {
    if (!ax.cookieConsentIsEnabled) {
      return true;
    }
    return ss.contains(
      CookieConsent.getUserPreferences().acceptedServices.functional,
      "googleClassroom"
    );
  };
  ax.areFunctionalYouTubeCookiesAllowed = function () {
    if (!ax.cookieConsentIsEnabled) {
      return true;
    }
    return ss.contains(
      CookieConsent.getUserPreferences().acceptedServices.functional,
      "youTube"
    );
  };
  ax.$0 = function () {
    var a = 0,
      b = new ss.TaskCompletionSource(),
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k;
    var l = function () {
      try {
        $sm1: for (;;) {
          switch (a) {
            case 0:
              a = -1;
              c = $("script[data-category]").toArray();
              d = 0;
              a = 1;
              continue $sm1;
            case 1:
              a = -1;
              if (!(d < c.length)) {
                a = -1;
                break $sm1;
              }
              e = c[d];
              f = document.createElement("script");
              g = ss.safeCast(
                f,
                ss.isValue(f) &&
                  ss.isInstanceOfType(f, Element) &&
                  f.tagName === "SCRIPT"
              );
              g.text = e.innerHTML;
              h = e.attributes;
              for (i = 0; i < h.length; i++) {
                j = h[i];
                g.setAttribute(j.name, j.value);
              }
              g.removeAttribute("type");
              g.removeAttribute("data-category");
              g.removeAttribute("data-service");
              g.removeAttribute("data-type");
              g.removeAttribute("data-src");
              if (e.hasAttribute("data-type")) {
                g.setAttribute("type", e.getAttribute("data-type"));
              }
              if (e.hasAttribute("data-src")) {
                g.setAttribute("src", e.getAttribute("data-src"));
              }
              k = { $: new ss.TaskCompletionSource() };
              g.onload = ss.mkdel({ onLoadOrErrorTask: k }, function (n) {
                this.onLoadOrErrorTask.$.setResult(null);
              });
              g.onerror = ss.mkdel({ onLoadOrErrorTask: k }, function (n) {
                this.onLoadOrErrorTask.$.setResult(null);
              });
              e.parentNode.replaceChild(g, e);
              a = 3;
              k.$.task.continueWith(l);
              return;
            case 3:
              a = -1;
              k.$.task.getAwaitedResult();
              a = 2;
              continue $sm1;
            case 2:
              a = -1;
              d++;
              a = 1;
              continue $sm1;
            default:
              break $sm1;
          }
        }
        b.setResult(null);
      } catch (m) {
        b.setException(ss.Exception.wrap(m));
      }
    };
    l();
    return b.task;
  };
  ax.$1 = function (a, b, c) {
    return ss.isNullOrEmptyString(c)
      ? ss.formatString('<a href="{0}">{1}</a>', a, b)
      : ss.formatString('<a href="{0}" class="{1}">{2}</a>', a, c, b);
  };
  global.VEL.Skynet.Global.Helpers.CookieConsentHelper = ax;
  var az = function () {};
  az.__typeName = "VEL.Skynet.Global.Helpers.CookieHelper";
  az.get = function (a) {
    try {
      var b = new RegExp("(^| )" + a + "=([^;]+)");
      var c = document.cookie.match(b);
      if (ss.isValue(c) && c.length > 2) {
        return az.$0(c[2]);
      }
    } catch (d) {}
    return null;
  };
  az.$0 = function (a) {
    return decodeURIComponent(a);
  };
  az.set = function (a, b, c) {
    try {
      var d = a + "=" + az.$1(b) + ";path=/";
      if (c > 0) {
        d += ";max-age=" + c;
      }
      document.cookie = d;
    } catch (e) {
      return false;
    }
    return true;
  };
  az.$1 = function (a) {
    return encodeURIComponent(a);
  };
  az.remove = function (a) {
    try {
      document.cookie = a + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
    } catch (b) {}
  };
  global.VEL.Skynet.Global.Helpers.CookieHelper = az;
  var aB = function () {};
  aB.__typeName = "VEL.Skynet.Global.Helpers.DeviceHelper";
  aB.isPhoneSized = function () {
    return window.innerWidth <= 660 || window.innerHeight <= 500;
  };
  aB.isPortraitPhoneSized = function () {
    return window.innerWidth <= 660;
  };
  aB.isInternetExplorer = function () {
    var a = window.navigator.userAgent;
    return (
      a.indexOf("MSIE ") !== -1 ||
      a.indexOf("Trident/") !== -1 ||
      a.indexOf("Edge/") !== -1
    );
  };
  aB.isRTL = function () {
    return document.documentElement.getAttribute("dir") === "rtl";
  };
  aB.isWebpSupported = function (a) {
    if (ss.isValue(aB.$1)) {
      a(ss.unbox(aB.$1));
    } else {
      var b = new Image();
      b.onload = function (c) {
        aB.$1 = b.width > 0 && b.height > 0;
        a(ss.unbox(aB.$1));
      };
      b.onerror = function (c) {
        aB.$1 = false;
        a(false);
      };
      b.src =
        "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==";
    }
  };
  aB.isOggSupported = function (a) {
    if (ss.isValue(aB.$0)) {
      a(ss.unbox(aB.$0));
    } else {
      var b = new Audio();
      var c = b.canPlayType("audio/ogg; codecs=vorbis");
      aB.$0 = c !== "";
      a(ss.unbox(aB.$0));
    }
  };
  global.VEL.Skynet.Global.Helpers.DeviceHelper = aB;
  var aD = function () {};
  aD.__typeName = "VEL.Skynet.Global.Helpers.ElementHelper";
  aD.onProfilePicError = function (a) {
    a.onerror = null;
    a.src = Assets.cdn["/content/images/large_profile.png".toLowerCase()];
  };
  global.VEL.Skynet.Global.Helpers.ElementHelper = aD;
  var aF = function () {};
  aF.__typeName = "VEL.Skynet.Global.Helpers.EventsHelper";
  aF.addShareEvent$1 = function (a, b, c, d, e) {
    aF.$0(
      a,
      "location:" +
        b +
        ",templateId:" +
        c +
        ",activityId:" +
        d +
        ",homeworkId:" +
        e,
      false
    );
  };
  aF.addShareEvent = function (a, b, c) {
    aF.$0(a, "location:" + b + ",tags:" + c, false);
  };
  aF.addFaqEvent = function (a, b) {
    aF.$0(120, "question:" + a + ",position:" + b, false);
  };
  aF.addPrinterEvent = function (a, b, c, d, e) {
    var f = ss.isValue(b) ? "printerId:" + b + "," : "";
    f += "defaultPrinterId:" + c + ",templateId:" + d + ",activityId:" + e;
    aF.$0(a, f, false);
  };
  aF.addSoundEvent = function (a, b, c, d) {
    aF.$0(a, "value:" + b + ",themeId:" + c + ",templateId:" + d, false);
  };
  aF.addEditorImageEvent = function (a, b) {
    aF.$0(
      a,
      ss.isNullOrUndefined(b) ? null : "isUpload:" + (ss.unbox(b) ? 1 : 0),
      true
    );
  };
  aF.addEditorSessionStartsEvent = function (a, b, c) {
    aF.$0(
      1004,
      "sessionId:" + a + ",activityId:" + b + ",templateId:" + c,
      true
    );
  };
  aF.addEditorSessionEndsEvent = function (a) {
    aF.$0(1005, "sessionId:" + a, true);
  };
  aF.addEditorValidationFailedEvents = function (a, b, c, d) {
    var e = Enumerable.from(d)
      .groupBy(function (g) {
        return g.get_type();
      })
      .getEnumerator();
    try {
      while (e.moveNext()) {
        var f = e.current();
        aF.$0(
          1006,
          "sessionId:" +
            a +
            ",attempt:" +
            b +
            ",isBlocking:" +
            c +
            ",type:" +
            f.key() +
            ",count:" +
            f.count(),
          true
        );
      }
    } finally {
      e.dispose();
    }
  };
  aF.$0 = function (a, b, c) {
    try {
      $.ajax({
        type: "POST",
        url: "/eventsajax/addevent?type=" + a + "&sampled=" + c,
        data: b,
      });
    } catch (d) {}
  };
  global.VEL.Skynet.Global.Helpers.EventsHelper = aF;
  var aH = function (a) {
    this.$0 = null;
    this.$0 = a;
  };
  aH.__typeName = "VEL.Skynet.Global.Helpers.GoogleClassroomErrorReporter";
  global.VEL.Skynet.Global.Helpers.GoogleClassroomErrorReporter = aH;
  var aJ = function () {};
  aJ.__typeName = "VEL.Skynet.Global.Helpers.GoogleClassroomHelper";
  aJ.exceptionToError = function (a) {
    return a.arguments.length !== 0
      ? ss.cast(
          a.arguments[0],
          VEL.Skynet.Global.Json.GoogleClassroom.GoogleClassroomError
        )
      : null;
  };
  aJ.exceptionToLogErrorMessage = function (a) {
    var b = aJ.exceptionToError(a);
    var c = ss.isValue(b) ? b.message : null;
    var d = ss.isValue(b) ? b.errorCode : null;
    var e =
      "Google Classroom error: " +
      (!ss.isNullOrEmptyString(c) ? c : a.get_message()) +
      (!ss.isNullOrEmptyString(d) ? " (" + d + ")" : "");
    return e;
  };
  global.VEL.Skynet.Global.Helpers.GoogleClassroomHelper = aJ;
  var aL = function (a, b) {
    this.$1 = null;
    this.$2 = null;
    this.$1 = b;
    if (ss.startsWithString(a, "<")) {
      this.$2 = a;
    } else {
      if (!ss.startsWithString(a, "#")) {
        a = "#" + a;
      }
      var c = $(a);
      if (c.length === 0) {
        throw new ss.ArgumentException("template id='" + a + "' not found");
      }
      this.$2 = c.html();
      this.$2 = this.$0(this.$2);
    }
  };
  aL.__typeName = "VEL.Skynet.Global.Helpers.HtmlTemplate";
  aL.clearCache = function () {
    aL.$0.clear();
  };
  aL.buildTemplate = function (a, b) {
    return $(aL.toString(a, b));
  };
  aL.toString = function (a, b) {
    var c = { $: null };
    if (aL.$0.tryGetValue(a, c)) {
      return c.$.toString$1(b);
    }
    c.$ = new aL(a, []);
    aL.$0.set_item(a, c.$);
    return c.$.toString$1(b);
  };
  global.VEL.Skynet.Global.Helpers.HtmlTemplate = aL;
  var aN = function () {};
  aN.__typeName = "VEL.Skynet.Global.Helpers.LocalStorageHelper";
  aN.get = function (a) {
    return function (b) {
      if (ss.isNullOrEmptyString(b)) {
        return ss.getDefaultValue(a);
      }
      var c = window.localStorage.getItem(b);
      if (ss.isNullOrEmptyString(c)) {
        return ss.getDefaultValue(a);
      }
      try {
        return JSON.parse(c);
      } catch (d) {
        return ss.getDefaultValue(a);
      }
    };
  };
  aN.store = function (a) {
    return function (b, c) {
      var d = JSON.stringify(c);
      window.localStorage.setItem(b, d);
    };
  };
  aN.getList = function (a) {
    return function (b) {
      return aN.get(Array).call(null, b) || [];
    };
  };
  aN.storeList = function (a) {
    return function (b, c) {
      if (ss.isNullOrUndefined(c) || c.length === 0) {
        aN.removeItem(b);
      } else {
        aN.store(Array).call(null, b, c);
      }
    };
  };
  aN.getBooleanFromLocalStorage = function (a) {
    var b = {};
    ss.tryParseBool(window.localStorage.getItem(a), b);
    return b.$;
  };
  aN.storeBooleanInLocalStorage = function (a, b) {
    window.localStorage.setItem(a, b.toString());
  };
  aN.removeItem = function (a) {
    window.localStorage.removeItem(a);
  };
  global.VEL.Skynet.Global.Helpers.LocalStorageHelper = aN;
  var aP = function () {};
  aP.__typeName = "VEL.Skynet.Global.Helpers.NativeShareHelper";
  aP.share = function (a, b, c) {
    if (!(navigator.share != undefined) || ss.isNullOrEmptyString(a)) {
      return false;
    }
    navigator.share({ url: a, title: b, text: c });
    return true;
  };
  global.VEL.Skynet.Global.Helpers.NativeShareHelper = aP;
  var aR = function () {};
  aR.__typeName = "VEL.Skynet.Global.Helpers.NaturalSortHelper";
  aR.compareStringsNatural = function (a, b) {
    if (ss.referenceEquals(a, b)) {
      return 0;
    }
    if (ss.isNullOrUndefined(a)) {
      return -1;
    }
    if (ss.isNullOrUndefined(b)) {
      return 1;
    }
    var c = aR.$0(a);
    var d = aR.$0(b);
    var e = Math.max(c.length, d.length);
    for (var f = 0; f < e; f++) {
      if (f >= c.length) {
        return -1;
      }
      if (f >= d.length) {
        return 1;
      }
      var g = c[f];
      var h = d[f];
      var i = {},
        j = {};
      if (ss.Int32.tryParse(g, i) && ss.Int32.tryParse(h, j)) {
        var k = ss.compare(i.$, j.$);
        if (k !== 0) {
          return k;
        }
      } else {
        var l = ss.compareStrings(g, h, true);
        if (l !== 0) {
          return l;
        }
      }
    }
    return 0;
  };
  aR.$0 = function (a) {
    var b = [];
    if (ss.isNullOrEmptyString(a)) {
      return Array.prototype.slice.call(b);
    }
    var c = ss.isNumber(a.charCodeAt(0));
    var d = 0;
    for (var e = 1; e < a.length; e++) {
      var f = a.charCodeAt(e);
      var g = ss.isNumber(f);
      if (g !== c) {
        b.push(a.substr(d, e - d));
        d = e;
        c = g;
      }
    }
    b.push(a.substring(d));
    return Array.prototype.slice.call(b);
  };
  global.VEL.Skynet.Global.Helpers.NaturalSortHelper = aR;
  var aT = function () {
    this.$1 = null;
    this.$0 = null;
    this.$1 = new d6.$ctor1(".js-notification-banners");
    this.$0 = new aL("notification_banner_template", []);
  };
  aT.__typeName = "VEL.Skynet.Global.Helpers.NotificationBannerHelper";
  aT.get_instance = function () {
    if (ss.isNullOrUndefined(aT.$1)) {
      aT.$1 = new aT();
    }
    return aT.$1;
  };
  global.VEL.Skynet.Global.Helpers.NotificationBannerHelper = aT;
  var aV = function () {};
  aV.__typeName = "VEL.Skynet.Global.Helpers.RedirectHelper";
  aV.setupRedirectButtons = function (a, b) {
    new dW(
      a,
      function (c) {
        window.location.href = c.getAttribute(b);
      },
      null
    );
  };
  global.VEL.Skynet.Global.Helpers.RedirectHelper = aV;
  var aX = function () {};
  aX.__typeName = "VEL.Skynet.Global.Helpers.SettingsHelper";
  aX.set = function (a, b, c) {
    try {
      if (c) {
        window.sessionStorage[a] = b.toString();
      } else {
        window.localStorage[a] = b.toString();
      }
    } catch (d) {}
  };
  aX.get$1 = function (a, b) {
    var c = {};
    if (ss.Int32.tryParse(aX.get$2(a, b.toString()), c)) {
      return c.$;
    } else {
      return b;
    }
  };
  aX.get = function (a, b) {
    return aX.get$2(a, b.toString()).toLowerCase() === "true";
  };
  aX.get$2 = function (a, b) {
    try {
      var c = window.localStorage[a];
      if (c === undefined) {
        c = window.sessionStorage[a];
        if (c === undefined) {
          c = b;
        }
      }
      return c;
    } catch (d) {
      return b;
    }
  };
  aX.remove = function (a) {
    try {
      window.localStorage.removeItem(a);
      window.sessionStorage.removeItem(a);
    } catch (b) {}
  };
  global.VEL.Skynet.Global.Helpers.SettingsHelper = aX;
  var aZ = function () {};
  aZ.__typeName = "VEL.Skynet.Global.Helpers.SocialMediaHelper";
  aZ.createFacebookShareLink = function (a, b) {
    return ss.formatString(
      "https://www.facebook.com/sharer/sharer.php?u={0}&t={1}",
      encodeURIComponent(a).replace(/%20/g, "+"),
      encodeURIComponent(b).replace(/%20/g, "+")
    );
  };
  aZ.createPinterestShareLink = function (a, b) {
    return ss.formatString(
      "https://pinterest.com/pin/create/link/?url={0}&description={1}",
      encodeURIComponent(a).replace(/%20/g, "+"),
      encodeURIComponent(b).replace(/%20/g, "+")
    );
  };
  global.VEL.Skynet.Global.Helpers.SocialMediaHelper = aZ;
  var a1 = function () {};
  a1.__typeName = "VEL.Skynet.Global.Helpers.UrlHelper";
  a1.localize = function (a) {
    var b = window.location.href.split(String.fromCharCode(47));
    if (b.length < 4) {
      return a;
    }
    var c = b[3];
    var d = c.length === 2 || (c.length === 5 && c.charCodeAt(2) === 45);
    if (d) {
      return "/" + c + a;
    } else {
      return a;
    }
  };
  a1.getUrlParameter = function (a) {
    var b = window.location.search;
    var c = b.indexOf(a + "=");
    if (c === -1) {
      return null;
    }
    var d = c + 1 + a.length;
    var e = b.indexOf(String.fromCharCode(38), d);
    var f;
    if (e === -1) {
      f = b.substring(d);
    } else {
      f = b.substr(d, e - d);
    }
    f = ss.replaceAllString(f, "+", "%20");
    return decodeURIComponent(f);
  };
  a1.isRelease = function () {
    return window.location.href.indexOf("skynet.net") !== -1;
  };
  global.VEL.Skynet.Global.Helpers.UrlHelper = a1;
  var a3 = function () {};
  a3.__typeName = "VEL.Skynet.Global.Helpers.ValidityHelper";
  a3.isEmail = function (a) {
    if (ss.isNullOrUndefined(a) || a.length < 4) {
      return false;
    }
    if (ss.endsWithString(a, "@skynet.net")) {
      return a3.$2.test(a);
    }
    return a3.$0.test(a);
  };
  a3.isPassword = function (a) {
    return ss.isValue(a) && a.length >= ServerModel.minPasswordLength;
  };
  global.VEL.Skynet.Global.Helpers.ValidityHelper = a3;
  var af = function () {};
  af.__typeName = "VEL.Skynet.Global.Interop.DragDealer";
  global.VEL.Skynet.Global.Interop.DragDealer = af;
  var ah = function () {
    this.steps = 0;
    this.speed = 0;
    this.slide = false;
    this.css3 = false;
    this.callback = null;
  };
  ah.__typeName = "VEL.Skynet.Global.Interop.DragDealerOptions";
  global.VEL.Skynet.Global.Interop.DragDealerOptions = ah;
  var aj = function (a) {
    this.$1 = null;
    this.$1 = a;
  };
  aj.__typeName = "VEL.Skynet.Global.Interop.GoogleClassroomClient";
  aj.createSetAssignmentClient = function (a, b) {
    var c = 0,
      d = new ss.TaskCompletionSource(),
      e,
      f;
    var g = function () {
      try {
        $sm1: for (;;) {
          switch (c) {
            case 0:
              c = -1;
              e = VEL.Skynet.Global.Interop.InteropHelper.waitFor$1(
                "gapi",
                100,
                0
              );
              c = 1;
              e.continueWith(g);
              return;
            case 1:
              c = -1;
              e.getAwaitedResult();
              f = ss.Task.fromPromise(
                GoogleClassroom.createSetAssignmentClient(a, b),
                0
              );
              c = 2;
              f.continueWith(g);
              return;
            case 2:
              c = -1;
              d.setResult(new aj(f.getAwaitedResult()));
              return;
            default:
              break $sm1;
          }
        }
      } catch (h) {
        d.setException(ss.Exception.wrap(h));
      }
    };
    g();
    return d.task;
  };
  aj.createDoAssignmentClient = function (a, b) {
    var c = 0,
      d = new ss.TaskCompletionSource(),
      e,
      f;
    var g = function () {
      try {
        $sm1: for (;;) {
          switch (c) {
            case 0:
              c = -1;
              e = VEL.Skynet.Global.Interop.InteropHelper.waitFor$1(
                "gapi",
                100,
                0
              );
              c = 1;
              e.continueWith(g);
              return;
            case 1:
              c = -1;
              e.getAwaitedResult();
              f = ss.Task.fromPromise(
                GoogleClassroom.createDoAssignmentClient(a, b),
                0
              );
              c = 2;
              f.continueWith(g);
              return;
            case 2:
              c = -1;
              d.setResult(new aj(f.getAwaitedResult()));
              return;
            default:
              break $sm1;
          }
        }
      } catch (h) {
        d.setException(ss.Exception.wrap(h));
      }
    };
    g();
    return d.task;
  };
  aj.createAssignmentResultsClient = function (a, b) {
    var c = 0,
      d = new ss.TaskCompletionSource(),
      e,
      f;
    var g = function () {
      try {
        $sm1: for (;;) {
          switch (c) {
            case 0:
              c = -1;
              e = VEL.Skynet.Global.Interop.InteropHelper.waitFor$1(
                "gapi",
                100,
                0
              );
              c = 1;
              e.continueWith(g);
              return;
            case 1:
              c = -1;
              e.getAwaitedResult();
              f = ss.Task.fromPromise(
                GoogleClassroom.createAssignmentResultsClient(a, b),
                0
              );
              c = 2;
              f.continueWith(g);
              return;
            case 2:
              c = -1;
              d.setResult(new aj(f.getAwaitedResult()));
              return;
            default:
              break $sm1;
          }
        }
      } catch (h) {
        d.setException(ss.Exception.wrap(h));
      }
    };
    g();
    return d.task;
  };
  global.VEL.Skynet.Global.Interop.GoogleClassroomClient = aj;
  var al = function () {
    this.revision = 0;
    this.cookie = null;
    this.categories = null;
    this.onFirstConsent = null;
    this.onChange = null;
    this.onModalShow = null;
    this.onModalHide = null;
    this.language = null;
    this.hideFromBots = false;
    this.autoShow = false;
  };
  al.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfig";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfig =
    al;
  var an = function () {
    this.essential = null;
    this.functional = null;
    this.analytics = null;
    this.marketing = null;
  };
  an.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigCategories";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigCategories =
    an;
  var ap = function () {
    this.readOnly = false;
    this.services = null;
  };
  ap.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigCategory";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigCategory =
    ap;
  var ar = function () {
    this.title = null;
    this.description = null;
    this.acceptAllBtn = null;
    this.acceptNecessaryBtn = null;
    this.showPreferencesBtn = null;
    this.footer = null;
  };
  ar.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigConsentModal";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigConsentModal =
    ar;
  var au = function () {
    this.expiresAfterDays = 0;
  };
  au.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigCookie";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigCookie =
    au;
  var aw = function () {
    this.default = null;
    this.rtl = null;
    this.translations = null;
  };
  aw.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigLanguage";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigLanguage =
    aw;
  var ay = function () {
    this.title = null;
    this.acceptAllBtn = null;
    this.acceptNecessaryBtn = null;
    this.savePreferencesBtn = null;
    this.closeIconLabel = null;
    this.sections = null;
  };
  ay.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigPreferencesModal";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigPreferencesModal =
    ay;
  var aA = function () {
    this.title = null;
    this.description = null;
    this.linkedCategory = null;
  };
  aA.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigSection";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigSection =
    aA;
  var aC = function () {
    this.label = null;
  };
  aC.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigService";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigService =
    aC;
  var aE = function () {
    this.googleClassroom = null;
    this.youTube = null;
  };
  aE.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigServices";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigServices =
    aE;
  var aG = function () {
    this.consentModal = null;
    this.preferencesModal = null;
  };
  aG.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigTranslation";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigTranslation =
    aG;
  var aI = function () {
    this.currentLanguage = null;
  };
  aI.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigTranslations";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConfigTranslations =
    aI;
  var aK = function () {};
  aK.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConstants";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentConstants =
    aK;
  var aM = function () {
    this.essential = null;
    this.functional = null;
    this.analytics = null;
    this.marketing = null;
  };
  aM.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentServices";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentServices =
    aM;
  var aO = function () {
    this.acceptType = null;
    this.acceptedCategories = null;
    this.rejectedCategories = null;
    this.acceptedServices = null;
    this.rejectedServices = null;
  };
  aO.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentUserPreferences";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.CookieConsentUserPreferences =
    aO;
  var aQ = function () {
    this.modalName = null;
  };
  aQ.__typeName =
    "VEL.Skynet.Global.Interop.OrestBidaCookieConsent.ModalEvent";
  global.VEL.Skynet.Global.Interop.OrestBidaCookieConsent.ModalEvent = aQ;
  var aS = function () {};
  aS.__typeName = "VEL.Skynet.Global.Modals.$0";
  var aU = function (a, b, c) {
    this.$g = 0;
    this.$f = null;
    this.$e = null;
    dc.call(this, "feedback-modal", "feedback-modal-wrapper");
    this.$g = a;
    this.$f = b;
    this.$e = c;
  };
  aU.__typeName = "VEL.Skynet.Global.Modals.AiGenerationFeedbackModal";
  global.VEL.Skynet.Global.Modals.AiGenerationFeedbackModal = aU;
  var aW = function (a) {
    a2.call(this, a);
  };
  aW.__typeName = "VEL.Skynet.Global.Modals.AssignmentLinkModal";
  global.VEL.Skynet.Global.Modals.AssignmentLinkModal = aW;
  var aY = function (a, b, c) {
    this.$g = null;
    this.$i = null;
    this.$h = null;
    dc.call(this, "prompt-modal", "modal-size-medium");
    this.$g = a;
    this.$i = b;
    this.$h = c;
  };
  aY.__typeName = "VEL.Skynet.Global.Modals.CancelSubscriptionConfirmModal";
  global.VEL.Skynet.Global.Modals.CancelSubscriptionConfirmModal = aY;
  var a0 = function (a, b) {
    this.$f = null;
    this.$g = null;
    this.$h = 0;
    dc.call(this, "prompt-modal", "modal-size-small");
    this.$f = a;
    this.$h = b;
  };
  a0.__typeName = "VEL.Skynet.Global.Modals.CancelSubscriptionModal";
  global.VEL.Skynet.Global.Modals.CancelSubscriptionModal = a0;
  var a2 = function (a) {
    this.$h = null;
    this.$g = null;
    this.$f = null;
    this.$i = null;
    dc.call(this, "prompt-modal copylink-modal", "modal-size-small");
    this.$i = a;
  };
  a2.__typeName = "VEL.Skynet.Global.Modals.CopyLinkModal";
  global.VEL.Skynet.Global.Modals.CopyLinkModal = a2;
  var a4 = function (a, b) {
    this.$h = null;
    this.$g = null;
    this.$f = null;
    this.$e = null;
    dc.call(this, null, "deadline-modal-wrapper");
    this.$g = a;
    this.$h = b;
  };
  a4.__typeName = "VEL.Skynet.Global.Modals.DeadlineModal";
  global.VEL.Skynet.Global.Modals.DeadlineModal = a4;
  var a7 = function (a, b) {
    this.$f = 0;
    this.$h = null;
    this.$g = null;
    dc.call(this, "edit-metadata-modal", "edit-metadata-modal-wrapper");
    this.$f = a;
    this.$h = b;
  };
  a7.__typeName = "VEL.Skynet.Global.Modals.EditTagsModal";
  global.VEL.Skynet.Global.Modals.EditTagsModal = a7;
  var a9 = function (a, b, c, d, e, f, g) {
    this.$n = null;
    c9.call(this, a, b, c, d, e, f, g);
  };
  a9.__typeName = "VEL.Skynet.Global.Modals.EmailInputModal";
  global.VEL.Skynet.Global.Modals.EmailInputModal = a9;
  var b1 = function (a) {
    this.$e = null;
    dc.call(this, "prompt-modal", "modal-size-small");
    this.$e = a;
  };
  b1.__typeName = "VEL.Skynet.Global.Modals.ErrorModal";
  global.VEL.Skynet.Global.Modals.ErrorModal = b1;
  var b3 = function (a, b, c) {
    this.$h = 0;
    this.$g = 0;
    this.$e = 0;
    this.$f = null;
    dc.call(this, "feedback-modal", "feedback-modal-wrapper");
    this.$h = a;
    this.$g = b;
    this.$e = c;
  };
  b3.__typeName = "VEL.Skynet.Global.Modals.ExperimentFeedbackModal";
  b3.$ctor1 = function (a, b, c, d) {
    this.$h = 0;
    this.$g = 0;
    this.$e = 0;
    this.$f = null;
    dc.call(this, "feedback-modal", "feedback-modal-wrapper");
    this.$h = a;
    this.$g = b;
    this.$e = c;
    this.$f = d;
  };
  global.VEL.Skynet.Global.Modals.ExperimentFeedbackModal = b3;
  var b5 = function (a) {
    this.$f = 0;
    dc.call(this, "prompt-modal", "modal-size-small");
    this.$f = a;
  };
  b5.__typeName = "VEL.Skynet.Global.Modals.ExportModal";
  global.VEL.Skynet.Global.Modals.ExportModal = b5;
  var b7 = function (a, b, c) {
    this.$f = 0;
    this.$e = 0;
    this.$g = null;
    dc.call(this, "feedback-modal", "feedback-modal-wrapper");
    this.$f = a;
    this.$e = b;
    this.$g = c;
  };
  b7.__typeName = "VEL.Skynet.Global.Modals.FeedbackModal";
  global.VEL.Skynet.Global.Modals.FeedbackModal = b7;
  var b9 = function () {};
  b9.__typeName = "VEL.Skynet.Global.Modals.FeedbackMode";
  global.VEL.Skynet.Global.Modals.FeedbackMode = b9;
  var c1 = function (a) {
    this.$2 = null;
    this.$1$1 = 0;
    this.set_color(a);
  };
  c1.__typeName = "VEL.Skynet.Global.Modals.FolderColorPicker";
  global.VEL.Skynet.Global.Modals.FolderColorPicker = c1;
  var c3 = function (a, b, c, d, e, f, g) {
    this.prompt = null;
    this.maxLength = 0;
    this.placeholder = null;
    this.$f = null;
    this.initialText = null;
    this.selectAll = false;
    this.$e = null;
    this.input = null;
    dc.call(this, "input-modal", "input-modal-wrapper");
    this.prompt = a;
    this.$f = b;
    this.maxLength = c;
    this.placeholder = d;
    this.initialText = e;
    this.selectAll = f;
    this.$e = g;
  };
  c3.__typeName = "VEL.Skynet.Global.Modals.FolderInputAndColorModal";
  global.VEL.Skynet.Global.Modals.FolderInputAndColorModal = c3;
  var c5 = function (a, b, c) {
    this.$f = 0;
    this.$g = null;
    this.$e = null;
    dc.call(this, "input-modal", "input-modal-wrapper");
    this.$f = a;
    this.$g = b;
    this.$e = c;
  };
  c5.__typeName = "VEL.Skynet.Global.Modals.FolderRecolorModal";
  global.VEL.Skynet.Global.Modals.FolderRecolorModal = c5;
  var c7 = function () {};
  c7.__typeName = "VEL.Skynet.Global.Modals.IActivity";
  global.VEL.Skynet.Global.Modals.IActivity = c7;
  var c9 = function (a, b, c, d, e, f, g) {
    this.$k = null;
    this.$h = 0;
    this.$j = null;
    this.$i = null;
    this.$f = null;
    this.$l = false;
    this.$e = null;
    this.$g = null;
    this.button = null;
    dc.call(this, "input-modal", "input-modal-wrapper");
    this.$k = a;
    this.$i = b;
    this.$h = c;
    this.$j = d;
    this.$f = e;
    this.$l = f;
    this.$e = g;
  };
  c9.__typeName = "VEL.Skynet.Global.Modals.InputModal";
  global.VEL.Skynet.Global.Modals.InputModal = c9;
  var dc = function (a, b) {
    this.$a = false;
    this.$9 = false;
    this.$4 = null;
    this.$d = null;
    this.$c = null;
    this.$1 = null;
    this.$b = null;
    this.$8 = null;
    this.$3 = null;
    this.$6 = null;
    this.$5 = null;
    this.$7 = null;
    this.noMaxHeight = false;
    this.$2 = null;
    this.$2 = [];
    this.$4 = ss.coalesce(a, "");
    this.$d = ss.coalesce(b, "");
  };
  dc.__typeName = "VEL.Skynet.Global.Modals.Modal";
  dc.closeActiveModal = function () {
    if (ss.isValue(dc.$0)) {
      dc.$0.closeModal();
    }
  };
  dc.openNewTab = function (a) {
    var b = window.open(a, "_blank");
    if (ss.isValue(b)) {
      b.focus();
    }
  };
  dc.openPopup = function (a) {
    var b = 600;
    var c = 500;
    var d = window.innerWidth;
    var e = window.innerHeight;
    var f = ss.Int32.div(d, 2) - 300 + 10;
    var g = ss.Int32.div(e, 2) - 250 + 50;
    var h = window.open(
      a,
      "_blank",
      "scrollbars=yes, width=" +
        b +
        ", height=" +
        c +
        ", top=" +
        g +
        ", left=" +
        f
    );
    if (ss.isValue(h)) {
      h.focus();
    }
  };
  global.VEL.Skynet.Global.Modals.Modal = dc;
  var de = function (a) {
    this.$f = null;
    this.$e = null;
    dc.call(this, null, "move-item-modal-wrapper");
    this.$f = a;
  };
  de.__typeName = "VEL.Skynet.Global.Modals.MoveModal";
  global.VEL.Skynet.Global.Modals.MoveModal = de;
  var dg = function (a, b, c) {
    this.$f = null;
    this.$g = null;
    this.$h = null;
    dc.call(this, "prompt-modal", "modal-size-small");
    this.$f = a;
    this.$g = b;
    this.$h = c;
  };
  dg.__typeName = "VEL.Skynet.Global.Modals.OkModal";
  global.VEL.Skynet.Global.Modals.OkModal = dg;
  var di = function (a, b) {
    this.$h = null;
    dc.call(this, a, b + " paged-modal");
    this.$h = [];
  };
  di.__typeName = "VEL.Skynet.Global.Modals.PagedModal";
  global.VEL.Skynet.Global.Modals.PagedModal = di;
  var dk = function (a, b, c) {
    this.$l = 0;
    this.$k = false;
    this.$j = false;
    dc.call(this, "prompt-modal", "modal-size-small");
    this.$l = a;
    this.$k = b;
    this.$j = c;
  };
  dk.__typeName = "VEL.Skynet.Global.Modals.PolicyUpdateModal";
  global.VEL.Skynet.Global.Modals.PolicyUpdateModal = dk;
  var dm = function () {
    dc.call(this, "progress-modal", "progress-modal-wrapper");
  };
  dm.__typeName = "VEL.Skynet.Global.Modals.ProgressModal";
  global.VEL.Skynet.Global.Modals.ProgressModal = dm;
  var dp = function () {
    dc.call(this, "prompt-modal", "modal-size-small");
  };
  dp.__typeName = "VEL.Skynet.Global.Modals.ProRequiredModal";
  global.VEL.Skynet.Global.Modals.ProRequiredModal = dp;
  var dr = function () {
    this.$g = null;
    dc.call(this, "prompt-modal", "modal-size-small");
  };
  dr.__typeName = "VEL.Skynet.Global.Modals.SendAsEmailModal";
  global.VEL.Skynet.Global.Modals.SendAsEmailModal = dr;
  var dt = function (a) {
    a2.call(this, a);
  };
  dt.__typeName = "VEL.Skynet.Global.Modals.ShareableResultsLinkModal";
  global.VEL.Skynet.Global.Modals.ShareableResultsLinkModal = dt;
  var dv = function (a) {
    this.$o = null;
    this.$q = false;
    this.$r = false;
    this.startOnShareOrAssignment = false;
    this.startOnPublish = false;
    this.startOnAssignment = false;
    this.isAuthor = false;
    this.$p = false;
    this.$3$1 = null;
    this.$3$2 = null;
    this.$n = window.matchMedia("(max-width: 600px)");
    di.call(this, "share-activity-modal", "share-activity-modal-wrapper");
    this.$m(a);
  };
  dv.__typeName = "VEL.Skynet.Global.Modals.ShareModal";
  dv.$ctor1 = function (a) {
    this.$o = null;
    this.$q = false;
    this.$r = false;
    this.startOnShareOrAssignment = false;
    this.startOnPublish = false;
    this.startOnAssignment = false;
    this.isAuthor = false;
    this.$p = false;
    this.$3$1 = null;
    this.$3$2 = null;
    this.$n = window.matchMedia("(max-width: 600px)");
    di.call(this, "share-activity-modal", "share-activity-modal-wrapper");
    this.$k(a);
  };
  dv.openAsEmbed = function (a, b) {
    var c = new dv.$ctor1(a);
    c.$p = b;
    c.$q = true;
    var d = c;
    d.open();
  };
  dv.openAsQr$1 = function (a) {
    var b = new dv.$ctor1(a);
    if (a.get_isShared()) {
      b.$r = true;
    } else {
      b.startOnPublish = true;
      dF.displayMessage(Strings.share_IsPrivate, true, 0);
    }
    b.open();
  };
  dv.openAsQr = function (a) {
    ag.displayProgress();
    var b = "/resultajax/getsharehomework?homeworkGameId=" + a;
    $.getJSON(b, function (c) {
      ag.success(null, false);
      var d = new dv(c);
      d.$r = true;
      var e = d;
      e.open();
    });
  };
  dv.openAsShare = function (a) {
    var b = new dv.$ctor1(a);
    b.startOnPublish = true;
    var c = b;
    c.open();
  };
  dv.openAsAssignment = function (a) {
    var b = new dv.$ctor1(a);
    b.startOnAssignment = true;
    var c = b;
    c.open();
  };
  dv.openAsShareOrAssignment = function (a, b) {
    if (a.get_homeworkType() !== 0 && ServerHelper.get_isLoggedIn()) {
      var c = new dv.$ctor1(a);
      c.startOnShareOrAssignment = true;
      c.isAuthor = b;
      var d = c;
      d.open();
    } else {
      dv.openAsShare(a);
    }
  };
  dv.loadShareModal = function (a) {
    ag.displayProgress();
    var b = "/resultajax/getsharehomework?homeworkGameId=" + a;
    $.getJSON(b, function (c) {
      ag.success(null, false);
      var d = new dv(c);
      d.open();
    });
  };
  global.VEL.Skynet.Global.Modals.ShareModal = dv;
  var dx = function (a, b, c) {
    this.$1 = null;
    this.$2 = null;
    this.$0 = null;
    this.$1 = a;
    this.$2 = b;
    this.$0 = c;
  };
  dx.__typeName = "VEL.Skynet.Global.Modals.SubscriptionRequiredFeatureInfo";
  global.VEL.Skynet.Global.Modals.SubscriptionRequiredFeatureInfo = dx;
  var dz = function (a) {
    this.$e = 0;
    this.$f = null;
    dc.call(
      this,
      "prompt-modal subscription-required-modal",
      "modal-size-small"
    );
    this.$e = a;
    this.$f = new (ss.makeGenericType(ss.Dictionary$2, [
      VEL.Skynet.Global.Enums.SubscriptionRequiredFeatureEnum,
      dx,
    ]))();
    this.$f.set_item(
      0,
      new dx(
        "print",
        Strings.resource_SubscriptionRequired_PrintablesTitle,
        "https://app.cdn.skynet.net/static/content/images/subscription_required_modal/print.2itocsdeulzc2if45g6n3eq2.png"
      )
    );
    this.$f.set_item(
      1,
      new dx(
        "ai",
        Strings.resource_SubscriptionRequired_AITitle,
        "https://app.cdn.skynet.net/static/content/images/subscription_required_modal/ai.29dlrvtf8gaghemgvq3ptbw2.png"
      )
    );
    this.$f.set_item(
      2,
      new dx(
        "options",
        Strings.resource_SubscriptionRequired_GameOptionsTitle,
        "https://app.cdn.skynet.net/static/content/images/subscription_required_modal/gameoption.2f0_d2fuvsveq_zd2jhsjka2.png"
      )
    );
    this.$f.set_item(
      3,
      new dx(
        "editrestricted",
        Strings.resource_SubscriptionRequired_EditContentTitle,
        "https://app.cdn.skynet.net/static/content/images/subscription_required_modal/unlimitededit.2jqf3b2p5-en2iaqxv6u_za2.png"
      )
    );
    this.$f.set_item(
      4,
      new dx(
        "community-search",
        Strings.resource_SubscriptionRequired_CommunityTitle,
        "https://app.cdn.skynet.net/static/content/images/subscription_required_modal/unlimited_search.2fgrocll6tr5btx9yecxaog2.png"
      )
    );
    this.$f.set_item(
      5,
      new dx(
        "assignany",
        Strings.resource_SubscriptionRequired_AssignAllTitle,
        "https://app.cdn.skynet.net/static/content/images/subscription_required_modal/unlimited_assignments.2qvbchrsprbawfugummz-yq2.png"
      )
    );
  };
  dz.__typeName = "VEL.Skynet.Global.Modals.SubscriptionRequiredModal";
  global.VEL.Skynet.Global.Modals.SubscriptionRequiredModal = dz;
  var dB = function (a) {
    this.$e = null;
    dc.call(this, "prompt-modal", "modal-size-medium");
    this.$e = a;
  };
  dB.__typeName = "VEL.Skynet.Global.Modals.VideoModal";
  global.VEL.Skynet.Global.Modals.VideoModal = dB;
  var dD = function (a) {
    this.$e = null;
    dc.call(this, "simple-modal", "popup-info-modal-wrapper");
    this.$e = a;
  };
  dD.__typeName = "VEL.Skynet.Global.Modals.WelcomeBackModal";
  global.VEL.Skynet.Global.Modals.WelcomeBackModal = dD;
  var a8 = function (a, b, c, d) {
    this.$g = null;
    this.$j = null;
    this.$h = null;
    this.$i = null;
    dc.call(this, "prompt-modal", "modal-size-small");
    this.$g = a;
    this.$j = b;
    this.$h = c;
    this.$i = d;
  };
  a8.__typeName = "VEL.Skynet.Global.Modals.YesNoModal";
  global.VEL.Skynet.Global.Modals.YesNoModal = a8;
  var b0 = function () {};
  b0.__typeName = "VEL.Skynet.Global.Modals.SharePages.$0";
  var b2 = function (a) {
    var b = function (c) {
      this.$0 = null;
      this.$0 = c;
    };
    ss.registerGenericClassInstance(
      b,
      b2,
      [a],
      {
        get_$domObject: function () {
          return $(this.get_$selector());
        },
        get_$selector: null,
      },
      function () {
        return null;
      },
      function () {
        return [b0];
      }
    );
    return b;
  };
  b2.__typeName = "VEL.Skynet.Global.Modals.SharePages.$1";
  ss.initGenericClass(b2, aa, 1);
  var b4 = function (a) {
    this.$u = null;
    this.$o = null;
    this.$s = null;
    this.$p = null;
    this.$r = null;
    this.$q = null;
    this.$h = null;
    this.$m = null;
    this.$k = null;
    this.$l = null;
    this.$t = null;
    this.$g = null;
    this.$i = null;
    this.$j = null;
    this.$n = null;
    c6.call(this, a);
    this.$u = new dG.$ctor1(".js-results-title");
    var b = new dX(".js-register-radio", null);
    b.set_value(1);
    this.$o = b;
    this.$s = new d6.$ctor1(".js-register-gc-options");
    this.$p = new dG.$ctor1(".js-register-radio-gc");
    this.$r = new d6.$ctor1(".js-register-gc-label");
    this.$q = new d6.$ctor1(".js-register-gc-cookie-consent-msg");
    var c = new dX(".js-deadline-radio", null);
    c.set_value(0);
    this.$h = c;
    this.$i = new ec(".js-deadline-date", null);
    this.$j = new dL(".js-deadline-time", 900, null);
    var d = new d0.$ctor1(".js-gameover-review", null);
    d.set_isChecked(true);
    this.$m = d;
    var e = new d0.$ctor1(".js-gameover-leaderboard", null);
    e.set_isChecked(false);
    this.$k = e;
    var f = new d0.$ctor1(".js-gameover-restart", null);
    f.set_isChecked(true);
    this.$l = f;
    this.$n = new dG.$ctor1(".js-gc-max-points");
    this.$t = new dU.$ctor3(".js-next-start", ss.mkdel(this, this.$7), true);
    if (a.startOnShareOrAssignment) {
      this.$g = new dU.$ctor3(
        this.get_$selector() + " .js-back-step",
        ss.mkdel(a, a.$e),
        true
      );
    } else {
      this.$g = new dU.$ctor1(this.get_$selector() + " .js-back-step");
    }
    if (
      VEL.Skynet.Global.Server.Switches.getInteger(
        VEL.Skynet.Global.Server.Switches.static$1,
        VEL.Skynet.Global.Server.SwitchKeys.unifiedShareModal
      ) === 4
    ) {
      this.$g.set_isVisible(false);
    }
    new d6.$ctor1(".js-register-option-expt").set_isVisible(
      !GoogleClassroomDisabled
    );
    new d6.$ctor1(".js-assignment-options").set_isVisible(true);
    new dU.$ctor3(
      ".js-register-gc-cookie-consent-btn",
      function () {
        ax.openPreferencesModal();
      },
      true
    );
    this.$c();
    this.$4();
    this.$a();
    this.$6();
    if (ss.isValue(this.$0.$j()) && this.$0.$j().get_homeworkType() === 1) {
      new d6.$ctor1(".js-end-of-game").set_isVisible(false);
      new d6.$ctor1(".js-open-ended").set_isVisible(true);
    }
    this.$5();
  };
  b4.__typeName = "VEL.Skynet.Global.Modals.SharePages.$10";
  var b6 = function (a, b, c, d) {
    this.$2$1 = null;
    this.$2$2 = null;
    d6.call(this, b);
    this.$6(a);
    this.$2(
      new d0.$ctor2(
        this.get_domObject(),
        "input",
        ss.mkdel(this, function () {
          d(this);
        })
      )
    );
    var e = new dU.$ctor4(
      this.get_domObject(),
      ".js-edit-tag",
      ss.mkdel(this, function () {
        c(this);
      })
    );
  };
  b6.__typeName = "VEL.Skynet.Global.Modals.SharePages.$11";
  var b8 = function (a) {
    this.$8 = null;
    this.$9 = null;
    this.$7 = null;
    c6.call(this, a);
    this.$8 = new em(".js-email-link-form", null);
    if (ss.isValue(this.$0.$l())) {
      this.$8.setByName(
        "HomeworkGameId",
        this.$0.$l().HomeworkGameId.toString()
      );
    } else {
      if (ss.isValue(this.$0.$j())) {
        this.$8.setByName(
          "ActivityId",
          this.$0.$j().get_activityId().toString()
        );
      }
    }
    this.$7 = new dG.$ctor1(".js-email-addresses-input");
    this.$7.onKeyDown(ss.mkdel(this, this.$1));
    this.$9 = new dU.$ctor4(
      this.get_$domObject(),
      ".js-send-email-button",
      ss.mkdel(this, this.$6)
    );
    var b = new dU.$ctor4(
      this.get_$domObject(),
      ".js-email-addresses-add-btn",
      ss.mkdel(this, this.$5)
    );
  };
  b8.__typeName = "VEL.Skynet.Global.Modals.SharePages.$12";
  var c0 = function (a, b, c) {
    this.$a = 0;
    this.$7 = null;
    this.$c = null;
    this.$8 = null;
    this.$b = null;
    this.$9 = null;
    this.$6 = null;
    c6.call(this, a);
    var d = new d6.$ctor1(".js-embed-loading");
    var e = new d6.$ctor1(".js-embed-settings");
    d.set_isVisible(true);
    e.set_isVisible(false);
    this.$a = b;
    this.$7 = new dV.$ctor1(".js-embed-templates");
    this.$c = new dX(
      "embed_type",
      ss.mkdel(this, function () {
        this.$3(null);
      })
    );
    this.$8 = new dL(
      ".js-embed-language",
      null,
      ss.mkdel(this, function (g) {
        this.$3(null);
      })
    );
    this.$b = new dL(
      ".js-embed-theme",
      null,
      ss.mkdel(this, function (g) {
        this.$3(null);
      })
    );
    this.$6 = new dG.$ctor1(".js-embed-code-textarea");
    this.$9 = new d6.$ctor1(".js-embed-preview-wrapper");
    var f = new dU.$ctor3(".js-copy-embed", ss.mkdel(this, this.$1), true);
    if (b === 2 || b === 3) {
      this.$8.set_isVisible(false);
      this.$8.get_label().set_isVisible(false);
      this.$b.set_isVisible(false);
      this.$b.get_label().set_isVisible(false);
    }
    window.setTimeout(
      ss.mkdel(this, function () {
        this.$2(
          ss.mkdel(this, function () {
            this.$3(
              ss.mkdel(this, function () {
                d.set_isVisible(false);
                e.set_isVisible(true);
                this.$4(c);
              })
            );
          })
        );
      }),
      c ? 0 : 500
    );
  };
  c0.__typeName = "VEL.Skynet.Global.Modals.SharePages.$13";
  var c2 = function () {};
  c2.__typeName = "VEL.Skynet.Global.Modals.SharePages.$14";
  var c4 = function (a) {
    this.$4 = false;
    this.$6 = null;
    this.$5 = null;
    this.$3 = null;
    c6.call(this, a);
    this.$6 = new dG.$ctor3(this.get_$domObject(), ".js-resource-title");
    this.$6.set_value(a.$j().get_title());
    this.$5 = new dU.$ctor4(
      this.get_$domObject(),
      ".js-next-publish",
      ss.mkdel(this, this.$2)
    );
    this.$3 = new dn(this.get_$domObject(), a.$j().get_activityId());
    new dU.$ctor3(
      ".js-step-resource-setup .js-feedback-banner button",
      function () {
        new b7(2, 25, null).open();
      },
      true
    );
    var b = new dU.$ctor4(
      this.get_$domObject(),
      ".js-share-private",
      ss.mkdel(this, this.$1)
    );
    if (a.startOnPublish) {
      var c = new dG.$ctor3(this.get_$domObject(), ".js-share-title");
      c.set_text(Strings.share_Resource_Title);
      var d = new dU.$ctor4(
        this.get_$domObject(),
        ".js-back-step",
        ss.mkdel(a, a.$e)
      );
      d.set_isVisible(false);
      b.set_isVisible(true);
    } else {
      if (a.startOnShareOrAssignment) {
        new dU.$ctor4(
          this.get_$domObject(),
          ".js-back-step",
          ss.mkdel(a, a.$e)
        );
        b.set_isVisible(true);
        b.addClass("cta-spacer");
      }
    }
  };
  c4.__typeName = "VEL.Skynet.Global.Modals.SharePages.$15";
  var c6 = function (a) {
    ss.makeGenericType(b2, [dv]).call(this, a);
  };
  c6.__typeName = "VEL.Skynet.Global.Modals.SharePages.$2";
  var c8 = function (a, b) {
    c6.call(this, a);
    this.$1();
    new ea(this.get_$domObject(), b);
  };
  c8.__typeName = "VEL.Skynet.Global.Modals.SharePages.$3";
  var db = function (a, b, c) {
    this.$4 = null;
    this.$5 = null;
    this.$6 = null;
    this.$7 = null;
    c6.call(this, a);
    this.$4 = b;
    this.$5 = c;
    this.$6 = new dU.$ctor1(".js-view-gc-assignment-on-gc");
    this.$7 = new dU.$ctor1(".js-view-gc-assignment-on-skynet");
    this.$3();
  };
  db.__typeName = "VEL.Skynet.Global.Modals.SharePages.$4";
  var dd = function (a, b, c, d) {
    this.$j = null;
    this.$g = null;
    this.$k = null;
    this.$i = null;
    this.$d = null;
    this.$e = null;
    this.$f = null;
    this.$m = null;
    this.$h = null;
    this.$l = null;
    c6.call(this, a);
    this.$j = b;
    this.$g = c;
    this.$k = d;
    this.$i = new d3(".js-gc-course-select", null, null);
    var e = new dX(".js-gc-assign-to-radio", null);
    e.set_value(0);
    this.$d = e;
    this.$e = new d6.$ctor1(".js-gc-assign-to-student-list");
    this.$f = new d6.$ctor1(".js-gc-assign-to-student-no-students");
    this.$m = new dU.$ctor1(".js-gc-share-button");
    this.$h = new dU.$ctor1(this.get_$selector() + " .js-back-step");
    this.$b();
    this.$2();
  };
  dd.__typeName = "VEL.Skynet.Global.Modals.SharePages.$5";
  dd.$0 = function (a) {
    return ss.isValue(a) && a.Unix !== 0
      ? VEL.Skynet.Global.Extensions.DateTimeExtensions.fromUnix(a.Unix)
      : null;
  };
  var df = function (a) {
    c6.call(this, a);
  };
  df.__typeName = "VEL.Skynet.Global.Modals.SharePages.$6";
  var dh = function (a, b) {
    c6.call(this, a);
    new d6.$ctor1(".js-qr-title").set_text(this.$2(a));
    var c = this.$1(a);
    var d = a6.create(c, null, null, null);
    var e = new d6.$ctor1(".js-qr-image");
    e.empty();
    e.append(d);
    if (b) {
      new dU.$ctor1(".js-back-step").set_isVisible(true);
    }
  };
  dh.__typeName = "VEL.Skynet.Global.Modals.SharePages.$7";
  var dj = function (a, b) {
    this.$3 = false;
    this.$5 = null;
    this.$6 = null;
    this.$4 = null;
    c6.call(this, a);
    new d6.$ctor1(".js-share-or-homework-title").set_text(
      Strings.share_How_Title
    );
    new dU.$ctor4(
      this.get_$domObject(),
      ".js-share-multiple-public",
      ss.mkdel(this, this.$2)
    );
    new dU.$ctor4(
      this.get_$domObject(),
      ".js-share-multiple-private",
      ss.mkdel(this, this.$1)
    );
    this.$3 = b;
  };
  dj.__typeName = "VEL.Skynet.Global.Modals.SharePages.$8";
  var dl = function (a, b) {
    this.$f = null;
    this.$g = 0;
    c6.call(this, a);
    this.$g = b;
    var c = new dU.$ctor4(
      this.get_$domObject(),
      ".js-share-modal-by-email",
      ss.mkdel(this, this.$8)
    );
    var d = new dU.$ctor4(
      this.get_$domObject(),
      ".js-share-modal-by-facebook",
      ss.mkdel(this, this.$a)
    );
    var e = new dU.$ctor4(
      this.get_$domObject(),
      ".js-share-modal-by-embed",
      ss.mkdel(this, this.$9)
    );
    var f = new dU.$ctor4(
      this.get_$domObject(),
      ".js-share-modal-by-qr",
      ss.mkdel(this, this.$e)
    );
    var g = new dU.$ctor4(
      this.get_$domObject(),
      ".js-share-modal-by-google",
      ss.mkdel(this, this.$b)
    );
    var h = new dU.$ctor4(
      this.get_$domObject(),
      ".js-share-modal-by-pinterest",
      ss.mkdel(this, this.$d)
    );
    var i = this.$7();
    new dU.$ctor3(
      ".js-step-public-resource-done .js-feedback-banner button",
      function () {
        new b7(2, 25, null).open();
      },
      true
    );
    new dU.$ctor3(
      ".js-step-resource-done .js-feedback-banner button",
      function () {
        new b7(2, 25, null).open();
      },
      true
    );
    new dU.$ctor3(
      ".js-step-assignment-done .js-feedback-banner button",
      function () {
        new b7(2, 26, null).open();
      },
      true
    );
    if (navigator.share != undefined && aB.isPhoneSized()) {
      i.set_isVisible(true);
    } else {
      d.set_isVisible(true);
      h.set_isVisible(ServerModel.regionalSocialMedia === 0);
    }
    this.$f = new dG.$ctor3(this.get_$domObject(), ".js-share-link-input");
    var j = new dU.$ctor4(
      this.get_$domObject(),
      ".js-share-link-copy",
      ss.mkdel(this.$f, this.$f.copy)
    );
    var k = new dU.$ctor4(
      this.get_$domObject(),
      ".js-back-step",
      ss.mkdel(a, a.$e)
    );
    if (b === 2 || b === 3) {
      this.$f.set_value(this.$0.$l().Url);
    } else {
      this.$f.set_value(ep.getShortUrl(this.$0.$j().get_activityId(), true));
      if (this.$0.$j().get_isAuthor()) {
        new d6.$ctor3(k.get_domObject(), ".js-settings-text").set_isVisible(
          true
        );
        new d6.$ctor3(k.get_domObject(), ".js-back-text").set_isVisible(false);
      } else {
        k.set_isVisible(false);
      }
      if (this.$0.$j().get_hasCopyrightInfringement()) {
        var l = new d6.$ctor1(".js-share-copyright");
        l.set_isVisible(true);
        var m = new d6.$ctor1(".js-share-link");
        m.set_isVisible(false);
        k.set_isVisible(false);
        var n = new d6.$ctor1(".js-share-buttons");
        n.set_isVisible(false);
      }
    }
    if (
      !ServerModel.isAuthor &&
      !this.$0.isAuthor &&
      (ss.isNullOrUndefined(this.$0.$j()) || !this.$0.$j().get_isAuthor())
    ) {
      k.set_isVisible(false);
    }
  };
  dl.__typeName = "VEL.Skynet.Global.Modals.SharePages.$9";
  var dn = function (a, b) {
    this.$z = [];
    this.$m = [];
    this.$A = [];
    this.$t = false;
    this.$y = null;
    this.$x = null;
    this.$w = null;
    this.$p = null;
    this.$l = null;
    this.$v = null;
    this.$n = null;
    this.$h = null;
    this.$j = null;
    this.$i = null;
    this.$o = null;
    this.$u = null;
    this.$r = null;
    this.$s = null;
    this.$q = null;
    this.$k = null;
    this.$g = 0;
    d6.$ctor2.call(this, a);
    this.$g = b;
    this.$p = new d6.$ctor3(this.get_domObject(), ".js-edit-wrapper");
    this.$l = new d6.$ctor3(this.get_domObject(), ".js-add-wrapper");
    this.$v = new d6.$ctor3(this.get_domObject(), ".js-remove-wrapper");
    var c = new dU.$ctor4(
      this.get_domObject(),
      ".js-popup-inner",
      function () {}
    );
    this.$n = new dG.$ctor3(this.get_domObject(), ".js-edit-input");
    this.$h = new dG.$ctor3(this.get_domObject(), ".js-add-input");
    var d = new dU.$ctor4(
      this.get_domObject(),
      ".js-popup-cancel",
      ss.mkdel(this, this.$c)
    );
    this.$o = new dU.$ctor4(
      this.get_domObject(),
      ".js-edit-ok",
      ss.mkdel(this, this.$a)
    );
    var e = new dU.$ctor4(
      this.get_domObject(),
      ".js-edit-delete",
      ss.mkdel(this, this.$9)
    );
    this.$i = new dU.$ctor4(this.get_domObject(), ".js-add-ok", null);
    this.$j = new d6.$ctor3(this.get_domObject(), ".js-add-title");
    this.$u = new dU.$ctor4(
      this.get_domObject(),
      ".js-remove-ok",
      ss.mkdel(this, this.$d)
    );
    this.$r = new dV.$ctor3(this.get_domObject(), ".js-insert-tags");
    if (this.$r.get_isEmpty()) {
      this.$5();
    } else {
      this.$1();
    }
  };
  dn.__typeName = "VEL.Skynet.Global.Modals.SharePages.EditTagsSection";
  global.VEL.Skynet.Global.Modals.SharePages.EditTagsSection = dn;
  var dq = function () {};
  dq.__typeName = "VEL.Skynet.Global.Pages.IActivityPage";
  global.VEL.Skynet.Global.Pages.IActivityPage = dq;
  var ds = function () {};
  ds.__typeName = "VEL.Skynet.Global.Pages.IEditorPage";
  global.VEL.Skynet.Global.Pages.IEditorPage = ds;
  var du = function () {};
  du.__typeName = "VEL.Skynet.Global.Pages.IMyActivitiesPage";
  global.VEL.Skynet.Global.Pages.IMyActivitiesPage = du;
  var dw = function () {};
  dw.__typeName = "VEL.Skynet.Global.Pages.IMyItemsPage";
  global.VEL.Skynet.Global.Pages.IMyItemsPage = dw;
  var dy = function () {};
  dy.__typeName = "VEL.Skynet.Global.Pages.IMyResultsPage";
  global.VEL.Skynet.Global.Pages.IMyResultsPage = dy;
  var dA = function () {};
  dA.__typeName = "VEL.Skynet.Global.Pages.IPlayPage";
  global.VEL.Skynet.Global.Pages.IPlayPage = dA;
  var dC = function () {};
  dC.__typeName = "VEL.Skynet.Global.Pages.IResultPage";
  global.VEL.Skynet.Global.Pages.IResultPage = dC;
  var dE = function () {};
  dE.__typeName = "VEL.Skynet.Global.Pages.ModeEnum";
  global.VEL.Skynet.Global.Pages.ModeEnum = dE;
  var dH = function () {
    this.$5 = null;
    this.$8 = null;
    this.$6 = null;
    this.$9 = null;
    this.$7 = null;
    dV.$ctor1.call(this, ".js-context-menu");
    this.$5 = new dS(ss.mkdel(this, this.$2));
    this.$8 = new dU.$ctor4(this.get_domObject(), ".js-open-item", null);
    this.$6 = new dU.$ctor4(this.get_domObject(), ".js-share-link-copy", null);
    this.$9 = new dU.$ctor4(this.get_domObject(), ".js-qr-code", null);
    this.$7 = new dU.$ctor4(this.get_domObject(), ".js-delete-item", null);
  };
  dH.__typeName = "VEL.Skynet.Global.Panels.CurrentAssignmentContextMenu";
  global.VEL.Skynet.Global.Panels.CurrentAssignmentContextMenu = dH;
  ss.initClass(ac, aa, {});
  ss.initClass(a5, aa, {});
  ss.initClass(dF, aa, {});
  ss.initClass(dI, aa, {});
  ss.initClass(dK, aa, {});
  ss.initClass(d6, aa, {
    get_domObject: function () {
      return this.$1$1;
    },
    set_domObject: function (a) {
      this.$1$1 = a;
    },
    get_element: function () {
      return this.get_domObject().get(0);
    },
    get_html: function () {
      return this.get_domObject().html();
    },
    set_html: function (a) {
      this.get_domObject().html(a);
    },
    get_text: function () {
      return this.get_domObject().text();
    },
    set_text: function (a) {
      this.get_domObject().text(a);
    },
    onClick: function (a, b, c) {
      if (ss.staticEquals(a, null)) {
        return;
      }
      this.onClick$1(
        null,
        function (d) {
          a();
        },
        b,
        c
      );
    },
    onClick$1: function (a, b, c, d) {
      if (ss.staticEquals(b, null)) {
        return;
      }
      this.get_domObject().on("click", a, function (e) {
        if (c && (e.ctrlKey || e.altKey || e.shiftKey)) {
          return;
        }
        if (d) {
          e.preventDefault();
          e.stopPropagation();
        }
        b(e.currentTarget);
      });
    },
    onHover: function (a, b) {
      if (!ss.staticEquals(a, null)) {
        this.get_domObject().on("mouseover", function (c) {
          a();
        });
      }
      if (!ss.staticEquals(b, null)) {
        this.get_domObject().on("mouseout", function (c) {
          b();
        });
      }
    },
    offClick: function () {
      this.get_domObject().off("click");
    },
    onBlur: function (a) {
      this.get_domObject().on("blur", function (b) {
        b.preventDefault();
        b.stopPropagation();
        a();
      });
    },
    get_children: function () {
      return Enumerable.from(this.get_domObject().children().get())
        .select(function (a) {
          return new d6(a);
        })
        .toArray();
    },
    find: function (a) {
      return function (b) {
        return ss.cast(new a(this.get_domObject().find(b)), a);
      };
    },
    get_exists: function () {
      return this.get_domObject().length > 0;
    },
    empty: function () {
      this.get_domObject().empty();
    },
    get_isEmpty: function () {
      var a = this.get_domObject().text();
      return ss.isNullOrEmptyString(a.trim());
    },
    animate: function (a, b, c, d, e) {
      var f = {};
      f[a] = b;
      this.get_domObject().stop().animate(f, c, e, d);
    },
    focus: function () {
      this.get_domObject().focus();
    },
    fadeIn: function (a) {
      this.set_isVisible(true);
      this.get_domObject().fadeIn(a);
    },
    fadeOut: function (a) {
      this.get_domObject().fadeOut(a);
      window.setTimeout(
        ss.mkdel(this, function () {
          this.set_isVisible(false);
        }),
        a
      );
    },
    fadeInOut: function (a, b, c) {
      this.fadeIn(a);
      window.setTimeout(
        ss.mkdel(this, function () {
          this.fadeOut(c);
        }),
        b + a
      );
    },
    remove: function () {
      this.get_domObject().remove();
      this.set_domObject(null);
    },
    replaceWith: function (a) {
      this.get_domObject().replaceWith(a);
    },
    get_isHighlighted: function () {
      return this.hasClass("highlighted");
    },
    set_isHighlighted: function (a) {
      if (a) {
        this.addClass("highlighted");
      } else {
        this.removeClass("highlighted");
      }
    },
    get_isHovered: function () {
      if (this.get_domObject().length < 1) {
        return false;
      }
      return $(this.get_domObject()[0]).is(":hover");
    },
    get_isChecked: function () {
      return this.get_domObject().prop("checked");
    },
    set_isChecked: function (a) {
      this.get_domObject().prop("checked", a);
    },
    getData: function (a, b, c) {
      var d = this.get_domObject();
      var e;
      do {
        e = d.attr("data-" + a);
        if (ss.isValue(e) || c === false) {
          break;
        }
        d = d.parent();
        if (ss.isNullOrUndefined(d) || d.length === 0) {
          break;
        }
      } while (true);
      if (ss.isNullOrUndefined(e)) {
        return b;
      }
      return e;
    },
    getDataAsInt: function (a, b, c) {
      var d = this.getData(a, null, c);
      var e = {};
      if (ss.Int32.tryParse(d, e)) {
        return e.$;
      }
      return b;
    },
    getDataAsIntList: function (a, b) {
      var c = this.getData(a, null, b).split(",");
      var d = [];
      var e = {};
      for (var f = 0; f < c.length; f++) {
        var g = c[f];
        if (ss.Int32.tryParse(g, e)) {
          d.push(e.$);
        }
      }
      return d;
    },
    getDataAsBool: function (a, b, c) {
      var d = this.getData(a, null, c);
      if (ss.isNullOrUndefined(d)) {
        return b;
      }
      return d.toLowerCase() === "true";
    },
    getAttribute: function (a) {
      return this.get_domObject().attr(a);
    },
    getAttributeAsNullableInt: function (a) {
      var b = {};
      return ss.Int32.tryParse(this.getAttribute(a), b) ? b.$ : null;
    },
    setAttribute: function (a, b) {
      this.get_domObject().attr(a, ss.isValue(b) ? b.toString() : null);
    },
    removeAttribute: function (a) {
      this.get_domObject().removeAttr(a);
    },
    addClass: function (a) {
      this.get_domObject().addClass(a);
    },
    removeClass: function (a) {
      this.get_domObject().removeClass(a);
    },
    hasClass: function (a) {
      return this.get_domObject().hasClass(a);
    },
    height: function () {
      return this.get_domObject().height();
    },
    height$1: function (a) {
      this.get_domObject().height(a);
    },
    width: function () {
      return this.get_domObject().width();
    },
    width$1: function (a) {
      this.get_domObject().width(a);
    },
    width$2: function (a) {
      this.get_domObject().width(a);
    },
    get_outerWidth: function () {
      return this.get_domObject().outerWidth(true);
    },
    get_outerHeight: function () {
      return this.get_domObject().outerHeight(true);
    },
    CSS: function (a, b) {
      this.get_domObject().css(a, b);
    },
    CSS$1: function (a, b) {
      this.get_domObject().css(a, b);
    },
    prepend: function (a) {
      this.prepend$1(a.get_domObject());
    },
    prepend$1: function (a) {
      this.get_domObject().prepend(a);
    },
    append: function (a) {
      this.append$1(a.get_domObject());
    },
    append$1: function (a) {
      this.get_domObject().append(a);
    },
    appendTo: function (a) {
      this.get_domObject().appendTo(a.get_domObject());
    },
    insertAfter: function (a) {
      this.get_domObject().insertAfter(a.get_domObject());
    },
    $0: function (a) {
      this.get_domObject().prependTo(a.get_domObject());
    },
    attribute: function (a) {
      return this.get_domObject().attr(a);
    },
    attribute$1: function (a, b) {
      this.get_domObject().attr(a, b.toString());
    },
    get_isVisible: function () {
      return !this.hasClass("hidden");
    },
    set_isVisible: function (a) {
      if (a) {
        this.removeClass("hidden");
      } else {
        this.addClass("hidden");
      }
    },
    get_isEnabled: function () {
      return !this.get_domObject().prop("disabled");
    },
    setEnable: function (a) {
      if (a) {
        this.enable();
      } else {
        this.disable();
      }
    },
    enable: function () {
      this.get_domObject().removeClass("unavailable");
      this.get_domObject().prop("disabled", false);
      this.get_domObject().prop("readonly", false);
    },
    disable: function () {
      this.get_domObject().addClass("unavailable");
      this.get_domObject().prop("disabled", true);
      this.get_domObject().prop("readonly", true);
    },
    slideUp: function (a, b) {
      this.get_domObject().slideUp(a, b);
    },
    slideDown: function (a, b) {
      this.get_domObject().slideDown(a, b);
    },
  });
  d6.$ctor1.prototype =
    d6.$ctor2.prototype =
    d6.$ctor3.prototype =
    d6.$ctor4.prototype =
      d6.prototype;
  ss.initClass(
    dV,
    aa,
    {
      contains: function (a) {
        return this.get_domObject().find(a.get_domObject()).length !== 0;
      },
      scrollIntoView: function () {
        if (!this.$1) {
          this.$1 = true;
          dF.scrollIntoView(
            this,
            0,
            ss.mkdel(this, function () {
              this.$1 = false;
            })
          );
        }
      },
      get_isAnyPartScrolledIntoView: function () {
        if (!this.get_exists()) {
          return false;
        }
        var a = $(window).scrollTop();
        var b = a + $(window).height();
        var c = this.get_domObject().offset().top;
        var d = c + this.get_domObject().height();
        return (c > a && c < b) || (d > a && d < b) || (c <= a && d >= b);
      },
    },
    d6
  );
  dV.$ctor1.prototype =
    dV.$ctor3.prototype =
    dV.$ctor2.prototype =
      dV.prototype;
  ss.initClass(
    dM,
    aa,
    {
      $4: function (a) {
        this.$9 = new dV.$ctor3(this.get_domObject(), ".js-menu-dropdown");
        if (!this.$9.get_exists()) {
          return;
        }
        this.$8 = new dS.$ctor1(a, ss.mkdel(this, this.$3));
        this.$a = new dV.$ctor3(this.get_domObject(), ".js-menu-inline");
        this.$c = new dU.$ctor4(
          this.get_domObject(),
          ".js-menu-toggle",
          ss.mkdel(this, this.$6)
        );
        this.$7 = new eo.$ctor1(this.get_domObject(), ".js-menu-toggle-icon");
        this.$d = new d6.$ctor3(this.get_domObject(), ".js-more-separator");
        $(window).on(
          "resize",
          ss.mkdel(this, function (f) {
            var g = $(window).width();
            if (this.$e === g) {
              return;
            }
            this.$e = g;
            this.refresh();
          })
        );
        this.$b = [];
        var b = this.$a.get_domObject().find(".js-menu-item").get();
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          var e = new d6(d);
          this.$b.push(e);
          e.get_domObject().on(
            "click",
            ss.mkdel(this, function (f) {
              this.$3();
            })
          );
        }
        this.refresh();
      },
      refresh: function () {
        if (!this.$9.get_exists()) {
          return;
        }
        var a = aB.isPortraitPhoneSized();
        this.set_isVisible(true);
        this.$3();
        var b = Enumerable.from(this.$b).where(function (n) {
          return n.get_isVisible() && !(a && n.hasClass("hide-on-mobile"));
        });
        var c = b.where(function (n) {
          return !n.hasClass("js-never-menu") && !n.hasClass("js-always-menu");
        });
        var d = b.count(function (n) {
          return n.hasClass("js-never-menu");
        });
        var e = b.where(function (n) {
          return n.hasClass("js-always-menu");
        });
        var f = b.any(function (n) {
          return n.hasClass("js-always-menu");
        });
        this.$c.set_isVisible(f);
        var g = e.getEnumerator();
        try {
          while (g.moveNext()) {
            var h = g.current();
            if (!this.$9.contains(h)) {
              h.get_domObject().detach().appendTo(this.$9.get_domObject());
            }
          }
        } finally {
          g.dispose();
        }
        var i = c.getEnumerator();
        try {
          while (i.moveNext()) {
            var j = i.current();
            if (!this.$a.contains(j)) {
              j.get_domObject().detach().appendTo(this.$a.get_domObject());
            }
          }
        } finally {
          i.dispose();
        }
        var k = !this.$2();
        if (k) {
          this.$c.set_isVisible(true);
          var l = c.reverse().getEnumerator();
          try {
            while (l.moveNext()) {
              var m = l.current();
              m.get_domObject().detach().prependTo(this.$9.get_domObject());
              k = !this.$2();
              if (!k) {
                break;
              }
            }
          } finally {
            l.dispose();
          }
          this.$d.set_isVisible(
            Enumerable.from(this.$a.get_children())
              .where(function (n) {
                return n.hasClass("js-menu-item");
              })
              .any(function (n) {
                return n.get_isVisible();
              })
          );
        } else {
          this.$c.set_isVisible(f);
        }
        this.set_isVisible(
          b.any(function (n) {
            return n.get_isVisible();
          })
        );
      },
      $2: function () {
        var a = this.$a.get_children();
        var b = a.filter(function (f) {
          return f.hasClass("js-menu-item") && f.get_isVisible();
        });
        if (Enumerable.from(b).count() === 0) {
          return true;
        }
        var c = Enumerable.from(b).first().get_domObject().position().top;
        if (this.$c.get_isVisible()) {
          var d = this.$c.get_domObject().position().top;
          return c === d;
        } else {
          var e = Enumerable.from(b).last().get_domObject().position().top;
          return c === e;
        }
      },
      $6: function () {
        if (this.$9.get_isVisible()) {
          this.$3();
        } else {
          this.$5();
          var a = this.$9.get_domObject();
          var b = a.offset().top + a.height() + 20;
          var c = window.scrollY + window.innerHeight;
          if (c < b) {
            var d = window.scrollY + (b - c);
            var e = {};
            e.scrollTop = d;
            $("html,body").animate(e, 250);
          }
        }
      },
      $3: function () {
        this.$8.fadeOut$1();
        this.$7.removeClass("fa-chevron-up");
        this.$7.addClass("fa-chevron-down");
        this.$9.set_isVisible(false);
      },
      $5: function () {
        this.$8.fadeIn$1();
        this.$7.addClass("fa-chevron-up");
        this.$7.removeClass("fa-chevron-down");
        this.$9.set_isVisible(true);
      },
    },
    dV
  );
  ss.initClass(
    dO,
    aa,
    {
      info: function (a) {
        var b = Math.ceil(Math.min((40 * this.$6) / this.$a, 40));
        this.$1(b);
        this.$6++;
        this.$3 = a;
      },
      onAssetLoaded: function (a, b) {
        var c = b > 1 ? Math.ceil(Math.min((60 * a) / b, 60)) : 0;
        c += 40;
        this.$1(c);
        this.$2 = a;
      },
      $0: function () {
        if (this.$7 >= 100) {
          return;
        } else {
          if (this.$7 === this.$8) {
            var a;
            if (this.$2 === 0) {
              a = "pct_" + this.$7 + "_log_" + this.$3;
            } else {
              a = "pct_" + this.$7 + "_assets_" + this.$2;
            }
            ac.event("loadingerror", a);
            this.$4.set_text(a);
          } else {
            this.$8 = this.$7;
            window.setTimeout(ss.mkdel(this, this.$0), 15000);
          }
        }
      },
      $1: function (a) {
        this.$7 = a;
        this.$5.set_text(a + "%");
      },
    },
    null,
    [VEL.Skynet.Global.IActivityPreloader]
  );
  ss.initClass(
    dQ,
    aa,
    {
      play$1: function (a, b) {
        if (ss.isValue(b)) {
          this.setVolume(ss.unbox(b));
        }
        this.setSource(a);
        this.play();
      },
      play: function () {
        this.get_element().play();
      },
      pause: function () {
        this.get_element().pause();
      },
      stop: function () {
        this.pause();
        this.seek(0);
      },
      seek: function (a) {
        this.get_element().currentTime = a;
      },
      setSource: function (a) {
        this.stop();
        this.$1.setAttribute("src", a);
        this.get_element().load();
      },
      setVolume: function (a) {
        this.get_element().volume = a;
      },
    },
    d6
  );
  ss.initClass(
    dU,
    aa,
    {
      get_href: function () {
        return this.get_domObject().attr("href");
      },
      set_href: function (a) {
        this.get_domObject().attr("href", a);
      },
      hasLoadingGif: function () {
        return this.get_domObject().hasClass("is-loading");
      },
      resetLoadingGif: function () {
        this.get_domObject().removeClass("is-loading");
        this.get_domObject().find(".js-is-loading").remove();
        this.get_domObject().css("color", "");
        this.get_domObject().prop("disabled", false);
        window.setTimeout(
          ss.mkdel(this, function () {
            this.get_domObject().prop("disabled", false);
          }),
          0
        );
      },
      addLoadingGif: function () {
        if (this.get_domObject().hasClass("is-loading")) {
          return;
        }
        var a =
          !this.get_domObject().hasClass("grey") &&
          !this.get_domObject().hasClass("white") &&
          !this.get_domObject().hasClass("red")
            ? "#spinner_blue"
            : "#spinner_grey";
        var b = $(a).clone();
        b.addClass("js-is-loading");
        b.removeClass("hidden");
        this.get_domObject().addClass("is-loading");
        var c = this.get_domObject().width();
        var d = this.get_domObject().height();
        this.get_domObject().prepend(b);
        this.get_domObject().css("color", "transparent");
        this.get_domObject().width(c);
        this.get_domObject().height(d);
        window.setTimeout(
          ss.mkdel(this, function () {
            this.get_domObject().prop("disabled", true);
          }),
          0
        );
      },
    },
    d6
  );
  dU.$ctor1.prototype =
    dU.$ctor4.prototype =
    dU.$ctor3.prototype =
    dU.$ctor2.prototype =
      dU.prototype;
  ss.initClass(
    dS,
    aa,
    {
      fadeIn$1: function () {
        this.set_isVisible(true);
        this.get_domObject().toggleClass("background-fader-visible", true);
      },
      fadeOut$1: function () {
        this.get_domObject().toggleClass("background-fader-visible", false);
      },
    },
    dU
  );
  dS.$ctor1.prototype = dS.prototype;
  ss.initClass(
    dW,
    aa,
    {
      onClicks: function (a, b, c) {
        if (ss.staticEquals(a, null)) {
          return;
        }
        this.get_domObject().on(
          "click",
          ss.mkdel(this, function (d) {
            if (b && (d.ctrlKey || d.altKey || d.shiftKey)) {
              return;
            }
            var e = $(d.target);
            var f = Enumerable.from(this.$1).firstOrDefault(function (g) {
              return (
                g.get_domObject().is(e) ||
                g.get_domObject().find(e).length !== 0
              );
            }, ss.getDefaultValue(dU));
            if (c) {
              d.preventDefault();
              d.stopPropagation();
            }
            if (ss.isValue(f)) {
              a(f);
            }
          })
        );
      },
      get: function (a) {
        return this.$1[a];
      },
      getEach: function () {
        return this.$1;
      },
      getOthers: function (a) {
        return Enumerable.from(this.$1).where(function (b) {
          return !a.get_domObject().is(b.get_domObject());
        });
      },
    },
    d6
  );
  ss.initClass(dY, aa, {
    get_width: function () {
      return this.$0.width;
    },
    set_width: function (a) {
      this.$0.width = a;
    },
    get_height: function () {
      return this.$0.height;
    },
    set_height: function (a) {
      this.$0.height = a;
    },
    get_context: function () {
      return ss.cast(this.$0.getContext("2d"), CanvasRenderingContext2D);
    },
    getContext2D: function (a) {
      return ss.cast(this.$0.getContext("2d", a), CanvasRenderingContext2D);
    },
    get_isReady: function () {
      return this.$0.clientWidth > 0 && this.$0.clientHeight > 0;
    },
    normalize: function () {
      if (
        this.$0.width !== this.$0.clientWidth ||
        this.$0.height !== this.$0.clientHeight
      ) {
        this.$0.width = this.$0.clientWidth;
        this.$0.height = this.$0.clientHeight;
      }
    },
    on: function (a, b) {
      $(this.$0).on(a, b);
    },
    addClass: function (a) {
      this.$0.classList.add(a);
    },
    removeClass: function (a) {
      if (this.$0.classList.contains(a)) {
        this.$0.classList.remove(a);
      }
    },
    rotate: function () {
      var a = dY.create();
      a.set_width(this.get_width());
      a.set_height(this.get_height());
      a.get_context().drawImage(this.$0, 0, 0);
      this.set_height(a.get_width());
      this.set_width(a.get_height());
      var b = this.get_context();
      b.save();
      b.translate(a.get_height(), 0);
      b.rotate(Math.PI / 2);
      b.drawImage(a.$0, 0, 0);
      b.restore();
    },
    flip: function (a) {
      var b = dY.create();
      b.set_width(this.get_width());
      b.set_height(this.get_height());
      b.get_context().drawImage(this.$0, 0, 0);
      var c = this.get_context();
      c.save();
      if (a) {
        c.translate(b.get_width(), 0);
        c.scale(-1, 1);
      } else {
        c.translate(0, b.get_height());
        c.scale(1, -1);
      }
      c.drawImage(b.$0, 0, 0);
      c.restore();
    },
    getRect: function () {
      return this.$0.getBoundingClientRect();
    },
    crop: function (a, b, c, d) {
      var e = dY.create();
      e.set_width(this.get_width());
      e.set_height(this.get_height());
      e.get_context().drawImage(this.$0, 0, 0);
      this.set_width(c);
      this.set_height(d);
      var f = this.get_context();
      f.fillStyle = "white";
      f.fillRect(0, 0, c, d);
      f.drawImage(e.$0, a, b, c, d, 0, 0, c, d);
    },
    toBase64: function () {
      var a = this.get_context().getImageData(
        0,
        0,
        this.get_width(),
        this.get_height()
      ).data;
      for (var b = 0; b < a.length; b += 12) {
        if (a[b + 3] < 255) {
          var c = this.$0.toDataURL("image/png", null);
          return c.substring(c.indexOf(String.fromCharCode(44)) + 1);
        }
      }
      var d = this.$0.toDataURL("image/jpeg", null);
      var e = this.$0.toDataURL("image/png", null);
      var f = d.length < e.length ? d : e;
      return f.substring(f.indexOf(String.fromCharCode(44)) + 1);
    },
  });
  dY.$ctor1.prototype = dY.prototype;
  ss.initClass(d0, aa, {}, dU);
  d0.$ctor2.prototype = d0.$ctor1.prototype = d0.prototype;
  ss.initClass(
    d2,
    aa,
    {
      setupShowFilters: function () {
        new dU.$ctor3(
          ".js-show-filters",
          ss.mkdel(this, function () {
            $(".js-filters").addClass("open");
            $("#shell_faded_overlay").addClass("open");
            new dU.$ctor3(
              "#shell_faded_overlay",
              ss.mkdel(this, this.$3),
              true
            );
            $("body").css("overflow-y", "hidden");
          }),
          true
        );
      },
      $3: function () {
        $(".js-filters").removeClass("open");
        $("#shell_faded_overlay").removeClass("open");
        $("body").css("overflow-y", "auto");
        this.$a.setSelectedValues(this.$5);
        this.$8.setSelectedValues(this.$4);
      },
      $2: function () {
        this.$7.set_isVisible(
          Enumerable.from(this.$a.getSelectedCheckboxes()).any(function (a) {
            return a.get_isEnabled();
          }) ||
            Enumerable.from(this.$8.getSelectedCheckboxes()).any(function (a) {
              return a.get_isEnabled();
            })
        );
        if (this.$6.get_domObject().is(":visible")) {
          return;
        }
        this.$1();
      },
      $1: function () {
        this.$5 = this.$a.getSelectedValues();
        this.$4 = this.$8.getSelectedValues();
        this.$3();
        this.$9(this.$5, this.$4);
      },
    },
    d6
  );
  ss.initClass(
    d4,
    aa,
    {
      $1: function () {
        if (ss.isValue(this.$5)) {
          this.$5.each(
            ss.mkdel(this, function (b, c) {
              var d = $(c);
              d.html("");
              if (Enumerable.from(this.getSelectedCheckboxes()).any()) {
                d.show();
              } else {
                d.hide();
              }
              var e = Enumerable.from(this.getSelectedCheckboxes())
                .where(function (i) {
                  return i.get_isEnabled();
                })
                .getEnumerator();
              try {
                while (e.moveNext()) {
                  var f = { $: e.current() };
                  var g = $(
                    "<span class='filter-tag' alt='remove filter'>" +
                      f.$.get_domObject().parent().find("label").text() +
                      " <span class='fa fa-times'></span></span>"
                  );
                  d.append(g);
                  var h = new dU(g[0]);
                  h.onClick(
                    ss.mkdel({ selected: f, $this: this }, function () {
                      this.selected.$.set_isChecked(false);
                      this.$this.$4();
                    }),
                    false,
                    true
                  );
                }
              } finally {
                e.dispose();
              }
            })
          );
        }
        if (this.$3.get_exists()) {
          var a = Enumerable.from(this.getSelectedCheckboxes()).count();
          this.$3.CSS$1("display", a === 0 ? "" : "inline-block");
          this.$3.set_text(a.toString());
        }
      },
      getSelectedCheckboxes: function () {
        return Enumerable.from(this.$2).where(function (a) {
          return a.get_isChecked();
        });
      },
      getSelectedValues: function () {
        return Enumerable.from(this.getSelectedCheckboxes())
          .select(function (a) {
            return a.get_domObject().val();
          })
          .toArray();
      },
      setSelectedValues: function (a) {
        for (var b = 0; b < this.$2.length; b++) {
          var c = this.$2[b];
          c.set_isChecked(Enumerable.from(a).contains(c.get_domObject().val()));
        }
        this.$1();
      },
      uncheckAll: function () {
        var a = Enumerable.from(this.$2)
          .where(function (c) {
            return c.get_isEnabled();
          })
          .getEnumerator();
        try {
          while (a.moveNext()) {
            var b = a.current();
            b.set_isChecked(false);
          }
        } finally {
          a.dispose();
        }
        this.$1();
      },
    },
    d6
  );
  ss.initClass(
    d8,
    aa,
    {
      get: function (a) {
        return this.$1[a];
      },
      getEach: function () {
        return this.$1;
      },
      getOthers: function (a) {
        return Enumerable.from(this.$1).where(function (b) {
          return !a.get_domObject().is(b.get_domObject());
        });
      },
      set_areVisible: function (a) {
        for (var b = 0; b < this.$1.length; b++) {
          var c = this.$1[b];
          c.set_isVisible(a);
        }
      },
      get_length: function () {
        return this.$1.length;
      },
    },
    d6
  );
  d8.$ctor1.prototype = d8.prototype;
  ss.initClass(
    ea,
    aa,
    {
      $6: function () {
        this.$b = this.get_domObject()
          .find(".js-current-assignments-table tbody")
          .first();
        this.$e = this.get_domObject()
          .find(".js-current-assignments-container-mobile")
          .first();
        for (var a = 0; a < this.$d.length; a++) {
          var b = this.$d[a];
          var c = this.$4(b);
          this.$b.append(c);
          var d = this.$3(b);
          this.$e.append(d);
        }
      },
      $3: function (a) {
        var b = this.$5(a, true);
        var c = new dU.$ctor4(b, ".js-item-menu", null);
        c.get_domObject().on(
          "click",
          ss.mkdel(this, function (d) {
            this.$9(d, a);
          })
        );
        return b;
      },
      $4: function (a) {
        var b = this.$5(a, false);
        var c = function () {
          new aW(a.PlayUrl).open();
        };
        var d = new dU.$ctor4(b, ".js-share-link-copy", c);
        var e = new dU.$ctor4(b, ".js-share-link-copy-active", c);
        var f = new dU.$ctor4(
          b,
          ".js-qr-code",
          ss.mkdel(this, function () {
            this.$a(a.HomeworkGameId);
          })
        );
        var g = new dU.$ctor4(
          b,
          ".js-delete-item",
          ss.mkdel(this, function () {
            this.$7(a.HomeworkGameId);
          })
        );
        return b;
      },
      $5: function (a, b) {
        var c = ss.isNullOrEmptyString(a.Deadline.Readable)
          ? Strings.result_NoDeadline
          : a.Deadline.Readable;
        var d = b ? "current_assignment_mobile" : "current_assignment";
        var e = ss.htmlEncode(a.Title);
        return aL.buildTemplate(d, [
          e,
          a.NumberOfPlayers,
          a.Modified.Readable,
          c,
          a.ResultsUrl,
        ]);
      },
      $9: function (a, b) {
        var c = a.currentTarget.getBoundingClientRect();
        var d = aB.isRTL();
        var e = d ? ss.Int32.trunc(c.left) - 4 : ss.Int32.trunc(c.right) + 4;
        var f = ss.Int32.trunc(c.top);
        var g = ss.mkdel(this, function () {
          this.$8(b);
        });
        var h = ss.mkdel(this, function () {
          at.copyToClipboard(b.PlayUrl, this.get_domObject());
        });
        var i = ss.mkdel(this, function () {
          this.$a(b.HomeworkGameId);
        });
        var j = ss.mkdel(this, function () {
          this.$2(b.HomeworkGameId);
        });
        this.$c.open(g, h, i, j, e, f, d);
        a.preventDefault();
        a.stopPropagation();
      },
      $8: function (a) {
        window.location.href = a.ResultsUrl;
      },
      $a: function (a) {
        dv.openAsQr(a);
      },
      $7: function (a) {
        var b = new a8(
          Strings.share_Assignment_SureToDelete,
          ss.mkdel(this, function () {
            this.$2(a);
          }),
          null,
          null
        );
        b.open();
      },
      $2: function (a) {
        var b = "/myresultsajax/deletehomework?homeworkGameId=" + a;
        $.ajax({
          type: "GET",
          url: b,
          error: ag.networkErrorAndReload,
          success: ss.mkdel(this, function (c, d, e) {
            if (ag.isFail(c)) {
              ag.error(null);
            } else {
              if (ss.isValue(a5.activityPage)) {
                a5.activityPage.updateAssignments();
              } else {
                var f = Enumerable.from(this.$d).indexOf(function (g) {
                  return g.HomeworkGameId === a;
                });
                ss.removeAt(this.$d, f);
                this.$b.children()[f].remove();
                this.$e.children()[f].remove();
              }
            }
          }),
        });
      },
      $1: function (a) {
        $(".js-share-link-copy", this.get_domObject()).show();
        $(".js-share-link-copy-active", this.get_domObject()).hide();
        $(".js-share-link-copy", a).hide();
        $(".js-share-link-copy-active", a).show();
      },
    },
    d6
  );
  ss.initClass(
    dG,
    aa,
    {
      get_isEmpty: function () {
        return (
          this.get_domObject().length === 0 || this.get_value().length === 0
        );
      },
      get_value: function () {
        return this.get_domObject().val();
      },
      set_value: function (a) {
        this.get_domObject().val(a);
      },
      get_maxLength: function () {
        var a = this.get_domObject().attr("maxlength");
        if (ss.isNullOrEmptyString(a)) {
          return null;
        }
        return parseInt(a);
      },
      set_maxLength: function (a) {
        if (ss.isNullOrUndefined(a)) {
          this.get_domObject().removeAttr("maxlength");
        } else {
          this.get_domObject().attr("maxlength", ss.unbox(a).toString());
        }
      },
      blur: function () {
        this.get_domObject().blur();
      },
      selectEnd: function () {
        if (window.matchMedia("(pointer: coarse)").matches) {
          return;
        }
        var a = this.get_value();
        this.set_value("");
        this.focus();
        this.set_value(a);
      },
      selectAll: function () {
        var a = this.get_domObject().get(0);
        switch (a.tagName.toLowerCase()) {
          case "textarea":
            break;
          case "input":
            break;
        }
        this.get_domObject().select();
      },
      get_files: function () {
        var a = this.get_element();
        return ss.cast(
          a,
          ss.isValue(a) &&
            ss.isInstanceOfType(a, Element) &&
            a.tagName === "INPUT"
        ).files;
      },
      setAccepts: function (a) {
        this.get_domObject().attr("accepts", a.join(","));
      },
      onEnter: function (a) {
        this.get_domObject().on("keydown", function (b) {
          if (b.keyCode === 13 || b.which === 13) {
            b.preventDefault();
            b.stopPropagation();
          }
        });
        this.get_domObject().on("keyup", function (b) {
          if (b.keyCode === 13 || b.which === 13) {
            b.preventDefault();
            b.stopPropagation();
            a();
          }
        });
      },
      onKeyUp: function (a) {
        this.get_domObject().on("keyup", function (b) {
          if (!a(b.keyCode)) {
            b.stopPropagation();
            b.preventDefault();
          }
        });
      },
      onKeyDown: function (a) {
        this.get_domObject().on("keydown", function (b) {
          if (!a(b.keyCode)) {
            b.stopPropagation();
            b.preventDefault();
          }
        });
      },
      onChange: function (a, b) {
        this.get_domObject().on(b ? "change input" : "change", function (c) {
          a();
        });
      },
      offChange: function () {
        this.get_domObject().off("change input");
      },
      setEnable$1: function (a) {
        if (a) {
          this.enable$1();
        } else {
          this.disable$1();
        }
      },
      enable$1: function () {
        this.get_domObject().removeClass("unavailable");
        this.get_domObject().prop("disabled", false);
        this.get_domObject().prop("readonly", false);
      },
      disable$1: function () {
        this.get_domObject().addClass("unavailable");
        this.get_domObject().prop("disabled", true);
        this.get_domObject().prop("readonly", true);
      },
      copy: function () {
        this.selectAll();
        document.execCommand("copy");
      },
      get_hasValidationError: function () {
        return this.hasClass("invalid");
      },
      setupValidation: function (a, b, c, d) {
        if (!this.get_exists()) {
          return;
        }
        if (b) {
          if (ss.staticEquals(a, null)) {
            throw new ss.ArgumentException();
          }
          this.$7 = ss.mkdel(this, function () {
            this.$2();
            a();
          });
        } else {
          this.$7 = a || ss.mkdel(this, this.$2);
        }
        this.$5 = new d6.$ctor2(
          this.get_domObject().siblings(".js-validation-icon-wrapper").first()
        );
        this.$4 = new d6.$ctor2(
          this.$5.get_domObject().find(".js-validation-icon")
        );
        this.$6 = new d6.$ctor2(
          this.$5.get_domObject().find(".js-validation-optional")
        );
        var e = 0;
        var f = this.get_value();
        this.get_domObject().on(
          "input",
          ss.mkdel(this, function (i) {
            this.get_domObject().removeAttr("data-input-is-valid");
          })
        );
        var g = this.get_domObject().attr("type");
        var h = g === "file" || g === "hidden" ? "change" : "input";
        this.get_domObject().on(
          h,
          ss.mkdel(this, function (i) {
            var j = this.getAttribute("data-input-is-valid");
            var k = ss.isValue(j) && j.toLowerCase() === "true";
            if (ss.referenceEquals(this.get_value(), f) || k) {
              return;
            }
            f = this.get_value();
            this.validate(3);
            if (e !== 0) {
              window.clearTimeout(e);
            }
            if (!ss.staticEquals(c, null)) {
              c();
            }
            e = window.setTimeout(this.$7, 500);
          })
        );
        if (!ss.staticEquals(c, null)) {
          c();
        }
        if (d) {
          this.$7();
        }
      },
      configureDoubleInput: function (a, b) {
        var c = {};
        this.onChange(
          ss.mkdel({ value: c, $this: this }, function () {
            if (ss.tryParseFloat(this.$this.get_value(), this.value)) {
              b(this.value.$);
            }
          }),
          false
        );
        this.set_value(a.toString());
      },
      $2: function () {
        var a = this.get_value().length;
        if (a > 50) {
          this.validate(2);
        } else {
          if (a > 0) {
            this.validate(1);
          } else {
            this.validate(3);
          }
        }
      },
      validate: function (a) {
        switch (a) {
          case 0:
            this.$7();
            break;
          case 1:
            this.removeClass("invalid");
            this.addClass("valid");
            this.$4.addClass("valid");
            this.$4.removeClass("invalid");
            this.$4.addClass("fa-circle-check");
            this.$4.removeClass("fa-xmark");
            this.$3();
            this.$4.set_isVisible(true);
            this.$6.set_isVisible(false);
            break;
          case 2:
            this.removeClass("valid");
            this.addClass("invalid");
            this.$4.removeClass("valid");
            this.$4.addClass("invalid");
            this.$4.removeClass("fa-circle-check");
            this.$4.addClass("fa-xmark");
            this.$3();
            this.$4.set_isVisible(true);
            break;
          case 4:
            this.$3();
            this.removeClass("invalid");
            this.removeClass("valid");
            this.$4.removeClass("valid");
            this.$4.removeClass("invalid");
            this.$4.addClass("fa-circle-check");
            this.$4.removeClass("fa-xmark");
            this.$4.set_isVisible(true);
            this.$6.set_isVisible(true);
            break;
          case 3:
            if (
              this.get_domObject().length > 0 &&
              !ss.isNullOrEmptyString(this.get_value())
            ) {
              this.$4.set_isVisible(false);
              this.removeClass("invalid");
              this.removeClass("valid");
              this.$4.removeClass("valid");
              this.$4.removeClass("invalid");
              this.$4.addClass("fa-circle-check");
              this.$4.removeClass("fa-xmark");
              this.$1();
            } else {
              this.validate(4);
            }
            break;
        }
      },
      $3: function () {
        this.$5.get_domObject().find(".js-loading-gif").remove();
      },
      $1: function () {
        var a = this.$5.get_domObject().find(".js-loading-gif");
        if (a.length === 0) {
          this.$5
            .get_domObject()
            .append(
              "<span class='js-loading-gif'><img src='https://skynetsites.github.io/perguntas-torta-na-cara/static/content/images/input_loading.gif'></span>"
            );
        }
      },
      setReadonly: function (a) {
        this.get_domObject().prop("readonly", a);
      },
    },
    d6
  );
  dG.$ctor2.prototype =
    dG.$ctor1.prototype =
    dG.$ctor3.prototype =
    dG.$ctor4.prototype =
    dG.$ctor5.prototype =
      dG.prototype;
  ss.initClass(
    ec,
    aa,
    {
      $8: function () {
        $(document).find("#ui-datepicker-div").addClass("notranslate");
      },
    },
    dG
  );
  ss.initEnum(ee, aa, { none: 0, ok: 1, blocked: 2 });
  ss.initClass(
    eg,
    aa,
    {
      get_status: function () {
        return this.$5;
      },
      set_status: function (a) {
        if (this.$5 === a) {
          return;
        }
        this.$5 = a;
        switch (a) {
          case 0:
            this.$4.set_isVisible(false);
            this.$1.set_isVisible(false);
            break;
          case 1:
            this.$4.set_isVisible(true);
            this.$1.set_isVisible(false);
            break;
          case 2:
            this.$4.set_isVisible(false);
            this.$1.set_isVisible(true);
            break;
        }
      },
      setPosition: function (a, b) {
        this.$6 = a;
        this.$7 = b;
        this.CSS("left", a + 12);
        this.CSS("top", b + 12);
      },
      hasMoved: function (a, b) {
        return (
          (this.$6 - a) * (this.$6 - a) + (this.$7 - b) * (this.$7 - b) > 20
        );
      },
      setItemName: function (a) {
        this.$3.set_text(a);
      },
      setItemImage: function (a) {
        this.$2.get_domObject().attr("src", a);
      },
    },
    d6
  );
  ss.initClass(
    ei,
    aa,
    {
      $1: function () {
        this.$3.removeClass("open");
        this.$4.get_domObject().hide();
        this.$5.get_domObject().show();
      },
      $2: function () {
        this.$3.addClass("open");
        this.$4.get_domObject().show();
        this.$5.get_domObject().hide();
      },
    },
    d6
  );
  ss.initClass(ek, aa, {}, d6);
  ss.initClass(
    em,
    aa,
    {
      submitByAjax: function (a, b) {
        $.ajax({
          url: this.$1,
          type: "POST",
          data: this.serialize(),
          success: function (c, d, e) {
            if (!ss.staticEquals(a, null)) {
              a(c);
            }
          },
          error: function (c, d, e) {
            if (!ss.staticEquals(b, null)) {
              b();
            }
          },
        });
      },
      submit: function () {
        this.get_domObject().submit();
      },
      serialize: function () {
        return this.get_domObject().serialize();
      },
      getFormData: function () {
        return Enumerable.from(this.get_domObject().serializeArray()).toObject(
          function (a) {
            return a.name;
          },
          function (a) {
            return a.value.toString();
          }
        );
      },
      setByName: function (a, b) {
        $("input[name=" + a + "]").val(b);
      },
      onSubmit: function (a, b) {
        if (ss.staticEquals(a, null)) {
          return;
        }
        this.get_domObject().on(
          "submit",
          ss.mkdel(this, function (c) {
            if (b) {
              c.preventDefault();
              c.stopPropagation();
            }
            a(this);
          })
        );
      },
    },
    d6
  );
  ss.initClass(eo, aa, {}, d6);
  eo.$ctor1.prototype = eo.prototype;
  ss.initClass(
    ab,
    aa,
    {
      get_src: function () {
        return this.get_domObject().attr("src");
      },
      set_src: function (a) {
        this.get_domObject().attr("src", a);
      },
      print: function () {
        this.focus();
        this.$1.contentWindow.print();
      },
    },
    d6
  );
  ss.initInterface(ad, aa, { onMouseEnter: null, onMouseLeave: null });
  ss.initClass(
    a6,
    aa,
    {
      get_src: function () {
        return this.$2.src;
      },
      set_src: function (a) {
        this.$2.src = a;
      },
      get_isPortrait: function () {
        return this.$2.width < this.$2.height;
      },
      convertToBase64: function (a, b) {
        if (ss.isValue(b) && ss.unbox(b) <= 0) {
          throw new ss.ArgumentException(
            b + " is not a valid value. It must be positive.",
            "maxImageSize"
          );
        }
        var c = ss.isNullOrUndefined(b) ? 200 : ss.unbox(b);
        var d = this.$1(a, c);
        return d.toBase64();
      },
      copyToCanvas: function (a) {
        a.set_width(this.$2.naturalWidth);
        a.set_height(this.$2.naturalHeight);
        a.get_context().drawImage(this.$2, 0, 0);
      },
      $1: function (a, b) {
        var c = dY.create();
        if (a > b) {
          var d = Math.sqrt(a / b);
          c.set_width(ss.Int32.trunc(this.$2.naturalWidth / d));
          c.set_height(ss.Int32.trunc(this.$2.naturalHeight / d));
        } else {
          c.set_width(this.$2.naturalWidth);
          c.set_height(this.$2.naturalHeight);
        }
        c.get_context().drawImage(
          this.$2,
          0,
          0,
          this.$2.naturalWidth,
          this.$2.naturalHeight,
          0,
          0,
          c.get_width(),
          c.get_height()
        );
        return c;
      },
    },
    d6
  );
  a6.$ctor1.prototype = a6.prototype;
  ss.initClass(
    dJ,
    aa,
    {
      get: function (a) {
        return this.$1[a];
      },
      getEach: function () {
        return this.$1;
      },
    },
    d6
  );
  ss.initClass(
    dL,
    aa,
    {
      onChange: function (a) {
        this.$2 = a;
        this.get_domObject().on(
          "change",
          ss.mkdel(this, function (b) {
            this.$2(this.get_value());
          })
        );
      },
      offChange: function () {
        this.$2 = null;
        this.get_domObject().off("change");
      },
      filterVisibleOptions: function (a) {
        var b = Enumerable.from(a)
          .select(function (c) {
            return c.toString();
          })
          .toArray();
        this.get_domObject()
          .children()
          .each(function (c, d) {
            d.hidden = !ss.contains(b, d.getAttribute("value"));
          });
      },
      get_value: function () {
        return parseInt(this.get_domObject().val());
      },
      set_value: function (a) {
        var b = a.toString();
        if (ss.referenceEquals(b, this.get_domObject().val())) {
          return;
        }
        this.get_domObject().val(b);
        if (!ss.staticEquals(this.$2, null)) {
          this.$2(a);
        }
      },
    },
    ss.makeGenericType(dZ, [ss.Int32])
  );
  ss.initClass(dN, aa, {}, dU);
  ss.initClass(
    dP,
    aa,
    {
      get_intValue: function () {
        var a = { $: ss.coalesce(this.$8, 0) };
        ss.Int32.tryParse(this.get_value(), a);
        return a.$;
      },
      set_intValue: function (a) {
        this.set_value(
          VEL.Skynet.Global.Extensions.NumberExtensions.clamp(
            a,
            this.$a,
            this.$9
          ).toString()
        );
      },
    },
    dG
  );
  ss.initEnum(dR, aa, {
    name$1: 0,
    lastPlayed: 1,
    modified: 2,
    created: 3,
    deadline: 4,
    plays: 5,
  });
  ss.initClass(
    dT,
    aa,
    {
      get_canToggle: function () {
        return this.$3$1;
      },
      set_canToggle: function (a) {
        this.$3$1 = a;
      },
      get_ascending: function () {
        return this.$4.hasClass("fa-sort-up");
      },
      set_ascending: function (a) {
        if (a) {
          this.$4.addClass("fa-sort-up");
          this.$4.removeClass("fa-sort-down");
        } else {
          this.$4.addClass("fa-sort-down");
          this.$4.removeClass("fa-sort-up");
        }
      },
      get_selected: function () {
        return this.get_domObject().hasClass("is-selected");
      },
      set_selected: function (a) {
        this.$3(!a);
        if (a) {
          this.get_domObject().addClass("is-selected");
          this.$4.removeClass("transparent");
        } else {
          this.get_domObject().removeClass("is-selected");
          this.$4.addClass("transparent");
        }
      },
      $1: function () {
        if (this.get_selected() && !this.get_canToggle()) {
          return;
        }
        this.$6(
          this.$5,
          this.get_selected() ? !this.get_ascending() : this.get_ascending()
        );
      },
      $2: function () {
        return this.$4.hasClass("transparent");
      },
      $3: function (a) {
        if (a) {
          this.$4.addClass("transparent");
        } else {
          this.$4.removeClass("transparent");
        }
      },
    },
    dU
  );
  ss.initClass(
    dX,
    aa,
    {
      onChange: function (a) {
        this.get_domObject().on("change", function (b) {
          a();
        });
      },
      offChange: function () {
        this.get_domObject().off("change");
      },
      get_value: function () {
        return parseInt($(dX.$0(this.$1) + ":checked").val());
      },
      set_value: function (a) {
        $(dX.$0(this.$1) + "[value=" + a + "]").prop("checked", true);
      },
      get_inputs: function () {
        return Enumerable.from($(dX.$0(this.$1)).get())
          .select(function (a) {
            return $(a);
          })
          .toArray();
      },
    },
    dU
  );
  dX.$ctor1.prototype = dX.prototype;
  ss.initClass(d1, aa, {
    add_shareNative: function (a) {
      this.$1$1 = ss.delegateCombine(this.$1$1, a);
    },
    remove_shareNative: function (a) {
      this.$1$1 = ss.delegateRemove(this.$1$1, a);
    },
    $3: function () {
      d1.$2(this.$7, this.$1$1);
    },
    add_shareByFacebook: function (a) {
      this.$1$2 = ss.delegateCombine(this.$1$2, a);
    },
    remove_shareByFacebook: function (a) {
      this.$1$2 = ss.delegateRemove(this.$1$2, a);
    },
    $1: function () {
      d1.$2(this.$5, this.$1$2);
    },
    add_shareByPinterest: function (a) {
      this.$1$3 = ss.delegateCombine(this.$1$3, a);
    },
    remove_shareByPinterest: function (a) {
      this.$1$3 = ss.delegateRemove(this.$1$3, a);
    },
    $2: function () {
      d1.$2(this.$6, this.$1$3);
    },
    add_shareByEmbed: function (a) {
      this.$1$4 = ss.delegateCombine(this.$1$4, a);
    },
    remove_shareByEmbed: function (a) {
      this.$1$4 = ss.delegateRemove(this.$1$4, a);
    },
    $0: function () {
      d1.$2(this.$4, this.$1$4);
    },
  });
  ss.initClass(
    d3,
    aa,
    {
      onChange: function (a) {
        this.$2 = a;
        this.get_domObject().on(
          "change",
          ss.mkdel(this, function (b) {
            this.$2(this.get_value());
          })
        );
      },
      offChange: function () {
        this.$2 = null;
        this.get_domObject().off("change");
      },
      filterVisibleOptions: function (a) {
        this.get_domObject()
          .children()
          .each(function (b, c) {
            c.hidden = !ss.contains(a, c.getAttribute("value"));
          });
      },
      get_value: function () {
        return this.get_domObject().val();
      },
      set_value: function (a) {
        if (ss.referenceEquals(a, this.get_domObject().val())) {
          return;
        }
        this.get_domObject().val(a);
        if (!ss.staticEquals(this.$2, null)) {
          this.$2(a);
        }
      },
    },
    ss.makeGenericType(dZ, [String])
  );
  ss.initEnum(d5, aa, { initialize: 0, pass: 1, fail: 2, reset: 3, clear: 4 });
  ss.initClass(
    d9,
    aa,
    {
      get_info: function () {
        return this.$3$1;
      },
      set_info: function (a) {
        this.$3$1 = a;
      },
      setupDragAndDrop: function (a) {
        this.get_domObject().on(
          "mouseenter",
          ss.mkdel(this, function (b) {
            a.onMouseEnter(this);
          })
        );
        this.get_domObject().on(
          "mouseleave",
          ss.mkdel(this, function (b) {
            a.onMouseLeave(this);
          })
        );
      },
      showDropOver: function () {
        this.addClass("drop-over");
      },
      hideDropOver: function () {
        this.removeClass("drop-over");
      },
    },
    dU
  );
  ss.initClass(d7, aa, {}, d9);
  ss.initClass(
    eb,
    aa,
    {
      setMode: function (a) {
        if (a === this.$5) {
          return;
        }
        var b =
          ss.isNullOrUndefined(this.$5) &&
          ss.isNullOrUndefined(ServerModel.folderIds);
        this.$5 = a;
        if (this.$5 === 1 || this.$5 === 2 || b) {
          this.$2();
        }
      },
      addFolders: function (a) {
        this.$2();
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          ed.create(this.$6, this, c);
        }
      },
      $2: function () {
        this.empty();
        if (this.$5 === 1) {
          d7.create(this.$6, this);
          ej.create(this);
        } else {
          if (this.$5 === 2) {
            d7.create(this.$6, this);
            eh.create(this);
          } else {
            if (this.$5 === 3) {
              ef.create(this.$6, this, this.$3, ServerModel.authorUsername);
            } else {
              if (this.$5 === 0) {
                ef.create(this.$6, this, this.$3, this.$4);
              }
            }
          }
        }
      },
    },
    dV
  );
  ss.initClass(ed, aa, {}, d9);
  ss.initClass(ef, aa, {}, d9);
  ss.initClass(eh, aa, {}, d9);
  ss.initClass(ej, aa, {}, d9);
  ss.initClass(el, aa, {});
  ss.initEnum(en, aa, { all: 0, custom: 1, necessary: 2 });
  ss.initClass(ep, aa, {});
  ss.initClass(ae, aa, {});
  ss.initClass(ag, aa, {});
  ss.initClass(ai, aa, {});
  ss.initClass(ak, aa, {});
  ss.initClass(am, aa, {});
  ss.initClass(ao, aa, {});
  ss.initClass(aq, aa, {});
  ss.initClass(at, aa, {});
  ss.initClass(av, aa, {});
  ss.initClass(ax, aa, {});
  ss.initClass(az, aa, {});
  ss.initClass(aB, aa, {});
  ss.initClass(aD, aa, {});
  ss.initClass(aF, aa, {});
  ss.initClass(aH, aa, {
    reportGoogleClassroomError: function (a, b, c) {
      this.reportError(a, b + ": " + aJ.exceptionToLogErrorMessage(c));
    },
    reportError$1: function (a, b, c) {
      this.reportError(a, b + ": " + c.get_message());
    },
    reportError: function (a, b) {
      dF.displayErrorMessage(a, true, 5000);
      ac.error(this.$0, b, null);
    },
  });
  ss.initClass(aJ, aa, {});
  ss.initClass(aL, aa, {
    toString$1: function (a) {
      if (ss.isValue(a) && a.length !== 0) {
        return ss.formatString.apply(null, [this.$2].concat(a));
      } else {
        if (ss.isValue(this.$1) && this.$1.length !== 0) {
          return ss.formatString.apply(null, [this.$2].concat(this.$1));
        } else {
          return this.$2;
        }
      }
    },
    build: function (a) {
      return $(this.toString$1(a));
    },
    $0: function (a) {
      if (!(a.indexOf("data-template") !== -1)) {
        return a;
      }
      var b = $(a);
      var c = b.find("div[data-template]");
      var d = c.get();
      for (var e = 0; e < d.length; e++) {
        var f = d[e];
        var g = f.getAttribute("data-template");
        var h = aL.buildTemplate(g, []);
        $(f).first().replaceWith(h);
      }
      return b.get(0).outerHTML;
    },
  });
  ss.initClass(aN, aa, {});
  ss.initClass(aP, aa, {});
  ss.initClass(aR, aa, {});
  ss.initClass(aT, aa, {
    show: function (a) {
      var b = this.$0.build([a]);
      b.find(".js-banner-dismiss").on("click", function (c) {
        b.remove();
      });
      this.$1.append$1(b);
      window.setTimeout(function () {
        b.remove();
      }, 5000);
    },
  });
  ss.initClass(aV, aa, {});
  ss.initClass(aX, aa, {});
  ss.initClass(aZ, aa, {});
  ss.initClass(a1, aa, {});
  ss.initClass(a3, aa, {});
  ss.initClass(af, aa, {
    setStep: function (a, b, c) {},
    getStep: function () {
      return null;
    },
  });
  ss.initClass(ah, aa, {});
  ss.initClass(aj, aa, {
    isBrowserAccepted: function () {
      return ss.isValue(this.$1);
    },
    getCurrentUserState: function () {
      return ss.Task.fromPromise(this.$1.getCurrentUserState(), 0);
    },
    signIn: function (a) {
      return this.$0(a, false);
    },
    forceSignIn: function (a) {
      return this.$0(a, true);
    },
    $0: function (a, b) {
      var c = 0,
        d = new ss.TaskCompletionSource(),
        e,
        f;
      var g = ss.mkdel(this, function () {
        try {
          $sm1: for (;;) {
            switch (c) {
              case 0:
                c = -1;
                if (b) {
                  e = ss.Task.fromPromise(this.$1.forceSignIn(), 0);
                  c = 1;
                  e.continueWith(g);
                  return;
                } else {
                  f = ss.Task.fromPromise(this.$1.signIn(), 0);
                  c = 2;
                  f.continueWith(g);
                  return;
                }
              case 1:
                c = -1;
                d.setResult(e.getAwaitedResult());
                return;
              case 2:
                c = -1;
                d.setResult(f.getAwaitedResult());
                return;
              default:
                break $sm1;
            }
          }
        } catch (h) {
          d.setException(ss.Exception.wrap(h));
        }
      });
      g();
      return d.task;
    },
    signOut: function () {
      return ss.Task.fromPromise(this.$1.signOut());
    },
    listMyTeacherCourses: function () {
      return ss.Task.fromPromise(this.$1.listMyTeacherCourses(), 0);
    },
    listCourseStudents: function (a) {
      return ss.Task.fromPromise(this.$1.listCourseStudents(a), 0);
    },
    createCourseWork: function (a, b) {
      return ss.Task.fromPromise(this.$1.createCourseWork(a, b), 0);
    },
    publishCourseWork: function (a, b) {
      return ss.Task.fromPromise(this.$1.publishCourseWork(a, b), 0);
    },
    listCourseWorkStudentSubmissions: function (a, b) {
      return ss.Task.fromPromise(
        this.$1.listCourseWorkStudentSubmissions(a, b),
        0
      );
    },
    getMyCourseWorkStudentSubmission: function (a, b) {
      return ss.Task.fromPromise(
        this.$1.getMyCourseWorkStudentSubmission(a, b),
        0
      );
    },
    turnInStudentSubmission: function (a, b, c) {
      return ss.Task.fromPromise(this.$1.turnInStudentSubmission(a, b, c));
    },
    uploadDraftScores: function (a) {
      return ss.Task.fromPromise(this.$1.uploadDraftScores(a));
    },
  });
  ss.initClass(al, aa, {});
  ss.initClass(an, aa, {});
  ss.initClass(ap, aa, {});
  ss.initClass(ar, aa, {});
  ss.initClass(au, aa, {});
  ss.initClass(aw, aa, {});
  ss.initClass(ay, aa, {});
  ss.initClass(aA, aa, {});
  ss.initClass(aC, aa, {});
  ss.initClass(aE, aa, {});
  ss.initClass(aG, aa, {});
  ss.initClass(aI, aa, {});
  ss.initClass(aK, aa, {});
  ss.initClass(aM, aa, {});
  ss.initClass(aO, aa, {});
  ss.initClass(aQ, aa, {});
  ss.initEnum(aS, aa, { $3: 0, $2: 1, $0: 2, $1: 3 });
  ss.initClass(dc, aa, {
    get_domObject: function () {
      return this.$c.get_domObject();
    },
    open: function () {
      dc.closeActiveModal();
      dc.$0 = this;
      this.$a = true;
      dF.hideMessage();
      this.$c = new d6.$ctor1(".js-modal-view-wrapper");
      this.$1 = new d6.$ctor1(".js-modal-view-bg");
      this.$b = new dV.$ctor1(".js-modal-view");
      this.$1.onClick(
        ss.mkdel(this, this.onBackgroundOrCloseButtonClick),
        false,
        true
      );
      var a = aL.buildTemplate("modal_template", [this.$4, this.$d]);
      this.$b.append$1(a);
      this.$b.width$2("");
      this.$8 = new dV.$ctor1(".js-modal-view-box");
      this.$3 = new dV.$ctor1(".js-modal-content");
      this.$6 = new d6.$ctor1(".js-modal-header");
      this.$7 = new d6.$ctor1(".js-modal-header-text");
      this.$5 = new d6.$ctor1(".js-modal-footer-wrapper");
      this.hideHeader();
      this.initialize();
      var b = new dU.$ctor3(
        ".js-close-modal-view",
        ss.mkdel(this, this.onBackgroundOrCloseButtonClick),
        true
      );
      if (Enumerable.from(this.$2).any()) {
        this.$5.append$1($("<div class='clear'></div>"));
      }
      window.requestAnimationFrame(
        ss.mkdel(this, function (c) {
          this.resize();
        })
      );
      if (!ServerModel.isEmbed) {
        $("body").css("overflow", "hidden");
      }
      dS.forceHide();
      this.$c.fadeIn(250);
    },
    initialize: null,
    onClose: function () {},
    onBackgroundOrCloseButtonClick: function () {
      this.closeModal();
    },
    closeModal: function () {
      if (ss.isNullOrUndefined(dc.$0)) {
        return;
      }
      this.onClose();
      dc.$0 = null;
      this.$a = false;
      this.$b.empty();
      this.$1.offClick();
      this.$c.set_isVisible(false);
      if (!ServerModel.isEmbed) {
        $("body").css("overflow", "auto");
      }
      $(window).trigger("resize");
    },
    setContent: function (a) {
      var b = $("<div>" + a + "</div>");
      this.$0(b);
      return b;
    },
    $0: function (a) {
      this.$3.empty();
      this.$3.append$1(a);
      if (ss.isInstanceOfType(this, di)) {
        return;
      }
      var b = $(".js-modal-content h1");
      var c = b.text();
      if (!ss.isNullOrEmptyString(c)) {
        b.remove();
        this.setHeader(c);
      }
    },
    setHeader: function (a) {
      this.$7.set_html(a);
      this.$7.set_isVisible(true);
    },
    hideHeader: function () {
      this.$7.set_isVisible(false);
    },
    hideHeaderAndClose: function () {
      this.$6.set_isVisible(false);
    },
    addTemplateToModal: function (a, b) {
      var c = aL.buildTemplate(a, b);
      this.$0(c);
    },
    addButton: function (a, b, c) {
      var d = new dN(a, b, c);
      this.$2.push(d);
      this.$5.append$1(d.get_domObject());
      return d;
    },
    centerModalButtons: function () {
      this.$5.CSS$1("text-align", "center");
      var a = $(".js-modal-footer-wrapper button");
      a.css("float", "none");
      a.css("margin-left", "4px");
      a.css("margin-right", "4px");
    },
    resize: function () {
      if (!this.$a) {
        return;
      }
      var a = Math.max(250, $(window).height());
      var b = ss.Int32.trunc(a * 0.9399999999999999);
      this.$b.CSS("max-height", b);
      if (!this.noMaxHeight) {
        var c = a < 500 ? 10 : 100;
        var d =
          this.$b.height() - this.$6.get_outerHeight() - this.$5.height() - c;
        this.$3.CSS("max-height", d);
      }
      var e = Math.min(b, this.$8.get_outerHeight());
      var f = ss.Int32.trunc((a - e) / 2.5);
      this.$b.CSS("top", f);
      if (!this.$9) {
        this.$b.animate(
          "opacity",
          1,
          250,
          ss.mkdel(this, function () {
            this.$9 = false;
          }),
          null
        );
      }
      this.$9 = true;
    },
  });
  ss.initClass(
    aU,
    aa,
    {
      initialize: function () {
        var a =
          "/feedback/aigeneration/" +
          this.$g +
          "?referer=" +
          encodeURIComponent(window.location.href) +
          "&templateId=" +
          ServerModel.templateId;
        if (ss.isValue(this.$e)) {
          a += "&assistClicks=" + this.$e;
        }
        var b = this.setContent(
          "<iframe src='" + a + "' frameBorder='0'></iframe>"
        );
        var c = b.find("iframe");
        c.on(
          "load",
          ss.mkdel(this, function (d) {
            if (
              c.get(0).contentWindow.location.href.toLowerCase() ===
              "about:blank"
            ) {
              this.closeModal();
              return;
            }
            var e = c.get(0);
            var f = ss
              .cast(
                e,
                ss.isValue(e) &&
                  ss.isInstanceOfType(e, Element) &&
                  e.tagName === "IFRAME"
              )
              .contentDocument.getElementsByClassName("js-ok-button")[0];
            f.addEventListener(
              "click",
              ss.mkdel(this, function (g) {
                new d6.$ctor1(this.$f).set_isVisible(false);
              })
            );
          })
        );
      },
    },
    dc
  );
  ss.initClass(
    a2,
    aa,
    {
      get_templateId: null,
      initialize: function () {
        this.addTemplateToModal(this.get_templateId(), []);
        this.$h = new dG.$ctor1(".copylink-modal .js-input-text");
        this.$h.set_value(this.$i);
        this.$g = new dU.$ctor3(
          ".copylink-modal .js-copy-button",
          ss.mkdel(this, this.$e),
          true
        );
        this.$f = new dU.$ctor3(
          ".copylink-modal .js-copy-button-activated",
          ss.mkdel(this, this.$e),
          true
        );
      },
      $e: function () {
        this.$h.copy();
        this.$g.set_isVisible(false);
        this.$f.set_isVisible(true);
      },
    },
    dc
  );
  ss.initClass(
    aW,
    aa,
    {
      get_templateId: function () {
        return "assignmentlink_modal_template";
      },
    },
    a2
  );
  ss.initClass(
    aY,
    aa,
    {
      initialize: function () {
        this.setHeader(this.$g);
        this.addTemplateToModal("cancel_confirm_modal", []);
        this.addButton(
          Strings.account_ManagePayments_ConfirmCancellation,
          ss.mkdel(this, this.$f),
          "medium white focusable js-yes-button"
        );
        this.addButton(
          Strings.account_ManagePayments_StayOnPlan,
          ss.mkdel(this, this.$e),
          "focusable js-no-button"
        );
        this.centerModalButtons();
        $(".js-no-button").focus();
      },
      $f: function () {
        this.closeModal();
        this.$i();
      },
      $e: function () {
        this.closeModal();
        this.$h();
      },
    },
    dc
  );
  ss.initClass(
    a0,
    aa,
    {
      initialize: function () {
        this.addTemplateToModal("cancel_modal_template", []);
        this.centerModalButtons();
        var a = new dX("CancelOption", null);
        a.onClick(
          ss.mkdel(this, function () {
            this.$e(a.get_value());
          }),
          false,
          false
        );
      },
      $e: function (a) {
        this.$g = a;
        this.addTemplateToModal("cancel_modal_reason_template", []);
        var b = new dU.$ctor3(
          ".js-submit-button",
          ss.mkdel(this, function () {
            var c = new dG.$ctor1(".js-cancel-text");
            dc.prototype.closeModal.call(this);
            this.$f(ss.unbox(this.$g), c.get_value());
          }),
          true
        );
      },
      closeModal: function () {
        if (ss.isNullOrUndefined(this.$g)) {
          this.$e(this.$h);
        } else {
          dc.prototype.closeModal.call(this);
          this.$f(ss.unbox(this.$g), "");
        }
      },
    },
    dc
  );
  ss.initClass(
    a4,
    aa,
    {
      initialize: function () {
        this.addTemplateToModal("deadline_modal_template", []);
        this.$e = new ec("#deadline_date", null);
        if (ss.isNullOrEmptyString(this.$g)) {
          this.$f = new dL("#deadline_time", 900, null);
          this.$e.set_value("");
        } else {
          var a = this.$g.split(String.fromCharCode(32));
          var b = Enumerable.from(a).last().split(":");
          var c = parseInt(b[0]) * 100 + parseInt(b[1]);
          this.$f = new dL("#deadline_time", c, null);
          this.$e.set_value(Enumerable.from(a).first());
        }
        this.addButton(
          VEL.Skynet.Core.Toolbox.Extensions.StringExtensions.toCapitalizeWords(
            Strings.result_SetButton,
            ServerModel.languageId
          ),
          ss.mkdel(this, function () {
            this.$h(this.$f.get_text() + " " + this.$e.get_value());
          }),
          "js-set-button"
        );
        this.addButton(
          VEL.Skynet.Core.Toolbox.Extensions.StringExtensions.toCapitalizeWords(
            Strings.result_NoDeadline,
            ServerModel.languageId
          ),
          ss.mkdel(this, function () {
            this.$h("");
          }),
          "white js-remove-button"
        );
      },
    },
    dc
  );
  ss.initClass(
    a7,
    aa,
    {
      initialize: function () {
        this.addTemplateToModal("edit_tags_modal_template", []);
        var a = $(".js-modal-view-box");
        this.$g = new dn(a, this.$f);
        this.addButton(
          Strings.menu_Done,
          ss.mkdel(this, this.$e),
          "js-ok-button"
        );
      },
      $e: function () {
        var a =
          "/resourceajax/settags?activityId=" +
          this.$f +
          "&subjects=" +
          this.$g.getSubjects() +
          "&agebands=" +
          this.$g.getAgeBands() +
          "&topics=" +
          this.$g.getTopics();
        $.ajax(a, {
          data: null,
          type: "GET",
          success: ss.mkdel(this, function (b, c, d) {
            this.closeModal();
            if (!ss.staticEquals(this.$h, null)) {
              this.$h();
            }
          }),
          error: function (b, c, d) {
            dF.displayNetworkErrorMessage();
          },
        });
      },
    },
    dc
  );
  ss.initClass(
    c9,
    aa,
    {
      get_template: function () {
        return "input_modal_template";
      },
      initialize: function () {
        this.addTemplateToModal(this.get_template(), [
          this.$k,
          this.$j,
          this.$h,
        ]);
        this.$g = new dG.$ctor1(".js-input-text");
        this.$g.set_maxLength(this.$h);
        this.button = this.addButton(
          this.$e,
          ss.mkdel(this, function () {
            this.$i(this.$g.get_value());
          }),
          "js-ok-button"
        );
        this.$g.onEnter(
          ss.mkdel(this, function () {
            this.$i(this.$g.get_value());
          })
        );
        this.$g.set_value(this.$f);
        if (this.$l) {
          this.$g.selectAll();
        }
        window.setTimeout(ss.mkdel(this.$g, this.$g.focus), 1);
      },
    },
    dc
  );
  ss.initClass(
    a9,
    aa,
    {
      get_template: function () {
        return "email_input_modal_template";
      },
      initialize: function () {
        c9.prototype.initialize.call(this);
        this.$n = new dG.$ctor1("#email_input");
        this.$n.setupValidation(ss.mkdel(this, this.$m), false, null, false);
        this.button.disable();
      },
      $m: function () {
        if (a3.isEmail(this.$n.get_value())) {
          this.$n.validate(1);
          this.button.enable();
        } else {
          this.$n.validate(2);
          this.button.disable();
        }
      },
    },
    c9
  );
  ss.initClass(
    b1,
    aa,
    {
      initialize: function () {
        this.hideHeader();
        this.setContent(this.$e);
      },
    },
    dc
  );
  ss.initClass(
    b3,
    aa,
    {
      initialize: function () {
        var a =
          "?userId=" +
          this.$h +
          "&templateId=" +
          this.$g +
          "&activityId=" +
          this.$e;
        if (ss.isValue(this.$f)) {
          a += "&printableId=" + this.$f;
        }
        var b = this.setContent(
          "<iframe src='/feedback/experimental/" +
            a +
            "' frameBorder='0'></iframe>"
        );
        var c = b.find("iframe");
        c.on(
          "load",
          ss.mkdel(this, function (d) {
            if (
              c.get(0).contentWindow.location.href.toLowerCase() ===
              "about:blank"
            ) {
              this.closeModal();
            }
          })
        );
      },
    },
    dc
  );
  b3.$ctor1.prototype = b3.prototype;
  ss.initClass(
    b5,
    aa,
    {
      initialize: function () {
        this.addTemplateToModal("export_modal_template", []);
        this.addButton(
          "CSV",
          ss.mkdel(this, function () {
            this.$e(1);
          }),
          "js-export-csv"
        );
        this.addButton(
          "Excel",
          ss.mkdel(this, function () {
            this.$e(0);
          }),
          "js-export-excel"
        );
      },
      $e: function (a) {
        this.closeModal();
        var b = a === 0 ? "excel" : "csv";
        var c = "/resultajax/export?homeworkGameId=" + this.$f + "&format=" + b;
        $("#file_downloader").remove();
        $("body").append(
          "<iframe id='file_downloader' style='display:none;'></iframe>"
        );
        $("#file_downloader").attr("src", c);
      },
    },
    dc
  );
  ss.initClass(
    b7,
    aa,
    {
      initialize: function () {
        var a;
        switch (this.$f) {
          case 0:
            a = "/feedback/";
            break;
          case 1:
            a =
              "/feedback/themes?referer=" +
              encodeURIComponent(window.location.href) +
              "&themeId=" +
              this.$g;
            break;
          case 2:
            a =
              "/feedback/page/" +
              this.$e +
              "?referer=" +
              encodeURIComponent(window.location.href);
            break;
          case 3:
            a =
              "/feedback/switchtemplate?referer=" +
              encodeURIComponent(window.location.href);
            break;
          case 4:
            a =
              "/feedback/leaderboard?referer=" +
              encodeURIComponent(window.location.href);
            break;
          default:
            throw new ss.NotImplementedException();
        }
        var b = this.setContent(
          "<iframe src='" + a + "' frameBorder='0'></iframe>"
        );
        var c = b.find("iframe");
        c.on(
          "load",
          ss.mkdel(this, function (d) {
            if (
              c.get(0).contentWindow.location.href.toLowerCase() ===
              "about:blank"
            ) {
              this.closeModal();
            }
          })
        );
      },
    },
    dc
  );
  ss.initEnum(b9, aa, {
    footer: 0,
    themes: 1,
    page: 2,
    switchTemplate: 3,
    leaderboard: 4,
  });
  ss.initClass(c1, aa, {
    get_color: function () {
      return this.$1$1;
    },
    set_color: function (a) {
      this.$1$1 = a;
    },
    build: function () {
      return aL.buildTemplate("input_color_template", []);
    },
    initialize: function () {
      this.$2 = new dW(".js-color-circle", ss.mkdel(this, this.$1), null);
      var a = this.$2.getEach();
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (this.$0(c) === this.get_color()) {
          c.addClass("selected");
        }
      }
    },
    $1: function (a) {
      this.set_color(this.$0(a));
      a.addClass("selected");
      var b = ss.getEnumerator(this.$2.getOthers(a));
      try {
        while (b.moveNext()) {
          var c = b.current();
          c.removeClass("selected");
        }
      } finally {
        b.dispose();
      }
    },
    $0: function (a) {
      return ss.cast(
        ss.Enum.parse(
          VEL.Skynet.Global.Enums.FolderColor,
          a.getAttribute("data-color").toLowerCase()
        ),
        ss.Int32
      );
    },
  });
  ss.initClass(
    c3,
    aa,
    {
      initialize: function () {
        this.addTemplateToModal("folder_input_color_modal_template", [
          this.prompt,
          this.placeholder,
          this.maxLength,
        ]);
        var a = new c1(0);
        new dG.$ctor1(".js-color-grid").append$1(a.build());
        a.initialize();
        this.input = new dG.$ctor1(".js-input-text");
        this.input.set_maxLength(this.maxLength);
        this.addButton(
          this.$e,
          ss.mkdel(this, function () {
            this.$f(
              this.input.get_value(),
              ss.isNullOrUndefined(a) ? 0 : a.get_color()
            );
          }),
          "js-ok-button"
        );
        this.input.onEnter(
          ss.mkdel(this, function () {
            this.$f(
              this.input.get_value(),
              ss.isNullOrUndefined(a) ? 0 : a.get_color()
            );
          })
        );
        this.input.set_value(this.initialText);
        if (this.selectAll) {
          this.input.selectAll();
        }
        window.setTimeout(ss.mkdel(this.input, this.input.focus), 1);
      },
    },
    dc
  );
  ss.initClass(
    c5,
    aa,
    {
      initialize: function () {
        this.addTemplateToModal("folder_color_modal_template", []);
        var a = new c1(this.$f);
        new dG.$ctor1(".js-color-grid").append$1(a.build());
        a.initialize();
        this.addButton(
          this.$e,
          ss.mkdel(this, function () {
            this.$g(a.get_color());
          }),
          "js-ok-button"
        );
      },
    },
    dc
  );
  ss.initInterface(c7, aa, {
    get_activityId: null,
    get_themeId: null,
    get_activityGuid: null,
    get_longUrl: null,
    get_templateId: null,
    get_title: null,
    set_title: null,
    get_isShared: null,
    set_isShared: null,
    get_isAuthor: null,
    get_homeworkType: null,
    get_hasCopyrightInfringement: null,
    get_screenshot: null,
  });
  ss.initClass(
    de,
    aa,
    {
      get_folderTreeAjaxUrl: null,
      isFolderExcluded: null,
      initialize: function () {
        this.addTemplateToModal("move_modal_template", []);
        var a = new d6.$ctor1(".js-folder-tree");
        $.getJSON(
          this.get_folderTreeAjaxUrl(),
          ss.mkdel(this, function (b) {
            this.$e = b;
            $(".js-tree-loading").hide();
            for (var c = 0; c < b.length; c++) {
              var d = b[c];
              if (!this.isFolderExcluded(d)) {
                ek.create(a, d, this.$f);
              }
            }
            this.resize();
          })
        );
      },
      isFolderInside: function (a, b) {
        var c = Enumerable.from(this.$e).firstOrDefault(function (d) {
          return d.FolderId === b;
        }, ss.getDefaultValue(VEL.Skynet.Global.Json.FolderInfo));
        while (ss.isValue(c)) {
          if (c.FolderId === a) {
            return true;
          }
          if (c.FolderId === 0) {
            break;
          }
          c = Enumerable.from(this.$e).firstOrDefault(function (d) {
            return d.FolderId === c.ParentFolderId;
          }, ss.getDefaultValue(VEL.Skynet.Global.Json.FolderInfo));
        }
        return false;
      },
    },
    dc
  );
  ss.initClass(
    dg,
    aa,
    {
      initialize: function () {
        this.hideHeader();
        this.setContent(this.$f);
        if (this.$f.indexOf("js-ok-button") !== -1) {
          var a = new dU.$ctor3(".js-ok-button", ss.mkdel(this, this.$e), true);
        } else {
          this.addButton(
            Strings.menu_Ok,
            ss.mkdel(this, this.$e),
            "focusable js-ok-button"
          );
          this.centerModalButtons();
        }
        if (!ss.staticEquals(this.$h, null)) {
          this.$h();
        }
      },
      $e: function () {
        this.closeModal();
        if (!ss.staticEquals(this.$g, null)) {
          this.$g();
        }
      },
    },
    dc
  );
  ss.initClass(
    di,
    aa,
    {
      initialize: function () {
        var a = $(".js-modal-content");
        a.on(
          "click",
          ".js-back-step",
          ss.mkdel(this, function (b) {
            this.$e();
          })
        );
      },
      $f: function (a, b) {
        var c = $(".js-step-active");
        var d = $(a.get_$selector());
        c.removeClass("active js-step-active");
        d.addClass("active js-step-active ");
        if (!b) {
          ss.clear(this.$h);
        }
        this.$h.push(a);
      },
      $g: function (a) {
        var b = $(".js-step-active");
        var c = $(a.get_$selector());
        b.removeClass(
          "active slidein back-slideout back-slidein js-step-active"
        ).addClass("slideout deactivating");
        c.removeClass("slideout back-slideout back-slidein").addClass(
          "active slidein js-step-active"
        );
        window.setTimeout(function () {
          b.removeClass("deactivating");
        }, 600);
        if (
          this.$h.length !== 0 &&
          ss.referenceEquals(
            ss.getInstanceType(Enumerable.from(this.$h).last()),
            ss.getInstanceType(a)
          )
        ) {
          ss.removeAt(this.$h, this.$h.length - 1);
        }
        this.$h.push(a);
      },
      $e: function () {
        if (this.$h.length < 2) {
          this.closeModal();
          return;
        }
        ss.removeAt(this.$h, this.$h.length - 1);
        var a = $(".js-step-active");
        var b = $(Enumerable.from(this.$h).last().get_$selector());
        a.removeClass(
          "active back-slidein slideout slidein js-step-active"
        ).addClass("back-slideout deactivating");
        b.removeClass("back-slideout slideout slidein").addClass(
          "active back-slidein js-step-active"
        );
        window.setTimeout(function () {
          a.removeClass("deactivating");
        }, 600);
      },
    },
    dc
  );
  ss.initClass(
    dk,
    aa,
    {
      setup: function () {
        if (this.$l === 1) {
          return;
        }
        if (this.$l === 3) {
          av.cleanUpPolicyUpdateNotificationDismissal();
          if (this.$k) {
            av.removeAllLocalConsents();
          }
        }
        if (this.$j) {
          return;
        }
        if (this.$h()) {
          this.open();
        } else {
          if (this.$i()) {
            av.checkIfConsented(
              1,
              ServerModel.policyVersion,
              ss.mkdel(this, this.open)
            );
          }
        }
      },
      initialize: function () {
        if (this.$l === 3) {
          new dU.$ctor1(".js-close-modal-view").remove();
          this.addTemplateToModal("policy_update_modal_template", []);
          var a = new dU.$ctor3(
            ".js-accept-policy",
            ss.mkdel(this, this.$e),
            true
          );
          var b = new dG.$ctor1(".js-check-policy");
          a.setEnable(false);
          b.onChange(function () {
            a.setEnable(b.get_isChecked());
          }, false);
        } else {
          var c = this.$g(ServerModel.languageCode);
          if (ss.isNullOrUndefined(c)) {
            c = this.$g(navigator.language || navigator.languages[0]);
          }
          var d = c;
          this.addTemplateToModal("policy_update_warning_modal_template", [d]);
          new dU.$ctor3(".js-close-policy", ss.mkdel(this, this.$f), true);
        }
        if (ServerModel.isEmbed) {
          new d6.$ctor1(".js-policy").addClass("embedded");
        }
      },
      $g: function (a) {
        try {
          return new Date(
            VEL.Skynet.Global.Server.Switches.getString(
              VEL.Skynet.Global.Server.Switches.static$1,
              VEL.Skynet.Global.Server.SwitchKeys.updatedPolicyEffectiveDate
            )
          ).toLocaleDateString(a, {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
        } catch (b) {
          return null;
        }
      },
      $e: function () {
        av.accept(1, ServerModel.policyVersion, null);
        this.closeModal();
      },
      $f: function () {
        av.dismissPolicyUpdateNotification();
        this.closeModal();
      },
      onBackgroundOrCloseButtonClick: function () {
        if (this.$l === 3) {
          return;
        }
        this.$f();
      },
      $h: function () {
        return (
          this.$l === 2 &&
          !ServerModel.isEmbed &&
          !av.hasDismissedPolicyUpdateNotification()
        );
      },
      $i: function () {
        return this.$l === 3 && !this.$k;
      },
    },
    dc
  );
  ss.initClass(
    dm,
    aa,
    {
      initialize: function () {},
      onBackgroundOrCloseButtonClick: function () {},
    },
    dc
  );
  ss.initClass(
    dp,
    aa,
    {
      initialize: function () {
        this.addTemplateToModal("pro_required_template", [
          ServerModel.templatesAvailableForUpdate,
        ]);
      },
    },
    dc
  );
  ss.initClass(
    dr,
    aa,
    {
      initialize: function () {
        this.addTemplateToModal("send_as_email_modal_template", []);
        this.addButton(
          Strings.menu_Ok,
          ss.mkdel(this, this.$e),
          "js-send-button"
        );
        this.centerModalButtons();
        this.$g = new dG.$ctor1(".js-send-email-input");
        this.$g.focus();
      },
      $e: function () {
        dc.closeActiveModal();
        var a = this.$g.getAttribute("data-ajax");
        var b = ServerModel.emailData;
        if (ss.isNullOrUndefined(b)) {
          b = ServerModel.dataUrl;
        }
        a +=
          "?data=" +
          b +
          "&languageId=" +
          ServerModel.languageId +
          "&email=" +
          encodeURIComponent(this.$g.get_value()).replace(/%20/g, "+");
        $.ajax({
          url: a,
          success: ss.mkdel(this, function (c, d, e) {
            this.$f(/^\s*true\s*$/i.test(c.toString()));
          }),
          error: function (c, d, e) {
            dF.displayNetworkErrorMessage();
          },
        });
      },
      $f: function (a) {
        if (a) {
          dF.displayMessage(Strings.share_Email_Success, true, 0);
        } else {
          dF.displayErrorMessage(Strings.share_Email_Error, true, 0);
        }
      },
    },
    dc
  );
  ss.initClass(
    dt,
    aa,
    {
      get_templateId: function () {
        return "results_modal_template";
      },
    },
    a2
  );
  ss.initClass(
    dv,
    aa,
    {
      initialize: function () {
        this.addTemplateToModal("share_activity_steps_template", []);
        this.$o = new dV.$ctor1(".js-modal-content");
        if (this.startOnPublish) {
          this.$i();
        } else {
          if (this.startOnAssignment) {
            this.$f(new b4(this), false);
          } else {
            if (this.startOnShareOrAssignment) {
              this.$f(new dj(this, this.isAuthor), false);
            } else {
              if (this.$q) {
                this.$f(
                  new c0(this, this.$j().get_isShared() ? 1 : 0, true),
                  false
                );
              } else {
                if (this.$r) {
                  this.$f(new dh(this, false), false);
                } else {
                  if (ss.isValue(this.$l())) {
                    this.$f(new dl(this, 3), false);
                  }
                }
              }
            }
          }
        }
        if (
          VEL.Skynet.Global.Server.Switches.getInteger(
            VEL.Skynet.Global.Server.Switches.static$1,
            VEL.Skynet.Global.Server.SwitchKeys.unifiedShareModal
          ) === 2
        ) {
          this.$n = window.matchMedia("(max-width: 778px)");
        }
        di.prototype.initialize.call(this);
      },
      $i: function () {
        if (ServerModel.isAuthor || this.$j().get_isAuthor()) {
          this.$f(new c4(this), false);
        }
        if (
          this.$j().get_isShared() ||
          this.$j().get_hasCopyrightInfringement()
        ) {
          this.$f(new dl(this, 1), true);
        }
      },
      $j: function () {
        return this.$3$1;
      },
      $k: function (a) {
        this.$3$1 = a;
      },
      $l: function () {
        return this.$3$2;
      },
      $m: function (a) {
        this.$3$2 = a;
      },
      resize: function () {
        dc.prototype.resize.call(this);
        this.$o.CSS$1(
          "height",
          this.$n.matches ? this.$o.get_domObject().css("max-height") : ""
        );
      },
      getLocation: function () {
        if (this.$p) {
          return 3;
        } else {
          if (this.$r || this.$q) {
            return 4;
          } else {
            if (ss.isValue(this.$l())) {
              return 2;
            } else {
              return 1;
            }
          }
        }
      },
    },
    di
  );
  dv.$ctor1.prototype = dv.prototype;
  ss.initClass(dx, aa, {
    get_tag: function () {
      return this.$1;
    },
    get_title: function () {
      return this.$2;
    },
    get_imageUrl: function () {
      return this.$0;
    },
  });
  ss.initClass(
    dz,
    aa,
    {
      initialize: function () {
        var a = this.$f.get_item(this.$e).get_tag();
        var b = this.$f.get_item(this.$e).get_title();
        var c = this.$f.get_item(this.$e).get_imageUrl();
        this.addTemplateToModal("subscription_required_feature_template", [
          a,
          b,
          c,
        ]);
      },
    },
    dc
  );
  ss.initClass(
    dB,
    aa,
    {
      initialize: function () {
        this.addTemplateToModal("video_modal_template", [this.$e]);
      },
    },
    dc
  );
  ss.initClass(
    dD,
    aa,
    {
      get_exists: function () {
        return new d6.$ctor1("#welcome_back_template").get_exists();
      },
      initialize: function () {
        this.addTemplateToModal("welcome_back_template", []);
        var a = new dU.$ctor3(
          ".js-redirect-to-login-btn",
          ss.mkdel(this, function () {
            window.location.href = "/account/login?user=" + this.$e;
          }),
          true
        );
        var b = new dU.$ctor1(".js-redirect-to-login-link");
        b.set_href(b.get_href() + "?email=" + this.$e);
      },
    },
    dc
  );
  ss.initClass(
    a8,
    aa,
    {
      initialize: function () {
        this.hideHeader();
        this.setContent(this.$g);
        this.addButton(
          Strings.menu_Yes,
          ss.mkdel(this, this.$f),
          "focusable js-yes-button"
        );
        this.addButton(
          Strings.menu_No,
          ss.mkdel(this, this.$e),
          "medium white js-no-button focusable"
        );
        this.centerModalButtons();
        $(".js-yes-button").focus();
        if (!ss.staticEquals(this.$i, null)) {
          this.$i();
        }
      },
      $f: function () {
        this.closeModal();
        if (!ss.staticEquals(this.$j, null)) {
          this.$j();
        }
      },
      $e: function () {
        this.closeModal();
        if (!ss.staticEquals(this.$h, null)) {
          this.$h();
        }
      },
    },
    dc
  );
  ss.initInterface(b0, aa, { get_$domObject: null, get_$selector: null });
  ss.initClass(c6, aa, {}, ss.makeGenericType(b2, [dv]), [b0]);
  ss.initClass(
    b4,
    aa,
    {
      $5: function () {
        var a = new d6.$ctor1(".js-remaining-assignments-wrapper");
        if (!a.get_exists()) {
          return;
        }
        if (ServerModel.assignmentCount === 0) {
          a.set_isVisible(false);
        } else {
          new d6.$ctor1(".js-assignment-count").set_text(
            ServerModel.assignmentCount.toString()
          );
        }
      },
      $c: function () {
        this.$o.offChange();
        this.$o.onChange(ss.mkdel(this, this.$a));
        this.$i.offChange();
        this.$i.onChange(ss.mkdel(this, this.$8), false);
        this.$j.offChange();
        this.$j.onChange(
          ss.mkdel(this, function (a) {
            this.$8();
          })
        );
      },
      $4: function () {
        if (ss.isNullOrEmptyString(this.$u.get_value())) {
          $.get(
            "/resourceajax/suggestresultstitle?activityId=" +
              this.$0.$j().get_activityId(),
            ss.mkdel(this, function (a) {
              this.$u.set_value(a.toString());
            })
          );
        }
      },
      $a: function () {
        this.$s.set_isVisible(
          this.$f() && this.$0.$j().get_homeworkType() === 2
        );
      },
      $6: function () {
        if (ax.areFunctionalGoogleClassroomCookiesAllowed()) {
          return;
        }
        this.$p.disable$1();
        this.$p.addClass("register-radio-gc-cookie-consent");
        this.$r.addClass("register-gc-label-cookie-consent");
        this.$q.set_isVisible(true);
      },
      get_$selector: function () {
        return ".js-step-assignment-setup";
      },
      $8: function () {
        this.$h.set_value(1);
      },
      $7: function () {
        var a = 0,
          b,
          c,
          d;
        var e = ss.mkdel(this, function () {
          $sm1: for (;;) {
            switch (a) {
              case 0:
                a = -1;
                if (this.$t.hasLoadingGif()) {
                  return;
                }
                b = new VEL.Skynet.Global.Json.ShareHomeworkJson();
                b.Title = this.$u.get_value();
                b.EndTimeString = this.$1();
                b.Registration = this.$o.get_value();
                b.GameOver = this.$2();
                c = b;
                if (c.Title.length === 0) {
                  dF.displayErrorMessage(
                    Strings.share_Assignment_MustHaveTitle,
                    true,
                    0
                  );
                  return;
                }
                if (this.$f()) {
                  d = this.$d(c);
                  a = 1;
                  d.continueWith(e);
                  return;
                } else {
                  this.$e(c);
                  a = -1;
                  break $sm1;
                }
              case 1:
                a = -1;
                d.getAwaitedResult();
                a = -1;
                break $sm1;
              default:
                break $sm1;
            }
          }
        });
        e();
      },
      $2: function () {
        return (
          0 |
          (this.$m.get_isChecked() ? 1 : 0) |
          (this.$l.get_isChecked() ? 4 : 0) |
          (this.$k.get_isChecked() ? 2 : 0)
        );
      },
      $1: function () {
        return this.$h.get_value() === 0
          ? ""
          : this.$i.get_value() + " " + this.$j.get_text();
      },
      $f: function () {
        return this.$o.get_value() === 2;
      },
      $e: function (a) {
        this.$b();
        ak.setAssignment(this.$0.$j(), a)
          .then(
            ss.mkdel(this, function (b) {
              this.$0.$m(b);
              this.$0.$g(new dl(this.$0, 2));
              if (ss.isValue(a5.activityPage)) {
                a5.activityPage.updateAssignments();
              }
              if (
                VEL.Skynet.Global.Server.Switches.getInteger(
                  VEL.Skynet.Global.Server.Switches.static$1,
                  VEL.Skynet.Global.Server.SwitchKeys.basicAssignmentLimit
                ) > 0
              ) {
                ServerModel.assignmentCount++;
              }
            }),
            null
          )
          .always(
            ss.mkdel(this, function () {
              this.$9();
            })
          );
      },
      $d: function (a) {
        var b = 0,
          c = new ss.TaskCompletionSource(),
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k;
        var l = ss.mkdel(this, function () {
          var m = true;
          try {
            $sm1: for (;;) {
              switch (b) {
                case 0:
                case 1:
                case 2:
                case 3:
                  if (b === 0) {
                    b = 1;
                  }
                  try {
                    $sm2: for (;;) {
                      switch (b) {
                        case 1:
                          b = -1;
                          this.$b();
                          d = aj.createSetAssignmentClient(
                            ServerModel.googleClassroomClientID,
                            ServerModel.googleClassroomApiKey
                          );
                          b = 2;
                          d.continueWith(l);
                          m = false;
                          return;
                        case 2:
                          b = -1;
                          e = d.getAwaitedResult();
                          f = e.forceSignIn("set-assignment");
                          b = 3;
                          f.continueWith(l);
                          m = false;
                          return;
                        case 3:
                          b = -1;
                          f.getAwaitedResult();
                          this.$0.$g(new dd(this.$0, e, a, this.$3()));
                          b = -1;
                          break $sm2;
                        default:
                          break $sm2;
                      }
                    }
                  } catch (n) {
                    n = ss.Exception.wrap(n);
                    if (ss.isInstanceOfType(n, ss.PromiseException)) {
                      g = ss.cast(n, ss.PromiseException);
                      h = aJ.exceptionToError(g);
                      i = ss.isValue(h) ? h.errorCode : null;
                      switch (i) {
                        case "popup_closed":
                        case "access_denied":
                          this.$0.$g(new df(this.$0));
                          break;
                        default:
                          j = ss.isValue(h) ? h.message : null;
                          k =
                            Strings.myActivities_DefaultError +
                            (!ss.isNullOrEmptyString(j) ? ": " + j : "");
                          dF.displayErrorMessage(k, true, 0);
                          break;
                      }
                    } else {
                      throw n;
                    }
                  } finally {
                    if (m) {
                      this.$9();
                    }
                  }
                  b = -1;
                  break $sm1;
                default:
                  break $sm1;
              }
            }
            c.setResult(null);
          } catch (n) {
            c.setException(ss.Exception.wrap(n));
          }
        });
        l();
        return c.task;
      },
      $b: function () {
        this.$t.addLoadingGif();
        this.$g.disable();
      },
      $9: function () {
        this.$t.resetLoadingGif();
        this.$g.enable();
      },
      $3: function () {
        var a = {};
        if (
          this.$0.$j().get_homeworkType() === 2 &&
          ss.Int32.tryParse(this.$n.get_value(), a)
        ) {
          return a.$;
        } else {
          return null;
        }
      },
    },
    c6,
    [b0]
  );
  ss.initClass(
    b6,
    aa,
    {
      $5: function () {
        return this.$2$1;
      },
      $6: function (a) {
        this.$2$1 = a;
      },
      $4: function () {
        return this.get_domObject().find("label").text();
      },
      $3: function () {
        return parseInt(this.getAttribute("data-id"));
      },
      $1: function () {
        return this.$2$2;
      },
      $2: function (a) {
        this.$2$2 = a;
      },
    },
    d6
  );
  ss.initClass(
    b8,
    aa,
    {
      get_$selector: function () {
        return ".js-step-email";
      },
      $5: function () {
        this.$4();
        this.$7.focus();
      },
      $1: function (a) {
        dF.hideMessage();
        if (a === 188 || a === 32 || a === 13) {
          this.$4();
          this.$7.focus();
          return false;
        }
        return true;
      },
      $6: function () {
        this.$4();
        var a = this.$8
          .get_domObject()
          .find(".js-recognised-email-address-blob");
        if (a.length === 0) {
          dF.displayErrorMessage(Strings.share_Email_MustAddEmail, true, 0);
          this.$9.resetLoadingGif();
          this.$7.focus();
          return;
        }
        this.$8.submitByAjax(ss.mkdel(this, this.$3), ss.mkdel(this, this.$2));
      },
      $4: function () {
        var a = this.$7.get_value();
        if (ss.isNullOrEmptyString(a)) {
          return;
        }
        var b = this.$7
          .get_domObject()
          .parents(".js-email-link-form")
          .first()
          .find(".js-recognised-addresses")[0];
        if (a3.isEmail(a)) {
          dF.hideMessage();
          var c = aL.buildTemplate("recognised_email_address_blob_template", [
            a,
          ]);
          b.appendChild(c.get(0));
          this.$7.set_value("");
          new dU.$ctor4(c, ".js-address-blob-remove", function () {
            c.remove();
          });
        } else {
          dF.displayErrorMessage(Strings.share_Email_NotValid, true, 0);
        }
      },
      $3: function (a) {
        this.$0.$e();
        dF.displayMessage(Strings.share_Email_Success, true, 0);
        dF.hideProgress();
      },
      $2: function () {
        dF.displayErrorMessage(Strings.share_Email_Error, true, 0);
        this.$9.resetLoadingGif();
        dF.hideProgress();
      },
    },
    c6,
    [b0]
  );
  ss.initClass(
    c0,
    aa,
    {
      $2: function (a) {
        if (ss.isNullOrUndefined(a5.app)) {
          ai.load(
            ss.mkdel(this, function () {
              this.$2(a);
            })
          );
          return;
        }
        var b = a5.app;
        var c = -1;
        var d = null;
        if (ss.isValue(a5.myActivitiesPage)) {
          c = this.$0.$j().get_activityId();
          d = this.$0.$j().get_activityGuid();
        } else {
          if (ss.isValue(a5.myResultsPage) || ss.isValue(a5.resultPage)) {
            c = this.$0.$l().ActivityId;
            d = this.$0.$l().ActivityGuid;
          }
        }
        if (
          c !== -1 &&
          ss.isValue(d) &&
          (ss.isNullOrUndefined(b.get_document()) ||
            !ss.referenceEquals(b.get_document().get_guid(), d))
        ) {
          b.open(
            d,
            false,
            c,
            ss.mkdel(this, function (j) {
              this.$2(a);
            })
          );
          return;
        }
        if (
          ss.isNullOrUndefined(b.get_document()) ||
          ss.isNullOrUndefined(b.get_document().get_selectedGame())
        ) {
          window.setTimeout(
            ss.mkdel(this, function () {
              this.$2(a);
            }),
            200
          );
          return;
        }
        var e = b.get_document().get_template().get_id();
        var f = Enumerable.from(
          VEL.Skynet.Core.View.Themes.ThemeHelper.getAvailableThemeIds(e)
        ).select(VEL.Skynet.Core.View.Themes.ThemeHelper.getTheme);
        var g = f.getEnumerator();
        try {
          while (g.moveNext()) {
            var h = g.current();
            this.$b
              .get_domObject()
              .append(
                '<option value="' + h.id + '">' + h.get_title() + "</option>"
              );
          }
        } finally {
          g.dispose();
        }
        var i = ss.isValue(this.$0.$l())
          ? this.$0.$l().ThemeId
          : this.$0.$j().get_themeId();
        if (
          !f.any(function (j) {
            return j.id === i;
          })
        ) {
          i = f.first().id;
        }
        b.setThemeId(i, false);
        this.$b.set_value(b.getThemeSelection().selected.id);
        this.$8.set_value(ServerModel.languageId);
        a();
      },
      $4: function (a) {
        if (a) {
          if (this.$0.$j().get_homeworkType() === 2) {
            if (ServerHelper.get_isGuest()) {
              new d6.$ctor1(".js-guest-cta").set_isVisible(true);
            } else {
              new d6.$ctor1(".js-assignment-cta").set_isVisible(true);
              new dU.$ctor3(
                ".js-next-set-assignment",
                ss.mkdel(this, function () {
                  this.$0.$g(new b4(this.$0));
                }),
                true
              );
            }
          }
        } else {
          new d6.$ctor1(".js-back-cta").set_isVisible(true);
        }
      },
      $3: function (a) {
        var b;
        var c = a5.app;
        if (this.$a === 2 || this.$a === 3) {
          b =
            "/embedajax/gethomeworktemplates?homeworkGameId=" +
            this.$0.$l().HomeworkGameId;
        } else {
          b =
            "/embedajax/getactivitytemplates?activityId=" +
            this.$0.$j().get_activityId() +
            "&languageId=" +
            this.$8.get_value() +
            "&themeId=" +
            this.$b.get_value();
          if (ss.isValue(c.get_document())) {
            b =
              b +
              "&templateId=" +
              c.get_document().get_template().get_id() +
              "&fontStackId=" +
              c.getFontStackId();
          }
        }
        $.get(
          b,
          null,
          ss.mkdel(this, function (d) {
            this.$7.set_html(ss.cast(d, String));
            aL.clearCache();
            this.$5();
            if (!ss.staticEquals(a, null)) {
              a();
            }
          })
        );
      },
      $5: function () {
        var a;
        var b;
        var c = a5.app;
        switch (this.$c.get_value()) {
          case 2:
            a = aL.toString("embed_icon_template", []).trim();
            b = "<div>" + a + "</div>";
            this.$b.set_value(c.getThemeSelection().selected.id);
            this.$b.setAttribute("disabled", "disabled");
            break;
          case 1:
            a = aL.toString("embed_image_template", []).trim();
            b = "<div>" + a + "</div>";
            this.$b.set_value(c.getThemeSelection().selected.id);
            this.$b.setAttribute("disabled", "disabled");
            break;
          case 0:
            a = aL.toString("embed_iframe_template", []).trim();
            b = ss.replaceAllString(a, "?", "?footer=false&");
            this.$b.removeAttribute("disabled");
            break;
          default:
            throw new ss.NotImplementedException();
        }
        this.$6.set_html(a);
        this.$9.set_html(b);
      },
      $1: function () {
        this.$6.copy();
      },
      get_$selector: function () {
        return ".js-step-embed";
      },
    },
    c6,
    [b0]
  );
  ss.initEnum(c2, aa, { $0: 0, $2: 1, $1: 2 });
  ss.initClass(
    c4,
    aa,
    {
      $1: function () {
        dc.closeActiveModal();
        var a =
          "/resourceajax/makeprivate?activityId=" +
          this.$0.$j().get_activityId() +
          "&pageId=" +
          ServerModel.pageId;
        $.ajax(a, {
          data: null,
          type: "GET",
          success: ss.mkdel(this, function (b, c, d) {
            this.$0.$j().set_isShared(false);
            dF.displayMessage(Strings.share_NowPrivate, true, 0);
          }),
          error: function (b, c, d) {
            dF.displayNetworkErrorMessage();
          },
        });
      },
      get_$selector: function () {
        return ".js-step-resource-setup";
      },
      $2: function () {
        if (this.$4) {
          return;
        }
        if (!ep.isTitleShareable(this.$6.get_value())) {
          dF.displayErrorMessage(
            Strings.enterContent_Generic_TitleError,
            true,
            0
          );
          return;
        }
        this.$4 = true;
        this.$5.addLoadingGif();
        var a =
          "/resourceajax/publish?activityId=" +
          this.$0.$j().get_activityId() +
          "&subjects=" +
          this.$3.getSubjects() +
          "&agebands=" +
          this.$3.getAgeBands() +
          "&topics=" +
          this.$3.getTopics() +
          "&title=" +
          encodeURIComponent(this.$6.get_value()) +
          "&pageId=" +
          ServerModel.pageId;
        $.ajax(a, {
          data: null,
          type: "GET",
          success: ss.mkdel(this, function (b, c, d) {
            this.$4 = false;
            this.$0.$j().set_title(this.$6.get_value());
            if (ss.isValue(a5.activityPage)) {
              a5.activityPage.updateTags();
            }
            this.$0.$j().set_isShared(true);
            this.$0.$g(new dl(this.$0, 0));
            this.$5.resetLoadingGif();
          }),
          error: ss.mkdel(this, function (b, c, d) {
            dF.displayNetworkErrorMessage();
            this.$4 = false;
            this.$5.resetLoadingGif();
          }),
        });
      },
    },
    c6,
    [b0]
  );
  ss.initClass(
    c8,
    aa,
    {
      get_$selector: function () {
        return ".js-current-assignments";
      },
      $1: function () {
        new dU.$ctor4(
          this.get_$domObject(),
          ".js-back-step",
          ss.mkdel(this, function () {
            this.$0.$e();
          })
        );
        new dU.$ctor4(
          this.get_$domObject(),
          ".js-create-new",
          ss.mkdel(this, function () {
            this.$0.$g(new b4(this.$0));
          })
        );
      },
    },
    c6,
    [b0]
  );
  ss.initClass(
    db,
    aa,
    {
      get_$selector: function () {
        return ".js-step-gc-assignment-done";
      },
      $3: function () {
        this.$6.offClick();
        this.$6.onClick(ss.mkdel(this, this.$1), false, true);
        this.$7.offClick();
        this.$7.onClick(ss.mkdel(this, this.$2), false, true);
      },
      $1: function () {
        dc.openNewTab(this.$5.alternateLink);
      },
      $2: function () {
        window.location.href = "/result/a/" + this.$4.HomeworkGameId;
      },
    },
    c6,
    [b0]
  );
  ss.initClass(
    dd,
    aa,
    {
      $b: function () {
        this.$i.offChange();
        this.$i.onChange(ss.mkdel(this, this.$8));
        this.$d.offChange();
        this.$d.onChange(ss.mkdel(this, this.$6));
        this.$m.offClick();
        this.$m.onClick(ss.mkdel(this, this.$9), false, true);
      },
      get_$selector: function () {
        return ".js-step-gc-assignment";
      },
      $2: function () {
        var a = 0,
          b,
          c,
          d,
          e,
          f,
          g,
          h,
          i;
        var j = ss.mkdel(this, function () {
          $sm1: for (;;) {
            switch (a) {
              case 0:
                a = -1;
                b = "Error fetching Google Classroom courses";
                a = 1;
                continue $sm1;
              case 1:
              case 2:
              case 3:
                if (a === 1) {
                  a = 2;
                }
                try {
                  $sm2: for (;;) {
                    switch (a) {
                      case 2:
                        a = -1;
                        this.$i.empty();
                        c = this.$j.listMyTeacherCourses();
                        a = 3;
                        c.continueWith(j);
                        return;
                      case 3:
                        a = -1;
                        d = c.getAwaitedResult();
                        e = Enumerable.from(d).firstOrDefault(
                          null,
                          ss.getDefaultValue(
                            VEL.Skynet.Global.Json.GoogleClassroom.Course
                          )
                        );
                        for (f = 0; f < d.length; f++) {
                          g = d[f];
                          this.$i.addOption(
                            g.name,
                            g.id,
                            ss.referenceEquals(g, e)
                          );
                        }
                        this.$8(ss.isValue(e) ? e.id : null);
                        a = -1;
                        break $sm2;
                      default:
                        break $sm2;
                    }
                  }
                } catch (k) {
                  k = ss.Exception.wrap(k);
                  if (ss.isInstanceOfType(k, ss.PromiseException)) {
                    h = ss.cast(k, ss.PromiseException);
                    dd.$2.reportGoogleClassroomError(
                      Strings.myActivities_DefaultError,
                      b,
                      h
                    );
                  } else {
                    i = k;
                    dd.$2.reportError$1(
                      Strings.myActivities_DefaultError,
                      b,
                      i
                    );
                  }
                }
                a = -1;
                break $sm1;
              default:
                break $sm1;
            }
          }
        });
        j();
      },
      $8: function (a) {
        var b = 0,
          c;
        var d = ss.mkdel(this, function () {
          $sm1: for (;;) {
            switch (b) {
              case 0:
                b = -1;
                if (ss.isNullOrEmptyString(a)) {
                  this.$1();
                  b = -1;
                  break $sm1;
                } else {
                  c = this.$c(a);
                  b = 1;
                  c.continueWith(d);
                  return;
                }
              case 1:
                b = -1;
                c.getAwaitedResult();
                b = -1;
                break $sm1;
              default:
                break $sm1;
            }
          }
        });
        d();
      },
      $c: function (a) {
        var b = 0,
          c = new ss.TaskCompletionSource(),
          d,
          e,
          f,
          g;
        var h = ss.mkdel(this, function () {
          try {
            $sm1: for (;;) {
              switch (b) {
                case 0:
                  b = -1;
                  d = "Error fetching Google Classroom students";
                  b = 1;
                  continue $sm1;
                case 1:
                case 2:
                case 3:
                  if (b === 1) {
                    b = 2;
                  }
                  try {
                    $sm2: for (;;) {
                      switch (b) {
                        case 2:
                          b = -1;
                          this.$1();
                          e = this.$j.listCourseStudents(a);
                          this.$l = e;
                          b = 3;
                          e.continueWith(h);
                          return;
                        case 3:
                          b = -1;
                          e.getAwaitedResult();
                          if (!ss.referenceEquals(e, this.$l)) {
                            c.setResult(null);
                            return;
                          }
                          this.$3(e.getResult());
                          this.$6();
                          b = -1;
                          break $sm2;
                        default:
                          break $sm2;
                      }
                    }
                  } catch (i) {
                    i = ss.Exception.wrap(i);
                    if (ss.isInstanceOfType(i, ss.PromiseException)) {
                      f = ss.cast(i, ss.PromiseException);
                      dd.$2.reportGoogleClassroomError(
                        Strings.myActivities_DefaultError,
                        d,
                        f
                      );
                    } else {
                      g = i;
                      dd.$2.reportError$1(
                        Strings.myActivities_DefaultError,
                        d,
                        g
                      );
                    }
                  }
                  b = -1;
                  break $sm1;
                default:
                  break $sm1;
              }
            }
            c.setResult(null);
          } catch (i) {
            c.setException(ss.Exception.wrap(i));
          }
        });
        h();
        return c.task;
      },
      $1: function () {
        this.$e.empty();
        this.$e.set_isVisible(false);
        this.$f.set_isVisible(false);
      },
      $3: function (a) {
        if (ss.isValue(a) && a.length !== 0) {
          this.$e.set_html(
            ss
              .arrayFromEnumerable(
                Enumerable.from(a).select(function (b) {
                  return ss.formatString(
                    "<li><input type='checkbox' id='{0}' class='js-gc-assign-to-student' value='{1}'/> <label for='{0}'>{2}</label></li>",
                    ss.htmlEncode("gc_assign_to_student_" + b.userId),
                    ss.htmlEncode(b.userId),
                    ss.htmlEncode(b.profile.name.fullName)
                  );
                })
              )
              .join("")
          );
          this.$e.set_isVisible(true);
          this.$f.set_isVisible(false);
        } else {
          this.$e.empty();
          this.$e.set_isVisible(false);
          this.$f.set_isVisible(true);
        }
      },
      $6: function () {
        var a = this.$d.get_value() === 1;
        this.$e
          .get_domObject()
          .find("input")
          .each(function (b, c) {
            new d0(c, null).setEnable(a);
          });
        this.$e
          .get_domObject()
          .find("label")
          .each(function (b, c) {
            $(c).toggleClass("unavailable", !a);
          });
      },
      $9: function () {
        var a = 0,
          b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l;
        var m = ss.mkdel(this, function () {
          var n = true;
          $sm1: for (;;) {
            switch (a) {
              case 0:
                a = -1;
                if (this.$m.hasLoadingGif()) {
                  return;
                }
                b = this.$4();
                if (ss.isNullOrEmptyString(b.courseId)) {
                  dF.displayErrorMessage(
                    Strings.share_GoogleClassroom_MustHaveClass,
                    true,
                    5000
                  );
                  return;
                }
                if (
                  b.assigneeMode === "INDIVIDUAL_STUDENTS" &&
                  (ss.isNullOrUndefined(b.individualStudentsOptions) ||
                    b.individualStudentsOptions.studentIds.length === 0)
                ) {
                  dF.displayErrorMessage(
                    Strings.share_GoogleClassroom_MustHaveStudents,
                    true,
                    5000
                  );
                  return;
                }
                c = "Error setting Google Classroom assignment";
                a = 1;
                continue $sm1;
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
                if (a === 1) {
                  a = 2;
                }
                try {
                  $sm2: for (;;) {
                    switch (a) {
                      case 2:
                        a = -1;
                        this.$a();
                        d = ak.setAssignmentAsync(this.$0.$j(), this.$g);
                        a = 3;
                        d.continueWith(m);
                        n = false;
                        return;
                      case 3:
                        a = -1;
                        e = d.getAwaitedResult();
                        f = dd.$0(e.EndTime);
                        b.materials = [
                          VEL.Skynet.Global.Json.GoogleClassroom.Material.createLinkMaterial(
                            e.Url
                          ),
                        ];
                        b.dueDate =
                          VEL.Skynet.Global.Json.GoogleClassroom.Date.create$1(
                            f
                          );
                        b.dueTime =
                          VEL.Skynet.Global.Json.GoogleClassroom.TimeOfDay.create$1(
                            f
                          );
                        g = this.$j.createCourseWork(b.courseId, b);
                        a = 4;
                        g.continueWith(m);
                        n = false;
                        return;
                      case 4:
                        a = -1;
                        h = g.getAwaitedResult();
                        i = ak.setGoogleClassroomAssignmentAsync(
                          e.HomeworkGameId,
                          h.courseId,
                          h.id
                        );
                        a = 5;
                        i.continueWith(m);
                        n = false;
                        return;
                      case 5:
                        a = -1;
                        i.getAwaitedResult();
                        j = this.$j.publishCourseWork(h.courseId, h.id);
                        a = 6;
                        j.continueWith(m);
                        n = false;
                        return;
                      case 6:
                        a = -1;
                        h = j.getAwaitedResult();
                        if (
                          VEL.Skynet.Global.Server.Switches.getInteger(
                            VEL.Skynet.Global.Server.Switches.static$1,
                            VEL.Skynet.Global.Server.SwitchKeys
                              .basicAssignmentLimit
                          ) > 0
                        ) {
                          ServerModel.assignmentCount++;
                        }
                        this.$0.$g(new db(this.$0, e, h));
                        a = -1;
                        break $sm2;
                      default:
                        break $sm2;
                    }
                  }
                } catch (o) {
                  o = ss.Exception.wrap(o);
                  if (ss.isInstanceOfType(o, ss.PromiseException)) {
                    k = ss.cast(o, ss.PromiseException);
                    dd.$2.reportGoogleClassroomError(
                      Strings.myActivities_DefaultError,
                      c,
                      k
                    );
                  } else {
                    l = o;
                    dd.$2.reportError$1(
                      Strings.myActivities_DefaultError,
                      c,
                      l
                    );
                  }
                } finally {
                  if (n) {
                    this.$7();
                  }
                }
                a = -1;
                break $sm1;
              default:
                break $sm1;
            }
          }
        });
        m();
      },
      $a: function () {
        this.$m.addLoadingGif();
        this.$h.disable();
      },
      $7: function () {
        this.$m.resetLoadingGif();
        this.$h.enable();
      },
      $4: function () {
        var a = new VEL.Skynet.Global.Json.GoogleClassroom.CourseWork();
        a.courseId = this.$i.get_value();
        a.title = this.$g.Title;
        a.state = "DRAFT";
        a.maxPoints = this.$k;
        a.workType = "ASSIGNMENT";
        var b = a;
        var c = this.$d.get_value();
        switch (c) {
          case 0:
            b.assigneeMode = "ALL_STUDENTS";
            break;
          case 1:
            b.assigneeMode = "INDIVIDUAL_STUDENTS";
            var d =
              new VEL.Skynet.Global.Json.GoogleClassroom.IndividualStudentsOptions();
            d.studentIds = this.$5();
            b.individualStudentsOptions = d;
            break;
        }
        return b;
      },
      $5: function () {
        var a = this.$e.get_domObject().find("input:checked");
        var b = new Array(a.length);
        a.each(function (c, d) {
          b[c] = $(d).val();
        });
        return b;
      },
    },
    c6,
    [b0]
  );
  ss.initClass(
    df,
    aa,
    {
      get_$selector: function () {
        return ".js-step-gc-assignment-refuse";
      },
    },
    c6,
    [b0]
  );
  ss.initClass(
    dh,
    aa,
    {
      get_$selector: function () {
        return ".js-step-qr";
      },
      $1: function (a) {
        var b = "/resourceajax/qr?shareLocation=" + a.getLocation().toString();
        if (ss.isValue(a.$l())) {
          return b + "&homeworkGameId=" + a.$l().HomeworkGameId;
        } else {
          return b + "&activityId=" + a.$j().get_activityId();
        }
      },
      $2: function (a) {
        if (ss.isValue(a.$l())) {
          return a.$l().Url;
        } else {
          return ep.getShortUrl(a.$j().get_activityId(), false);
        }
      },
    },
    c6,
    [b0]
  );
  ss.initClass(
    dj,
    aa,
    {
      $1: function () {
        this.$5 = this.$5 || new b4(this.$0);
        this.$0.$g(this.$5);
      },
      $2: function () {
        if (this.$3) {
          this.$6 = this.$6 || new c4(this.$0);
          this.$0.$g(this.$6);
        } else {
          this.$4 = this.$4 || new dl(this.$0, 1);
          this.$0.$g(this.$4);
        }
      },
      get_$selector: function () {
        return ".js-step-share-or-homework";
      },
    },
    c6,
    [b0]
  );
  ss.initClass(
    dl,
    aa,
    {
      $7: function () {
        var a = new dU.$ctor4(
          this.get_$domObject(),
          ".js-share-modal-native",
          ss.mkdel(this, this.$c)
        );
        a.find(d6)
          .call(a, ".js-share-pinterest")
          .set_isVisible(ServerModel.regionalSocialMedia === 0);
        return a;
      },
      get_$selector: function () {
        switch (this.$g) {
          case 0:
            return ".js-step-resource-done";
          case 1:
            return ".js-step-public-resource-done";
          case 2:
            return ".js-step-assignment-done";
          case 3:
            return ".js-step-past-assignment-done";
        }
        throw new ss.NotImplementedException();
      },
      $2: function () {
        if (this.$g === 2 || this.$g === 3) {
          return this.$0.$l().ActivityId;
        } else {
          return this.$0.$j().get_activityId();
        }
      },
      $4: function () {
        if (this.$g === 2 || this.$g === 3) {
          return 0;
        } else {
          return this.$0.$j().get_templateId();
        }
      },
      $3: function () {
        if (this.$g === 2 || this.$g === 3) {
          return this.$0.$l().HomeworkGameId;
        } else {
          return 0;
        }
      },
      $8: function () {
        this.$1(237);
        this.$0.$g(new b8(this.$0));
      },
      $9: function () {
        this.$1(223);
        this.$0.$g(new c0(this.$0, this.$g, false));
      },
      $e: function () {
        this.$0.$g(new dh(this.$0, true));
      },
      $a: function () {
        this.$1(234);
        dc.openPopup(aZ.createFacebookShareLink(this.$6(), this.$5()));
      },
      $d: function () {
        this.$1(243);
        dc.openPopup(aZ.createPinterestShareLink(this.$6(), this.$5()));
      },
      $b: function () {
        this.$1(236);
        var a = this.$6();
        var b = this.$5();
        dc.openNewTab(
          ss.formatString(
            "https://classroom.google.com/share?url={0}&title={1}",
            encodeURIComponent(a),
            encodeURIComponent(b)
          )
        );
      },
      $c: function () {
        var a = this.$6();
        var b = this.$5();
        aP.share(a, b, b);
      },
      $6: function () {
        return this.$g === 2 || this.$g === 3
          ? this.$0.$l().Url
          : this.$0.$j().get_longUrl();
      },
      $5: function () {
        return this.$g === 2 || this.$g === 3
          ? this.$0.$l().Title
          : this.$0.$j().get_title();
      },
      $1: function (a) {
        aF.addShareEvent$1(
          a,
          this.$0.getLocation(),
          this.$4(),
          this.$2(),
          this.$3()
        );
      },
    },
    c6,
    [b0]
  );
  ss.initClass(
    dn,
    aa,
    {
      getAgeBands: function () {
        return this.$4(this.$m);
      },
      getSubjects: function () {
        return this.$4(this.$z);
      },
      getTopics: function () {
        return this.$4(this.$A);
      },
      $5: function () {
        $.get(
          "/resourceajax/formtags?activityId=" + this.$g,
          ss.mkdel(this, function (a) {
            if (!this.$r.get_isEmpty()) {
              this.$f();
            }
            this.$r.set_html(a.toString());
            this.$1();
            this.$e();
          })
        );
      },
      $f: function () {
        this.$x = this.getAgeBands();
        this.$y = this.getSubjects();
        this.$w = this.getTopics();
      },
      $e: function () {
        if (ss.isValue(this.$w)) {
          var a =
            VEL.Skynet.Global.Extensions.StringExtensions.toArrayOfIntegers(
              this.$w
            );
          for (var b = 0; b < this.$A.length; b++) {
            var c = this.$A[b];
            c.$1().set_isChecked(ss.contains(a, c.$3()));
          }
        }
        if (ss.isValue(this.$x)) {
          var d =
            VEL.Skynet.Global.Extensions.StringExtensions.toArrayOfIntegers(
              this.$x
            );
          for (var e = 0; e < this.$m.length; e++) {
            var f = this.$m[e];
            f.$1().set_isChecked(ss.contains(d, f.$3()));
          }
        }
        if (ss.isValue(this.$y)) {
          var g =
            VEL.Skynet.Global.Extensions.StringExtensions.toArrayOfIntegers(
              this.$y
            );
          for (var h = 0; h < this.$z.length; h++) {
            var i = this.$z[h];
            i.$1().set_isChecked(ss.contains(g, i.$3()));
          }
        }
      },
      $8: function (a) {
        var b = false;
        if (a.$1().get_isChecked()) {
          if (
            Enumerable.from(this.$m).count(function (c) {
              return c.$1().get_isChecked();
            }) > 8 &&
            a.$5() === "ageband"
          ) {
            a.$1().set_isChecked(false);
            b = true;
          }
          if (
            Enumerable.from(this.$z).count(function (c) {
              return c.$1().get_isChecked();
            }) > 3 &&
            a.$5() === "subject"
          ) {
            a.$1().set_isChecked(false);
            b = true;
          }
          if (
            Enumerable.from(this.$A).count(function (c) {
              return c.$1().get_isChecked();
            }) > 3 &&
            a.$5() === "topic"
          ) {
            a.$1().set_isChecked(false);
          }
        }
        if (a.$5() !== "topic" && !b) {
          $.get(
            "/resourceajax/topictags?activityId=" +
              this.$g +
              "&subjects=" +
              this.getSubjects() +
              "&agebands=" +
              this.getAgeBands(),
            ss.mkdel(this, function (c) {
              this.$f();
              this.$s.set_html(c.toString());
              this.$2();
              this.$e();
            })
          );
        }
      },
      $1: function () {
        this.$s = new dV.$ctor1(".js-insert-topic-tags");
        ss.clear(this.$m);
        var a = this.get_domObject().find(".js-ageband-tag").get();
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          this.$m.push(
            new b6(
              "ageband",
              c,
              ss.mkdel(this, this.$b),
              ss.mkdel(this, this.$8)
            )
          );
        }
        var d = new dU.$ctor3(
          ".js-add-ageband",
          ss.mkdel(this, function () {
            this.$7("ageband");
          }),
          true
        );
        ss.clear(this.$z);
        var e = this.get_domObject().find(".js-subject-tag").get();
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          this.$z.push(
            new b6(
              "subject",
              g,
              ss.mkdel(this, this.$b),
              ss.mkdel(this, this.$8)
            )
          );
        }
        var h = new dU.$ctor3(
          ".js-add-subject",
          ss.mkdel(this, function () {
            this.$7("subject");
          }),
          true
        );
        this.$2();
        this.$t = false;
      },
      $2: function () {
        ss.clear(this.$A);
        var a = this.get_domObject().find(".js-topic-tag").get();
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          this.$A.push(
            new b6("topic", c, ss.mkdel(this, this.$b), ss.mkdel(this, this.$8))
          );
        }
        var d = new dU.$ctor3(
          ".js-add-topic",
          ss.mkdel(this, function () {
            this.$7("topic");
          }),
          true
        );
      },
      $b: function (a) {
        this.$c();
        this.$q = a;
        this.$p.set_isVisible(true);
        this.$n.set_value(a.$4());
        this.$n.focus();
      },
      $9: function () {
        this.$c();
        this.$v.set_isVisible(true);
        this.$p.set_isVisible(false);
        this.$l.set_isVisible(false);
      },
      $c: function () {
        this.$p.set_isVisible(false);
        this.$l.set_isVisible(false);
        this.$v.set_isVisible(false);
      },
      $6: function () {
        var a =
          "/resourceajax/add" +
          this.$k +
          "?name=" +
          encodeURIComponent(this.$h.get_value()).replace(/%20/g, "+");
        this.$3(a, this.$i);
      },
      $a: function () {
        var a = this.$n.get_value();
        if (ss.referenceEquals(a, this.$q.$4())) {
          return;
        }
        var b =
          "/resourceajax/edit" +
          this.$q.$5() +
          "?name=" +
          a +
          "&" +
          this.$q.$5() +
          "id=" +
          this.$q.$3();
        this.$3(b, this.$o);
      },
      $d: function () {
        var a =
          "/resourceajax/remove" +
          this.$q.$5() +
          "?" +
          this.$q.$5() +
          "id=" +
          this.$q.$3();
        this.$3(a, this.$u);
      },
      $7: function (a) {
        this.$c();
        switch (a) {
          case "ageband":
            this.$j.set_text(Strings.resource_Tags_AddAgeBand);
            break;
          case "subject":
            this.$j.set_text(Strings.resource_Tags_AddSubject);
            break;
          case "topic":
            this.$j.set_text(Strings.resource_Tags_AddTopic);
            break;
        }
        this.$h.set_value("");
        this.$l.set_isVisible(true);
        this.$h.focus();
        this.$k = a;
        this.$i.onClick(ss.mkdel(this, this.$6), false, true);
        this.$h.onEnter(ss.mkdel(this, this.$6));
      },
      $3: function (a, b) {
        if (this.$t) {
          return;
        }
        this.$t = true;
        b.addLoadingGif();
        $.ajax(a, {
          data: null,
          type: "GET",
          success: ss.mkdel(this, function (c, d, e) {
            var f = ss.cast(c, VEL.Skynet.Global.Json.TagResultJson);
            if (f.Success) {
              this.$c();
              this.$5();
            } else {
              dF.displayErrorMessage(f.Error, true, 0);
            }
            b.resetLoadingGif();
            this.$t = false;
          }),
          error: ss.mkdel(this, function (c, d, e) {
            dF.displayNetworkErrorMessage();
            b.resetLoadingGif();
            this.$t = false;
          }),
        });
      },
      $4: function (a) {
        var b = "";
        var c = ss.getEnumerator(a);
        try {
          while (c.moveNext()) {
            var d = c.current();
            if (d.$1().get_isChecked()) {
              if (b !== "") {
                b += ",";
              }
              b += d.$3();
            }
          }
        } finally {
          c.dispose();
        }
        return b;
      },
    },
    d6
  );
  ss.initInterface(dq, aa, {
    initialize: null,
    onDocumentOpen: null,
    onContentChanged: null,
    populateOptionsSection: null,
    populateThemesList: null,
    populateTemplates: null,
    populateLeaderboard: null,
    updateTags: null,
    updateLeaderboard: null,
    updateAssignments: null,
    get_convertToTemplateId: null,
    onAssetLoaded: null,
  });
  ss.initInterface(ds, aa, { updateErrors: null });
  ss.initInterface(du, aa, { initialize: null });
  ss.initInterface(dw, aa, {
    onOpenFolder: null,
    onOpenRecycleBin: null,
    onSearch: null,
    onBack: null,
    getItemsDragContainer: null,
  });
  ss.initInterface(dy, aa, { initialize: null });
  ss.initInterface(dA, aa, {
    initialize: null,
    restart: null,
    onTurnedInGoogleClassroomStudentSubmission: null,
    onAssetLoaded: null,
  });
  ss.initInterface(dC, aa, { initialize: null });
  ss.initEnum(dE, aa, { folder: 0, search: 1, recycle: 2, teacherFolder: 3 });
  ss.initClass(
    dH,
    aa,
    {
      $2: function () {
        this.$5.fadeOut$1();
        this.set_isVisible(false);
      },
      open: function (a, b, c, d, e, f, g) {
        if (ag.get_inProgress()) {
          return;
        }
        this.$8.onClick(a, false, true);
        this.$6.onClick(
          ss.mkdel(this, function () {
            b();
            this.$2();
          }),
          false,
          true
        );
        this.$9.onClick(
          ss.mkdel(this, function () {
            c();
            this.$2();
          }),
          false,
          true
        );
        this.$7.onClick(
          ss.mkdel(this, function () {
            d();
            this.$2();
          }),
          false,
          true
        );
        this.$5.fadeIn$1();
        this.set_isVisible(true);
        this.CSS("left", this.$3(e, g));
        this.CSS("top", this.$4(f));
      },
      $3: function (a, b) {
        var c = 40;
        if (b) {
          return Math.max(a - this.get_outerWidth(), c);
        } else {
          return Math.min(a, $(window).width() - this.get_outerWidth() - c);
        }
      },
      $4: function (a) {
        var b = 8;
        return (
          Math.min(a, $(window).height() - this.get_outerHeight() - b) +
          $(window).scrollTop()
        );
      },
    },
    dV
  );
  (function () {
    ac.$1 = false;
  })();
  (function () {
    a5.app = null;
    a5.activityPage = null;
    a5.myActivitiesPage = null;
    a5.resultPage = null;
    a5.myResultsPage = null;
    a5.playPage = null;
    a5.editorPage = null;
  })();
  (function () {
    aL.$0 = new (ss.makeGenericType(ss.Dictionary$2, [String, aL]))();
  })();
  (function () {
    aN.experimentalNewAssignmentNotificationKey = "__newassignments";
    aN.dismissedBannersKey = "DismissedBanners";
    aN.bannersToShowKey = "BannersToShow";
    aN.policyUpdateDismissedKey = "policy_update_dismissed";
    aN.unsubmittedUserConsentsKey = "unsubmitted_user_consents";
    aN.userConsentsKey = "user_consents";
  })();
  (function () {
    dS.$0 = null;
  })();
  (function () {
    aB.$1 = null;
    aB.$0 = null;
  })();
  (function () {
    ax.$5 = 0;
    ax.$6 = 364;
    ax.$7 = "/privacy";
    ax.$8 = "/terms";
    ax.$3 = "/cookie-policy";
    ax.$2 = "/contact";
    ax.$4 = "currentLanguage";
    ax.cookieConsentIsEnabled = false;
  })();
  (function () {
    am.guidTag = "autosave.guid";
    am.templateIdTag = "autosave.templateid";
    am.timeTag = "autosave.time";
    am.titleTag = "autosave.title";
    am.userTag = "autosave.user";
    am.docTag = "autosave.doc";
  })();
  (function () {
    dc.$0 = null;
    $(window).on("resize", function (a) {
      if (ss.isValue(dc.$0)) {
        dc.$0.resize();
      }
    });
    $(document).keyup(function (a) {
      if (a.keyCode === 27) {
        dc.closeActiveModal();
      }
    });
  })();
  (function () {
    dF.$V = 31536000;
    dF.$E = null;
    dF.$M = "?ref=new";
    dF.$N = 15;
    dF.$O = 0;
    dF.$P = null;
    dF.$J = null;
    dF.$I = null;
    dF.$A = null;
    dF.$D = null;
    dF.$L = null;
    dF.$H = null;
    dF.$K = null;
    dF.$R = null;
    dF.$F = null;
    dF.$S = null;
    dF.$T = null;
    dF.$G = null;
    dF.$Q = null;
    dF.$C = null;
    dF.$B = null;
    dF.$U = 0;
    dF.isErrorPage = false;
    dF.jsErrors = "";
    dF.displayError = "";
  })();
  (function () {
    ag.$1$1 = false;
  })();
  (function () {
    dO.$2 = 15000;
    dO.$0 = 60;
    dO.$1 = 40;
  })();
  (function () {
    a6.$0 = 200;
  })();
  (function () {
    at.$0 = 150000;
  })();
  (function () {
    a3.$1 = "@skynet.net";
    a3.$0 = new RegExp(
      "^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,63}(?:\\.[a-z]{2})?)$",
      "i"
    );
    a3.$2 = new RegExp(
      "^([\\w-+]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,63}(?:\\.[a-z]{2})?)$",
      "i"
    );
  })();
  (function () {
    ep.$0 = false;
  })();
  (function () {
    aH.$0 = 5000;
  })();
  (function () {
    dn.$0 = "ageband";
    dn.$1 = "subject";
    dn.$2 = "topic";
  })();
  (function () {
    ae.existingContentPrompt =
      "Existing content to take context from and avoid repeating (Does not count toward the total number of items. Do not include the existing content in the response):\r\n";
    ae.groupIntersectionPrompt =
      "Ensure there is no intersection between the new groups and the existing groups.";
    ae.aiGenerationFeedbackSelector = ".js-ai-feedback";
    ae.inProgressClass = "js-in-progress in-progress";
  })();
  (function () {
    aT.$0 = 5000;
    aT.$1 = null;
  })();
  (function () {
    aK.acceptTypeAll = "all";
    aK.acceptTypeCustom = "custom";
    aK.acceptTypeNecessary = "necessary";
    aK.modalNameConsent = "consentModal";
  })();
})();
