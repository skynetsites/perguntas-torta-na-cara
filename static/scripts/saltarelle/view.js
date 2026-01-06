(function () {
  var e = {};
  global.VEL = global.VEL || {};
  global.VEL.Skynet = global.VEL.Skynet || {};
  global.VEL.Skynet.View = global.VEL.Skynet.View || {};
  global.VEL.Skynet.View.Assets = global.VEL.Skynet.View.Assets || {};
  global.VEL.Skynet.View.Assets.Fonts =
    global.VEL.Skynet.View.Assets.Fonts || {};
  global.VEL.Skynet.View.Assets.Reusables =
    global.VEL.Skynet.View.Assets.Reusables || {};
  global.VEL.Skynet.View.Audio = global.VEL.Skynet.View.Audio || {};
  global.VEL.Skynet.View.Builders = global.VEL.Skynet.View.Builders || {};
  global.VEL.Skynet.View.Builders.Audio =
    global.VEL.Skynet.View.Builders.Audio || {};
  global.VEL.Skynet.View.Builders.Controls =
    global.VEL.Skynet.View.Builders.Controls || {};
  global.VEL.Skynet.View.Builders.Decorations =
    global.VEL.Skynet.View.Builders.Decorations || {};
  global.VEL.Skynet.View.Builders.Graphics =
    global.VEL.Skynet.View.Builders.Graphics || {};
  global.VEL.Skynet.View.Builders.Layers =
    global.VEL.Skynet.View.Builders.Layers || {};
  global.VEL.Skynet.View.Builders.LayerVisuals =
    global.VEL.Skynet.View.Builders.LayerVisuals || {};
  global.VEL.Skynet.View.Builders.Resources =
    global.VEL.Skynet.View.Builders.Resources || {};
  global.VEL.Skynet.View.Helpers = global.VEL.Skynet.View.Helpers || {};
  global.VEL.Skynet.View.Rendering = global.VEL.Skynet.View.Rendering || {};
  global.VEL.Skynet.View.Rendering.Animate =
    global.VEL.Skynet.View.Rendering.Animate || {};
  global.VEL.Skynet.View.Rendering.Animate.Animatables =
    global.VEL.Skynet.View.Rendering.Animate.Animatables || {};
  global.VEL.Skynet.View.Rendering.Animate.Animations =
    global.VEL.Skynet.View.Rendering.Animate.Animations || {};
  global.VEL.Skynet.View.Rendering.Animate.BindingFunctions =
    global.VEL.Skynet.View.Rendering.Animate.BindingFunctions || {};
  global.VEL.Skynet.View.Rendering.Animate.Collections =
    global.VEL.Skynet.View.Rendering.Animate.Collections || {};
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions =
    global.VEL.Skynet.View.Rendering.Animate.EasingFunctions || {};
  global.VEL.Skynet.View.Rendering.Painters =
    global.VEL.Skynet.View.Rendering.Painters || {};
  global.VEL.Skynet.View.Rendering.Painters.Graphics =
    global.VEL.Skynet.View.Rendering.Painters.Graphics || {};
  global.VEL.Skynet.View.Rendering.Scene =
    global.VEL.Skynet.View.Rendering.Scene || {};
  global.VEL.Skynet.View.Rendering.Scene.Overlay =
    global.VEL.Skynet.View.Rendering.Scene.Overlay || {};
  global.VEL.Skynet.View.Rendering.Scene.Overlay.Overlays =
    global.VEL.Skynet.View.Rendering.Scene.Overlay.Overlays || {};
  global.VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens =
    global.VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens || {};
  global.VEL.Skynet.View.Rendering.Visuals =
    global.VEL.Skynet.View.Rendering.Visuals || {};
  global.VEL.Skynet.View.Rendering.Visuals.Controls =
    global.VEL.Skynet.View.Rendering.Visuals.Controls || {};
  global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles =
    global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles || {};
  global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts =
    global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts || {};
  global.VEL.Skynet.View.Rendering.Visuals.LayerVisuals =
    global.VEL.Skynet.View.Rendering.Visuals.LayerVisuals || {};
  ss.initAssembly(e, "VEL.Skynet.View");
  var ab = function (a, b) {
    this.$c = 10;
    this.$f = 1;
    this.$j = false;
    this.$z = null;
    this.$k = 0;
    this.$v = null;
    this.$w = null;
    this.$l = null;
    this.$e = null;
    this.$p = new (ss.makeGenericType(ss.Dictionary$2, [
      VEL.Skynet.Core.View.SceneEventsEnum,
      ss.Int32,
    ]))();
    this.$h = false;
    this.$r = null;
    this.$q = null;
    this.$m = null;
    this.$y = null;
    this.$x = null;
    this.$u = null;
    this.$g = false;
    this.$o = false;
    this.$s = 0;
    this.$n = null;
    this.$t = null;
    this.$d = null;
    this.$i = false;
    this.$1$1 = null;
    this.$1$2 = null;
    this.set_app(a);
    this.$i = b;
    hK.$2(VEL.Skynet.Global.Helpers.DeviceHelper.isRTL());
    hK.$a = 1;
    ik.$2();
    ii.$1();
  };
  ab.__typeName = "VEL.Skynet.View.ClientView";
  global.VEL.Skynet.View.ClientView = ab;
  var a4 = function (a) {
    ss.Exception.call(this, a);
  };
  a4.__typeName = "VEL.Skynet.View.ViewException";
  a4.$ctor1 = function (a, b) {
    ss.Exception.call(this, a + a4.toMessage(b));
  };
  a4.toMessage = function (a) {
    if (ss.isNullOrUndefined(a)) {
      return "";
    }
    var b = "\r\n" + ss.getTypeName(ss.getInstanceType(a));
    if (
      ss.isInstanceOfType(a, VEL.Skynet.Core.View.ObjectDatas.Tile.TileData)
    ) {
      b +=
        " Shape=" +
        ss.Enum.getName(
          VEL.Skynet.Core.View.ObjectDatas.TileShapeEnum,
          ss.cast(a, VEL.Skynet.Core.View.ObjectDatas.Tile.TileData).shape
        ) +
        " Face=" +
        ss.Enum.getName(
          VEL.Skynet.Core.View.ObjectDatas.Tile.Enumerations.FaceEnum,
          ss.cast(a, VEL.Skynet.Core.View.ObjectDatas.Tile.TileData).faceShown
        ) +
        " Sided=" +
        ss.Enum.getName(
          VEL.Skynet.Core.View.ObjectDatas.Tile.Enumerations.SidedEnum,
          ss.cast(a, VEL.Skynet.Core.View.ObjectDatas.Tile.TileData).sided
        );
    }
    if (
      ss.isInstanceOfType(
        a,
        VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteData
      )
    ) {
      b +=
        "." +
        ss.Enum.getName(
          VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteEnum,
          ss.cast(a, VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteData)
            .spriteType
        );
    }
    if (
      ss.isInstanceOfType(a, VEL.Skynet.Core.View.ObjectDatas.Place.PlaceData)
    ) {
      b +=
        "." +
        ss.Enum.getName(
          VEL.Skynet.Core.View.ObjectDatas.Place.PlaceEnum,
          ss
            .cast(a, VEL.Skynet.Core.View.ObjectDatas.Place.PlaceData)
            .get_placeStyle()
        );
    }
    return b;
  };
  global.VEL.Skynet.View.ViewException = a4;
  var f8 = function (a, b) {
    this.$y = new kR();
    this.$J = 0;
    this.$u = new (ss.makeGenericType(ss.Dictionary$2, [String, lr]))();
    this.$C = false;
    this.$p = null;
    this.$E = null;
    this.$D = null;
    this.$H = null;
    this.$G = null;
    this.$B = false;
    this.$r = null;
    this.$w = null;
    this.$A = false;
    this.$z = false;
    this.$F = 0;
    this.$I = 0;
    this.$t = null;
    this.$s = null;
    this.$v = 0;
    this.$K = 0;
    this.$q = null;
    this.$x = null;
    this.$1$1 = null;
    this.$H = b;
    this.$C = true;
    this.$p = [];
    this.$E = [];
    this.$D = [];
    this.$q = new VEL.Skynet.Core.Toolbox.Serialization.XmlReader(
      a,
      false,
      true,
      null,
      false
    );
    this.$l();
  };
  f8.__typeName = "VEL.Skynet.View.Assets.$0";
  f8.$0 = function (a, m, n, b, c, d, f, g, h, i) {
    this.$y = new kR();
    this.$J = 0;
    this.$u = new (ss.makeGenericType(ss.Dictionary$2, [String, lr]))();
    this.$C = false;
    this.$p = null;
    this.$E = null;
    this.$D = null;
    this.$H = null;
    this.$G = null;
    this.$B = false;
    this.$r = null;
    this.$w = null;
    this.$A = false;
    this.$z = false;
    this.$F = 0;
    this.$I = 0;
    this.$t = null;
    this.$s = null;
    this.$v = 0;
    this.$K = 0;
    this.$q = null;
    this.$x = null;
    this.$1$1 = null;
    this.$o(a);
    this.$H = f;
    this.$G = g;
    this.$C = d;
    this.$I = b.get_id();
    this.$v = m;
    this.$K = n;
    this.$B = h;
    this.$r = i;
    this.$p = [];
    this.$E = [];
    this.$D = [];
    var j = "/Themes/_Shared/Fonts.xml";
    var k = "/Themes/" + a.name + "/" + c + "p/Assets-" + b.get_id() + ".xml";
    k = Assets.cdn[k.toLowerCase()];
    j = Assets.cdn[j.toLowerCase()];
    if (!ss.isNullOrEmptyString(ServerModel.alternateSoundAssetsXml)) {
      k = ServerModel.alternateSoundAssetsXml + k;
    }
    this.$h(b.get_contentModel().getAllSounds());
    var l = b.get_contentModel().getImageList();
    this.$g(
      Enumerable.from(l).any()
        ? l
        : [VEL.Skynet.Core.ContentModels.Entities.Image.get_test()]
    );
    VEL.Skynet.Global.Helpers.DeviceHelper.isWebpSupported(
      ss.mkdel(this, function (o) {
        this.$t = o;
        this.$d();
      })
    );
    VEL.Skynet.Global.Helpers.DeviceHelper.isOggSupported(
      ss.mkdel(this, function (o) {
        this.$s = o;
        this.$d();
      })
    );
    this.$y.getXmlReader(
      k,
      false,
      ss.mkdel(this, function (o) {
        this.$q = o;
        this.$d();
      })
    );
    this.$y.getXmlReader(
      j,
      false,
      ss.mkdel(this, function (o) {
        this.$x = o;
        this.$d();
      })
    );
  };
  var i7 = function () {};
  i7.__typeName = "VEL.Skynet.View.Assets.AssetLoader";
  i7.get_isSoundIncluded = function () {
    return i7.$1$1;
  };
  i7.set_isSoundIncluded = function (a) {
    i7.$1$1 = a;
  };
  i7.start = function (a, j, k, b, c, d, f, g, h, i) {
    i7.dispose();
    i7.set_selectedTemplate(b);
    i7.set_isSoundIncluded(c);
    i7.$2 = i7.$0(d);
    i7.$1 = new f8.$0(a, j, k, b, i7.$2, c, f, g, h, i);
  };
  i7.startPreview = function (a, b) {
    i7.dispose();
    i7.set_isSoundIncluded(true);
    i7.$1 = new f8(a, b);
    i7.set_previewSoundAssetsXml(a);
  };
  i7.get_previewSoundAssetsXml = function () {
    return i7.$1$2;
  };
  i7.set_previewSoundAssetsXml = function (a) {
    i7.$1$2 = a;
  };
  i7.get_selectedTheme = function () {
    if (ss.isNullOrUndefined(i7.$1)) {
      return null;
    }
    return i7.$1.$n();
  };
  i7.get_selectedTemplate = function () {
    return i7.$1$3;
  };
  i7.set_selectedTemplate = function (a) {
    i7.$1$3 = a;
  };
  i7.getContentImageElement = function (a) {
    if (ss.isValue(i7.$1)) {
      return i7.$1.$7(a);
    }
    return null;
  };
  i7.getErrors = function () {
    if (ss.isValue(i7.$1)) {
      i7.$1.$4();
    }
    return null;
  };
  i7.loadLazySounds = function () {
    if (ss.isValue(i7.$1)) {
      i7.$1.$f();
    }
  };
  i7.lazyLoadMusic = function () {
    if (ss.isValue(i7.$1)) {
      i7.$1.$e();
    }
  };
  i7.getPreloadStatus = function () {
    if (ss.isValue(i7.$1)) {
      return i7.$1.$8();
    }
    return "";
  };
  i7.getFontStack = function (a) {
    if (ss.isValue(i7.$1)) {
      return i7.$1.$5(a);
    }
    return "";
  };
  i7.getXmlReader = function (a, b, c) {
    return i7.$1.$b(a, b, c);
  };
  i7.getXmlReaders = function (a) {
    return i7.$1.$c(a);
  };
  i7.getImageElement = function (a) {
    return i7.$1.$6(a);
  };
  i7.getAudioBuffer = function (a) {
    return i7.$1.$1(a);
  };
  i7.getAudioElement = function (a) {
    return i7.$1.$2(a);
  };
  i7.$0 = function (a) {
    var b = a
      ? Math.min(window.screen.width, window.screen.height)
      : Math.min(
          $(".js-render-canvas").width(),
          $(".js-render-canvas").height()
        );
    if (b < 600) {
      return 480;
    }
    if (
      b < 900 ||
      (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
    ) {
      return 720;
    }
    return 1080;
  };
  i7.dispose = function () {
    if (ss.isValue(i7.$1)) {
      i7.$1.dispose();
      i7.$1 = null;
    }
    lB.$0();
    VEL.Skynet.Core.View.Layouts.Targeters.LabelTargeter.clearCache();
  };
  global.VEL.Skynet.View.Assets.AssetLoader = i7;
  var jZ = function () {};
  jZ.__typeName = "VEL.Skynet.View.Assets.CdnHelper";
  jZ.combineUrl = function (a) {
    if (ss.isNullOrUndefined(a) || a.length === 0) {
      return null;
    }
    var f = Enumerable.from(a).first();
    var g = Enumerable.from(a).skip(1).getEnumerator();
    try {
      while (g.moveNext()) {
        var b = g.current();
        var c = ss.endsWithString(f, "/");
        var d = ss.startsWithString(b, "/");
        if (c !== d) {
          f += b;
        } else {
          if (c) {
            f += b.substring(1);
          } else {
            f += "/" + b;
          }
        }
      }
    } finally {
      g.dispose();
    }
    return f;
  };
  global.VEL.Skynet.View.Assets.CdnHelper = jZ;
  var kR = function () {};
  kR.__typeName = "VEL.Skynet.View.Assets.XmlAssetHelper";
  global.VEL.Skynet.View.Assets.XmlAssetHelper = kR;
  var lh = function () {};
  lh.__typeName = "VEL.Skynet.View.Assets.XmlLocationEnum";
  global.VEL.Skynet.View.Assets.XmlLocationEnum = lh;
  var lj = function (a) {
    this.$5 = null;
    this.$1$1 = false;
    this.$1$2 = null;
    this.$5 = a;
  };
  lj.__typeName = "VEL.Skynet.View.Assets.Assets.$0";
  var ll = function (a, c, d, b) {
    this.$h = null;
    this.$f = null;
    this.$g = null;
    this.$e = null;
    this.$2$1 = null;
    this.$2$2 = null;
    lj.call(this, d);
    this.$f = a;
    this.$g = c;
    this.$e = b;
    this.$6();
  };
  ll.__typeName = "VEL.Skynet.View.Assets.Assets.$1";
  ll.$4 = function (a, f, g, b) {
    var c = a.getAttributeAsString("src").toLowerCase();
    var d = !ss.isNullOrEmptyString(g) ? ll.$1(a, g, c, b) : ll.$2(a, f, c, b);
    return d;
  };
  ll.$2 = function (a, f, g, b) {
    var c = a.getAttributeAsString("cdn").toLowerCase();
    var d = f ? a.getAttributeAsString("ogg") : null;
    return ss.isValue(d) ? new ll(g, d, b, c) : new ll(g, c, b, null);
  };
  ll.$1 = function (a, f, g, b) {
    var c = a.getAttributeAsString("src").toLowerCase();
    var d =
      "/resourceajax/themeaudio?src=" +
      encodeURIComponent(c).replace(/%20/g, "+") +
      "&experimentFolder=" +
      encodeURIComponent(f).replace(/%20/g, "+");
    return new ll(g, d, b, null);
  };
  ll.$3 = function (a, b) {
    var c = a.url.toLowerCase();
    return new ll(
      c,
      jZ.combineUrl([
        "https://user.cdn.skynet.net/",
        "content-sounds",
        ll.$0(c),
      ]),
      b,
      null
    );
  };
  ll.$0 = function (a) {
    var b = a.lastIndexOf(".");
    if (b !== -1) {
      a = a.substr(0, b);
    }
    return a + "_" + 64 + ".mp3";
  };
  var ln = function (c, d) {
    this.$b = null;
    this.$a = null;
    this.$c = null;
    this.$2$1 = null;
    lj.call(this, d);
    this.$9(c);
    this.$c = h1.fromCanvasFont("{0}px monospace", null);
    try {
      this.$b = this.$c
        .measureWidth(
          "abcdwxyz āćď αβγ جبأ רשת กขฃ абв աբգ अइउ ぁぃぅ 丁丂七 ァィゥ அஇஉ აბგ 가각갂",
          100,
          0
        )
        .toFixed(3);
      this.$a = this.$c
        .measureWidth(
          "abcdwxyz āćď αβγ جبأ רשת กขฃ абв աբգ अइउ ぁぃぅ 丁丂七 ァィゥ அஇஉ აბგ 가각갂",
          100,
          1
        )
        .toFixed(3);
    } catch (b) {
      var a = ss.Exception.wrap(b);
      this.$2("FontAsset() | " + a.get_message());
      this.$7();
      return;
    }
    this.$6();
  };
  ln.__typeName = "VEL.Skynet.View.Assets.Assets.$2";
  var lp = function (a, c) {
    this.$2$1 = null;
    this.$2$2 = null;
    lj.call(this, c);
    this.$a(a.getAttributeAsString("src"));
    var d = a.getAttributeAsString("cdn");
    if (ss.isNullOrEmptyString(d)) {
      throw new ss.Exception(
        "no cdn for " + this.$9() + ". Element: " + a.toString()
      );
    }
    var b = ss.startsWithString(d, "/adminajax/test/");
    lp.$0.getXmlReader(d, b, ss.mkdel(this, this.$6));
  };
  lp.__typeName = "VEL.Skynet.View.Assets.Assets.$3";
  var lr = function (a, b) {
    this.$2$1 = null;
    this.$2$2 = null;
    lj.call(this, b);
    this.$a(a.get_sourceName());
    this.$8(lB.$7.$1().$0());
    var c = this.$7();
    c.onload = ss.delegateCombine(c.onload, ss.mkdel(this, this.$6));
    this.$7().src = a.toDataSrc();
  };
  lr.__typeName = "VEL.Skynet.View.Assets.Assets.$4";
  lr.$0 = function (a, g, h) {
    this.$2$1 = null;
    this.$2$2 = null;
    lj.call(this, h);
    this.$a(a.getAttributeAsString("src").toLowerCase());
    this.$8(lB.$7.$1().$0());
    var b = this.$7();
    b.onload = ss.delegateCombine(b.onload, ss.mkdel(this, this.$6));
    var c = a.getAttributeAsString("cdn").toLowerCase();
    if (g) {
      var d = a.getAttributeAsString("webp");
      if (ss.isValue(d)) {
        var f = this.$7();
        f.onerror = ss.delegateCombine(
          f.onerror,
          ss.mkdel(this, function (i) {
            this.$7().src = c;
          })
        );
        this.$7().src = d.toLowerCase();
      } else {
        this.$7().src = c;
      }
    } else {
      this.$7().src = c;
    }
  };
  var lt = function () {
    this.$1$1 = 0;
    this.$1$2 = 0;
    this.$1$3 = null;
    this.$1$4 = 0;
    this.$1$5 = 0;
  };
  lt.__typeName = "VEL.Skynet.View.Assets.Fonts.FontAdjustment";
  global.VEL.Skynet.View.Assets.Fonts.FontAdjustment = lt;
  var lv = function () {
    this.$1$1 = null;
    this.$1$2 = 0;
    this.$1$3 = null;
    this.$1$4 = null;
  };
  lv.__typeName = "VEL.Skynet.View.Assets.Fonts.FontFace";
  lv.isGenericFontFamily = function (a) {
    return Enumerable.from(lv.genericFontFamilies).contains(a);
  };
  global.VEL.Skynet.View.Assets.Fonts.FontFace = lv;
  var lx = function () {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
  };
  lx.__typeName = "VEL.Skynet.View.Assets.Fonts.FontManager";
  global.VEL.Skynet.View.Assets.Fonts.FontManager = lx;
  var lz = function () {
    this.$1$1 = 0;
    this.$1$2 = null;
    this.$1$3 = null;
    this.$1$4 = null;
  };
  lz.__typeName = "VEL.Skynet.View.Assets.Fonts.FontStack";
  global.VEL.Skynet.View.Assets.Fonts.FontStack = lz;
  var lB = function () {};
  lB.__typeName = "VEL.Skynet.View.Assets.Reusables.$0";
  lB.$1 = function () {
    return lB.$6.$1().$0();
  };
  lB.$2 = function () {
    return lB.$8.$1().$0();
  };
  lB.$3 = function () {
    var a = lB.$8.$1();
    a.$3(true);
    a.$4 = true;
    return a.$0();
  };
  lB.$4 = function (a) {
    if (ss.isNullOrUndefined(a)) {
      return;
    }
    lB.$8.$2(a);
    lB.$6.$2(a);
  };
  lB.$0 = function () {
    lB.$6.dispose();
    lB.$8.dispose();
  };
  var lD = function (a) {
    var b = function (c) {
      this.$5 = false;
      this.$4 = false;
      this.$1$1 = null;
      this.$1(c);
    };
    ss.registerGenericClassInstance(
      b,
      lD,
      [a],
      {
        $2: function () {
          return this.$5;
        },
        $3: function (f) {
          this.$5 = f;
          if (f) {
            this.$0().id = "";
            this.$0().className = "";
            this.$0().onerror = null;
            this.$0().onload = null;
            this.$0().removeAttribute("style");
            var c = this.$0();
            var d = ss.safeCast(
              c,
              ss.isValue(c) &&
                ss.isInstanceOfType(c, Element) &&
                c.tagName === "IMG"
            );
            if (ss.isValue(d)) {
              d.src =
                "data:image/gif;base64,R0lGODdhAQABAPAAAP8AAAAAACwAAAAAAQABAAACAkQBADs=";
            }
          }
        },
        $0: function () {
          return this.$1$1;
        },
        $1: function (c) {
          this.$1$1 = c;
        },
      },
      function () {
        return null;
      },
      function () {
        return [];
      }
    );
    return b;
  };
  lD.__typeName = "VEL.Skynet.View.Assets.Reusables.$1";
  ss.initGenericClass(lD, e, 1);
  var lF = function (a) {
    var b = function (c) {
      this.$7 = null;
      this.$6 = null;
      this.$7 = c;
      this.$6 = new (ss.makeGenericType(ss.Dictionary$2, [
        a,
        ss.makeGenericType(lD, [a]),
      ]))();
    };
    ss.registerGenericClassInstance(
      b,
      lF,
      [a],
      {
        $5: function () {
          return Enumerable.from(this.$6.get_values()).count(function (c) {
            return !c.$2();
          });
        },
        $3: function () {
          return this.$6.get_count();
        },
        $4: function () {
          return Enumerable.from(this.$6.get_values()).sum(function (h) {
            if (h.$2()) {
              return 0;
            }
            var c = h.$0();
            var d = ss.safeCast(
              c,
              ss.isValue(c) &&
                ss.isInstanceOfType(c, Element) &&
                c.tagName === "CANVAS"
            );
            if (ss.isValue(d)) {
              return d.width * d.height;
            }
            var f = h.$0();
            var g = ss.safeCast(
              f,
              ss.isValue(f) &&
                ss.isInstanceOfType(f, Element) &&
                f.tagName === "IMG"
            );
            if (ss.isValue(g)) {
              return g.width * g.height;
            }
            return 0;
          });
        },
        $0: function (c) {
          return Enumerable.from(this.$6.get_values()).firstOrDefault(function (
            d
          ) {
            return ss.referenceEquals(d.$0(), c);
          },
          ss.getDefaultValue(ss.makeGenericType(lD, [a])));
        },
        $1: function () {
          var h = Enumerable.from(this.$6.get_values()).firstOrDefault(
            function (i) {
              return i.$2();
            },
            ss.getDefaultValue(ss.makeGenericType(lD, [a]))
          );
          if (ss.isNullOrUndefined(h)) {
            var c = ss.cast(document.createElement(this.$7), a);
            h = new (ss.makeGenericType(lD, [a]))(c);
            h.$0().setAttribute("crossOrigin", "anonymous");
            this.$6.add(c, h);
          } else {
            if (this.$7 === "canvas") {
              var d = h.$0();
              var f = ss.safeCast(
                d,
                ss.isValue(d) &&
                  ss.isInstanceOfType(d, Element) &&
                  d.tagName === "CANVAS"
              );
              var g = ss.cast(f.getContext("2d"), CanvasRenderingContext2D);
              g.clearRect(0, 0, f.width, f.height);
            }
          }
          h.$3(false);
          h.$4 = false;
          return h;
        },
        $2: function (d) {
          var c = {};
          if (this.$6.tryGetValue(d, c)) {
            c.$.$3(true);
          }
        },
        dispose: function () {
          var d = ss.getEnumerator(this.$6.get_values());
          try {
            while (d.moveNext()) {
              var c = d.current();
              c.$3(true);
            }
          } finally {
            d.dispose();
          }
        },
      },
      function () {
        return null;
      },
      function () {
        return [ss.IDisposable];
      }
    );
    return b;
  };
  lF.__typeName = "VEL.Skynet.View.Assets.Reusables.$2";
  ss.initGenericClass(lF, e, 1);
  var lH = function () {};
  lH.__typeName = "VEL.Skynet.View.Assets.Reusables.ReusableTest";
  lH.getMemory = function () {
    return ss.Int32.div(lB.$7.$4() + lB.$6.$4() + lB.$8.$4(), 1024);
  };
  lH.assertLeak = function (a) {
    if (
      !lH.useAssertLeak ||
      ss.isNullOrUndefined(a) ||
      !(
        ss.isValue(a) &&
        ss.isInstanceOfType(a, Element) &&
        a.tagName === "CANVAS"
      )
    ) {
      return;
    }
    var b = ss.cast(
      a,
      ss.isValue(a) && ss.isInstanceOfType(a, Element) && a.tagName === "CANVAS"
    );
    var c = lB.$8.$0(b) || lB.$6.$0(b);
    if (ss.isNullOrUndefined(c)) {
      throw new ss.Exception(
        "in-use canvas #" +
          ss.getHashCode(a) +
          " not registered. CanvasElement details: " +
          lH.$0(b)
      );
    }
    if (c.$2() && !c.$4) {
      throw new ss.Exception(
        "in-use canvas #" +
          ss.getHashCode(a) +
          " marked as available. CanvasElement details: " +
          lH.$0(b)
      );
    }
  };
  lH.debugMemory = function () {
    return (
      "{image:[" +
      lB.$7.$3() +
      "," +
      lB.$7.$5() +
      "," +
      lB.$7.$4() +
      "],globalCanvas:[" +
      lB.$6.$3() +
      "," +
      lB.$6.$5() +
      "," +
      lB.$6.$4() +
      "],pageCanvas:[" +
      lB.$8.$3() +
      "," +
      lB.$8.$5() +
      "," +
      lB.$8.$4() +
      "]}"
    );
  };
  lH.$0 = function (a) {
    return (
      "Width=" +
      a.width +
      ", Height=" +
      a.height +
      ", Id=" +
      a.id +
      ", TabIndex=" +
      a.tabIndex +
      ", ClassName=" +
      a.className +
      ", ParentElement=" +
      a.parentElement +
      ", ClassList=[" +
      [a.classList].join(",")
    );
  };
  global.VEL.Skynet.View.Assets.Reusables.ReusableTest = lH;
  var lJ = function (a) {
    this.$i = 0;
    this.$l = 0;
    this.$j = 0;
    this.$k = null;
    this.$f = null;
    this.$h = null;
    this.$g = null;
    this.$g = a;
  };
  lJ.__typeName = "VEL.Skynet.View.Audio.$0";
  var lL = function () {};
  lL.__typeName = "VEL.Skynet.View.Audio.$1";
  var lN = function () {};
  lN.__typeName = "VEL.Skynet.View.Audio.$2";
  lN.$5 = function () {
    if (!lN.$6) {
      lN.$0();
    }
    return ss.isValue(lN.$3());
  };
  lN.$3 = function () {
    return lN.$1$1;
  };
  lN.$4 = function (a) {
    lN.$1$1 = a;
  };
  lN.$2 = function (a) {
    var b = lN.$5();
    if (b) {
      var c = lN.$3();
      b = c.state === "suspended" || c.state === "interrupted";
    }
    if (b) {
      lN.$1();
      lN.$3().resume().then(a);
    } else {
      a();
    }
  };
  lN.$0 = function () {
    lN.$6 = true;
    try {
      lN.$4(
        new (window.AudioContext ||
          window.webkitAudioContext ||
          window.mozAudioContext ||
          window.msAudioContext ||
          window.oAudioContext)()
      );
      if (!(lN.$3().resume != undefined)) {
        lN.$4(null);
        return;
      }
    } catch (a) {
      lN.$4(null);
    }
  };
  lN.$1 = function () {
    if (ss.isValue(lN.$7)) {
      return;
    }
    var a =
      "data:audio/mp3;base64,//MkxAAHiAICWABElBeKPL/RANb2w+yiT1g/gTok//lP/W/l3h8QO/OCdCqCW2Cw//MkxAQHkAIWUAhEmAQXWUOFW2dxPu//9mr60ElY5sseQ+xxesmHKtZr7bsqqX2L//MkxAgFwAYiQAhEAC2hq22d3///9FTV6tA36JdgBJoOGgc+7qvqej5Zu7/7uI9l//MkxBQHAAYi8AhEAO193vt9KGOq+6qcT7hhfN5FTInmwk8RkqKImTM55pRQHQSq//MkxBsGkgoIAABHhTACIJLf99nVI///yuW1uBqWfEu7CgNPWGpUadBmZ////4sL//MkxCMHMAH9iABEmAsKioqKigsLCwtVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVV//MkxCkECAUYCAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
    var b = document.createElement("audio");
    lN.$7 = ss.cast(
      b,
      ss.isValue(b) && ss.isInstanceOfType(b, Element) && b.tagName === "AUDIO"
    );
    lN.$7.setAttribute("control", "false");
    lN.$7.setAttribute("preload", "auto");
    lN.$7.setAttribute("loop", "loop");
    lN.$7.setAttribute("src", a);
    lN.$7.play();
  };
  var lP = function (a, b, c) {
    this.$0 = null;
    i8.call(this, a, b, c);
    this.$0 = i7.getAudioElement(this.source);
  };
  lP.__typeName = "VEL.Skynet.View.Audio.$3";
  var aa = function (a) {
    this.$6 = null;
    this.$5 = false;
    this.$3 = 0;
    this.$4 = 0;
    this.$6 = [a];
  };
  aa.__typeName = "VEL.Skynet.View.Audio.$4";
  aa.$1 = function (a, b, c) {
    this.$6 = null;
    this.$5 = false;
    this.$3 = 0;
    this.$4 = 0;
    this.$6 = a;
    this.$5 = b;
    this.$3 = c;
  };
  var ac = function (a, d, f, b, c) {
    this.$9 = 0;
    this.$a = 0;
    aa.$1.call(this, a, d, c);
    this.$9 = f;
    this.$a = b;
  };
  ac.__typeName = "VEL.Skynet.View.Audio.$5";
  var a5 = function (a, c, d, b) {
    this.$2 = null;
    this.$4 = null;
    this.$3 = null;
    this.$1 = null;
    this.$0 = null;
    i8.call(this, a, c, b);
    this.$4 = d;
    this.$2 = lN.$3();
  };
  a5.__typeName = "VEL.Skynet.View.Audio.$6";
  var f9 = function () {};
  f9.__typeName = "VEL.Skynet.View.Audio.$7";
  f9.$0 = function (a, c, d, b) {
    if (lN.$5()) {
      return new a5(a, c, d, b);
    } else {
      return new lP(a, c, b);
    }
  };
  var id = function () {};
  id.__typeName = "VEL.Skynet.View.Audio.AudioManager";
  id.getLoopingSoundMasterVolume = function (a) {
    return id.$j.get_item(a);
  };
  id.initialize = function (a, c, d) {
    var b = i7.getXmlReader("Audios", 0, true);
    id.initialize$1(a, c, b, d);
  };
  id.initialize$1 = function (a, n, o, b) {
    id.$k = null;
    id.$d = null;
    id.$o = new (ss.makeGenericType(ss.Dictionary$2, [
      VEL.Skynet.Core.View.SoundEnum,
      aa,
    ]))();
    id.$i = new (ss.makeGenericType(ss.Dictionary$2, [
      VEL.Skynet.Core.View.LoopingSoundEnum,
      ac,
    ]))();
    id.$c = new (ss.makeGenericType(ss.Dictionary$2, [String, aa]))();
    id.$n = new (ss.makeGenericType(ss.Dictionary$2, [lM, Array]))();
    id.$l = [];
    id.$m = new (ss.makeGenericType(ss.Dictionary$2, [
      VEL.Skynet.Core.View.LoopingSoundEnum,
      lJ,
    ]))();
    id.$e = new (ss.makeGenericType(ss.Dictionary$2, [
      VEL.Skynet.Core.ContentModels.Entities.ContentSound,
      ib,
    ]))();
    id.$f = 0;
    var c = [];
    c.push(3);
    id.$p = c;
    if (!i7.get_isSoundIncluded()) {
      return;
    }
    id.setMuteMusic(b);
    id.setMuteSounds(b);
    var d = a.parse(lE).call(a, o.root);
    var f = new lA(d);
    var g = Enumerable.from(f.$0()).ofType(lu);
    var h = Enumerable.from(f.$0()).except(g);
    var i = g.firstOrDefault(function (p) {
      return (
        p.$1().get_type() === n.musicType &&
        ss.isValue(p.$1().get_scene()) &&
        (ss.referenceEquals(n.scene, p.$1().get_scene()) ||
          (ss.isNullOrEmptyString(n.scene) &&
            VEL.Skynet.Core.Toolbox.Extensions.StringExtensions.equalWithoutCase(
              p.$1().get_scene(),
              "default"
            )))
      );
    }, ss.getDefaultValue(lu));
    if (ss.isNullOrUndefined(i)) {
      i = g.firstOrDefault(function (p) {
        return (
          p.$1().get_type() === n.musicType &&
          ss.isNullOrUndefined(p.$1().get_scene())
        );
      }, ss.getDefaultValue(lu));
    }
    if (ss.isValue(i)) {
      id.$d = i.$0(n);
    }
    var j = h.getEnumerator();
    try {
      while (j.moveNext()) {
        var k = j.current();
        if (ss.isInstanceOfType(k, ls)) {
          var l = ss.cast(k, ls);
          id.$i.set_item(l.$1().get_type(), l.$0(n));
        } else {
          var m = ss.cast(k, lw);
          if (ss.isValue(m.$1().get_animation())) {
            id.$c.set_item(m.$1().get_animation(), m.$0(n));
          } else {
            id.$o.set_item(m.$1().get_type(), m.$0(n));
          }
        }
      }
    } finally {
      j.dispose();
    }
  };
  id.playMusic = function () {
    id.$r = true;
    if (!i7.get_isSoundIncluded()) {
      return;
    }
    if (ss.isValue(id.$k)) {
      id.$k.stop();
    }
    if (ss.isValue(id.$d)) {
      id.$a();
    }
  };
  id.$a = function () {
    id.$k = id.$d.$1();
    if (ss.isValue(id.$k)) {
      id.$k.play(id.$q.get_item(1), null, null, null);
    } else {
      if (id.$h) {
        VEL.Skynet.Core.Toolbox.Threading.ThreadManager.setTimeout(
          null,
          100,
          id.$a,
          true,
          true
        );
      }
    }
  };
  id.stopMusic = function () {
    if (ss.isValue(id.$k)) {
      id.$k.stop();
    }
    id.$9(1);
    if (ss.isValue(id.$m)) {
      var a = Enumerable.from(id.$m.get_values())
        .where(function (c) {
          return c.$d() === 1;
        })
        .getEnumerator();
      try {
        while (a.moveNext()) {
          var b = a.current();
          b.$4();
        }
      } finally {
        a.dispose();
      }
    }
  };
  id.hasMusic = function () {
    var a =
      ss.isValue(id.$d) ||
      (ss.isValue(id.$c) &&
        Enumerable.from(id.$c.get_values()).any(function (b) {
          return b.$3 === 1;
        })) ||
      (ss.isValue(id.$o) &&
        Enumerable.from(id.$o.get_values()).any(function (b) {
          return b.$3 === 1;
        })) ||
      (ss.isValue(id.$i) &&
        Enumerable.from(id.$i.get_values()).any(function (b) {
          return b.$3 === 1;
        }));
    return a;
  };
  id.setMuteMusic = function (a) {
    id.$5(a ? 0 : 0.05, false);
    if (id.$8(a)) {
      id.$0();
    }
    id.$6(a, 1);
  };
  id.$8 = function (a) {
    return !a && !id.$h && ss.isNullOrUndefined(id.$k) && ss.isValue(id.$d);
  };
  id.$0 = function () {
    i7.lazyLoadMusic();
    id.$h = true;
    if (id.$r) {
      id.$a();
    }
  };
  id.$5 = function (a, d) {
    if (!d) {
      id.$q.set_item(1, a);
    }
    if (ss.isValue(id.$k)) {
      id.$k.setVolume(a);
    }
    var f = id.$1(1);
    for (var b = 0; b < f.length; b++) {
      var c = f[b];
      c.setVolume(a);
    }
  };
  id.play$1 = function (a, c) {
    if (!i7.get_isSoundIncluded()) {
      if (!ss.staticEquals(c, null)) {
        c();
      }
      return;
    }
    var d = {};
    if (!id.$e.tryGetValue(a, d)) {
      var b = 2;
      d.$ = f9.$0(a.url, b, null, false);
      id.$e.add(a, d.$);
    }
    if (!d.$.get_isLoaded()) {
      throw new a4("sound not loaded " + d.$.get_src());
    }
    id.$4();
    d.$.play(id.$g, null, null, function () {
      id.$3(c);
    });
    if (!ss.contains(id.$l, d.$)) {
      id.$l.push(d.$);
    }
  };
  id.stopContentSounds = function () {
    if (ss.isNullOrUndefined(id.$l)) {
      return;
    }
    for (var a = 0; a < id.$l.length; a++) {
      var b = id.$l[a];
      b.stop();
    }
  };
  id.$4 = function () {
    id.$f++;
    id.$5(id.$q.get_item(1) * 0.1, true);
  };
  id.$3 = function (a) {
    if (!ss.staticEquals(a, null)) {
      a();
    }
    id.$f--;
    if (id.$f === 0) {
      id.$5(id.$q.get_item(1), false);
    }
  };
  id.play = function (a, f) {
    if (!i7.get_isSoundIncluded()) {
      if (!ss.staticEquals(f, null)) {
        f();
      }
      return;
    }
    if (!id.$c.containsKey(a)) {
      throw new a4("SoundAnimation " + a + " isn't included in the Audios.xml");
    }
    var g = id.$c.get_item(a).$3;
    var b = id.$q.get_item(g);
    if (b > 0) {
      var c = id.$c.get_item(a).$1();
      if (ss.isValue(c)) {
        c.play(b, null, null, f);
        var d = id.$1(g);
        if (!ss.contains(d, c)) {
          d.push(c);
        }
        return;
      } else {
        b1.error("Sound.Animation = " + a + " not loaded");
      }
    }
    if (!ss.staticEquals(f, null)) {
      f();
    }
  };
  id.$1 = function (a) {
    if (ss.isNullOrUndefined(id.$n)) {
      id.$n = new (ss.makeGenericType(ss.Dictionary$2, [lM, Array]))();
    }
    if (!id.$n.containsKey(a)) {
      id.$n.set_item(a, []);
    }
    return id.$n.get_item(a);
  };
  id.play$3 = function (a, h, i, b, c) {
    var d = {};
    var f = id.$2(a, d);
    if (ss.isValue(f)) {
      f.play(id.$q.get_item(d.$) * h, i, b, c);
      var g = id.$1(d.$);
      if (!ss.contains(g, f) && !ss.contains(id.$p, a)) {
        g.push(f);
      }
    } else {
      if (!ss.staticEquals(c, null)) {
        c();
      }
    }
  };
  id.$2 = function (a, c) {
    c.$ = 0;
    if (!i7.get_isSoundIncluded()) {
      return null;
    }
    if (!id.$o.containsKey(a)) {
      b1.warning(
        "sound " +
          ss.Enum.getName(VEL.Skynet.Core.View.SoundEnum, a) +
          " not included in sounds list"
      );
      return null;
    }
    var d = id.$o.get_item(a);
    c.$ = d.$3;
    if (id.$q.get_item(c.$) <= 0) {
      return null;
    }
    var b = d.$1();
    if (ss.isNullOrUndefined(b)) {
      b1.error(
        "sound " +
          ss.Enum.getName(VEL.Skynet.Core.View.SoundEnum, a) +
          " not loaded"
      );
    }
    return b;
  };
  id.stopSoundEffects = function () {
    id.$9(0);
  };
  id.$9 = function (a) {
    var c = id.$1(a);
    for (var d = 0; d < c.length; d++) {
      var b = c[d];
      b.stop();
    }
  };
  id.$7 = function (a) {
    id.$q.set_item(0, a ? 0 : 0.1);
    var c = id.$1(0);
    for (var d = 0; d < c.length; d++) {
      var b = c[d];
      b.setVolume(id.$q.get_item(0));
    }
  };
  id.play$2 = function (a, d, f, b, c) {
    if (!i7.get_isSoundIncluded() || !id.$i.containsKey(a)) {
      return;
    }
    if (!id.$m.containsKey(a)) {
      id.$m.set_item(a, new lJ(id.$i.get_item(a)));
    }
    id.$m.get_item(a).$3(d, f, b, c);
  };
  id.stopLoopingSoundsInstantly = function () {
    if (ss.isNullOrUndefined(id.$m)) {
      id.$m = new (ss.makeGenericType(ss.Dictionary$2, [
        VEL.Skynet.Core.View.LoopingSoundEnum,
        lJ,
      ]))();
    }
    var a = ss.getEnumerator(id.$m.get_values());
    try {
      while (a.moveNext()) {
        var b = a.current();
        b.$4();
      }
    } finally {
      a.dispose();
    }
    id.$m.clear();
  };
  id.stopLoopingSounds = function (a) {
    var b = ss.getEnumerator(id.$m.get_keys());
    try {
      while (b.moveNext()) {
        var c = b.current();
        id.stopLoopingSound(c, a);
      }
    } finally {
      b.dispose();
    }
  };
  id.pauseLoopingSounds = function (a) {
    var b = ss.getEnumerator(id.$m.get_values());
    try {
      while (b.moveNext()) {
        var c = b.current();
        c.$5(a);
      }
    } finally {
      b.dispose();
    }
  };
  id.resumeLoopingSounds = function (a) {
    var b = ss.getEnumerator(id.$m.get_values());
    try {
      while (b.moveNext()) {
        var c = b.current();
        c.$7(a);
      }
    } finally {
      b.dispose();
    }
  };
  id.stopLoopingSound = function (a, b) {
    if (id.$m.containsKey(a)) {
      id.$m.get_item(a).$9(b);
      return;
    }
  };
  id.$6 = function (a, d) {
    var f = a ? 0 : 0.05;
    id.$j.set_item(d, f);
    var b = Enumerable.from(id.$m.get_values())
      .where(function (g) {
        return g.$d() === d;
      })
      .getEnumerator();
    try {
      while (b.moveNext()) {
        var c = b.current();
        c.$0();
      }
    } finally {
      b.dispose();
    }
  };
  id.setMuteSounds = function (a) {
    id.$7(a);
    id.$6(a, 0);
  };
  global.VEL.Skynet.View.Audio.AudioManager = id;
  var i8 = function (a, b, c) {
    this.source = null;
    this.volume = 0;
    this.isLooping = false;
    this.source = a;
    this.volume = b;
    this.isLooping = c;
  };
  i8.__typeName = "VEL.Skynet.View.Audio.BaseAudioSound";
  global.VEL.Skynet.View.Audio.BaseAudioSound = i8;
  var j0 = function () {};
  j0.__typeName = "VEL.Skynet.View.Builders.$0";
  j0.$5 = function (a) {
    var d = i7.getXmlReaders("Scenes");
    for (var f = 0; f < d.length; f++) {
      var b = d[f];
      a.scenes.push(new VEL.Skynet.Core.View.Testing.TestCardScene(b.src));
    }
    var c = i7.getXmlReaders("Builders");
    j0.$1(VEL.Skynet.Core.View.ObjectDatas.TileShapeEnum).call(
      null,
      a,
      c,
      "Tile",
      "Shape"
    );
    j0.$1(VEL.Skynet.Core.View.ObjectDatas.Place.PlaceEnum).call(
      null,
      a,
      c,
      "Place",
      "Type"
    );
    j0.$1(VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteEnum).call(
      null,
      a,
      c,
      "Sprite",
      "Type"
    );
    j0.$1(VEL.Skynet.Core.View.ObjectDatas.ImageTypeEnum).call(
      null,
      a,
      c,
      "Image",
      "Type"
    );
    a.addJump("Others");
    j0.$0(a, c, "Label");
    j0.$0(a, c, "Mosaic");
    j0.$0(a, c, "Conveyor");
    a.addJump(null);
    if (a.builderIndex < 0 || a.builderIndex >= a.builders.length) {
      a.builderIndex = 0;
    }
    if (a.sceneIndex < 0 || a.sceneIndex >= a.scenes.length) {
      a.sceneIndex = 0;
    }
  };
  j0.$4 = function (a) {
    if (a.section === 0) {
      if (a.get_currentBuilder().isMissing) {
        return null;
      }
      switch (a.get_currentBuilder().get_control()) {
        case "Tiles":
          var k = j0
            .$6(VEL.Skynet.Core.View.ObjectDatas.TileShapeEnum)
            .call(null, a.get_currentBuilder().get_type());
          var l = Enumerable.from(j0.$g).firstOrDefault(function (m) {
            return m.shape === k;
          }, ss.getDefaultValue(
            VEL.Skynet.Core.View.ObjectDatas.Tile.TileData
          ));
          if (ss.isValue(l)) {
            return l;
          }
          throw new ss.NotImplementedException(
            "No TileData available for shape " + k
          );
        case "Places":
          var b = j0
            .$6(VEL.Skynet.Core.View.ObjectDatas.Place.PlaceEnum)
            .call(null, a.get_currentBuilder().get_type());
          var c = Enumerable.from(j0.$d).firstOrDefault(function (m) {
            return m.get_placeStyle() === b;
          }, ss.getDefaultValue(
            VEL.Skynet.Core.View.ObjectDatas.Place.PlaceData
          ));
          if (ss.isNullOrUndefined(c)) {
            var d = new VEL.Skynet.Core.View.ObjectDatas.Place.PlaceData();
            d.set_placeStyle(b);
            c = d;
          }
          var f = c;
          f.isEliminated = false;
          return f;
        case "Sprites":
          var g = j0
            .$6(VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteEnum)
            .call(null, a.get_currentBuilder().get_type());
          var h = Enumerable.from(j0.$f).firstOrDefault(function (m) {
            return m.spriteType === g;
          }, ss.getDefaultValue(
            VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteData
          ));
          if (ss.isValue(h)) {
            return h;
          }
          throw new ss.NotImplementedException(
            "No SpriteData available for type " + g
          );
        case "Images":
          var i = j0
            .$6(VEL.Skynet.Core.View.ObjectDatas.ImageTypeEnum)
            .call(null, a.get_currentBuilder().get_type());
          var j = Enumerable.from(j0.$b).firstOrDefault(function (m) {
            return m.get_type() === i;
          }, ss.getDefaultValue(
            VEL.Skynet.Core.View.ObjectDatas.Image.ImageData
          ));
          if (ss.isValue(j)) {
            return j;
          }
          throw new ss.NotImplementedException(
            "No ImageData available for type " + i
          );
        case "Label":
          return new VEL.Skynet.Core.View.ObjectDatas.Label.QuizLabelData.$ctor1(
            j0.$e
          );
        case "Conveyor":
          return new VEL.Skynet.Core.View.ObjectDatas.Conveyor.ConveyorData();
        case "Mosaic":
          return new VEL.Skynet.Core.View.ObjectDatas.Mosaic.MosaicData.$ctor1(
            VEL.Skynet.Core.ContentModels.Entities.Image.get_test()
          );
      }
      throw new ss.NotImplementedException(
        "No valid testCard.CurrentBuilder.Control case for testCard.CurrentBuilder.Src: '" +
          a.get_currentBuilder().src +
          "', testCard.CurrentBuilder.Control: '" +
          a.get_currentBuilder().get_control() +
          "'"
      );
    } else {
      return null;
    }
  };
  j0.$2 = function (a, b) {
    a.set_appearTrigger(0);
    if (
      ss.isInstanceOfType(
        a,
        VEL.Skynet.Core.View.ObjectControls.ILabelControl
      )
    ) {
      ss.cast(
        a,
        VEL.Skynet.Core.View.ObjectControls.ILabelControl
      ).setTypesetting(500, 200, false);
    }
    if (
      ss.isInstanceOfType(
        a,
        VEL.Skynet.Core.View.ObjectControls.IMosaicControl
      )
    ) {
      a.setSize(500, 500);
    }
    if (
      ss.isInstanceOfType(
        a,
        VEL.Skynet.Core.View.ObjectControls.IImageControl
      )
    ) {
      a.setSize(250, 250);
    }
    if (
      ss.isInstanceOfType(
        a,
        VEL.Skynet.Core.View.ObjectControls.IPlaceControl
      )
    ) {
      var c = ss
        .cast(a.get_data(), VEL.Skynet.Core.View.ObjectDatas.Place.PlaceData)
        .get_placeStyle();
      switch (c) {
        case 11:
          a.setSize(b.width, b.height);
          break;
        case 15:
        case 3:
        case 7:
          a.setSize(b.width, 100);
          break;
        case 8:
          a.setSize(36, 36);
          break;
        case 9:
          a.setSize(100, 100);
          break;
        case 10:
          a.setSize(120, 120);
          break;
        case 13:
          a.setSize(50, 122);
          break;
        case 14:
          a.setSize(b.width, (b.width * 3) / 4);
          break;
        default:
          a.setSize(250, 250);
          break;
      }
    }
    if (
      ss.isInstanceOfType(
        a,
        VEL.Skynet.Core.View.ObjectControls.IConveyorControl
      )
    ) {
      a.setSize(b.width, b.height);
    }
  };
  j0.$7 = function (a, b) {
    if (
      ss.isInstanceOfType(
        a,
        VEL.Skynet.Core.View.ObjectControls.IConveyorControl
      )
    ) {
      var c = ss.cast(a, ko);
      c.set_beltPosition(
        ss.cast(
          a.get_data(),
          VEL.Skynet.Core.View.ObjectDatas.Conveyor.ConveyorData
        ).offset * b.width
      );
    }
    a.setTarget(
      (b.width - a.get_outerWidth()) / 2,
      (b.height - a.get_outerHeight()) / 2
    );
  };
  j0.$6 = function (a) {
    return function (g) {
      var h = ss.Enum.getValues(a);
      var b = g.trim().toLowerCase();
      for (var c = 0; c < h.length; c++) {
        var d = h[c];
        var f = ss.Enum.getName(a, d);
        if (ss.referenceEquals(f.toString().trim().toLowerCase(), b)) {
          return ss.cast(d, a);
        }
      }
      throw new ss.InvalidOperationException(g);
    };
  };
  j0.$3 = function (a) {
    var i = new (ss.makeGenericType(ss.Dictionary$2, [String, String]))();
    var j = ss.getEnumerator(a.root.getDescendents$1("EventTriggers"));
    try {
      while (j.moveNext()) {
        var b = j.current();
        var c = b.get_children();
        for (var d = 0; d < c.length; d++) {
          var f = c[d];
          var g = f.getAttributeAsString("Name");
          var h = f.getAttributeAsString("ResourceName");
          if (i.containsKey(g)) {
            i.set_item(g, i.get_item(g) + ("+" + h));
          } else {
            i.set_item(g, h);
          }
        }
      }
    } finally {
      j.dispose();
    }
    return i;
  };
  j0.$1 = function (a) {
    return function (l, m, b, c) {
      l.addJump(b + "s");
      var d = false;
      var f = ss.Enum.getValues(a);
      for (var g = 0; g < f.length; g++) {
        var h = f[g];
        var i = { $: ss.Enum.getName(a, h) };
        var j = Enumerable.from(m).firstOrDefault(
          ss.mkdel({ type: i }, function (n) {
            return (
              ss.referenceEquals(n.root.get_tag(), b) &&
              ss.referenceEquals(n.root.getAttributeAsString(c), this.type.$)
            );
          }),
          ss.getDefaultValue(VEL.Skynet.Core.Toolbox.Serialization.XmlReader)
        );
        if (ss.isValue(j)) {
          var k = j0.$3(j);
          if (i.$ === "Default") {
            if (!d) {
              l.defaultBuilders.push(
                new VEL.Skynet.Core.View.Testing.TestCardBuilder(
                  j.src,
                  k,
                  false
                )
              );
              d = true;
            }
          } else {
            l.builders.push(
              new VEL.Skynet.Core.View.Testing.TestCardBuilder(
                j.src,
                k,
                false
              )
            );
          }
        } else {
          if (i.$ !== "Default") {
            l.builders.push(
              new VEL.Skynet.Core.View.Testing.TestCardBuilder(
                "/Builders/" + b + "s/" + i.$ + ".xml",
                null,
                true
              )
            );
          }
        }
      }
    };
  };
  j0.$0 = function (a, d, f) {
    var b = Enumerable.from(d).firstOrDefault(function (g) {
      return (
        ss.referenceEquals(g.root.get_tag(), f) ||
        ss.referenceEquals(g.root.get_tag(), f + "Builder")
      );
    }, ss.getDefaultValue(VEL.Skynet.Core.Toolbox.Serialization.XmlReader));
    if (ss.isValue(b)) {
      var c = j0.$3(b);
      a.builders.push(
        new VEL.Skynet.Core.View.Testing.TestCardBuilder(b.src, c, false)
      );
    } else {
      a.builders.push(
        new VEL.Skynet.Core.View.Testing.TestCardBuilder(
          "/Builders/" + f + ".xml",
          null,
          true
        )
      );
    }
  };
  var kS = function (a) {
    this.$5 = null;
    this.$a = null;
    this.$8 = null;
    this.$9 = null;
    this.$6 = null;
    this.$4 = null;
    this.$7 = null;
    this.$1$1 = null;
    var i = i7.getXmlReaders("Builders");
    this.$3([]);
    this.$5 = new af();
    this.$a = new al();
    this.$8 = new aj();
    this.$9 = new ah();
    for (var j = 0; j < i.length; j++) {
      var b = i[j];
      var c = a.parse(aW).call(a, b.root);
      if (ss.isInstanceOfType(c, aQ)) {
        var d = new aG(ss.cast(c, aQ));
        this.$5.$0(d);
      } else {
        if (ss.isInstanceOfType(c, a2)) {
          var f = new aA(ss.cast(c, a2));
          this.$a.$0(f);
        } else {
          if (ss.isInstanceOfType(c, aY)) {
            var g = new aI(ss.cast(c, aY));
            this.$8.$0(g);
          } else {
            if (ss.isInstanceOfType(c, a0)) {
              var h = new aC(ss.cast(c, a0));
              this.$9.$0(h);
            } else {
              if (ss.isInstanceOfType(c, aS)) {
                this.$6 = new ar(ss.cast(c, aS));
              } else {
                if (ss.isInstanceOfType(c, aM)) {
                  this.$4 = new aE(ss.cast(c, aM));
                } else {
                  if (ss.isInstanceOfType(c, aU)) {
                    this.$7 = new ay(ss.cast(c, aU));
                  } else {
                    throw new ss.NotImplementedException();
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  kS.__typeName = "VEL.Skynet.View.Builders.$1";
  var li = function () {
    this.$1$1 = null;
    this.$1$2 = false;
    this.$1$3 = null;
    this.$1$4 = 0;
    this.$1$5 = 0;
  };
  li.__typeName = "VEL.Skynet.View.Builders.EventTrigger";
  global.VEL.Skynet.View.Builders.EventTrigger = li;
  var lk = function () {};
  lk.__typeName = "VEL.Skynet.View.Builders.PropertyBindingEnum";
  global.VEL.Skynet.View.Builders.PropertyBindingEnum = lk;
  var lm = function () {};
  lm.__typeName = "VEL.Skynet.View.Builders.Audio.$0";
  var lo = function (a, b) {
    var c = function (d) {
      this.$2$1 = null;
      lm.call(this);
      this.$2(d);
    };
    ss.registerGenericClassInstance(
      c,
      lo,
      [a, b],
      {
        $1: function () {
          return this.$2$1;
        },
        $2: function (d) {
          this.$2$1 = d;
        },
        $0: null,
      },
      function () {
        return lm;
      },
      function () {
        return [];
      }
    );
    return c;
  };
  lo.__typeName = "VEL.Skynet.View.Builders.Audio.$1";
  ss.initGenericClass(lo, e, 2);
  var lq = function (a, b) {
    var c = function (d) {
      this.$3$1 = null;
      ss.makeGenericType(lo, [a, b]).call(this, d);
      if (ss.isValue(this.$1().get_children())) {
        this.$5(
          Enumerable.from(this.$1().get_children())
            .select(function (f) {
              return new ly(f);
            })
            .toArray()
        );
      }
    };
    ss.registerGenericClassInstance(
      c,
      lq,
      [a, b],
      {
        $4: function () {
          return this.$3$1;
        },
        $5: function (d) {
          this.$3$1 = d;
        },
        $3: function (d) {
          if (!Enumerable.from(this.$4()).any()) {
            throw new a4("Sounds empty");
          }
          var f = Enumerable.from(this.$4()).any(function (i) {
            return (
              ss.isValue(i.$0().get_scene()) &&
              ss.referenceEquals(i.$0().get_scene(), d.scene)
            );
          });
          var g = this.$4();
          if (f) {
            g = Enumerable.from(g).where(function (i) {
              return ss.referenceEquals(i.$0().get_scene(), d.scene);
            });
          } else {
            g = Enumerable.from(g).where(function (i) {
              return ss.isNullOrUndefined(i.$0().get_scene());
            });
          }
          var h = Enumerable.from(g)
            .select(
              ss.mkdel(this, function (i) {
                return f9.$0(
                  i.$0().get_src(),
                  this.$1().get_volume() * i.$0().get_volume(),
                  i.$0().get_playbackRate(),
                  false
                );
              })
            )
            .toArray();
          return h;
        },
      },
      function () {
        return ss.makeGenericType(lo, [a, b]);
      },
      function () {
        return [];
      }
    );
    return c;
  };
  lq.__typeName = "VEL.Skynet.View.Builders.Audio.$2";
  ss.initGenericClass(lq, e, 2);
  var ls = function (a) {
    ss.makeGenericType(lq, [lI, ac]).call(this, a);
  };
  ls.__typeName = "VEL.Skynet.View.Builders.Audio.$3";
  var lu = function (a) {
    ss.makeGenericType(lo, [lK, aa]).call(this, a);
  };
  lu.__typeName = "VEL.Skynet.View.Builders.Audio.$4";
  var lw = function (a) {
    ss.makeGenericType(lq, [lQ, aa]).call(this, a);
  };
  lw.__typeName = "VEL.Skynet.View.Builders.Audio.$5";
  var ly = function (a) {
    this.$1$1 = null;
    this.$1(a);
  };
  ly.__typeName = "VEL.Skynet.View.Builders.Audio.$6";
  var lA = function (a) {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$3(a);
    if (ss.isValue(this.$2().get_children())) {
      this.$1(
        Enumerable.from(this.$2().get_children())
          .select(function (b) {
            return d3.$0(b);
          })
          .toArray()
      );
    }
  };
  lA.__typeName = "VEL.Skynet.View.Builders.Audio.$7";
  var lC = function () {
    this.$1$1 = null;
    this.$1$2 = 0;
    this.set_volume(1);
  };
  lC.__typeName = "VEL.Skynet.View.Builders.Audio.AudioBuilderModel";
  global.VEL.Skynet.View.Builders.Audio.AudioBuilderModel = lC;
  var lE = function () {
    this.$1$1 = null;
  };
  lE.__typeName = "VEL.Skynet.View.Builders.Audio.AudiosBuilderModel";
  global.VEL.Skynet.View.Builders.Audio.AudiosBuilderModel = lE;
  var lG = function () {
    this.$2$1 = false;
    this.$2$2 = null;
    this.$2$3 = null;
    this.$2$4 = 0;
    lC.call(this);
  };
  lG.__typeName = "VEL.Skynet.View.Builders.Audio.BaseSoundsBuilderModel";
  global.VEL.Skynet.View.Builders.Audio.BaseSoundsBuilderModel = lG;
  var lI = function () {
    this.$3$1 = 0;
    this.$3$2 = 0;
    this.$3$3 = 0;
    lG.call(this);
    this.set_muteMode(0);
  };
  lI.__typeName = "VEL.Skynet.View.Builders.Audio.LoopSoundsBuilderModel";
  global.VEL.Skynet.View.Builders.Audio.LoopSoundsBuilderModel = lI;
  var lK = function () {
    this.$2$1 = 0;
    this.$2$2 = null;
    lC.call(this);
  };
  lK.__typeName = "VEL.Skynet.View.Builders.Audio.MusicBuilderModel";
  global.VEL.Skynet.View.Builders.Audio.MusicBuilderModel = lK;
  var lM = function () {};
  lM.__typeName = "VEL.Skynet.View.Builders.Audio.MuteModeEnum";
  global.VEL.Skynet.View.Builders.Audio.MuteModeEnum = lM;
  var lO = function () {
    this.$1$1 = null;
    this.$1$2 = 0;
    this.$1$3 = 0;
    this.$1$4 = null;
    this.set_volume(1);
  };
  lO.__typeName = "VEL.Skynet.View.Builders.Audio.SoundBuilderModel";
  global.VEL.Skynet.View.Builders.Audio.SoundBuilderModel = lO;
  var lQ = function () {
    this.$3$1 = 0;
    lG.call(this);
    this.set_muteMode(0);
  };
  lQ.__typeName = "VEL.Skynet.View.Builders.Audio.SoundsBuilderModel";
  global.VEL.Skynet.View.Builders.Audio.SoundsBuilderModel = lQ;
  var ad = function (a, b) {
    var c = function () {
      this.$3 = null;
      this.$2 = [];
    };
    ss.registerGenericClassInstance(
      c,
      ad,
      [a, b],
      {
        $1: null,
        $0: function (d) {
          if (d.$a()) {
            this.$3 = d;
            for (var f = 0; f < this.$2.length; f++) {
              var g = this.$2[f];
              g.$0(d);
            }
          } else {
            this.$2.push(d);
            d.$0(this.$3);
          }
        },
      },
      function () {
        return null;
      },
      function () {
        return [];
      }
    );
    return c;
  };
  ad.__typeName = "VEL.Skynet.View.Builders.Collections.$0";
  ss.initGenericClass(ad, e, 2);
  var af = function () {
    ss.makeGenericType(ad, [
      aG,
      VEL.Skynet.Core.View.ObjectDatas.Image.ImageData,
    ]).call(this);
  };
  af.__typeName = "VEL.Skynet.View.Builders.Collections.$1";
  var ah = function () {
    ss.makeGenericType(ad, [
      aC,
      VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteData,
    ]).call(this);
  };
  ah.__typeName = "VEL.Skynet.View.Builders.Collections.$2";
  var aj = function () {
    ss.makeGenericType(ad, [
      aI,
      VEL.Skynet.Core.View.ObjectDatas.Place.PlaceData,
    ]).call(this);
  };
  aj.__typeName = "VEL.Skynet.View.Builders.Collections.$3";
  var al = function () {
    ss.makeGenericType(ad, [
      aA,
      VEL.Skynet.Core.View.ObjectDatas.Tile.TileData,
    ]).call(this);
  };
  al.__typeName = "VEL.Skynet.View.Builders.Collections.$4";
  var an = function (a, b, c) {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
    this.$1$4 = null;
    if (ss.isValue(a)) {
      this.$9(new aB(a));
    }
    if (ss.isValue(b)) {
      this.$3(
        Enumerable.from(b)
          .select(function (d) {
            return c3.$0(d);
          })
          .toArray()
      );
    }
    this.$7(c);
  };
  an.__typeName = "VEL.Skynet.View.Builders.Controls.$0";
  var ap = function (a) {
    var b = function (c) {
      this.$2$1 = null;
      an.call(
        this,
        c.get_graphics(),
        c.get_decorations(),
        c.get_eventTriggers()
      );
      this.$c(c);
    };
    ss.registerGenericClassInstance(
      b,
      ap,
      [a],
      {
        $b: function () {
          return this.$2$1;
        },
        $c: function (c) {
          this.$2$1 = c;
        },
        $1: function () {
          return a9.$0(this.$b().get_binding());
        },
      },
      function () {
        return an;
      },
      function () {
        return [];
      }
    );
    return b;
  };
  ap.__typeName = "VEL.Skynet.View.Builders.Controls.$1";
  ss.initGenericClass(ap, e, 1);
  var ar = function (a) {
    this.$l = 0;
    this.$m = null;
    this.$4$1 = null;
    this.$4$2 = null;
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Label.LabelData,
      ks,
      aS,
    ]).call(this, a);
    if (ss.isValue(this.$b().get_glyph())) {
      this.$k(c5.$0(this.$b().get_glyph()));
    }
    if (ss.isValue(this.$b().get_font())) {
      this.$i(new e8.$ctor1(this.$b().get_font()));
    }
  };
  ar.__typeName = "VEL.Skynet.View.Builders.Controls.$10";
  var au = function (a) {
    this.$n = new (ss.makeGenericType(ss.Dictionary$2, [
      String,
      VEL.Skynet.Core.View.TileMeasurement,
    ]))();
    this.$3$1 = null;
    ss.makeGenericType(ap, [aO]).call(this, a);
    if (ss.isValue(this.$b().get_contentPanel())) {
      this.$l(new kT(this.$b().get_contentPanel()));
    }
  };
  au.__typeName = "VEL.Skynet.View.Builders.Controls.$2";
  var aw = function (a, c, d) {
    var b = function (f) {
      ss.makeGenericType(ap, [d]).call(this, f);
    };
    ss.registerGenericClassInstance(
      b,
      aw,
      [a, c, d],
      {
        $d: null,
        $e: function (f) {
          if (ss.isValue(this.$2())) {
            return Enumerable.from(this.$2())
              .selectMany(function (g) {
                return Enumerable.from(g.$0(f, null)).select(function (h) {
                  return ss.cast(h, j6);
                });
              })
              .toArray();
          } else {
            return null;
          }
        },
        $f: function (f) {
          var g = [];
          if (ss.isValue(this.$6())) {
            f.$0(this.$6());
            ss.arrayAddRange(
              g,
              Enumerable.from(this.$6()).select(function (i) {
                return i.get_name();
              })
            );
          }
          if (ss.isValue(this.$4()) && ss.isValue(this.$4().$6())) {
            var h = Enumerable.from(this.$4().$6()).where(function (i) {
              return !ss.contains(g, i.get_name());
            });
            f.$0(h);
          }
        },
      },
      function () {
        return ss.makeGenericType(ap, [d]);
      },
      function () {
        return [];
      }
    );
    return b;
  };
  aw.__typeName = "VEL.Skynet.View.Builders.Controls.$3";
  ss.initGenericClass(aw, e, 3);
  var ay = function (a) {
    this.$4$1 = null;
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Mosaic.MosaicData,
      kk,
      aU,
    ]).call(this, a);
    if (ss.isValue(this.$b().get_background())) {
      this.$h(new e6(a.get_background()));
    }
  };
  ay.__typeName = "VEL.Skynet.View.Builders.Controls.$4";
  var aA = function (a) {
    this.$j = 0;
    this.$4$1 = null;
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Tile.TileData,
      ky,
      a2,
    ]).call(this, a);
    if (ss.isValue(this.$b().get_faces())) {
      this.$i(
        Enumerable.from(this.$b().get_faces())
          .select(function (b) {
            return new au(b);
          })
          .toArray()
      );
    }
  };
  aA.__typeName = "VEL.Skynet.View.Builders.Controls.$5";
  var aC = function (a) {
    this.$h = 0;
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteData,
      km,
      a0,
    ]).call(this, a);
  };
  aC.__typeName = "VEL.Skynet.View.Builders.Controls.$6";
  var aE = function (a) {
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Conveyor.ConveyorData,
      ko,
      aM,
    ]).call(this, a);
  };
  aE.__typeName = "VEL.Skynet.View.Builders.Controls.$7";
  var aG = function (a) {
    this.$4$1 = null;
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Image.ImageData,
      kq,
      aQ,
    ]).call(this, a);
    if (ss.isValue(this.$b().get_background())) {
      this.$h(new e6(this.$b().get_background()));
    }
  };
  aG.__typeName = "VEL.Skynet.View.Builders.Controls.$8";
  var aI = function (a) {
    this.$g = 0;
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Place.PlaceData,
      ku,
      aY,
    ]).call(this, a);
  };
  aI.__typeName = "VEL.Skynet.View.Builders.Controls.$9";
  var aK = function () {};
  aK.__typeName = "VEL.Skynet.View.Builders.Controls.ClippingEnum";
  global.VEL.Skynet.View.Builders.Controls.ClippingEnum = aK;
  var aM = function () {
    aW.call(this);
    this.set_appearTrigger(1);
  };
  aM.__typeName = "VEL.Skynet.View.Builders.Controls.ConveyorBuilderModel";
  global.VEL.Skynet.View.Builders.Controls.ConveyorBuilderModel = aM;
  var aO = function () {
    this.$2$1 = 0;
    this.$2$2 = 0;
    this.$2$3 = 0;
    this.$2$4 = 0;
    this.$2$5 = 0;
    this.$2$6 = 0;
    this.$2$7 = null;
    this.$2$8 = false;
    this.$2$9 = null;
    aW.call(this);
    this.set_margin(VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty());
    this.set_mirrorBack(true);
    this.set_appearTrigger(4);
  };
  aO.__typeName = "VEL.Skynet.View.Builders.Controls.FaceBuilderModel";
  global.VEL.Skynet.View.Builders.Controls.FaceBuilderModel = aO;
  var aQ = function () {
    this.$2$1 = 0;
    this.$2$2 = null;
    this.$2$3 = null;
    this.$2$4 = 0;
    aW.call(this);
  };
  aQ.__typeName = "VEL.Skynet.View.Builders.Controls.ImageBuilderModel";
  global.VEL.Skynet.View.Builders.Controls.ImageBuilderModel = aQ;
  var aS = function () {
    this.$2$1 = null;
    this.$2$2 = null;
    aW.call(this);
  };
  aS.__typeName = "VEL.Skynet.View.Builders.Controls.LabelBuilderModel";
  global.VEL.Skynet.View.Builders.Controls.LabelBuilderModel = aS;
  var aU = function () {
    this.$2$1 = 0;
    this.$2$2 = 0;
    this.$2$3 = null;
    aW.call(this);
    this.set_count(16);
  };
  aU.__typeName = "VEL.Skynet.View.Builders.Controls.MosaicBuilderModel";
  global.VEL.Skynet.View.Builders.Controls.MosaicBuilderModel = aU;
  var aW = function () {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
    this.$1$4 = 0;
    this.$1$5 = 0;
    this.$1$6 = 0;
    this.$1$7 = null;
  };
  aW.__typeName = "VEL.Skynet.View.Builders.Controls.ObjectBuilderModel";
  global.VEL.Skynet.View.Builders.Controls.ObjectBuilderModel = aW;
  var aY = function () {
    this.$2$1 = 0;
    this.$2$2 = null;
    this.$2$3 = null;
    aW.call(this);
  };
  aY.__typeName = "VEL.Skynet.View.Builders.Controls.PlaceBuilderModel";
  global.VEL.Skynet.View.Builders.Controls.PlaceBuilderModel = aY;
  var a0 = function () {
    this.$2$1 = 0;
    this.$2$2 = 0;
    this.$2$3 = 0;
    this.$2$4 = 0;
    aW.call(this);
  };
  a0.__typeName = "VEL.Skynet.View.Builders.Controls.SpriteBuilderModel";
  global.VEL.Skynet.View.Builders.Controls.SpriteBuilderModel = a0;
  var a2 = function () {
    this.$2$1 = 0;
    this.$2$2 = null;
    this.$2$3 = null;
    aW.call(this);
    this.set_appearTrigger(2);
  };
  a2.__typeName = "VEL.Skynet.View.Builders.Controls.TileBuilderModel";
  global.VEL.Skynet.View.Builders.Controls.TileBuilderModel = a2;
  var ae = function () {};
  ae.__typeName = "VEL.Skynet.View.Builders.Decorations.$0";
  var ag = function (a) {
    var b = function (c) {
      this.$5 = null;
      this.$6 = null;
      this.$2$1 = null;
      ae.call(this);
      this.$4(c);
      this.$5 = new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
        this.$3().get_x()
      );
      this.$6 = new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
        this.$3().get_y()
      );
    };
    ss.registerGenericClassInstance(
      b,
      ag,
      [a],
      {
        $3: function () {
          return this.$2$1;
        },
        $4: function (c) {
          this.$2$1 = c;
        },
        $0: function (l, c) {
          var d =
            ss.isNullOrUndefined(this.$3().get_condition()) ||
            new i4(this.$3().get_condition()).$0(l, ss.coalesce(c, 0), 0);
          if (!d) {
            return Enumerable.empty();
          }
          var f = this.$1(l, c);
          var g = [];
          for (var h = 0; h < this.$3().get_instances(); h++) {
            var i = a9.$0(this.$3().get_binding());
            var j = ss.isValue(i);
            var k = new ka(
              f,
              this.$2(),
              new VEL.Skynet.Core.Toolbox.Geometry.Size.$ctor1(
                this.$3().get_width(),
                this.$3().get_height(),
                this.$3().get_aspectRatio()
              ),
              this.$3().get_margin(),
              this.$3().get_origin(),
              this.$3().get_isVisible(),
              this.$3().get_opacity(),
              this.$3().get_repeatX(),
              this.$3().get_stretch(),
              this.$3().get_clipping(),
              this.$3().get_zLayer(),
              this.$3().get_zUnder(),
              this.$3().get_scaleWithParent(),
              this.$3().get_opacityWithParent(),
              this.$3().get_rotateWithParent(),
              this.$3().get_useParentsRotationCenter(),
              this.$3().get_translateWithParent(),
              this.$3().get_useParentsPosition(),
              this.$3().get_useParentScalingOrigin(),
              i,
              j
            );
            k.$0(this.$3().get_eventTriggers());
            g.push(k);
          }
          return g;
        },
        $2: function () {
          return new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            VEL.Skynet.Core.Toolbox.Maths.NumberProviderExtensions.valueOrDefault(
              this.$5,
              0,
              false
            ),
            VEL.Skynet.Core.Toolbox.Maths.NumberProviderExtensions.valueOrDefault(
              this.$6,
              0,
              false
            )
          );
        },
      },
      function () {
        return ae;
      },
      function () {
        return [];
      }
    );
    return b;
  };
  ag.__typeName = "VEL.Skynet.View.Builders.Decorations.$1";
  ss.initGenericClass(ag, e, 1);
  var ai = function (a) {
    this.$3$1 = null;
    ss.makeGenericType(ag, [am]).call(this, a);
    if (ss.isValue(this.$3().get_colour())) {
      this.$9(new e6(a.get_colour()));
    }
  };
  ai.__typeName = "VEL.Skynet.View.Builders.Decorations.$2";
  var ak = function (a) {
    this.$3$1 = null;
    this.$3$2 = null;
    ss.makeGenericType(ag, [aq]).call(this, a);
    if (ss.isValue(this.$3().get_graphics())) {
      this.$8(new aB(this.$3().get_graphics()));
    }
    if (ss.isValue(this.$3().get_text())) {
      this.$a(d5.$0(this.$3().get_text()));
    }
  };
  ak.__typeName = "VEL.Skynet.View.Builders.Decorations.$3";
  var am = function () {
    this.$2$1 = null;
    this.$2$2 = 0;
    this.$2$3 = null;
    this.$2$4 = null;
    this.$2$5 = 0;
    this.$2$6 = 0;
    ao.call(this);
    this.set_zLayer(1);
    this.set_cap("round".toString());
  };
  am.__typeName =
    "VEL.Skynet.View.Builders.Decorations.ConnectDecorationBuilderModel";
  global.VEL.Skynet.View.Builders.Decorations.ConnectDecorationBuilderModel =
    am;
  var ao = function () {
    this.$1$1 = null;
    this.$1$2 = false;
    this.$1$3 = 0;
    this.$1$4 = false;
    this.$1$5 = 0;
    this.$1$6 = null;
    this.$1$7 = 0;
    this.$1$8 = 0;
    this.$1$9 = 0;
    this.$1$10 = null;
    this.$1$11 = null;
    this.$1$12 = 0;
    this.$1$13 = 0;
    this.$1$14 = false;
    this.$1$15 = false;
    this.$1$16 = false;
    this.$1$17 = false;
    this.$1$18 = false;
    this.$1$19 = false;
    this.$1$20 = false;
    this.$1$21 = 0;
    this.$1$22 = 0;
    this.$1$23 = null;
    this.$1$24 = 0;
    this.$1$25 = null;
    this.set_isVisible(true);
    this.set_opacity(1);
    this.set_margin(VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty());
    this.set_scaleWithParent(true);
    this.set_opacityWithParent(true);
    this.set_rotateWithParent(true);
    this.set_useParentsRotationCenter(true);
    this.set_translateWithParent(true);
    this.set_useParentsPosition(true);
    this.set_instances(1);
    this.set_condition(null);
  };
  ao.__typeName =
    "VEL.Skynet.View.Builders.Decorations.DecorationBuilderModel";
  global.VEL.Skynet.View.Builders.Decorations.DecorationBuilderModel = ao;
  var aq = function () {
    this.$2$1 = null;
    this.$2$2 = null;
    ao.call(this);
  };
  aq.__typeName =
    "VEL.Skynet.View.Builders.Decorations.GraphicsDecorationBuilderModel";
  global.VEL.Skynet.View.Builders.Decorations.GraphicsDecorationBuilderModel =
    aq;
  var at = function () {};
  at.__typeName = "VEL.Skynet.View.Builders.Graphics.$0";
  var av = function (a) {
    var b = function (c) {
      this.$2$1 = null;
      at.call(this);
      this.$5(c);
    };
    ss.registerGenericClassInstance(
      b,
      av,
      [a],
      {
        $1: function () {
          return this.$4().get_condition();
        },
        $2: function (c) {
          this.$4().set_condition(c);
        },
        $4: function () {
          return this.$2$1;
        },
        $5: function (c) {
          this.$2$1 = c;
        },
        $3: function (f, c) {
          var d = "PaletteIndex=" + f + "/" + c;
          return ss.isValue(this.$4().get_condition())
            ? this.$4().get_condition() + "," + d
            : d;
        },
      },
      function () {
        return at;
      },
      function () {
        return [];
      }
    );
    return b;
  };
  av.__typeName = "VEL.Skynet.View.Builders.Graphics.$1";
  ss.initGenericClass(av, e, 1);
  var ax = function (a) {
    this.$3$1 = null;
    ss.makeGenericType(av, [aJ]).call(this, a);
    if (ss.isValue(this.$4().get_children())) {
      this.$8(
        Enumerable.from(this.$4().get_children())
          .select(function (b) {
            return c7.$0(b);
          })
          .toArray()
      );
    }
  };
  ax.__typeName = "VEL.Skynet.View.Builders.Graphics.$2";
  var az = function (a) {
    this.$8 = null;
    this.$3$1 = null;
    ss.makeGenericType(av, [aR]).call(this, a);
    if (ss.isValue(this.$4().get_tint())) {
      this.$7(new e6(this.$4().get_tint()));
    }
  };
  az.__typeName = "VEL.Skynet.View.Builders.Graphics.$3";
  var aB = function (a) {
    this.$9 = false;
    this.$1$1 = null;
    this.$1$2 = null;
    this.$8(a);
    if (ss.isValue(this.$7().get_children())) {
      this.$6(
        Enumerable.from(this.$7().get_children())
          .select(function (b) {
            return c7.$0(b);
          })
          .toArray()
      );
    }
  };
  aB.__typeName = "VEL.Skynet.View.Builders.Graphics.$4";
  var aD = function (a) {
    this.$d = null;
    this.$3$1 = null;
    this.$3$2 = null;
    ss.makeGenericType(av, [aP]).call(this, a);
    if (ss.isValue(this.$4().get_fill())) {
      this.$9(new e6(this.$4().get_fill()));
    }
    if (ss.isValue(this.$4().get_stroke())) {
      this.$b(new e6(this.$4().get_stroke()));
    }
  };
  aD.__typeName = "VEL.Skynet.View.Builders.Graphics.$5";
  var aF = function (a) {
    this.$a = null;
    this.$3$1 = null;
    ss.makeGenericType(av, [aN]).call(this, a);
    if (ss.isValue(this.$4().get_tint())) {
      this.$8(new e6(this.$4().get_tint()));
    }
  };
  aF.__typeName = "VEL.Skynet.View.Builders.Graphics.$6";
  var aH = function () {
    this.$1$1 = null;
  };
  aH.__typeName = "VEL.Skynet.View.Builders.Graphics.GraphicBuilderModel";
  global.VEL.Skynet.View.Builders.Graphics.GraphicBuilderModel = aH;
  var aJ = function () {
    this.$2$1 = null;
    this.$2$2 = null;
    aH.call(this);
  };
  aJ.__typeName =
    "VEL.Skynet.View.Builders.Graphics.GraphicGroupBuilderModel";
  global.VEL.Skynet.View.Builders.Graphics.GraphicGroupBuilderModel = aJ;
  var aL = function () {
    this.$1$1 = null;
    this.$1$2 = 0;
    this.$1$3 = 0;
    this.$1$4 = null;
    this.set_imageQuality(1);
  };
  aL.__typeName = "VEL.Skynet.View.Builders.Graphics.GraphicsBuilderModel";
  global.VEL.Skynet.View.Builders.Graphics.GraphicsBuilderModel = aL;
  var aN = function () {
    this.$2$1 = null;
    this.$2$2 = null;
    this.$2$3 = null;
    this.$2$4 = 0;
    this.$2$5 = 0;
    this.$2$6 = 0;
    this.$2$7 = false;
    aH.call(this);
  };
  aN.__typeName =
    "VEL.Skynet.View.Builders.Graphics.ImageGraphicBuilderModel";
  global.VEL.Skynet.View.Builders.Graphics.ImageGraphicBuilderModel = aN;
  var aP = function () {
    this.$2$1 = 0;
    this.$2$2 = null;
    this.$2$3 = null;
    this.$2$4 = 0;
    this.$2$5 = 0;
    this.$2$6 = 0;
    this.$2$7 = 0;
    aH.call(this);
  };
  aP.__typeName =
    "VEL.Skynet.View.Builders.Graphics.ShapeGraphicBuilderModel";
  global.VEL.Skynet.View.Builders.Graphics.ShapeGraphicBuilderModel = aP;
  var aR = function () {
    this.$2$1 = null;
    this.$2$2 = null;
    this.$2$3 = null;
    this.$2$4 = 0;
    this.$2$5 = 0;
    this.$2$6 = null;
    aH.call(this);
  };
  aR.__typeName =
    "VEL.Skynet.View.Builders.Graphics.SpriteSheetGraphicBuilderModel";
  global.VEL.Skynet.View.Builders.Graphics.SpriteSheetGraphicBuilderModel =
    aR;
  var aT = function () {};
  aT.__typeName = "VEL.Skynet.View.Builders.Graphics.StrokeStyleEnum";
  global.VEL.Skynet.View.Builders.Graphics.StrokeStyleEnum = aT;
  var aV = function () {};
  aV.__typeName = "VEL.Skynet.View.Builders.Layers.$0";
  var aX = function (a) {
    var b = function (c) {
      this.$2$1 = null;
      aV.call(this);
      this.$3(c);
    };
    ss.registerGenericClassInstance(
      b,
      aX,
      [a],
      {
        $2: function () {
          return this.$2$1;
        },
        $3: function (c) {
          this.$2$1 = c;
        },
        $1: function () {
          return this.$2().get_name();
        },
      },
      function () {
        return aV;
      },
      function () {
        return [];
      }
    );
    return b;
  };
  aX.__typeName = "VEL.Skynet.View.Builders.Layers.$1";
  ss.initGenericClass(aX, e, 1);
  var aZ = function (a) {
    this.$3$1 = null;
    this.$3$2 = null;
    ss.makeGenericType(aX, [b6]).call(this, a);
    if (ss.isValue(this.$2().get_children())) {
      this.$7(
        Enumerable.from(this.$2().get_children())
          .select(function (b) {
            return d1.$0(b);
          })
          .toArray()
      );
    }
    if (ss.isValue(this.$2().get_background())) {
      this.$5(new e6(this.$2().get_background()));
    }
  };
  aZ.__typeName = "VEL.Skynet.View.Builders.Layers.$2";
  var a1 = function (a) {
    ss.makeGenericType(aX, [c0]).call(this, a);
  };
  a1.__typeName = "VEL.Skynet.View.Builders.Layers.$3";
  var a3 = function (a) {
    ss.makeGenericType(aX, [b0]).call(this, a);
  };
  a3.__typeName = "VEL.Skynet.View.Builders.Layers.$4";
  var a6 = function (a) {
    this.$3$1 = null;
    ss.makeGenericType(aX, [b2]).call(this, a);
    if (ss.isValue(this.$2().get_colour())) {
      this.$5(new e6(a.get_colour()));
    }
  };
  a6.__typeName = "VEL.Skynet.View.Builders.Layers.$5";
  var a8 = function () {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
  };
  a8.__typeName = "VEL.Skynet.View.Builders.Layers.$6";
  a8.$4 = function (a) {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
    this.$6(a);
    if (ss.isValue(this.$5().get_layers())) {
      this.$4(
        Enumerable.from(this.$5().get_layers())
          .select(function (b) {
            return c9.$0(b);
          })
          .toArray()
      );
    }
    if (ss.isValue(this.$5().get_events())) {
      this.$2(
        Enumerable.from(this.$5().get_events())
          .select(function (b) {
            return new jn(b);
          })
          .toArray()
      );
    }
  };
  a8.$2 = function (a, f, g) {
    var b = ss.coalesce(f.scene, "Default");
    if (ss.isValue(g)) {
      b = g.get_currentScene().get_name();
    }
    var c = i7.getXmlReader("Scenes/" + b, 0, false);
    if (ss.isNullOrUndefined(c)) {
      c = i7.getXmlReader("Scenes/Default", 0, true);
    }
    var d = a.parse(c2).call(a, c.root);
    return new a8.$4(d);
  };
  a8.$0 = function (a) {
    var c = a8.$1();
    var d = new jF(a, c);
    var b = [];
    b.push(d);
    return new jx(
      a,
      c,
      b,
      [],
      new VEL.Skynet.Core.Toolbox.Geometry.Size(800, 600),
      null,
      1
    );
  };
  a8.$1 = function () {
    var a = $(".js-render-canvas").get(0);
    var b = ss.cast(
      a,
      ss.isValue(a) && ss.isInstanceOfType(a, Element) && a.tagName === "CANVAS"
    );
    $("body").on("contextmenu", ".js-render-canvas", function (c) {
      c.preventDefault();
      c.stopPropagation();
    });
    b.tabIndex = 0;
    return b;
  };
  var b0 = function () {
    b8.call(this);
  };
  b0.__typeName =
    "VEL.Skynet.View.Builders.Layers.DecorationLayerBuilderModel";
  global.VEL.Skynet.View.Builders.Layers.DecorationLayerBuilderModel = b0;
  var b2 = function () {
    this.$2$1 = null;
    b8.call(this);
  };
  b2.__typeName = "VEL.Skynet.View.Builders.Layers.FillLayerBuilderModel";
  global.VEL.Skynet.View.Builders.Layers.FillLayerBuilderModel = b2;
  var b4 = function () {};
  b4.__typeName = "VEL.Skynet.View.Builders.Layers.FitEnum";
  global.VEL.Skynet.View.Builders.Layers.FitEnum = b4;
  var b6 = function () {
    this.$2$1 = 0;
    this.$2$2 = null;
    this.$2$3 = null;
    b8.call(this);
  };
  b6.__typeName = "VEL.Skynet.View.Builders.Layers.GraphicsLayerBuilderModel";
  global.VEL.Skynet.View.Builders.Layers.GraphicsLayerBuilderModel = b6;
  var b8 = function () {
    this.$1$1 = null;
    this.$1$2 = false;
    this.set_visibility(true);
  };
  b8.__typeName = "VEL.Skynet.View.Builders.Layers.LayerBuilderModel";
  global.VEL.Skynet.View.Builders.Layers.LayerBuilderModel = b8;
  var c0 = function () {
    b8.call(this);
  };
  c0.__typeName = "VEL.Skynet.View.Builders.Layers.ObjectLayerBuilderModel";
  global.VEL.Skynet.View.Builders.Layers.ObjectLayerBuilderModel = c0;
  var c2 = function () {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = 0;
    this.$1$4 = 0;
    this.$1$5 = 0;
    this.$1$6 = 0;
    this.$1$7 = 0;
    this.$1$8 = 0;
    this.$1$9 = 0;
  };
  c2.__typeName = "VEL.Skynet.View.Builders.Layers.SceneBuilderModel";
  global.VEL.Skynet.View.Builders.Layers.SceneBuilderModel = c2;
  var c4 = function (a) {
    this.$1$1 = null;
    if (ss.isValue(a)) {
      this.$3(
        Enumerable.from(a)
          .select(function (b) {
            return c1.$0(b);
          })
          .toArray()
      );
    }
  };
  c4.__typeName = "VEL.Skynet.View.Builders.LayerVisuals.$0";
  var c6 = function (a) {
    var b = function (c) {
      this.$2$1 = null;
      c4.call(this, c.get_children());
      this.$6(c);
    };
    ss.registerGenericClassInstance(
      b,
      c6,
      [a],
      {
        $5: function () {
          return this.$2$1;
        },
        $6: function (c) {
          this.$2$1 = c;
        },
        $4: function () {
          return this.$5().get_name();
        },
        $7: function () {
          var d =
            this.$5().get_repeatColumns() > 0 ||
            this.$5().get_repeatRows() > 0 ||
            this.$5().get_repeatX() > 0 ||
            this.$5().get_repeatY() > 0;
          var c = d ? new d2(this.$5()) : null;
          return c;
        },
        $1: function () {
          var c = new hT();
          c.$3 = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            this.$5().get_x(),
            this.$5().get_y()
          );
          c.$2 = this.$5().get_opacity();
          c.$1 = this.$5().get_visibility();
          c.$4 = VEL.Skynet.Core.Toolbox.Geometry.EulerAngles.fromDegrees(
            0,
            0,
            this.$5().get_rotation()
          );
          c.$5 = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            this.$5().get_centerX(),
            this.$5().get_centerY()
          );
          return c;
        },
      },
      function () {
        return c4;
      },
      function () {
        return [];
      }
    );
    return b;
  };
  c6.__typeName = "VEL.Skynet.View.Builders.LayerVisuals.$1";
  ss.initGenericClass(c6, e, 1);
  var c8 = function (a) {
    ss.makeGenericType(c6, [d4]).call(this, a);
  };
  c8.__typeName = "VEL.Skynet.View.Builders.LayerVisuals.$2";
  var d0 = function (a) {
    this.$3$1 = null;
    ss.makeGenericType(c6, [d6]).call(this, a);
    if (ss.isValue(this.$5().get_fill())) {
      this.$9(new e6(this.$5().get_fill()));
    }
  };
  d0.__typeName = "VEL.Skynet.View.Builders.LayerVisuals.$3";
  var d2 = function (a) {
    this.$2 = 0;
    this.$3 = 0;
    this.$1 = 0;
    this.$0 = 0;
    this.$2 = a.get_repeatX();
    this.$3 = a.get_repeatY();
    this.$0 = a.get_repeatColumns();
    this.$1 = a.get_repeatRows();
  };
  d2.__typeName = "VEL.Skynet.View.Builders.LayerVisuals.$4";
  var d4 = function () {
    this.$2$1 = null;
    this.$2$2 = null;
    d8.call(this);
    this.set_imageQuality(1);
  };
  d4.__typeName =
    "VEL.Skynet.View.Builders.LayerVisuals.LayerImageBuilderModel";
  global.VEL.Skynet.View.Builders.LayerVisuals.LayerImageBuilderModel = d4;
  var d6 = function () {
    this.$2$1 = 0;
    this.$2$2 = null;
    d8.call(this);
  };
  d6.__typeName =
    "VEL.Skynet.View.Builders.LayerVisuals.LayerShapeBuilderModel";
  global.VEL.Skynet.View.Builders.LayerVisuals.LayerShapeBuilderModel = d6;
  var d8 = function () {
    this.$1$1 = null;
    this.$1$2 = 0;
    this.$1$3 = 0;
    this.$1$4 = 0;
    this.$1$5 = 0;
    this.$1$6 = 0;
    this.$1$7 = 0;
    this.$1$8 = 0;
    this.$1$9 = 0;
    this.$1$10 = 0;
    this.$1$11 = 0;
    this.$1$12 = false;
    this.$1$13 = 0;
    this.$1$14 = null;
    this.$1$15 = 0;
    this.$1$16 = 0;
    this.$1$17 = 0;
    this.$1$18 = 0;
    this.set_visibility(true);
    this.set_opacity(1);
  };
  d8.__typeName =
    "VEL.Skynet.View.Builders.LayerVisuals.LayerVisualBuilderModel";
  global.VEL.Skynet.View.Builders.LayerVisuals.LayerVisualBuilderModel = d8;
  var e0 = function (a) {
    this.$1$1 = null;
    this.$1([]);
    if (ss.isValue(a.get_children())) {
      this.$1(
        Enumerable.from(a.get_children())
          .select(function (b) {
            return new e6(b);
          })
          .toArray()
      );
    }
  };
  e0.__typeName = "VEL.Skynet.View.Builders.Resources.$0";
  e0.$4 = function (a) {
    e0.$5 = new (ss.makeGenericType(ss.Dictionary$2, [String, e0]))();
    var f = i7.getXmlReader("Palette", 0, false);
    if (ss.isNullOrUndefined(f)) {
      return;
    }
    var g = f.root.get_children();
    for (var b = 0; b < g.length; b++) {
      var c = g[b];
      var d = a.parse(a7).call(a, c);
      e0.$5.set_item(d.$0(), new e0(d));
    }
  };
  e0.$0 = function (a) {
    var b = {};
    if (e0.$5.tryGetValue(a, b)) {
      return b.$;
    }
    throw new a4("No <Palette Name='" + a + "'> in Palette.xml");
  };
  e0.$3 = function (a) {
    if (ss.isNullOrUndefined(e0.$5) || ss.isNullOrUndefined(a)) {
      return false;
    }
    return e0.$5.containsKey(a);
  };
  e0.$1 = function (a, c) {
    if (ss.isNullOrUndefined(a) || !a.usePalette) {
      return a;
    }
    var d = e0.$0(a.toString());
    var b = ss.isValue(c) ? Math.max(0, c.colour) : 0;
    return d.$0()[b % d.$0().length];
  };
  e0.$2 = function (a, g, h) {
    if (ss.isNullOrUndefined(a) || !a.usePalette) {
      return a;
    }
    var b = g.isTileNeutral(h);
    if (b && e0.$5.containsKey(a.toString() + "_Neutral")) {
      var c = e0.$0(a.toString() + "_Neutral");
      return c.$0()[
        Math.max(0, ss.coalesce(g.paletteIndex, 0)) % c.$0().length
      ];
    } else {
      if (b && e0.$5.containsKey("Neutral")) {
        var d = e0.$0("Neutral");
        return d.$0()[0];
      } else {
        var f = e0.$0(a.toString());
        return f.$0()[
          Math.max(0, ss.coalesce(g.paletteIndex, 0)) % f.$0().length
        ];
      }
    }
  };
  var e2 = function () {};
  e2.__typeName = "VEL.Skynet.View.Builders.Resources.$1";
  var e4 = function () {};
  e4.__typeName = "VEL.Skynet.View.Builders.Resources.$2";
  e4.$0 = function (a, c, d) {
    var b = a.getAttributeAsString(c);
    return ss.isValue(b) ? new e6(b) : d;
  };
  var e6 = function (a) {
    this.$2 = null;
    this.isTransparent = false;
    this.usePalette = false;
    if (ss.isValue(a) && a.toLowerCase() === "transparent") {
      this.$2 = "rgba(0,0,0,0)";
      this.isTransparent = true;
    } else {
      this.usePalette = e0.$3(a);
      this.$2 = ss.coalesce(a, "Black");
    }
  };
  e6.__typeName = "VEL.Skynet.View.Builders.Resources.Colour";
  global.VEL.Skynet.View.Builders.Resources.Colour = e6;
  var e8 = function () {
    this.$1 = false;
    this.$0 = false;
    this.$1$1 = null;
    this.$1$2 = null;
    this.$2 = null;
    this.$1$3 = null;
    this.$1$4 = 0;
    this.$1$5 = 0;
    this.$1$6 = false;
  };
  e8.__typeName = "VEL.Skynet.View.Builders.Resources.Font";
  e8.$ctor1 = function (a) {
    e8.$ctor2.call(
      this,
      a.get_fontName(),
      a.get_fontSize(),
      a.get_weight(),
      new e6(a.get_fillColour()),
      new e6(a.get_strokeColour()),
      a.get_strokeWidth(),
      a.get_hasShadow()
    );
  };
  e8.$ctor2 = function (a, g, h, b, c, d, f) {
    e8.$0.call(
      this,
      a,
      g,
      h,
      b,
      c,
      new VEL.Skynet.Core.Toolbox.Geometry.Dimension.$ctor1(
        ss.isNullOrEmptyString(d) ? "0" : d
      ),
      f
    );
  };
  e8.$0 = function (a, g, h, b, c, d, f) {
    this.$1 = false;
    this.$0 = false;
    this.$1$1 = null;
    this.$1$2 = null;
    this.$2 = null;
    this.$1$3 = null;
    this.$1$4 = 0;
    this.$1$5 = 0;
    this.$1$6 = false;
    this.set_fontName(a);
    this.set_fontSize(g);
    this.set_weight(h);
    this.set_fillColour(ss.isValue(b) ? b.clone() : null);
    this.set_strokeColour(ss.isValue(c) ? c.clone() : null);
    this.$2 = d;
    this.set_hasShadow(f);
  };
  e8.toCanvasFont = function (a, c, d, b) {
    return ss.formatString("{0}{1} {2}px {3}", b ? "italic " : "", d, c, a);
  };
  global.VEL.Skynet.View.Builders.Resources.Font = e8;
  var f0 = function () {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
    this.$1$4 = null;
    this.$1$5 = 0;
    this.$1$6 = 0;
    this.$1$7 = false;
  };
  f0.__typeName = "VEL.Skynet.View.Builders.Resources.FontModel";
  global.VEL.Skynet.View.Builders.Resources.FontModel = f0;
  var f2 = function () {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
  };
  f2.__typeName = "VEL.Skynet.View.Builders.Resources.Gradient";
  f2.$ctor1 = function (a, b) {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
    this.set_startPoint(a);
    this.set_endPoint(b);
    this.set_children([]);
  };
  global.VEL.Skynet.View.Builders.Resources.Gradient = f2;
  var f4 = function (a) {
    this.$1$1 = null;
    this.$1$2 = 0;
    if (ss.isValue(a.get_colour())) {
      this.set_colour(new e6(a.get_colour()));
    }
    this.set_offset(a.get_offset());
  };
  f4.__typeName = "VEL.Skynet.View.Builders.Resources.GradientSection";
  f4.$ctor1 = function (a, b) {
    this.$1$1 = null;
    this.$1$2 = 0;
    this.set_colour(a);
    this.set_offset(b);
  };
  global.VEL.Skynet.View.Builders.Resources.GradientSection = f4;
  var f6 = function () {
    this.$1$1 = null;
    this.$1$2 = 0;
  };
  f6.__typeName = "VEL.Skynet.View.Builders.Resources.GradientSectionModel";
  global.VEL.Skynet.View.Builders.Resources.GradientSectionModel = f6;
  var a7 = function () {
    this.$1$1 = null;
    this.$1$2 = null;
  };
  a7.__typeName = "VEL.Skynet.View.Builders.Resources.PaletteModel";
  var a9 = function () {};
  a9.__typeName = "VEL.Skynet.View.Helpers.$0";
  a9.$0 = function (a) {
    if (ss.isNullOrEmptyString(a)) {
      return null;
    }
    var b = im.$0(a);
    var c =
      ss.isInstanceOfType(b, hW) ||
      (ss.isInstanceOfType(b, hB) &&
        Enumerable.from(ss.cast(b, hB).$g()).any(function (d) {
          return ss.isInstanceOfType(d, hW);
        }));
    if (!c) {
      throw new a4(a + " is not a BindingAnimation");
    }
    return b;
  };
  var b1 = function () {};
  b1.__typeName = "VEL.Skynet.View.Helpers.LogHelper";
  b1.error = function (a) {};
  b1.warning = function (a) {};
  global.VEL.Skynet.View.Helpers.LogHelper = b1;
  var b3 = function () {};
  b3.__typeName = "VEL.Skynet.View.Helpers.PositionExtensions";
  b3.getProperty = function (a, b) {
    switch (b) {
      case 0:
        return a.get_translateX();
      case 1:
        return a.get_translateY();
      case 2:
        return a.get_translateZ();
      default:
        throw new ss.ArgumentOutOfRangeException(
          b + " is not a valid translate property."
        );
    }
  };
  b3.setProperty = function (a, b, c) {
    switch (b) {
      case 0:
        a.set_translateX(c);
        break;
      case 1:
        a.set_translateY(c);
        break;
      case 2:
        a.set_translateZ(c);
        break;
      default:
        throw new ss.ArgumentOutOfRangeException(
          b + " is not a valid translate property."
        );
    }
  };
  global.VEL.Skynet.View.Helpers.PositionExtensions = b3;
  var b5 = function () {};
  b5.__typeName = "VEL.Skynet.View.Helpers.RotatePropertyEnum";
  global.VEL.Skynet.View.Helpers.RotatePropertyEnum = b5;
  var b7 = function () {};
  b7.__typeName = "VEL.Skynet.View.Helpers.TranslatePropertyEnum";
  global.VEL.Skynet.View.Helpers.TranslatePropertyEnum = b7;
  var b9 = function () {};
  b9.__typeName = "VEL.Skynet.View.Helpers.Factories.$0";
  b9.$0 = function (a) {
    if (ss.isInstanceOfType(a, iy)) {
      return new iw(ss.cast(a, iy));
    }
    if (ss.isInstanceOfType(a, iC)) {
      return new iA(ss.cast(a, iC));
    }
    if (ss.isInstanceOfType(a, iM)) {
      return new iK(ss.cast(a, iM));
    }
    if (ss.isInstanceOfType(a, iQ)) {
      return new iO.$ctor1(ss.cast(a, iQ));
    }
    if (ss.isInstanceOfType(a, iU)) {
      return new iS(ss.cast(a, iU));
    }
    throw new ss.NotSupportedException(
      ss.getTypeName(ss.getInstanceType(a)) +
        " is not a supported ease model type."
    );
  };
  var c1 = function () {};
  c1.__typeName = "VEL.Skynet.View.Helpers.Factories.$1";
  c1.$0 = function (a) {
    if (ss.isInstanceOfType(a, h8)) {
      return new hB(ss.cast(a, h8));
    }
    if (ss.isInstanceOfType(a, ic)) {
      return new hU(ss.cast(a, ic));
    }
    if (ss.isInstanceOfType(a, ih)) {
      return new hW(ss.cast(a, ih));
    }
    if (ss.isInstanceOfType(a, io)) {
      return new hz(ss.cast(a, io));
    }
    if (ss.isInstanceOfType(a, it)) {
      return new hD(ss.cast(a, it));
    }
    if (ss.isInstanceOfType(a, iz)) {
      return new hH(ss.cast(a, iz));
    }
    if (ss.isInstanceOfType(a, iB)) {
      return new h6(ss.cast(a, iB));
    }
    if (ss.isInstanceOfType(a, iD)) {
      return new hL(ss.cast(a, iD));
    }
    if (ss.isInstanceOfType(a, iH)) {
      return new hN(ss.cast(a, iH));
    }
    if (ss.isInstanceOfType(a, iJ)) {
      return new hQ(ss.cast(a, iJ));
    }
    if (ss.isInstanceOfType(a, iN)) {
      return new hS(ss.cast(a, iN));
    }
    if (ss.isInstanceOfType(a, iR)) {
      return new hJ(ss.cast(a, iR));
    }
    if (ss.isInstanceOfType(a, iF)) {
      return new g7(ss.cast(a, iF));
    }
    if (ss.isInstanceOfType(a, iX)) {
      return new hF(ss.cast(a, iX));
    }
    if (ss.isInstanceOfType(a, ix)) {
      return new g9(null);
    }
    throw new ss.NotSupportedException(
      ss.getTypeName(ss.getInstanceType(a)) +
        " is not a supported animation model type."
    );
  };
  var c3 = function () {};
  c3.__typeName = "VEL.Skynet.View.Helpers.Factories.$2";
  c3.$0 = function (a) {
    if (ss.isInstanceOfType(a, am)) {
      return new ai(ss.cast(a, am));
    }
    if (ss.isInstanceOfType(a, aq)) {
      return new ak(ss.cast(a, aq));
    }
    throw new ss.NotImplementedException(
      ss.getTypeName(ss.getInstanceType(a)) +
        " is not a supported decoration model type."
    );
  };
  var c5 = function () {};
  c5.__typeName = "VEL.Skynet.View.Helpers.Factories.$3";
  c5.$0 = function (a) {
    if (ss.isInstanceOfType(a, k9)) {
      return new kW(ss.cast(a, k9));
    }
    if (ss.isInstanceOfType(a, k7)) {
      return new kV(ss.cast(a, k7));
    }
    if (ss.isInstanceOfType(a, k6)) {
      return new kU(ss.cast(a, k6));
    }
    if (ss.isInstanceOfType(a, k0)) {
      return new kQ(ss.cast(a, k0));
    }
    throw new ss.NotImplementedException(
      ss.getTypeName(ss.getInstanceType(a)) +
        " is not a supported glyph model type."
    );
  };
  var c7 = function () {};
  c7.__typeName = "VEL.Skynet.View.Helpers.Factories.$4";
  c7.$0 = function (a) {
    if (ss.isInstanceOfType(a, aJ)) {
      return new ax(ss.cast(a, aJ));
    }
    if (ss.isInstanceOfType(a, aN)) {
      return new aF(ss.cast(a, aN));
    }
    if (ss.isInstanceOfType(a, aP)) {
      return new aD(ss.cast(a, aP));
    }
    if (ss.isInstanceOfType(a, aR)) {
      return new az(ss.cast(a, aR));
    }
    throw new ss.NotSupportedException(
      ss.getTypeName(ss.getInstanceType(a)) +
        " is not a supported graphic model type."
    );
  };
  var c9 = function () {};
  c9.__typeName = "VEL.Skynet.View.Helpers.Factories.$5";
  c9.$0 = function (a) {
    if (ss.isInstanceOfType(a, b0)) {
      return new a3(ss.cast(a, b0));
    }
    if (ss.isInstanceOfType(a, b2)) {
      return new a6(ss.cast(a, b2));
    }
    if (ss.isInstanceOfType(a, b6)) {
      return new aZ(ss.cast(a, b6));
    }
    if (ss.isInstanceOfType(a, c0)) {
      return new a1(ss.cast(a, c0));
    }
    throw new ss.NotSupportedException(
      ss.getTypeName(ss.getInstanceType(a)) +
        " is not a supported layer model type."
    );
  };
  var d1 = function () {};
  d1.__typeName = "VEL.Skynet.View.Helpers.Factories.$6";
  d1.$0 = function (a) {
    if (ss.isInstanceOfType(a, d4)) {
      return new c8(ss.cast(a, d4));
    }
    if (ss.isInstanceOfType(a, d6)) {
      return new d0(ss.cast(a, d6));
    }
    throw new ss.NotSupportedException(
      ss.getTypeName(ss.getInstanceType(a)) +
        " is not a supported layer visual model type."
    );
  };
  var d3 = function () {};
  d3.__typeName = "VEL.Skynet.View.Helpers.Factories.$7";
  d3.$0 = function (a) {
    if (ss.isInstanceOfType(a, lI)) {
      return new ls(ss.cast(a, lI));
    }
    if (ss.isInstanceOfType(a, lK)) {
      return new lu(ss.cast(a, lK));
    }
    if (ss.isInstanceOfType(a, lQ)) {
      return new lw(ss.cast(a, lQ));
    }
    throw new ss.NotSupportedException(
      ss.getTypeName(ss.getInstanceType(a)) +
        " is not a supported audio model type."
    );
  };
  var d5 = function () {};
  d5.__typeName = "VEL.Skynet.View.Helpers.Factories.$8";
  d5.$0 = function (a) {
    if (ss.isInstanceOfType(a, k3)) {
      return new kZ(ss.cast(a, k3));
    }
    if (ss.isInstanceOfType(a, k5)) {
      return new kO(ss.cast(a, k5));
    }
    throw new ss.NotImplementedException(
      ss.getTypeName(ss.getInstanceType(a)) +
        " is not a supported text model type."
    );
  };
  var d7 = function () {};
  d7.__typeName = "VEL.Skynet.View.Input.Controllers.$0";
  var d9 = function (a, b) {
    this.$8 = null;
    this.$7 = null;
    this.$9 = null;
    this.$6 = null;
    this.$b = null;
    this.$a = null;
    this.$9 = b.$n.$e;
    this.$7 = b;
    this.$8 = a;
  };
  d9.__typeName = "VEL.Skynet.View.Input.Controllers.$1";
  var e1 = function (a, b) {
    this.$c = null;
    this.$d = null;
    d9.call(this, a, b);
  };
  e1.__typeName = "VEL.Skynet.View.Input.Controllers.$2";
  var e3 = function (a, b) {
    this.$i = 0;
    this.$g = null;
    this.$f = false;
    this.$e = false;
    this.$h = null;
    d9.call(this, a, b);
    this.$h = VEL.Skynet.Core.Toolbox.Threading.ThreadManager.setInterval(
      ss.cast(a.get_game(), VEL.Skynet.Core.Toolbox.Threading.IThreadScope),
      33,
      ss.mkdel(this, this.$c),
      false,
      false
    );
    this.$h.stop();
  };
  e3.__typeName = "VEL.Skynet.View.Input.Controllers.$3";
  var e5 = function (a, b) {
    this.$c = null;
    d9.call(this, a, b);
  };
  e5.__typeName = "VEL.Skynet.View.Input.Controllers.$4";
  var e7 = function (a, b, c) {
    this.$g = null;
    this.$e = false;
    this.$f = null;
    this.$h = null;
    d9.call(this, a, b);
    this.$g = b.$m.$q;
    this.$e = c;
  };
  e7.__typeName = "VEL.Skynet.View.Input.Controllers.$5";
  var e9 = function (a, b) {
    this.$d = null;
    d9.call(this, a, b);
  };
  e9.__typeName = "VEL.Skynet.View.Input.Controllers.$6";
  var f1 = function (a, b) {
    d9.call(this, a, b);
  };
  f1.__typeName = "VEL.Skynet.View.Input.Controllers.$7";
  var f3 = function (a, b) {
    this.$a = null;
    this.$d = null;
    this.$g = null;
    this.$c = false;
    this.$b = null;
    this.$f = null;
    this.$e = null;
    this.$g = a;
    this.$a = b.$n.$e;
    this.$d = b.$m.$r;
  };
  f3.__typeName = "VEL.Skynet.View.Input.Controllers.$8";
  var f5 = function (a, b) {
    d9.call(this, a, b);
  };
  f5.__typeName = "VEL.Skynet.View.Input.Controllers.$9";
  var f7 = function (a, c, d) {
    this.$f = null;
    this.$h = false;
    this.$g = null;
    this.$i = null;
    this.$1$1 = false;
    this.$1$2 = null;
    this.$1$3 = 0;
    this.$1$4 = null;
    this.$e(a);
    var b = [];
    b.push(a);
    this.$f = b;
    if (c) {
      this.$g = VEL.Skynet.Core.Toolbox.Threading.ThreadManager.setTimeout(
        null,
        350,
        ss.mkdel(this, this.$4),
        true,
        true
      );
    }
    this.$8(0);
    this.$i = d;
  };
  f7.__typeName = "VEL.Skynet.View.Input.Gestures.$0";
  var g0 = function (a, c, d, b) {
    this.$2$1 = null;
    this.$2$2 = null;
    f7.call(this, a, d, b);
    this.$o(c);
  };
  g0.__typeName = "VEL.Skynet.View.Input.Gestures.$1";
  var g2 = function (a) {
    this.$0 = null;
    this.$0 = a;
  };
  g2.__typeName = "VEL.Skynet.View.Painters.Controls.$0";
  var g4 = function (a, d, f, b, c) {
    this.$6 = 1;
    this.$c = null;
    this.$5 = null;
    this.$8 = 0;
    this.$9 = 0;
    this.$a = null;
    this.$b = null;
    this.$7 = null;
    g2.call(this, a);
    this.$a = d;
    this.$b = i7.getContentImageElement(d);
    this.$8 = f;
    this.$7 = c;
    this.$9 = b;
  };
  g4.__typeName = "VEL.Skynet.View.Painters.Controls.$1";
  var g6 = function (a, c, d, b) {
    this.$5 = null;
    this.$6 = null;
    this.$7 = null;
    g2.call(this, a);
    this.$5 = c.clone();
    this.$6 = d;
    this.$7 = b;
  };
  g6.__typeName = "VEL.Skynet.View.Painters.Controls.$2";
  var g8 = function (a, c, d, b) {
    this.$3 = null;
    this.$1 = null;
    this.$2 = 0;
    g2.call(this, a);
    this.$3 = i7.getContentImageElement(c);
    this.$1 = c.get_canTransparent() ? d || e2.$7 : null;
    this.$2 = b;
  };
  g8.__typeName = "VEL.Skynet.View.Painters.Controls.$3";
  var hy = function (a, c, d, b) {
    this.$8 = null;
    this.$2$1 = null;
    this.$2$2 = null;
    g2.call(this, a);
    this.$7(d);
    this.$8 = b;
    this.$4(c);
  };
  hy.__typeName = "VEL.Skynet.View.Painters.Controls.$4";
  var hA = function () {
    this.$8 = true;
  };
  hA.__typeName = "VEL.Skynet.View.Painters.Decorations.$0";
  var hC = function (a, i, j, b, c, d, f, g) {
    this.$2$1 = null;
    this.$g = new e6("rgba(0,0,0,0.5)");
    this.$i = null;
    this.$h = null;
    hA.call(this);
    if (ss.isNullOrUndefined(a)) {
      b1.error("BaseTextDecorationPainter was passed null text.");
    }
    var h = e0.$1(c, a);
    this.$i = a;
    this.$h = new e8.$ctor2(i, j, b, h, d, f, g);
  };
  hC.__typeName = "VEL.Skynet.View.Painters.Decorations.$1";
  var hE = function (a, l, m, b, c, d, f, g, h) {
    this.$k = null;
    this.$j = null;
    hC.call(this, a, l, m, b, c, d, f, g);
    var i = new VEL.Skynet.Core.View.Helpers.TypeSetterOptions();
    i.maxFontSize = this.$h.get_fontSize();
    i.lineSpacing = 0.1;
    i.whiteSpace = false;
    i.horizontalAlign = 1;
    i.verticalAlign = 1;
    var j = i;
    var k = new h1.$i(this.$h);
    this.$k = VEL.Skynet.Core.View.Helpers.TypeSetter.arrange(
      new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(a.text, 1),
      h,
      function (n, o, p) {
        return k.measureSize(n, o * 1.09, p);
      },
      j
    );
    this.$f(h);
    this.$h.set_fontSize(this.$k.fontSize);
  };
  hE.__typeName = "VEL.Skynet.View.Painters.Decorations.$2";
  var hG = function (a, h, i, b, c, d, f, g) {
    this.$9 = null;
    this.$d = 0;
    this.$b = null;
    this.$g = 0;
    this.$a = null;
    this.$e = 0;
    this.$f = 0;
    this.$c = null;
    hA.call(this);
    this.$b = a;
    this.$9 = h;
    this.$d = i;
    this.$g = c;
    this.$a = new i4(b);
    this.$e = d;
    this.$f = f;
    this.$c = g;
  };
  hG.__typeName = "VEL.Skynet.View.Painters.Decorations.$3";
  var hI = function (a, k, l, b, c, d, f, g) {
    this.$j = null;
    hC.call(this, a, k, l, b, c, d, f, g);
    var h = new h1.$i(this.$h);
    var i = h.measureWidth(a.text, l, 0) * 1.1;
    var j = (this.$h.get_strokeWidth() + (this.$h.get_hasShadow() ? 2 : 0)) * 2;
    this.$f(
      new VEL.Skynet.Core.Toolbox.Geometry.Size(
        i + j,
        this.$h.get_fontSize() * 1.5 + j
      )
    );
  };
  hI.__typeName = "VEL.Skynet.View.Painters.Decorations.$4";
  var hK = function () {};
  hK.__typeName = "VEL.Skynet.View.Rendering.$0";
  hK.$1 = function () {
    return hK.$1$1;
  };
  hK.$2 = function (a) {
    hK.$1$1 = a;
  };
  hK.$8 = function () {
    return VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(hK.$b, hK.$0());
  };
  hK.$3 = function () {
    return hK.$b.height > hK.$b.width;
  };
  hK.$6 = function () {
    return hK.$1$2;
  };
  hK.$7 = function (a) {
    hK.$1$2 = a;
  };
  hK.$4 = function () {
    return hK.$1$3;
  };
  hK.$5 = function (a) {
    hK.$1$3 = a;
  };
  hK.$0 = function () {
    var a = Math.min(1.5, window.devicePixelRatio);
    return isNaN(a) ? 1 : a;
  };
  hK.$9 = function () {
    if (hK.$0() < 1.5) {
      return 1.5 * hK.$a;
    } else {
      return hK.$a;
    }
  };
  var hM = function () {};
  hM.__typeName = "VEL.Skynet.View.Rendering.$1";
  hM.$6 = function () {
    return hM.$i !== 0;
  };
  hM.$9 = function () {
    return hM.$i === 3;
  };
  hM.$7 = function () {
    return hM.$i === 1 || hM.$i === 2;
  };
  hM.$a = function () {
    return hM.$i === 2;
  };
  hM.$8 = function () {
    return hM.$i === 4;
  };
  hM.$2 = function () {
    hM.$g = 0;
  };
  hM.$0 = function () {
    hM.$i = (hM.$i + 1) % 5;
    lH.useAssertLeak = hM.$8();
  };
  hM.$5 = function (a, d) {
    if (!hM.$a() && !hM.$8()) {
      return;
    }
    var f = hM.$b.get_fontSize();
    var b = a
      .$n()
      .$y(
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          3,
          100 + hM.$g * f * 1.5
        )
      );
    hM.$h = hM.$h || new h1.$i(hM.$b);
    var c = hM.$h.measureWidth(d, hM.$b.get_fontSize(), 0);
    b.$j(new VEL.Skynet.Core.Toolbox.Geometry.Size(c, f * 1.2), e2.$8, 0, 0);
    b.$k(d, 0, f, hM.$b);
    hM.$g++;
  };
  hM.$3 = function () {
    hM.$e = performance.now();
  };
  hM.$4 = function () {
    hM.$f += performance.now() - hM.$e;
    hM.$c++;
    if (hM.$c === 500) {
      hM.$d = hM.$f / hM.$c;
      hM.$c = 0;
      hM.$f = 0;
    }
  };
  hM.$1 = function (a) {
    var b = ss.cast(a.getContext("2d"), CanvasRenderingContext2D);
    var c = hK.$0();
    b.fillStyle = "black";
    b.fillRect(2 * c, 2 * c, 100 * c, 8 * c);
    b.fillStyle = "yellow";
    b.textBaseline = "top";
    b.font = hM.$b.toCanvasFont(1);
    b.fillText(
      "render-time: " + (hM.$d <= 0 ? "?" : hM.$d.toFixed(2)) + " ms",
      3 * c,
      3 * c
    );
  };
  var hO = function (a) {
    this.$G = null;
    this.$J = null;
    this.$K = false;
    this.$O = 0;
    this.$P = 0;
    this.$L = null;
    this.$N = null;
    this.$M = 0;
    this.$H = null;
    this.$I = 0;
    this.$F = 0;
    this.$D = null;
    this.$C = false;
    this.$E = 0;
    this.$G = a;
    this.$J = ss.cast(a.getContext("2d"), CanvasRenderingContext2D);
    this.$D = VEL.Skynet.Core.Toolbox.Geometry.Point.empty;
    this.$O = 1;
    this.$P = 1;
    this.$F = 1;
    this.$E = 1;
    this.$L = null;
    this.$N = null;
    this.$K = true;
    this.$M = 1;
    this.$H = null;
  };
  hO.__typeName = "VEL.Skynet.View.Rendering.$2";
  hO.$1 = function (a) {
    this.$G = null;
    this.$J = null;
    this.$K = false;
    this.$O = 0;
    this.$P = 0;
    this.$L = null;
    this.$N = null;
    this.$M = 0;
    this.$H = null;
    this.$I = 0;
    this.$F = 0;
    this.$D = null;
    this.$C = false;
    this.$E = 0;
    this.$G = a.$G;
    this.$J = a.$J;
    this.$D = a.$D;
    this.$O = a.$O;
    this.$P = a.$P;
    this.$F = a.$F;
    this.$E = a.$E;
    this.$L = a.$L;
    this.$N = a.$N;
    this.$K = a.$K;
    this.$M = a.$M;
    this.$C = a.$C;
    this.$I = a.$I;
    this.$H = a.$H;
  };
  hO.$0 = function (a, g, h) {
    var b = g.sweepAngle.get_radians();
    a.beginPath();
    if (b === 0) {
      a.arc(
        g.centerVertex.x,
        g.centerVertex.y,
        g.radius,
        0,
        2 * Math.PI,
        false
      );
    } else {
      var c = Math.PI / 2;
      var d = g.get_startAngle().get_radians() - c;
      a.moveTo(g.centerVertex.x, g.centerVertex.y);
      a.lineTo(g.arcStartPoint.x, g.arcStartPoint.y);
      var f = d + b + h;
      a.arc(g.centerVertex.x, g.centerVertex.y, g.radius, d, f, false);
      a.lineTo(g.centerVertex.x, g.centerVertex.y);
    }
    a.closePath();
  };
  var hR = function () {
    this.$2 = 0;
    this.$1 = 0;
    this.$0 = 0;
  };
  hR.__typeName = "VEL.Skynet.View.Rendering.$3";
  hR.$0 = function (a, b, c) {
    this.$2 = 0;
    this.$1 = 0;
    this.$0 = 0;
    this.$2 = a;
    this.$1 = b;
    this.$0 = c;
  };
  hR.getDefaultValue = function () {
    return new hR();
  };
  var hT = function () {
    this.$3 = null;
    this.$9 = 0;
    this.$a = 0;
    this.$4 = null;
    this.$0 = 0;
    this.$5 = null;
    this.$6 = 0;
    this.$7 = 0;
    this.$8 = 0;
    this.$2 = 0;
    this.$1 = false;
    this.$3 = VEL.Skynet.Core.Toolbox.Geometry.Point.empty;
    this.$4 = null;
    this.$2 = this.$7 = this.$8 = this.$6 = 1;
    this.$5 = null;
    this.$1 = true;
    this.$0 = 1;
  };
  hT.__typeName = "VEL.Skynet.View.Rendering.$4";
  var hV = function () {};
  hV.__typeName = "VEL.Skynet.View.Rendering.ColourHelper";
  hV.tryParse = function (a, b) {
    a = ss.coalesce(a, "").trim();
    return hV.$1(a, b) || hV.$0(a, b);
  };
  hV.$1 = function (a, f) {
    var g = {};
    if (ss.startsWithString(a, "#") && hV.$4(a, 1, a.length - 1, g)) {
      var b, c, d;
      switch (a.length) {
        case 4:
          b = (g.$ >> 8) & 15;
          c = (g.$ >> 4) & 15;
          d = g.$ & 15;
          f.$ = new hX((b << 4) | b, (c << 4) | c, (d << 4) | d, 1);
          return true;
        case 7:
          b = (g.$ >> 16) & 255;
          c = (g.$ >> 8) & 255;
          d = g.$ & 255;
          f.$ = new hX(b, c, d, 1);
          return true;
      }
    }
    f.$ = null;
    return false;
  };
  hV.$4 = function (a, h, i, b) {
    b.$ = 0;
    var c = h + i;
    for (var d = h; d < c; ++d) {
      var f = 0;
      var g = a.charCodeAt(d);
      if (g >= 48 && g <= 57) {
        f = g - 48;
      } else {
        if (g >= 97 && g <= 102) {
          f = 10 + (g - 97);
        } else {
          if (g >= 65 && g <= 70) {
            f = 10 + (g - 65);
          }
        }
      }
      b.$ = (b.$ << 4) | f;
    }
    return true;
  };
  hV.$0 = function (a, j) {
    var k = {},
      b = {},
      c = {},
      d = {};
    if (hV.$7(a, k, b, c, d)) {
      var f = {},
        g = {},
        h = {};
      var i = {};
      if (hV.$6(k.$, f) && hV.$6(b.$, g) && hV.$6(c.$, h) && hV.$3(d.$, i)) {
        j.$ = new hX(f.$, g.$, h.$, i.$);
        return true;
      }
    }
    j.$ = null;
    return false;
  };
  hV.$7 = function (a, f, g, b, c) {
    var d = hV.$a.exec(a);
    if (ss.isValue(d)) {
      f.$ = d[4];
      g.$ = d[5];
      b.$ = d[6];
      c.$ = ss.isNullOrEmptyString(d[7]) ? "1" : d[7];
      return true;
    }
    f.$ = g.$ = b.$ = c.$ = null;
    return false;
  };
  hV.$6 = function (a, b) {
    if (ss.endsWithString(a, "%")) {
      var c = {};
      if (!hV.$5(a.substr(0, a.length - 1), 100, c)) {
        b.$ = 0;
        return false;
      }
      b.$ = ss.Int32.div(255 * c.$, 100);
      return true;
    }
    return hV.$5(a, 255, b);
  };
  hV.$3 = function (a, b) {
    if (ss.endsWithString(a, "%")) {
      var c = {};
      if (!hV.$5(a.substr(0, a.length - 1), 100, c)) {
        b.$ = 1;
        return false;
      }
      b.$ = c.$ / 100;
      return true;
    }
    return hV.$2(a, 1, b);
  };
  hV.$5 = function (a, b, c) {
    if (ss.Int32.tryParse(a, c) && c.$ >= 0 && c.$ <= b) {
      return true;
    } else {
      c.$ = 0;
      return false;
    }
  };
  hV.$2 = function (a, b, c) {
    if (ss.tryParseFloat(a, c) && c.$ >= 0 && c.$ <= b) {
      return true;
    } else {
      c.$ = 1;
      return false;
    }
  };
  global.VEL.Skynet.View.Rendering.ColourHelper = hV;
  var hX = function (a, c, d, b) {
    this.red = 0;
    this.green = 0;
    this.blue = 0;
    this.alpha = 0;
    this.red = a;
    this.green = c;
    this.blue = d;
    this.alpha = b;
  };
  hX.__typeName = "VEL.Skynet.View.Rendering.ColourRgba";
  global.VEL.Skynet.View.Rendering.ColourRgba = hX;
  var hZ = function () {};
  hZ.__typeName = "VEL.Skynet.View.Rendering.HtmlExtensions";
  hZ.setSize = function (a, b) {
    a.width = ss.Int32.trunc(ss.round(b.width));
    a.height = ss.Int32.trunc(ss.round(b.height));
  };
  hZ.safeDrawImage$2 = function (a, j, k, b, c, d) {
    if (hZ.$2(j) && c > 0 && d > 0) {
      var f = ss.round(k);
      var g = ss.round(b);
      var h = ss.round(k + c);
      var i = ss.round(b + d);
      a.drawImage(j, f, g, h - f, i - g);
    }
  };
  hZ.safeDrawImage$3 = function (a, f, g, b, c, d) {
    hZ.safeDrawImage$4(
      a,
      f,
      g.x,
      g.y,
      b.width,
      b.height,
      c.x,
      c.y,
      d.width,
      d.height
    );
  };
  hZ.safeDrawImage$1 = function (a, c, d, b) {
    hZ.safeDrawImage$2(a, c, d.x, d.y, b.width, b.height);
  };
  hZ.safeDrawImage = function (a, d, f, b) {
    var c = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction(b, f);
    hZ.safeDrawImage$2(a, d, f.get_left(), f.get_top(), c.width, c.height);
  };
  hZ.safeDrawImage$4 = function (a, n, o, b, c, d, f, g, h, i) {
    if (hZ.$2(n) && c > 0 && d > 0 && h > 0 && i > 0) {
      if (o < 0) {
        o = 0;
      }
      if (b < 0) {
        b = 0;
      }
      var j = ss.round(f);
      var k = ss.round(g);
      var l = ss.round(f + h);
      var m = ss.round(g + i);
      a.drawImage(n, o, b, c, d, j, k, l - j, m - k);
    }
  };
  hZ.$1 = function (a) {
    return a.width;
  };
  hZ.$0 = function (a) {
    return a.height;
  };
  hZ.$2 = function (a) {
    if (ss.isNullOrUndefined(a)) {
      return false;
    }
    if (hZ.$1(a) === 0 || hZ.$0(a) === 0) {
      return false;
    }
    return true;
  };
  global.VEL.Skynet.View.Rendering.HtmlExtensions = hZ;
  var h1 = function () {
    this.$1 = false;
    this.fontStack = null;
    this.canvasFont = null;
  };
  h1.__typeName = "VEL.Skynet.View.Rendering.MeasuringContext";
  h1.$i = function (a) {
    this.$1 = false;
    this.fontStack = null;
    this.canvasFont = null;
    this.fontStack = i7.getFontStack(a.get_fontName());
    this.$1 = h1.$h;
  };
  h1.fromCanvasFont = function (a, c) {
    if (ss.isNullOrUndefined(a) || !(a.indexOf("{0}") !== -1)) {
      throw new ss.ArgumentException();
    }
    var d = new h1();
    d.canvasFont = a;
    var b = c;
    if (ss.isNullOrUndefined(b)) {
      b = h1.$h;
    }
    d.$1 = b;
    return d;
  };
  h1.$0 = function (a, b) {
    return (a & b) === b;
  };
  global.VEL.Skynet.View.Rendering.MeasuringContext = h1;
  var h3 = function () {};
  h3.__typeName = "VEL.Skynet.View.Rendering.ZLayerEnum";
  global.VEL.Skynet.View.Rendering.ZLayerEnum = h3;
  var h5 = function () {};
  h5.__typeName = "VEL.Skynet.View.Rendering.Animate.Animatables.IAnimatable";
  global.VEL.Skynet.View.Rendering.Animate.Animatables.IAnimatable = h5;
  var h7 = function () {};
  h7.__typeName = "VEL.Skynet.View.Rendering.Animate.Animatables.IHideable";
  global.VEL.Skynet.View.Rendering.Animate.Animatables.IHideable = h7;
  var h9 = function () {};
  h9.__typeName = "VEL.Skynet.View.Rendering.Animate.Animatables.IPosition";
  global.VEL.Skynet.View.Rendering.Animate.Animatables.IPosition = h9;
  var ib = function () {};
  ib.__typeName = "VEL.Skynet.View.Rendering.Animate.Animatables.ISound";
  global.VEL.Skynet.View.Rendering.Animate.Animatables.ISound = ib;
  var g1 = function () {};
  g1.__typeName = "VEL.Skynet.View.Rendering.Animate.Animatables.IVisual";
  global.VEL.Skynet.View.Rendering.Animate.Animatables.IVisual = g1;
  var g3 = function () {
    this.$1$1 = null;
  };
  g3.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$0";
  g3.$0 = function () {
    return g3.$1;
  };
  var g5 = function (a) {
    var b = function (c) {
      this.$2$1 = null;
      g3.call(this);
      this.$b(c);
    };
    ss.registerGenericClassInstance(
      b,
      g5,
      [a],
      {
        $a: function () {
          return this.$2$1;
        },
        $b: function (c) {
          this.$2$1 = c;
        },
        $9: function () {
          return this.$a().get_targetName();
        },
        $6: function () {
          return this.$a().get_blocking();
        },
        $2: function () {
          return this.$a();
        },
      },
      function () {
        return g3;
      },
      function () {
        return [];
      }
    );
    return b;
  };
  g5.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$1";
  ss.initGenericClass(g5, e, 1);
  var g7 = function (a) {
    this.$w = null;
    this.$v = null;
    this.$t = null;
    this.$u = 0;
    this.$s = 0;
    this.$r = 0;
    ss.makeGenericType(hY, [iF]).call(this, a);
  };
  g7.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$10";
  var g9 = function (a) {
    this.$c = null;
    ss.makeGenericType(g5, [ix]).call(this, new ix());
    this.$c = a;
  };
  g9.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$11";
  var hz = function (a) {
    ss.makeGenericType(g5, [io]).call(this, a);
  };
  hz.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$12";
  var hB = function (a) {
    this.$o = null;
    this.$s = null;
    this.$u = null;
    this.$t = false;
    this.$r = null;
    this.$p = null;
    this.$q = null;
    ss.makeGenericType(hP, [h8]).call(this, a);
    this.$u = this.$a().get_resourceName();
    this.$t = this.$a().get_repeat();
    this.$r = this.$a().get_maxRepeats();
  };
  hB.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$13";
  hB.$0 = function (a, d, f) {
    this.$o = null;
    this.$s = null;
    this.$u = null;
    this.$t = false;
    this.$r = null;
    this.$p = null;
    this.$q = null;
    var b = ss.makeGenericType(hP, [h8]);
    var c = new h8();
    c.set_delay(f);
    b.$0.call(this, c, a, d);
    this.$u = this.$a().get_resourceName();
    this.$t = this.$a().get_repeat();
    this.$r = this.$a().get_maxRepeats();
  };
  var hD = function (a) {
    this.$p = null;
    this.$r = null;
    this.$q = null;
    this.$3$1 = 0;
    this.$3$2 = 0;
    this.$3$3 = null;
    this.$3$4 = null;
    this.$3$5 = null;
    this.$3$6 = null;
    ss.makeGenericType(g5, [it]).call(this, a);
    this.$m(a.get_x());
    this.$o(a.get_y());
    if (ss.isValue(this.$a().get_graphics())) {
      this.$i(new aB(this.$a().get_graphics()));
    }
    if (ss.isValue(this.$a().get_animation())) {
      this.$e(c1.$0(this.$a().get_animation()));
    }
    if (ss.isValue(this.$a().get_fill())) {
      this.$g(new e6(this.$a().get_fill()));
    }
    if (ss.isValue(this.$a().get_strokeColour())) {
      this.$k(new e6(this.$a().get_strokeColour()));
    }
  };
  hD.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$14";
  var hF = function (a) {
    ss.makeGenericType(h2, [Boolean, iX]).call(this, a);
  };
  hF.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$15";
  var hH = function (a) {
    ss.makeGenericType(h2, [ss.Int32, iz]).call(this, a);
  };
  hH.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$16";
  var hJ = function (a) {
    this.$G = 0;
    this.$H = 0;
    ss.makeGenericType(h4, [iR]).call(this, a);
  };
  hJ.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$17";
  var hL = function (a) {
    ss.makeGenericType(h4, [iD]).call(this, a);
  };
  hL.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$18";
  var hN = function (a) {
    ss.makeGenericType(h4, [iH]).call(this, a);
  };
  hN.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$19";
  var hP = function (a) {
    var b = function (c) {
      this.$i = 0;
      this.$k = 0;
      this.$j = null;
      this.$3$1 = null;
      ss.makeGenericType(g5, [a]).call(this, c);
      if (ss.isValue(this.$a().get_children())) {
        this.$h(
          Enumerable.from(this.$a().get_children())
            .select(function (d) {
              return c1.$0(d);
            })
            .toArray()
        );
      }
      this.$i = this.$a().get_delay();
    };
    b.$0 = function (f, c, d) {
      b.call(this, f);
      this.$8(c);
      this.$h(d);
    };
    ss.registerGenericClassInstance(
      b,
      hP,
      [a],
      {
        $g: function () {
          return this.$3$1;
        },
        $h: function (c) {
          this.$3$1 = c;
        },
        $c: function (c) {
          this.$g().push(c);
        },
        $5: function (c) {
          this.$k -= c;
          if (this.$k < 0) {
            ik.$1(this);
            this.$f();
          }
        },
        $4: function (c) {
          this.$k = this.$i;
          this.$j = c;
          if (this.$i > 0) {
            ik.$3(this);
            return;
          } else {
            this.$f();
          }
        },
        $f: null,
        $1: function () {
          ik.$1(this);
          var f = this.$g();
          for (var c = 0; c < f.length; c++) {
            var d = f[c];
            d.$1();
          }
          if (!ss.staticEquals(this.$j, null)) {
            this.$j(this);
          }
        },
        $d: function (h, c) {
          var d = this.$g();
          for (var f = 0; f < d.length; f++) {
            var g = d[f];
            h.$c(g.$0(c));
          }
        },
        $e: function (i) {
          var c = [];
          for (var d = 0; d < i.length; d++) {
            var f = i[d];
            var g = null;
            if (ss.isValue(f.$9())) {
              g = ii.$0(f.$9());
            } else {
              if (ss.isValue(this.$9())) {
                g = ii.$0(this.$9());
              } else {
                if (ss.isValue(this.$7())) {
                  g = this.$7();
                }
              }
            }
            var h;
            if (ss.isNullOrUndefined(f.$7())) {
              h = f.$0(g);
            } else {
              h = f;
            }
            c.push(h);
          }
          return c;
        },
      },
      function () {
        return ss.makeGenericType(g5, [a]);
      },
      function () {
        return [];
      }
    );
    b.$0.prototype = b.prototype;
    return b;
  };
  hP.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$2";
  ss.initGenericClass(hP, e, 1);
  var hQ = function (a) {
    ss.makeGenericType(h4, [iJ]).call(this, a);
  };
  hQ.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$20";
  var hS = function (a) {
    this.$c = null;
    this.$e = 0;
    this.$d = false;
    ss.makeGenericType(g5, [iN]).call(this, a);
  };
  hS.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$21";
  var hU = function (a) {
    ss.makeGenericType(hP, [ic]).call(this, a);
  };
  hU.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$3";
  var hW = function (a) {
    var b = [];
    b.push(8);
    b.push(7);
    this.$n = b;
    this.$l = null;
    this.$m = null;
    this.$k = null;
    ss.makeGenericType(g5, [ih]).call(this, a);
    this.$k = this.$a().$0().$0();
  };
  hW.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$4";
  var hY = function (a) {
    var b = function (c) {
      this.$n = null;
      this.$q = 0;
      this.$m = false;
      this.$p = null;
      this.$l = null;
      this.$o = null;
      this.$k = 0;
      this.$i = 0;
      this.$j = null;
      ss.makeGenericType(g5, [a]).call(this, c);
      this.$e();
    };
    ss.registerGenericClassInstance(
      b,
      hY,
      [a],
      {
        $h: function () {
          return this.$q - this.$k;
        },
        $5: function (c) {
          if (this.$q === 0) {
            this.$c();
          }
          this.$q += c;
          if (this.$q >= this.$k) {
            if (!this.$m) {
              this.$d();
            }
            if (this.$h() <= this.$i) {
              this.$g(c);
            } else {
              if (ss.isValue(this.$j)) {
                this.$f();
              } else {
                this.$1();
              }
            }
          }
        },
        $g: null,
        $1: function () {
          if (!this.$m) {
            this.$d();
          }
          ik.$1(this);
          this.$q = 0;
          this.$m = false;
          if (!ss.staticEquals(this.$n, null)) {
            this.$n(this);
          }
        },
        $4: function (c) {
          this.$n = c;
          ik.$3(this);
          this.$5(0);
        },
        $d: function () {
          this.$m = true;
        },
        $f: function () {
          this.$q -= ss.unbox(this.$j);
          this.$m = false;
        },
        $e: function () {
          if (ss.isValue(this.$a().get_startTime())) {
            this.$p = new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
              this.$a().get_startTime()
            );
          }
          if (ss.isValue(this.$a().get_duration())) {
            this.$l = new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
              this.$a().get_duration()
            );
          }
          if (ss.isValue(this.$a().get_repeatTime())) {
            this.$o = new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
              this.$a().get_repeatTime()
            );
          }
        },
        $c: function () {
          this.$k =
            VEL.Skynet.Core.Toolbox.Maths.NumberProviderExtensions.valueOrDefault(
              this.$p,
              0,
              true
            );
          this.$i =
            VEL.Skynet.Core.Toolbox.Maths.NumberProviderExtensions.valueOrDefault(
              this.$l,
              0,
              true
            );
          this.$j =
            VEL.Skynet.Core.Toolbox.Maths.NumberProviderExtensions.getValueOrNull(
              this.$o,
              true
            );
        },
      },
      function () {
        return ss.makeGenericType(g5, [a]);
      },
      function () {
        return [];
      }
    );
    return b;
  };
  hY.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$5";
  ss.initGenericClass(hY, e, 1);
  var h0 = function (a, c, d) {
    var b = function (f) {
      this.$D = ss.getDefaultValue(a);
      this.$C = ss.getDefaultValue(a);
      this.$4$1 = ss.getDefaultValue(d);
      this.$4$2 = ss.getDefaultValue(d);
      this.$4$3 = ss.getDefaultValue(d);
      ss.makeGenericType(hY, [c]).call(this, f);
    };
    ss.registerGenericClassInstance(
      b,
      h0,
      [a, c, d],
      {
        $y: function () {
          return this.$4$1;
        },
        $z: function (f) {
          this.$4$1 = f;
        },
        $w: function () {
          return this.$4$2;
        },
        $x: function (f) {
          this.$4$2 = f;
        },
        $A: function () {
          return this.$4$3;
        },
        $B: function (f) {
          this.$4$3 = f;
        },
        $f: function () {
          ss.makeGenericType(hY, [c]).prototype.$f.call(this);
          this.$v(this.$C);
        },
        $1: function () {
          ss.makeGenericType(hY, [c]).prototype.$1.call(this);
          this.$v(this.$C);
        },
        $g: function (f) {
          var g = this.$t();
          this.$v(g);
        },
        $t: null,
        $v: null,
        $s: null,
        $d: function () {
          if (ss.isValue(this.$w()) && ss.isValue(this.$A())) {
            throw new ss.ArgumentException(
              ss.getTypeName(ss.getInstanceType(this)) +
                " may be have an EndValue, a ValueChange or neither, but not both. EndValue: " +
                this.$w() +
                ", ValueChange: " +
                this.$A()
            );
          }
          ss.makeGenericType(hY, [c]).prototype.$d.call(this);
          var f = this.$s();
          this.$D = ss.isValue(this.$y()) ? this.$u(this.$y()) : f;
          if (!ss.equals(this.$D, f)) {
            this.$v(this.$D);
          }
          if (ss.isValue(this.$w())) {
            this.$C = this.$u(this.$w());
          } else {
            if (ss.isValue(this.$A())) {
              this.$C = this.$r();
            } else {
              this.$C = this.$D;
            }
          }
        },
        $u: null,
        $r: null,
      },
      function () {
        return ss.makeGenericType(hY, [c]);
      },
      function () {
        return [];
      }
    );
    return b;
  };
  h0.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$6";
  ss.initGenericClass(h0, e, 3);
  var h2 = function (a, b) {
    var c = function (d) {
      ss.makeGenericType(h0, [
        a,
        b,
        ss.makeGenericType(ss.Nullable$1, [a]),
      ]).call(this, d);
    };
    ss.registerGenericClassInstance(
      c,
      h2,
      [a, b],
      {
        $e: function () {
          this.$z(this.$a().get_startValue());
          this.$x(this.$a().get_endValue());
          this.$B(this.$a().get_valueChange());
          ss.makeGenericType(hY, [b]).prototype.$e.call(this);
        },
        $u: function (d) {
          return d || ss.getDefaultValue(a);
        },
        $t: function () {
          if (this.$h() >= this.$i) {
            return this.$C;
          } else {
            return this.$D;
          }
        },
      },
      function () {
        return ss.makeGenericType(h0, [
          a,
          b,
          ss.makeGenericType(ss.Nullable$1, [a]),
        ]);
      },
      function () {
        return [];
      }
    );
    return c;
  };
  h2.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$7";
  ss.initGenericClass(h2, e, 2);
  var h4 = function (a) {
    var b = function (c) {
      this.$E = null;
      ss.makeGenericType(h0, [
        Number,
        a,
        VEL.Skynet.Core.Toolbox.Maths.NumberProvider,
      ]).call(this, c);
      if (ss.isValue(c.get_ease())) {
        this.$E = b9.$0(c.get_ease());
      }
    };
    ss.registerGenericClassInstance(
      b,
      h4,
      [a],
      {
        $e: function () {
          if (!ss.isNullOrEmptyString(this.$a().get_startValue())) {
            this.$z(
              new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
                this.$a().get_startValue()
              )
            );
          }
          if (!ss.isNullOrEmptyString(this.$a().get_endValue())) {
            this.$x(
              new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
                this.$a().get_endValue()
              )
            );
          }
          if (!ss.isNullOrEmptyString(this.$a().get_valueChange())) {
            this.$B(
              new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
                this.$a().get_valueChange()
              )
            );
          }
          ss.makeGenericType(hY, [a]).prototype.$e.call(this);
        },
        $u: function (c) {
          return VEL.Skynet.Core.Toolbox.Maths.NumberProviderExtensions.valueOrDefault(
            c,
            0,
            false
          );
        },
        $r: function () {
          return (
            this.$D +
            VEL.Skynet.Core.Toolbox.Maths.NumberProviderExtensions.valueOrDefault(
              this.$A(),
              0,
              false
            )
          );
        },
        $t: function () {
          var c = this.$C - this.$D;
          if (this.$i <= 0) {
            return this.$D + c;
          }
          if (ss.isValue(this.$E)) {
            return this.$E.getEase(this.$h(), this.$D, c, this.$i);
          } else {
            return this.$D + (this.$h() / this.$i) * c;
          }
        },
      },
      function () {
        return ss.makeGenericType(h0, [
          Number,
          a,
          VEL.Skynet.Core.Toolbox.Maths.NumberProvider,
        ]);
      },
      function () {
        return [];
      }
    );
    return b;
  };
  h4.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$8";
  ss.initGenericClass(h4, e, 1);
  var h6 = function (a) {
    ss.makeGenericType(h4, [iB]).call(this, a);
  };
  h6.__typeName = "VEL.Skynet.View.Rendering.Animate.Animations.$9";
  var h8 = function () {
    this.$3$1 = false;
    this.$3$2 = null;
    this.$3$3 = null;
    this.$3$4 = null;
    this.$3$5 = null;
    ie.call(this);
  };
  h8.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.AnimationCollectionModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.AnimationCollectionModel =
    h8;
  var ia = function () {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = false;
    this.set_blocking(true);
  };
  ia.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.AnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.AnimationModel = ia;
  var ic = function () {
    ie.call(this);
  };
  ic.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.AnimationSequenceModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.AnimationSequenceModel =
    ic;
  var ie = function () {
    this.$2$1 = null;
    this.$2$2 = 0;
    ia.call(this);
  };
  ie.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.BaseAnimationCollectionModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.BaseAnimationCollectionModel =
    ie;
  var ih = function () {
    this.$2$1 = 0;
    this.$2$2 = 0;
    this.$2$3 = null;
    this.$2$4 = null;
    this.$2$5 = 0;
    this.$2$6 = 0;
    this.$2$7 = 0;
    this.$2$8 = false;
    ia.call(this);
    this.set_$axisRatio(1);
    this.set_$centerX(0.5);
    this.set_$centerY(0.5);
  };
  ih.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.BindingAnimationModel";
  var ij = function () {};
  ij.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.BindingInputEnum";
  global.VEL.Skynet.View.Rendering.Animate.Animations.BindingInputEnum = ij;
  var il = function () {};
  il.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.BindingOutputEnum";
  global.VEL.Skynet.View.Rendering.Animate.Animations.BindingOutputEnum = il;
  var io = function () {
    ia.call(this);
  };
  io.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.ClearAnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.ClearAnimationModel =
    io;
  var iq = function () {
    this.random = 0;
    this.index = 0;
    VEL.Skynet.Core.View.ObjectDatas._Object.ObjectData.call(this);
    this.random = iq.$1.next(1000);
    this.index = iq.$0++;
    if (iq.$0 === 2147483647) {
      iq.$0 = 0;
    }
  };
  iq.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.DecorationAnimationData";
  global.VEL.Skynet.View.Rendering.Animate.Animations.DecorationAnimationData =
    iq;
  var it = function () {
    this.$2$1 = null;
    this.$2$2 = 0;
    this.$2$3 = 0;
    this.$2$4 = null;
    this.$2$5 = 0;
    this.$2$6 = 0;
    this.$2$7 = 0;
    this.$2$8 = null;
    this.$2$9 = 0;
    this.$2$10 = 0;
    this.$2$11 = null;
    this.$2$12 = null;
    this.$2$13 = null;
    this.$2$14 = false;
    this.$2$15 = 0;
    this.$2$16 = 0;
    this.$2$17 = 0;
    this.$2$18 = 0;
    this.$2$19 = false;
    this.$2$20 = null;
    ia.call(this);
    this.set_zLayer(2);
    this.set_origin(4);
    this.set_instances(1);
    this.set_repeatX(0);
  };
  it.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.DecorationAnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.DecorationAnimationModel =
    it;
  var iv = function () {
    this.$4$1 = null;
    ss.makeGenericType(iV, [String]).call(this);
  };
  iv.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.DoubleAnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.DoubleAnimationModel =
    iv;
  var ix = function () {
    ia.call(this);
  };
  ix.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.EmptyAnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.EmptyAnimationModel =
    ix;
  var iz = function () {
    ss.makeGenericType(iV, [
      ss.makeGenericType(ss.Nullable$1, [ss.Int32]),
    ]).call(this);
  };
  iz.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.FrameAnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.FrameAnimationModel =
    iz;
  var iB = function () {
    iv.call(this);
  };
  iB.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.FrameRampAnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.FrameRampAnimationModel =
    iB;
  var iD = function () {
    iv.call(this);
  };
  iD.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.OpacityAnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.OpacityAnimationModel =
    iD;
  var iF = function () {
    this.$3$1 = null;
    this.$3$2 = null;
    this.$3$3 = null;
    this.$3$4 = 0;
    iP.call(this);
  };
  iF.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.PhysicsAnimation1DModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.PhysicsAnimation1DModel =
    iF;
  var iH = function () {
    this.$5$1 = 0;
    this.$5$2 = 0;
    this.$5$3 = 0;
    this.$5$4 = 0;
    iv.call(this);
    this.set_$axisRatio(1);
    this.set_$centerX(0.5);
    this.set_$centerY(0.5);
  };
  iH.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.RotateAnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.RotateAnimationModel =
    iH;
  var iJ = function () {
    this.$5$1 = 0;
    iv.call(this);
  };
  iJ.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.ScaleAnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.ScaleAnimationModel =
    iJ;
  var iL = function () {};
  iL.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.ScalePropertyEnum";
  global.VEL.Skynet.View.Rendering.Animate.Animations.ScalePropertyEnum = iL;
  var iN = function () {
    this.$2$1 = 0;
    this.$2$2 = null;
    ia.call(this);
  };
  iN.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.SoundAnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.SoundAnimationModel =
    iN;
  var iP = function () {
    this.$2$1 = null;
    this.$2$2 = null;
    this.$2$3 = null;
    ia.call(this);
  };
  iP.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.TimedAnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.TimedAnimationModel =
    iP;
  var iR = function () {
    this.$5$1 = 0;
    this.$5$2 = 0;
    iv.call(this);
  };
  iR.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.TranslateAnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.TranslateAnimationModel =
    iR;
  var iT = function () {};
  iT.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.TranslateOriginEnum";
  global.VEL.Skynet.View.Rendering.Animate.Animations.TranslateOriginEnum =
    iT;
  var iV = function (a) {
    var b = function () {
      this.$3$1 = ss.getDefaultValue(a);
      this.$3$2 = ss.getDefaultValue(a);
      this.$3$3 = ss.getDefaultValue(a);
      iP.call(this);
    };
    ss.registerGenericClassInstance(
      b,
      iV,
      [a],
      {
        get_startValue: function () {
          return this.$3$1;
        },
        set_startValue: function (c) {
          this.$3$1 = c;
        },
        get_endValue: function () {
          return this.$3$2;
        },
        set_endValue: function (c) {
          this.$3$2 = c;
        },
        get_valueChange: function () {
          return this.$3$3;
        },
        set_valueChange: function (c) {
          this.$3$3 = c;
        },
      },
      function () {
        return iP;
      },
      function () {
        return [];
      }
    );
    ss.setMetadata(b, {
      members: [
        { name: ".ctor", type: 1, params: [] },
        {
          name: "EndValue",
          type: 16,
          returnType: a,
          getter: {
            name: "get_EndValue",
            type: 8,
            sname: "get_endValue",
            returnType: a,
            params: [],
          },
          setter: {
            name: "set_EndValue",
            type: 8,
            sname: "set_endValue",
            returnType: Object,
            params: [a],
          },
        },
        {
          name: "StartValue",
          type: 16,
          returnType: a,
          getter: {
            name: "get_StartValue",
            type: 8,
            sname: "get_startValue",
            returnType: a,
            params: [],
          },
          setter: {
            name: "set_StartValue",
            type: 8,
            sname: "set_startValue",
            returnType: Object,
            params: [a],
          },
        },
        {
          name: "ValueChange",
          type: 16,
          returnType: a,
          getter: {
            name: "get_ValueChange",
            type: 8,
            sname: "get_valueChange",
            returnType: a,
            params: [],
          },
          setter: {
            name: "set_ValueChange",
            type: 8,
            sname: "set_valueChange",
            returnType: Object,
            params: [a],
          },
        },
      ],
    });
    return b;
  };
  iV.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.ValueAnimationModel$1";
  ss.initGenericClass(iV, e, 1);
  global.VEL.Skynet.View.Rendering.Animate.Animations.ValueAnimationModel$1 =
    iV;
  var iX = function () {
    ss.makeGenericType(iV, [ss.makeGenericType(ss.Nullable$1, [Boolean])]).call(
      this
    );
  };
  iX.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.VisibilityAnimationModel";
  global.VEL.Skynet.View.Rendering.Animate.Animations.VisibilityAnimationModel =
    iX;
  var iZ = function () {};
  iZ.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Animations.Interfaces.$0";
  var i1 = function () {
    this.$1$1 = 0;
    this.$1$2 = 0;
    this.$2 = null;
    this.$1$3 = 0;
    this.$1$4 = 0;
    this.$1 = null;
    this.set_scale(1);
  };
  i1.__typeName =
    "VEL.Skynet.View.Rendering.Animate.BindingFunctions.Binding";
  global.VEL.Skynet.View.Rendering.Animate.BindingFunctions.Binding = i1;
  var i3 = function () {
    i1.call(this);
  };
  i3.__typeName =
    "VEL.Skynet.View.Rendering.Animate.BindingFunctions.LinearBinding";
  global.VEL.Skynet.View.Rendering.Animate.BindingFunctions.LinearBinding =
    i3;
  var i5 = function () {
    this.$2$1 = 0;
    this.$2$2 = false;
    this.$4 = null;
    i1.call(this);
    this.set_frequency(1);
    this.set_offset(0);
    this.set_randomPhase(false);
  };
  i5.__typeName =
    "VEL.Skynet.View.Rendering.Animate.BindingFunctions.SinusoidalBinding";
  global.VEL.Skynet.View.Rendering.Animate.BindingFunctions.SinusoidalBinding =
    i5;
  var ig = function () {};
  ig.__typeName = "VEL.Skynet.View.Rendering.Animate.Collections.$0";
  ig.$3 = function (a, b) {
    ig.$7 = a;
    ig.$6 = ss.cast(b, jL);
  };
  ig.$5 = function () {
    return ss.isValue(ig.$6);
  };
  ig.$0 = function (a) {
    if (ss.isValue(ig.$6) && a.$16()) {
      ig.$6.$0(a);
    } else {
      if (ss.isValue(ig.$7)) {
        ig.$7.$v().push(a);
      }
    }
  };
  ig.$4 = function (a) {
    a.dispose();
    if (ss.isValue(ig.$6) && a.$16()) {
      ig.$6.$3(a);
    } else {
      if (ss.isValue(ig.$7)) {
        ss.remove(ig.$7.$v(), a);
      }
    }
  };
  ig.$2 = function (a, b) {
    if (ig.$5() && b === 2) {
      return (
        (a.get_objectBounds().get_width() * hK.$a) /
        ss.cast(a, ki).get_absoluteBounds().get_width()
      );
    } else {
      return 1;
    }
  };
  ig.$1 = function (a, b) {
    if (ig.$5() && b === 2) {
      return VEL.Skynet.Core.Toolbox.Geometry.Rect.op_Division(
        ss.cast(a, ki).get_absoluteBounds(),
        hK.$a
      );
    } else {
      return a.get_objectBounds();
    }
  };
  var ii = function () {};
  ii.__typeName = "VEL.Skynet.View.Rendering.Animate.Collections.$1";
  ii.$1 = function () {
    ii.$3 = new (ss.makeGenericType(ss.Dictionary$2, [String, h5]))();
  };
  ii.$2 = function (a, b) {
    if (!ii.$3.containsKey(a)) {
      ii.$3.add(a, b);
    }
  };
  ii.$0 = function (a) {
    try {
      return ii.$3.get_item(a);
    } catch (b) {
      b = ss.Exception.wrap(b);
      if (ss.isInstanceOfType(b, ss.KeyNotFoundException)) {
        throw new ss.KeyNotFoundException(
          "Can't find " + a + " in AnimatableDictionary"
        );
      } else {
        throw b;
      }
    }
  };
  var ik = function () {};
  ik.__typeName = "VEL.Skynet.View.Rendering.Animate.Collections.$2";
  ik.$2 = function () {
    ik.$8 = [];
  };
  ik.$3 = function (a) {
    if (!ss.contains(ik.$8, a)) {
      ik.$8.push(a);
      ik.$5();
    }
  };
  ik.$1 = function (a) {
    if (ss.remove(ik.$8, a)) {
      ik.$5();
    }
  };
  ik.$0 = function (a) {
    var c = Array.prototype.slice.call(ik.$8);
    for (var d = 0; d < c.length; d++) {
      var b = c[d];
      if (ss.referenceEquals(b.$7(), a)) {
        ss.remove(ik.$8, b);
      }
    }
    ik.$5();
  };
  ik.$4 = function (a) {
    var d = a / 1000;
    var f = Array.prototype.slice.call(ik.$8);
    for (var b = 0; b < f.length; b++) {
      var c = f[b];
      c.$5(d);
    }
  };
  ik.$6 = function () {
    return ik.$1$1;
  };
  ik.$7 = function (a) {
    ik.$1$1 = a;
  };
  ik.$5 = function () {
    ik.$7(
      Enumerable.from(ik.$8).any(function (a) {
        return ss.isValue(a.$7()) && a.$7().get_forceRendering();
      })
    );
  };
  var im = function () {};
  im.__typeName = "VEL.Skynet.View.Rendering.Animate.Collections.$3";
  im.$1 = function (a) {
    im.$3 = new (ss.makeGenericType(ss.Dictionary$2, [String, g3]))();
    var d = i7.getXmlReaders("_Shared/Animations");
    for (var f = 0; f < d.length; f++) {
      var b = d[f];
      im.$2(a, b);
    }
    var c = i7.getXmlReader("Animations", 0, true);
    im.$2(a, c);
  };
  im.$0 = function (a) {
    if (a.toLowerCase() === "none") {
      return g3.$0();
    }
    try {
      return im.$3.get_item(a);
    } catch (b) {
      b = ss.Exception.wrap(b);
      if (ss.isInstanceOfType(b, ss.KeyNotFoundException)) {
        return new g9(a);
      } else {
        throw b;
      }
    }
  };
  im.$2 = function (a, g) {
    var h = g.root.get_children();
    for (var b = 0; b < h.length; b++) {
      var c = h[b];
      var d = a.parse(ia).call(a, c);
      if (im.$3.containsKey(d.get_name())) {
        throw new a4("Duplicate animation name: " + d.get_name());
      }
      var f = c1.$0(d);
      im.$3.add(d.get_name(), f);
    }
  };
  var ip = function () {
    this.$5 = null;
    this.$6 = null;
    this.$5 = [];
  };
  ip.__typeName = "VEL.Skynet.View.Rendering.Animate.Collections.$4";
  var ir = function (a, c, d, b) {
    this.$7 = null;
    this.$5 = null;
    this.$6 = null;
    this.$4 = 0;
    this.$7 = a;
    this.$5 = c;
    this.$4 = d;
    this.$6 = b;
  };
  ir.__typeName = "VEL.Skynet.View.Rendering.Animate.Collections.$5";
  var iu = function () {};
  iu.__typeName =
    "VEL.Skynet.View.Rendering.Animate.Collections.AnimationInterruptType";
  global.VEL.Skynet.View.Rendering.Animate.Collections.AnimationInterruptType =
    iu;
  var iw = function (a) {
    iE.call(this, a);
  };
  iw.__typeName =
    "VEL.Skynet.View.Rendering.Animate.EasingFunctions.BounceEase";
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions.BounceEase = iw;
  var iy = function () {
    iG.call(this);
  };
  iy.__typeName =
    "VEL.Skynet.View.Rendering.Animate.EasingFunctions.BounceEaseModel";
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions.BounceEaseModel =
    iy;
  var iA = function (a) {
    iE.call(this, a);
  };
  iA.__typeName =
    "VEL.Skynet.View.Rendering.Animate.EasingFunctions.CircularEase";
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions.CircularEase = iA;
  var iC = function () {
    iG.call(this);
  };
  iC.__typeName =
    "VEL.Skynet.View.Rendering.Animate.EasingFunctions.CircularEaseModel";
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions.CircularEaseModel =
    iC;
  var iE = function (a) {
    this.$1$1 = 0;
    this.set_easingMode(a.get_easingMode());
  };
  iE.__typeName = "VEL.Skynet.View.Rendering.Animate.EasingFunctions.Ease";
  iE.$ctor1 = function (a) {
    this.$1$1 = 0;
    this.set_easingMode(a);
  };
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions.Ease = iE;
  var iG = function () {
    this.$1$1 = 0;
    this.set_easingMode(1);
  };
  iG.__typeName =
    "VEL.Skynet.View.Rendering.Animate.EasingFunctions.EaseModel";
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions.EaseModel = iG;
  var iI = function () {};
  iI.__typeName =
    "VEL.Skynet.View.Rendering.Animate.EasingFunctions.EasingModeEnum";
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions.EasingModeEnum =
    iI;
  var iK = function (a) {
    this.$1 = 0;
    iE.call(this, a);
    this.$1 = new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
      a.get_springiness()
    ).getValue(false);
  };
  iK.__typeName =
    "VEL.Skynet.View.Rendering.Animate.EasingFunctions.ElasticEase";
  iK.$ctor1 = function (a, b) {
    this.$1 = 0;
    iE.$ctor1.call(this, b);
    this.$1 = new VEL.Skynet.Core.Toolbox.Maths.NumberProvider(a).getValue(
      false
    );
  };
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions.ElasticEase = iK;
  var iM = function () {
    this.$2$1 = null;
    iG.call(this);
    this.set_springiness("0.7");
  };
  iM.__typeName =
    "VEL.Skynet.View.Rendering.Animate.EasingFunctions.ElasticEaseModel";
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions.ElasticEaseModel =
    iM;
  var iO = function (a) {
    iE.$ctor1.call(this, a);
  };
  iO.__typeName =
    "VEL.Skynet.View.Rendering.Animate.EasingFunctions.QuadraticEase";
  iO.$ctor1 = function (a) {
    iE.call(this, a);
  };
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions.QuadraticEase = iO;
  var iQ = function () {
    iG.call(this);
  };
  iQ.__typeName =
    "VEL.Skynet.View.Rendering.Animate.EasingFunctions.QuadraticEaseModel";
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions.QuadraticEaseModel =
    iQ;
  var iS = function (a) {
    this.$4 = 0;
    this.$7 = 0;
    this.$3 = 0;
    this.$5 = 0;
    this.$6 = false;
    this.$8 = false;
    iE.call(this, a);
    var b = ss.replaceAllString(a.get_frequency(), "Hz", "");
    this.$8 = a.get_frequency().indexOf("Hz") !== -1;
    this.$4 = parseFloat(b);
    this.$7 = a.get_scale();
    this.$3 = a.get_decay();
    this.$5 = a.get_phase();
    this.$6 = a.get_randomPhase();
  };
  iS.__typeName =
    "VEL.Skynet.View.Rendering.Animate.EasingFunctions.SinusoidalEase";
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions.SinusoidalEase =
    iS;
  var iU = function () {
    this.$2$1 = null;
    this.$2$2 = 0;
    this.$2$3 = 0;
    this.$2$4 = 0;
    this.$2$5 = false;
    iG.call(this);
    this.set_frequency("1");
    this.set_scale(1);
    this.set_decay(0);
    this.set_phase(0);
  };
  iU.__typeName =
    "VEL.Skynet.View.Rendering.Animate.EasingFunctions.SinusoidalEaseModel";
  global.VEL.Skynet.View.Rendering.Animate.EasingFunctions.SinusoidalEaseModel =
    iU;
  var iW = function () {};
  iW.__typeName = "VEL.Skynet.View.Rendering.Painters.$0";
  var iY = function () {};
  iY.__typeName = "VEL.Skynet.View.Rendering.Painters.ImageHelper";
  iY.scaleImageToCanvas = function (a, k, l, b, c, d) {
    var f = k ? lB.$1() : lB.$2();
    hZ.setSize(f, l);
    var g = new VEL.Skynet.Global.Interop.CanvasRenderingContext2DSettings();
    g.willReadFrequently = !ss.isNullOrEmptyString(d);
    var h = g;
    var i = ss.cast(f.getContext("2d", h), CanvasRenderingContext2D);
    i.save();
    if (b) {
      i.translate(f.width, 0);
      i.scale(-1, 1);
    }
    if (ss.isValue(c)) {
      hZ.safeDrawImage(i, a, c, l);
    } else {
      hZ.safeDrawImage$2(i, a, 0, 0, l.width, l.height);
    }
    i.restore();
    if (!ss.isNullOrEmptyString(d)) {
      var j = {};
      if (!hV.tryParse(d, j)) {
        throw new ss.ArgumentException("Invalid tint: " + d);
      }
      iY.tintCanvasArea(i, 0, 0, l.width, l.height, j.$);
    }
    return f;
  };
  iY.prepare = function (a, m, n, b, c, d) {
    var f = a ? 1 : 0;
    var g = ss.isValue(c);
    var h = d[f];
    var i = ss.Int32.trunc(b.width);
    var j = ss.Int32.trunc(b.height);
    if (ss.isNullOrUndefined(h) || (!g && (i !== h.width || j !== h.height))) {
      var k = i7.getImageElement(m);
      lB.$4(h);
      var l = g
        ? new VEL.Skynet.Core.Toolbox.Geometry.Size(k.width, k.height)
        : new VEL.Skynet.Core.Toolbox.Geometry.Size(i, j);
      h = d[f] = iY.scaleImageToCanvas(k, true, l, a, null, n);
    }
    return h;
  };
  iY.tintCanvasArea = function (a, r, s, b, c, d) {
    var f = a.getImageData(r, s, b, c);
    var g = f.data;
    var h = iY.$0(d.red, d.green, d.blue);
    var i = 1 - d.alpha;
    var j = d.alpha;
    for (var k = 0; k < g.length; k += 4) {
      var l = g[k];
      var m = g[k + 1];
      var n = g[k + 2];
      var o = iY.$0(l, m, n);
      if (o >= 128) {
        var p = ss.Int32.div((o - 128) * (255 - h), 128);
        l = ss.Int32.trunc(l * i + j * Math.min(255, d.red + p));
        m = ss.Int32.trunc(m * i + j * Math.min(255, d.green + p));
        n = ss.Int32.trunc(n * i + j * Math.min(255, d.blue + p));
      } else {
        var q = ss.Int32.div((128 - o) * h, 128);
        l = ss.Int32.trunc(l * i + j * Math.max(0, d.red - q));
        m = ss.Int32.trunc(m * i + j * Math.max(0, d.green - q));
        n = ss.Int32.trunc(n * i + j * Math.max(0, d.blue - q));
      }
      g[k] = l;
      g[k + 1] = m;
      g[k + 2] = n;
    }
    a.putImageData(f, r, s);
  };
  iY.$0 = function (a, b, c) {
    return ss.Int32.div(
      Math.max(a, Math.max(b, c)) + Math.min(a, Math.min(b, c)),
      2
    );
  };
  global.VEL.Skynet.View.Rendering.Painters.ImageHelper = iY;
  var i0 = function (a, b) {
    i0.$0.call(this, a.$d, a.$c, a.$e, b, null);
  };
  i0.__typeName = "VEL.Skynet.View.Rendering.Painters.Decorations.$0";
  i0.$0 = function (a, d, f, b, c) {
    this.$d = null;
    this.$a = null;
    this.$b = null;
    this.$e = null;
    this.$c = false;
    hA.call(this);
    this.$d = a;
    this.$c = d;
    this.$a = b;
    this.$b = c;
    this.$e = f;
    if (
      ss.isValue(f) &&
      !ss.isInstanceOfType(b, VEL.Skynet.Core.View.ObjectDatas.Tile.TileData)
    ) {
      throw new a4("Use Text with Tiles only");
    }
  };
  var i2 = function (a) {
    this.$5 = false;
    this.$6 = false;
    this.$8 = 0;
    this.$9 = 0;
    this.$7 = 0;
    this.$3 = null;
    this.$4 = null;
    var b = a.split(String.fromCharCode(61));
    this.$3 = b[0];
    this.$4 = b[1];
    this.$5 = this.$4.indexOf(String.fromCharCode(47)) !== -1;
    this.$6 = this.$4.toLowerCase() === "true";
    if (this.$4.length > 0 && ss.isNumber(this.$4.charCodeAt(0))) {
      if (this.$5) {
        var c = this.$4.split(String.fromCharCode(47));
        this.$7 = parseInt(c[0]);
        this.$9 = parseInt(c[1]);
      } else {
        this.$8 = parseInt(this.$4);
      }
    }
  };
  i2.__typeName = "VEL.Skynet.View.Rendering.Painters.Graphics.$0";
  var i4 = function (a) {
    this.$2 = null;
    if (ss.isNullOrUndefined(a)) {
      this.$2 = [];
    } else {
      this.$2 = Enumerable.from(a.split(String.fromCharCode(44)))
        .select(function (b) {
          return new i2(b);
        })
        .toArray();
    }
  };
  i4.__typeName = "VEL.Skynet.View.Rendering.Painters.Graphics.$1";
  var i6 = function (a) {
    this.$3 = null;
    this.$3 = new i4(a);
  };
  i6.__typeName = "VEL.Skynet.View.Rendering.Painters.Graphics.$2";
  var i9 = function (a, c, d, b) {
    this.$4 = null;
    this.$3 = 0;
    this.$6 = 0;
    this.$2 = 0;
    this.$5 = 0;
    this.$1$1 = 0;
    this.$5 = -1;
    this.$4 = a;
    this.$3 = c;
    this.$1(d);
    this.$2 = b;
  };
  i9.__typeName = "VEL.Skynet.View.Rendering.Painters.Graphics.$3";
  var jb = function (a, b) {
    this.$2 = null;
    this.$3 = null;
    this.$1 = null;
    this.$2 = a;
    this.$3 = b;
    this.$1 = new Array(2);
  };
  jb.__typeName = "VEL.Skynet.View.Rendering.Painters.Graphics.$4";
  var jd = function (a, f, g, b, c, d) {
    this.$a = null;
    this.$7 = null;
    this.$b = 0;
    this.$8 = 0;
    this.$5 = null;
    this.$9 = 0;
    this.$6 = 0;
    i6.call(this, a);
    this.$a = f;
    this.$b = ss.isNullOrUndefined(f) ? 1 : b;
    this.$7 = g;
    this.$8 = ss.isNullOrUndefined(g) ? 1 : c;
    this.$5 = d;
  };
  jd.__typeName = "VEL.Skynet.View.Rendering.Painters.Graphics.$5";
  var jf = function (a, i, j, b, c, d, f, g, h) {
    this.$a = null;
    this.$f = 0;
    this.$c = null;
    this.$g = null;
    this.$i = 0;
    this.$b = 0;
    this.$d = 0;
    this.$h = 0;
    this.$e = false;
    i6.call(this, a);
    this.$f = i;
    this.$c = j;
    this.$g = b;
    this.$i = c;
    this.$b = f;
    this.$d = g;
    this.$h = d;
    this.$e = h;
  };
  jf.__typeName = "VEL.Skynet.View.Rendering.Painters.Graphics.$6";
  var jh = function (a, d, f, b, c) {
    this.$8 = null;
    this.$9 = null;
    this.$5 = null;
    this.$7 = null;
    this.$6 = false;
    i6.call(this, a);
    this.$8 = d;
    this.$9 = f;
    this.$5 = new Array(2);
    this.$7 = b;
    this.$6 = c;
  };
  jh.__typeName = "VEL.Skynet.View.Rendering.Painters.Graphics.$7";
  var jj = function () {};
  jj.__typeName =
    "VEL.Skynet.View.Rendering.Painters.Graphics.GraphicShapeEnum";
  global.VEL.Skynet.View.Rendering.Painters.Graphics.GraphicShapeEnum = jj;
  var jl = function (a, b) {
    this.$f = null;
    this.$e = null;
    this.$d = false;
    this.$c = false;
    this.$b = null;
    this.$f = a;
    this.$e = b;
  };
  jl.__typeName = "VEL.Skynet.View.Rendering.Scene.$0";
  jl.$1 = function (a) {
    switch (a) {
      case 0:
      case 13:
      case 18:
      case 19:
      case 20:
      case 21:
        return true;
      default:
        return false;
    }
  };
  jl.$0 = function (a) {
    var b = String.getEnumerator(a);
    try {
      while (b.moveNext()) {
        var c = b.current();
        if (
          !(c >= 97 && c <= 122) &&
          !(c >= 65 && c <= 90) &&
          !(c >= 48 && c <= 57)
        ) {
          return false;
        }
      }
    } finally {
      b.dispose();
    }
    return true;
  };
  var jn = function (a) {
    this.$7 = null;
    this.$1$1 = null;
    this.$1$2 = null;
    this.$6(a);
    if (ss.isValue(this.$5().get_children())) {
      this.$4(
        Enumerable.from(this.$5().get_children())
          .select(function (c) {
            return c1.$0(c);
          })
          .toArray()
      );
    }
    var b = this.$5().get_types().split(String.fromCharCode(44));
    this.$7 = Enumerable.from(b).select(function (c) {
      return ss.cast(
        ss.Enum.parse(VEL.Skynet.Core.View.SceneEventsEnum, c),
        ss.Int32
      );
    });
  };
  jn.__typeName = "VEL.Skynet.View.Rendering.Scene.$1";
  var jp = function (a) {
    this.$7 = 0;
    this.$6 = null;
    this.$3 = 0;
    this.$5 = null;
    this.$4 = null;
    this.$7 = 1;
    this.$4 = a;
  };
  jp.__typeName = "VEL.Skynet.View.Rendering.Scene.$2";
  jp.$1 = function (a, b, c) {
    this.$7 = 0;
    this.$6 = null;
    this.$3 = 0;
    this.$5 = null;
    this.$4 = null;
    this.$7 = ss.isNullOrUndefined(c) ? 0 : 2;
    this.$6 = a;
    this.$3 = b;
    this.$4 = c;
  };
  var jr = function () {};
  jr.__typeName = "VEL.Skynet.View.Rendering.Scene.$3";
  var jt = function () {};
  jt.__typeName = "VEL.Skynet.View.Rendering.Scene.$4";
  var jv = function (a, b, c) {
    this.$2 = 0;
    this.$3 = 0;
    this.$4 = 0;
    this.$2 = a;
    this.$3 = b;
    this.$4 = c;
  };
  jv.__typeName = "VEL.Skynet.View.Rendering.Scene.$5";
  jv.$0 = function (a, b) {
    var c = 500;
    return Math.sqrt(
      VEL.Skynet.Core.Toolbox.Maths.MathEx.pow2(a.$2 - b.$2) +
        VEL.Skynet.Core.Toolbox.Maths.MathEx.pow2(a.$3 - b.$3) +
        VEL.Skynet.Core.Toolbox.Maths.MathEx.pow2((a.$4 - b.$4) * c)
    );
  };
  var jx = function (a, i, j, b, c, d, f) {
    this.$t = null;
    this.$C = null;
    this.$w = 0;
    this.$x = null;
    this.$v = null;
    this.$A = null;
    this.$s = null;
    this.$r = null;
    this.$y = null;
    this.$B = null;
    this.$D = null;
    this.$z = null;
    this.$u = 0;
    this.$m = null;
    this.$i = null;
    this.$n = null;
    this.$q = null;
    this.$l = null;
    this.$k = null;
    this.$p = false;
    this.$o = false;
    this.$j = false;
    this.$j = true;
    this.$C = i;
    this.$t = i.parentElement;
    this.$x = j;
    this.$v = b || [];
    this.$A = Enumerable.from(this.$v)
      .where(function (k) {
        return k.$0(0);
      })
      .orderBy(function (k) {
        return ss.getHashCode(k);
      })
      .toArray();
    this.$s = Enumerable.from(this.$v)
      .where(function (k) {
        return k.$0(1);
      })
      .toArray();
    this.$B = c;
    this.$q = d;
    for (var g = 0; g < this.$x.length; g++) {
      var h = this.$x[g];
      h.$d(this.$B);
    }
    this.$w = f;
    this.$r = new hT();
    this.$y = new hT();
    this.$m = ss.cast(
      Enumerable.from(this.$x).firstOrDefault(function (k) {
        return ss.isInstanceOfType(k, jP);
      }, ss.getDefaultValue(jD)),
      jP
    );
    this.$n = ss.cast(
      Enumerable.from(this.$x).firstOrDefault(function (k) {
        return ss.isInstanceOfType(k, jF);
      }, ss.getDefaultValue(jD)),
      jF
    );
    this.$i = ss.cast(
      Enumerable.from(this.$x).firstOrDefault(function (k) {
        return ss.isInstanceOfType(k, jL);
      }, ss.getDefaultValue(jD)),
      jL
    );
    this.$l = new jl(a, this);
    if (ss.isValue(this.$m)) {
      ig.$3(this.$m.$r, this.$i);
    }
    this.$D = new ss.Random();
    this.$2();
    this.$1();
  };
  jx.__typeName = "VEL.Skynet.View.Rendering.Scene.$6";
  var jz = function (a) {
    this.$o = null;
    this.$m = null;
    this.$q = 1;
    this.$p = null;
    this.$j = null;
    this.$n = null;
    this.$s = null;
    this.$r = null;
    this.$l = 0;
    this.$u = 0;
    this.$t = null;
    this.$k = 0;
    this.$v = false;
    this.$1$1 = null;
    this.$1$2 = 0;
    this.$1$3 = 0;
    this.$1$4 = 0;
    this.$j = new jv(0, 0, 0);
    this.$n = new jv(0, 0, 0);
    this.$o = a;
    ii.$2("Camera", this);
  };
  jz.__typeName = "VEL.Skynet.View.Rendering.Scene.$7";
  var jB = function () {
    this.$1$1 = null;
    this.$1$2 = 0;
    this.$1$3 = 0;
    this.$1$4 = false;
    this.$1$5 = null;
  };
  jB.__typeName = "VEL.Skynet.View.Rendering.Scene.SceneEventModel";
  global.VEL.Skynet.View.Rendering.Scene.SceneEventModel = jB;
  var jD = function (a, b) {
    this.$f = null;
    this.$e = null;
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
    this.$1$4 = false;
    this.$e = a;
    this.$f = new hO(this.$e);
    this.$b(b || []);
    this.$d(VEL.Skynet.Core.Toolbox.Geometry.Size.get_empty());
    this.set_visibility(true);
  };
  jD.__typeName = "VEL.Skynet.View.Rendering.Scene.Layers.$0";
  var jF = function (a, b) {
    this.$1D = null;
    this.$1y = null;
    this.$1p = null;
    this.$1B = null;
    this.$1A = false;
    this.$1u = 0;
    this.$1v = null;
    this.$1t = 0;
    this.$1s = 0;
    this.$1C = null;
    this.$1q = null;
    this.$1r = null;
    this.$1z = null;
    this.$1w = 0;
    this.$1x = 0;
    this.$2$1 = null;
    this.$2$2 = null;
    this.$2$3 = 0;
    this.$2$4 = 0;
    this.$2$5 = 0;
    this.$2$6 = null;
    this.$2$7 = null;
    this.$2$8 = null;
    jD.call(this, b, null);
    this.$1D = a;
  };
  jF.__typeName = "VEL.Skynet.View.Rendering.Scene.Layers.$1";
  var jH = function (a, b, c) {
    this.$l = null;
    this.$2$1 = null;
    this.$2$2 = 0;
    this.$2$3 = 0;
    this.$2$4 = 0;
    jD.call(this, a, c);
    this.set_translateZ(b);
    this.$l = new hT();
  };
  jH.__typeName = "VEL.Skynet.View.Rendering.Scene.Layers.$2";
  var jJ = function (a, d, f, b, c) {
    this.$m = null;
    this.$n = false;
    jH.call(this, a, d, c);
    this.$n = f;
    this.$m = b;
  };
  jJ.__typeName = "VEL.Skynet.View.Rendering.Scene.Layers.$3";
  var jL = function (a) {
    jH.call(this, a, 1, null);
  };
  jL.__typeName = "VEL.Skynet.View.Rendering.Scene.Layers.$4";
  var jN = function (a, b) {
    jD.call(this, a, null);
    a.style.backgroundColor = b.toString();
  };
  jN.__typeName = "VEL.Skynet.View.Rendering.Scene.Layers.$5";
  var jP = function (a, c, d, b) {
    this.$s = null;
    this.$t = null;
    this.$r = null;
    this.$q = null;
    this.$3$1 = null;
    jH.call(this, a, 1, null);
    this.$s = b;
    this.$r = c;
    this.$0(c);
    if (ss.isValue(d)) {
      this.$q = d;
      this.$0(d);
    }
  };
  jP.__typeName = "VEL.Skynet.View.Rendering.Scene.Layers.$6";
  var jR = function () {};
  jR.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.$0";
  var jT = function () {};
  jT.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.$1";
  jT.$3 = function () {
    jT.$7 = jT.$7 === 2 || jT.$7 === 3 ? 3 : 1;
  };
  jT.$2 = function () {
    jT.$7 = jT.$7 === 1 || jT.$7 === 3 ? 3 : 2;
  };
  jT.$1 = function () {
    jT.$7 = 3;
  };
  jT.$0 = function (a) {
    var b = a.$c();
    if (ss.isNullOrUndefined(b)) {
      return;
    }
    if (b.get_bottom() <= ja.$b()) {
      jT.$3();
      return;
    }
    if (b.get_top() >= hK.$6().height - ja.$7()) {
      jT.$2();
      return;
    }
    jT.$1();
  };
  jT.$4 = function () {
    jT.$7 = 0;
  };
  jT.$5 = function () {
    return jT.$7;
  };
  var jV = function (a, b) {
    this.$5 = 0;
    this.$4 = 0;
    this.$5 = a;
    this.$4 = b;
  };
  jV.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.$2";
  var jX = function () {};
  jX.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.$3";
  var ja = function () {};
  ja.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.$4";
  ja.$9 = function () {
    return 1 + (hK.$6().width - 1280) * 0.00025;
  };
  ja.$a = function () {
    return 35 * ja.$9();
  };
  ja.$3 = function () {
    return 40 * ja.$9();
  };
  ja.$2 = function () {
    return 10 * ja.$9();
  };
  ja.$8 = function () {
    return 80 * ja.$9();
  };
  ja.$1 = function () {
    return 32 * ja.$9();
  };
  ja.$0 = function () {
    return 24 * ja.$9();
  };
  ja.$6 = function () {
    return (ja.$3() + ja.$2() * 2) * 2;
  };
  ja.$4 = function () {
    return (ja.$3() + ja.$2() * 2) * 2;
  };
  ja.$5 = function () {
    return (ja.$3() + ja.$2() * 2) * 1;
  };
  ja.$b = function () {
    return ss.Int32.trunc(Math.ceil(ja.$a() + 10));
  };
  ja.$7 = function () {
    return ss.Int32.trunc(Math.ceil(ja.$8() + 10));
  };
  var jc = function (a, d, f, b, c) {
    this.$E = null;
    this.$B = null;
    this.$G = false;
    this.$H = 0;
    this.$F = null;
    this.$C = null;
    this.$D = 0;
    this.$A = null;
    this.$1$1 = 0;
    this.$1$2 = 0;
    this.$B = a;
    this.$G = f;
    this.$A = b;
    this.$E = c;
    this.$H = d;
    this.$y(1);
    this.$F = h1.fromCanvasFont(
      '{0}px RedditSansMedium, "Reddit Sans", Rubik, Arial, sans-serif',
      null
    );
  };
  jc.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.$5";
  var je = function (a, b, c) {
    this.$v = null;
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
    this.$1$4 = false;
    this.$1$5 = false;
    this.$1$6 = false;
    this.$1$7 = false;
    this.$1$8 = false;
    this.$v = a;
    this.$f(b);
    this.$h(c);
  };
  je.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$0";
  var jg = function (a, b, c) {
    this.$C = null;
    this.$E = false;
    this.$D = 0;
    this.$F = null;
    this.$G = 0;
    je.call(this, c, true, true);
    this.$G = a;
    this.$C = b || jV.$9;
  };
  jg.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$1";
  var ji = function (a, b) {
    this.$y = null;
    this.$z = 0;
    this.$2$1 = false;
    je.call(this, b, true, true);
    this.$y = a === 2 ? e2.$7 : e2.$0;
    switch (a) {
      case 0:
        this.$z = 0.9;
        this.$x(true);
        break;
      case 1:
        this.$z = 0.6;
        break;
      case 2:
        this.$z = 0.4;
        break;
      case 3:
        this.$z = 0;
        break;
    }
  };
  ji.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$10";
  var jk = function () {};
  jk.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$11";
  var jm = function () {
    je.call(this, null, true, true);
  };
  jm.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$12";
  var jo = function () {
    this.$w = 0;
    je.call(this, null, true, true);
  };
  jo.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$13";
  var jq = function (a) {
    this.$y = false;
    this.$x = null;
    je.call(this, null, true, true);
    this.$y = a;
    this.$r(new VEL.Skynet.Core.Toolbox.Geometry.Margin(2));
  };
  jq.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$2";
  var js = function () {
    this.$x = false;
    this.$y = null;
    je.call(this, null, true, true);
  };
  js.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$3";
  var ju = function (a, g, h, b, c, d, f) {
    ju.$0.call(
      this,
      new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(a, 1),
      g,
      h,
      b,
      c,
      d,
      f
    );
  };
  ju.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$4";
  ju.$0 = function (a, g, h, b, c, d, f) {
    this.$I = null;
    this.$H = false;
    this.$E = false;
    this.$D = null;
    this.$G = 0;
    this.$J = 0;
    this.$F = 0;
    this.$2$1 = false;
    je.call(this, f, true, true);
    this.$I = a;
    this.$r(d);
    this.$D = h;
    this.$G = b;
    this.$J = c;
    this.$F = g;
    this.$y(false);
  };
  var jw = function (a, b) {
    ju.call(this, "", a, b, 1, 1, null, null);
  };
  jw.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$5";
  var jy = function () {
    jw.call(this, 30, jV.$9);
  };
  jy.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$6";
  var jA = function (a) {
    jw.call(this, a, jV.$9);
  };
  jA.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$7";
  var jC = function () {
    this.$E = null;
    j7.call(this, null, true);
  };
  jC.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$8";
  var jE = function (a) {
    this.$w = null;
    je.call(this, null, true, true);
    this.$w = a;
  };
  jE.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.$9";
  var jG = function (a, b, c) {
    this.$B = 0;
    this.$A = null;
    this.$2$1 = false;
    je.call(
      this,
      function () {
        if (!ss.staticEquals(b, null)) {
          b(a);
        }
      },
      false,
      true
    );
    this.$B = a;
    this.$A = c;
  };
  jG.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Buttons.$0";
  var jI = function (a, b) {
    this.$G = null;
    this.$H = null;
    this.$I = null;
    j7.call(this, null, true);
    this.$G = [];
    this.$H = a;
    this.$I = b;
  };
  jI.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Buttons.$1";
  var jK = function (a, b) {
    this.$3$1 = false;
    jg.call(this, a, null, b);
  };
  jK.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Buttons.$2";
  var jM = function (a, b) {
    this.$x = null;
    this.$w = null;
    je.call(
      this,
      function () {
        b(a);
      },
      true,
      true
    );
    this.$w = a;
    this.$x = VEL.Skynet.Global.Extensions.StringExtensions.toPascal(
      a.get_name()
    );
  };
  jM.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Buttons.$3";
  var jO = function (a, b, c) {
    this.$A = 0;
    this.$z = null;
    jM.call(this, b, c);
    this.$A = a;
    this.$z =
      " " +
      VEL.Skynet.Core.Toolbox.Extensions.StringExtensions.toCapitalizeWords(
        b.get_name(),
        ServerModel.languageId
      ) +
      " ";
    this.$r(new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(4, 0));
  };
  jO.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Buttons.$4";
  var jQ = function (a, b, c) {
    this.$z = 0;
    this.$A = VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty();
    jM.call(this, a, c);
    this.$z = b;
  };
  jQ.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Buttons.$5";
  var jS = function (a) {
    this.$E = null;
    this.$D = null;
    j7.call(this, a, true);
    this.$w(
      (this.$E = new ju(
        Strings.overlay_PlayButton.toUpperCase(),
        40,
        jV.$m,
        1,
        1,
        null,
        null
      ))
    );
    this.$w((this.$D = new jU()));
  };
  jS.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Buttons.$6";
  var jU = function () {
    je.call(this, null, true, true);
  };
  jU.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Buttons.$7";
  var jW = function () {
    this.$3$1 = 0;
    j7.call(this, null, true);
  };
  jW.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Keyboard.$0";
  var jY = function (a, b, c) {
    this.$J = null;
    this.$I = null;
    this.$D = 0;
    this.$E = 0;
    this.$G = null;
    this.$H = null;
    this.$F = false;
    this.$2$1 = false;
    this.$2$2 = 0;
    je.call(this, null, true, true);
    this.$J = a;
    this.$I = b;
    this.$H = a.toString();
    this.$z(a === " " ? 2 : 1);
    this.$v = ss.mkdel(this, function () {
      c(this.$F ? this.$I : this.$J);
    });
  };
  jY.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Keyboard.$1";
  jY.$8 = function (a, b, c) {
    this.$J = null;
    this.$I = null;
    this.$D = 0;
    this.$E = 0;
    this.$G = null;
    this.$H = null;
    this.$F = false;
    this.$2$1 = false;
    this.$2$2 = 0;
    je.call(this, c, true, false);
    this.$E = a;
    this.$G = b;
    this.$z(1);
  };
  jY.$7 = function (a, b, c) {
    this.$J = null;
    this.$I = null;
    this.$D = 0;
    this.$E = 0;
    this.$G = null;
    this.$H = null;
    this.$F = false;
    this.$2$1 = false;
    this.$2$2 = 0;
    je.call(
      this,
      function () {
        c(a);
      },
      true,
      false
    );
    this.$D = a;
    this.$G = b;
    this.$z(a === 10 || a === 11 ? 2 : 1);
  };
  var j1 = function (a, h, i, b, c, d, f, g) {
    this.$S = false;
    this.$P = false;
    this.$Y = null;
    this.$Q = false;
    this.$X = null;
    this.$R = false;
    this.$W = null;
    this.$V = null;
    this.$T = null;
    this.$Z = null;
    this.$O = null;
    this.$U = 0;
    this.$10 = null;
    j7.call(this, null, true);
    this.$Q = hK.$4() === true;
    this.$R = i;
    this.$P = true;
    this.$W = b;
    this.$V = c;
    this.$T = VEL.Skynet.Core.Toolbox.Keyboard.KeyboardHelper.getKeyboard(f);
    this.$Z = [];
    this.$S = this.$R;
    this.$X = null;
    this.$O = new jK(5, ss.mkdel(this, this.$H));
    if (this.$R) {
      this.$Q = true;
      h = 2;
    }
    this.$K(a);
    this.$N(h);
    this.$r(d);
    this.$10 = g;
    this.$L();
  };
  j1.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Keyboard.$2";
  var j3 = function () {};
  j3.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Keyboard.$3";
  var j5 = function () {};
  j5.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Keyboard.$4";
  var j7 = function (a, b) {
    this.$C = null;
    je.call(this, a, b, true);
    this.$C = [];
  };
  j7.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Menus.$0";
  var j9 = function (a, m, n, b, c, d, f) {
    this.$L = 0;
    this.$H = 0;
    this.$I = 0;
    this.$K = 0;
    this.$3$1 = null;
    this.$G = null;
    this.$J = jV.$c;
    j7.call(this, null, true);
    this.$L = a;
    this.$H = m;
    var g = 0;
    if (this.$H === 1) {
      g = 1;
    } else {
      if (hK.$1()) {
        g = 2;
      }
    }
    this.$w((this.$G = new kb()));
    var h = h1.fromCanvasFont(
      '{0}px RedditSansMedium, "Reddit Sans", Rubik, Arial, sans-serif',
      null
    );
    this.$K = 0;
    if (ss.isValue(n)) {
      this.$w(new ju(n.toUpperCase(), 16, this.$J, g, 1, null, null));
      this.$w(new kd(false));
      this.$K += 40.4;
    }
    if (ss.isValue(d) && Enumerable.from(d).any()) {
      for (var i = 0; i < d.length; i++) {
        var j = d[i];
        this.$w(new jE(j));
      }
      this.$K += 80;
    }
    if (ss.isValue(b)) {
      this.$w(new ju.$0(b.toUpper(), 13, this.$J, g, 1, null, null));
      this.$K += 24.7;
    }
    if (ss.isValue(b) || (ss.isValue(d) && Enumerable.from(d).any())) {
      this.$w(new kd(false));
      this.$K += 10;
    }
    if (
      Enumerable.from(c).any(function (o) {
        return ss.isValue(o);
      })
    ) {
      this.$I = Math.max(
        200,
        Enumerable.from(c)
          .where(function (o) {
            return ss.isValue(o);
          })
          .max(function (o) {
            return h.measureWidth(o.get_name(), 24, 1);
          })
      );
      for (var k = 0; k < c.length; k++) {
        var l = c[k];
        if (ss.isNullOrUndefined(l)) {
          this.$w(new kd(true));
          this.$K += 10;
        } else {
          this.$w(new jQ(l, g, f));
          this.$K += 45.6;
        }
      }
    } else {
      this.$I = 200;
    }
    this.$I += this.$D().get_left() + this.$D().get_right();
    this.$K += this.$D().get_top() + this.$D().get_bottom();
    this.$F(
      new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(this.$I, this.$K)
    );
  };
  j9.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Menus.$1";
  var kb = function () {
    je.call(this, null, true, true);
  };
  kb.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Menus.$2";
  var kd = function (a) {
    this.$w = false;
    je.call(this, null, true, true);
    this.$w = a;
  };
  kd.__typeName = "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Menus.$3";
  var kf = function (a) {
    this.$H = jQ.$4;
    this.$G = jQ.$4.$0(3);
    this.$I = null;
    this.$L = null;
    this.$N = null;
    this.$K = null;
    this.$M = null;
    this.$J = null;
    j7.call(this, null, true);
    this.$J = a;
    var f = new VEL.Skynet.Core.View.Menu.MenuCommand();
    f.set_name(
      id.hasMusic() ? Strings.menu_Music : Strings.menu_NoMusicAvailable
    );
    f.set_isEnabled(id.hasMusic());
    var g = f;
    var b = new VEL.Skynet.Core.View.Menu.MenuCommand();
    b.set_name(Strings.menu_SoundEffects);
    b.set_isEnabled(true);
    var c = b;
    var d = hK.$1() ? 2 : 0;
    this.$w((this.$I = new kb()));
    this.$w(
      (this.$L = new jQ(
        g,
        d,
        ss.mkdel(this, function (h) {
          this.$D();
        })
      ))
    );
    this.$w(
      (this.$N = new jQ(
        c,
        d,
        ss.mkdel(this, function (h) {
          this.$E();
        })
      ))
    );
    this.$w((this.$K = new jg(8, this.$H, null)));
    this.$w((this.$M = new jg(8, this.$H, null)));
    this.$F();
  };
  kf.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens.$0";
  var kh = function (a, d, f) {
    this.$K = null;
    this.$J = null;
    this.$L = null;
    this.$O = null;
    this.$M = null;
    this.$N = null;
    j7.call(this, null, true);
    this.$K = a;
    if (!ss.staticEquals(f, null) || d !== 3) {
      this.$w((this.$O = new ji(d, f)));
    }
    var b = a.getFullscreenIconState();
    if (b !== 0) {
      var c = b === 2 ? 4 : 3;
      this.$w(
        (this.$J = new jK(c, ss.mkdel(this.$K, this.$K.onFullscreenIconClick)))
      );
    }
    this.$w(
      (this.$L = new jK(
        6,
        ss.mkdel(this, function () {
          this.$F(false);
        })
      ))
    );
    this.$M = new kf(a);
    this.$N = new ji(
      3,
      ss.mkdel(this, function () {
        this.$F(true);
      })
    );
    this.$r(new VEL.Skynet.Core.Toolbox.Geometry.Margin(10));
  };
  kh.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens.$1";
  var kj = function (a, b) {
    this.$P = null;
    kh.call(this, a, 1, b);
    this.$w((this.$P = new jm()));
  };
  kj.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens.$2";
  var kl = function (a) {
    this.$P = null;
    kh.call(this, a, 1, null);
    this.$w((this.$P = new jo()));
  };
  kl.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens.$3";
  var kn = function (a, d, f, b, c) {
    this.$V = null;
    this.$T = null;
    this.$S = null;
    this.$U = null;
    this.$R = null;
    this.$Q = null;
    kh.call(this, b, 1, c);
    this.$r(new VEL.Skynet.Core.Toolbox.Geometry.Margin(20));
    this.$w((this.$Q = new kb()));
    this.$w((this.$V = new ju(a.toUpperCase(), 18, jV.$g, 1, 1, null, null)));
    this.$w((this.$T = new kd(false)));
    this.$w((this.$S = new ju.$0(d, 24, jV.$j, 1, 1, null, null)));
    this.$w((this.$U = new js()));
    this.$w(
      (this.$R = new j1(
        0,
        2,
        true,
        ss.mkdel(f, f.onKeyboardText),
        ss.mkdel(f, f.onKeyboardControlDown),
        new VEL.Skynet.Core.Toolbox.Geometry.Margin(10),
        null,
        null
      ))
    );
  };
  kn.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens.$4";
  var kp = function (a, d, f, b, c) {
    this.$Y = null;
    this.$V = null;
    this.$W = null;
    this.$X = null;
    kh.call(this, c, 0, b);
    this.$w((this.$X = new jS(b)));
    this.$w((this.$Y = new ju(d, 30, jV.$m, 1, 2, null, null)));
    this.$w((this.$V = new ju(f, 24, jV.$j, 1, 1, null, null)));
    this.$w((this.$W = new ju(a, 60, jV.$m, 1, 1, null, null)));
  };
  kp.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens.$5";
  var kr = function (a, f, g, b, c, d) {
    this.$P = null;
    kh.call(this, c, 1, d);
    this.$w(
      (this.$P = new j9(1, 1, a, f, g, b, ss.mkdel(c, c.onMenuCommandClick)))
    );
  };
  kr.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens.$6";
  var kt = function (a, d, f, b, c) {
    this.$10 = null;
    this.$Y = null;
    this.$X = null;
    this.$Z = null;
    this.$12 = null;
    this.$11 = null;
    kh.call(this, b, 1, c);
    this.$12 = a;
    this.$10 = d;
    if (ss.isValue(this.$10) && !this.$10.get_isEmpty()) {
      this.$w((this.$Z = new ju.$0(this.$10, 60, jV.$0, 1, 1, null, null)));
      this.$w((this.$X = new ju.$0(this.$10, 60, jV.$m, 1, 1, null, null)));
      this.$w(
        (this.$Y = new ju(
          Strings.enterContent_Instruction_Title,
          26,
          jV.$j,
          1,
          1,
          new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor4(20, 20, 20, 25),
          null
        ))
      );
    }
    this.$w(
      (this.$11 = new j9(
        2,
        0,
        this.$12,
        null,
        f,
        null,
        ss.mkdel(b, b.onMenuCommandClick)
      ))
    );
  };
  kt.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens.$7";
  var kv = function (a, d, f, b, c) {
    this.$1m = null;
    this.$1q = null;
    this.$1n = null;
    this.$1y = null;
    this.$1v = null;
    this.$1p = null;
    this.$1w = null;
    this.$1l = null;
    this.$1A = null;
    this.$1u = null;
    this.$1x = null;
    this.$1B = null;
    this.$1C = null;
    this.$1r = null;
    this.$1j = null;
    this.$1t = null;
    this.$1o = null;
    this.$1D = 0;
    this.$1s = 0;
    this.$1k = 0;
    this.$1z = null;
    kh.call(this, c, 3, null);
    this.$1m = a;
    this.$z((this.$1n = new kF(d)));
    this.$w((this.$1v = new kD()));
    this.$w((this.$1y = new kJ(b)));
    this.$w((this.$1q = new jK(0, f)));
    this.$w((this.$1p = new kH()));
    this.$w((this.$1w = new jy()));
    this.$w((this.$1l = new jC()));
    this.$w((this.$1A = new kL(null, true)));
    this.$w((this.$1u = new kP(a)));
    this.$w((this.$1x = new jq(d)));
    this.$w((this.$1B = new kN()));
    this.$w((this.$1C = new kB()));
    this.$w((this.$1r = new kB()));
    this.$w((this.$1j = new kB()));
    this.$w(
      (this.$1t = new jI(
        ss.mkdel(a, a.onMovementButtonDown),
        ss.mkdel(a, a.onMovementButtonUp)
      ))
    );
  };
  kv.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens.$8";
  var kx = function (a, c, d) {
    this.$P = null;
    this.$Q = null;
    kh.call(this, c, 1, d);
    this.$Q = new VEL.Skynet.Core.View.Menu.MenuDisplay.$ctor1(
      null,
      VEL.Skynet.Core.DataStructures.WordwallXml.get_empty(),
      null
    );
    var b = [];
    b.push(this.$Q);
    this.$w(
      (this.$P = new j9(
        0,
        0,
        null,
        null,
        a,
        b,
        ss.mkdel(c, c.onMenuCommandClick)
      ))
    );
  };
  kx.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens.$9";
  var kz = function () {};
  kz.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens.IScreenOverlayHelper";
  global.VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Screens.IScreenOverlayHelper =
    kz;
  var kB = function () {
    this.$y = null;
    this.$x = null;
    je.call(this, null, true, true);
  };
  kB.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Toolbar.$0";
  var kD = function () {
    this.$A = null;
    this.$z = new jV(6, 0.7);
    this.$y = new jV(6, 0.2);
    je.call(this, null, true, true);
    this.$r(new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(0, 5));
  };
  kD.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Toolbar.$1";
  var kF = function (a) {
    this.$w = false;
    je.call(this, null, true, true);
    this.$w = a;
  };
  kF.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Toolbar.$2";
  var kH = function () {
    this.$M = 0;
    ju.call(this, "", 30, jV.$9, 1, 1, null, null);
  };
  kH.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Toolbar.$3";
  var kJ = function (a) {
    this.$L = null;
    ju.call(this, "", 30, jV.$9, 0, 1, null, a);
  };
  kJ.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Toolbar.$4";
  var kL = function (a, b) {
    this.$K = false;
    this.$M = 0;
    this.$J = null;
    this.$L = null;
    this.$3$1 = null;
    j7.call(this, a, b);
    this.$K = false;
    this.$r(new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(4, 0));
  };
  kL.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Toolbar.$5";
  var kN = function () {
    this.$O = null;
    this.$P = 0;
    this.$N = 0;
    this.$M = 0;
    this.$Q = null;
    ju.$0.call(this, null, 30, jV.$9, 1, 1, null, null);
  };
  kN.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Toolbar.$6";
  var kP = function (a) {
    this.$J = null;
    this.$K = null;
    this.$I = null;
    this.$L = null;
    this.$3$1 = false;
    j7.call(this, null, true);
    this.$J = a;
  };
  kP.__typeName =
    "VEL.Skynet.View.Rendering.Scene.Overlay.Overlays.Toolbar.$7";
  var j2 = function (a, b) {
    this.$a = null;
    this.$9 = null;
    this.$7 = null;
    this.$8 = VEL.Skynet.Core.Toolbox.Geometry.Point.empty;
    this.$a = a;
    this.$9 = b;
  };
  j2.__typeName = "VEL.Skynet.View.Rendering.Scene.Panels.$0";
  var j4 = function (a, b, c) {
    this.$O = null;
    this.$Q = null;
    this.$K = VEL.Skynet.Core.Toolbox.Geometry.Point.empty;
    this.$L = new iO(2);
    this.$R = null;
    this.$G = null;
    this.$N = null;
    this.$F = 0;
    this.$P = null;
    this.$M = null;
    this.$E = null;
    this.$J = 0;
    this.$I = false;
    this.$H = false;
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
    this.$1$4 = null;
    this.$1$5 = null;
    this.$1$6 = null;
    this.$O = a;
    this.$E = c;
    this.$R = b;
    this.$z([]);
    this.$D(new hT());
    this.$w([]);
    this.$s(VEL.Skynet.Core.Toolbox.Geometry.Rect.get_empty());
    this.$u(new VEL.Skynet.Core.Toolbox.Geometry.Size(4, 3));
  };
  j4.__typeName = "VEL.Skynet.View.Rendering.Scene.Panels.$1";
  var j6 = function (a, i, j, b, c, d, f) {
    this.$T = 0;
    this.$S = null;
    this.$U = 0;
    this.$V = false;
    this.$R = 0;
    this.$L = null;
    this.$N = null;
    this.$O = null;
    this.$M = null;
    this.$P = null;
    this.$Q = null;
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = false;
    this.$1$4 = null;
    this.$1$5 = null;
    this.$K(a);
    this.$A(VEL.Skynet.Core.Toolbox.Geometry.Rect.get_empty());
    this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.empty;
    this.$I(i);
    this.$P = new hT();
    this.$R = j;
    this.$V = b;
    this.$U = c;
    this.$L = new ip();
    this.$S = new (ss.makeGenericType(ss.Dictionary$2, [kg, g3]))();
    this.$E(true);
    this.$N = d || [];
    for (var g = 0; g < this.$N.length; g++) {
      var h = this.$N[g];
      h.$H(this);
    }
    if (ss.isValue(f)) {
      f.$0(this).$4(null);
    }
  };
  j6.__typeName = "VEL.Skynet.View.Rendering.Visuals.$0";
  var j8 = function (a, g, h, b, c, d, f) {
    j6.call(this, a, g, h, b, c, d, f);
  };
  j8.__typeName = "VEL.Skynet.View.Rendering.Visuals.$1";
  var ka = function (
    a,
    v,
    w,
    b,
    c,
    d,
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
    t
  ) {
    this.$18 = false;
    this.$1e = null;
    this.$19 = false;
    this.$1a = null;
    this.$17 = false;
    this.$1b = 0;
    this.$1g = 0;
    this.$1i = false;
    this.$1c = false;
    this.$1h = false;
    this.$1n = false;
    this.$1k = false;
    this.$1m = false;
    this.$1l = false;
    this.$1d = 0;
    this.$1j = 0;
    this.$1f = null;
    j8.call(this, null, w, j, k, i, null, s);
    this.$18 = w.get_isPositive();
    this.$1i = l;
    this.$1c = m;
    this.$1h = n;
    this.$1n = o;
    this.$1k = p;
    this.$1m = q;
    this.$1l = r;
    this.$1j = h;
    this.$1g = g;
    var u = ss.isValue(b) && !b.get_isEmpty();
    if ((this.$18 && u) || (c !== 0 && u)) {
      throw new a4("specify Margin OR Width/Height/Origin");
    }
    this.$1d = c;
    this.$1a = b;
    this.$1f = v;
    this.$P.$1 = d;
    this.$19 = d;
    this.$P.$2 = f;
    this.$1e = a;
    this.$17 = t;
    this.$1b = hK.$a * a.$7();
    this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
      this.$1f,
      b.get_topLeft()
    );
  };
  ka.__typeName = "VEL.Skynet.View.Rendering.Visuals.$2";
  var kc = function () {};
  kc.__typeName = "VEL.Skynet.View.Rendering.Visuals.OriginEnum";
  global.VEL.Skynet.View.Rendering.Visuals.OriginEnum = kc;
  var ke = function () {};
  ke.__typeName = "VEL.Skynet.View.Rendering.Visuals.StretchEnum";
  global.VEL.Skynet.View.Rendering.Visuals.StretchEnum = ke;
  var kg = function () {};
  kg.__typeName = "VEL.Skynet.View.Rendering.Visuals.VisualAnimationsEnum";
  global.VEL.Skynet.View.Rendering.Visuals.VisualAnimationsEnum = kg;
  var ki = function (a, j, k, b, c, d, f, g, h, i) {
    this.$1f = null;
    this.$1g = 0;
    this.$1j = null;
    this.$1i = 0;
    this.$1h = 0;
    this.$2$1 = 0;
    this.$2$2 = null;
    this.$2$3 = false;
    this.$2$4 = false;
    this.$2$5 = false;
    this.$2$6 = false;
    this.$2$7 = 0;
    this.$2$8 = 0;
    j6.call(
      this,
      j,
      f || VEL.Skynet.Core.Toolbox.Geometry.Size.get_empty(),
      d,
      false,
      b,
      c,
      i
    );
    if (ss.isValue(a.rotation)) {
      this.$P.$4 = VEL.Skynet.Core.Toolbox.Geometry.EulerAngles.fromAngle(
        a.rotation
      );
    }
    this.$10(a);
    this.$15(a.isEliminated);
    this.$13(a.isDisabled);
    this.set_isVisible(false);
    this.$1f = h;
    this.$1g = g;
    this.set_appearTrigger(ki.$0(a, k));
  };
  ki.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.$0";
  ki.$0 = function (a, b) {
    return a.get_programmaticAppear() ? 3 : b;
  };
  var kk = function (a, g, h, b, c, d) {
    this.$1p = VEL.Skynet.Core.Toolbox.Geometry.Size.get_empty();
    this.$1m = 0;
    this.$1l = 0;
    this.$1n = 0;
    this.$1q = 0;
    this.$1o = null;
    ki.call(this, a, g, h, c, null, b, null, 0, null, d);
    this.$1m = a.get_image().get_aspectRatio();
    this.$1l = 1;
    this.$1o = g;
    this.$1n = -1;
    this.$1q = a.reveal;
    var f = ss.cast(
      a.targeter,
      VEL.Skynet.Core.View.Layouts.Targeters.MosaicTargeter
    );
    if (ss.isValue(f)) {
      this.setSize(ss.unbox(f.actualWidth), ss.unbox(f.actualHeight));
    }
  };
  kk.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.$1";
  var km = function (a, h, i, b, c, d, f) {
    ki.call(this, a, h, b, 1, c, d, i, 0, null, f);
    var g = ss.cast(
      a.targeter,
      VEL.Skynet.Core.View.Layouts.Targeters.SpriteTargeter
    );
    if (ss.isValue(g)) {
      this.setSize(g.get_innerWidth(), g.get_innerHeight());
      this.setTarget(g.get_innerX(), g.get_innerY());
    }
    this.$1k();
  };
  km.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.$2";
  var ko = function (a, g, h, b, c, d) {
    this.$3$1 = 0;
    ki.call(this, a, null, h, c, g, b, null, 0, null, d);
    var f = ss.cast(
      a.targeter,
      VEL.Skynet.Core.View.Layouts.Targeters.ConveyorTargeter
    );
    if (ss.isValue(f)) {
      this.setSize(ss.unbox(f.actualWidth), ss.unbox(f.actualHeight));
    }
  };
  ko.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.$3";
  var kq = function (a, i, j, b, c, d, f, g) {
    this.$1n = VEL.Skynet.Core.Toolbox.Geometry.Size.get_empty();
    this.$1m = 0;
    this.$1l = 0;
    this.$3$1 = null;
    ki.call(this, a, i, b, d, f, c, null, 0, null, g);
    this.$1m = a.get_image().get_aspectRatio();
    this.$1l = 1;
    var h = ss.cast(
      a.targeter,
      VEL.Skynet.Core.View.Layouts.Targeters.ImageTargeter
    );
    if (ss.isValue(h)) {
      this.setAlignment(h.get_horizontalAlign());
      this.$1k(VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty());
      this.setSize(ss.unbox(h.actualWidth), ss.unbox(h.actualHeight));
    } else {
      this.$1k(j || VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty());
    }
  };
  kq.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.$4";
  var ks = function (a, h, i, b, c, d, f) {
    this.$1o = null;
    this.$1p = null;
    this.$1r = null;
    this.$1q = null;
    this.$1m = 0;
    this.$1n = null;
    this.$1s = null;
    this.$3$1 = 0;
    ki.call(this, a, h, i, c, d, b, null, 0, null, f);
    this.$1o = h;
    this.$1r = a.get_text();
    this.$1q = a.paletteIndex;
    this.$E(true);
    this.$1p = VEL.Skynet.Core.Toolbox.Geometry.Size.get_empty();
    this.$1n = VEL.Skynet.Core.Toolbox.Geometry.Size.get_empty();
    var g = ss.cast(
      a.targeter,
      VEL.Skynet.Core.View.Layouts.Targeters.LabelTargeter
    );
    if (ss.isValue(g)) {
      this.setSize(ss.unbox(g.actualWidth), ss.unbox(g.actualHeight));
    }
  };
  ks.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.$5";
  var ku = function (a, m, n, b, c, d, f, g, h, i, j, k) {
    this.$1m = null;
    this.$1l = false;
    this.$3$1 = null;
    ki.call(this, a, m, c, d, f, g, null, i, j, k);
    this.set_padding(
      n || VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty()
    );
    this.$1m = b || VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty();
    this.$1l = h;
    var l = ss.cast(
      a.targeter,
      VEL.Skynet.Core.View.Layouts.Targeters.PlaceTargeter
    );
    if (ss.isValue(l)) {
      this.$w(
        new VEL.Skynet.Core.Toolbox.Geometry.Size(
          ss.unbox(l.actualWidth),
          ss.unbox(l.actualHeight)
        )
      );
      this.set_padding(l.get_padding());
    }
  };
  ku.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.$6";
  var kw = function () {};
  kw.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.CollisionShape";
  global.VEL.Skynet.View.Rendering.Visuals.Controls.CollisionShape = kw;
  var ky = function (a, i, j, b, c, d, f, g, h) {
    this.$1K = null;
    this.$1I = null;
    this.$1L = null;
    this.$1J = 0;
    this.$3$2 = 0;
    this.$3$3 = 0;
    this.$3$4 = 0;
    this.$3$5 = null;
    this.$3$6 = null;
    this.$3$7 = null;
    this.$3$8 = false;
    this.$3$9 = 0;
    this.$1M = false;
    ki.call(this, a, null, i, c, g, 0, null, d, f, h);
    this.$1K = j;
    this.$1I = b;
    this.$1v(ss.isNullOrUndefined(this.$1I) ? 0 : this.$1E().faceShown);
    this.$1L = new lf(this.$1E());
    this.$1B(ss.coalesce(this.$1E().paletteIndex, 0));
    this.$1p();
    if (a.get_isSizeDynamic()) {
      this.$1n();
    } else {
      this.$1m();
    }
    this.$1D(this.$1E().shape);
    if (ss.isValue(this.$1E().targeter)) {
      if (
        ss.isInstanceOfType(
          this.$1E().targeter,
          VEL.Skynet.Core.View.Layouts.Targeters.TileTargeter
        )
      ) {
        this.$1k();
      } else {
        throw new a4(
          "Targeter must be a " +
            ss.getTypeName(
              VEL.Skynet.Core.View.Layouts.Targeters.TileTargeter
            ) +
            " but it was a " +
            ss.getTypeName(ss.getInstanceType(this.$1E().targeter)) +
            ". Tile: " +
            this.$1E()
        );
      }
    }
  };
  ky.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.$0";
  ky.$1 = function (a, b) {
    var c = b.get_tileMeasurement().fontSize;
    if (ss.isNullOrUndefined(c)) {
      c = Number.MAX_VALUE;
    }
    a.$16(c);
  };
  ky.$0 = function (a, b) {
    switch (a.$1b) {
      case 2:
        a.$16(Number.MAX_VALUE);
        break;
      default:
        var c = b.get_tileMeasurement().fontSize;
        if (ss.isNullOrUndefined(c)) {
          c = Number.MAX_VALUE;
        }
        a.$16(c);
        break;
    }
  };
  ky.$2 = function () {
    return ky.$3$1;
  };
  ky.$3 = function (a) {
    ky.$3$1 = a;
  };
  var kA = function (a, g, h, b, c, d, f) {
    this.$1P = null;
    this.$1O = null;
    ky.call(this, a, g, h, b, c, 1, null, d, f);
    this.$1O = h;
    this.$1N();
    this.set_appearTrigger(0);
  };
  kA.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.$1";
  var kC = function (a, j, k, b, c, d, f, g, h, i) {
    this.$1c = null;
    this.$1d = null;
    this.$19 = null;
    this.$1a = 0;
    this.$1b = 0;
    this.$18 = 0;
    this.$3$1 = 0;
    j8.call(
      this,
      j,
      VEL.Skynet.Core.Toolbox.Geometry.Size.get_empty(),
      h,
      false,
      f,
      c,
      i
    );
    this.$1d = d || VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty();
    this.$19 = a;
    this.$1a = k;
    this.$18 = g;
    this.$1b = b;
    this.$1c = new ip();
  };
  kC.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Faces.$0";
  var kE = function (a, i, j, b, c, d, f, g, h) {
    this.$1i = null;
    this.$1h = null;
    this.$1j = null;
    kC.call(this, a, i, j, b, c, null, d, f, g, h);
    this.$1h = a;
    this.$1i = i;
    this.$w(this.$1f());
  };
  kE.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Faces.$1";
  var kG = function (a, k, l, b, c, d, f, g, h, i, j) {
    this.$1h = null;
    this.$1g = false;
    kC.call(this, a, k, l, b, d, f, g, h, i, j);
    this.$1h = k;
    this.$1g = c;
    if (a.shape === 13 || this.$19.get_isSizeDynamic()) {
      this.$1h.$2(this.$1e(a));
    }
    this.$w(this.$1h.$6());
    this.$O = this.$1h.$3().get_topLeft();
  };
  kG.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Faces.$2";
  var kI = function () {};
  kI.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.$0";
  var kK = function (a) {
    var b = function (c) {
      this.$2$1 = null;
      kI.call(this);
      this.$2(c);
    };
    ss.registerGenericClassInstance(
      b,
      kK,
      [a],
      {
        $1: function () {
          return this.$2$1;
        },
        $2: function (c) {
          this.$2$1 = c;
        },
      },
      function () {
        return kI;
      },
      function () {
        return [];
      }
    );
    return b;
  };
  kK.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.$1";
  ss.initGenericClass(kK, e, 1);
  var kM = function (a) {
    this.$e = null;
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
    this.$d(a);
    if (ss.isValue(this.$c().get_font())) {
      this.$9(new e8.$ctor1(this.$c().get_font()));
    }
    if (ss.isValue(this.$c().get_imageBackground())) {
      this.$b(new e6(this.$c().get_imageBackground()));
    }
    this.$e = new (ss.makeGenericType(ss.Dictionary$2, [Object, e6]))();
  };
  kM.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.$10";
  var kO = function (a) {
    ss.makeGenericType(kY, [k5]).call(this, a);
    var b = this.$9();
    if (ss.isNullOrUndefined(b)) {
      var c = new k9();
      c.set_percentage(100);
      b = new kW(c);
    }
    this.$a(b);
  };
  kO.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.$11";
  var kQ = function (a) {
    ss.makeGenericType(kK, [k0]).call(this, a);
  };
  kQ.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.$2";
  var kT = function (a) {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = null;
    this.$1$4 = null;
    this.$1$5 = null;
    this.$c(a);
    if (ss.isValue(this.$b().get_headerText())) {
      this.$6(new kO(this.$b().get_headerText()));
    }
    if (ss.isValue(this.$b().get_mainContent())) {
      this.$8(new kM(this.$b().get_mainContent()));
    }
    if (ss.isValue(this.$b().get_footerText())) {
      this.$4(new kZ(this.$b().get_footerText()));
    }
  };
  kT.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.$3";
  var kU = function (a) {
    ss.makeGenericType(kK, [k6]).call(this, a);
  };
  kU.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.$4";
  var kV = function (a) {
    this.$3 = null;
    this.$4 = null;
    this.$5 = null;
    this.$6 = null;
    ss.makeGenericType(kK, [k7]).call(this, a);
  };
  kV.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.$5";
  var kW = function (a) {
    this.$3$1 = null;
    this.$3$2 = null;
    this.$3$3 = null;
    this.$3$4 = null;
    ss.makeGenericType(kK, [k9]).call(this, a);
    if (ss.isValue(this.$1().get_soundColour())) {
      this.$a(new e6(a.get_soundColour()));
    }
    if (ss.isValue(this.$1().get_correctColour())) {
      this.$6(new e6(a.get_correctColour()));
    }
    if (ss.isValue(this.$1().get_incorrectColour())) {
      this.$8(new e6(a.get_incorrectColour()));
    }
    if (ss.isValue(this.$1().get_strokeColour())) {
      this.$c(new e6(a.get_strokeColour()));
    }
  };
  kW.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.$6";
  var kX = function () {};
  kX.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.$7";
  var kY = function (a) {
    var b = function (c) {
      this.$2$1 = null;
      this.$2$2 = null;
      this.$2$3 = null;
      kX.call(this);
      this.$c(c);
      if (ss.isValue(this.$b().get_font())) {
        this.$8(new e8.$ctor1(this.$b().get_font()));
      }
      if (ss.isValue(this.$b().get_glyph())) {
        this.$a(c5.$0(this.$b().get_glyph()));
      }
    };
    ss.registerGenericClassInstance(
      b,
      kY,
      [a],
      {
        $b: function () {
          return this.$2$1;
        },
        $c: function (c) {
          this.$2$1 = c;
        },
        $7: function () {
          return this.$2$2;
        },
        $8: function (c) {
          this.$2$2 = c;
        },
        $9: function () {
          return this.$2$3;
        },
        $a: function (c) {
          this.$2$3 = c;
        },
        $2: function (y, c, d, f, g, h) {
          if (hM.$7()) {
            y.$t(d, e2.$5, 1, 0, null);
          }
          var i = this.$7().clone();
          i.set_fillColour(e0.$2(i.get_fillColour(), c, f));
          i.set_strokeColour(e0.$2(i.get_strokeColour(), c, f));
          var j = this.$1(c, f);
          var k = ss.isValue(j) && !j.get_isEmptyOrWhitespace();
          var l = this.$b().get_margin().get_topLeft();
          var m = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction(
            d,
            this.$b().get_margin()
          );
          var n = Enumerable.from([
            m.width,
            m.height,
            ss.coalesce(h, 60),
          ]).min();
          var o = new VEL.Skynet.Core.Toolbox.Geometry.Size(n, n);
          var p = this.$0(c, f);
          if (p === 4 && k) {
            var q = j.toInteger();
            if (q > 0) {
              var r = new VEL.Skynet.Core.Toolbox.Geometry.Size(
                m.height,
                m.height
              );
              var s = Math.min(r.width, (m.width - r.width) / q);
              var t = s * q;
              l = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                (d.width - t) / 2,
                l.y
              );
              var u = y.$y(l);
              for (var v = 0; v < q; v++) {
                this.$9().$0(u, 2, i.get_fillColour(), r);
                u = u.$y(
                  new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(s, 0)
                );
              }
            }
            return;
          }
          if (!this.$6(p)) {
            if (k) {
              l =
                g === 1
                  ? new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                      d.width / 2 - o.width,
                      l.y
                    )
                  : new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                      (d.width - o.width) / 2,
                      d.height / 2 - o.height
                    );
            } else {
              l = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                (d.width - o.width) / 2,
                (d.height - o.height) / 2
              );
            }
            var w = y.$y(l);
            this.$9().$0(w, p, i.get_fillColour(), o);
          }
          if (!k) {
            return;
          }
          var x = 1;
          if (!this.$6(p)) {
            m =
              g === 1
                ? new VEL.Skynet.Core.Toolbox.Geometry.Size(
                    m.width / 2,
                    m.height
                  )
                : new VEL.Skynet.Core.Toolbox.Geometry.Size(
                    m.width,
                    m.height / 2
                  );
            l =
              g === 1
                ? new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                    d.width / 2 + 15,
                    l.y
                  )
                : new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                    l.x,
                    d.height / 2 + 15
                  );
            x = 0;
          }
          y = y.$y(l);
          j = j.addNumberCommas();
          this.$3(i, y, j, m, x);
        },
        $6: function (c) {
          return c === 0 || ss.isInstanceOfType(this.$9(), kQ);
        },
        $5: function (j, c, d, f) {
          var g = false;
          if (!c.preventHeaderCollapse) {
            var h = !this.$1(c, d).get_isEmptyOrWhitespace();
            var i = this.$0(c, d);
            g = !h && this.$6(i);
          }
          return this.$4(j, f, g);
        },
        $4: function (h, c, d) {
          var f =
            d && ss.isValue(this.$b().get_collapsedPercentage())
              ? ss.unbox(this.$b().get_collapsedPercentage())
              : this.$b().get_percentage();
          var g = f / 100;
          return c === 1
            ? new VEL.Skynet.Core.Toolbox.Geometry.Size(h.width, h.height * g)
            : new VEL.Skynet.Core.Toolbox.Geometry.Size(
                h.width * g,
                h.height
              );
        },
        $3: function (n, c, d, f, g) {
          var h = new h1.$i(n);
          var i = ss.mkdel(h, h.measureSize);
          var j = new VEL.Skynet.Core.View.Helpers.TypeSetterOptions();
          j.horizontalAlign = g;
          j.maxFontSize = n.get_fontSize();
          var k = VEL.Skynet.Core.View.Helpers.TypeSetter.arrange(d, f, i, j);
          for (var l = 0; l < k.chunks.length; l++) {
            var m = k.chunks[l];
            n.modify(m);
            if (n.get_useStroke()) {
              c.$u(m.text, m.position.x, m.position.y, n);
            }
            c.$k(m.text, m.position.x, m.position.y, n);
          }
        },
      },
      function () {
        return kX;
      },
      function () {
        return [];
      }
    );
    return b;
  };
  kY.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.$8";
  ss.initGenericClass(kY, e, 1);
  var kZ = function (a) {
    ss.makeGenericType(kY, [k3]).call(this, a);
  };
  kZ.__typeName = "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.$9";
  kZ.$0 = function (a) {
    return a === 2 || a === 3 || a === 4 || a === 1;
  };
  var k0 = function () {
    k4.call(this);
  };
  k0.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.CollapsedGlyphModel";
  global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.CollapsedGlyphModel =
    k0;
  var k1 = function () {
    this.$1$1 = 0;
    this.$1$2 = null;
    this.$1$3 = null;
    this.$1$4 = null;
    this.$1$5 = null;
    this.$1$6 = null;
    this.$1$7 = 0;
    this.set_direction(1);
    this.set_margin(VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty());
  };
  k1.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.ContentPanelModel";
  global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.ContentPanelModel =
    k1;
  var k2 = function () {};
  k2.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.ContentShapeEnum";
  global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.ContentShapeEnum =
    k2;
  var k3 = function () {
    la.call(this);
  };
  k3.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.FooterTextModel";
  global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.FooterTextModel =
    k3;
  var k4 = function () {
    this.$1$1 = 0;
    this.set_percentage(100);
  };
  k4.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.GlyphModel";
  global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.GlyphModel =
    k4;
  var k5 = function () {
    this.$2$1 = null;
    la.call(this);
  };
  k5.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.HeaderTextModel";
  global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.HeaderTextModel =
    k5;
  var k6 = function () {
    k4.call(this);
  };
  k6.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.HiddenGlyphModel";
  global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.HiddenGlyphModel =
    k6;
  var k7 = function () {
    this.$2$1 = null;
    this.$2$2 = null;
    this.$2$3 = null;
    this.$2$4 = null;
    k4.call(this);
  };
  k7.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.ImageGlyphModel";
  global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.ImageGlyphModel =
    k7;
  var k8 = function () {
    this.$1$1 = null;
    this.$1$2 = null;
    this.$1$3 = 0;
    this.$1$4 = null;
    this.$1$5 = 0;
    this.set_alignment(1);
    this.set_margin(VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty());
    this.set_direction(3);
  };
  k8.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.MainContentModel";
  global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.MainContentModel =
    k8;
  var k9 = function () {
    this.$2$1 = null;
    this.$2$2 = null;
    this.$2$3 = null;
    this.$2$4 = null;
    k4.call(this);
  };
  k9.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.PathGlyphModel";
  global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.PathGlyphModel =
    k9;
  var la = function () {
    this.$1$1 = null;
    this.$1$2 = 0;
    this.$1$3 = null;
    this.$1$4 = null;
    this.$1$5 = null;
    this.set_margin(VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty());
  };
  la.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.TextModel";
  global.VEL.Skynet.View.Rendering.Visuals.Controls.Tiles.Parts.TextModel =
    la;
  var lb = function (a, h, i, b, c, d) {
    this.$10 = null;
    this.$Y = null;
    this.$X = null;
    this.$Z = null;
    j6.call(this, null, a, 1, false, h, null, null);
    this.$P = i;
    this.$10 = c;
    this.$Y = d;
    var f = ss.getEnumerator(b);
    try {
      while (f.moveNext()) {
        var g = f.current();
        g.$8(this);
        g.$4(null);
      }
    } finally {
      f.dispose();
    }
  };
  lb.__typeName = "VEL.Skynet.View.Rendering.Visuals.LayerVisuals.$0";
  var lc = function (a, g, h, b, c, d, f) {
    this.$11 = null;
    this.$12 = 0;
    lb.call(this, b, c, h, d, f, null);
    this.$11 = a;
    this.$12 = g;
  };
  lc.__typeName = "VEL.Skynet.View.Rendering.Visuals.LayerVisuals.$1";
  var ld = function (a, g, h, b, c, d, f) {
    this.$11 = null;
    lb.call(this, h, c, g, d, b, f);
    this.$11 = i7.getImageElement(a);
    if (ss.Nullable$1.gt(f, 1)) {
      this.$X = new VEL.Skynet.Core.Toolbox.Geometry.Size(
        ss.Int32.div(this.$11.width, ss.unbox(f)),
        this.$11.height
      );
    }
  };
  ld.__typeName = "VEL.Skynet.View.Rendering.Visuals.LayerVisuals.$2";
  var le = function () {};
  le.__typeName =
    "VEL.Skynet.View.Rendering.Visuals.LayerVisuals.LayerShapeEnum";
  global.VEL.Skynet.View.Rendering.Visuals.LayerVisuals.LayerShapeEnum = le;
  var lf = function (a) {
    this.$b = null;
    this.$9 = 0;
    this.$c = null;
    this.$8 = null;
    this.$a = null;
    this.$d = null;
    this.$g = null;
    this.$e = 0;
    this.$h = null;
    this.$f = null;
    this.$6 = false;
    this.$7 = null;
    this.$i = null;
    this.$j = 0;
    this.$4 = false;
    this.$3 = false;
    this.$5 = false;
    this.$2 = false;
    this.$9 = a.primaryGlyph;
    this.$e = a.secondaryGlyph;
    if (ss.isValue(a.primaryText)) {
      this.$b = a.primaryText.clone$1();
    }
    if (ss.isValue(a.primaryHeader)) {
      this.$c = a.primaryHeader.clone$1();
    }
    if (ss.isValue(a.primaryFooter)) {
      this.$8 = a.primaryFooter.clone$1();
    }
    if (ss.isValue(a.secondaryFooter)) {
      this.$d = a.secondaryFooter.clone$1();
    }
    if (ss.isValue(a.secondaryText)) {
      this.$g = a.secondaryText.clone$1();
    }
    if (ss.isValue(a.secondaryHeader)) {
      this.$h = a.secondaryHeader.clone$1();
    }
    this.$a = a.primaryImage;
    this.$f = a.secondaryImage;
    this.$6 = a.get_isSoundPlaying();
    this.$i = a.get_sound();
    this.$7 = a.paletteIndex;
    this.$j = a.get_state();
    this.$4 = a.isNeutral;
  };
  lf.__typeName = "VEL.Skynet.View.Rendering.VisualsControls.DataClones.$0";
  var lg = function () {};
  lg.__typeName = "VEL.Skynet.View.Rendering.VisualsControls.DataClones.$1";
  ss.initClass(
    ab,
    e,
    {
      get_game: function () {
        return this.$1$1;
      },
      set_game: function (a) {
        this.$1$1 = a;
      },
      get_app: function () {
        return this.$1$2;
      },
      set_app: function (a) {
        this.$1$2 = a;
      },
      getLayoutXml: function (a) {
        return i7.getXmlReader(a, 2, true);
      },
      onPreStart: function (a, c, d, b) {
        this.$h = true;
        new ln(
          "RedditSansMedium",
          ss.mkdel(this, function (f) {
            this.$q = a8.$0(this);
            this.$q.$n.$v(this.$q, this.$o, 2);
            this.$q.$l.$0();
            this.showStart(a, c, d);
            this.$0(0);
            b();
          })
        );
      },
      onBuild: function (a, g, h, b, c, d) {
        if (window.location.href.indexOf("nofullscreen") !== -1) {
          d = 0;
        }
        this.$d = h;
        this.$u = b;
        this.$o = this.getThemeSettingAsBool("ReverseContrast");
        var f = new VEL.Skynet.Core.Toolbox.Serialization.XmlParser.$ctor1(
          ss.getTypeAssembly(ab),
          "Builder"
        );
        id.initialize(f, h, true);
        this.$5(f, g.get_scaling(), d);
        this.$q.$l.$1(c);
        this.$1(a, g, ss.mkdel(this, this.$7));
      },
      onChangeViewModel: function (a, b, c) {
        this.$1(
          a,
          b,
          ss.mkdel(this, function () {
            this.$8(c);
          })
        );
      },
      onChangeController: function (a, d, f, b) {
        if (ss.isValue(this.$m) && ss.isValue(a)) {
          this.$x = a;
          var c = !ss.staticEquals(b, null);
          this.$m.$1(
            a,
            d,
            c,
            ss.mkdel(this, function () {
              if (f !== 0) {
                this.$q.$l.$1(f);
                this.$b();
              }
              if (!ss.staticEquals(b, null)) {
                b();
              }
            })
          );
        }
      },
      onArrange: function (a) {
        if (ss.isValue(this.$x) && ss.isValue(this.$m)) {
          this.$x.targetControls();
          if (a === 0) {
            this.$m.$y().forEach(function (b) {
              b.jumpToTarget();
            });
          }
          this.$b();
        }
        if (this.get_isTestCard() && Enumerable.from(this.$m.$y()).any()) {
          j0.$7(Enumerable.from(this.$m.$y()).first(), this.$m.$A());
        }
      },
      onFaceDirection: function (a, b) {
        if (ss.isValue(this.$m) && ss.isValue(a)) {
          this.$m.$b(a, b);
        }
      },
      onAppear$1: function (a, b) {
        if (
          ss.isValue(this.$m) &&
          ss.isValue(a) &&
          !a.control.get_isVisible()
        ) {
          this.$m.$6(a, b);
        }
      },
      onAppear: function (a) {
        if (ss.isValue(this.$m)) {
          var b = Enumerable.from(a)
            .where(function (d) {
              return ss.isValue(d) && !d.control.get_isVisible();
            })
            .getEnumerator();
          try {
            while (b.moveNext()) {
              var c = b.current();
              this.$m.$6(c, null);
            }
          } finally {
            b.dispose();
          }
        }
      },
      onConveyorAppear: function (a) {
        if (ss.isValue(this.$m)) {
          var b = Enumerable.from(a)
            .where(function (d) {
              return ss.isValue(d);
            })
            .getEnumerator();
          try {
            while (b.moveNext()) {
              var c = b.current();
              this.$m.$7(c, null);
            }
          } finally {
            b.dispose();
          }
        }
      },
      onEliminate$1: function (a, b) {
        if (ss.isValue(this.$m) && ss.isValue(a) && a.control.get_isVisible()) {
          this.$m.$a(a, b);
        }
      },
      onEliminate: function (a) {
        if (ss.isValue(this.$m)) {
          var b = Enumerable.from(a)
            .where(function (d) {
              return ss.isValue(d) && d.control.get_isVisible();
            })
            .getEnumerator();
          try {
            while (b.moveNext()) {
              var c = b.current();
              this.$m.$a(c, null);
            }
          } finally {
            b.dispose();
          }
        }
      },
      onInstantAppear: function (a) {
        if (ss.isValue(this.$m)) {
          this.$m.$c(a);
        }
      },
      onInstantDisappear: function (a) {
        if (ss.isValue(this.$m)) {
          this.$m.$d(a);
        }
      },
      onUpdate: function (a) {
        if (ss.isValue(this.$m)) {
          var b = Enumerable.from(a)
            .where(function (d) {
              return ss.isValue(d);
            })
            .getEnumerator();
          try {
            while (b.moveNext()) {
              var c = b.current();
              this.$m.$f(c);
            }
          } finally {
            b.dispose();
          }
        }
      },
      onBringToFront: function (a) {
        if (ss.isValue(this.$m)) {
          this.$m.$0(a);
        }
      },
      onSendToBack: function (a) {
        if (ss.isValue(this.$m)) {
          this.$m.$i(a);
        }
      },
      onZoom: function (a, d, f, b, c) {
        if (ss.isValue(this.$z)) {
          this.$z.$a(
            ss.isNullOrUndefined(a) ? null : Enumerable.from(a).toArray(),
            d,
            f,
            b,
            c
          );
        }
      },
      onZoom$2: function (a, f, g, b, c, d) {
        if (ss.isValue(this.$z)) {
          this.$z.$c(
            ss.isNullOrUndefined(a) ? null : Enumerable.from(a).toArray(),
            f,
            g,
            b,
            c,
            d
          );
        }
      },
      onZoom$1: function (a, d, f, b, c) {
        if (ss.isValue(this.$z)) {
          this.$z.$b(a, d, f, b, c);
        }
      },
      onSound: function (a, f, g, b, c) {
        if (a === 1) {
          id.play$3(
            a,
            g,
            b,
            null,
            ss.mkdel(this, function () {
              if (this.$g) {
                return;
              }
              if (!ss.staticEquals(c, null)) {
                c();
              }
              id.playMusic();
            })
          );
          return;
        }
        if (a === 23 || a === 24 || a === 22) {
          id.stopMusic();
          id.stopLoopingSoundsInstantly();
        }
        if (ss.isValue(f) && ss.isValue(this.$q.$m.$j())) {
          var d = ss.cast(f.control, ki);
          if (ss.isValue(d) && ss.isValue(d.get_absoluteBounds())) {
            id.play$3(a, g, b, this.$3(d), c);
          } else {
            if (!ss.staticEquals(c, null)) {
              c();
            }
          }
        } else {
          id.play$3(a, g, b, null, c);
        }
      },
      onLoopingSound: function (a, f, g, b, c) {
        if (ss.isValue(f) && ss.isValue(this.$q.$m.$j())) {
          var d = ss.cast(f.control, ki);
          if (ss.isValue(d) && ss.isValue(d.get_absoluteBounds())) {
            id.play$2(a, g, b, this.$3(d), c);
          }
        } else {
          id.play$2(a, g, b, null, c);
        }
      },
      onContentSound: function (a, c) {
        var d = ss.isValue(a) && a.get_isSoundPlaying();
        id.stopContentSounds();
        if (d) {
          a.set_isSoundPlaying(false);
          return;
        }
        if (ss.isNullOrUndefined(a) || ss.isNullOrUndefined(a.get_sound())) {
          if (!ss.staticEquals(c, null)) {
            c();
          }
          return;
        }
        var b = [
          ss.cast(a, VEL.Skynet.Core.View.ObjectDatas._Object.ObjectData),
        ];
        a.set_isSoundPlaying(true);
        this.onUpdate(b);
        id.play$1(
          a.get_sound(),
          ss.mkdel(this, function () {
            a.set_isSoundPlaying(false);
            this.onUpdate(b);
            if (!ss.staticEquals(c, null)) {
              c();
            }
          })
        );
      },
      onStopContentSounds: function () {
        id.stopContentSounds();
      },
      onStopSoundEffects: function () {
        id.stopSoundEffects();
      },
      onStopMusic: function () {
        id.stopMusic();
      },
      onStopLoopingSoundsInstantly: function () {
        id.stopLoopingSoundsInstantly();
      },
      onStopLoopingSounds: function (a) {
        id.stopLoopingSounds(a);
      },
      onPauseLoopingSounds: function (a) {
        id.pauseLoopingSounds(a);
      },
      onResumeLoopingSounds: function (a) {
        id.resumeLoopingSounds(a);
      },
      onStopLoopingSound: function (a, b) {
        id.stopLoopingSound(a, b);
      },
      onObjectCreate: function (a, h, i) {
        var b = [];
        var c = ss.getEnumerator(a);
        try {
          while (c.moveNext()) {
            var d = c.current();
            b.push(ss.cast(this.$y.build(d), ki));
            var f = ss.safeCast(
              d,
              VEL.Skynet.Core.View.ObjectDatas.Tile.TileData
            );
            if (ss.isValue(f)) {
              var g = this.$y.getTileMeasurer(f.shape);
              if (!ss.staticEquals(g, null)) {
                if (ss.isValue(f.primaryText)) {
                  f.primaryText.verticalMetrics =
                    VEL.Skynet.Core.View.Helpers.TypeSetter.getVerticalMetrics(
                      f.primaryText,
                      g
                    );
                }
                if (ss.isValue(f.secondaryText)) {
                  f.secondaryText.verticalMetrics =
                    VEL.Skynet.Core.View.Helpers.TypeSetter.getVerticalMetrics(
                      f.secondaryText,
                      g
                    );
                }
              }
            }
          }
        } finally {
          c.dispose();
        }
        this.$m.$8(b, i, h);
      },
      onObjectDestroy: function (a, b) {
        if (ss.isNullOrUndefined(a)) {
          return;
        }
        var c = ss.cast(a.control, ki);
        if (b) {
          c.set_isVisible(false);
          this.$m.$9(c);
        } else {
          c.$f(
            ss.mkdel(this, function () {
              this.$m.$9(c);
            })
          );
        }
      },
      onTileDragStarting: function (a) {
        ss.cast(a.control, ky).$d();
      },
      onTileDragStopped: function (a) {
        ss.cast(a.control, ky).$e();
      },
      onShuffleStarting: function (a) {
        var b = ss.getEnumerator(a);
        try {
          while (b.moveNext()) {
            var c = b.current();
            ss.cast(c.control, ky).$q();
          }
        } finally {
          b.dispose();
        }
      },
      onShuffleStopped: function (a) {
        var b = ss.getEnumerator(a);
        try {
          while (b.moveNext()) {
            var c = b.current();
            ss.cast(c.control, ky).$r();
          }
        } finally {
          b.dispose();
        }
      },
      onObjectEvent: function (a, f, g, b) {
        var c = ss.isNullOrUndefined(f) ? this.$r : ss.cast(f.control, ki);
        if (ss.isNullOrUndefined(f)) {
          var d = this.$z.$f();
          this.$r.setSize(d.get_width(), d.get_height());
          this.$r.setTarget(d.get_left(), d.get_top());
          this.$r.jumpToTarget();
        }
        if (ss.isValue(c)) {
          c.$g(a, g, b);
        }
      },
      onTryArrange: function (a) {
        return this.$m.$e(a);
      },
      updateToolbar: function () {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$14();
        }
      },
      onSceneEvent: function (a, d, f) {
        var b = this.$q.$3(a);
        var c = ss.mkdel(this, function () {
          if (!ss.staticEquals(d, null)) {
            d();
          }
          var g = {};
          this.$p.tryGetValue(a, g);
          this.$p.set_item(a, g.$ + 1);
          this.$q.$o = true;
        });
        if (a === 4 || a === 3) {
          this.$q.$j = false;
          id.setMuteMusic(this.get_app().onGetAudioSetting(0));
          id.setMuteSounds(this.get_app().onGetAudioSetting(1));
        }
        if (ss.isValue(b)) {
          b.$1(c);
        } else {
          c();
        }
      },
      restartViewController: function (a, b, c) {
        this.$m.$h(a, b, c);
      },
      showStart: function (a, b, c) {
        this.$a();
        if (ss.isValue(this.$q)) {
          if (this.get_isTestCard()) {
            this.get_game().onStartComplete();
          } else {
            this.$q.$n.$S(a, b, c);
          }
        }
      },
      skipStart: function () {
        this.$a();
        if (ss.isValue(this.$q)) {
          this.$q.$n.$W();
        }
      },
      showPlayOverlay: function () {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$R();
        }
      },
      showTopInstruction: function (a, b) {
        if (ss.isValue(this.$q)) {
          this.$v = a;
          this.$q.$n.$U(a, b);
        }
      },
      showTopMessage: function (a, b) {
        if (ss.isValue(this.$q)) {
          this.$w = a.toString();
          this.$q.$n.$V(a, b);
        }
      },
      showMiddleMessage: function (a, b) {
        if (ss.isValue(this.$q)) {
          this.$l = a.toString();
          this.$q.$n.$N(a, b);
        }
      },
      middleMessageDropOut: function (a, b, c) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$x(a, b, c);
        }
      },
      showBottomMessage: function (a, b) {
        if (ss.isValue(this.$q)) {
          this.$e = a.toString();
          this.$q.$n.$J(a, b);
        }
      },
      bottomMessagePopUp: function (a, d, f, b, c) {
        if (ss.isValue(this.$q)) {
          this.$e = a.toString();
          this.$q.$n.$i(a, d, f, b, c);
        }
      },
      showConnecting: function (a) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$K(a);
        }
      },
      autoPage: function (a) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$h(a);
        }
      },
      cancelAutoPage: function () {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$k();
        }
      },
      showPage: function (a, c, d, b) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$P(a, c, d, b);
        }
      },
      livesChanged: function (a) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$w(a);
        }
      },
      scoreChanged: function (a) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$H(a);
        }
      },
      scoreChanged$1: function (a, b) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$I(a, b);
        }
      },
      timerChanged: function (a) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$X(a);
        }
      },
      progressChanged: function (a) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$G(a);
        }
      },
      showMenu: function (a, f, g, b, c, d) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$k();
          this.$q.$n.$M(a, f, g, b, c, d);
        }
        if (ss.isValue(this.$q)) {
          this.$q.$n.$1g(f);
        }
        if (ss.isValue(this.$q)) {
          this.$q.$n.$1e(ss.isValue(g) ? g.toString() : null);
        }
      },
      hideToolbar: function () {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$u();
        }
      },
      showKeyboard: function (a, b) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$L(a, b);
        }
      },
      showToolbar: function (a, b) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$T(a, b);
        }
      },
      showMovementButtons: function () {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$O();
        }
      },
      hideMovementButtons: function () {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$t();
        }
      },
      updateMovementButtons: function (a) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$Z(a);
        }
      },
      showPaused: function (a, b) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$Q(a, b);
        }
      },
      updateTextbox: function (a) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$12(a);
        }
      },
      updateTitle: function (a) {
        if (ss.isValue(this.$q)) {
          this.$q.$n.$13(a);
        }
      },
      $a: function () {
        try {
          var a = window.parent.document.getElementById("embed_iframe");
          if (ss.isValue(a)) {
            a.setAttribute("data-loaded", "true");
          }
        } catch (b) {}
      },
      dispose: function () {
        this.$g = true;
        hK.$b = null;
        if (ss.isValue(this.$n)) {
          window.cancelAnimationFrame(ss.unbox(this.$n));
        }
        this.set_game(null);
        if (ss.isValue(this.$q)) {
          this.$q.dispose();
          this.$q = null;
        }
        lB.$0();
        VEL.Skynet.Core.View.Layouts.Targeters.LabelTargeter.clearCache();
        id.stopMusic();
        id.stopSoundEffects();
        id.stopContentSounds();
        id.stopLoopingSoundsInstantly();
      },
      canClickStartOverlay: function () {
        if (!this.$j) {
          return false;
        }
        if (ss.isValue(this.$q)) {
          return this.$q.$n.$j();
        }
        return false;
      },
      getAudioInfo: function () {
        var a = new VEL.Skynet.Core.Testing.AudioInfo();
        a.plays = a5.$0;
        a.requests = ll.$7;
        a.loads = ll.$6;
        return VEL.Skynet.Core.Toolbox.Serialization.JsonHelper.serialize(a);
      },
      hasGameOverCompleted: function () {
        return this.$p.containsKey(5);
      },
      hasIntroCompleted: function () {
        return this.$p.containsKey(4) || this.$p.containsKey(2);
      },
      getSceneEvents: function () {
        return this.$p;
      },
      isWheelMoving: function () {
        return this.$m.$x();
      },
      getTitle: function () {
        if (ss.isValue(this.$q)) {
          return this.$q.$n.$r();
        }
        return null;
      },
      getPageIndex: function () {
        return this.$q.$n.$p();
      },
      getPageCount: function () {
        return this.$q.$n.$o();
      },
      getMenuTitle: function () {
        return this.$q.$n.$1f();
      },
      getMenuMessage: function () {
        return this.$q.$n.$1d();
      },
      getMenuCommandsAsJson: function () {
        return VEL.Skynet.Core.Toolbox.Serialization.JsonHelper.serializeEnumerable(
          this.$6(this.$q.$n.$19())
        );
      },
      getPanelSize: function () {
        return this.$m.$A().width + "," + this.$m.$A().height;
      },
      getToolbarCommandsAsJson: function () {
        return VEL.Skynet.Core.Toolbox.Serialization.JsonHelper.serializeEnumerable(
          this.$6(this.$q.$n.$1h())
        );
      },
      getMenuDisplaysAsJson: function () {
        return VEL.Skynet.Core.Toolbox.Serialization.JsonHelper.serializeEnumerable(
          this.$q.$n.$1b()
        );
      },
      getZoomObjectsAsJson: function () {
        return VEL.Skynet.Core.Toolbox.Serialization.JsonHelper.serializeEnumerable(
          this.$z.$h()
        );
      },
      getFocusObject: function () {
        var a = Enumerable.from(this.$m.$y())
          .ofType(ky)
          .firstOrDefault(function (b) {
            return b.get_isVisible() && b.$1y();
          }, ss.getDefaultValue(ky));
        if (ss.isNullOrUndefined(a) || ss.isNullOrUndefined(a.get_data())) {
          return null;
        }
        return VEL.Skynet.Core.Toolbox.Serialization.JsonHelper.serialize(
          a.get_data()
        );
      },
      getControlBounds: function (a) {
        var b = Enumerable.from(this.$m.$y()).firstOrDefault(function (d) {
          return d.get_data().uniqueId === a;
        }, ss.getDefaultValue(ki));
        if (ss.isNullOrUndefined(b)) {
          return null;
        }
        var c = VEL.Skynet.Core.Toolbox.Geometry.Rect.op_Division(
          b.get_absoluteBounds(),
          hK.$0()
        );
        return c.toString();
      },
      getDisplayTime: function () {
        return this.$q.$n.$1n();
      },
      getDisplayScore: function () {
        return this.$q.$n.$1l();
      },
      getDisplayLives: function () {
        return this.$q.$n.$1j();
      },
      getControlAsJson: function (a) {
        var g = Enumerable.from(this.$m.$y()).firstOrDefault(function (i) {
          return i.get_data().uniqueId === a;
        }, ss.getDefaultValue(ki));
        if (ss.isNullOrUndefined(g)) {
          return "null";
        }
        var h = new VEL.Skynet.Core.View.TestControl();
        h.set_targetX(g.get_targetX());
        h.set_targetY(g.get_targetY());
        h.set_actualHeight(g.get_actualHeight());
        h.set_actualWidth(g.get_actualWidth());
        h.set_isVisible(g.get_isVisible());
        h.set_state(g.get_data().get_state());
        var b = h;
        if (ss.isInstanceOfType(g, ky)) {
          var c = ss.cast(g, ky);
          b.set_glyph(c.$1w());
          b.set_paletteIndex(c.$1A());
          b.set_isNeutral(c.$1E().isNeutral);
          b.set_isHighlighted(c.$16());
          b.set_isDIsabled(c.$12());
          b.set_header(c.$1G());
          b.set_text(c.$1s());
          b.set_footer(c.$1q());
          b.set_faceShown(c.$1u());
          b.set_isSelected(c.$19());
          b.set_isEliminated(c.$14());
        }
        if (
          ss.isInstanceOfType(
            g,
            VEL.Skynet.Core.View.ObjectControls.ILabelControl
          )
        ) {
          var d = ss.cast(g, ks);
          b.set_text(d.$1k());
        }
        if (ss.isInstanceOfType(g, ku)) {
          var f = ss.cast(g, ku);
          b.set_isHighlighted(f.$16());
        }
        return VEL.Skynet.Core.Toolbox.Serialization.JsonHelper.serialize(b);
      },
      getCanvasSize: function (a) {
        if (a === 1) {
          return this.$q.$m.$e.width + "," + this.$q.$m.$e.height;
        }
        if (a === 2) {
          return this.$m.$t().toString();
        }
        if (a === 3) {
          return this.$m.$A().toString();
        }
        var b = Enumerable.from(this.$m.$y()).firstOrDefault(function (c) {
          return c.get_data().uniqueId === a;
        }, ss.getDefaultValue(ki));
        if (ss.isNullOrUndefined(b)) {
          return null;
        }
        return b.$4().toString();
      },
      getOverlayBounds: function (a) {
        var b = this.$q.$n.$n(a);
        if (ss.isNullOrUndefined(b)) {
          return "null";
        }
        return b.toString();
      },
      getTopInstruction: function () {
        return ss.coalesce(this.$v, "");
      },
      getTopMessage: function () {
        return this.$w;
      },
      getMiddleMessage: function () {
        return this.$l;
      },
      getBottomMessage: function () {
        return this.$e;
      },
      isObjectStopped: function (a) {
        var b = Enumerable.from(this.$m.$y())
          .where(function (d) {
            return (
              (a === 0 && d.get_isVisible()) || d.get_data().uniqueId === a
            );
          })
          .getEnumerator();
        try {
          while (b.moveNext()) {
            var c = b.current();
            if (!c.$11() || c.$18()) {
              return false;
            }
          }
        } finally {
          b.dispose();
        }
        return this.$z.$g();
      },
      getThemeSettingAsBool: function (a) {
        return this.$4(a).getAttributeAsBool("Value", false);
      },
      getThemeSettingAsEnum: function (a) {
        return function (b) {
          var c = this.$4(b);
          return c
            .getAttributeAsEnum(a)
            .call(c, "Value", ss.getDefaultValue(a));
        };
      },
      $4: function (a) {
        if (ss.isNullOrUndefined(this.$t)) {
          this.$t = new (ss.makeGenericType(ss.Dictionary$2, [
            String,
            VEL.Skynet.Core.Toolbox.Serialization.XmlElement,
          ]))();
          var f = i7.getXmlReader("Settings", 0, true);
          var g = ss.getEnumerator(f.root.getChildren("Setting"));
          try {
            while (g.moveNext()) {
              var b = g.current();
              var c = b.getAttributeAsString("Name");
              this.$t.add(c, b);
            }
          } finally {
            g.dispose();
          }
        }
        var d = {};
        if (this.$t.tryGetValue(a, d)) {
          return d.$;
        }
        throw new ss.KeyNotFoundException(a);
      },
      $6: function (a) {
        if (ss.isNullOrUndefined(a)) {
          return null;
        }
        return Enumerable.from(a)
          .where(function (b) {
            return ss.isValue(b);
          })
          .select(function (b) {
            var c = new VEL.Skynet.Core.View.Menu.MenuCommand();
            c.set_name(b.get_name());
            c.set_isEnabled(b.get_isEnabled());
            c.set_isSelected(b.get_isSelected());
            c.set_isVisible(b.get_isVisible());
            return c;
          });
      },
      get_isTestCard: function () {
        return ss.isValue(this.$u);
      },
      invalidateForDebug: function () {
        hK.$b = VEL.Skynet.Core.Toolbox.Geometry.Size.get_empty();
        this.$9();
      },
      changeClockSpeedForDebug: function () {
        if (this.$f === 0.1) {
          this.$f = 10;
        } else {
          if (this.$f === 10) {
            this.$f = 1;
          } else {
            this.$f = 0.1;
          }
        }
        return this.$f;
      },
      $5: function (a, b, c) {
        e0.$4(a);
        im.$1(a);
        if (this.get_isTestCard()) {
          j0.$5(this.$u);
          i7.loadLazySounds();
        }
        this.$y = new kS(a);
        this.$m = new j4(this, this.$y, this.$d);
        this.$z = new jz(this.$m);
        this.$q = a8.$2(a, this.$d, this.$u).$0(this, this.$z, this.$m, b);
        this.$q.$4(this.$i, this.$o, c);
        this.$9();
      },
      $9: function () {
        var a = this.$q.$d();
        var b = ss.isValue(hK.$b) && hK.$b.width >= 50 && hK.$b.height >= 50;
        if (b && (a.width < 50 || a.height < 50)) {
          return false;
        }
        if (a.equals(hK.$b)) {
          return false;
        }
        hK.$b = a;
        if (ss.isNullOrUndefined(this.$q)) {
          return false;
        }
        this.$q.$9(hK.$8());
        this.$q.$n.$11();
        this.$q.$k = this.$i
          ? new VEL.Skynet.Core.Toolbox.Geometry.Margin(a.height / 20)
          : this.$q.$n.$17();
        if (ss.isValue(this.$r)) {
          this.$r.$1k(this.$m);
        }
        this.$q.$0();
        this.$q.$o = true;
        return true;
      },
      $b: function () {
        if (ss.isValue(this.$x) && ss.isValue(this.$q)) {
          this.$q.$n.$10(this.$x.get_scrollInfo());
          this.$q.$c(ss.isValue(this.$x.get_scrollInfo()));
        }
      },
      $0: function (a) {
        var b = 100;
        if (this.$g) {
          return;
        }
        this.$s++;
        if (this.$9() && ss.isValue(this.$m)) {
          this.$m.$h(
            false,
            true,
            ss.mkdel(this, function () {
              jT.$1();
              this.onArrange(0);
              this.$n = window.requestAnimationFrame(ss.mkdel(this, this.$0));
            })
          );
          return;
        }
        if (a < 0) {
          this.$n = window.requestAnimationFrame(ss.mkdel(this, this.$0));
          return;
        }
        if (this.$k === 0) {
          this.$k = a;
        }
        var c = Math.min(b, a - this.$k) * this.$f;
        this.$k = a;
        if (ss.isValue(this.get_game())) {
          this.get_game().onUpdate(c);
          if (this.$g) {
            return;
          }
        }
        if (ss.isValue(this.$q)) {
          if (hM.$6()) {
            this.$2(c);
          } else {
            this.$q.$8(this.$h, this.$j, this.hasIntroCompleted(), c);
          }
        }
        if (!this.$j && this.$s >= this.$c) {
          this.$j = true;
          if (ss.isValue(this.$q) && this.$q.$n.$16()) {
            this.$q.$p = true;
          }
          this.get_app().onViewReady();
          if (this.$i) {
            document.title = "ok";
            this.$g = true;
            return;
          }
        }
        this.$n = window.requestAnimationFrame(ss.mkdel(this, this.$0));
      },
      $1: function (a, b, c) {
        this.$x = b;
        if (b.get_isLegacy()) {
          this.$y.$1(a);
          this.$m.$k(a, b, c);
        } else {
          this.$m.$k(
            a,
            b,
            ss.mkdel(this, function () {
              if (this.get_isTestCard()) {
                var d = this.$y.$0(this.$u, a, this.$m.$A());
              } else {
                this.$y.$1(a);
              }
              c();
            })
          );
        }
      },
      $7: function () {
        if (this.$g) {
          return;
        }
        this.$q.$l.$0();
        this.$m.$g();
        this.$q.$7();
        var a = this.$y;
        var b = new VEL.Skynet.Core.View.ObjectDatas.Place.HiddenPlaceData();
        var c = new VEL.Skynet.Core.View.Layouts.Targeters.PlaceTargeter();
        c.actualWidth = this.$m.$A().width;
        c.actualHeight = this.$m.$A().height;
        b.targeter = c;
        this.$r = ss.cast(a.build(b), ku);
        if (ss.isValue(this.$r)) {
          this.$r.$1k(this.$m);
        }
        this.$j = false;
        this.$n = window.requestAnimationFrame(ss.mkdel(this, this.$0));
        this.get_game().onBuildComplete();
        this.get_app().onViewBuilt();
      },
      $8: function (a) {
        this.$m.$g();
        this.$z.$8();
        a();
      },
      $2: function (a) {
        hM.$2();
        if (hM.$9()) {
          hM.$3();
          this.$q.$8(this.$h, this.$j, this.hasIntroCompleted(), a);
          hM.$4();
          hM.$1(this.$q.$n.$e);
        } else {
          this.$q.$8(this.$h, this.$j, this.hasIntroCompleted(), a);
          if (hM.$8()) {
            var b = new hO(this.$q.$n.$e);
            hM.$5(b, "memory:" + lH.getMemory());
            hM.$5(b, lH.debugMemory());
          }
        }
      },
      $3: function (a) {
        var c = a.get_absoluteBounds().get_center();
        var d = hK.$8().width / 2;
        var b = (c - d) / d;
        return b;
      },
    },
    null,
    [
      VEL.Skynet.Core.View.IOverlayView,
      VEL.Skynet.Core.View.IObjectView,
      VEL.Skynet.Core.View.IAnimationView,
      VEL.Skynet.Core.View.IView_Test,
      ss.IDisposable,
      VEL.Skynet.Core.View.IView_Game,
    ]
  );
  ss.initClass(a4, e, {}, ss.Exception);
  a4.$ctor1.prototype = a4.prototype;
  ss.initClass(
    f8,
    e,
    {
      $n: function () {
        return this.$1$1;
      },
      $o: function (a) {
        this.$1$1 = a;
      },
      $m: function () {
        return this.$A && this.$F === this.$p.length + this.$u.get_count();
      },
      $4: function () {
        var a = Enumerable.from(this.$p)
          .where(function (b) {
            return ss.isValue(b.$1());
          })
          .select(function (b) {
            return b.$1();
          })
          .toArray();
        this.$p.forEach(function (b) {
          b.$2(null);
        });
        return a;
      },
      $8: function () {
        var a = [this.$u.get_values(), this.$p];
        var c = Enumerable.from(a).sum(function (f) {
          return Enumerable.from(f).count();
        });
        var d = Enumerable.from(a)
          .selectMany(function (f) {
            return f;
          })
          .where(function (f) {
            return !f.$3();
          })
          .toArray();
        var b = c - d.length;
        return (
          "themeName:" +
          this.$n().name +
          ", waitingFor:[" +
          ss.arrayFromEnumerable(d).join(", ") +
          "], loaded:" +
          b +
          ", total:" +
          c
        );
      },
      $f: function () {
        this.$j(this.$E, null);
      },
      $e: function () {
        this.$j(this.$D, null);
      },
      $b: function (a, c, d) {
        var b = this.$a(a, c);
        if (ss.isNullOrUndefined(b)) {
          if (d) {
            throw new a4("\r\nCan't find XML name=" + a + " location=" + c);
          } else {
            return null;
          }
        }
        return b.$7();
      },
      $c: function (a) {
        a = "/" + a.toLowerCase() + "/";
        var b = Enumerable.from(this.$p)
          .ofType(lp)
          .where(function (c) {
            return c.$9().toLowerCase().indexOf(a) !== -1;
          });
        return b
          .select(function (c) {
            return c.$7();
          })
          .toArray();
      },
      $7: function (a) {
        if (ss.isNullOrUndefined(a)) {
          throw new ss.ArgumentNullException("image", "The image is null.");
        }
        var b = {};
        if (this.$u.tryGetValue(a.get_sourceName(), b)) {
          return b.$.$7();
        } else {
          if (a.get_isTest()) {
            var c = new Image();
            c.src = a.toDataSrc();
            return c;
          } else {
            throw new ss.KeyNotFoundException(
              "Unable to find content image element: source name = " +
                a.get_sourceName() +
                ", index = " +
                a.get_index() +
                "."
            );
          }
        }
      },
      $6: function (a) {
        a = a.toLowerCase();
        var b = Enumerable.from(this.$p)
          .ofType(lr)
          .firstOrDefault(function (c) {
            return ss.referenceEquals(c.$9(), a);
          }, ss.getDefaultValue(lr));
        if (ss.isNullOrUndefined(b)) {
          return null;
        }
        return b.$7();
      },
      $1: function (a) {
        a = a.toLowerCase();
        var b = Enumerable.from(this.$p)
          .ofType(ll)
          .firstOrDefault(function (c) {
            return ss.referenceEquals(c.$f, a) && c.$3();
          }, ss.getDefaultValue(ll));
        if (ss.isNullOrUndefined(b)) {
          return null;
        }
        return b.$c();
      },
      $2: function (a) {
        a = a.toLowerCase();
        var b = Enumerable.from(this.$p)
          .ofType(ll)
          .firstOrDefault(function (c) {
            return ss.referenceEquals(c.$f, a) && c.$3();
          }, ss.getDefaultValue(ll));
        if (ss.isNullOrUndefined(b)) {
          return null;
        }
        return b.$a();
      },
      $5: function (a) {
        if (ss.isNullOrUndefined(this.$w)) {
          return "";
        }
        if (this.$v === 0) {
          a = a.trim();
          var b = Enumerable.from(this.$w.get_fontStacks()).firstOrDefault(
            function (d) {
              return ss.referenceEquals(d.get_name(), a);
            },
            ss.getDefaultValue(lz)
          );
          return b.get_stack();
        } else {
          var c = Enumerable.from(this.$w.get_fontStacks()).firstOrDefault(
            ss.mkdel(this, function (d) {
              return d.get_id() === this.$v;
            }),
            ss.getDefaultValue(lz)
          );
          if (ss.isNullOrUndefined(c)) {
            this.$v = 0;
            return this.$5(a);
          }
          return c.get_stack();
        }
      },
      $a: function (a, b) {
        var c = (this.$3(b) + a + ".xml").toLowerCase();
        return Enumerable.from(this.$p)
          .ofType(lp)
          .firstOrDefault(function (d) {
            return d.$9().toLowerCase().indexOf(c) !== -1;
          }, ss.getDefaultValue(lp));
      },
      $3: function (a) {
        switch (a) {
          case 0:
            return "/Themes/" + this.$n().name + "/";
          case 1:
            return "/Themes/";
          case 2:
            return "/Content/Layouts/";
          default:
            throw new ss.NotImplementedException();
        }
      },
      $k: function (a) {
        if (this.$z) {
          return;
        }
        this.$F++;
        if (!ss.staticEquals(this.$G, null)) {
          this.$G(this.$F, this.$J);
        }
        if (this.$m()) {
          if (!ss.staticEquals(this.$H, null)) {
            this.$H();
          }
        }
      },
      $h: function (a) {
        if (!this.$C) {
          return;
        }
        var b = Enumerable.from(a).distinct().getEnumerator();
        try {
          while (b.moveNext()) {
            var c = b.current();
            this.$p.push(ll.$3(c, ss.mkdel(this, this.$k)));
          }
        } finally {
          b.dispose();
        }
      },
      $g: function (a) {
        var c = ss.getEnumerator(a);
        try {
          while (c.moveNext()) {
            var d = c.current();
            if (!d.get_isTest() && !this.$u.containsKey(d.get_sourceName())) {
              var b = new lr(d, ss.mkdel(this, this.$k));
              this.$u.add(d.get_sourceName(), b);
            }
          }
        } finally {
          c.dispose();
        }
      },
      $d: function () {
        if (
          ss.isValue(this.$t) &&
          ss.isValue(this.$s) &&
          ss.isValue(this.$x) &&
          ss.isValue(this.$q)
        ) {
          this.$l();
        }
      },
      $l: function () {
        var a = new VEL.Skynet.Core.Toolbox.Serialization.XmlParser.$ctor1(
          ss.getTypeAssembly(ab),
          null
        );
        if (ss.isValue(this.$x)) {
          this.$w = a.parse(lx).call(a, this.$x.root);
          VEL.Skynet.Core.View.Helpers.TypeSetter.fontAdjustments =
            Enumerable.from(this.$w.get_fontAdjustments())
              .select(function (i) {
                return ss.cast(
                  i,
                  VEL.Skynet.Core.View.Helpers.IFontAdjustment
                );
              })
              .toArray();
          this.$p.push(new ln("RedditSansMedium", ss.mkdel(this, this.$k)));
        }
        var g = [];
        if (this.$v !== 0) {
          ss.arrayAddRange(g, this.$9(this.$v));
        }
        var h = this.$q.root.get_children();
        for (var b = 0; b < h.length; b++) {
          var c = h[b];
          switch (c.get_tag().toLowerCase()) {
            case "img":
              this.$p.push(
                new lr.$0(c, ss.unbox(this.$t), ss.mkdel(this, this.$k))
              );
              break;
            case "font-stack":
              if (this.$v === 0) {
                ss.arrayAddRange(g, this.$9(c.getAttributeAsInt("id", 0)));
              }
              break;
            case "xml":
              if (this.$0(c)) {
                this.$p.push(new lp(c, ss.mkdel(this, this.$k)));
              }
              break;
            case "sound":
              if (this.$C) {
                var d = c.getAttributeAsBool("lazy", false);
                var f = c.getAttributeAsBool("music", false);
                if (d) {
                  this.$E.push(c);
                } else {
                  if (f && this.$B) {
                    this.$D.push(c);
                  } else {
                    this.$i(c, ss.mkdel(this, this.$k));
                  }
                }
              }
              break;
          }
        }
        ss.arrayAddRange(
          this.$p,
          Enumerable.from(g)
            .distinct()
            .select(
              ss.mkdel(this, function (i) {
                return new ln(i, ss.mkdel(this, this.$k));
              })
            )
        );
        this.$J = this.$p.length + this.$u.get_count();
        this.$A = true;
        if (this.$m() && !ss.staticEquals(this.$H, null)) {
          this.$H();
        }
      },
      $0: function (a) {
        var b = a.getAttributeAsInt("template", 0);
        return b === 0 || this.$I === b;
      },
      $9: function (a) {
        var b = this.$w.getFamilies(a);
        var c = Enumerable.from(
          ss.Enum.getValues(VEL.Skynet.Core.DataStructures.UnicodeLanguage)
        )
          .ofType(VEL.Skynet.Core.DataStructures.UnicodeLanguage)
          .where(
            ss.mkdel(this, function (d) {
              return (this.$K & d) !== 0;
            })
          );
        return c
          .select(
            ss.mkdel(this, function (d) {
              return Enumerable.from(b).firstOrDefault(
                ss.mkdel(this, function (f) {
                  return this.$w.isFamilyIncluded(f, d);
                }),
                ss.getDefaultValue(String)
              );
            })
          )
          .where(function (d) {
            return ss.isValue(d);
          })
          .distinct();
      },
      dispose: function () {
        this.$z = true;
        for (var a = 0; a < this.$p.length; a++) {
          var c = this.$p[a];
          c.dispose();
        }
        var d = ss.getEnumerator(this.$u.get_values());
        try {
          while (d.moveNext()) {
            var b = d.current();
            b.dispose();
          }
        } finally {
          d.dispose();
        }
      },
      $i: function (a, b) {
        this.$p.push(ll.$4(a, ss.coalesce(this.$s, false), this.$r, b));
      },
      $j: function (a, c) {
        var d = ss.getEnumerator(a);
        try {
          while (d.moveNext()) {
            var b = d.current();
            this.$i(b, c);
          }
        } finally {
          d.dispose();
        }
      },
    },
    null,
    [ss.IDisposable]
  );
  f8.$0.prototype = f8.prototype;
  ss.initClass(i7, e, {});
  ss.initClass(jZ, e, {});
  ss.initClass(kR, e, {
    getXmlReader: function (a, b, c) {
      if (b) {
        a += "?nocache=" + kR.$0.next();
      }
      $.ajax({
        type: "GET",
        url: a,
        dataType: "text",
        success: function (d, f, g) {
          var h = new VEL.Skynet.Core.Toolbox.Serialization.XmlReader(
            ss.cast(d, String),
            false,
            true,
            a,
            false
          );
          c(h);
        },
        error: function (d, f, g) {
          throw new ss.Exception(
            "Error loading XML file: url = " +
              a +
              ", status code = " +
              d.status +
              ", status text = " +
              d.statusText +
              "."
          );
        },
      });
    },
  });
  ss.initEnum(lh, e, { thisTheme: 0, allThemes: 1, layouts: 2 });
  ss.initClass(
    lj,
    e,
    {
      $3: function () {
        return this.$1$1;
      },
      $4: function (a) {
        this.$1$1 = a;
      },
      $1: function () {
        return this.$1$2;
      },
      $2: function (a) {
        this.$1$2 = a;
      },
      dispose: null,
      $0: function () {
        if (!this.$3()) {
          this.$4(true);
          if (!ss.staticEquals(this.$5, null)) {
            this.$5(this);
          }
        }
      },
    },
    null,
    [ss.IDisposable]
  );
  ss.initClass(
    ll,
    e,
    {
      $c: function () {
        return this.$2$1;
      },
      $d: function (a) {
        this.$2$1 = a;
      },
      $a: function () {
        return this.$2$2;
      },
      $b: function (a) {
        this.$2$2 = a;
      },
      toString: function () {
        return this.$g;
      },
      dispose: function () {
        this.$d(null);
        if (ss.isValue(this.$h)) {
          this.$h.$3(true);
        }
      },
      $6: function () {
        if (lN.$5()) {
          this.$7();
        } else {
          this.$8();
        }
      },
      $7: function () {
        var a = lN.$3();
        var b = new XMLHttpRequest();
        b.open("GET", this.$g, true);
        b.responseType = "arraybuffer";
        b.onload = ss.delegateCombine(
          b.onload,
          ss.mkdel(this, function (c) {
            if (b.status === 404) {
              this.$9();
              return;
            }
            a.decodeAudioData(
              ss.cast(b.response, ArrayBuffer),
              ss.mkdel(this, function (d) {
                this.$d(d);
                this.$0();
                ll.$6++;
              }),
              ss.mkdel(this, function () {
                this.$d(a.createBuffer(1, 44100, 44100));
                this.$0();
                ll.$6++;
              })
            );
          })
        );
        if (ss.isValue(this.$e)) {
          b.onerror = ss.delegateCombine(
            b.onerror,
            ss.mkdel(this, function (c) {
              this.$9();
            })
          );
        } else {
          b.onerror = ss.delegateCombine(
            b.onerror,
            ss.mkdel(this, function (c) {
              this.$d(null);
              this.$0();
            })
          );
        }
        b.send();
        ll.$7++;
      },
      $9: function () {
        if (ss.isValue(this.$e)) {
          this.$g = this.$e;
          this.$e = null;
          this.$7();
        }
      },
      $8: function () {
        this.$h = lB.$5.$1();
        this.$b(this.$h.$0());
        this.$a().src = this.$g;
        this.$a().setAttribute("preload", "auto");
        var a = this.$a();
        a.oncanplaythrough = ss.delegateCombine(
          a.oncanplaythrough,
          ss.mkdel(this, function (d) {
            this.$0();
          })
        );
        if (ss.isValue(this.$e)) {
          var b = this.$a();
          b.onerror = ss.delegateCombine(
            b.onerror,
            ss.mkdel(this, function (d) {
              this.$g = this.$e;
              this.$e = null;
              this.$8();
            })
          );
        } else {
          var c = this.$a();
          c.onerror = ss.delegateCombine(
            c.onerror,
            ss.mkdel(this, function (d) {
              this.$b(null);
              this.$0();
            })
          );
        }
      },
    },
    lj,
    [ss.IDisposable]
  );
  ss.initClass(
    ln,
    e,
    {
      $8: function () {
        return this.$2$1;
      },
      $9: function (a) {
        this.$2$1 = a;
      },
      toString: function () {
        return this.$8();
      },
      dispose: function () {},
      $6: function () {
        this.$c.fontStack = this.$8() + ", monospace";
        var c = 0;
        var d = 0;
        try {
          c = this.$c.measureWidth(
            "abcdwxyz āćď αβγ جبأ רשת กขฃ абв աբգ अइउ ぁぃぅ 丁丂七 ァィゥ அஇஉ აბგ 가각갂",
            100,
            0
          );
          d = this.$c.measureWidth(
            "abcdwxyz āćď αβγ جبأ רשת กขฃ абв աբգ अइउ ぁぃぅ 丁丂七 ァィゥ அஇஉ აბგ 가각갂",
            100,
            1
          );
        } catch (b) {
          var a = ss.Exception.wrap(b);
          this.$2(
            "FontAsset.CheckIfLoaded() | Family=" +
              this.$8() +
              " | " +
              a.get_message()
          );
          this.$7();
          return;
        }
        if (
          !ss.referenceEquals(this.$b, c.toFixed(3)) &&
          !ss.referenceEquals(this.$a, d.toFixed(3))
        ) {
          this.$7();
          return;
        }
        window.setTimeout(
          ss.mkdel(this, function () {
            this.$6();
          }),
          100
        );
      },
      $7: function () {
        this.$c = null;
        this.$0();
      },
    },
    lj,
    [ss.IDisposable]
  );
  ss.initClass(
    lp,
    e,
    {
      $9: function () {
        return this.$2$1;
      },
      $a: function (a) {
        this.$2$1 = a;
      },
      $7: function () {
        return this.$2$2;
      },
      $8: function (a) {
        this.$2$2 = a;
      },
      toString: function () {
        return this.$9();
      },
      dispose: function () {},
      $6: function (a) {
        this.$8(a);
        this.$0();
      },
    },
    lj,
    [ss.IDisposable]
  );
  ss.initClass(
    lr,
    e,
    {
      $7: function () {
        return this.$2$1;
      },
      $8: function (a) {
        this.$2$1 = a;
      },
      $9: function () {
        return this.$2$2;
      },
      $a: function (a) {
        this.$2$2 = a;
      },
      toString: function () {
        return this.$9();
      },
      dispose: function () {
        lB.$7.$2(this.$7());
      },
      $6: function (a) {
        this.$0();
      },
    },
    lj,
    [ss.IDisposable]
  );
  lr.$0.prototype = lr.prototype;
  ss.initClass(
    lt,
    e,
    {
      get_range: function () {
        return this.$1$1;
      },
      set_range: function (a) {
        this.$1$1 = a;
      },
      get_maxFontSize: function () {
        return this.$1$2;
      },
      set_maxFontSize: function (a) {
        this.$1$2 = a;
      },
      get_lineSpacing: function () {
        return this.$1$3;
      },
      set_lineSpacing: function (a) {
        this.$1$3 = a;
      },
      get_minAscent: function () {
        return this.$1$4;
      },
      set_minAscent: function (a) {
        this.$1$4 = a;
      },
      get_minDescent: function () {
        return this.$1$5;
      },
      set_minDescent: function (a) {
        this.$1$5 = a;
      },
    },
    null,
    [VEL.Skynet.Core.View.Helpers.IFontAdjustment]
  );
  ss.initClass(lv, e, {
    get_family: function () {
      return this.$1$1;
    },
    set_family: function (a) {
      this.$1$1 = a;
    },
    get_weight: function () {
      return this.$1$2;
    },
    set_weight: function (a) {
      this.$1$2 = a;
    },
    get_src: function () {
      return this.$1$3;
    },
    set_src: function (a) {
      this.$1$3 = a;
    },
    get_ranges: function () {
      return this.$1$4;
    },
    set_ranges: function (a) {
      this.$1$4 = a;
    },
  });
  ss.initClass(lx, e, {
    get_fontStacks: function () {
      return this.$1$1;
    },
    set_fontStacks: function (a) {
      this.$1$1 = a;
    },
    get_fontFaces: function () {
      return this.$1$2;
    },
    set_fontFaces: function (a) {
      this.$1$2 = a;
    },
    get_fontAdjustments: function () {
      return this.$1$3;
    },
    set_fontAdjustments: function (a) {
      this.$1$3 = a;
    },
    isFamilyIncluded: function (a, b) {
      var c = Enumerable.from(this.get_fontFaces()).first(function (d) {
        return ss.referenceEquals(d.get_family(), a);
      });
      if (
        ss.isNullOrUndefined(c.get_ranges()) ||
        !Enumerable.from(c.get_ranges()).any()
      ) {
        return true;
      }
      return Enumerable.from(c.get_ranges()).any(function (d) {
        return (b & d) !== 0;
      });
    },
    getFamilies: function (a) {
      var b = Enumerable.from(this.get_fontStacks()).firstOrDefault(function (
        c
      ) {
        return c.get_id() === a;
      },
      ss.getDefaultValue(lz));
      if (ss.isNullOrUndefined(b)) {
        throw new ss.ArgumentException(
          "Cannot find font stack ID " + a + ".",
          "fontStackId"
        );
      }
      return b.getNonGenericStackFamilies();
    },
  });
  ss.initClass(lz, e, {
    get_id: function () {
      return this.$1$1;
    },
    set_id: function (a) {
      this.$1$1 = a;
    },
    get_name: function () {
      return this.$1$2;
    },
    set_name: function (a) {
      this.$1$2 = a;
    },
    get_select: function () {
      return this.$1$3;
    },
    set_select: function (a) {
      this.$1$3 = a;
    },
    get_stack: function () {
      return this.$1$4;
    },
    set_stack: function (a) {
      this.$1$4 = a;
    },
    getAllStackFamilies: function () {
      return Enumerable.from(this.get_stack().split(String.fromCharCode(44)))
        .select(function (a) {
          return a.trim();
        })
        .toArray();
    },
    getNonGenericStackFamilies: function () {
      return Enumerable.from(this.getAllStackFamilies())
        .except(lv.genericFontFamilies)
        .toArray();
    },
  });
  ss.initClass(lB, e, {});
  ss.initClass(lH, e, {});
  ss.initClass(lJ, e, {
    $b: function () {
      return this.$i * this.$l * id.getLoopingSoundMasterVolume(this.$d());
    },
    $e: function () {
      return this.$c() ? 1 : 0;
    },
    $c: function () {
      return this.$j === 2;
    },
    $d: function () {
      return this.$g.$3;
    },
    $4: function () {
      this.$j = 0;
      this.$1();
      if (ss.isNullOrUndefined(this.$f)) {
        return;
      }
      this.$f.stop();
      this.$f = null;
    },
    $3: function (a, c, d, b) {
      this.$i = a;
      this.$2(2, b);
      if (ss.isNullOrUndefined(this.$f)) {
        this.$6(c, d);
      }
    },
    $5: function (a) {
      this.$k = this.$j;
      this.$9(a);
    },
    $7: function (a) {
      if (!ss.isValue(this.$k)) {
        return;
      }
      this.$2(ss.unbox(this.$k), a);
      this.$k = null;
    },
    $9: function (a) {
      this.$2(1, a);
    },
    $0: function () {
      this.$a();
    },
    $a: function () {
      if (ss.isNullOrUndefined(this.$f)) {
        return;
      }
      this.$f.setVolume(this.$b());
    },
    $2: function (a, m) {
      if (a === 0) {
        this.$4();
        return;
      }
      if (this.$j === a) {
        return;
      }
      this.$j = a;
      this.$1();
      var n = this.$l;
      var b = this.$e();
      if (n === b) {
        return;
      }
      var c = this.$c() ? n : 1 - n;
      var d = 1 - c;
      var f = this.$c() ? this.$g.$7() : this.$g.$8();
      var g = f * d;
      var h = g / 200;
      var i = h >= 1;
      if (!i) {
        this.$8(this.$e());
        return;
      }
      var j = (1 - c) / h;
      var k = new VEL.Skynet.Core.Toolbox.Threading.ThreadManager(
        m,
        200,
        ss.Int32.trunc(h),
        false,
        false
      );
      k.execute = ss.mkdel(this, function (o) {
        var p = c + (o + 1) * j;
        var q = this.$c() ? p : 1 - p;
        this.$8(q);
      });
      k.completed = ss.mkdel(this, function () {
        this.$8(this.$e());
      });
      var l = k;
      l.start();
      this.$h = l;
    },
    $6: function (a, b) {
      if (this.$j === 0) {
        this.$4();
        return;
      }
      var c = this.$g.$1();
      if (ss.isValue(c)) {
        this.$f = c;
        c.play(
          this.$b(),
          a,
          b,
          ss.mkdel(this, function () {
            this.$6(a, b);
          })
        );
      } else {
        b1.error("sound not loaded");
      }
    },
    $8: function (a) {
      if (a === this.$l) {
        return;
      }
      this.$l = a;
      this.$a();
      if (this.$l === this.$e()) {
        this.$1();
      }
    },
    $1: function () {
      if (ss.isNullOrUndefined(this.$h)) {
        return;
      }
      this.$h.stop();
      this.$h = null;
    },
  });
  ss.initEnum(lL, e, { $0: 0, $1: 1, $2: 2 });
  ss.initClass(lN, e, {});
  ss.initInterface(h5, e, { get_forceRendering: null });
  ss.initInterface(
    ib,
    e,
    {
      play: null,
      setVolume: null,
      get_isLoaded: null,
      stop: null,
      get_src: null,
    },
    [h5]
  );
  ss.initClass(
    i8,
    e,
    {
      get_isLoaded: null,
      get_src: function () {
        return this.source;
      },
      get_forceRendering: function () {
        return false;
      },
      play: null,
      setVolume: null,
      stop: null,
    },
    null,
    [h5, ib]
  );
  ss.initClass(
    lP,
    e,
    {
      stop: function () {
        this.$0.pause();
        this.$0.currentTime = 0;
      },
      get_isLoaded: function () {
        if (ss.isNullOrUndefined(this.$0)) {
          this.$0 = i7.getAudioElement(this.source);
        }
        return ss.isValue(this.$0) && this.$0.readyState === 4;
      },
      play: function (a, d, f, b) {
        if (ss.isNullOrUndefined(this.$0)) {
          this.$0 = i7.getAudioElement(this.source);
        }
        if (!this.get_isLoaded()) {
          b1.error("sound not loaded " + this.source);
          return;
        }
        try {
          this.$0.volume = a * this.volume;
          this.$0.onended = ss.delegateCombine(
            this.$0.onended,
            ss.mkdel(this, function (g) {
              if (this.isLooping) {
                if (ss.isValue(this.$0)) {
                  this.$0.play();
                }
              } else {
                if (!ss.staticEquals(b, null)) {
                  b();
                }
              }
            })
          );
          this.stop();
          this.$0.play();
        } catch (c) {}
      },
      setVolume: function (a) {
        if (ss.isValue(this.$0)) {
          this.$0.volume = a * this.volume;
        }
      },
    },
    i8,
    [h5, ib]
  );
  ss.initClass(aa, e, {
    $1: function () {
      if (this.$5) {
        var a = Enumerable.from(this.$6)
          .where(function (g) {
            return g.get_isLoaded();
          })
          .toArray();
        if (a.length > 0) {
          var d = aa.$0.nextMax(a.length);
          var f = a[d];
          return f;
        }
      } else {
        for (var b = 0; b < this.$6.length; b++) {
          var c = this.$6[this.$4];
          this.$4 = (this.$4 + 1) % this.$6.length;
          if (c.get_isLoaded()) {
            return c;
          }
        }
      }
      return null;
    },
    $0: function () {
      return this.$6;
    },
    $2: function () {
      return Enumerable.from(this.$6).any();
    },
  });
  aa.$1.prototype = aa.prototype;
  ss.initClass(
    ac,
    e,
    {
      $7: function () {
        return this.$9;
      },
      $8: function () {
        return this.$a;
      },
    },
    aa
  );
  ss.initClass(
    a5,
    e,
    {
      get_isLoaded: function () {
        this.$0 = this.$0 || i7.getAudioBuffer(this.source);
        return ss.isValue(this.$0);
      },
      stop: function () {
        if (ss.isValue(this.$1)) {
          try {
            this.$1.stop();
          } catch (a) {}
        }
      },
      play: function (a, c, d, b) {
        lN.$2(
          ss.mkdel(this, function () {
            this.$0 = this.$0 || i7.getAudioBuffer(this.source);
            if (ss.isValue(this.$0)) {
              this.$1 = this.$2.createBufferSource();
              this.$1.buffer = this.$0;
              this.$1.loop = this.isLooping;
              this.$3 = this.$2.createGain();
              this.$3.connect(this.$2.destination);
              this.$3.gain.value = a * this.volume;
              if (ss.isValue(d) && !isNaN(ss.unbox(d))) {
                var f = this.$2.createPanner();
                this.$1.connect(f);
                f.connect(this.$3);
                f.coneOuterGain = 1;
                f.coneOuterAngle = 360;
                f.coneInnerAngle = 360;
                f.setOrientation(0, 0, -1);
                f.setPosition(ss.unbox(d), 0, 1);
                this.$2.listener.setPosition(0, 0, 0);
              } else {
                this.$1.connect(this.$3);
              }
              if (ss.isValue(c) || ss.isValue(this.$4)) {
                var g = this.$1.playbackRate;
                var h = c;
                if (ss.isNullOrUndefined(h)) {
                  h = this.$4;
                }
                g.value = ss.unbox(h);
              }
              this.$1.onended = function (i) {
                a5.$0++;
                if (!ss.staticEquals(b, null)) {
                  b();
                }
              };
              this.$1.start(0);
            } else {
              if (!ss.staticEquals(b, null)) {
                b();
              }
            }
          })
        );
      },
      setVolume: function (a) {
        if (ss.isValue(this.$3)) {
          this.$3.gain.value = a * this.volume;
        }
      },
    },
    i8,
    [h5, ib]
  );
  ss.initClass(f9, e, {});
  ss.initClass(id, e, {});
  ss.initClass(j0, e, {});
  ss.initClass(
    kS,
    e,
    {
      $2: function () {
        return this.$1$1;
      },
      $3: function (a) {
        this.$1$1 = a;
      },
      getTileSize: function (a) {
        return this.$a.$7(a);
      },
      getContentDefinedSize: function (a) {
        return this.$a.$5(a);
      },
      getSpriteSize: function (a) {
        return this.$9.$5(a);
      },
      measureTile: function (a, b) {
        return this.$a.$8(a, b);
      },
      getTileMeasurer: function (a) {
        return this.$a.$6(a);
      },
      getLabelMeasurer: function (a) {
        if (ss.isNullOrUndefined(this.$6)) {
          throw new a4("Missing label builder");
        }
        return this.$6.$g();
      },
      getImageMargin: function (a) {
        var b = ss
          .cast(a, VEL.Skynet.Core.View.ObjectDatas.Image.ImageData)
          .get_type();
        return this.$5.$5(b);
      },
      getPlacePadding: function (a) {
        return this.$8.$5(a);
      },
      getPadding: function (a) {
        return VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty();
      },
      $1: function (a) {
        ss.clear(this.$2());
        lB.$8.dispose();
        var d = a.get_objects();
        for (var f = 0; f < d.length; f++) {
          var b = d[f];
          var c = this.build(b);
          if (ss.isValue(c)) {
            b.control = c;
            this.$2().push(ss.cast(c, ki));
          }
        }
      },
      build: function (a) {
        if (
          ss.isInstanceOfType(
            a,
            VEL.Skynet.Core.View.ObjectDatas.Tile.TileData
          )
        ) {
          return this.$a.$1(
            ss.cast(a, VEL.Skynet.Core.View.ObjectDatas.Tile.TileData)
          );
        }
        if (
          ss.isInstanceOfType(
            a,
            VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteData
          )
        ) {
          return this.$9.$1(
            ss.cast(a, VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteData)
          );
        }
        if (
          ss.isInstanceOfType(
            a,
            VEL.Skynet.Core.View.ObjectDatas.Place.PlaceData
          )
        ) {
          return this.$8.$1(
            ss.cast(a, VEL.Skynet.Core.View.ObjectDatas.Place.PlaceData)
          );
        }
        if (
          ss.isInstanceOfType(
            a,
            VEL.Skynet.Core.View.ObjectDatas.Label.LabelData
          ) &&
          ss.isValue(this.$6)
        ) {
          return this.$6.$d(
            ss.cast(a, VEL.Skynet.Core.View.ObjectDatas.Label.LabelData)
          );
        }
        if (
          ss.isInstanceOfType(
            a,
            VEL.Skynet.Core.View.ObjectDatas.Image.ImageData
          )
        ) {
          return this.$5.$1(
            ss.cast(a, VEL.Skynet.Core.View.ObjectDatas.Image.ImageData)
          );
        }
        if (
          ss.isInstanceOfType(
            a,
            VEL.Skynet.Core.View.ObjectDatas.Conveyor.ConveyorData
          ) &&
          ss.isValue(this.$4)
        ) {
          return this.$4.$d(
            ss.cast(a, VEL.Skynet.Core.View.ObjectDatas.Conveyor.ConveyorData)
          );
        }
        if (
          ss.isInstanceOfType(
            a,
            VEL.Skynet.Core.View.ObjectDatas.Mosaic.MosaicData
          ) &&
          ss.isValue(this.$7)
        ) {
          return this.$7.$d(
            ss.cast(a, VEL.Skynet.Core.View.ObjectDatas.Mosaic.MosaicData)
          );
        }
        throw new ss.NotImplementedException();
      },
      $0: function (a, c, d) {
        ss.clear(c.get_objects());
        ss.clear(this.$2());
        lB.$8.dispose();
        var b = j0.$4(a);
        if (ss.isValue(b)) {
          b.control = this.build(b);
          c.get_objects().push(b);
          this.$2().push(ss.cast(b.control, ki));
          j0.$2(b.control, d);
        }
        return b;
      },
    },
    null,
    [VEL.Skynet.Core.View.IViewModelBuilder]
  );
  ss.initClass(li, e, {
    get_name: function () {
      return this.$1$1;
    },
    set_name: function (a) {
      this.$1$1 = a;
    },
    get_isForced: function () {
      return this.$1$2;
    },
    set_isForced: function (a) {
      this.$1$2 = a;
    },
    get_resourceName: function () {
      return this.$1$3;
    },
    set_resourceName: function (a) {
      this.$1$3 = a;
    },
    get_delay: function () {
      return this.$1$4;
    },
    set_delay: function (a) {
      this.$1$4 = a;
    },
    get_shape: function () {
      return this.$1$5;
    },
    set_shape: function (a) {
      this.$1$5 = a;
    },
  });
  ss.initEnum(lk, e, { None: 0, PaletteIndex: 1, BuildIndex: 2 });
  ss.initClass(lm, e, {});
  ss.initClass(
    ls,
    e,
    {
      $0: function (a) {
        var b = this.$3(a);
        return new ac(
          b,
          this.$1().get_shuffle(),
          this.$1().get_fadeInTime(),
          this.$1().get_fadeOutTime(),
          this.$1().get_muteMode()
        );
      },
    },
    ss.makeGenericType(lq, [lI, ac])
  );
  ss.initClass(
    lu,
    e,
    {
      $0: function (a) {
        var b = f9.$0(this.$1().get_src(), this.$1().get_volume(), null, true);
        return new aa(b);
      },
    },
    ss.makeGenericType(lo, [lK, aa])
  );
  ss.initClass(
    lw,
    e,
    {
      $0: function (a) {
        if (
          ss.isValue(this.$1().get_animation()) &&
          this.$1().get_type() !== 0
        ) {
          throw new a4("Sounds Animation+Type");
        }
        var b = this.$3(a);
        return new aa.$1(b, this.$1().get_shuffle(), this.$1().get_muteMode());
      },
    },
    ss.makeGenericType(lq, [lQ, aa])
  );
  ss.initClass(ly, e, {
    $0: function () {
      return this.$1$1;
    },
    $1: function (a) {
      this.$1$1 = a;
    },
  });
  ss.initClass(lA, e, {
    $2: function () {
      return this.$1$1;
    },
    $3: function (a) {
      this.$1$1 = a;
    },
    $0: function () {
      return this.$1$2;
    },
    $1: function (a) {
      this.$1$2 = a;
    },
  });
  ss.initClass(lC, e, {
    get_src: function () {
      return this.$1$1;
    },
    set_src: function (a) {
      this.$1$1 = a;
    },
    get_volume: function () {
      return this.$1$2;
    },
    set_volume: function (a) {
      this.$1$2 = a;
    },
  });
  ss.initClass(
    lE,
    e,
    {
      get_children: function () {
        return this.$1$1;
      },
      set_children: function (a) {
        this.$1$1 = a;
      },
    },
    null,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [lC])]
  );
  ss.initClass(
    lG,
    e,
    {
      get_shuffle: function () {
        return this.$2$1;
      },
      set_shuffle: function (a) {
        this.$2$1 = a;
      },
      get_animation: function () {
        return this.$2$2;
      },
      set_animation: function (a) {
        this.$2$2 = a;
      },
      get_children: function () {
        return this.$2$3;
      },
      set_children: function (a) {
        this.$2$3 = a;
      },
      get_muteMode: function () {
        return this.$2$4;
      },
      set_muteMode: function (a) {
        this.$2$4 = a;
      },
    },
    lC,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [lO])]
  );
  ss.initClass(
    lI,
    e,
    {
      get_type: function () {
        return this.$3$1;
      },
      set_type: function (a) {
        this.$3$1 = a;
      },
      get_fadeInTime: function () {
        return this.$3$2;
      },
      set_fadeInTime: function (a) {
        this.$3$2 = a;
      },
      get_fadeOutTime: function () {
        return this.$3$3;
      },
      set_fadeOutTime: function (a) {
        this.$3$3 = a;
      },
    },
    lG,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [lO])]
  );
  ss.initClass(
    lK,
    e,
    {
      get_type: function () {
        return this.$2$1;
      },
      set_type: function (a) {
        this.$2$1 = a;
      },
      get_scene: function () {
        return this.$2$2;
      },
      set_scene: function (a) {
        this.$2$2 = a;
      },
    },
    lC
  );
  ss.initEnum(lM, e, { Sound: 0, Music: 1 });
  ss.initClass(lO, e, {
    get_src: function () {
      return this.$1$1;
    },
    set_src: function (a) {
      this.$1$1 = a;
    },
    get_volume: function () {
      return this.$1$2;
    },
    set_volume: function (a) {
      this.$1$2 = a;
    },
    get_pitch: function () {
      return this.$1$3;
    },
    set_pitch: function (a) {
      this.$1$3 = a;
    },
    get_scene: function () {
      return this.$1$4;
    },
    set_scene: function (a) {
      this.$1$4 = a;
    },
    get_playbackRate: function () {
      return this.get_pitch() !== 0
        ? Math.pow(2, this.get_pitch() / 1200)
        : null;
    },
  });
  ss.initClass(
    lQ,
    e,
    {
      get_type: function () {
        return this.$3$1;
      },
      set_type: function (a) {
        this.$3$1 = a;
      },
    },
    lG,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [lO])]
  );
  ss.initClass(
    af,
    e,
    {
      $1: function (a) {
        return this.$4(a.get_type()).$d(a);
      },
      $5: function (a) {
        return this.$4(a).$b().get_margin();
      },
      $4: function (a) {
        var b = Enumerable.from(this.$2).firstOrDefault(function (c) {
          return c.$b().get_type() === a;
        }, ss.getDefaultValue(aG));
        if (ss.isNullOrUndefined(b)) {
          throw new VEL.Skynet.Core.Behaviours.Build.BuildException.$ctor1(
            "Image." +
              ss.Enum.getName(
                VEL.Skynet.Core.View.ObjectDatas.ImageTypeEnum,
                a
              ) +
              " builder not found"
          );
        }
        return b;
      },
    },
    ss.makeGenericType(ad, [
      aG,
      VEL.Skynet.Core.View.ObjectDatas.Image.ImageData,
    ])
  );
  ss.initClass(
    ah,
    e,
    {
      $1: function (a) {
        return this.$4(a.spriteType).$d(a);
      },
      $5: function (a) {
        return this.$4(a).$g();
      },
      $4: function (a) {
        var c = Enumerable.from(this.$2).firstOrDefault(function (f) {
          return f.$b().get_type() === a;
        }, ss.getDefaultValue(aC));
        if (ss.isNullOrUndefined(c) || c.$a()) {
          if (
            VEL.Skynet.Core.View.Helpers.ObjectDataTypeEnumExtensions.isOptional$2(
              a
            )
          ) {
            var d = new a0();
            d.set_type(a);
            var b = d;
            c = new aC(b);
            this.$2.push(c);
            return c;
          }
          throw new VEL.Skynet.Core.Behaviours.Build.BuildException.$ctor1(
            "Sprite." +
              ss.Enum.getName(
                VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteEnum,
                a
              ) +
              " builder not found"
          );
        }
        return c;
      },
    },
    ss.makeGenericType(ad, [
      aC,
      VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteData,
    ])
  );
  ss.initClass(
    aj,
    e,
    {
      $1: function (a) {
        return this.$4(a.get_placeStyle()).$d(a);
      },
      $5: function (a) {
        var b = Enumerable.from(this.$2).firstOrDefault(function (c) {
          return c.$b().get_type() === a;
        }, ss.getDefaultValue(aI));
        if (ss.isNullOrUndefined(b)) {
          return VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty();
        }
        return this.$4(a).$b().get_padding();
      },
      $4: function (a) {
        var b = Enumerable.from(this.$2).firstOrDefault(function (d) {
          return d.$b().get_type() === a;
        }, ss.getDefaultValue(aI));
        if (ss.isNullOrUndefined(b) || b.$a()) {
          if (
            VEL.Skynet.Core.View.Helpers.ObjectDataTypeEnumExtensions.isOptional$1(
              a
            )
          ) {
            var c = new aY();
            c.set_type(a);
            b = new aI(c);
            this.$0(b);
            return b;
          }
          throw new a4(
            "Place." +
              ss.Enum.getName(
                VEL.Skynet.Core.View.ObjectDatas.Place.PlaceEnum,
                a
              ) +
              " builder not found"
          );
        }
        return b;
      },
    },
    ss.makeGenericType(ad, [
      aI,
      VEL.Skynet.Core.View.ObjectDatas.Place.PlaceData,
    ])
  );
  ss.initClass(
    al,
    e,
    {
      $1: function (a) {
        return this.$4(a.shape, false).$d(a);
      },
      $7: function (a) {
        return Enumerable.from(this.$4(a, false).$h()).first().$j();
      },
      $8: function (a, b) {
        return Enumerable.from(this.$4(a.shape, false).$h()).first().$i(a, b);
      },
      $6: function (a) {
        return Enumerable.from(this.$4(a, true).$h()).first().$h();
      },
      $5: function (a) {
        return Enumerable.from(this.$4(13, false).$h()).first().$f(a);
      },
      $4: function (a, b) {
        var c = Enumerable.from(this.$2).firstOrDefault(function (d) {
          return d.$b().get_shape() === a;
        }, ss.getDefaultValue(aA));
        if (ss.isNullOrUndefined(c)) {
          if (b) {
            return Enumerable.from(this.$2).first();
          }
          throw new VEL.Skynet.Core.Behaviours.Build.BuildException.$ctor1(
            "Tile." +
              ss.Enum.getName(
                VEL.Skynet.Core.View.ObjectDatas.TileShapeEnum,
                a
              ) +
              " builder not found"
          );
        }
        return c;
      },
    },
    ss.makeGenericType(ad, [
      aA,
      VEL.Skynet.Core.View.ObjectDatas.Tile.TileData,
    ])
  );
  ss.initClass(an, e, {
    $a: function () {
      return false;
    },
    $8: function () {
      return this.$1$1;
    },
    $9: function (a) {
      this.$1$1 = a;
    },
    $6: function () {
      return this.$1$2;
    },
    $7: function (a) {
      this.$1$2 = a;
    },
    $2: function () {
      return this.$1$3;
    },
    $3: function (a) {
      this.$1$3 = a;
    },
    $4: function () {
      return this.$1$4;
    },
    $5: function (a) {
      this.$1$4 = a;
    },
    $0: function (a) {
      if (this.$a()) {
        throw new ss.InvalidOperationException();
      }
      this.$5(a);
    },
    $1: null,
  });
  ss.initClass(
    ar,
    e,
    {
      $h: function () {
        return this.$4$1;
      },
      $i: function (a) {
        this.$4$1 = a;
      },
      $j: function () {
        return this.$4$2;
      },
      $k: function (a) {
        this.$4$2 = a;
      },
      $d: function (a) {
        var d = ss.isValue(this.$8()) ? this.$8().$4(true) : null;
        var f = new g6(d, this.$h(), this.$j(), this.$g());
        var b = this.$e(a);
        var c = new ks(
          a,
          f,
          this.$b().get_appearTrigger(),
          this.$b().get_zLayer(),
          this.$b().get_clipping(),
          b,
          this.$1()
        );
        this.$f(c);
        c.$C(this.$l++);
        return c;
      },
      $g: function () {
        if (ss.isNullOrUndefined(this.$m)) {
          this.$m = new h1.$i(this.$h());
        }
        var a = new VEL.Skynet.Core.View.LabelMeasurer();
        a.measurer = ss.mkdel(this.$m, this.$m.measureSize);
        a.maxFontSize = this.$h().get_fontSize();
        return a;
      },
    },
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Label.LabelData,
      ks,
      aS,
    ])
  );
  ss.initClass(
    au,
    e,
    {
      $k: function () {
        return this.$3$1;
      },
      $l: function (a) {
        this.$3$1 = a;
      },
      $d: function (a, j, k) {
        var b = ss.isValue(this.$8()) ? this.$8().$4(true) : null;
        var c = new hy(b, this.$b().get_margin(), this.$m(), this.$k());
        var d = this.$e(a, j);
        var f;
        switch (a.shape) {
          case 11:
            f = new kE(
              ss.cast(
                a,
                VEL.Skynet.Core.View.ObjectDatas.Tile.SegmentTileData
              ),
              c,
              j,
              k,
              d,
              this.$b().get_clipping(),
              this.$b().get_appearTrigger(),
              this.$b().get_zLayer(),
              this.$1()
            );
            break;
          case 13:
            if (ss.isNullOrUndefined(a.targeter)) {
              var g = this.$f(a);
              var h =
                new VEL.Skynet.Core.View.Layouts.Targeters.TileTargeter();
              h.actualWidth = g.width;
              h.actualHeight = g.height;
              var i = new VEL.Skynet.Core.View.TileMeasurement();
              i.fontSize = 100;
              h.set_tileMeasurement(i);
              h.set_canTarget(false);
              a.targeter = h;
            }
            f = new kG(
              a,
              c,
              j,
              k,
              this.$b().get_mirrorBack(),
              d,
              this.$b().get_margin(),
              this.$b().get_clipping(),
              this.$b().get_appearTrigger(),
              this.$b().get_zLayer(),
              this.$1()
            );
            break;
          default:
            f = new kG(
              a,
              c,
              j,
              k,
              this.$b().get_mirrorBack(),
              d,
              this.$b().get_margin(),
              this.$b().get_clipping(),
              this.$b().get_appearTrigger(),
              this.$b().get_zLayer(),
              this.$1()
            );
            break;
        }
        f.$0(this.$6());
        f.set_translateX(this.$b().get_x());
        f.set_translateY(this.$b().get_y());
        return f;
      },
      $j: function () {
        return VEL.Skynet.Core.Toolbox.Geometry.Size.op_Addition(
          this.$m(),
          this.$b().get_margin()
        );
      },
      $m: function () {
        return new VEL.Skynet.Core.Toolbox.Geometry.Size.$ctor1(
          this.$b().get_width(),
          this.$b().get_height(),
          this.$b().get_aspectRatio()
        );
      },
      $i: function (a, p) {
        var q = {};
        var b = ss.getHashCode(a) + "_" + ss.round(ss.coalesce(p, 0), 2);
        if (a.get_isSizeDynamic()) {
          b +=
            "_" +
            ss.round(ss.coalesce(a.targeter.actualWidth, 0)) +
            "_" +
            ss.round(ss.coalesce(a.targeter.actualHeight, 0));
        }
        if (this.$n.tryGetValue(b, q)) {
          return q.$;
        }
        q.$ = new VEL.Skynet.Core.View.TileMeasurement();
        if (!a.primaryText.get_isEmpty() || ss.isValue(a.primaryImage)) {
          if (ss.isNullOrUndefined(this.$k())) {
            throw new a4.$ctor1("No ContentPanel", a);
          }
          var c = this.$g(a);
          if (!a.primaryText.get_isEmpty()) {
            var d = this.$k().$1(
              c,
              a,
              0,
              true,
              ss.isNullOrUndefined(a.primaryImage)
            );
            if (d.width < 0 || d.height < 0) {
              q.$.fontSize = 0;
              q.$.imageSize = 0;
              this.$n.set_item(b, q.$);
              return q.$;
            }
            var f = this.$k().$7().$8();
            var g = new h1.$i(f);
            var h = f.get_fontSize();
            if (ss.isValue(p)) {
              h = Math.min(ss.unbox(p), h);
            }
            var i = a.primaryText;
            var j = ss.mkdel(g, g.measureSize);
            var k = new VEL.Skynet.Core.View.Helpers.TypeSetterOptions();
            k.maxFontSize = h;
            var l = VEL.Skynet.Core.View.Helpers.TypeSetter.arrange(
              i,
              d,
              j,
              k
            );
            q.$.fontSize = l.fontSize;
          }
          if (ss.isValue(a.primaryImage)) {
            var m = this.$k().$1(c, a, 0, false, a.primaryText.get_isEmpty());
            var n = a.primaryImage.get_aspectRatio();
            var o = m.fitByAspectRatio(n, 1);
            q.$.imageSize = o.get_sqrtArea();
          }
        }
        this.$n.set_item(b, q.$);
        return q.$;
      },
      $g: function (a) {
        if (a.shape === 13) {
          return new VEL.Skynet.Core.Toolbox.Geometry.Size(
            600,
            this.$m().height
          );
        }
        if (a.get_isSizeDynamic()) {
          return new VEL.Skynet.Core.Toolbox.Geometry.Size(
            ss.unbox(a.targeter.actualWidth),
            ss.unbox(a.targeter.actualHeight)
          );
        }
        return this.$m();
      },
      $f: function (a) {
        var h = this.$k().$7();
        var i = new h1.$i(h.$8());
        var b = this.$k().$1(
          new VEL.Skynet.Core.Toolbox.Geometry.Size(600, this.$m().height),
          a,
          0,
          true,
          false
        );
        var c = a.primaryText;
        var d = ss.mkdel(i, i.measureSize);
        var f = new VEL.Skynet.Core.View.Helpers.TypeSetterOptions();
        f.maxFontSize = h.$8().get_fontSize();
        var g = VEL.Skynet.Core.View.Helpers.TypeSetter.arrange(c, b, d, f);
        return VEL.Skynet.Core.Toolbox.Geometry.Size.op_Addition(
          new VEL.Skynet.Core.Toolbox.Geometry.Size(
            g.actualBounds.get_width() +
              h.$c().get_margin().get_left() +
              h.$c().get_margin().get_right() +
              this.$k().$b().get_margin().get_left() +
              this.$k().$b().get_margin().get_right(),
            this.$m().height
          ),
          this.$b().get_margin()
        );
      },
      $h: function () {
        if (ss.isNullOrUndefined(this.$k())) {
          return null;
        }
        var a = this.$k().$7().$8();
        var b = new h1.$i(a);
        return ss.mkdel(b, b.measureSize);
      },
      $e: function (a, f) {
        var g = [];
        if (ss.isNullOrUndefined(this.$2())) {
          return g;
        }
        var b = this.$2();
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          ss.arrayAddRange(g, d.$0(a, f));
        }
        return g;
      },
    },
    ss.makeGenericType(ap, [aO])
  );
  ss.initClass(
    ay,
    e,
    {
      $g: function () {
        return this.$4$1;
      },
      $h: function (a) {
        this.$4$1 = a;
      },
      $d: function (a) {
        var c = ss.isValue(this.$8()) ? this.$8().$4(true) : null;
        var d = new g4(
          c,
          a.get_image(),
          this.$b().get_count(),
          this.$b().get_gap(),
          this.$g()
        );
        var b = new kk(
          a,
          d,
          this.$b().get_appearTrigger(),
          this.$b().get_zLayer(),
          this.$b().get_clipping(),
          this.$1()
        );
        this.$f(b);
        return b;
      },
    },
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Mosaic.MosaicData,
      kk,
      aU,
    ])
  );
  ss.initClass(
    aA,
    e,
    {
      $h: function () {
        return this.$4$1;
      },
      $i: function (a) {
        this.$4$1 = a;
      },
      $d: function (a) {
        var j = a.paletteIndex;
        if (ss.isNullOrUndefined(j)) {
          j = this.$j;
        }
        a.paletteIndex = j;
        if (ss.isValue(this.$8())) {
          throw new a4("Graphics must be inside Face");
        }
        var k = a.sided === 0 ? 1 : 2;
        var b = [];
        var c = this.$g(a, 0);
        var d = null;
        if (k === 2) {
          d = this.$g(a, 1);
          b.push(d);
        }
        b.push(c);
        var f = this.$e(a);
        if (ss.isValue(f)) {
          ss.arrayAddRange(b, f);
        }
        var g;
        if (c.$18 !== 4) {
          g = c.$18;
        } else {
          if (this.$b().get_appearTrigger() !== 4) {
            g = this.$b().get_appearTrigger();
          } else {
            g = 2;
          }
        }
        var h;
        switch (a.shape) {
          case 15:
          case 12:
            h = 1;
            break;
          default:
            h = 0;
            break;
        }
        var i;
        switch (a.shape) {
          case 11:
            i = new kA(
              ss.cast(
                a,
                VEL.Skynet.Core.View.ObjectDatas.Tile.SegmentTileData
              ),
              g,
              ss.cast(c, kE),
              ss.cast(d, kE),
              this.$b().get_clipping(),
              b,
              this.$1()
            );
            break;
          default:
            i = new ky(
              a,
              g,
              c,
              d,
              this.$b().get_clipping(),
              h,
              this.$b().get_collisionMargin(),
              b,
              this.$1()
            );
            break;
        }
        this.$f(i);
        i.$C(this.$j++);
        return i;
      },
      $a: function () {
        return this.$b().get_shape() === 0;
      },
      $g: function (a, c) {
        var d;
        var b;
        if (a.sided === 3 || a.sided === 4) {
          b = (c === 1) === (a.sided === 3) ? 2 : 0;
          d =
            Enumerable.from(this.$h()).firstOrDefault(function (f) {
              return f.$b().get_type() === b;
            }, ss.getDefaultValue(au)) ||
            Enumerable.from(this.$h()).firstOrDefault(function (f) {
              return f.$b().get_type() === 0;
            }, ss.getDefaultValue(au));
        } else {
          b = c === 0 || a.sided === 2 ? 0 : 1;
          d = Enumerable.from(this.$h()).firstOrDefault(function (f) {
            return f.$b().get_type() === b;
          }, ss.getDefaultValue(au));
        }
        if (ss.isNullOrUndefined(d)) {
          throw new a4.$ctor1("Cant build face", a);
        }
        return d.$d(a, c, b);
      },
    },
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Tile.TileData,
      ky,
      a2,
    ])
  );
  ss.initClass(
    aC,
    e,
    {
      $a: function () {
        return this.$b().get_type() === 0;
      },
      $d: function (a) {
        var c = this.$e(a);
        var d = ss.isValue(this.$8()) ? this.$8().$4(true) : null;
        var b = new km(
          a,
          d,
          this.$g(),
          this.$b().get_appearTrigger(),
          c,
          this.$b().get_zLayer(),
          this.$1()
        );
        this.$f(b);
        b.$C(this.$h++);
        return b;
      },
      $g: function () {
        return new VEL.Skynet.Core.Toolbox.Geometry.Size.$ctor1(
          this.$b().get_width(),
          this.$b().get_height(),
          this.$b().get_aspectRatio()
        );
      },
    },
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteData,
      km,
      a0,
    ])
  );
  ss.initClass(
    aE,
    e,
    {
      $d: function (a) {
        if (ss.isValue(this.$8())) {
          throw new a4("Graphics must be inside Decoration");
        }
        var b = this.$e(a);
        var c = new ko(
          a,
          b,
          this.$b().get_appearTrigger(),
          this.$b().get_zLayer(),
          this.$b().get_clipping(),
          this.$1()
        );
        this.$f(c);
        return c;
      },
    },
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Conveyor.ConveyorData,
      ko,
      aM,
    ])
  );
  ss.initClass(
    aG,
    e,
    {
      $g: function () {
        return this.$4$1;
      },
      $h: function (a) {
        this.$4$1 = a;
      },
      $d: function (a) {
        var d = ss.isValue(this.$8()) ? this.$8().$4(true) : null;
        var f = this.$e(a);
        var b = new g8(d, a.get_image(), this.$g(), this.$b().get_clipCorner());
        var c = new kq(
          a,
          b,
          this.$b().get_margin(),
          this.$b().get_appearTrigger(),
          this.$b().get_zLayer(),
          this.$b().get_clipping(),
          f,
          this.$1()
        );
        this.$f(c);
        return c;
      },
    },
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Image.ImageData,
      kq,
      aQ,
    ])
  );
  ss.initClass(
    aI,
    e,
    {
      $a: function () {
        return this.$b().get_type() === 0;
      },
      $d: function (a) {
        this.$b().set_margin(
          this.$b().get_margin() ||
            VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty()
        );
        var f = this.$b().get_type() === 8 ? 1 : 0;
        var g =
          this.$b().get_type() === 8
            ? new VEL.Skynet.Core.Toolbox.Geometry.Margin(36)
            : null;
        var b = ss.isValue(this.$8()) ? this.$8().$4(true) : null;
        var c = this.$e(a);
        var d = new ku(
          a,
          b,
          this.$b().get_padding(),
          this.$b().get_margin(),
          this.$b().get_appearTrigger(),
          this.$b().get_clipping(),
          c,
          this.$b().get_zLayer(),
          true,
          f,
          g,
          this.$1()
        );
        this.$f(d);
        d.$C(this.$g++);
        return d;
      },
    },
    ss.makeGenericType(aw, [
      VEL.Skynet.Core.View.ObjectDatas.Place.PlaceData,
      ku,
      aY,
    ])
  );
  ss.initEnum(aK, e, { None: 0, Bounds: 1, Bottom: 2 });
  ss.initClass(aW, e, {
    get_graphics: function () {
      return this.$1$1;
    },
    set_graphics: function (a) {
      this.$1$1 = a;
    },
    get_eventTriggers: function () {
      return this.$1$2;
    },
    set_eventTriggers: function (a) {
      this.$1$2 = a;
    },
    get_decorations: function () {
      return this.$1$3;
    },
    set_decorations: function (a) {
      this.$1$3 = a;
    },
    get_appearTrigger: function () {
      return this.$1$4;
    },
    set_appearTrigger: function (a) {
      this.$1$4 = a;
    },
    get_clipping: function () {
      return this.$1$5;
    },
    set_clipping: function (a) {
      this.$1$5 = a;
    },
    get_zLayer: function () {
      return this.$1$6;
    },
    set_zLayer: function (a) {
      this.$1$6 = a;
    },
    get_binding: function () {
      return this.$1$7;
    },
    set_binding: function (a) {
      this.$1$7 = a;
    },
  });
  ss.initClass(aM, e, {}, aW);
  ss.initClass(
    aO,
    e,
    {
      get_type: function () {
        return this.$2$1;
      },
      set_type: function (a) {
        this.$2$1 = a;
      },
      get_width: function () {
        return this.$2$2;
      },
      set_width: function (a) {
        this.$2$2 = a;
      },
      get_height: function () {
        return this.$2$3;
      },
      set_height: function (a) {
        this.$2$3 = a;
      },
      get_aspectRatio: function () {
        return this.$2$4;
      },
      set_aspectRatio: function (a) {
        this.$2$4 = a;
      },
      get_x: function () {
        return this.$2$5;
      },
      set_x: function (a) {
        this.$2$5 = a;
      },
      get_y: function () {
        return this.$2$6;
      },
      set_y: function (a) {
        this.$2$6 = a;
      },
      get_margin: function () {
        return this.$2$7;
      },
      set_margin: function (a) {
        this.$2$7 = a;
      },
      get_mirrorBack: function () {
        return this.$2$8;
      },
      set_mirrorBack: function (a) {
        this.$2$8 = a;
      },
      get_contentPanel: function () {
        return this.$2$9;
      },
      set_contentPanel: function (a) {
        this.$2$9 = a;
      },
    },
    aW
  );
  ss.initClass(
    aQ,
    e,
    {
      get_type: function () {
        return this.$2$1;
      },
      set_type: function (a) {
        this.$2$1 = a;
      },
      get_margin: function () {
        return this.$2$2;
      },
      set_margin: function (a) {
        this.$2$2 = a;
      },
      get_background: function () {
        return this.$2$3;
      },
      set_background: function (a) {
        this.$2$3 = a;
      },
      get_clipCorner: function () {
        return this.$2$4;
      },
      set_clipCorner: function (a) {
        this.$2$4 = a;
      },
    },
    aW
  );
  ss.initClass(
    aS,
    e,
    {
      get_font: function () {
        return this.$2$1;
      },
      set_font: function (a) {
        this.$2$1 = a;
      },
      get_glyph: function () {
        return this.$2$2;
      },
      set_glyph: function (a) {
        this.$2$2 = a;
      },
    },
    aW
  );
  ss.initClass(
    aU,
    e,
    {
      get_count: function () {
        return this.$2$1;
      },
      set_count: function (a) {
        this.$2$1 = a;
      },
      get_gap: function () {
        return this.$2$2;
      },
      set_gap: function (a) {
        this.$2$2 = a;
      },
      get_background: function () {
        return this.$2$3;
      },
      set_background: function (a) {
        this.$2$3 = a;
      },
    },
    aW
  );
  ss.initClass(
    aY,
    e,
    {
      get_type: function () {
        return this.$2$1;
      },
      set_type: function (a) {
        this.$2$1 = a;
      },
      get_margin: function () {
        return this.$2$2;
      },
      set_margin: function (a) {
        this.$2$2 = a;
      },
      get_padding: function () {
        return this.$2$3;
      },
      set_padding: function (a) {
        this.$2$3 = a;
      },
    },
    aW
  );
  ss.initClass(
    a0,
    e,
    {
      get_type: function () {
        return this.$2$1;
      },
      set_type: function (a) {
        this.$2$1 = a;
      },
      get_width: function () {
        return this.$2$2;
      },
      set_width: function (a) {
        this.$2$2 = a;
      },
      get_height: function () {
        return this.$2$3;
      },
      set_height: function (a) {
        this.$2$3 = a;
      },
      get_aspectRatio: function () {
        return this.$2$4;
      },
      set_aspectRatio: function (a) {
        this.$2$4 = a;
      },
    },
    aW
  );
  ss.initClass(
    a2,
    e,
    {
      get_shape: function () {
        return this.$2$1;
      },
      set_shape: function (a) {
        this.$2$1 = a;
      },
      get_collisionMargin: function () {
        return this.$2$2;
      },
      set_collisionMargin: function (a) {
        this.$2$2 = a;
      },
      get_faces: function () {
        return this.$2$3;
      },
      set_faces: function (a) {
        this.$2$3 = a;
      },
    },
    aW
  );
  ss.initClass(ae, e, { $0: null, $1: null });
  ss.initClass(
    ai,
    e,
    {
      $8: function () {
        return this.$3$1;
      },
      $9: function (a) {
        this.$3$1 = a;
      },
      $1: function (a, b) {
        if (
          !ss.isInstanceOfType(
            a,
            VEL.Skynet.Core.View.ObjectDatas._Object.Interfaces
              .IConnectObjectData
          )
        ) {
          throw new a4.$ctor1("must implement IConnectObjectData", a);
        }
        var c = this.$7();
        return new hG(
          a,
          this.$8(),
          this.$3().get_thickness(),
          this.$3().get_condition$1(),
          this.$3().get_zLayer(),
          this.$3().get_xOffset(),
          this.$3().get_yOffset(),
          c
        );
      },
      $7: function () {
        if (ss.isNullOrEmptyString(this.$3().get_cap())) {
          return "butt";
        }
        switch (this.$3().get_cap().toLowerCase()) {
          case "butt":
            return "butt";
          case "round":
            return "round";
          case "square":
            return "square";
          default:
            throw new ss.NotImplementedException(
              this.$3().get_cap() + " is not a valid line cap"
            );
        }
      },
    },
    ss.makeGenericType(ag, [am])
  );
  ss.initClass(
    ak,
    e,
    {
      $7: function () {
        return this.$3$1;
      },
      $8: function (a) {
        this.$3$1 = a;
      },
      $9: function () {
        return this.$3$2;
      },
      $a: function (a) {
        this.$3$2 = a;
      },
      $1: function (a, b) {
        return new i0.$0(
          ss.isValue(this.$7()) ? this.$7().$4(true) : null,
          false,
          this.$9(),
          a,
          b
        );
      },
    },
    ss.makeGenericType(ag, [aq])
  );
  ss.initClass(ao, e, {
    get_eventTriggers: function () {
      return this.$1$1;
    },
    set_eventTriggers: function (a) {
      this.$1$1 = a;
    },
    get_isVisible: function () {
      return this.$1$2;
    },
    set_isVisible: function (a) {
      this.$1$2 = a;
    },
    get_zLayer: function () {
      return this.$1$3;
    },
    set_zLayer: function (a) {
      this.$1$3 = a;
    },
    get_zUnder: function () {
      return this.$1$4;
    },
    set_zUnder: function (a) {
      this.$1$4 = a;
    },
    get_clipping: function () {
      return this.$1$5;
    },
    set_clipping: function (a) {
      this.$1$5 = a;
    },
    get_margin: function () {
      return this.$1$6;
    },
    set_margin: function (a) {
      this.$1$6 = a;
    },
    get_width: function () {
      return this.$1$7;
    },
    set_width: function (a) {
      this.$1$7 = a;
    },
    get_height: function () {
      return this.$1$8;
    },
    set_height: function (a) {
      this.$1$8 = a;
    },
    get_aspectRatio: function () {
      return this.$1$9;
    },
    set_aspectRatio: function (a) {
      this.$1$9 = a;
    },
    get_x: function () {
      return this.$1$10;
    },
    set_x: function (a) {
      this.$1$10 = a;
    },
    get_y: function () {
      return this.$1$11;
    },
    set_y: function (a) {
      this.$1$11 = a;
    },
    get_opacity: function () {
      return this.$1$12;
    },
    set_opacity: function (a) {
      this.$1$12 = a;
    },
    get_repeatX: function () {
      return this.$1$13;
    },
    set_repeatX: function (a) {
      this.$1$13 = a;
    },
    get_scaleWithParent: function () {
      return this.$1$14;
    },
    set_scaleWithParent: function (a) {
      this.$1$14 = a;
    },
    get_opacityWithParent: function () {
      return this.$1$15;
    },
    set_opacityWithParent: function (a) {
      this.$1$15 = a;
    },
    get_rotateWithParent: function () {
      return this.$1$16;
    },
    set_rotateWithParent: function (a) {
      this.$1$16 = a;
    },
    get_useParentsRotationCenter: function () {
      return this.$1$17;
    },
    set_useParentsRotationCenter: function (a) {
      this.$1$17 = a;
    },
    get_translateWithParent: function () {
      return this.$1$18;
    },
    set_translateWithParent: function (a) {
      this.$1$18 = a;
    },
    get_useParentsPosition: function () {
      return this.$1$19;
    },
    set_useParentsPosition: function (a) {
      this.$1$19 = a;
    },
    get_useParentScalingOrigin: function () {
      return this.$1$20;
    },
    set_useParentScalingOrigin: function (a) {
      this.$1$20 = a;
    },
    get_origin: function () {
      return this.$1$21;
    },
    set_origin: function (a) {
      this.$1$21 = a;
    },
    get_stretch: function () {
      return this.$1$22;
    },
    set_stretch: function (a) {
      this.$1$22 = a;
    },
    get_binding: function () {
      return this.$1$23;
    },
    set_binding: function (a) {
      this.$1$23 = a;
    },
    get_instances: function () {
      return this.$1$24;
    },
    set_instances: function (a) {
      this.$1$24 = a;
    },
    get_condition: function () {
      return this.$1$25;
    },
    set_condition: function (a) {
      this.$1$25 = a;
    },
  });
  ss.initClass(
    am,
    e,
    {
      get_colour: function () {
        return this.$2$1;
      },
      set_colour: function (a) {
        this.$2$1 = a;
      },
      get_thickness: function () {
        return this.$2$2;
      },
      set_thickness: function (a) {
        this.$2$2 = a;
      },
      get_condition$1: function () {
        return this.$2$3;
      },
      set_condition$1: function (a) {
        this.$2$3 = a;
      },
      get_cap: function () {
        return this.$2$4;
      },
      set_cap: function (a) {
        this.$2$4 = a;
      },
      get_xOffset: function () {
        return this.$2$5;
      },
      set_xOffset: function (a) {
        this.$2$5 = a;
      },
      get_yOffset: function () {
        return this.$2$6;
      },
      set_yOffset: function (a) {
        this.$2$6 = a;
      },
    },
    ao
  );
  ss.initClass(
    aq,
    e,
    {
      get_graphics: function () {
        return this.$2$1;
      },
      set_graphics: function (a) {
        this.$2$1 = a;
      },
      get_text: function () {
        return this.$2$2;
      },
      set_text: function (a) {
        this.$2$2 = a;
      },
    },
    ao
  );
  ss.initClass(at, e, { $1: null, $2: null, $0: null });
  ss.initClass(
    ax,
    e,
    {
      $7: function () {
        return this.$3$1;
      },
      $8: function (a) {
        this.$3$1 = a;
      },
      $0: function (a) {
        throw new ss.InvalidOperationException(
          "Cannot get the painter for GraphicsBuilderGroup - expand it first"
        );
      },
      $6: function (a) {
        if (
          ss.isNullOrUndefined(this.$4().get_index()) &&
          ss.isNullOrUndefined(this.$4().get_condition())
        ) {
          throw new a4("missing Group.Index or Group.Condition");
        }
        var f = 0;
        var g = this.$7();
        for (var b = 0; b < g.length; b++) {
          var c = g[b];
          if (ss.isValue(this.$4().get_index())) {
            var d = this.$4().get_index() + "=" + f++ + "/" + this.$7().length;
            if (ss.isNullOrUndefined(c.$1())) {
              c.$2(d);
            } else {
              c.$2(c.$1() + ("," + d));
            }
          }
          if (ss.isValue(this.$4().get_condition())) {
            c.$2(c.$1() + ("," + this.$4().get_condition()));
          }
          a.push(c);
        }
      },
    },
    ss.makeGenericType(av, [aJ])
  );
  ss.initClass(
    az,
    e,
    {
      $6: function () {
        return this.$3$1;
      },
      $7: function (a) {
        this.$3$1 = a;
      },
      $0: function (a) {
        if (ss.isNullOrUndefined(this.$4().get_src())) {
          throw new a4("require Src");
        }
        if (
          ss.isNullOrUndefined(this.$4().get_columnProperty()) &&
          ss.isNullOrUndefined(this.$4().get_rowProperty())
        ) {
          throw new a4("require RowProperty and/or ColumnProperty");
        }
        if (
          ss.isValue(this.$4().get_rowProperty()) &&
          this.$4().get_rows() < 1
        ) {
          throw new a4("Using RowProperty requires Rows");
        }
        if (
          ss.isValue(this.$4().get_columnProperty()) &&
          this.$4().get_columns() < 1
        ) {
          throw new a4("Using ColumnProperty requires Columns");
        }
        if (!a || ss.isNullOrUndefined(this.$8)) {
          this.$8 = new jb(
            this.$4().get_src(),
            ss.isValue(this.$4().get_tint())
              ? this.$4().get_tint().toString()
              : null
          );
        }
        return new jd(
          this.$4().get_condition(),
          this.$4().get_rowProperty(),
          this.$4().get_columnProperty(),
          this.$4().get_rows(),
          this.$4().get_columns(),
          this.$8
        );
      },
    },
    ss.makeGenericType(av, [aR])
  );
  ss.initClass(aB, e, {
    $7: function () {
      return this.$1$1;
    },
    $8: function (a) {
      this.$1$1 = a;
    },
    $5: function () {
      return this.$1$2;
    },
    $6: function (a) {
      this.$1$2 = a;
    },
    $4: function (a) {
      this.$3();
      var b = Enumerable.from(this.$5())
        .select(function (c) {
          return c.$0(a);
        })
        .toArray();
      return new i9(
        b,
        this.$7().get_frameDuration(),
        this.$7().get_imageQuality(),
        ss.Int32.trunc(
          new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
            this.$7().get_frame()
          ).getValue(false)
        )
      );
    },
    $3: function () {
      if (this.$9) {
        return;
      }
      this.$0();
      this.$2();
      this.$1();
      this.$9 = true;
    },
    $0: function () {
      var a = Enumerable.from(this.$5()).ofType(ax).toArray();
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        ss.remove(this.$5(), c);
        c.$6(this.$5());
      }
    },
    $2: function () {
      var a = Enumerable.from(this.$5())
        .ofType(aD)
        .where(function (d) {
          return d.$c();
        })
        .toArray();
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        ss.remove(this.$5(), c);
        c.$6(this.$5());
      }
    },
    $1: function () {
      var a = Enumerable.from(this.$5())
        .ofType(aF)
        .where(function (d) {
          return d.$9();
        })
        .toArray();
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        ss.remove(this.$5(), c);
        c.$6(this.$5());
      }
    },
  });
  ss.initClass(
    aD,
    e,
    {
      $8: function () {
        return this.$3$1;
      },
      $9: function (a) {
        this.$3$1 = a;
      },
      $a: function () {
        return this.$3$2;
      },
      $b: function (a) {
        this.$3$2 = a;
      },
      $0: function (a) {
        if (a && ss.isValue(this.$d)) {
          return this.$d;
        }
        var b = new jf(
          this.$4().get_condition(),
          this.$4().get_type(),
          this.$8(),
          this.$a(),
          this.$4().get_thickness(),
          this.$4().get_strokeStyle(),
          this.$4().get_cornerRadius(),
          this.$4().get_fillGradient(),
          a
        );
        if (a) {
          this.$d = b;
        }
        return b;
      },
      $c: function () {
        return (
          (ss.isValue(this.$8()) && this.$8().usePalette) ||
          (ss.isValue(this.$a()) && this.$a().usePalette)
        );
      },
      $6: function (a) {
        var j = this.$7(this.$8());
        var k = this.$7(this.$a());
        var b = Math.max(j.length, k.length);
        for (var c = 0; c < b; ++c) {
          var d = j[c % j.length];
          var f = k[c % k.length];
          var g = new aP();
          g.set_condition(this.$3(c, b));
          g.set_type(this.$4().get_type());
          g.set_cornerRadius(this.$4().get_cornerRadius());
          g.set_fillGradient(this.$4().get_fillGradient());
          g.set_thickness(this.$4().get_thickness());
          var h = g;
          var i = new aD(h);
          i.$b(f);
          i.$9(d);
          a.push(i);
        }
      },
      $7: function (a) {
        if (ss.isValue(a) && a.usePalette) {
          var b = e0.$0(a.toString());
          if (ss.isNullOrUndefined(b)) {
            throw new a4("can't find palette: " + a);
          }
          return b.$0();
        } else {
          var c = [];
          c.push(a);
          return c;
        }
      },
    },
    ss.makeGenericType(av, [aP])
  );
  ss.initClass(
    aF,
    e,
    {
      $9: function () {
        return ss.isValue(this.$7()) && this.$7().usePalette;
      },
      $7: function () {
        return this.$3$1;
      },
      $8: function (a) {
        this.$3$1 = a;
      },
      $6: function (a) {
        var f = e0.$0(this.$4().get_tint().toString());
        if (ss.isNullOrUndefined(f)) {
          throw new a4("can't find palette: Tint=" + this.$4().get_tint());
        }
        var g = f.$0();
        for (var b = 0; b < g.length; ++b) {
          var c = new aN();
          c.set_condition(this.$3(b, g.length));
          c.set_src(this.$4().get_src());
          c.set_tint(g[b].toString());
          c.set_nineSlice(this.$4().get_nineSlice());
          var d = c;
          a.push(new aF(d));
        }
      },
      $0: function (a) {
        if (ss.isNullOrUndefined(this.$4().get_src())) {
          throw new a4("Require Src");
        }
        var b = this.$4().get_nineSlice();
        if (ss.isValue(b)) {
          if (b.x < 0 || b.x >= 0.5 || b.y < 0 || b.y >= 0.5) {
            throw new ss.ArgumentOutOfRangeException("NineSlice=" + b);
          }
        }
        if (a && ss.isValue(this.$a)) {
          return this.$a;
        }
        var c = new jh(
          this.$4().get_condition(),
          this.$4().get_src(),
          ss.isValue(this.$4().get_tint())
            ? this.$4().get_tint().toString()
            : null,
          this.$4().get_nineSlice(),
          this.$4().get_edgeAlignSegment()
        );
        if (a) {
          this.$a = c;
        }
        return c;
      },
    },
    ss.makeGenericType(av, [aN])
  );
  ss.initClass(aH, e, {
    get_condition: function () {
      return this.$1$1;
    },
    set_condition: function (a) {
      this.$1$1 = a;
    },
  });
  ss.initClass(
    aJ,
    e,
    {
      get_index: function () {
        return this.$2$1;
      },
      set_index: function (a) {
        this.$2$1 = a;
      },
      get_children: function () {
        return this.$2$2;
      },
      set_children: function (a) {
        this.$2$2 = a;
      },
    },
    aH,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [aH])]
  );
  ss.initClass(
    aL,
    e,
    {
      get_children: function () {
        return this.$1$1;
      },
      set_children: function (a) {
        this.$1$1 = a;
      },
      get_frameDuration: function () {
        return this.$1$2;
      },
      set_frameDuration: function (a) {
        this.$1$2 = a;
      },
      get_imageQuality: function () {
        return this.$1$3;
      },
      set_imageQuality: function (a) {
        this.$1$3 = a;
      },
      get_frame: function () {
        return this.$1$4;
      },
      set_frame: function (a) {
        this.$1$4 = a;
      },
    },
    null,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [aH])]
  );
  ss.initClass(
    aN,
    e,
    {
      get_src: function () {
        return this.$2$1;
      },
      set_src: function (a) {
        this.$2$1 = a;
      },
      get_tint: function () {
        return this.$2$2;
      },
      set_tint: function (a) {
        this.$2$2 = a;
      },
      get_nineSlice: function () {
        return this.$2$3;
      },
      set_nineSlice: function (a) {
        this.$2$3 = a;
      },
      get_width: function () {
        return this.$2$4;
      },
      set_width: function (a) {
        this.$2$4 = a;
      },
      get_height: function () {
        return this.$2$5;
      },
      set_height: function (a) {
        this.$2$5 = a;
      },
      get_aspectRatio: function () {
        return this.$2$6;
      },
      set_aspectRatio: function (a) {
        this.$2$6 = a;
      },
      get_edgeAlignSegment: function () {
        return this.$2$7;
      },
      set_edgeAlignSegment: function (a) {
        this.$2$7 = a;
      },
    },
    aH
  );
  ss.initClass(
    aP,
    e,
    {
      get_type: function () {
        return this.$2$1;
      },
      set_type: function (a) {
        this.$2$1 = a;
      },
      get_fill: function () {
        return this.$2$2;
      },
      set_fill: function (a) {
        this.$2$2 = a;
      },
      get_stroke: function () {
        return this.$2$3;
      },
      set_stroke: function (a) {
        this.$2$3 = a;
      },
      get_thickness: function () {
        return this.$2$4;
      },
      set_thickness: function (a) {
        this.$2$4 = a;
      },
      get_cornerRadius: function () {
        return this.$2$5;
      },
      set_cornerRadius: function (a) {
        this.$2$5 = a;
      },
      get_fillGradient: function () {
        return this.$2$6;
      },
      set_fillGradient: function (a) {
        this.$2$6 = a;
      },
      get_strokeStyle: function () {
        return this.$2$7;
      },
      set_strokeStyle: function (a) {
        this.$2$7 = a;
      },
    },
    aH
  );
  ss.initClass(
    aR,
    e,
    {
      get_src: function () {
        return this.$2$1;
      },
      set_src: function (a) {
        this.$2$1 = a;
      },
      get_rowProperty: function () {
        return this.$2$2;
      },
      set_rowProperty: function (a) {
        this.$2$2 = a;
      },
      get_columnProperty: function () {
        return this.$2$3;
      },
      set_columnProperty: function (a) {
        this.$2$3 = a;
      },
      get_rows: function () {
        return this.$2$4;
      },
      set_rows: function (a) {
        this.$2$4 = a;
      },
      get_columns: function () {
        return this.$2$5;
      },
      set_columns: function (a) {
        this.$2$5 = a;
      },
      get_tint: function () {
        return this.$2$6;
      },
      set_tint: function (a) {
        this.$2$6 = a;
      },
    },
    aH
  );
  ss.initEnum(aT, e, { Solid: 0, Dashed: 1, Dotted: 2, SolidUnderline: 3 });
  ss.initClass(aV, e, { $1: null, $0: null });
  ss.initClass(
    aZ,
    e,
    {
      $6: function () {
        return this.$3$1;
      },
      $7: function (a) {
        this.$3$1 = a;
      },
      $4: function () {
        return this.$3$2;
      },
      $5: function (a) {
        this.$3$2 = a;
      },
      $0: function (a) {
        var g = [];
        var h = this.$6();
        for (var b = 0; b < h.length; b++) {
          var c = h[b];
          var d = c.$0();
          g.push(d);
          if (ss.isValue(c.$4())) {
            ii.$2(c.$4(), d);
          }
        }
        var f = this.$2().get_z() === 0;
        return new jJ(a, this.$2().get_z(), f, this.$4(), g);
      },
    },
    ss.makeGenericType(aX, [b6])
  );
  ss.initClass(
    a1,
    e,
    {
      $0: function (a) {
        return null;
      },
    },
    ss.makeGenericType(aX, [c0])
  );
  ss.initClass(
    a3,
    e,
    {
      $0: function (a) {
        return new jL(a);
      },
    },
    ss.makeGenericType(aX, [b0])
  );
  ss.initClass(
    a6,
    e,
    {
      $4: function () {
        return this.$3$1;
      },
      $5: function (a) {
        this.$3$1 = a;
      },
      $0: function (a) {
        return new jN(a, this.$4());
      },
    },
    ss.makeGenericType(aX, [b2])
  );
  ss.initClass(a8, e, {
    $5: function () {
      return this.$1$1;
    },
    $6: function (a) {
      this.$1$1 = a;
    },
    $3: function () {
      return this.$1$2;
    },
    $4: function (a) {
      this.$1$2 = a;
    },
    $1: function () {
      return this.$1$3;
    },
    $2: function (a) {
      this.$1$3 = a;
    },
    $0: function (a, n, o, b) {
      var c = 1;
      var d = a8.$1();
      var f = new j2(a, o.$y());
      var g = new jP(d, o, f, b);
      var h = [];
      var i = this.$3();
      for (var j = 0; j < i.length; j++) {
        var k = i[j];
        var l = k.$0(d) || g;
        if (ss.isValue(k.$1())) {
          ii.$2(k.$1(), l);
        }
        l.$7(c++);
        h.push(l);
      }
      var m = new jF(a, d);
      m.$7(c);
      h.push(m);
      n.$5(
        new jv(
          this.$5().get_startX(),
          this.$5().get_startY(),
          this.$5().get_startZ()
        )
      );
      return new jx(
        a,
        d,
        h,
        this.$1(),
        new VEL.Skynet.Core.Toolbox.Geometry.Size.$ctor1(
          this.$5().get_width(),
          this.$5().get_height(),
          this.$5().get_aspectRatio()
        ),
        n,
        this.$5().get_backgroundFit()
      );
    },
  });
  a8.$4.prototype = a8.prototype;
  ss.initClass(b8, e, {
    get_name: function () {
      return this.$1$1;
    },
    set_name: function (a) {
      this.$1$1 = a;
    },
    get_visibility: function () {
      return this.$1$2;
    },
    set_visibility: function (a) {
      this.$1$2 = a;
    },
  });
  ss.initClass(b0, e, {}, b8);
  ss.initClass(
    b2,
    e,
    {
      get_colour: function () {
        return this.$2$1;
      },
      set_colour: function (a) {
        this.$2$1 = a;
      },
    },
    b8
  );
  ss.initEnum(b4, e, { Outer: 0, Inner: 1, LockToObjects: 2, Landscape: 3 });
  ss.initClass(
    b6,
    e,
    {
      get_z: function () {
        return this.$2$1;
      },
      set_z: function (a) {
        this.$2$1 = a;
      },
      get_children: function () {
        return this.$2$2;
      },
      set_children: function (a) {
        this.$2$2 = a;
      },
      get_background: function () {
        return this.$2$3;
      },
      set_background: function (a) {
        this.$2$3 = a;
      },
    },
    b8,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [d8])]
  );
  ss.initClass(c0, e, {}, b8);
  ss.initClass(c2, e, {
    get_layers: function () {
      return this.$1$1;
    },
    set_layers: function (a) {
      this.$1$1 = a;
    },
    get_events: function () {
      return this.$1$2;
    },
    set_events: function (a) {
      this.$1$2 = a;
    },
    get_backgroundFit: function () {
      return this.$1$3;
    },
    set_backgroundFit: function (a) {
      this.$1$3 = a;
    },
    get_width: function () {
      return this.$1$4;
    },
    set_width: function (a) {
      this.$1$4 = a;
    },
    get_height: function () {
      return this.$1$5;
    },
    set_height: function (a) {
      this.$1$5 = a;
    },
    get_aspectRatio: function () {
      return this.$1$6;
    },
    set_aspectRatio: function (a) {
      this.$1$6 = a;
    },
    get_startX: function () {
      return this.$1$7;
    },
    set_startX: function (a) {
      this.$1$7 = a;
    },
    get_startY: function () {
      return this.$1$8;
    },
    set_startY: function (a) {
      this.$1$8 = a;
    },
    get_startZ: function () {
      return this.$1$9;
    },
    set_startZ: function (a) {
      this.$1$9 = a;
    },
  });
  ss.initClass(c4, e, {
    $2: function () {
      return this.$1$1;
    },
    $3: function (a) {
      this.$1$1 = a;
    },
    $4: null,
    $0: null,
    $1: null,
  });
  ss.initClass(
    c8,
    e,
    {
      $0: function () {
        return new ld(
          this.$5().get_src(),
          this.$1(),
          new VEL.Skynet.Core.Toolbox.Geometry.Size.$ctor1(
            this.$5().get_width(),
            this.$5().get_height(),
            this.$5().get_aspectRatio()
          ),
          this.$7(),
          this.$5().get_clipping(),
          this.$2(),
          this.$5().get_columns()
        );
      },
    },
    ss.makeGenericType(c6, [d4])
  );
  ss.initClass(
    d0,
    e,
    {
      $8: function () {
        return this.$3$1;
      },
      $9: function (a) {
        this.$3$1 = a;
      },
      $0: function () {
        return new lc(
          this.$8(),
          this.$5().get_type(),
          this.$1(),
          new VEL.Skynet.Core.Toolbox.Geometry.Size.$ctor1(
            this.$5().get_width(),
            this.$5().get_height(),
            this.$5().get_aspectRatio()
          ),
          this.$5().get_clipping(),
          this.$2(),
          this.$7()
        );
      },
    },
    ss.makeGenericType(c6, [d6])
  );
  ss.initClass(d2, e, {});
  ss.initClass(
    d8,
    e,
    {
      get_name: function () {
        return this.$1$1;
      },
      set_name: function (a) {
        this.$1$1 = a;
      },
      get_x: function () {
        return this.$1$2;
      },
      set_x: function (a) {
        this.$1$2 = a;
      },
      get_y: function () {
        return this.$1$3;
      },
      set_y: function (a) {
        this.$1$3 = a;
      },
      get_width: function () {
        return this.$1$4;
      },
      set_width: function (a) {
        this.$1$4 = a;
      },
      get_height: function () {
        return this.$1$5;
      },
      set_height: function (a) {
        this.$1$5 = a;
      },
      get_aspectRatio: function () {
        return this.$1$6;
      },
      set_aspectRatio: function (a) {
        this.$1$6 = a;
      },
      get_rotation: function () {
        return this.$1$7;
      },
      set_rotation: function (a) {
        this.$1$7 = a;
      },
      get_centerX: function () {
        return this.$1$8;
      },
      set_centerX: function (a) {
        this.$1$8 = a;
      },
      get_centerY: function () {
        return this.$1$9;
      },
      set_centerY: function (a) {
        this.$1$9 = a;
      },
      get_clipping: function () {
        return this.$1$10;
      },
      set_clipping: function (a) {
        this.$1$10 = a;
      },
      get_opacity: function () {
        return this.$1$11;
      },
      set_opacity: function (a) {
        this.$1$11 = a;
      },
      get_visibility: function () {
        return this.$1$12;
      },
      set_visibility: function (a) {
        this.$1$12 = a;
      },
      get_imageQuality: function () {
        return this.$1$13;
      },
      set_imageQuality: function (a) {
        this.$1$13 = a;
      },
      get_children: function () {
        return this.$1$14;
      },
      set_children: function (a) {
        this.$1$14 = a;
      },
      get_repeatX: function () {
        return this.$1$15;
      },
      set_repeatX: function (a) {
        this.$1$15 = a;
      },
      get_repeatY: function () {
        return this.$1$16;
      },
      set_repeatY: function (a) {
        this.$1$16 = a;
      },
      get_repeatRows: function () {
        return this.$1$17;
      },
      set_repeatRows: function (a) {
        this.$1$17 = a;
      },
      get_repeatColumns: function () {
        return this.$1$18;
      },
      set_repeatColumns: function (a) {
        this.$1$18 = a;
      },
    },
    null,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [ia])]
  );
  ss.initClass(
    d4,
    e,
    {
      get_src: function () {
        return this.$2$1;
      },
      set_src: function (a) {
        this.$2$1 = a;
      },
      get_columns: function () {
        return this.$2$2;
      },
      set_columns: function (a) {
        this.$2$2 = a;
      },
    },
    d8,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [ia])]
  );
  ss.initClass(
    d6,
    e,
    {
      get_type: function () {
        return this.$2$1;
      },
      set_type: function (a) {
        this.$2$1 = a;
      },
      get_fill: function () {
        return this.$2$2;
      },
      set_fill: function (a) {
        this.$2$2 = a;
      },
    },
    d8,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [ia])]
  );
  ss.initClass(e0, e, {
    $0: function () {
      return this.$1$1;
    },
    $1: function (a) {
      this.$1$1 = a;
    },
  });
  ss.initClass(e2, e, {});
  ss.initClass(e4, e, {});
  ss.initClass(e6, e, {
    clone: function () {
      return new e6(this.$2);
    },
    toString: function () {
      return this.$2;
    },
    createGradient: function (a, f, g) {
      var b = f || new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.7, 1);
      var c = g || new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.3, 0);
      var d = new f2.$ctor1(b, c);
      d.get_children().push(new f4.$ctor1(this.darken(a), 0));
      d.get_children().push(new f4.$ctor1(this.darken(a / 2), 0.4));
      d.get_children().push(new f4.$ctor1(this, 1));
      return d;
    },
    darken: function (a) {
      return this.$1(a, function (b) {
        return Math.floor(b * (1 - a));
      });
    },
    lighten: function (a) {
      return this.$1(a, function (b) {
        return Math.floor(b + (255 - b) * a);
      });
    },
    $1: function (a, f) {
      var g = {},
        b = {},
        c = {};
      this.$0(g, b, c);
      g.$ = f(g.$);
      b.$ = f(b.$);
      c.$ = f(c.$);
      var d = (
        16777216 +
        (ss.Int32.trunc(g.$) << 16) +
        (ss.Int32.trunc(b.$) << 8) +
        ss.Int32.trunc(c.$)
      ).toString(16);
      d = d.substring(d.length - 6);
      return new e6("#" + d);
    },
    toHexString: function () {
      if (this.$2.indexOf(String.fromCharCode(35)) !== -1) {
        return this.$2;
      }
      var a = {},
        b = {},
        c = {};
      this.$0(a, b, c);
      return (
        16777216 +
        (ss.Int32.trunc(a.$) << 16) +
        (ss.Int32.trunc(b.$) << 8) +
        ss.Int32.trunc(c.$)
      ).toString(16);
    },
    toRGBString: function () {
      if (this.$2.toUpperCase().indexOf("RGB") !== -1) {
        return this.$2;
      }
      var a = parseInt(this.$2.substr(1, 2), 16);
      var b = parseInt(this.$2.substr(3, 2), 16);
      var c = parseInt(this.$2.substr(5, 2), 16);
      return "rgb(" + a + "," + b + "," + c + ")";
    },
    $0: function (a, b, c) {
      a.$ = parseInt(this.$2.substr(1, 2), 16);
      b.$ = parseInt(this.$2.substr(3, 2), 16);
      c.$ = parseInt(this.$2.substr(5, 2), 16);
    },
  });
  ss.initClass(e8, e, {
    get_fillColour: function () {
      return this.$1$1;
    },
    set_fillColour: function (a) {
      this.$1$1 = a;
    },
    get_strokeColour: function () {
      return this.$1$2;
    },
    set_strokeColour: function (a) {
      this.$1$2 = a;
    },
    get_strokeWidth: function () {
      return ss.coalesce(
        VEL.Skynet.Core.Toolbox.Geometry.Dimension.getValue(
          this.$2,
          null,
          null,
          ss.mkdel(this, function (a, b) {
            return this.get_fontSize();
          }),
          false
        ),
        0
      );
    },
    set_strokeWidth: function (a) {
      this.$2 = new VEL.Skynet.Core.Toolbox.Geometry.Dimension(a);
    },
    get_useStroke: function () {
      return ss.isValue(this.get_strokeColour()) && this.get_strokeWidth() > 0;
    },
    get_fontName: function () {
      return this.$1$3;
    },
    set_fontName: function (a) {
      this.$1$3 = a;
    },
    get_fontSize: function () {
      return this.$1$4;
    },
    set_fontSize: function (a) {
      this.$1$4 = a;
    },
    get_weight: function () {
      return this.$1$5;
    },
    set_weight: function (a) {
      this.$1$5 = a;
    },
    get_hasShadow: function () {
      return this.$1$6;
    },
    set_hasShadow: function (a) {
      this.$1$6 = a;
    },
    clone: function () {
      return new e8.$0(
        this.get_fontName(),
        this.get_fontSize(),
        this.get_weight(),
        this.get_fillColour(),
        this.get_strokeColour(),
        this.$2,
        this.get_hasShadow()
      );
    },
    modify: function (a) {
      this.set_fontSize(a.fontSize);
      this.$0 = a.get_isBold();
      this.$1 = a.get_isItalic();
    },
    toCanvasFont: function (a) {
      var b = this.get_weight() === 0 ? 400 : this.get_weight();
      if (this.$0) {
        b += 300;
      }
      return e8.toCanvasFont(
        i7.getFontStack(this.get_fontName()),
        this.get_fontSize() * a,
        b,
        this.$1
      );
    },
  });
  e8.$ctor1.prototype = e8.$ctor2.prototype = e8.$0.prototype = e8.prototype;
  ss.initClass(f0, e, {
    get_fillColour: function () {
      return this.$1$1;
    },
    set_fillColour: function (a) {
      this.$1$1 = a;
    },
    get_strokeColour: function () {
      return this.$1$2;
    },
    set_strokeColour: function (a) {
      this.$1$2 = a;
    },
    get_strokeWidth: function () {
      return this.$1$3;
    },
    set_strokeWidth: function (a) {
      this.$1$3 = a;
    },
    get_fontName: function () {
      return this.$1$4;
    },
    set_fontName: function (a) {
      this.$1$4 = a;
    },
    get_fontSize: function () {
      return this.$1$5;
    },
    set_fontSize: function (a) {
      this.$1$5 = a;
    },
    get_weight: function () {
      return this.$1$6;
    },
    set_weight: function (a) {
      this.$1$6 = a;
    },
    get_hasShadow: function () {
      return this.$1$7;
    },
    set_hasShadow: function (a) {
      this.$1$7 = a;
    },
  });
  ss.initClass(
    f2,
    e,
    {
      get_startPoint: function () {
        return this.$1$1;
      },
      set_startPoint: function (a) {
        this.$1$1 = a;
      },
      get_endPoint: function () {
        return this.$1$2;
      },
      set_endPoint: function (a) {
        this.$1$2 = a;
      },
      get_children: function () {
        return this.$1$3;
      },
      set_children: function (a) {
        this.$1$3 = a;
      },
      getCanvasGradient: function (a, g) {
        try {
          var h = a.createLinearGradient(
            this.get_startPoint().x * g.width,
            this.get_startPoint().y * g.height,
            this.get_endPoint().x * g.width,
            this.get_endPoint().y * g.height
          );
          var b = this.get_children();
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.setColourStop(h);
          }
          return h;
        } catch (f) {
          return null;
        }
      },
    },
    null,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [f4])]
  );
  f2.$ctor1.prototype = f2.prototype;
  ss.initClass(f4, e, {
    get_colour: function () {
      return this.$1$1;
    },
    set_colour: function (a) {
      this.$1$1 = a;
    },
    get_offset: function () {
      return this.$1$2;
    },
    set_offset: function (a) {
      this.$1$2 = a;
    },
    setColourStop: function (a) {
      a.addColorStop(this.get_offset(), this.get_colour().toString());
    },
  });
  f4.$ctor1.prototype = f4.prototype;
  ss.initClass(f6, e, {
    get_colour: function () {
      return this.$1$1;
    },
    set_colour: function (a) {
      this.$1$1 = a;
    },
    get_offset: function () {
      return this.$1$2;
    },
    set_offset: function (a) {
      this.$1$2 = a;
    },
  });
  ss.initClass(
    a7,
    e,
    {
      $0: function () {
        return this.$1$1;
      },
      $1: function (a) {
        this.$1$1 = a;
      },
      get_children: function () {
        return this.$1$2;
      },
      set_children: function (a) {
        this.$1$2 = a;
      },
    },
    null,
    [
      ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [
        String,
      ]),
    ]
  );
  ss.initClass(a9, e, {});
  ss.initClass(b1, e, {});
  ss.initClass(b3, e, {});
  ss.initEnum(b5, e, { Z: 0, X: 1, Y: 2 });
  ss.initEnum(b7, e, { X: 0, Y: 1, Z: 2 });
  ss.initClass(b9, e, {});
  ss.initClass(c1, e, {});
  ss.initClass(c3, e, {});
  ss.initClass(c5, e, {});
  ss.initClass(c7, e, {});
  ss.initClass(c9, e, {});
  ss.initClass(d1, e, {});
  ss.initClass(d3, e, {});
  ss.initClass(d5, e, {});
  ss.initInterface(d7, e, {
    $update: null,
    $onTouchOrMouseDown: null,
    $onTouchOrMouseMove: null,
    $onTouchOrMouseUp: null,
    $drawCursors: null,
  });
  ss.initClass(
    d9,
    e,
    {
      $update: function () {},
      $1: function (a, d) {
        var f = this.$9.getBoundingClientRect();
        var b = (a.clientX - f.left) * hK.$0();
        var c = (a.clientY - f.top) * hK.$0();
        if (d) {
          b /= f.width;
          c /= f.height;
        }
        return new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(b, c);
      },
      $3: function (a, d) {
        var f = this.$9.getBoundingClientRect();
        if (ss.isValue(a.touches) && a.touches.length > 0) {
          var b = (a.touches[0].clientX - f.left) * hK.$0();
          var c = (a.touches[0].clientY - f.top) * hK.$0();
          if (d) {
            b /= f.width;
            c /= f.height;
          }
          return new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(b, c);
        }
        return VEL.Skynet.Core.Toolbox.Geometry.Point.empty;
      },
      $2: function (a, b) {
        if (ss.isInstanceOfType(a, MouseEvent)) {
          return this.$1(ss.cast(a, MouseEvent), b);
        } else {
          return this.$3(ss.cast(a, TouchEvent), b);
        }
      },
      $5: null,
      $onTouchOrMouseDown: function (a) {
        if (ss.isNullOrUndefined(this.$6)) {
          this.$5(a);
          var b = this.$7.$m.$r.$2(this.$6.$d());
          if (ss.isValue(b)) {
            this.$6.$6(b);
            return true;
          }
        }
        return false;
      },
      $onTouchOrMouseMove: null,
      $onTouchOrMouseUp: function (a) {
        if (ss.isValue(this.$6)) {
          this.$6.$2();
        }
        this.$6 = null;
      },
      $drawCursors: function (a) {
        if (ss.isValue(this.$6)) {
          this.$6.$1(a);
        }
      },
      $4: function (a) {
        var f = ss.isValue(this.$6.$b()) ? this.$6.$b().get_data() : null;
        if (this.$6.$7() === 2) {
          if (
            ss.isNullOrUndefined(this.$a) ||
            !ss.referenceEquals(this.$6.$b(), this.$a.$b())
          ) {
            this.$a = this.$6;
            var g = null;
            var b = null;
            if (ss.isValue(f)) {
              var c = this.$a.$b().get_absoluteBounds();
              g = (this.$a.$d().x - c.get_left()) / c.get_width();
              b = (this.$a.$d().y - c.get_top()) / c.get_height();
            }
            var d = new VEL.Skynet.Core.View.ObjectGestureInfo(
              f,
              this.$a.$7(),
              g,
              b,
              null
            );
            this.$8.get_game().onObjectGesture(d);
            window.setTimeout(
              ss.mkdel(this, function () {
                this.$a = null;
              }),
              300
            );
          } else {
            if (ss.isValue(this.$6.$b())) {
              this.$8
                .get_game()
                .onObjectGesture(
                  new VEL.Skynet.Core.View.ObjectGestureInfo(
                    f,
                    3,
                    null,
                    null,
                    null
                  )
                );
            }
            this.$a = null;
          }
        } else {
          this.$8
            .get_game()
            .onObjectGesture(
              new VEL.Skynet.Core.View.ObjectGestureInfo(
                f,
                this.$6.$7(),
                null,
                null,
                null
              )
            );
        }
        this.$6 = null;
      },
      $0: function (a) {
        var b = this.$7.$m.$r.$2(a);
        if (!ss.referenceEquals(b, this.$b)) {
          this.$8
            .get_game()
            .onObjectGesture(
              new VEL.Skynet.Core.View.ObjectGestureInfo(
                ss.isNullOrUndefined(b) ? null : b.get_data(),
                12,
                null,
                null,
                null
              )
            );
          this.$b = b;
        }
      },
    },
    null,
    [d7]
  );
  ss.initClass(
    e1,
    e,
    {
      $onTouchOrMouseDown: function (a) {
        var b = Enumerable.from(this.$7.$m.$r.$y()).firstOrDefault(
          null,
          ss.getDefaultValue(ki)
        );
        this.$c = this.$2(a, false);
        if (ss.isValue(b)) {
          this.$d = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            b.get_targetX(),
            b.get_targetY()
          );
        } else {
          this.$d = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            this.$7.$q.get_translateX(),
            this.$7.$q.get_translateY()
          );
        }
        return true;
      },
      $onTouchOrMouseUp: function (a) {
        this.$c = null;
        if (ss.isNullOrUndefined(this.$d)) {
          return;
        }
        var b = Enumerable.from(this.$7.$m.$r.$y()).firstOrDefault(
          null,
          ss.getDefaultValue(ki)
        );
        if (ss.isValue(b)) {
          b.setTarget(this.$d.x, this.$d.y);
        } else {
          this.$7.$q.set_translateX(this.$d.x);
          this.$7.$q.set_translateY(this.$d.y);
        }
      },
      $onTouchOrMouseMove: function (a) {
        var f = this.$7.$m.$r;
        var g = Enumerable.from(f.$y()).firstOrDefault(
          null,
          ss.getDefaultValue(ki)
        );
        if (ss.isNullOrUndefined(this.$c)) {
          return;
        }
        var b = this.$2(a, false);
        if (ss.isValue(g)) {
          var c = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Division(
            VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply(
              VEL.Skynet.Core.Toolbox.Geometry.Point.op_Subtraction(
                b,
                this.$c
              ),
              f.$A().width
            ),
            f.$r().get_width()
          );
          if (ss.isInstanceOfType(g, ko)) {
            c = c.setY(0);
          }
          g.setTarget(c.x + g.get_targetX(), c.y + g.get_targetY());
        } else {
          var d = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Subtraction(
            this.$c,
            b
          );
          this.$7.$q.set_translateX(this.$7.$q.get_translateX() + d.x);
          this.$7.$q.set_translateY(this.$7.$q.get_translateY() + d.y);
        }
        this.$c = b;
      },
      $5: function (a) {},
    },
    d9,
    [d7]
  );
  ss.initClass(
    e3,
    e,
    {
      $onTouchOrMouseDown: function (a) {
        this.$h.stop();
        this.$g = this.$2(a, false);
        this.$f = true;
        this.$e = false;
        return this.$d(this.$g);
      },
      $d: function (a) {
        var c = this.$7.$k.get_top();
        if (a.x > hK.$8().width - c) {
          var d = a.y - this.$7.$k.get_top();
          var b =
            hK.$8().height - this.$7.$k.get_bottom() - this.$7.$k.get_top();
          this.$8.get_game().onScroll(d / b, false);
          return true;
        }
        return false;
      },
      $onTouchOrMouseMove: function (a) {
        var c = this.$2(a, false);
        if (this.$f) {
          if (!this.$d(c)) {
            var d = this.$g.y - c.y;
            var b = d / this.$7.$m.$r.$C().$6;
            this.$8.get_game().onScroll(b, true);
            this.$i = d;
            if (Math.abs(d) > 3) {
              this.$e = true;
            }
          }
          this.$g = c;
        } else {
          this.$0(c);
        }
      },
      $onTouchOrMouseUp: function (a) {
        this.$f = false;
        this.$h.start();
        if (!this.$e) {
          var b = this.$7.$m.$r.$2(this.$2(a, false));
          this.$8
            .get_game()
            .onObjectGesture(
              new VEL.Skynet.Core.View.ObjectGestureInfo(
                ss.isNullOrUndefined(b) ? null : b.get_data(),
                2,
                null,
                null,
                null
              )
            );
        }
      },
      $5: function (a) {},
      $c: function () {
        var a = 0.5;
        this.$i -= (this.$i > 0 ? 1 : this.$i < 0 ? -1 : 0) * a;
        if (Math.abs(this.$i) < 1) {
          this.$i = 0;
        }
        this.$8.get_game().onScroll(this.$i, true);
      },
    },
    d9,
    [d7]
  );
  ss.initClass(
    e5,
    e,
    {
      $5: function (a) {},
      $onTouchOrMouseDown: function (a) {
        this.$c = this.$2(a, false);
        var b = this.$7.$m.$r.$2(this.$c);
        if (ss.isNullOrUndefined(b)) {
          return false;
        }
        if (
          ss.isInstanceOfType(
            b.get_data(),
            VEL.Skynet.Core.View.ObjectDatas.Tile.CargoTileData
          ) ||
          ss.isInstanceOfType(
            b.get_data(),
            VEL.Skynet.Core.View.ObjectDatas.Tile.BlimpTileData
          ) ||
          ss.isInstanceOfType(
            b.get_data(),
            VEL.Skynet.Core.View.ObjectDatas.Sprite.Balloon
              .BonusBalloonSpriteData
          )
        ) {
          this.$8
            .get_game()
            .onObjectGesture(
              new VEL.Skynet.Core.View.ObjectGestureInfo(
                b.get_data(),
                2,
                null,
                null,
                null
              )
            );
        }
        return true;
      },
      $onTouchOrMouseMove: function (a) {
        if (ss.isValue(this.$c)) {
          var g = this.$2(a, false);
          var h = this.$7.$m.$r;
          var b = Enumerable.from(h.$y())
            .where(function (i) {
              return ss.isInstanceOfType(
                i.get_data(),
                VEL.Skynet.Core.View.ObjectDatas.Tile.CargoTileData
              );
            })
            .getEnumerator();
          try {
            while (b.moveNext()) {
              var c = b.current();
              var d = ss.cast(
                c.get_data(),
                VEL.Skynet.Core.View.ObjectDatas.Tile.CargoTileData
              ).balloon;
              if (ss.isValue(d)) {
                var f = h.$5(c, ss.cast(d.control, ki), this.$c, g);
                if (f) {
                  this.$8
                    .get_game()
                    .onObjectGesture(
                      new VEL.Skynet.Core.View.ObjectGestureInfo(
                        c.get_data(),
                        2,
                        null,
                        null,
                        null
                      )
                    );
                }
              }
            }
          } finally {
            b.dispose();
          }
        }
      },
      $onTouchOrMouseUp: function (a) {
        this.$c = null;
      },
    },
    d9,
    [d7]
  );
  ss.initClass(
    e7,
    e,
    {
      $onTouchOrMouseMove: function (a) {
        this.$h = this.$2(a, false);
        if (ss.isValue(this.$6)) {
          this.$6.$0(this.$h);
          this.$d();
          if (this.$f.$m() && !this.$f.$9()) {
            this.$7.$m.$r.$l(this.$g, this.$f);
            this.$f.$a(true);
          }
        }
        this.$0(this.$h);
      },
      $update: function () {
        if (!this.$7.$q.$g() && ss.isValue(this.$h) && ss.isValue(this.$f)) {
          this.$d();
        }
      },
      $4: function (a) {
        d9.prototype.$4.call(this, a);
        if (this.$f.$9()) {
          this.$7.$m.$r.$m(this.$g, a);
        }
      },
      $d: function () {
        if (ss.isNullOrUndefined(this.$h) && ss.isNullOrUndefined(this.$f)) {
          return;
        }
        this.$f.$j(this.$c(this.$h));
      },
      $5: function (a) {
        this.$h = this.$2(a, false);
        this.$f = new g0(
          this.$h,
          this.$c(this.$h),
          this.$e,
          ss.mkdel(this, this.$4)
        );
        this.$6 = this.$f;
      },
      $c: function (a) {
        var d = this.$7.$m.$r;
        var f = d.$r();
        var b = (a.x - f.get_left()) / f.get_width();
        var c = (a.y - f.get_top()) / f.get_height();
        return new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          b * d.$A().width,
          c * d.$A().height
        );
      },
    },
    d9,
    [d7]
  );
  ss.initClass(
    e9,
    e,
    {
      $5: function (a) {},
      $update: function () {
        if (ss.isNullOrUndefined(this.$d)) {
          return;
        }
        this.$c(2);
      },
      $onTouchOrMouseDown: function (a) {
        this.$d = this.$2(a, false);
        this.$c(2);
        return true;
      },
      $onTouchOrMouseMove: function (a) {
        if (ss.isNullOrUndefined(this.$d)) {
          return;
        }
        this.$d = this.$2(a, false);
        this.$c(2);
      },
      $onTouchOrMouseUp: function (a) {
        this.$c(5);
        this.$d = null;
      },
      $c: function (a) {
        if (ss.isNullOrUndefined(this.$d)) {
          return;
        }
        var d = this.$7.$m.$r;
        var f = Enumerable.from(d.$y()).first(function (g) {
          return (
            ss.isInstanceOfType(
              g.get_data(),
              VEL.Skynet.Core.View.ObjectDatas.Sprite.Airplane
                .AirplanePlayerSpriteData
            ) ||
            ss.isInstanceOfType(
              g.get_data(),
              VEL.Skynet.Core.View.ObjectDatas.Sprite.MazeChase
                .MazeChasePlayerSpriteData
            )
          );
        });
        var b = d.$3(this.$d);
        var c = new VEL.Skynet.Core.Toolbox.Geometry.Vector.$ctor4(
          f.get_actualBounds().get_middleCenter(),
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(b.x, b.y)
        ).get_angle();
        this.$8
          .get_game()
          .onObjectGesture(
            new VEL.Skynet.Core.View.ObjectGestureInfo(null, a, b.x, b.y, c)
          );
      },
    },
    d9,
    [d7]
  );
  ss.initClass(
    f1,
    e,
    {
      $5: function (a) {},
      $onTouchOrMouseDown: function (a) {
        var b = this.$7.$m.$r.$2(this.$2(a, false));
        if (ss.isValue(b)) {
          this.$8
            .get_game()
            .onObjectGesture(
              new VEL.Skynet.Core.View.ObjectGestureInfo(
                b.get_data(),
                2,
                null,
                null,
                null
              )
            );
          return true;
        }
        return false;
      },
      $onTouchOrMouseMove: function (a) {},
      $onTouchOrMouseUp: function (a) {},
    },
    d9,
    [d7]
  );
  ss.initClass(
    f3,
    e,
    {
      $update: function () {},
      $2: function (a) {
        return Math.sqrt(a.x * a.x + a.y * a.y);
      },
      $0: function (a) {
        var b = Math.atan2(a.y, a.x) + Math.PI / 2;
        if (b < 0) {
          b += 2 * Math.PI;
        }
        var c = VEL.Skynet.Core.Toolbox.Geometry.Angle.fromRadians(b);
        return c;
      },
      $onTouchOrMouseDown: function (a) {
        this.$9(a);
        this.$e = this.$3(a);
        var d = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Subtraction(
          this.$e,
          this.$5()
        );
        var f = this.$2(d);
        if (f < this.$6()) {
          var b = this.$0(d);
          this.$g.get_game().onWheelDown(b, f);
          this.$c = true;
          if (ss.isValue(this.$f)) {
            this.$f.stop();
          }
          this.$f =
            VEL.Skynet.Core.Toolbox.Threading.ThreadManager.setInterval(
              null,
              50,
              ss.mkdel(this, this.$8),
              false,
              false
            );
        } else {
          this.$c = false;
          var c = this.$d.$2(this.$3(a));
          if (ss.isValue(c)) {
            this.$b.$6(c);
          }
        }
        return true;
      },
      $onTouchOrMouseMove: function (a) {
        this.$e = this.$3(a);
        if (ss.isValue(this.$b)) {
          this.$b.$0(this.$e);
        }
      },
      $8: function () {
        if (this.$c) {
          var a = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Subtraction(
            this.$e,
            this.$5()
          );
          var b = this.$2(a);
          var c = this.$0(a);
          this.$g.get_game().onWheelMove(c, b);
        }
      },
      $onTouchOrMouseUp: function (a) {
        if (ss.isValue(this.$f)) {
          this.$f.stop();
          this.$f = null;
        }
        this.$c = false;
        this.$g.get_game().onWheelUp();
        if (ss.isValue(this.$b)) {
          this.$b.$2();
        }
        this.$b = null;
      },
      $6: function () {
        var a = Enumerable.from(this.$d.$y()).first(function (b) {
          return (
            ss.isInstanceOfType(b, kA) &&
            !ss.cast(b, kA).get_data().isEliminated
          );
        });
        return a.get_absoluteBounds().get_height() / 2;
      },
      $5: function () {
        var a = Enumerable.from(this.$d.$y()).first(function (b) {
          return (
            ss.isInstanceOfType(b, kA) &&
            !ss.cast(b, kA).get_data().isEliminated
          );
        });
        return a.get_absoluteBounds().get_middleCenter();
      },
      $1: function (a) {
        var b = this.$a.getBoundingClientRect();
        return new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          (a.clientX - b.left) * hK.$0(),
          (a.clientY - b.top) * hK.$0()
        );
      },
      $4: function (a) {
        var b = this.$a.getBoundingClientRect();
        if (ss.isValue(a.touches) && a.touches.length > 0) {
          return new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            (a.touches[0].clientX - b.left) * hK.$0(),
            (a.touches[0].clientY - b.top) * hK.$0()
          );
        }
        return VEL.Skynet.Core.Toolbox.Geometry.Point.empty;
      },
      $3: function (a) {
        if (ss.isInstanceOfType(a, MouseEvent)) {
          return this.$1(ss.cast(a, MouseEvent));
        } else {
          return this.$4(ss.cast(a, TouchEvent));
        }
      },
      $9: function (a) {
        var b = this.$3(a);
        this.$b = new f7(b, false, ss.mkdel(this, this.$7));
      },
      $7: function (a) {
        if (ss.isNullOrUndefined(this.$b)) {
          return;
        }
        if (this.$b.$7() === 2 || this.$b.$7() === 4) {
          this.$g
            .get_game()
            .onObjectGesture(
              ss.isValue(this.$b.$b())
                ? new VEL.Skynet.Core.View.ObjectGestureInfo(
                    this.$b.$b().get_data(),
                    this.$b.$7(),
                    null,
                    null,
                    null
                  )
                : new VEL.Skynet.Core.View.ObjectGestureInfo(
                    null,
                    this.$b.$7(),
                    null,
                    null,
                    null
                  )
            );
        }
        if (ss.referenceEquals(this.$b, a)) {
          this.$b = null;
        }
      },
      $drawCursors: function (a) {
        if (ss.isValue(this.$b)) {
          this.$b.$1(a);
        }
      },
    },
    null,
    [d7]
  );
  ss.initClass(
    f5,
    e,
    {
      $onTouchOrMouseMove: function (a) {
        var b = this.$2(a, false);
        if (ss.isValue(this.$6)) {
          this.$6.$0(b);
        }
        this.$0(b);
      },
      $5: function (a) {
        this.$6 = new f7(this.$2(a, false), true, ss.mkdel(this, this.$4));
      },
    },
    d9,
    [d7]
  );
  ss.initClass(f7, e, {
    $9: function () {
      return this.$1$1;
    },
    $a: function (a) {
      this.$1$1 = a;
    },
    $d: function () {
      return this.$1$2;
    },
    $e: function (a) {
      this.$1$2 = a;
    },
    $7: function () {
      return this.$1$3;
    },
    $8: function (a) {
      this.$1$3 = a;
    },
    $b: function () {
      return this.$1$4;
    },
    $c: function (a) {
      this.$1$4 = a;
    },
    $6: function (a) {
      this.$c(a);
    },
    $0: function (a) {
      this.$f.push(a);
    },
    $4: function () {
      if (!this.$h) {
        var a = this.$3();
        if (a.get_length() < 10) {
          this.$h = true;
          this.$8(4);
          this.$5();
        } else {
          if (ss.isValue(this.$g)) {
            this.$g.stop();
            this.$g = null;
          }
        }
      }
    },
    $2: function () {
      if (!this.$h) {
        this.$h = true;
        var a = this.$3();
        if (!this.$9() && a.get_length() < 15) {
          this.$8(2);
          var c = [];
          c.push(this.$d());
          this.$f = c;
        } else {
          var d = a.get_angle().get_degrees();
          if (d <= -45 && d >= -135) {
            this.$8(8);
          } else {
            if (d >= 45 && d <= 135) {
              this.$8(9);
            }
          }
          if (Math.abs(d) >= 135) {
            this.$8(10);
          } else {
            if (Math.abs(d) <= 45) {
              this.$8(11);
            }
          }
        }
        this.$5();
      } else {
        var b = this.$3();
        if (!this.$9() && b.get_length() < 15) {
          this.$8(3);
          this.$5();
        }
      }
    },
    $1: function (a) {
      a.fillStyle = "red";
      a.strokeStyle = "red";
      a.lineWidth = 2;
      a.fillRect(this.$d().x - 2, this.$d().y - 2, 5, 5);
      a.beginPath();
      a.moveTo(
        Enumerable.from(this.$f).first().x,
        Enumerable.from(this.$f).first().y
      );
      var b = Enumerable.from(this.$f).skip(1).getEnumerator();
      try {
        while (b.moveNext()) {
          var c = b.current();
          a.lineTo(c.x, c.y);
        }
      } finally {
        b.dispose();
      }
      a.stroke();
    },
    $3: function () {
      return new VEL.Skynet.Core.Toolbox.Geometry.Vector.$ctor4(
        Enumerable.from(this.$f).first(),
        Enumerable.from(this.$f).last()
      );
    },
    $5: function () {
      if (ss.isValue(this.$g)) {
        this.$g.stop();
        this.$g = null;
      }
      if (!ss.staticEquals(this.$i, null)) {
        this.$i(this);
      }
    },
  });
  ss.initClass(
    g0,
    e,
    {
      $m: function () {
        return this.$3().get_length() > 10;
      },
      $k: function () {
        return this.$2$1;
      },
      $l: function (a) {
        this.$2$1 = a;
      },
      $n: function () {
        return this.$2$2;
      },
      $o: function (a) {
        this.$2$2 = a;
      },
      $j: function (a) {
        this.$l(a);
      },
    },
    f7
  );
  ss.initInterface(iW, e, {
    $hasChanged: null,
    $updateFrame: null,
    get_$frame: null,
    $update: null,
    $paintGraphics: null,
  });
  ss.initClass(
    g2,
    e,
    {
      $update: function (a) {
        if (ss.isValue(this.$0)) {
          return this.$0.$update(a);
        }
        return false;
      },
      $updateFrame: function (a) {
        if (ss.isValue(this.$0)) {
          this.$0.$updateFrame(a);
        }
      },
      get_$frame: function () {
        return this.$0.get_$frame();
      },
      $hasChanged: function (a, b) {
        return ss.isValue(this.$0) && this.$0.$hasChanged(a, b);
      },
      $paintGraphics: function (a, d, f, b, c) {
        if (ss.isValue(this.$0)) {
          this.$0.$paintGraphics(a, d, f, b, c);
        }
      },
    },
    null,
    [iW]
  );
  ss.initClass(
    g4,
    e,
    {
      $3: function (a, d, f) {
        if (this.$a.get_width() > 0 && this.$a.get_height() > 0) {
          this.$6 = this.$a.get_aspectRatio();
          this.$2();
          this.$1();
        }
        var b = ss.Int32.trunc(this.$c.x) * ss.Int32.trunc(this.$c.y);
        var c = ss.Int32.trunc(Math.ceil(Math.pow(f.reveal / 0.95, 1.8) * b));
        c = Math.min(b, Math.max(0, c));
        a.$f(
          this.$b,
          d,
          this.$7,
          this.$c,
          this.$9,
          Enumerable.from(this.$5).take(c)
        );
        this.$paintGraphics(a, f, d, d, 0);
      },
      $4: function () {
        this.$2();
        return ss.Int32.trunc(this.$c.x) * ss.Int32.trunc(this.$c.y);
      },
      $2: function () {
        this.$c = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          this.$8,
          ss.Int32.trunc(ss.round(this.$8 / this.$6))
        );
      },
      $1: function () {
        if (ss.isValue(this.$5)) {
          return;
        }
        this.$5 = [];
        VEL.Skynet.Core.Toolbox.Collections.ListExtensions.fillSeries(
          this.$5,
          ss.Int32.trunc(this.$c.x) * ss.Int32.trunc(this.$c.y),
          null
        );
        VEL.Skynet.Core.Toolbox.Collections.ListExtensions.shuffle(
          ss.Int32
        ).call(null, this.$5);
      },
    },
    g2,
    [iW]
  );
  ss.initClass(
    g6,
    e,
    {
      $4: function () {
        return this.$5.get_strokeWidth();
      },
      $1: function (a) {
        if (a.usePalette) {
          var b = e0.$0(a.toString());
          if (ss.isNullOrUndefined(b)) {
            throw new a4("can't find palette: " + a);
          }
          return b.$0();
        } else {
          var c = [];
          c.push(a);
          return c;
        }
      },
      $3: function (a, o, p, b, c) {
        c = ss.coalesce(c, 0);
        var d = this.$1(this.$5.get_fillColour());
        var f = this.$1(this.$5.get_strokeColour());
        var g = this.$5.clone();
        g.set_fillColour(d[ss.unbox(c) % d.length]);
        g.set_strokeColour(f[ss.unbox(c) % f.length]);
        if (ss.isValue(this.$6) && (o.get_isTick() || o.get_isCross())) {
          this.$6.$0(a, o.get_isTick() ? 2 : 3, g.get_fillColour(), b);
          return;
        }
        var h = this.$4() / 2;
        var i = a.$y(
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            h - p.actualBounds.get_left(),
            h - p.actualBounds.get_top()
          )
        );
        for (var j = 0; j < p.chunks.length; j++) {
          var k = p.chunks[j];
          g.modify(k);
          if (ss.isValue(g.get_strokeColour()) && g.get_strokeWidth() > 0) {
            i.$u(k.text, k.position.x, k.position.y, g);
          }
          i.$k(k.text, k.position.x, k.position.y, g);
        }
        if (hM.$7()) {
          for (var l = 0; l < p.chunks.length; l++) {
            var m = p.chunks[l];
            var n = m.get_bounds();
            i.$y(n.get_topLeft()).$t(n.get_size(), e2.$5, 0.5, 0, null);
          }
        }
      },
      $2: function (a, i, j, b) {
        var c = new VEL.Skynet.Core.Toolbox.Geometry.Size(i, j);
        var d = this.$7.maxFontSize;
        var f = b ? 0 : 1;
        var g = this.$7.measurer;
        var h = new VEL.Skynet.Core.View.Helpers.TypeSetterOptions();
        h.maxFontSize = d;
        h.horizontalAlign = f;
        return VEL.Skynet.Core.View.Helpers.TypeSetter.arrange(a, c, g, h);
      },
    },
    g2,
    [iW]
  );
  ss.initClass(
    g8,
    e,
    {
      $paintGraphics: function (a, d, f, b, c) {
        if (ss.isValue(this.$3) && this.$3.width > 0 && this.$3.height > 0) {
          if (this.$2 > 0) {
            a.$9(this.$3, f, this.$1, this.$2);
          } else {
            a.$8(this.$3, f, this.$1);
          }
        }
        g2.prototype.$paintGraphics.call(this, a, d, f, b, c);
      },
    },
    g2,
    [iW]
  );
  ss.initClass(
    hy,
    e,
    {
      $6: function () {
        return this.$2$1;
      },
      $7: function (a) {
        this.$2$1 = a;
      },
      $3: function () {
        return this.$2$2;
      },
      $4: function (a) {
        this.$2$2 = a;
      },
      $2: function (a) {
        this.$7(a);
      },
      $1: function (a, d, f, b, c) {
        if (ss.isNullOrUndefined(this.$8)) {
          return;
        }
        this.$8.$2(a, d, b, f, c);
      },
      $5: function () {
        if (ss.isNullOrUndefined(this.$8)) {
          return null;
        }
        return this.$8.$9();
      },
    },
    g2,
    [iW]
  );
  ss.initClass(hA, e, {
    $7: function () {
      return 1;
    },
    $2: function (a, b, c) {
      return null;
    },
    $1: function () {
      var a = this.$8;
      this.$8 = false;
      return a;
    },
    $3: function (a, b) {},
    $0: null,
    $4: function (a) {
      return false;
    },
    $5: function (a) {},
    $6: function () {
      return null;
    },
  });
  ss.initClass(
    hC,
    e,
    {
      $e: function () {
        return this.$2$1;
      },
      $f: function (a) {
        this.$2$1 = a;
      },
      $9: function () {
        var a = this.$e().width / 2;
        var b = this.$e().height / 2;
        var c = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(a, b);
        if (this.$h.get_hasShadow()) {
          this.$c(c.x, c.y);
        }
        if (this.$h.get_useStroke()) {
          this.$d(c.x, c.y);
        }
        if (ss.isValue(this.$h.get_fillColour())) {
          this.$b(c.x, c.y);
        }
        if (hM.$7()) {
          this.$a(c.x, c.y);
        }
      },
      $c: null,
      $d: null,
      $b: null,
      $a: null,
      $0: function () {},
    },
    hA
  );
  ss.initClass(
    hE,
    e,
    {
      $2: function (a, c, d) {
        var b = lB.$2();
        hZ.setSize(
          b,
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(this.$e(), 2)
        );
        this.$j = new hO(b);
        if (d) {
          this.$j = this.$j.$y(
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(a.width * c, 0)
          );
        }
        this.$9();
        return b;
      },
      $c: function (a, d) {
        var f = this.$h.clone();
        f.set_strokeWidth(this.$h.get_strokeWidth() + 2);
        f.set_strokeColour(this.$g);
        for (var b = 0; b < this.$k.chunks.length; b++) {
          var c = this.$k.chunks[b];
          f.modify(c);
          this.$j.$u(c.text, c.position.x + a, c.position.y + d, f);
        }
      },
      $d: function (a, c) {
        for (var d = 0; d < this.$k.chunks.length; d++) {
          var b = this.$k.chunks[d];
          this.$h.modify(b);
          this.$j.$u(b.text, b.position.x + a, b.position.y + c, this.$h);
        }
      },
      $b: function (a, c) {
        for (var d = 0; d < this.$k.chunks.length; d++) {
          var b = this.$k.chunks[d];
          this.$h.modify(b);
          this.$j.$k(b.text, b.position.x + a, b.position.y + c, this.$h);
        }
      },
      $a: function (a, g) {
        for (var h = 0; h < this.$k.chunks.length; h++) {
          var b = this.$k.chunks[h];
          var c = VEL.Skynet.Core.Toolbox.Geometry.Rect.op_Addition(
            b.get_bounds(),
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(a, g)
          );
          this.$j.$y(c.get_topLeft()).$t(c.get_size(), e2.$3, 0.5, 2, null);
        }
        var d = VEL.Skynet.Core.Toolbox.Geometry.Rect.op_Addition(
          this.$k.actualBounds,
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(a, g)
        );
        this.$j.$y(d.get_topLeft()).$t(d.get_size(), e2.$5, 0.8, 5, null);
        var f = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor1(
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(a, g),
          this.$e()
        );
        this.$j.$y(f.get_topLeft()).$t(f.get_size(), e2.$1, 1, 10, null);
      },
    },
    hC
  );
  ss.initClass(
    hG,
    e,
    {
      $0: function () {},
      $3: function (a, g) {
        if (
          !ss.isInstanceOfType(
            this.$b,
            VEL.Skynet.Core.View.ObjectDatas._Object.Interfaces
              .IConnectObjectData
          )
        ) {
          b1.error(
            "SpokeDecorations can only be used with objects that implement " +
              ss.getTypeName(
                VEL.Skynet.Core.View.ObjectDatas._Object.Interfaces
                  .IConnectObjectData
              )
          );
        }
        var h = ss
          .cast(
            this.$b,
            VEL.Skynet.Core.View.ObjectDatas._Object.Interfaces
              .IConnectObjectData
          )
          .get_attached();
        if (ss.isNullOrUndefined(h) || ss.isNullOrUndefined(h.control)) {
          return;
        }
        var b = ss.isInstanceOfType(
          h,
          VEL.Skynet.Core.View.ObjectDatas.Tile.TileData
        )
          ? ss.cast(h, VEL.Skynet.Core.View.ObjectDatas.Tile.TileData)
              .faceShown
          : 0;
        if (
          g === this.$g &&
          this.$b.control.get_isVisible() &&
          this.$a.$0(this.$b, b, 0)
        ) {
          var c = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            this.$b.control.get_actualWidth() / 2 + this.$e,
            this.$b.control.get_actualHeight() / 2 + this.$f
          );
          var d = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            h.control.get_actualX() -
              this.$b.control.get_actualX() +
              h.control.get_outerWidth() / 2 +
              this.$e,
            h.control.get_actualY() -
              this.$b.control.get_actualY() +
              h.control.get_outerHeight() / 2 +
              this.$f
          );
          var f = this.$9.usePalette
            ? e0.$2(
                this.$9,
                ss.cast(h, VEL.Skynet.Core.View.ObjectDatas.Tile.TileData),
                b
              )
            : this.$9;
          a.$c(c, d, f, this.$d, this.$c, null);
        }
      },
    },
    hA
  );
  ss.initClass(
    hI,
    e,
    {
      $2: function (a, c, d) {
        var b = lB.$2();
        this.$j = ss.cast(b.getContext("2d"), CanvasRenderingContext2D);
        this.$j.font = this.$h.toCanvasFont(1);
        hZ.setSize(b, this.$e());
        this.$j.font = this.$h.toCanvasFont(1);
        this.$j.textAlign = "center";
        this.$j.textBaseline = "middle";
        this.$9();
        return b;
      },
      $c: function (a, b) {
        this.$j.lineWidth = this.$h.get_strokeWidth() + 2;
        this.$j.strokeStyle = this.$g.toString();
        this.$j.lineJoin = "round";
        this.$j.strokeText(this.$i.text, a, b);
      },
      $d: function (a, b) {
        this.$j.lineWidth = this.$h.get_strokeWidth();
        this.$j.strokeStyle = this.$h.get_strokeColour().toString();
        this.$j.lineJoin = "round";
        this.$j.strokeText(this.$i.text, a, b);
      },
      $b: function (a, b) {
        this.$j.fillStyle = this.$h.get_fillColour().toString();
        this.$j.fillText(this.$i.text, a, b);
      },
      $a: function (a, b) {
        this.$j.lineWidth = 1;
        this.$j.strokeStyle = e2.$8.toString();
        this.$j.lineJoin = "round";
        var c = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor1(
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(a, b),
          this.$e()
        );
        this.$j.strokeRect(a, b, this.$e().width, this.$e().height);
      },
    },
    hC
  );
  ss.initClass(hK, e, {});
  ss.initClass(hM, e, {});
  ss.initClass(hO, e, {
    $A: function () {
      return this.$O;
    },
    $B: function () {
      return this.$P;
    },
    $z: function (a) {
      var b = new hO.$1(this);
      b.$D = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
        this.$D.x + (a.$3.x + a.$9) * this.$F,
        this.$D.y + (a.$3.y + a.$a) * this.$F
      );
      b.$E = this.$E * a.$2;
      b.$O = this.$O * a.$7;
      b.$P = this.$P * a.$8;
      b.$F = this.$F * a.$6;
      b.$L = VEL.Skynet.Core.Toolbox.Geometry.EulerAngles.op_Addition(
        this.$L,
        a.$4
      );
      b.$N = this.$N || a.$5;
      b.$M = this.$M * a.$0;
      b.$K = this.$K && a.$1;
      b.$C = this.$C;
      return b;
    },
    $n: function () {
      var a = new hO.$1(this);
      a.$D = VEL.Skynet.Core.Toolbox.Geometry.Point.empty;
      a.$F = 1;
      a.$O = 1;
      a.$P = 1;
      a.$E = 1;
      a.$K = true;
      return a;
    },
    $q: function () {
      var a = new hO.$1(this);
      a.$O = 1;
      a.$P = 1;
      return a;
    },
    $o: function () {
      var a = new hO.$1(this);
      a.$E = 1;
      return a;
    },
    $p: function () {
      var a = new hO.$1(this);
      a.$L = null;
      return a;
    },
    $y: function (a) {
      var b = new hO.$1(this);
      if (ss.isValue(a)) {
        b.$D = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
          this.$D,
          a.scale(this.$F)
        );
      }
      return b;
    },
    $x: function (a) {
      var b = new hO.$1(this);
      b.$F = this.$F * a;
      return b;
    },
    $1: function (a, b) {
      if (b === 0 || ss.isNullOrUndefined(a)) {
        return this;
      } else {
        if (ss.isValue(this.$H)) {
          a = this.$H.union(a);
        }
      }
      var c = new hO.$1(this);
      c.$H = a;
      c.$I = b;
      return c;
    },
    $r: function (a, b, c) {
      this.$J.translate(b, c);
      this.$J.rotate(a.get_radians());
      this.$J.translate(-c, -b);
      return this;
    },
    $4: function () {
      this.$J.clearRect(0, 0, this.$J.canvas.width, this.$J.canvas.height);
    },
    $5: function (a) {
      if (!this.$K) {
        return;
      }
      this.$J.fillStyle = a.toString();
      this.$J.fillRect(0, 0, this.$J.canvas.width, this.$J.canvas.height);
    },
    $t: function (a, i, j, b, c) {
      if (this.$K) {
        var d = j * this.$F;
        var f = VEL.Skynet.Core.Toolbox.Geometry.Margin.op_Subtraction(
          this.$w(a),
          new VEL.Skynet.Core.Toolbox.Geometry.Margin(d / 2)
        );
        this.$J.save();
        this.$J.beginPath();
        this.$J.strokeStyle = i.toString();
        this.$J.lineWidth = d;
        if (ss.isValue(c)) {
          var g = Enumerable.from(c)
            .select(
              ss.mkdel(this, function (k) {
                return k * this.$F;
              })
            )
            .toArray();
          this.$J.setLineDash(g);
        }
        if (b > 0) {
          if (a.width < 0 || a.height < 0) {
            return;
          }
          var h = b * this.$F;
          h -= d / 2;
          if (h < 0) {
            h = 0;
          }
          if (h >= f.get_width() / 2) {
            h = f.get_width() / 2;
          }
          if (h >= f.get_height() / 2) {
            h = f.get_height() / 2;
          }
          this.$J.beginPath();
          this.$J.moveTo(f.get_left() + h, f.get_top());
          this.$J.lineTo(f.get_left() + f.get_width() - h, f.get_top());
          this.$J.arcTo(
            f.get_left() + f.get_width(),
            f.get_top(),
            f.get_left() + f.get_width(),
            f.get_top() + h,
            h
          );
          this.$J.lineTo(
            f.get_left() + f.get_width(),
            f.get_top() + f.get_height() - h
          );
          this.$J.arcTo(
            f.get_left() + f.get_width(),
            f.get_top() + f.get_height(),
            f.get_left() + f.get_width() - h,
            f.get_top() + f.get_height(),
            h
          );
          this.$J.lineTo(f.get_left() + h, f.get_top() + f.get_height());
          this.$J.arcTo(
            f.get_left(),
            f.get_top() + f.get_height(),
            f.get_left(),
            f.get_top() + f.get_height() - h,
            h
          );
          this.$J.lineTo(f.get_left(), f.get_top() + h);
          this.$J.arcTo(
            f.get_left(),
            f.get_top(),
            f.get_left() + h,
            f.get_top(),
            h
          );
          this.$J.closePath();
          this.$J.stroke();
        } else {
          this.$J.strokeRect(
            f.get_left(),
            f.get_top(),
            f.get_width(),
            f.get_height()
          );
        }
        this.$J.restore();
      }
    },
    $j: function (a, h, i, b) {
      if (!this.$K) {
        return;
      }
      var c;
      if (b > 0) {
        var d = h.createGradient(b, null, null);
        c = d.getCanvasGradient(this.$J, a);
      } else {
        c = h.toString();
      }
      var f = this.$w(a);
      if (i > 0) {
        if (a.width < 0 || a.height < 0) {
          return;
        }
        var g = i * this.$F;
        if (g >= f.get_width() / 2) {
          g = f.get_width() / 2;
        }
        if (g >= f.get_height() / 2) {
          g = f.get_height() / 2;
        }
        this.$J.save();
        this.$J.beginPath();
        this.$J.moveTo(f.get_left() + g, f.get_top());
        this.$J.lineTo(f.get_left() + f.get_width() - g, f.get_top());
        this.$J.arcTo(
          f.get_left() + f.get_width(),
          f.get_top(),
          f.get_left() + f.get_width(),
          f.get_top() + g,
          g
        );
        this.$J.lineTo(
          f.get_left() + f.get_width(),
          f.get_top() + f.get_height() - g
        );
        this.$J.arcTo(
          f.get_left() + f.get_width(),
          f.get_top() + f.get_height(),
          f.get_left() + f.get_width() - g,
          f.get_top() + f.get_height(),
          g
        );
        this.$J.lineTo(f.get_left() + g, f.get_top() + f.get_height());
        this.$J.arcTo(
          f.get_left(),
          f.get_top() + f.get_height(),
          f.get_left(),
          f.get_top() + f.get_height() - g,
          g
        );
        this.$J.lineTo(f.get_left(), f.get_top() + g);
        this.$J.arcTo(
          f.get_left(),
          f.get_top(),
          f.get_left() + g,
          f.get_top(),
          g
        );
        this.$J.closePath();
        this.$J.fillStyle = c;
        this.$J.fill();
        this.$J.restore();
      } else {
        this.$J.save();
        this.$J.globalAlpha = this.$E;
        this.$J.fillStyle = c;
        this.$J.fillRect(
          f.get_left(),
          f.get_top(),
          f.get_width(),
          f.get_height()
        );
        this.$J.restore();
      }
    },
    $i: function (a, f) {
      this.$J.fillStyle = a.toString();
      this.$J.beginPath();
      var g = Enumerable.from(f).select(ss.mkdel(this, this.$v));
      var b = g.last();
      this.$J.moveTo(b.x, b.y);
      var c = g.getEnumerator();
      try {
        while (c.moveNext()) {
          var d = c.current();
          this.$J.lineTo(d.x, d.y);
        }
      } finally {
        c.dispose();
      }
      this.$J.closePath();
      this.$J.fill();
    },
    $8: function (a, b, c) {
      this.$b(a, b, c, null, null, null);
    },
    $9: function (a, f, g, b) {
      var c = this.$w(f);
      if (f.width < 0 || f.height < 0) {
        return;
      }
      var d = b * this.$F;
      if (d >= c.get_width() / 2) {
        d = c.get_width() / 2;
      }
      if (d >= c.get_height() / 2) {
        d = c.get_height() / 2;
      }
      this.$J.save();
      this.$J.beginPath();
      this.$J.moveTo(c.get_left() + d, c.get_top());
      this.$J.lineTo(c.get_left() + c.get_width() - d, c.get_top());
      this.$J.arcTo(
        c.get_left() + c.get_width(),
        c.get_top(),
        c.get_left() + c.get_width(),
        c.get_top() + d,
        d
      );
      this.$J.lineTo(
        c.get_left() + c.get_width(),
        c.get_top() + c.get_height() - d
      );
      this.$J.arcTo(
        c.get_left() + c.get_width(),
        c.get_top() + c.get_height(),
        c.get_left() + c.get_width() - d,
        c.get_top() + c.get_height(),
        d
      );
      this.$J.lineTo(c.get_left() + d, c.get_top() + c.get_height());
      this.$J.arcTo(
        c.get_left(),
        c.get_top() + c.get_height(),
        c.get_left(),
        c.get_top() + c.get_height() - d,
        d
      );
      this.$J.lineTo(c.get_left(), c.get_top() + d);
      this.$J.arcTo(
        c.get_left(),
        c.get_top(),
        c.get_left() + d,
        c.get_top(),
        d
      );
      this.$J.closePath();
      this.$J.clip();
      this.$b(a, f, g, null, null, null);
      this.$J.restore();
    },
    $7: function (a, c, d) {
      if (!this.$K || ss.isNullOrUndefined(c)) {
        return;
      }
      var b = this.$w(c);
      if (d.$1 > 0 || d.$0 > 0 || d.$2 > 0 || d.$3 > 0) {
        this.$g(a, d, b);
      } else {
        throw new ss.NotImplementedException();
      }
    },
    $g: function (a, f, g) {
      var b = this.$m(f, g);
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        hZ.safeDrawImage$1(this.$J, a, d, g.get_size());
      }
    },
    $m: function (a, j) {
      var k = this.$3(
        a.$2,
        this.$G.width,
        j.get_topLeft().x,
        a.$0,
        j.get_size().width
      );
      var b = this.$3(
        a.$3,
        this.$G.height,
        j.get_topLeft().y,
        a.$1,
        j.get_size().height
      );
      var c = [];
      for (var d = 0; d < b.$0; d++) {
        var f = b.$2 + d * b.$1;
        for (var g = 0; g < k.$0; g++) {
          var h = k.$2 + g * k.$1;
          var i = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(h, f);
          c.push(i);
        }
      }
      return c;
    },
    $3: function (a, j, k, b, c) {
      var d = a > 0 || b > 0;
      var f = a > 0 ? this.$F * a : c;
      var g = f > 0;
      if (!d || !g) {
        return new hR.$0(k, 0, 1);
      }
      if (b === 0) {
        k = k % f;
        if (k > 0) {
          k -= f;
        }
      }
      j = j - k;
      var h = j / f;
      var i = ss.Int32.trunc(Math.ceil(h));
      b = b === 0 ? i : Math.min(b, i);
      return new hR.$0(k, f, b);
    },
    $6: function (a, f, g) {
      var b = 0.01;
      var c = lB.$3();
      hZ.setSize(c, f.outerSize);
      var d = ss.cast(c.getContext("2d"), CanvasRenderingContext2D);
      d.save();
      hO.$0(d, f, b);
      d.clip();
      d.translate(f.centerVertex.x, f.centerVertex.y);
      if (g) {
        d.rotate(-f.halfSweepAngle.get_radians());
      }
      d.drawImage(a, -f.radius, -f.radius, f.radius * 2, f.radius * 2);
      d.restore();
      this.$8(
        c,
        new VEL.Skynet.Core.Toolbox.Geometry.Size(c.width, c.height),
        null
      );
    },
    $a: function (a, d, f, b, c) {
      this.$b(a, c, null, d, f, b);
    },
    $f: function (a, y, z, b, c, d) {
      var f = this.$w(y);
      this.$J.save();
      var g = f.get_width() / b.x;
      var h = f.get_height() / b.y;
      if (ss.isValue(z)) {
        this.$J.fillStyle = z.toString();
        for (var i = 0; i < b.x; i++) {
          for (var j = 0; j < b.y; j++) {
            var k = f.get_left() + g * i;
            var l = f.get_top() + h * j;
            this.$J.fillRect(k, l, g - c, h - c);
          }
        }
      }
      var m = f.get_width() / b.x - c;
      var n = f.get_height() / b.y - c;
      var o = a.width / b.x;
      var p = a.height / b.y;
      var q = ss.getEnumerator(d);
      try {
        while (q.moveNext()) {
          var r = q.current();
          var s = (r % b.x) / b.x;
          var t = Math.floor(r / b.x) / b.y;
          var u = f.get_left() + f.get_width() * s;
          var v = f.get_top() + f.get_height() * t;
          var w = a.width * s;
          var x = a.height * t;
          this.$J.drawImage(a, w, x, o, p, u, v, m, n);
        }
      } finally {
        q.dispose();
      }
      this.$J.restore();
    },
    $b: function (a, k, l, b, c, d) {
      if (
        !this.$K ||
        this.$O === 0 ||
        this.$P === 0 ||
        ss.isNullOrUndefined(k)
      ) {
        return;
      }
      lH.assertLeak(a);
      this.$J.save();
      var f = this.$w(k);
      if (ss.isValue(d)) {
        f = f.translate(
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply(d, this.$F)
        );
      }
      var g = f.get_topLeft();
      var h = f.get_size();
      this.$J.globalAlpha = this.$E;
      switch (this.$I) {
        case 1:
          this.$J.beginPath();
          this.$J.rect(
            this.$H.get_left(),
            this.$H.get_top(),
            this.$H.get_width(),
            this.$H.get_height()
          );
          this.$J.clip();
          break;
        case 2:
          this.$J.beginPath();
          this.$J.rect(
            0,
            0,
            this.$G.width,
            this.$H.get_height() + this.$H.get_top()
          );
          this.$J.clip();
          break;
      }
      this.$2(g, h);
      if (h.width < 0) {
        var i = g.x;
        this.$J.translate(i, 0);
        this.$J.scale(-1, 1);
        this.$J.translate(-i, 0);
        h = new VEL.Skynet.Core.Toolbox.Geometry.Size(-h.width, h.height);
      }
      if (h.height < 0) {
        var j = g.y;
        this.$J.translate(j, 0);
        this.$J.scale(1, -1);
        this.$J.translate(-j, 0);
        h = new VEL.Skynet.Core.Toolbox.Geometry.Size(h.width, -h.height);
      }
      if (ss.isValue(l) && !l.isTransparent) {
        this.$J.fillStyle = l.toString();
        this.$J.fillRect(g.x, g.y, h.width, h.height);
      }
      if (ss.isValue(c) && ss.isValue(b)) {
        hZ.safeDrawImage$3(this.$J, a, b, c, g, h);
      } else {
        hZ.safeDrawImage$1(this.$J, a, g, h);
      }
      this.$J.restore();
    },
    $c: function (a, f, g, b, c, d) {
      this.$e(g, b, c, [[a, f]], d, false);
    },
    $d: function (a, f, g, b, c, d) {
      this.$e(a, f, g, [b], c, d);
    },
    $e: function (a, l, m, b, c, d) {
      if (!this.$K) {
        return;
      }
      this.$J.lineWidth = l * this.$F;
      this.$J.strokeStyle = a.toString();
      this.$J.lineCap = m;
      if (ss.isValue(c)) {
        this.$J.setLineDash(c);
      }
      this.$J.beginPath();
      for (var f = 0; f < b.length; f++) {
        var g = b[f];
        var h = Enumerable.from(g).select(ss.mkdel(this, this.$v));
        var i = h.first();
        this.$J.moveTo(i.x, i.y);
        var j = h.skip(1).getEnumerator();
        try {
          while (j.moveNext()) {
            var k = j.current();
            this.$J.lineTo(k.x, k.y);
          }
        } finally {
          j.dispose();
        }
      }
      if (d) {
        this.$J.closePath();
      }
      this.$J.stroke();
    },
    $k: function (a, c, d, b) {
      if (this.$K) {
        this.$J.save();
        a = this.$0(a);
        this.$J.globalAlpha = this.$E;
        this.$J.font = b.toCanvasFont(this.$F);
        this.$J.textBaseline = "alphabetic";
        this.$J.fillStyle = b.get_fillColour().toString();
        this.$J.fillText(a, this.$D.x + c * this.$F, this.$D.y + d * this.$F);
        this.$J.restore();
      }
    },
    $u: function (a, f, g, b) {
      if (!this.$K) {
        return;
      }
      this.$J.save();
      a = this.$0(a);
      this.$J.font = b.toCanvasFont(this.$F);
      this.$J.textBaseline = "alphabetic";
      this.$J.strokeStyle = b.get_strokeColour().toString();
      this.$J.lineWidth = this.$F * b.get_strokeWidth();
      this.$J.lineJoin = "round";
      var c = this.$D.x + f * this.$F;
      var d = this.$D.y + g * this.$F;
      this.$J.strokeText(a, c, d);
      this.$J.restore();
    },
    $s: function (a, h, i, b) {
      if (!this.$K) {
        return;
      }
      var c = h * this.$F;
      var d = a * this.$F;
      var f = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
        this.$D,
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(d, d)
      );
      this.$J.save();
      this.$J.beginPath();
      var g = Math.max(0, d - c / 2);
      this.$J.arc(f.x, f.y, g, 0, 2 * Math.PI);
      this.$J.strokeStyle = i.toString();
      this.$J.lineWidth = c;
      if (ss.isValue(b)) {
        this.$J.setLineDash(b);
      }
      this.$J.stroke();
      this.$J.restore();
    },
    $h: function (a, b, c) {
      if (this.$K) {
        a = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
          this.$D,
          a.scale(this.$F)
        );
        b = b * this.$F;
        this.$J.save();
        this.$J.globalAlpha = this.$E;
        this.$J.beginPath();
        this.$J.arc(a.x, a.y, b, 0, 2 * Math.PI);
        this.$J.fillStyle = c.toString();
        this.$J.fill();
        this.$J.restore();
      }
    },
    $l: function (a) {
      if (ss.isNullOrUndefined(a) || a.width === 0 || a.height === 0) {
        return VEL.Skynet.Core.Toolbox.Geometry.Rect.get_empty();
      }
      return this.$w(a);
    },
    $w: function (a) {
      var d = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(a, this.$F);
      var f = d.scale(this.$O, this.$P);
      var b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Division(
        VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction$1(d, f),
        2
      );
      var c = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition$1(
        this.$D,
        b
      );
      return new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor1(c, f);
    },
    $v: function (a) {
      return new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
        this.$D.x + this.$F * this.$O * a.x,
        this.$D.y + this.$F * this.$P * a.y
      );
    },
    $2: function (a, m) {
      if (ss.isValue(this.$L)) {
        var n = this.$L.get_x().get_radians();
        var b = this.$L.get_y().get_radians();
        var c = this.$L.get_z().get_radians();
        if (n !== 0 || b !== 0 || c !== 0) {
          var d =
            this.$N ||
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.5, 0.5);
          var f = a.x + m.width * d.x;
          var g = a.y + m.height * d.y;
          this.$J.translate(f, g);
          if (this.$M > 1) {
            this.$J.scale(1 / this.$M, 1);
          }
          if (this.$M < 1) {
            this.$J.scale(1, this.$M);
          }
          if (n !== 0 || b !== 0) {
            var h = Math.sin(n) * Math.cos(b) + Math.sin(n);
            var i = Math.cos(n) * Math.sin(b) + Math.sin(b);
            var j = Math.atan(h / i);
            var k =
              Math.cos(b) +
              Math.sin(n) * Math.sin(b) +
              Math.cos(n) +
              Math.cos(n) * Math.cos(b);
            var l = Math.acos(0.5 * (k - 1));
            this.$J.rotate(-j);
            this.$J.scale(1, Math.cos(l));
            this.$J.rotate(j);
          }
          if (c !== 0) {
            this.$J.rotate(c);
          }
          if (this.$M > 1) {
            this.$J.scale(this.$M, 1);
          }
          if (this.$M < 1) {
            this.$J.scale(1, 1 / this.$M);
          }
          this.$J.translate(-f, -g);
        }
      }
    },
    $0: function (a) {
      return (
        (VEL.Skynet.Core.DataStructures.WordwallXml.isRtlText(a) ? "" : "") +
        a +
        ""
      );
    },
  });
  hO.$1.prototype = hO.prototype;
  ss.initClass(hR, e, {
    getHashCode: function () {
      var a = this.$2;
      a = (a * 397) ^ this.$1;
      a = (a * 397) ^ this.$0;
      return a;
    },
    equals: function (a) {
      if (!ss.isInstanceOfType(a, hR)) {
        return false;
      }
      return this.$2 === a.$2 && this.$1 === a.$1 && this.$0 === a.$0;
    },
  });
  hR.$0.prototype = hR.prototype;
  hR.__class = false;
  ss.initClass(hT, e, {});
  ss.initClass(hV, e, {});
  ss.initClass(hX, e, {
    toString: function () {
      return (
        "(" +
        this.red +
        "," +
        this.green +
        "," +
        this.blue +
        ", " +
        this.alpha +
        ")"
      );
    },
  });
  ss.initClass(hZ, e, {});
  ss.initClass(h1, e, {
    measureWidth: function (a, b, c) {
      return this.measureSize(a, b, c).width;
    },
    measureSize: function (a, l, m) {
      if (this.$1) {
        var b = 10000;
        var c = l / b;
        this.$0(b, m);
        var d = h1.$g.measureText(a);
        var f = h1.$g.measureText(ss.trimStartString(a, [160]));
        var g = h1.$g.measureText(ss.trimEndString(a, [160]));
        var h = ss.trimString(a, [160]).length === 0;
        var i = h ? 0 : d.width - f.width;
        var j = d.width - g.width;
        return new VEL.Skynet.Core.View.Helpers.TextSize.$ctor3(
          d.width * c,
          d.actualBoundingBoxAscent * c,
          d.actualBoundingBoxDescent * c,
          (d.actualBoundingBoxLeft + i) * c,
          (d.actualBoundingBoxRight + j) * c
        );
      } else {
        this.$0(l, m);
        var k = h1.$g.measureText(a);
        return new VEL.Skynet.Core.View.Helpers.TextSize.$ctor2(k.width, l);
      }
    },
    $0: function (a, c) {
      if (ss.isValue(this.fontStack)) {
        var d = h1.$0(c, 1);
        var b = h1.$0(c, 4);
        h1.$g.font = e8.toCanvasFont(this.fontStack, a, d ? 700 : 400, b);
      } else {
        if (ss.isValue(this.canvasFont)) {
          h1.$g.font = ss.formatString(this.canvasFont, a);
        } else {
          throw new ss.NotImplementedException();
        }
      }
    },
  });
  h1.$i.prototype = h1.prototype;
  ss.initEnum(h3, e, { Objects: 0, Background: 1, Foreground: 2 });
  ss.initInterface(h7, e, { get_visibility: null, set_visibility: null }, [h5]);
  ss.initInterface(
    h9,
    e,
    {
      get_translateX: null,
      set_translateX: null,
      get_translateY: null,
      set_translateY: null,
      get_translateZ: null,
      set_translateZ: null,
    },
    [h5]
  );
  ss.initInterface(
    g1,
    e,
    {
      get_opacity: null,
      set_opacity: null,
      get_scaleX: null,
      set_scaleX: null,
      get_scaleY: null,
      set_scaleY: null,
      updateFrame: null,
      get_frame: null,
      get_angle: null,
      set_angle: null,
      get_parent: null,
      get_angleAxisRatio: null,
      set_angleAxisRatio: null,
      get_rotationCenter: null,
      set_rotationCenter: null,
      get_objectBounds: null,
      get_absoluteBounds: null,
      get_size: null,
      get_isMirrored: null,
    },
    [h5, h9, h7]
  );
  ss.initClass(g3, e, {
    $9: null,
    $6: null,
    $7: function () {
      return this.$1$1;
    },
    $8: function (a) {
      this.$1$1 = a;
    },
    $3: function (a) {},
    $5: null,
    $4: null,
    $1: null,
    $0: null,
    $2: null,
  });
  ss.initClass(
    g7,
    e,
    {
      $g: function (a) {
        var f = ss.cast(this.$7(), h9);
        var g = b3.getProperty(f, this.$a().get_targetProperty());
        var b = g + this.$u * a;
        b3.setProperty(f, this.$a().get_targetProperty(), b);
        var c = this.$u * this.$s * a;
        if (Math.abs(c) > Math.abs(this.$u)) {
          c = this.$u;
        }
        var d = this.$r * a;
        this.$u += d - c;
      },
      $e: function () {
        ss.makeGenericType(hY, [iF]).prototype.$e.call(this);
        this.$w = new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
          this.$a().get_initialSpeed()
        );
        this.$v = new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
          this.$a().get_drag()
        );
        this.$t = new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
          this.$a().get_constantForce()
        );
      },
      $d: function () {
        ss.makeGenericType(hY, [iF]).prototype.$d.call(this);
        this.$u = this.$w.getValue(false);
        this.$s = this.$v.getValue(false);
        this.$r = this.$t.getValue(false);
      },
      $0: function (a) {
        var b = new g7(this.$a());
        b.$8(a);
        return b;
      },
    },
    ss.makeGenericType(hY, [iF])
  );
  ss.initClass(
    g9,
    e,
    {
      $4: function (a) {
        if (!ss.staticEquals(a, null)) {
          a(this);
        }
        if (ss.isValue(this.$c)) {
          b1.error("missing animation: " + this.$c);
        }
      },
      $0: function (a) {
        return this;
      },
      $2: function () {
        return this.$a();
      },
      $5: function (a) {},
      $1: function () {},
    },
    ss.makeGenericType(g5, [ix])
  );
  ss.initClass(
    hz,
    e,
    {
      $5: function (a) {},
      $0: function (a) {
        var b = new hz(this.$a());
        b.$8(a);
        return b;
      },
      $4: function (a) {
        this.$1();
      },
      $1: function () {
        ik.$0(this.$7());
      },
    },
    ss.makeGenericType(g5, [io])
  );
  ss.initClass(
    hB,
    e,
    {
      $0: function (a) {
        var c = this.$a().clone();
        c.set_children([]);
        var d = new hB(c);
        d.$8(a);
        var b = d;
        this.$d(b, a);
        return b;
      },
      $f: function () {
        if (ss.isValue(this.$a().get_decorationsX())) {
          this.$p =
            ss.coalesce(this.$p, 0) +
            new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
              this.$a().get_decorationsX()
            ).getValue(false);
        }
        if (ss.isValue(this.$a().get_decorationsY())) {
          this.$q =
            ss.coalesce(this.$q, 0) +
            new VEL.Skynet.Core.Toolbox.Maths.NumberProvider.$ctor1(
              this.$a().get_decorationsY()
            ).getValue(false);
        }
        this.$o = [];
        var a;
        if (ss.isValue(this.$u)) {
          if (Enumerable.from(this.$g()).any()) {
            throw new ss.InvalidOperationException(
              "Can't specify Children + ResourceName"
            );
          }
          var h = im.$0(this.$u);
          a = [];
          a.push(h);
        } else {
          a = this.$g();
        }
        var i = this.$e(a);
        for (var b = 0; b < i.length; b++) {
          var c = i[b];
          if (ss.isValue(this.$p) || ss.isValue(this.$q)) {
            this.$l(c);
          }
          if (this.$6() && c.$6()) {
            this.$o.push(c);
          } else {
            c.$4(null);
          }
        }
        var d = Enumerable.from(this.$o).toArray();
        for (var f = 0; f < d.length; f++) {
          var g = d[f];
          g.$4(ss.mkdel(this, this.$n));
        }
        this.$m();
      },
      $l: function (a) {
        var b = ss.safeCast(a, hD);
        if (ss.isValue(b)) {
          b.$m(b.$l() + ss.coalesce(this.$p, 0));
          b.$o(b.$n() + ss.coalesce(this.$q, 0));
        }
        var c = ss.safeCast(a, hB);
        if (ss.isValue(c)) {
          c.$p = ss.coalesce(c.$p, 0) + ss.coalesce(this.$p, 0);
          c.$q = ss.coalesce(c.$q, 0) + ss.coalesce(this.$q, 0);
        }
      },
      $n: function (a) {
        ss.remove(this.$o, a);
        this.$p = null;
        this.$q = null;
        this.$m();
      },
      $m: function () {
        if (!Enumerable.from(this.$o).any()) {
          if (this.$t) {
            var a = this.$s;
            if (ss.isNullOrUndefined(a)) {
              a = this.$r;
            }
            this.$s = a;
            if (
              !ss.isValue(this.$s) ||
              ss.Nullable$1.gt((this.$s = ss.Nullable$1.sub(this.$s, 1)), 0)
            ) {
              this.$4(this.$j);
            } else {
              if (!ss.staticEquals(this.$j, null)) {
                this.$j(this);
                this.$j = null;
              }
            }
          } else {
            this.$s = null;
            if (!ss.staticEquals(this.$j, null)) {
              this.$j(this);
              this.$j = null;
            }
          }
        }
      },
    },
    ss.makeGenericType(hP, [h8])
  );
  hB.$0.prototype = hB.prototype;
  ss.initClass(
    hD,
    e,
    {
      $l: function () {
        return this.$3$1;
      },
      $m: function (a) {
        this.$3$1 = a;
      },
      $n: function () {
        return this.$3$2;
      },
      $o: function (a) {
        this.$3$2 = a;
      },
      $f: function () {
        return this.$3$3;
      },
      $g: function (a) {
        this.$3$3 = a;
      },
      $j: function () {
        return this.$3$4;
      },
      $k: function (a) {
        this.$3$4 = a;
      },
      $h: function () {
        return this.$3$5;
      },
      $i: function (a) {
        this.$3$5 = a;
      },
      $d: function () {
        return this.$3$6;
      },
      $e: function (a) {
        this.$3$6 = a;
      },
      $5: function (a) {},
      $3: function (a) {
        this.$r = a;
      },
      $4: function (a) {
        if (this.$a().get_instances() < 1) {
          throw new VEL.Skynet.Core.Toolbox.Serialization.XmlException.$ctor1(
            "DecorationAnimation cannot have " +
              this.$a().get_instances() +
              " Instances. " +
              this
          );
        }
        if (ss.isValue(this.$q)) {
          throw new a4(
            "DecorationAnimation cannot be triggered when it already has a painter. A clone should be used instead." +
              this
          );
        }
        this.$p = a;
        var i = ss.cast(this.$7(), g1);
        var j = ig.$2(i, this.$a().get_zLayer());
        var b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Division(
          new VEL.Skynet.Core.Toolbox.Geometry.Size.$ctor1(
            this.$a().get_width(),
            this.$a().get_height(),
            this.$a().get_aspectRatio()
          ),
          j
        );
        var c = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          this.$l(),
          this.$n()
        );
        if (ss.isValue(this.$h())) {
          this.$q = new i0.$0(this.$h().$4(false), true, null, null, null);
        } else {
          if (ss.isValue(this.$r)) {
            if (b.width <= 0 || b.height <= 0) {
              b = i.get_size();
            }
            var d = this.$a().get_useTypeSetting()
              ? new hE(
                  this.$r,
                  this.$a().get_fontName(),
                  this.$a().get_fontSize(),
                  this.$a().get_fontWeight(),
                  this.$f(),
                  this.$j(),
                  this.$a().get_strokeWidth(),
                  this.$a().get_hasShadow(),
                  b
                )
              : new hI(
                  this.$r,
                  this.$a().get_fontName(),
                  this.$a().get_fontSize(),
                  this.$a().get_fontWeight(),
                  this.$f(),
                  this.$j(),
                  this.$a().get_strokeWidth(),
                  this.$a().get_hasShadow()
                );
            b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Division(d.$e(), j);
            this.$q = d;
          } else {
            throw new ss.InvalidOperationException(
              "A Decoration Animation must have Graphics or Text"
            );
          }
        }
        var f = this.$a().get_instances();
        var g = ss.mkdel(this, function () {
          f--;
          if (f === 0) {
            this.$1();
          }
        });
        for (var h = 0; h < this.$a().get_instances(); h++) {
          this.$c(i, g, b, c);
        }
      },
      $c: function (a, h, i, b) {
        var c;
        var d;
        var f = ss.isInstanceOfType(this.$q, i0)
          ? new i0(ss.cast(this.$q, i0), new iq())
          : this.$q;
        if (ss.isValue(f)) {
          d = new ka(
            f,
            b,
            i,
            VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty(),
            this.$a().get_origin(),
            true,
            1,
            this.$a().get_repeatX(),
            0,
            0,
            this.$a().get_zLayer(),
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            false,
            a9.$0(this.$a().get_binding()),
            true
          );
          d.$13(a);
          ig.$0(d);
          c = d;
        } else {
          c = a;
          d = null;
        }
        var g = this.$d().$0(c);
        g.$4(function (j) {
          if (ss.isValue(d)) {
            ig.$4(d);
          }
          h();
        });
      },
      $1: function () {
        if (!ss.staticEquals(this.$p, null)) {
          this.$p(this);
        }
        if (ss.isValue(this.$q)) {
          this.$q.$0();
        }
        this.$p = null;
      },
      $0: function (a) {
        var b = new hD(this.$a());
        b.$8(a);
        b.$i(this.$h());
        var c = b;
        c.$3(this.$r);
        return c;
      },
    },
    ss.makeGenericType(g5, [it])
  );
  ss.initClass(
    hF,
    e,
    {
      $v: function (a) {
        var b = ss.cast(this.$7(), h7);
        if (a !== b.get_visibility()) {
          b.set_visibility(a);
        }
      },
      $s: function () {
        var a = ss.cast(this.$7(), h7);
        return a.get_visibility();
      },
      $0: function (a) {
        var b = new hF(this.$a());
        b.$8(a);
        return b;
      },
      $r: function () {
        if (ss.unbox(this.$a().get_valueChange())) {
          return !this.$D;
        }
        return this.$D;
      },
    },
    ss.makeGenericType(h2, [Boolean, iX])
  );
  ss.initClass(
    hH,
    e,
    {
      $E: function () {
        return ss.cast(this.$7(), g1);
      },
      $v: function (a) {
        this.$E().updateFrame(a);
      },
      $s: function () {
        return ss.coalesce(this.$E().get_frame(), 0);
      },
      $0: function (a) {
        var b = new hH(this.$a());
        b.$8(a);
        return b;
      },
      $r: function () {
        return this.$D + ss.unbox(this.$a().get_valueChange());
      },
    },
    ss.makeGenericType(h2, [ss.Int32, iz])
  );
  ss.initClass(
    hJ,
    e,
    {
      $5: function (a) {
        if (a === 0) {
          if (this.$a().get_coordinates() !== 0) {
            this.$G = this.$s();
          }
          if (this.$a().get_coordinates() === 2) {
            var b = ss.cast(this.$7(), g1);
            switch (this.$a().get_targetProperty()) {
              case 0:
                this.$H =
                  (hK.$8().width * b.get_objectBounds().get_width()) /
                  b.get_absoluteBounds().get_width();
                break;
              case 1:
                this.$H =
                  (hK.$8().height * b.get_objectBounds().get_height()) /
                  b.get_absoluteBounds().get_height();
                break;
              default:
                throw new ss.ArgumentOutOfRangeException(
                  "can't use Z with screen-scaled co-ordinates"
                );
            }
          }
        }
        ss.makeGenericType(hY, [iR]).prototype.$5.call(this, a);
      },
      $v: function (a) {
        var b = ss.cast(this.$7(), h9);
        switch (this.$a().get_coordinates()) {
          case 0:
            this.$F(b, a);
            break;
          case 1:
            this.$F(b, a + this.$G);
            break;
          case 2:
            this.$F(b, a * this.$H + this.$G);
            break;
        }
      },
      $s: function () {
        var a = ss.cast(this.$7(), h9);
        return b3.getProperty(a, this.$a().get_targetProperty());
      },
      $0: function (a) {
        var b = new hJ(this.$a());
        b.$8(a);
        return b;
      },
      $F: function (a, b) {
        b3.setProperty(a, this.$a().get_targetProperty(), b);
      },
    },
    ss.makeGenericType(h4, [iR])
  );
  ss.initClass(
    hL,
    e,
    {
      $v: function (a) {
        ss.cast(this.$7(), g1).set_opacity(a);
      },
      $s: function () {
        return ss.cast(this.$7(), g1).get_opacity();
      },
      $0: function (a) {
        var b = new hL(this.$a());
        b.$8(a);
        return b;
      },
    },
    ss.makeGenericType(h4, [iD])
  );
  ss.initClass(
    hN,
    e,
    {
      $v: function (a) {
        var b = ss.cast(this.$7(), g1);
        if (ss.isNullOrUndefined(b.get_angle())) {
          switch (this.$a().get_targetProperty()) {
            case 1:
              b.set_angle(
                VEL.Skynet.Core.Toolbox.Geometry.EulerAngles.fromDegrees(
                  a,
                  0,
                  0
                )
              );
              break;
            case 2:
              b.set_angle(
                VEL.Skynet.Core.Toolbox.Geometry.EulerAngles.fromDegrees(
                  0,
                  a,
                  0
                )
              );
              break;
            case 0:
              b.set_angle(
                VEL.Skynet.Core.Toolbox.Geometry.EulerAngles.fromDegrees(
                  0,
                  0,
                  a
                )
              );
              break;
          }
        } else {
          switch (this.$a().get_targetProperty()) {
            case 1:
              b.set_angle(
                VEL.Skynet.Core.Toolbox.Geometry.EulerAngles.fromDegrees(
                  a,
                  b.get_angle().get_y().get_degrees(),
                  b.get_angle().get_z().get_degrees()
                )
              );
              break;
            case 2:
              b.set_angle(
                VEL.Skynet.Core.Toolbox.Geometry.EulerAngles.fromDegrees(
                  b.get_angle().get_x().get_degrees(),
                  a,
                  b.get_angle().get_z().get_degrees()
                )
              );
              break;
            case 0:
              b.set_angle(
                VEL.Skynet.Core.Toolbox.Geometry.EulerAngles.fromDegrees(
                  b.get_angle().get_x().get_degrees(),
                  b.get_angle().get_y().get_degrees(),
                  a
                )
              );
              break;
          }
        }
        b.set_rotationCenter(
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            this.$a().get_$centerX(),
            this.$a().get_$centerY()
          )
        );
        b.set_angleAxisRatio(this.$a().get_$axisRatio());
      },
      $s: function () {
        var a = ss.cast(this.$7(), g1);
        if (ss.isNullOrUndefined(a.get_angle())) {
          return 0;
        }
        var b = 0;
        switch (this.$a().get_targetProperty()) {
          case 1:
            b = a.get_angle().get_x().get_degrees();
            break;
          case 2:
            b = a.get_angle().get_y().get_degrees();
            break;
          case 0:
            b = a.get_angle().get_z().get_degrees();
            break;
        }
        if (b > 180) {
          b -= 360;
        }
        return b;
      },
      $0: function (a) {
        var b = new hN(this.$a());
        b.$8(a);
        return b;
      },
    },
    ss.makeGenericType(h4, [iH])
  );
  ss.initClass(
    hQ,
    e,
    {
      $v: function (a) {
        var b = ss.cast(this.$7(), g1);
        switch (this.$a().get_targetProperty()) {
          case 0:
            b.set_scaleX(a);
            b.set_scaleY(a);
            break;
          case 1:
            b.set_scaleX(a);
            break;
          case 2:
            b.set_scaleY(a);
            break;
          default:
            throw new ss.NotImplementedException();
        }
      },
      $s: function () {
        var a = ss.cast(this.$7(), g1);
        switch (this.$a().get_targetProperty()) {
          case 0:
            return a.get_scaleX();
          case 1:
            return a.get_scaleX();
          case 2:
            return a.get_scaleY();
          default:
            throw new ss.NotImplementedException();
        }
      },
      $0: function (a) {
        var b = new hQ(this.$a());
        b.$8(a);
        return b;
      },
    },
    ss.makeGenericType(h4, [iJ])
  );
  ss.initClass(
    hS,
    e,
    {
      $5: function (a) {
        if (this.$d) {
          return;
        }
        this.$e += a;
        if (this.$e >= this.$a().get_startTime()) {
          id.play(this.$a().get_sounds(), ss.mkdel(this, this.$1));
          this.$d = true;
        }
      },
      $0: function (a) {
        var b = new hS(this.$a());
        b.$8(a);
        return b;
      },
      $1: function () {
        ik.$1(this);
        this.$e = 0;
        this.$d = false;
        if (!ss.staticEquals(this.$c, null)) {
          this.$c(this);
        }
      },
      $4: function (a) {
        this.$c = a;
        ik.$3(this);
        this.$5(0);
      },
    },
    ss.makeGenericType(g5, [iN])
  );
  ss.initClass(
    hU,
    e,
    {
      $0: function (a) {
        var c = this.$a().clone();
        c.set_children([]);
        var d = new hU(c);
        d.$8(a);
        var b = d;
        this.$d(b, a);
        return b;
      },
      $f: function () {
        var a = this.$e(this.$g());
        this.$l(a);
        if (!this.$6() && !ss.staticEquals(this.$j, null)) {
          this.$j(this);
        }
      },
      $l: function (a) {
        if (!Enumerable.from(a).any()) {
          if (this.$6() && !ss.staticEquals(this.$j, null)) {
            this.$j(this);
          }
          return;
        }
        var b = Enumerable.from(a).first();
        ss.remove(a, b);
        if (b.$6()) {
          b.$4(
            ss.mkdel(this, function (c) {
              this.$l(a);
            })
          );
        } else {
          b.$4(null);
          this.$l(a);
        }
      },
    },
    ss.makeGenericType(hP, [ic])
  );
  ss.initClass(
    hW,
    e,
    {
      $4: function (a) {
        if (Enumerable.from(this.$n).contains(this.$a().$8())) {
          ss.cast(this.$7(), g1).set_rotationCenter(
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              this.$a().get_$centerX(),
              this.$a().get_$centerY()
            )
          );
          ss.cast(this.$7(), g1).set_angleAxisRatio(this.$a().get_$axisRatio());
        }
        ik.$3(this);
      },
      $5: function (a) {
        var g = this.$a().$2() ? null : ss.cast(this.$7(), g1).get_parent();
        if (ss.isInstanceOfType(g, kC)) {
          g = g.get_parent();
        }
        var h = g || ss.cast(this.$7(), g1);
        var b = this.$e(this.$a().$4(), h);
        if (ss.isValue(this.$l)) {
          if (this.$g(this.$a().$4())) {
            b = this.$d(b);
          }
          var c = this.$h(this.$a().$4())
            ? (b - ss.unbox(this.$l)) / (1000 * a)
            : b;
          var d = this.$k.getOutput(c);
          var f = this.$c(d, a);
          if (this.$i(this.$a().$8())) {
            this.$f(this.$a().$8(), ss.cast(this.$7(), g1), f);
          } else {
            this.$j(this.$a().$8(), ss.cast(this.$7(), g1), f);
          }
          this.$m = f;
        }
        this.$l = b;
      },
      $1: function () {},
      $0: function (a) {
        var b = new hW(this.$a());
        b.$8(a);
        return b;
      },
      $j: function (a, b, c) {
        switch (a) {
          case 3:
            b.set_translateX(c);
            break;
          case 4:
            b.set_translateY(c);
            break;
          case 0:
            b.set_scaleX(c);
            b.set_scaleY(c);
            break;
          case 1:
            b.set_scaleX(c);
            break;
          case 2:
            b.set_scaleY(c);
            break;
          case 7:
            b.set_angle(
              VEL.Skynet.Core.Toolbox.Geometry.EulerAngles.fromDegrees(
                0,
                0,
                c
              )
            );
            break;
          case 12:
            b.set_angle(
              VEL.Skynet.Core.Toolbox.Geometry.EulerAngles.fromDegrees(
                c,
                0,
                0
              )
            );
            break;
          case 13:
            b.set_angle(
              VEL.Skynet.Core.Toolbox.Geometry.EulerAngles.fromDegrees(
                0,
                c,
                0
              )
            );
            break;
          case 9:
            b.set_opacity(c);
            break;
          default:
            throw new ss.NotImplementedException();
        }
      },
      $f: function (a, b, c) {
        switch (a) {
          case 5:
            b.set_translateX(b.get_translateX() + c);
            break;
          case 6:
            b.set_translateY(b.get_translateY() + c);
            break;
          case 8:
            b.get_angle().get_z().increment(c);
            break;
          case 10:
            b.get_angle().get_x().increment(c);
            break;
          case 11:
            b.get_angle().get_y().increment(c);
            break;
          default:
            throw new ss.NotImplementedException();
        }
      },
      $e: function (a, b) {
        switch (a) {
          case 2:
          case 0:
            return b.get_objectBounds().get_left();
          case 3:
          case 1:
            return b.get_objectBounds().get_top();
          case 5:
          case 4:
            return b.get_angle().get_z().get_degrees();
          case 10:
            return b.get_angle().get_x().get_degrees();
          case 11:
            return b.get_angle().get_y().get_degrees();
          case 7:
          case 6:
            return ss.cast(b, ko).$1k();
          case 8:
          case 9:
            return ss.cast(b, ki).get_data().rotation.get_degrees();
          default:
            throw new ss.NotImplementedException();
        }
      },
      $h: function (a) {
        return a === 2 || a === 3 || a === 5 || a === 8 || a === 7;
      },
      $g: function (a) {
        return a === 9 || a === 8 || a === 4 || a === 5;
      },
      $i: function (a) {
        return a === 5 || a === 6 || a === 8;
      },
      $c: function (a, d) {
        if (
          !ss.isValue(this.$a().$6()) ||
          !ss.isValue(this.$m) ||
          ss.unbox(this.$m) === a
        ) {
          return a;
        }
        var f = ss.unbox(this.$a().$6()) * d;
        var b = ss.unbox(this.$m) + f;
        var c = ss.unbox(this.$m) - f;
        if (a > b) {
          return b;
        }
        if (a < c) {
          return c;
        }
        return a;
      },
      $d: function (a) {
        var b = ss.coalesce(this.$l, 0);
        var c =
          a -
          VEL.Skynet.Core.Toolbox.Geometry.Angle.fromDegrees(b).get_degrees();
        if (c <= -180) {
          b += 360;
        } else {
          if (c > 180) {
            b -= 360;
          }
        }
        return b + c;
      },
    },
    ss.makeGenericType(g5, [ih])
  );
  ss.initClass(
    h6,
    e,
    {
      $F: function () {
        return ss.cast(this.$7(), g1);
      },
      $v: function (a) {
        var b = ss.Int32.trunc(ss.round(a));
        this.$F().updateFrame(b);
      },
      $s: function () {
        return ss.coalesce(this.$F().get_frame(), 0);
      },
      $0: function (a) {
        var b = new h6(this.$a());
        b.$8(a);
        return b;
      },
    },
    ss.makeGenericType(h4, [iB])
  );
  ss.initClass(ia, e, {
    get_name: function () {
      return this.$1$1;
    },
    set_name: function (a) {
      this.$1$1 = a;
    },
    get_targetName: function () {
      return this.$1$2;
    },
    set_targetName: function (a) {
      this.$1$2 = a;
    },
    get_blocking: function () {
      return this.$1$3;
    },
    set_blocking: function (a) {
      this.$1$3 = a;
    },
  });
  ss.initClass(
    ie,
    e,
    {
      get_children: function () {
        return this.$2$1;
      },
      set_children: function (a) {
        this.$2$1 = a;
      },
      get_delay: function () {
        return this.$2$2;
      },
      set_delay: function (a) {
        this.$2$2 = a;
      },
    },
    ia,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [ia])]
  );
  ss.initClass(
    h8,
    e,
    {
      get_repeat: function () {
        return this.$3$1;
      },
      set_repeat: function (a) {
        this.$3$1 = a;
      },
      get_maxRepeats: function () {
        return this.$3$2;
      },
      set_maxRepeats: function (a) {
        this.$3$2 = a;
      },
      get_decorationsX: function () {
        return this.$3$3;
      },
      set_decorationsX: function (a) {
        this.$3$3 = a;
      },
      get_decorationsY: function () {
        return this.$3$4;
      },
      set_decorationsY: function (a) {
        this.$3$4 = a;
      },
      get_resourceName: function () {
        return this.$3$5;
      },
      set_resourceName: function (a) {
        this.$3$5 = a;
      },
      clone: function () {
        var a = new h8();
        a.set_name(this.get_name());
        a.set_targetName(this.get_targetName());
        a.set_maxRepeats(this.get_maxRepeats());
        a.set_repeat(this.get_repeat());
        a.set_blocking(this.get_blocking());
        a.set_resourceName(this.get_resourceName());
        a.set_delay(this.get_delay());
        a.set_decorationsX(this.get_decorationsX());
        a.set_decorationsY(this.get_decorationsY());
        a.set_children(Enumerable.from(this.get_children()).toArray());
        var b = a;
        return b;
      },
    },
    ie,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [ia])]
  );
  ss.initClass(
    ic,
    e,
    {
      clone: function () {
        var a = new ic();
        a.set_name(this.get_name());
        a.set_targetName(this.get_targetName());
        a.set_blocking(this.get_blocking());
        a.set_delay(this.get_delay());
        a.set_children(Enumerable.from(this.get_children()).toArray());
        var b = a;
        return b;
      },
    },
    ie,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [ia])]
  );
  ss.initInterface(iZ, e, {
    get_$axisRatio: null,
    set_$axisRatio: null,
    get_$centerX: null,
    set_$centerX: null,
    get_$centerY: null,
    set_$centerY: null,
  });
  ss.initClass(
    ih,
    e,
    {
      $4: function () {
        return this.$2$1;
      },
      $5: function (a) {
        this.$2$1 = a;
      },
      $8: function () {
        return this.$2$2;
      },
      $9: function (a) {
        this.$2$2 = a;
      },
      $6: function () {
        return this.$2$3;
      },
      $7: function (a) {
        this.$2$3 = a;
      },
      $0: function () {
        return this.$2$4;
      },
      $1: function (a) {
        this.$2$4 = a;
      },
      get_$axisRatio: function () {
        return this.$2$5;
      },
      set_$axisRatio: function (a) {
        this.$2$5 = a;
      },
      get_$centerX: function () {
        return this.$2$6;
      },
      set_$centerX: function (a) {
        this.$2$6 = a;
      },
      get_$centerY: function () {
        return this.$2$7;
      },
      set_$centerY: function (a) {
        this.$2$7 = a;
      },
      $2: function () {
        return this.$2$8;
      },
      $3: function (a) {
        this.$2$8 = a;
      },
    },
    ia,
    [iZ]
  );
  ss.initEnum(ij, e, {
    PositionX: 0,
    PositionY: 1,
    VelocityX: 2,
    VelocityY: 3,
    RotationPosition: 4,
    RotationVelocity: 5,
    BeltPosition: 6,
    BeltVelocity: 7,
    DataRotationVelocity: 8,
    DataRotationPosition: 9,
    RotationPositionX: 10,
    RotationPositionY: 11,
  });
  ss.initEnum(il, e, {
    Scale: 0,
    ScaleX: 1,
    ScaleY: 2,
    PositionX: 3,
    PositionY: 4,
    VelocityX: 5,
    VelocityY: 6,
    RotationPosition: 7,
    RotationVelocity: 8,
    Opacity: 9,
    RotationVelocityX: 10,
    RotationVelocityY: 11,
    RotationPositionX: 12,
    RotationPositionY: 13,
  });
  ss.initClass(io, e, {}, ia);
  ss.initClass(
    iq,
    e,
    {
      getCustomProperty: function (a) {
        switch (a) {
          case "Random":
            return this.random;
          case "Index":
            return this.index;
          default:
            throw new ss.InvalidOperationException(
              ss.getTypeName(ss.getInstanceType(this)) +
                " Does not have a custom property called " +
                a
            );
        }
      },
    },
    VEL.Skynet.Core.View.ObjectDatas._Object.ObjectData
  );
  ss.initClass(
    it,
    e,
    {
      get_animation: function () {
        return this.$2$1;
      },
      set_animation: function (a) {
        this.$2$1 = a;
      },
      get_origin: function () {
        return this.$2$2;
      },
      set_origin: function (a) {
        this.$2$2 = a;
      },
      get_zLayer: function () {
        return this.$2$3;
      },
      set_zLayer: function (a) {
        this.$2$3 = a;
      },
      get_graphics: function () {
        return this.$2$4;
      },
      set_graphics: function (a) {
        this.$2$4 = a;
      },
      get_width: function () {
        return this.$2$5;
      },
      set_width: function (a) {
        this.$2$5 = a;
      },
      get_height: function () {
        return this.$2$6;
      },
      set_height: function (a) {
        this.$2$6 = a;
      },
      get_aspectRatio: function () {
        return this.$2$7;
      },
      set_aspectRatio: function (a) {
        this.$2$7 = a;
      },
      get_fontName: function () {
        return this.$2$8;
      },
      set_fontName: function (a) {
        this.$2$8 = a;
      },
      get_fontSize: function () {
        return this.$2$9;
      },
      set_fontSize: function (a) {
        this.$2$9 = a;
      },
      get_fontWeight: function () {
        return this.$2$10;
      },
      set_fontWeight: function (a) {
        this.$2$10 = a;
      },
      get_fill: function () {
        return this.$2$11;
      },
      set_fill: function (a) {
        this.$2$11 = a;
      },
      get_strokeColour: function () {
        return this.$2$12;
      },
      set_strokeColour: function (a) {
        this.$2$12 = a;
      },
      get_strokeWidth: function () {
        return this.$2$13;
      },
      set_strokeWidth: function (a) {
        this.$2$13 = a;
      },
      get_hasShadow: function () {
        return this.$2$14;
      },
      set_hasShadow: function (a) {
        this.$2$14 = a;
      },
      get_x: function () {
        return this.$2$15;
      },
      set_x: function (a) {
        this.$2$15 = a;
      },
      get_y: function () {
        return this.$2$16;
      },
      set_y: function (a) {
        this.$2$16 = a;
      },
      get_instances: function () {
        return this.$2$17;
      },
      set_instances: function (a) {
        this.$2$17 = a;
      },
      get_repeatX: function () {
        return this.$2$18;
      },
      set_repeatX: function (a) {
        this.$2$18 = a;
      },
      get_useTypeSetting: function () {
        return this.$2$19;
      },
      set_useTypeSetting: function (a) {
        this.$2$19 = a;
      },
      get_binding: function () {
        return this.$2$20;
      },
      set_binding: function (a) {
        this.$2$20 = a;
      },
    },
    ia
  );
  ss.initClass(
    iP,
    e,
    {
      get_startTime: function () {
        return this.$2$1;
      },
      set_startTime: function (a) {
        this.$2$1 = a;
      },
      get_duration: function () {
        return this.$2$2;
      },
      set_duration: function (a) {
        this.$2$2 = a;
      },
      get_repeatTime: function () {
        return this.$2$3;
      },
      set_repeatTime: function (a) {
        this.$2$3 = a;
      },
    },
    ia
  );
  ss.initClass(
    iv,
    e,
    {
      get_ease: function () {
        return this.$4$1;
      },
      set_ease: function (a) {
        this.$4$1 = a;
      },
    },
    ss.makeGenericType(iV, [String])
  );
  ss.initClass(ix, e, {}, ia);
  ss.initClass(
    iz,
    e,
    {},
    ss.makeGenericType(iV, [ss.makeGenericType(ss.Nullable$1, [ss.Int32])])
  );
  ss.initClass(iB, e, {}, iv);
  ss.initClass(iD, e, {}, iv);
  ss.initClass(
    iF,
    e,
    {
      get_initialSpeed: function () {
        return this.$3$1;
      },
      set_initialSpeed: function (a) {
        this.$3$1 = a;
      },
      get_constantForce: function () {
        return this.$3$2;
      },
      set_constantForce: function (a) {
        this.$3$2 = a;
      },
      get_drag: function () {
        return this.$3$3;
      },
      set_drag: function (a) {
        this.$3$3 = a;
      },
      get_targetProperty: function () {
        return this.$3$4;
      },
      set_targetProperty: function (a) {
        this.$3$4 = a;
      },
    },
    iP
  );
  ss.initClass(
    iH,
    e,
    {
      get_$axisRatio: function () {
        return this.$5$1;
      },
      set_$axisRatio: function (a) {
        this.$5$1 = a;
      },
      get_$centerX: function () {
        return this.$5$2;
      },
      set_$centerX: function (a) {
        this.$5$2 = a;
      },
      get_$centerY: function () {
        return this.$5$3;
      },
      set_$centerY: function (a) {
        this.$5$3 = a;
      },
      get_targetProperty: function () {
        return this.$5$4;
      },
      set_targetProperty: function (a) {
        this.$5$4 = a;
      },
    },
    iv,
    [iZ]
  );
  ss.initClass(
    iJ,
    e,
    {
      get_targetProperty: function () {
        return this.$5$1;
      },
      set_targetProperty: function (a) {
        this.$5$1 = a;
      },
    },
    iv
  );
  ss.initEnum(iL, e, { XY: 0, X: 1, Y: 2 });
  ss.initClass(
    iN,
    e,
    {
      get_startTime: function () {
        return this.$2$1;
      },
      set_startTime: function (a) {
        this.$2$1 = a;
      },
      get_sounds: function () {
        return this.$2$2;
      },
      set_sounds: function (a) {
        this.$2$2 = a;
      },
    },
    ia
  );
  ss.initClass(
    iR,
    e,
    {
      get_coordinates: function () {
        return this.$5$1;
      },
      set_coordinates: function (a) {
        this.$5$1 = a;
      },
      get_targetProperty: function () {
        return this.$5$2;
      },
      set_targetProperty: function (a) {
        this.$5$2 = a;
      },
    },
    iv
  );
  ss.initEnum(iT, e, { Layer: 0, Object: 1, Screen: 2 });
  ss.initClass(
    iX,
    e,
    {},
    ss.makeGenericType(iV, [ss.makeGenericType(ss.Nullable$1, [Boolean])])
  );
  ss.initClass(i1, e, {
    get_scale: function () {
      return this.$1$1;
    },
    set_scale: function (a) {
      this.$1$1 = a;
    },
    get_randomScale: function () {
      return this.$1$2;
    },
    set_randomScale: function (a) {
      this.$1$2 = a;
    },
    get_actualScale: function () {
      if (!ss.isValue(this.$2)) {
        if (this.get_randomScale() === 0) {
          this.$2 = this.get_scale();
        } else {
          var a = this.getRandomNumber() * this.get_randomScale();
          this.$2 = this.get_scale() + a;
        }
      }
      return ss.unbox(this.$2);
    },
    get_offset: function () {
      return this.$1$3;
    },
    set_offset: function (a) {
      this.$1$3 = a;
    },
    get_randomOffset: function () {
      return this.$1$4;
    },
    set_randomOffset: function (a) {
      this.$1$4 = a;
    },
    get_actualOffset: function () {
      if (!ss.isValue(this.$1)) {
        if (this.get_randomOffset() === 0) {
          this.$1 = this.get_offset();
        } else {
          var a = this.getRandomNumber() * this.get_randomOffset();
          this.$1 = this.get_offset() + a;
        }
      }
      return ss.unbox(this.$1);
    },
    getOutput: null,
    $0: null,
    getRandomNumber: function () {
      return i1.random.next(10000) / 10000;
    },
  });
  ss.initClass(
    i3,
    e,
    {
      getOutput: function (a) {
        return a * this.get_actualScale() + this.get_actualOffset();
      },
      $0: function () {
        var a = new i3();
        a.set_scale(this.get_scale());
        a.set_offset(this.get_offset());
        a.set_randomOffset(this.get_randomOffset());
        a.set_randomScale(this.get_randomScale());
        return a;
      },
    },
    i1
  );
  ss.initClass(
    i5,
    e,
    {
      get_frequency: function () {
        return this.$2$1;
      },
      set_frequency: function (a) {
        this.$2$1 = a;
      },
      get_randomPhase: function () {
        return this.$2$2;
      },
      set_randomPhase: function (a) {
        this.$2$2 = a;
      },
      getOutput: function (a) {
        return (
          this.get_actualOffset() +
          this.get_actualScale() *
            Math.sin(a * this.get_frequency() * 2 * Math.PI + this.$3())
        );
      },
      $0: function () {
        var a = new i5();
        a.set_frequency(this.get_frequency());
        a.set_scale(this.get_scale());
        a.set_offset(this.get_offset());
        a.set_randomOffset(this.get_randomOffset());
        a.set_randomPhase(this.get_randomPhase());
        a.set_randomScale(this.get_randomScale());
        return a;
      },
      $3: function () {
        if (!this.get_randomPhase()) {
          return 0;
        }
        if (!ss.isValue(this.$4)) {
          this.$4 = 2 * Math.PI * this.getRandomNumber();
        }
        return ss.unbox(this.$4);
      },
    },
    i1
  );
  ss.initClass(ig, e, {});
  ss.initClass(ii, e, {});
  ss.initClass(ik, e, {});
  ss.initClass(im, e, {});
  ss.initClass(ip, e, {
    $1: function () {
      var a = Enumerable.from(this.$5)
        .where(function (b) {
          return b.$4 === 4;
        })
        .toArray();
      ss.clear(this.$5);
      ss.arrayAddRange(this.$5, a);
      if (ss.isValue(this.$6) && this.$6.$4 !== 4) {
        this.$6.$1();
      }
    },
    $2: function () {
      return ss.isValue(this.$6);
    },
    $0: function (a, g, h, b) {
      if (ss.isInstanceOfType(a, hD)) {
        a.$4(
          !ss.staticEquals(h, null)
            ? function (i) {
                h();
              }
            : null
        );
        return;
      }
      if (b) {
        this.$1();
      }
      var c = new ir(this, a, g, h);
      if (ss.isValue(this.$6) && this.$6.$0(c)) {
        var d = this.$6;
        this.$4(c);
        d.$1();
        this.$5.push(c);
      } else {
        var f = Enumerable.from(this.$5).firstOrDefault(function (i) {
          return i.$0(c);
        }, ss.getDefaultValue(ir));
        if (ss.isValue(f)) {
          this.$5[ss.indexOf(this.$5, f)] = c;
        } else {
          this.$5.push(c);
        }
      }
      if (ss.isNullOrUndefined(this.$6)) {
        this.$3();
      }
    },
    $3: function () {
      if (Enumerable.from(this.$5).any()) {
        var a = Enumerable.from(this.$5).first();
        ss.remove(this.$5, a);
        this.$4(a);
      } else {
        this.$6 = null;
      }
    },
    $4: function (a) {
      this.$6 = a;
      a.$3();
    },
  });
  ss.initClass(ir, e, {
    $3: function () {
      this.$5.$4(ss.mkdel(this, this.$2));
    },
    $1: function () {
      this.$5.$1();
    },
    $0: function (a) {
      if (this.$4 === 3 || this.$4 === 4) {
        return false;
      }
      return this.$4 === a.$4;
    },
    $2: function (a) {
      if (!ss.staticEquals(this.$6, null)) {
        this.$6();
      }
      this.$7.$3();
    },
  });
  ss.initEnum(iu, e, {
    highlight: 0,
    disable: 1,
    select: 2,
    none: 3,
    protected$1: 4,
  });
  ss.initClass(iE, e, {
    get_easingMode: function () {
      return this.$1$1;
    },
    set_easingMode: function (a) {
      this.$1$1 = a;
    },
    getEase: function (a, c, d, b) {
      switch (this.get_easingMode()) {
        case 1:
          return this.easeIn(a, c, d, b);
        case 2:
          return this.easeOut(a, c, d, b);
        default:
          return this.easeBoth(a, c, d, b);
      }
    },
    easeIn: function (a, c, d, b) {
      throw new ss.NotImplementedException();
    },
    easeOut: function (a, c, d, b) {
      throw new ss.NotImplementedException();
    },
    easeBoth: function (a, c, d, b) {
      throw new ss.NotImplementedException();
    },
  });
  iE.$ctor1.prototype = iE.prototype;
  ss.initClass(
    iw,
    e,
    {
      easeIn: function (a, c, d, b) {
        return d - this.easeOut(b - a, 0, d, b) + c;
      },
      easeOut: function (a, c, d, b) {
        if ((a /= b) < 0.363636363636364) {
          return d * (7.5625 * a * a) + c;
        } else {
          if (a < 0.727272727272727) {
            return d * (7.5625 * (a -= 0.545454545454545) * a + 0.75) + c;
          } else {
            if (a < 0.9090909090909089) {
              return d * (7.5625 * (a -= 0.818181818181818) * a + 0.9375) + c;
            } else {
              return d * (7.5625 * (a -= 0.954545454545455) * a + 0.984375) + c;
            }
          }
        }
      },
    },
    iE
  );
  ss.initClass(iG, e, {
    get_easingMode: function () {
      return this.$1$1;
    },
    set_easingMode: function (a) {
      this.$1$1 = a;
    },
  });
  ss.initClass(iy, e, {}, iG);
  ss.initClass(
    iA,
    e,
    {
      easeIn: function (a, c, d, b) {
        a /= b;
        return -d * (Math.sqrt(1 - a * a) - 1) + c;
      },
      easeOut: function (a, c, d, b) {
        a /= b;
        a--;
        return d * Math.sqrt(1 - a * a) + c;
      },
      easeBoth: function (a, c, d, b) {
        a /= b / 2;
        if (a < 1) {
          return (-d / 2) * (Math.sqrt(1 - a * a) - 1) + c;
        }
        a = a - 2;
        return (d / 2) * (Math.sqrt(1 - a * a) + 1) + c;
      },
    },
    iE
  );
  ss.initClass(iC, e, {}, iG);
  ss.initEnum(iI, e, { Both: 0, In: 1, Out: 2 });
  ss.initClass(
    iK,
    e,
    {
      easeIn: function (a, d, f, b) {
        var c = 1 - a / b;
        return 1 - this.$0(d, f, c);
      },
      easeOut: function (a, d, f, b) {
        var c = a / b;
        return this.$0(d, f, c);
      },
      $0: function (a, b, c) {
        return (
          (Math.pow(2, -10 * c) *
            Math.sin(((c - this.$1 / 4) * (2 * Math.PI)) / this.$1) +
            1) *
            b +
          a
        );
      },
    },
    iE
  );
  iK.$ctor1.prototype = iK.prototype;
  ss.initClass(
    iM,
    e,
    {
      get_springiness: function () {
        return this.$2$1;
      },
      set_springiness: function (a) {
        this.$2$1 = a;
      },
    },
    iG
  );
  ss.initClass(
    iO,
    e,
    {
      easeIn: function (a, d, f, b) {
        a /= b;
        var c = f * a * a + d;
        return c;
      },
      easeOut: function (a, d, f, b) {
        a /= b;
        var c = -f * a * (a - 2) + d;
        return c;
      },
      easeBoth: function (a, c, d, b) {
        a /= b / 2;
        if (a < 1) {
          return (d / 2) * (a * a) + c;
        }
        a--;
        return (-d / 2) * (a * (a - 2) - 1) + c;
      },
    },
    iE
  );
  iO.$ctor1.prototype = iO.prototype;
  ss.initClass(iQ, e, {}, iG);
  ss.initClass(
    iS,
    e,
    {
      getEase: function (a, c, d, b) {
        if (this.$3 <= 0) {
          return this.$1(a, c, d, b) + this.$2(a, b);
        }
        return iE.prototype.getEase.call(this, a, c, d, b);
      },
      easeIn: function (a, c, d, b) {
        return (
          this.$1(a, c, d, b) + Math.exp(-this.$3 * (1 - a / b)) * this.$2(a, b)
        );
      },
      easeOut: function (a, c, d, b) {
        return (
          this.$1(a, c, d, b) + Math.exp((-this.$3 * a) / b) * this.$2(a, b)
        );
      },
      easeBoth: function (a, c, d, b) {
        return (
          this.$1(a, c, d, b) +
          Math.pow(Math.sin((Math.PI * a) / b), this.$3) * this.$2(a, b)
        );
      },
      $1: function (a, c, d, b) {
        return c + (d * a) / b;
      },
      $2: function (a, c) {
        var d = this.$4 * 2 * Math.PI;
        var b = this.$8 ? a : a / c;
        return this.$7 * Math.sin(b * d + this.$0() + this.$5);
      },
      $0: function () {
        if (this.$6) {
          return ((ss.getHashCode(this) % 1000) * Math.PI) / 500;
        } else {
          return 0;
        }
      },
    },
    iE
  );
  ss.initClass(
    iU,
    e,
    {
      get_frequency: function () {
        return this.$2$1;
      },
      set_frequency: function (a) {
        this.$2$1 = a;
      },
      get_scale: function () {
        return this.$2$2;
      },
      set_scale: function (a) {
        this.$2$2 = a;
      },
      get_decay: function () {
        return this.$2$3;
      },
      set_decay: function (a) {
        this.$2$3 = a;
      },
      get_phase: function () {
        return this.$2$4;
      },
      set_phase: function (a) {
        this.$2$4 = a;
      },
      get_randomPhase: function () {
        return this.$2$5;
      },
      set_randomPhase: function (a) {
        this.$2$5 = a;
      },
    },
    iG
  );
  ss.initClass(iY, e, {});
  ss.initClass(
    i0,
    e,
    {
      $7: function () {
        return ss.isValue(this.$d) ? this.$d.$0() : 1;
      },
      $1: function () {
        if (ss.isNullOrUndefined(this.$d)) {
          return false;
        }
        return this.$d.$hasChanged(this.$a, this.$9());
      },
      $2: function (a, f, g) {
        var b = lB.$2();
        var c = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(a, f);
        hZ.setSize(b, c);
        var d = new hO(b);
        d.$C = g;
        d.$F = f;
        if (ss.isValue(this.$d)) {
          this.$d.$paintGraphics(d, this.$a, a, c, this.$9());
        }
        if (ss.isValue(this.$e)) {
          this.$e.$2(
            d,
            ss.cast(this.$a, VEL.Skynet.Core.View.ObjectDatas.Tile.TileData),
            a,
            0,
            1,
            60
          );
        }
        return b;
      },
      $9: function () {
        if (ss.isValue(this.$b)) {
          return ss.unbox(this.$b);
        }
        var a = ss.safeCast(
          this.$a,
          VEL.Skynet.Core.View.ObjectDatas.Tile.TileData
        );
        if (ss.isNullOrUndefined(a)) {
          return 0;
        }
        return a.faceShown;
      },
      $0: function () {
        if (ss.isValue(this.$d) && this.$c) {
          this.$d.dispose();
        }
      },
      $4: function (a) {
        return ss.isValue(this.$d) && this.$d.$update(a);
      },
      $5: function (a) {
        if (ss.isValue(this.$d)) {
          this.$d.$updateFrame(a);
        }
      },
      $6: function () {
        return this.$d.get_$frame();
      },
    },
    hA
  );
  i0.$0.prototype = i0.prototype;
  ss.initClass(i2, e, {
    $0: function (a) {
      return a === this.$6;
    },
    $1: function (a) {
      if (this.$5) {
        if (a < 0) {
          a = 0;
        }
        return a % this.$9 === this.$7;
      }
      return a === this.$8;
    },
    $2: function (a) {
      return function (b) {
        return ss.referenceEquals(b, ss.Enum.parse(a, this.$4));
      };
    },
    toString: function () {
      return this.$3 + "=" + this.$4;
    },
  });
  ss.initClass(i4, e, {
    $0: function (a, d, f) {
      if (this.$2.length === 0) {
        return true;
      }
      for (var b = 0; b < this.$2.length; b++) {
        var c = this.$2[b];
        if (!this.$1(c, a, d, f)) {
          return false;
        }
      }
      return true;
    },
    $1: function (a, g, h, b) {
      if (a.$3 === "Frame") {
        return a.$1(b);
      }
      if (ss.isNullOrUndefined(g)) {
        throw new a4(
          "A data object must be provided for the Condition property '" +
            a.$3 +
            "'. Part: " +
            a +
            ", Condition: " +
            this
        );
      }
      var c = ss.cast(g.control, j6);
      switch (a.$3) {
        case "State":
          return a.$1(g.get_state());
        case "IsHighlighted":
          return a.$0(g.isHighlighted);
        case "IsEliminated":
          return a.$0(g.isEliminated);
        case "IsDisabled":
          return a.$0(g.isDisabled);
        case "BuildIndex":
          return a.$1(c.$B());
        case "PaletteIndex":
          return a.$1(ss.coalesce(g.paletteIndex, 0));
      }
      if (
        ss.isInstanceOfType(g, VEL.Skynet.Core.View.ObjectDatas.Tile.TileData)
      ) {
        var d = ss.cast(g, VEL.Skynet.Core.View.ObjectDatas.Tile.TileData);
        switch (a.$3) {
          case "IsSelected":
            return a.$0(d.isSelected);
          case "FaceShown":
            return a
              .$2(VEL.Skynet.Core.View.ObjectDatas.Tile.Enumerations.FaceEnum)
              .call(a, h);
          case "IsNeutral":
            return a.$0(d.isTileNeutral(h));
          case "PrimaryGlyph":
            return a
              .$2(VEL.Skynet.Core.View.ObjectDatas.Tile.GlyphEnum)
              .call(a, d.primaryGlyph);
          case "SecondaryGlyph":
            return a
              .$2(VEL.Skynet.Core.View.ObjectDatas.Tile.GlyphEnum)
              .call(a, d.secondaryGlyph);
        }
      }
      var f = g.getCustomProperty(a.$3);
      if (ss.isValue(f)) {
        return a.$1(ss.unbox(f));
      }
      throw new ss.NotImplementedException(
        "Can't match " +
          a.$3 +
          "=" +
          a.$4 +
          " using " +
          ss.getTypeName(ss.getInstanceType(g))
      );
    },
  });
  ss.initClass(
    i6,
    e,
    {
      $2: null,
      $1: function (a, b, c) {
        return false;
      },
      $0: function (a) {
        if (
          ss.isInstanceOfType(
            a,
            VEL.Skynet.Core.View.ObjectDatas.Tile.TileData
          )
        ) {
          switch (
            ss.cast(a, VEL.Skynet.Core.View.ObjectDatas.Tile.TileData).shape
          ) {
            case 12:
            case 15:
              return 3;
            case 11:
              return 2;
          }
        }
        if (
          ss.isInstanceOfType(
            a,
            VEL.Skynet.Core.View.ObjectDatas.Place.PlaceData
          )
        ) {
          switch (
            ss
              .cast(a, VEL.Skynet.Core.View.ObjectDatas.Place.PlaceData)
              .get_placeStyle()
          ) {
            case 8:
              return 3;
            case 11:
              return 6;
          }
        }
        return 1;
      },
      dispose: null,
    },
    null,
    [ss.IDisposable]
  );
  ss.initClass(
    i9,
    e,
    {
      $0: function () {
        return this.$1$1;
      },
      $1: function (a) {
        this.$1$1 = a;
      },
      $paintGraphics: function (a, h, i, b, c) {
        var d = 0;
        for (var f = 0; f < this.$4.length; f++) {
          var g = this.$4[f];
          if (g.$3.$0(h, c, this.$2)) {
            g.$2(a, h, i, b, this.$2);
            this.$5 = d;
            return;
          }
          d++;
        }
        this.$5 = -1;
      },
      $hasChanged: function (a, f) {
        var g = 0;
        var b = this.$5;
        for (var c = 0; c < this.$4.length; c++) {
          var d = this.$4[c];
          if (d.$3.$0(a, f, this.$2)) {
            return g !== b || d.$1(a, this.$2, f);
          }
          g++;
        }
        return -1 !== b;
      },
      $updateFrame: function (a) {
        this.$2 = a;
      },
      get_$frame: function () {
        return this.$2;
      },
      $update: function (a) {
        if (this.$3 > 0) {
          var b = a / 1000;
          this.$6 += b;
          if (this.$6 > this.$3) {
            this.$6 = 0;
            this.$2++;
            return true;
          }
        }
        return false;
      },
      dispose: function () {
        for (var a = 0; a < this.$4.length; a++) {
          var b = this.$4[a];
          b.dispose();
        }
      },
    },
    null,
    [iW, ss.IDisposable]
  );
  ss.initClass(
    jb,
    e,
    {
      $0: function (a) {
        var c = a ? 1 : 0;
        var d = this.$1[c];
        if (ss.isValue(d)) {
          return d;
        }
        var b = i7.getImageElement(this.$2);
        if (ss.isNullOrUndefined(b)) {
          throw new ss.ArgumentNullException("Cannot find image " + this.$2);
        }
        d = this.$1[c] = iY.scaleImageToCanvas(
          b,
          true,
          new VEL.Skynet.Core.Toolbox.Geometry.Size(b.width, b.height),
          a,
          null,
          this.$3
        );
        return d;
      },
      dispose: function () {
        for (var a = 0; a < this.$1.length; a++) {
          var b = this.$1[a];
          lB.$4(b);
        }
      },
    },
    null,
    [ss.IDisposable]
  );
  ss.initClass(
    jd,
    e,
    {
      dispose: function () {
        this.$5.dispose();
      },
      $1: function (a, b, c) {
        return (
          this.$4(this.$a, a, b, this.$b) !== this.$9 ||
          this.$4(this.$7, a, b, this.$8) !== this.$6
        );
      },
      $2: function (a, i, j, b, c) {
        var d = a.$C ? 1 : 0;
        var f = this.$5.$0(a.$C);
        var g = new VEL.Skynet.Core.Toolbox.Geometry.Size(
          ss.Int32.div(f.width, this.$8),
          ss.Int32.div(f.height, this.$b)
        );
        this.$9 = this.$4(this.$a, i, c, this.$b);
        this.$6 = this.$4(this.$7, i, c, this.$8);
        var h = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          this.$6 * g.width,
          this.$9 * g.height
        );
        a.$a(f, h, g, null, j);
      },
      $4: function (a, g, h, b) {
        if (ss.isNullOrUndefined(a)) {
          return 0;
        }
        if (a === "Frame") {
          return h % b;
        }
        if (ss.isNullOrUndefined(g)) {
          throw new a4(
            "A data object must be provided for the property '" +
              a +
              "' to be used as the column or row property."
          );
        }
        var c = ss.cast(g.control, j6);
        if (a === "State") {
          return g.get_state() % b;
        }
        if (
          ss.isInstanceOfType(
            g,
            VEL.Skynet.Core.View.ObjectDatas.Tile.TileData
          )
        ) {
          var d = ss.cast(g, VEL.Skynet.Core.View.ObjectDatas.Tile.TileData);
          switch (a) {
            case "PaletteIndex":
              return ss.coalesce(d.paletteIndex, 0) % b;
            case "BuildIndex":
              return c.$B() % b;
          }
        }
        var f = g.getCustomProperty(a);
        if (ss.isValue(f)) {
          return ss.unbox(f) % b;
        }
        throw new ss.NotImplementedException(
          "Can't get integer for " +
            a +
            " using " +
            ss.getTypeName(ss.getInstanceType(g))
        );
      },
    },
    i6,
    [ss.IDisposable]
  );
  ss.initClass(
    jf,
    e,
    {
      $2: function (a, f, g, b, c) {
        if (
          ss.isNullOrUndefined(this.$a) ||
          b.width !== this.$a.width ||
          b.height !== this.$a.height
        ) {
          this.$9(a, f, g, b);
        }
        switch (this.$f) {
          case 2:
            var d = VEL.Skynet.Core.Toolbox.Geometry.Segment.fromOuterHeight(
              g.height,
              ss.cast(
                f,
                VEL.Skynet.Core.View.ObjectDatas.Tile.SegmentTileData
              ).sweepAngle
            );
            a.$6(this.$a, d, false);
            break;
          default:
            a.$8(this.$a, g, null);
            break;
        }
      },
      dispose: function () {
        if (!this.$e) {
          lB.$4(this.$a);
        }
      },
      $9: function (a, i, j, b) {
        if (this.$f === 0) {
          this.$f = this.$0(i);
        }
        lB.$4(this.$a);
        this.$a = lB.$1();
        hZ.setSize(this.$a, b);
        var c = new hO(this.$a);
        c.$F = a.$F;
        c.$C = a.$C;
        switch (this.$f) {
          case 7:
            this.$6(c, j);
            break;
          case 4:
            this.$4(c, j, this.$c, this.$g, this.$i);
            break;
          case 5:
            this.$7(c, j);
            break;
          case 6:
            this.$5(c, i, j);
            break;
          default:
            if (ss.isValue(this.$c) && !ss.referenceEquals(this.$c, e2.$6)) {
              switch (this.$f) {
                case 3:
                  c.$h(
                    new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                      j.width / 2,
                      j.height / 2
                    ),
                    j.width / 2,
                    this.$c
                  );
                  break;
                default:
                  c.$j(j, this.$c, this.$b, this.$d);
                  break;
              }
            }
            if (
              ss.isValue(this.$g) &&
              this.$i > 0 &&
              !ss.referenceEquals(this.$g, e2.$6)
            ) {
              var d = this.$8();
              switch (this.$f) {
                case 3:
                  c.$s(j.width / 2, this.$i, this.$g, d);
                  break;
                default:
                  if (this.$h === 3) {
                    var f = j.height - this.$i / 2;
                    var g = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                      this.$b,
                      f
                    );
                    var h = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                      j.width - this.$b,
                      f
                    );
                    c.$c(g, h, this.$g, this.$i, "butt", d);
                  } else {
                    c.$t(j, this.$g, this.$i, this.$b, d);
                  }
                  break;
              }
            }
            break;
        }
      },
      $4: function (a, i, j, b, c) {
        var d = i.width / 10;
        var f = i.height / 10;
        var g = c / 2;
        var h = [
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(g, f * 2.5),
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(g, f * 7.5),
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(d * 4, f * 7.5),
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            d * 4,
            f * 10 - g / 2
          ),
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            d * 10 - g,
            f * 5
          ),
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(d * 4, g),
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(d * 4, f * 2.5),
        ];
        if (ss.isValue(j)) {
          a.$i(j, h);
        }
        if (ss.isValue(b)) {
          a.$d(b, c, "butt", h, null, true);
        }
      },
      $8: function () {
        switch (this.$h) {
          case 0:
          case 3:
            return null;
          case 1:
            return [this.$i * 3, this.$i * 3];
          case 2:
            return [this.$i, this.$i];
          default:
            throw new ss.NotImplementedException();
        }
      },
      $5: function (a, j, k) {
        var b = ss.cast(
          j,
          VEL.Skynet.Core.View.ObjectDatas.Place.Interfaces.IGridPlaceData
        );
        for (var c = 0; c <= b.get_gridWidth(); c++) {
          var d = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            (c * k.width) / b.get_gridWidth(),
            0
          );
          var f = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            d.x,
            k.height
          );
          a.$c(d, f, this.$g, this.$i, null, null);
        }
        for (var g = 0; g <= b.get_gridHeight(); g++) {
          var h = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            0,
            (g * k.height) / b.get_gridHeight()
          );
          var i = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            k.width,
            h.y
          );
          a.$c(h, i, this.$g, this.$i, null, null);
        }
      },
      $7: function (a, f) {
        if (ss.isValue(this.$g)) {
          var g = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$i / 2,
            this.$i / 2,
            f.width - this.$i,
            f.height - this.$i
          );
          var b = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            g.get_left(),
            g.get_top() + g.get_height() * 0.55
          );
          var c = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            g.get_left() + g.get_width() * 0.31,
            g.get_top() + g.get_height() * 0.85
          );
          var d = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            g.get_right(),
            g.get_top()
          );
          a.$c(b, c, this.$g, this.$i, null, null);
          a.$c(c, d, this.$g, this.$i, null, null);
        }
      },
      $6: function (a, c) {
        a.$j(c, e2.$0, 0, 0);
        var d = Math.min(c.width * 0.25, c.height * 0.25);
        var b = c.width * 0.025 + c.height * 0.025;
        a.$E = 0.6;
        if (a.$C) {
          a.$i(this.$c, [
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              b,
              c.height - b
            ),
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              d,
              c.height - b
            ),
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              b,
              c.height - d
            ),
          ]);
        } else {
          a.$i(this.$c, [
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              c.width - b,
              c.height - b
            ),
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              c.width - d,
              c.height - b
            ),
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              c.width - b,
              c.height - d
            ),
          ]);
        }
        a.$E = 1;
      },
    },
    i6,
    [ss.IDisposable]
  );
  ss.initClass(
    jh,
    e,
    {
      $2: function (a, g, h, b, c) {
        var d = iY.prepare(a.$C, this.$8, this.$9, b, this.$7, this.$5);
        if (this.$0(g) === 2) {
          var f = VEL.Skynet.Core.Toolbox.Geometry.Segment.fromOuterHeight(
            h.height,
            ss.cast(g, VEL.Skynet.Core.View.ObjectDatas.Tile.SegmentTileData)
              .sweepAngle
          );
          a.$6(d, f, this.$6);
        } else {
          if (ss.isValue(this.$7)) {
            this.$4(a, d, h);
          } else {
            a.$8(d, h, null);
          }
        }
      },
      dispose: function () {
        for (var a = 0; a < this.$5.length; a++) {
          var b = this.$5[a];
          lB.$4(b);
        }
      },
      $4: function (a, A, C) {
        var b = new VEL.Skynet.Core.Toolbox.Geometry.Size(A.width, A.height);
        var c = C.width / b.width;
        var d = C.height / b.height;
        var f = c > d ? d / c : 1;
        var g = c > d ? 1 : c / d;
        var h = new VEL.Skynet.Core.Toolbox.Geometry.Size(
          this.$7.x,
          this.$7.y
        );
        var i = new VEL.Skynet.Core.Toolbox.Geometry.Size(
          1 - h.width * 2,
          1 - h.height * 2
        );
        var j = new VEL.Skynet.Core.Toolbox.Geometry.Size(i.width, h.height);
        var k = new VEL.Skynet.Core.Toolbox.Geometry.Size(h.width, i.height);
        var l = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0, 0);
        var m = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(h.width, 0);
        var n = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          1 - h.width,
          0
        );
        var o = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          0,
          h.height
        );
        var p = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          h.width,
          h.height
        );
        var q = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          1 - h.width,
          h.height
        );
        var r = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          0,
          1 - h.height
        );
        var s = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          h.width,
          1 - h.height
        );
        var t = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          1 - h.width,
          1 - h.height
        );
        var u = new VEL.Skynet.Core.Toolbox.Geometry.Size(
          this.$7.x * f,
          this.$7.y * g
        );
        var v = new VEL.Skynet.Core.Toolbox.Geometry.Size(
          1 - u.width * 2,
          1 - u.height * 2
        );
        var w = new VEL.Skynet.Core.Toolbox.Geometry.Size(v.width, u.height);
        var x = new VEL.Skynet.Core.Toolbox.Geometry.Size(u.width, v.height);
        var y = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0, 0);
        var z = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(u.width, 0);
        var B = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          1 - u.width,
          0
        );
        var D = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          0,
          u.height
        );
        var E = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          u.width,
          u.height
        );
        var F = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          1 - u.width,
          u.height
        );
        var G = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          0,
          1 - u.height
        );
        var H = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          u.width,
          1 - u.height
        );
        var I = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          1 - u.width,
          1 - u.height
        );
        a.$a(
          A,
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(l, b),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(h, b),
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(y, C),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(u, C)
        );
        a.$a(
          A,
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(m, b),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(j, b),
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(z, C),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(w, C)
        );
        a.$a(
          A,
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(n, b),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(h, b),
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(B, C),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(u, C)
        );
        a.$a(
          A,
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(o, b),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(k, b),
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(D, C),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(x, C)
        );
        a.$a(
          A,
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(p, b),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(i, b),
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(E, C),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(v, C)
        );
        a.$a(
          A,
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(q, b),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(k, b),
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(F, C),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(x, C)
        );
        a.$a(
          A,
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(r, b),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(h, b),
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(G, C),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(u, C)
        );
        a.$a(
          A,
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(s, b),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(j, b),
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(H, C),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(w, C)
        );
        a.$a(
          A,
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(t, b),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(h, b),
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(I, C),
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply$1(u, C)
        );
      },
    },
    i6,
    [ss.IDisposable]
  );
  ss.initEnum(jj, e, {
    Auto: 0,
    Rectangle: 1,
    Segment: 2,
    Circle: 3,
    Arrow: 4,
    Tick: 5,
    Grid: 6,
    Neon: 7,
  });
  ss.initClass(jl, e, {
    $a: function () {
      if (
        ss.isNullOrUndefined(this.$b) ||
        ss.isNullOrUndefined(this.$f.get_game())
      ) {
        return;
      }
      this.$b.$update();
    },
    $1: function (a) {
      switch (a) {
        case 1:
          this.$b = new f5(this.$f, this.$e);
          break;
        case 7:
          this.$b = new e3(this.$f, this.$e);
          break;
        case 3:
          this.$b = new e7(this.$f, this.$e, false);
          break;
        case 4:
          this.$b = new e7(this.$f, this.$e, true);
          break;
        case 2:
          this.$b = new f3(this.$f, this.$e);
          break;
        case 6:
          this.$b = new f1(this.$f, this.$e);
          break;
        case 8:
          this.$b = new e9(this.$f, this.$e);
          break;
        case 5:
          this.$b = new e5(this.$f, this.$e);
          break;
        case 9:
          this.$b = new e1(this.$f, this.$e);
          break;
        default:
          throw new ss.NotImplementedException();
      }
    },
    $0: function () {
      var a = this.$e.$n.$e;
      a.addEventListener("click", ss.mkdel(this, this.$6));
      a.addEventListener("mousedown", ss.mkdel(this, this.$7));
      a.addEventListener("touchstart", ss.mkdel(this, this.$7));
      a.addEventListener("mousemove", ss.mkdel(this, this.$8));
      a.addEventListener("touchmove", ss.mkdel(this, this.$8));
      document.addEventListener("mouseup", ss.mkdel(this, this.$9));
      document.addEventListener("touchend", ss.mkdel(this, this.$9));
      a.addEventListener("keydown", ss.mkdel(this, this.$4));
      a.addEventListener("keyup", ss.mkdel(this, this.$5));
    },
    $2: function () {
      var a = this.$e.$n.$e;
      a.removeEventListener("click", ss.mkdel(this, this.$6));
      a.removeEventListener("mousedown", ss.mkdel(this, this.$7));
      a.removeEventListener("touchstart", ss.mkdel(this, this.$7));
      a.removeEventListener("mousemove", ss.mkdel(this, this.$8));
      a.removeEventListener("touchmove", ss.mkdel(this, this.$8));
      document.removeEventListener("mouseup", ss.mkdel(this, this.$9));
      document.removeEventListener("touchend", ss.mkdel(this, this.$9));
      a.removeEventListener("keydown", ss.mkdel(this, this.$4));
      a.removeEventListener("keyup", ss.mkdel(this, this.$5));
    },
    $4: function (a) {
      if (ss.isNullOrUndefined(this.$f.get_game())) {
        return;
      }
      var c = this.$3(a);
      a.preventDefault();
      if (c !== 0) {
        this.$f.get_game().onKeyboardControlDown(c);
      }
      var d = ss.cast(a, KeyboardEvent);
      if (!ss.isNullOrEmptyString(d.key)) {
        if (this.$f.get_isTestCard()) {
          switch (d.key.toUpperCase()) {
            case "B":
            case "#":
              hM.$0();
              this.$f.invalidateForDebug();
              return;
            case "C":
              var b = this.$f.changeClockSpeedForDebug();
              this.$f.showTopInstruction(b * 100 + "% Clock Speed", 2);
              return;
            default:
              this.$f.get_game().onKeyboardText(d.key);
              return;
          }
        } else {
          if (jl.$1(c)) {
            this.$f.get_game().onKeyboardText(d.key);
          }
        }
      }
    },
    $5: function (a) {
      if (ss.isNullOrUndefined(this.$f.get_game())) {
        return;
      }
      var b = this.$3(a);
      a.preventDefault();
      if (b !== 0) {
        this.$f.get_game().onKeyboardControlUp(b);
      }
    },
    $7: function (a) {
      if (ss.isNullOrUndefined(this.$f.get_game())) {
        return;
      }
      this.$d = true;
      this.$c = this.$e.$n.$D(a);
      var b = false;
      if (!this.$c && ss.isValue(this.$b)) {
        b = this.$b.$onTouchOrMouseDown(a);
      }
      this.$e.$n.$2();
      if (this.$c || b) {
        a.preventDefault();
      }
    },
    $8: function (a) {
      if (ss.isNullOrUndefined(this.$f.get_game())) {
        return;
      }
      var b = !ss.isInstanceOfType(a, MouseEvent);
      if (!this.$e.$n.$E(a, this.$d || b) && ss.isValue(this.$b)) {
        this.$b.$onTouchOrMouseMove(a);
      }
      a.preventDefault();
    },
    $9: function (a) {
      if (ss.isNullOrUndefined(this.$f.get_game())) {
        return;
      }
      this.$d = false;
      if (this.$c) {
        this.$e.$n.$F(a);
        this.$c = false;
      } else {
        if (ss.isValue(this.$b)) {
          this.$b.$onTouchOrMouseUp(a);
        }
      }
    },
    $6: function (a) {
      if (ss.isNullOrUndefined(this.$f.get_game())) {
        return;
      }
      this.$e.$n.$2();
      this.$e.$n.$C(a);
    },
    $3: function (a) {
      var b = ss.cast(a, KeyboardEvent);
      switch (b.keyCode) {
        case 37:
          return 3;
        case 38:
          return 5;
        case 39:
          return 4;
        case 40:
          return 6;
        case 35:
          return 9;
        case 46:
          return 7;
        case 36:
          return 8;
        case 8:
          return 10;
        case 13:
          return 11;
        case 16:
          return 14;
        case 17:
          return 15;
        case 18:
          return 16;
        case 91:
          return 17;
        case 32:
          return 13;
        case 65:
          return 18;
        case 68:
          return 19;
        case 83:
          return 20;
        case 87:
          return 21;
      }
      if (b.keyCode < 48 || (b.keyCode >= 112 && b.keyCode <= 123)) {
        return 1;
      }
      if (b.key.toUpperCase() === "DEAD") {
        return 2;
      }
      if (b.key.length > 1 && jl.$0(b.key)) {
        return 1;
      }
      return 0;
    },
  });
  ss.initClass(jn, e, {
    $5: function () {
      return this.$1$1;
    },
    $6: function (a) {
      this.$1$1 = a;
    },
    $3: function () {
      return this.$1$2;
    },
    $4: function (a) {
      this.$1$2 = a;
    },
    $1: function (a) {
      var b = function (c) {
        if (!ss.staticEquals(a, null)) {
          a();
        }
      };
      new hB.$0(null, this.$3(), 0).$4(b);
    },
    $2: function (a, c) {
      if (
        this.$5().get_minDelay() < 0 ||
        this.$5().get_maxDelay() < this.$5().get_minDelay()
      ) {
        throw new ss.ArgumentException("SceneEvent.Max/MinDelay");
      }
      var d;
      if (this.$5().get_startImmediately()) {
        d = 0;
        this.$5().set_startImmediately(false);
      } else {
        d =
          this.$5().get_minDelay() +
          a.nextDouble() *
            (this.$5().get_maxDelay() - this.$5().get_minDelay());
      }
      var b = new hB.$0(null, this.$3(), d);
      b.$4(function (f) {
        c();
      });
    },
    $0: function (a) {
      return Enumerable.from(this.$7).contains(a);
    },
  });
  ss.initClass(jp, e, {
    $1: function () {
      return (this.$5 = this.$0());
    },
    $2: function () {
      return !this.$0().equals(this.$5);
    },
    $0: function () {
      switch (this.$7) {
        case 0:
          var a = null;
          for (var h = 0; h < this.$6.length; h++) {
            var i = this.$6[h];
            var b = ss.cast(i.control, ki);
            if (ss.isNullOrUndefined(a)) {
              a = b.$1e();
            } else {
              a = a.union(b.$1e());
            }
          }
          if (ss.isNullOrUndefined(a)) {
            return VEL.Skynet.Core.Toolbox.Geometry.Rect.get_empty();
          }
          return a.addMargin(
            VEL.Skynet.Core.Toolbox.Geometry.Margin.op_Multiply(
              jp.$0,
              this.$3
            )
          );
        case 2:
          var c = null;
          for (var d = 0; d < this.$6.length; d++) {
            var f = this.$6[d];
            var g = ss.cast(f.control, ki);
            if (ss.isNullOrUndefined(c)) {
              c = g.$1e();
            } else {
              c = c.union(g.$1e());
            }
          }
          if (ss.isNullOrUndefined(c)) {
            return VEL.Skynet.Core.Toolbox.Geometry.Rect.get_empty();
          }
          c = c.addMargin(
            VEL.Skynet.Core.Toolbox.Geometry.Margin.op_Multiply(
              jp.$0,
              this.$3
            )
          );
          if (c.get_top() < this.$4.get_top()) {
            c = c.translate(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                0,
                this.$4.get_top() - c.get_top()
              )
            );
          }
          if (c.get_left() < this.$4.get_left()) {
            c = c.translate(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                this.$4.get_left() - c.get_left(),
                0
              )
            );
          }
          if (c.get_right() > this.$4.get_right()) {
            c = c.translate(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                this.$4.get_right() - c.get_right(),
                0
              )
            );
          }
          if (c.get_bottom() > this.$4.get_bottom()) {
            c = c.translate(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                0,
                this.$4.get_bottom() - c.get_bottom()
              )
            );
          }
          return c;
        case 1:
          return this.$4.clone();
      }
      throw new ss.Exception(
        "One of the enumerations should have fired a return"
      );
    },
  });
  jp.$1.prototype = jp.prototype;
  ss.initEnum(jr, e, { $0: 0, $2: 1, $1: 2 });
  ss.initInterface(jt, e, { $render: null, get_$isInvalidated: null }, [
    ss.IDisposable,
  ]);
  ss.initClass(jv, e, {
    $1: function (a) {
      return (
        ss.isValue(a) &&
        a.$2 === this.$2 &&
        a.$3 === this.$3 &&
        a.$4 === this.$4
      );
    },
    $0: function () {
      return new jv(this.$2, this.$3, this.$4);
    },
  });
  ss.initClass(
    jx,
    e,
    {
      $3: function (a) {
        var b = Enumerable.from(this.$v)
          .where(function (c) {
            return c.$0(a);
          })
          .toArray();
        if (b.length === 0) {
          return null;
        } else {
          if (a === 0) {
            return b[this.$u++ % b.length];
          } else {
            if (b.length > 1) {
              b1.error("multiple events of type " + a);
            }
            return b[0];
          }
        }
      },
      $b: function (a, b) {
        this.$l.$a();
        if (a) {
          this.$q.$7(b);
        }
        this.$m.$r.$o(b);
      },
      $8: function (a, i, j, b) {
        if (ss.isNullOrUndefined(this.$k)) {
          return;
        }
        var c = !a && (!i || !this.$p || !j || this.$o || ik.$6());
        var d = ss.isValue(this.$n) && (c || this.$n.$18());
        if (!a && d) {
          c = true;
        }
        if (ss.isValue(this.$n)) {
          this.$n.$Y(b);
        }
        if (c) {
          this.$m.$1();
          var f = this.$q.$0();
          this.$b(j, b);
          ik.$4(b);
          for (var g = 0; g < this.$x.length; g++) {
            var h = this.$x[g];
            if (
              this.$j &&
              ss.isInstanceOfType(h, jH) &&
              ss.cast(h, jH).get_translateZ() < this.$m.get_translateZ() &&
              !this.$6(h)
            ) {
              continue;
            }
            h.$5(f);
            h.$4(this.$y, this.$r);
          }
          this.$o = false;
        }
        if (d && !c) {
          this.$n.$4(this.$y, this.$r);
        }
      },
      $6: function (a) {
        var b = ss.safeCast(a, jJ);
        return ss.isValue(b) && b.get_translateZ() === 0;
      },
      $4: function (a, b, c) {
        if (a) {
          ss.remove(this.$x, this.$n);
        }
        this.$n.$v(this, b, c);
      },
      $5: function () {
        this.$m.$m();
      },
      $c: function (a) {
        if (a) {
          this.$m.$n(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              0,
              this.$k.get_top(),
              this.$z.width,
              this.$z.height - this.$k.get_top() - this.$k.get_bottom()
            )
          );
        } else {
          this.$m.$n(null);
        }
      },
      $9: function (a) {
        this.$z = a;
        this.$x.forEach(function (d) {
          d.$6(a);
        });
        if (this.$w === 2 || this.$w === 3) {
          return;
        }
        var b =
          this.$w === 1
            ? this.$B.getInnerFit(this.$z)
            : this.$B.getOuterFit(this.$z);
        var c;
        if (
          (this.$w === 0 &&
            this.$z.get_aspectRatio() > this.$B.get_aspectRatio()) ||
          (this.$w === 1 &&
            this.$z.get_aspectRatio() < this.$B.get_aspectRatio())
        ) {
          c = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            0,
            (this.$z.height - this.$z.width / this.$B.get_aspectRatio()) / 2
          );
        } else {
          c = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            (this.$z.width - this.$z.height * this.$B.get_aspectRatio()) / 2,
            0
          );
        }
        this.$r.$3 = c;
        this.$r.$6 = b;
      },
      $7: function () {
        if ((this.$w === 2 || this.$w === 3) && ss.isValue(this.$m.$r.$A())) {
          var a = this.$m.$c();
          var c = new VEL.Skynet.Core.Toolbox.Geometry.Size(
            this.$m.$r.$A().get_aspectRatio() * this.$B.height,
            this.$B.height
          );
          var d;
          var b = c.getInnerFit(a);
          if (a.get_aspectRatio() < c.get_aspectRatio()) {
            d = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              0,
              (a.height - a.width / c.get_aspectRatio()) / 2
            );
            d = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
              d,
              VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply(
                new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                  (c.width - this.$B.width) / 2,
                  0
                ),
                b
              )
            );
          } else {
            d = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              (a.width - a.height * c.get_aspectRatio()) / 2,
              0
            );
            d = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
              d,
              VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply(
                new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                  (c.width - this.$B.width) / 2,
                  0
                ),
                b
              )
            );
          }
          this.$r.$6 = b;
          this.$r.$3 = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
            this.$y.$3,
            d
          );
          this.$q.$8();
        }
      },
      $0: function () {
        if (ss.isValue(this.$m)) {
          var a = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction(
            this.$z,
            this.$k
          );
          this.$y.$6 = 1;
          this.$y.$3 = this.$k.get_topLeft();
          this.$m.$d(a);
          this.$m.$r.$j(a);
          if (this.$w === 1 || this.$w === 0) {
            this.$q.$8();
          }
          this.$7();
          this.$5();
        }
      },
      $g: function () {
        return this.$C.clientWidth;
      },
      $h: function (a) {
        this.$C.style.width = a + "px";
      },
      $e: function () {
        return this.$C.clientHeight;
      },
      $f: function (a) {
        this.$C.style.height = a + "px";
      },
      $d: function () {
        return new VEL.Skynet.Core.Toolbox.Geometry.Size(
          this.$t.clientWidth,
          this.$t.clientHeight
        );
      },
      dispose: function () {
        this.$l.$2();
        for (var a = 0; a < this.$x.length; a++) {
          var b = this.$x[a];
          b.dispose();
        }
      },
      $2: function () {
        if (this.$A.length === 0 || lH.useAssertLeak) {
          return;
        }
        var a = Enumerable.from(this.$A).first();
        ss.remove(this.$A, a);
        this.$A.push(a);
        a.$2(this.$D, ss.mkdel(this, this.$2));
      },
      $1: function () {
        if (this.$s.length === 0 || lH.useAssertLeak) {
          return;
        }
        for (var a = 0; a < this.$s.length; a++) {
          var b = this.$s[a];
          this.$a(b);
        }
      },
      $a: function (a) {
        a.$2(
          this.$D,
          ss.mkdel(this, function () {
            this.$a(a);
          })
        );
      },
    },
    null,
    [ss.IDisposable]
  );
  ss.initClass(
    jz,
    e,
    {
      $h: function () {
        return this.$1$1;
      },
      $i: function (a) {
        this.$1$1 = a;
      },
      $g: function () {
        return this.$j.$1(this.$n);
      },
      $7: function (a) {
        if (this.$v) {
          this.$4();
          return;
        }
        if (ss.isValue(this.$t) && this.$t.$2()) {
          this.$e(this.$t.$1(), false);
        }
        if (ss.isValue(this.$r)) {
          this.$l += a * this.$q;
          if (this.$l >= this.$u) {
            this.$3();
          } else {
            var h = this.$n.$2 - this.$r.$2;
            var i = this.$n.$3 - this.$r.$3;
            var b = this.$n.$4 - this.$r.$4;
            var c = this.$l / this.$u;
            var d = this.$1(c, this.$r.$2, h);
            var f = this.$1(c, this.$r.$3, i);
            var g = this.$1(c, this.$r.$4, b);
            this.$j = new jv(d, f, g);
          }
        }
      },
      $0: function () {
        return new jv(
          this.$s.$2 + this.get_translateX() + this.$j.$2,
          this.$s.$3 + this.get_translateY() + this.$j.$3,
          this.$s.$4 + this.get_translateZ() + this.$j.$4
        );
      },
      $f: function () {
        return (
          this.$m ||
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            0,
            0,
            this.$o.$A().width,
            this.$o.$A().height
          )
        );
      },
      $a: function (a, g, h, b, c) {
        var d = new jp.$1(a, g, null);
        var f = ss.isNullOrUndefined(a) || !Enumerable.from(a).any();
        this.$d(d, a, h, b, f, c, false);
      },
      $c: function (a, h, i, b, c, d) {
        var f = new jp.$1(a, i, h);
        var g = ss.isNullOrUndefined(a) || !Enumerable.from(a).any();
        this.$d(f, a, b, c, g, d, false);
      },
      $b: function (a, g, h, b, c) {
        var d = new jp(a);
        var f = ss.isNullOrUndefined(a);
        this.$d(d, null, g, h, f, b, c);
      },
      $d: function (a, g, h, b, c, d, f) {
        this.$q = h;
        this.$k = b;
        this.$p = d;
        if (c) {
          this.$9();
          return;
        }
        this.$i(g);
        this.$t = a;
        this.$e(this.$t.$1(), f);
      },
      $8: function () {
        this.$v = true;
      },
      $4: function () {
        if (ss.isValue(this.$t)) {
          this.$n = this.$2(this.$t.$1(), false);
        }
        this.$3();
        this.$v = false;
      },
      $5: function (a) {
        this.$s = a;
      },
      $e: function (a, b) {
        var c = this.$2(a, b);
        if (this.$k === 2) {
          this.$j = c;
        } else {
          this.$6(c);
        }
      },
      $2: function (a, i) {
        this.$m = a;
        var j = this.$o.$A().getInnerFit(this.$o.$t());
        var b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(
          this.$o.$A(),
          j
        );
        var c = this.$m.get_center() * j - b.width / 2;
        var d = this.$m.get_middle() * j - b.height / 2;
        var f = (a.get_width() * j) / this.$o.$t().width;
        var g = (a.get_height() * j) / this.$o.$t().height;
        var h = Math.max(f, g);
        return new jv(c, d, i ? 1 - h : Math.max(0, 1 - h));
      },
      $9: function () {
        this.$t = null;
        this.$i(null);
        this.$m = null;
        this.$6(new jv(0, 0, 0));
      },
      $6: function (a) {
        this.$n = a;
        var b = jv.$0(this.$j, this.$n);
        var c = b < 1;
        if (this.$k === 0 || c) {
          this.$3();
        } else {
          this.$u = Math.max(100, Math.min(1700, Math.sqrt(b) / 0.01));
          this.$r = this.$j.$0();
          this.$l = 0;
        }
      },
      $3: function () {
        this.$k = 1;
        this.$j = this.$n;
        this.$l = 0;
        this.$r = null;
        if (!ss.staticEquals(this.$p, null)) {
          var a = this.$p;
          this.$p = null;
          a();
        }
      },
      $1: function (a, c, d) {
        var b = a - 1;
        return d * (b * b * (1.7 * b + 0.7) + 1) + c;
      },
      get_translateX: function () {
        return this.$1$2;
      },
      set_translateX: function (a) {
        this.$1$2 = a;
      },
      get_translateY: function () {
        return this.$1$3;
      },
      set_translateY: function (a) {
        this.$1$3 = a;
      },
      get_translateZ: function () {
        return this.$1$4;
      },
      set_translateZ: function (a) {
        this.$1$4 = a;
      },
      get_forceRendering: function () {
        return true;
      },
    },
    null,
    [h5, h9]
  );
  ss.initClass(
    jB,
    e,
    {
      get_types: function () {
        return this.$1$1;
      },
      set_types: function (a) {
        this.$1$1 = a;
      },
      get_minDelay: function () {
        return this.$1$2;
      },
      set_minDelay: function (a) {
        this.$1$2 = a;
      },
      get_maxDelay: function () {
        return this.$1$3;
      },
      set_maxDelay: function (a) {
        this.$1$3 = a;
      },
      get_startImmediately: function () {
        return this.$1$4;
      },
      set_startImmediately: function (a) {
        this.$1$4 = a;
      },
      get_children: function () {
        return this.$1$5;
      },
      set_children: function (a) {
        this.$1$5 = a;
      },
    },
    null,
    [ss.makeGenericType(VEL.Skynet.Global.Serialization.IXmlArray$1, [ia])]
  );
  ss.initClass(
    jD,
    e,
    {
      $a: function () {
        return this.$1$1;
      },
      $b: function (a) {
        this.$1$1 = a;
      },
      $8: function () {
        return this.$1$2;
      },
      $9: function (a) {
        this.$1$2 = a;
      },
      $c: function () {
        return this.$1$3;
      },
      $d: function (a) {
        this.$1$3 = a;
      },
      get_visibility: function () {
        return this.$1$4;
      },
      set_visibility: function (a) {
        this.$1$4 = a;
      },
      get_forceRendering: function () {
        return true;
      },
      $4: null,
      $6: function (a) {
        var c = lB.$1();
        c.width = ss.Int32.trunc(a.width);
        c.height = ss.Int32.trunc(a.height);
        var d = ss.cast(c.getContext("2d"), CanvasRenderingContext2D);
        hZ.safeDrawImage$4(
          d,
          this.$e,
          0,
          0,
          this.$e.width,
          this.$e.height,
          0,
          0,
          a.width,
          a.height
        );
        hZ.setSize(this.$e, a);
        var b = ss.cast(this.$e.getContext("2d"), CanvasRenderingContext2D);
        hZ.safeDrawImage$2(b, c, 0, 0, a.width, a.height);
        lB.$6.$2(c);
      },
      $2: function () {
        this.$e.focus();
      },
      $1: function () {
        this.$f.$4();
      },
      $5: function (a) {
        this.$9(a);
      },
      $7: function (a) {
        this.$e.style.zIndex = a.toString();
      },
      $0: function (a) {
        this.$a().push(a);
      },
      $3: function (a) {
        ss.remove(this.$a(), a);
        a.dispose();
      },
      dispose: function () {
        lB.$4(this.$e);
        var a = this.$a();
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          c.dispose();
        }
      },
    },
    null,
    [ss.IDisposable, h5, h7]
  );
  ss.initInterface(kz, e, {
    getFullscreenIconState: null,
    getSoundIconState: null,
    onMenuCommandClick: null,
    onFullscreenIconClick: null,
    getAudioSetting: null,
    setAudioSetting: null,
  });
  ss.initClass(
    jF,
    e,
    {
      $v: function (a, h, i) {
        this.$1B = a;
        this.$1A = h;
        this.$1u = i;
        this.$1q = null;
        this.$1o(-1);
        var b = this.$1D.get_game();
        var c = this.$1A;
        var d = ss.mkdel(this, this.$z);
        var f = this.$1D.get_game();
        this.$1y = new kv(b, c, d, ss.mkdel(f, f.onEditTimer), this);
        var g = lB.$1();
        this.$1p = ss.cast(g.getContext("2d"), CanvasRenderingContext2D);
      },
      $1f: function () {
        return this.$2$1;
      },
      $1g: function (a) {
        this.$2$1 = a;
      },
      $1d: function () {
        return this.$2$2;
      },
      $1e: function (a) {
        this.$2$2 = a;
      },
      $1j: function () {
        return this.$2$3;
      },
      $1k: function (a) {
        this.$2$3 = a;
      },
      $1l: function () {
        return this.$2$4;
      },
      $1m: function (a) {
        this.$2$4 = a;
      },
      $1n: function () {
        return this.$2$5;
      },
      $1o: function (a) {
        this.$2$5 = a;
      },
      $16: function () {
        return ss.isValue(this.$1C);
      },
      $1b: function () {
        return this.$2$6;
      },
      $1c: function (a) {
        this.$2$6 = a;
      },
      $19: function () {
        return this.$2$7;
      },
      $1a: function (a) {
        this.$2$7 = a;
      },
      $1h: function () {
        return this.$2$8;
      },
      $1i: function (a) {
        this.$2$8 = a;
      },
      $18: function () {
        return ss.isValue(this.$1r) || jT.$5() !== 0;
      },
      $Y: function (a) {
        if (ss.isValue(this.$1r)) {
          this.$1s += a * 0.005;
        }
        if (++this.$1t === 20) {
          this.$1t = 0;
          this.$B();
        }
      },
      $4: function (a, d) {
        if (ss.isNullOrUndefined(this.$1q)) {
          return;
        }
        var f = jT.$5() !== 0;
        var b = false;
        if (ss.isValue(this.$1r)) {
          jT.$1();
        }
        if (jT.$5() !== 0) {
          if (f) {
            this.$g();
          }
          this.$1v.$1(jT.$5());
          if (ss.isValue(this.$1r)) {
            if (this.$1s > 1) {
              this.$1r = null;
              b = true;
              this.$1v.$y(1);
            } else {
              this.$1v.$y(Math.sqrt(1 - this.$1s));
              this.$1r.$1(this.$1v);
              this.$1v.$y(Math.sqrt(this.$1s));
            }
          }
          this.$1q.$1(this.$1v);
          this.$1v.$r();
        }
        var c = this.$1p.canvas;
        this.$f.$8(
          c,
          new VEL.Skynet.Core.Toolbox.Geometry.Size(c.width, c.height),
          null
        );
        jT.$4();
        if (b) {
          jT.$1();
        }
        if (jT.$6) {
          jT.$6 = false;
          this.$1B.$k = this.$17();
          this.$1B.$0();
          jT.$1();
        }
      },
      $D: function (a) {
        if (ss.isNullOrUndefined(this.$1q)) {
          return false;
        }
        var b = this.$q(a);
        var c = !ss.isInstanceOfType(a, MouseEvent);
        hK.$5(c);
        if (this.$1q.$7(b, c)) {
          return true;
        }
        return false;
      },
      $E: function (a, b) {
        if (ss.isNullOrUndefined(this.$1q)) {
          return false;
        }
        var c = this.$q(a);
        if (this.$1q.$a(c, b)) {
          return true;
        }
        return false;
      },
      $F: function (a) {
        if (ss.isNullOrUndefined(this.$1q)) {
          return false;
        }
        var b = this.$q(a);
        var c = !ss.isInstanceOfType(a, MouseEvent);
        if (this.$1q.$b(b, c)) {
          return true;
        }
        return false;
      },
      $C: function (a) {
        if (ss.isNullOrUndefined(this.$1q)) {
          return false;
        }
        var b = this.$q(a);
        var c = !ss.isInstanceOfType(a, MouseEvent);
        hK.$5(c);
        if (this.$1q.$6(b)) {
          return true;
        }
        return false;
      },
      $B: function () {
        if (ss.isValue(this.$1q)) {
          this.$1q.$5();
        }
      },
      $q: function (a) {
        var c = hK.$0() / this.$1v.$z();
        var d = ss.safeCast(a, MouseEvent);
        if (ss.isValue(d)) {
          return VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply(
            this.$m(d),
            c
          );
        }
        var b = ss.safeCast(a, TouchEvent);
        if (ss.isValue(b)) {
          return VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply(
            this.$s(b),
            c
          );
        }
        throw new ss.Exception();
      },
      $m: function (a) {
        var b = this.$e.getBoundingClientRect();
        return new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          a.clientX - b.left,
          a.clientY - b.top
        );
      },
      $s: function (a) {
        var b = this.$e.getBoundingClientRect();
        if (ss.isValue(a.changedTouches)) {
          return new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            a.changedTouches[0].clientX - b.left,
            a.changedTouches[0].clientY - b.top
          );
        }
        return VEL.Skynet.Core.Toolbox.Geometry.Point.empty;
      },
      $10: function (a) {
        this.$1y.$1f(a);
      },
      $K: function (a) {
        if (a) {
          if (ss.isValue(this.$1q) && this.$1q.$I()) {
            this.$1z = this.$1q;
          }
          this.$l(new kl(this));
        } else {
          this.$1B.$p = false;
          if (ss.isValue(this.$1z)) {
            this.$l(this.$1z);
          }
        }
      },
      $13: function (a) {
        if (ss.isValue(this.$1C)) {
          this.$1C.$U(
            new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(a, 1)
          );
        }
      },
      $R: function () {
        this.$1B.$p = false;
        this.$1a(null);
        this.$1c(null);
        this.$1g(null);
        this.$1e(null);
        this.$l(this.$1y);
        this.$1C = null;
      },
      getFullscreenIconState: function () {
        return this.$1u;
      },
      getSoundIconState: function () {
        var a = !id.hasMusic() || this.getAudioSetting(0);
        var b = this.getAudioSetting(1);
        return a && b ? 7 : 6;
      },
      $z: function () {
        if (ss.isValue(this.$1D.get_game())) {
          this.$1D.get_game().onRequestMenu();
        }
      },
      setAudioSetting: function (a, b) {
        this.$1D.get_app().onSetAudioSetting(a, b);
        if (a === 0) {
          id.setMuteMusic(b);
        } else {
          if (a === 1) {
            id.setMuteSounds(b);
          }
        }
        this.$1q.$G();
      },
      getAudioSetting: function (a) {
        return this.$1D.get_app().onGetAudioSetting(a);
      },
      onFullscreenIconClick: function () {
        if (ss.isValue(this.$1D.get_game())) {
          if (this.$1u === 1) {
            this.$1D.get_game().onExitAssignment();
          } else {
            this.$1D
              .get_game()
              .onToggleFullscreen(
                VEL.Skynet.Global.Helpers.DeviceHelper.isPhoneSized()
              );
          }
        }
      },
      onMenuCommandClick: function (a) {
        if (ss.isValue(this.$1D.get_game())) {
          this.$1D.get_game().onMenuSelect(a);
        }
      },
      $A: function () {
        lN.$2(
          ss.mkdel(this, function () {
            if (ss.isValue(this.$1D.get_game())) {
              this.$1D.get_game().onStartComplete();
            }
            i7.loadLazySounds();
          })
        );
      },
      $y: function (a) {
        if (ss.isValue(this.$1D.get_game())) {
          this.$1D.get_game().onMenuSelect(a);
        }
      },
      $U: function (a, b) {
        this.$1y.$1b(a, b);
      },
      $V: function (a, b) {
        this.$1y.$1c(a, b);
      },
      $N: function (a, b) {
        this.$1y.$17(a, b);
      },
      $x: function (a, b, c) {
        this.$1y.$X(a, b, c);
      },
      $J: function (a, b) {
        this.$1y.$15(a, b);
      },
      $i: function (a, d, f, b, c) {
        this.$1y.$T(a, d, f, b, c);
      },
      $h: function (a) {
        this.$1y.$1d(a);
      },
      $k: function () {
        this.$1y.$V();
      },
      $Q: function (a, b) {
        if (a) {
          if (ss.isValue(this.$1q) && this.$1q.$I()) {
            this.$1z = this.$1q;
          }
          var c = b ? ss.mkdel(this, this.onFullscreenIconClick) : null;
          this.$l(new kj(this, c));
        } else {
          this.$1B.$p = false;
          if (ss.isValue(this.$1z)) {
            this.$l(this.$1z);
          }
        }
      },
      $P: function (a, c, d, b) {
        this.$1x = a;
        this.$1w = c;
        this.$1y.$19(a, c, d, false, b);
      },
      $S: function (a, b, c) {
        this.$1C = new kp(a, b, c, ss.mkdel(this, this.$A), this);
        this.$1q = this.$1C;
        this.$1q.$G();
        jT.$1();
      },
      $W: function () {
        this.$A();
      },
      $M: function (a, g, h, b, c, d) {
        this.$1B.$p = true;
        this.$1a(b);
        this.$1c(c);
        this.$1g(g);
        this.$1e(ss.isValue(h) ? h.toString() : null);
        var f = null;
        if (d) {
          f = ss.mkdel(this, function () {
            this.$1D.get_game().onMenuSelect(null);
          });
        }
        switch (a) {
          case 0:
            this.$l(new kt(g, h, b, this, f));
            break;
          case 1:
            this.$l(new kr(g, h, b, c, this, f));
            break;
          case 2:
            this.$l(new kx(b, this, f));
            break;
          case 3:
            this.$l(new kn(g, h, this.$1D.get_game(), this, f));
            break;
          default:
            throw new ss.NotImplementedException();
        }
      },
      $12: function (a) {
        var b = ss.safeCast(this.$1q, kn);
        if (ss.isValue(b)) {
          b.$P(a);
        }
      },
      $u: function () {
        this.$1i(null);
        this.$1y.$1a(0, null, null);
      },
      $15: function () {
        return ss.isValue(this.$1q) && this.$1q.$H();
      },
      $17: function () {
        if (ss.isNullOrUndefined(this.$1v)) {
          this.$g();
        }
        var a = this.$1v.$z();
        var b = 20 * a;
        var c = this.$1y.$1h() ? 2 : 1;
        return new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor4(
          30,
          c * ja.$a() * a + b,
          30,
          (this.$1y.$1g() ? this.$1y.$1i() : ja.$3()) * a + b
        );
      },
      $L: function (a, b) {
        this.$1y.$16(a, b);
        jT.$6 = true;
      },
      $T: function (a, b) {
        if (ss.isNullOrUndefined(a) || !Enumerable.from(a).any()) {
          this.$u();
          return;
        }
        this.$1i(a);
        this.$1y.$1a(b, a, ss.mkdel(this, this.$y));
      },
      $O: function () {
        this.$1y.$18();
      },
      $t: function () {
        this.$1y.$W();
      },
      $Z: function (a) {
        this.$1y.$1e(a);
      },
      $w: function (a) {
        this.$1k(a);
        this.$1y.$Y(a);
      },
      $H: function (a) {
        this.$1m(a);
        this.$1y.$10(a);
      },
      $I: function (a, b) {
        this.$1m(a);
        this.$1y.$11(a, b);
      },
      $X: function (a) {
        this.$1o(a);
        if (ss.isValue(this.$1q)) {
          this.$1q.$E(a);
        }
      },
      $G: function (a) {
        this.$1y.$Z(a);
      },
      $14: function () {
        jT.$2();
      },
      $l: function (a) {
        if (ss.referenceEquals(a, this.$1q)) {
          return;
        }
        if (ss.isNullOrUndefined(this.$1q)) {
          this.$1q = a;
        } else {
          this.$1r = this.$1r || this.$1q;
          this.$1q = a;
          this.$1s = 0;
          this.$1q.$D();
        }
        this.$1q.$G();
        this.$1q.$E(this.$1n());
      },
      $11: function () {
        var a = hK.$8();
        if (
          ss.Int32.trunc(ss.round(a.width)) !== this.$1p.canvas.width ||
          ss.Int32.trunc(ss.round(a.height)) !== this.$1p.canvas.height
        ) {
          hZ.setSize(this.$1p.canvas, a);
        }
        var f = 320;
        var g = 1080;
        var b = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor1(
          VEL.Skynet.Core.Toolbox.Geometry.Point.empty,
          hK.$b
        );
        var c = 1;
        var d = b.get_minDimension();
        if (d < f) {
          c = d / f;
          b = VEL.Skynet.Core.Toolbox.Geometry.Rect.op_Division(b, c);
        }
        if (d > g) {
          c = d / g;
          b = VEL.Skynet.Core.Toolbox.Geometry.Rect.op_Division(b, c);
        }
        hK.$7(b.get_size());
        this.$1v = new jc(b, c * hK.$0(), this.$1A, this.$1p, this);
        return b;
      },
      $g: function () {
        var a = this.$11();
        if (ss.isValue(this.$1q)) {
          this.$1q.$0(a);
        }
      },
      $j: function () {
        var a = ss.safeCast(this.$1q, kp);
        return ss.isValue(a);
      },
      $r: function () {
        if (ss.isNullOrUndefined(this.$1C)) {
          return null;
        }
        return this.$1C.$T().toString();
      },
      $p: function () {
        return this.$1x;
      },
      $o: function () {
        return this.$1w;
      },
      $n: function (a) {
        if (ss.isNullOrUndefined(this.$1q)) {
          return null;
        }
        return this.$1q.$y(a);
      },
    },
    jD,
    [ss.IDisposable, h5, h7, kz]
  );
  ss.initClass(
    jH,
    e,
    {
      $j: function () {
        return this.$2$1;
      },
      $k: function (a) {
        this.$2$1 = a;
      },
      $5: function (a) {
        if (a.$1(this.$8())) {
          return;
        }
        jD.prototype.$5.call(this, a);
      },
      $h: function (a, f) {
        var g = this.$i(this.$8().$4);
        var b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(
          this.$c(),
          g
        );
        var c = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          this.$c().width / 2 - b.width / 2,
          this.$c().height / 2 - b.height / 2
        );
        this.$l.$6 = g;
        var d = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply(
          VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply(
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              this.$8().$2 - this.get_translateX(),
              this.$8().$3 - this.get_translateY()
            ),
            -g
          ),
          f
        );
        this.$l.$3 = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(c, d);
        return a.$z(this.$l);
      },
      $g: function (a) {
        var b = this.$c().getOuterFit(
          new VEL.Skynet.Core.Toolbox.Geometry.Size(
            this.$e.width,
            this.$e.height
          )
        );
        var c = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(
          this.$c(),
          b
        );
        this.$l.$6 = b;
        this.$l.$3 = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          ss.Int32.div(this.$e.width, 2) - c.width / 2,
          ss.Int32.div(this.$e.height, 2) - c.height / 2
        );
        return a.$n().$z(this.$l);
      },
      $i: function (a) {
        var b = this.get_translateZ() - a;
        if (b === 0) {
          return 0;
        }
        return 1 / b;
      },
      get_translateX: function () {
        return this.$2$2;
      },
      set_translateX: function (a) {
        this.$2$2 = a;
      },
      get_translateY: function () {
        return this.$2$3;
      },
      set_translateY: function (a) {
        this.$2$3 = a;
      },
      get_translateZ: function () {
        return this.$2$4;
      },
      set_translateZ: function (a) {
        this.$2$4 = a;
      },
    },
    jD,
    [ss.IDisposable, h5, h7, h9]
  );
  ss.initClass(
    jJ,
    e,
    {
      $4: function (a, h) {
        if (!this.get_visibility()) {
          return;
        }
        var i = this.$f;
        var b = this.get_translateZ() - this.$8().$4;
        if (b <= 0 && !this.$n) {
          return;
        }
        if (ss.isValue(this.$m)) {
          i.$5(this.$m);
        }
        if (this.$a().length > 0) {
          i = i.$z(h);
          if (this.$n) {
            i = this.$g(i);
          } else {
            i = this.$h(i, a.$6 / h.$6);
          }
          var c = this.$a();
          for (var d = 0; d < c.length; d++) {
            var f = c[d];
            f.$render(i, 1);
          }
          if (hM.$7()) {
            var g = 10;
            i.$k("z=" + this.get_translateZ(), 2, -2, hM.$b);
            i.$e(
              e2.$3,
              1,
              "square",
              [
                [
                  new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0, -10),
                  new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0, g),
                ],
                [
                  new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(-10, 0),
                  new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(g, 0),
                ],
              ],
              null,
              false
            );
          }
        }
        this.$k(i.$l(this.$c()));
      },
    },
    jH,
    [ss.IDisposable, h5, h7, h9]
  );
  ss.initClass(
    jL,
    e,
    {
      $4: function (a, h) {
        if (hK.$a <= 0) {
          return;
        }
        var i = this.$f;
        i = i.$x(hK.$a);
        for (var b = 0; b < jL.$0.length; b++) {
          var c = jL.$0[b];
          var d = this.$a();
          for (var f = 0; f < d.length; f++) {
            var g = d[f];
            g.$render(i, c);
          }
        }
      },
    },
    jH,
    [ss.IDisposable, h5, h7, h9]
  );
  ss.initClass(jN, e, { $4: function (a, b) {} }, jD, [ss.IDisposable, h5, h7]);
  ss.initClass(
    jP,
    e,
    {
      $o: function () {
        return this.$3$1;
      },
      $p: function (a) {
        this.$3$1 = a;
      },
      $n: function (a) {
        this.$t = a;
      },
      $m: function () {
        var a = this.$r.$y();
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          c.$7();
        }
      },
      $4: function (a, i) {
        if (ss.isNullOrUndefined(this.$r.$C())) {
          return;
        }
        var j = this.$f;
        j = j.$z(a);
        var b = this.$s;
        if (ss.isNullOrUndefined(b)) {
          b = this.$r.$C().$6;
        }
        hK.$a = b;
        if (ss.isValue(this.$t)) {
          j = j.$1(this.$t, 1);
        }
        j = this.$h(j, 1);
        j = j.$z(this.$r.$C());
        if (hM.$7()) {
          j.$t(this.$r.$A(), e2.$4, 1, 0, null);
        }
        for (var c = 0; c < jP.$0.length; c++) {
          var d = jP.$0[c];
          var f = this.$a();
          for (var g = 0; g < f.length; g++) {
            var h = f[g];
            h.$render(j, d);
          }
        }
        this.$k(j.$l(this.$c()));
      },
    },
    jH,
    [ss.IDisposable, h5, h7, h9]
  );
  ss.initEnum(jR, e, { $2: 0, $3: 1, $1: 2, $0: 3 });
  ss.initClass(jT, e, {});
  ss.initClass(jV, e, {
    $1: function (a) {
      return new jV(this.$5, a);
    },
    $0: function (a) {
      return new jV(a, this.$4);
    },
    $2: function () {
      return new jV(this.$5, this.$4 / 2);
    },
    $3: function (a) {
      switch (this.$5) {
        case 0:
          return e2.$7.toString();
        case 1:
          return e2.$0.toString();
        case 2:
          return "#E0E0E0";
        case 3:
          return "#A0A0A0";
        case 4:
          return "#666666";
        case 5:
          return "#404040";
        case 6:
          return (a ? e2.$7 : e2.$0).toString();
        case 7:
          return (a ? e2.$0 : e2.$7).toString();
        case 8:
          return "#35B7FF";
      }
      throw new ss.NotImplementedException();
    },
  });
  ss.initEnum(jX, e, {
    $8: 0,
    $0: 1,
    $4: 2,
    $3: 3,
    $2: 4,
    $7: 5,
    $6: 6,
    $5: 7,
    $1: 8,
  });
  ss.initClass(ja, e, {});
  ss.initClass(jc, e, {
    $x: function () {
      return this.$1$1;
    },
    $y: function (a) {
      this.$1$1 = a;
    },
    $z: function () {
      return this.$H;
    },
    $v: function () {
      return this.$1$2;
    },
    $w: function (a) {
      this.$1$2 = a;
    },
    $1: function (a) {
      var b, c;
      this.$w(a);
      switch (a) {
        case 3:
          b = 0;
          c = this.$A.canvas.height;
          break;
        case 1:
          b = 0;
          c = ja.$b() * this.$H;
          break;
        case 2:
          c = ja.$7() * this.$H;
          b = this.$A.canvas.height - c;
          break;
        default:
          return;
      }
      this.$A.clearRect(0, b, this.$A.canvas.width, c);
      if (this.$v() !== 3) {
        this.$A.save();
        this.$A.beginPath();
        this.$A.rect(0, b, this.$A.canvas.width, c);
        this.$A.clip();
      }
    },
    $r: function () {
      if (this.$v() !== 3) {
        this.$A.restore();
      }
    },
    $0: function (a, b) {
      this.$C = a;
      this.$D = b;
      this.$A.save();
      this.$A.globalAlpha = a.$4 * this.$x();
      this.$A.strokeStyle = a.$3(this.$G);
      this.$A.lineWidth = b * this.$H;
      this.$A.lineCap = "square";
      this.$A.beginPath();
    },
    $i: function () {
      this.$A.stroke();
      this.$A.restore();
      this.$C = null;
    },
    $q: function (a) {
      if (ss.isNullOrUndefined(a)) {
        if (ss.isNullOrUndefined(this.$C)) {
          throw new ss.Exception(
            "RestartPath called without a BeginPath call before it"
          );
        }
        a = this.$C;
      }
      this.$i();
      this.$0(a, this.$D);
    },
    $b: function (a, c) {
      this.$d(a);
      for (var d = 0; d < c.length; d++) {
        var b = c[d];
        this.$c(b);
      }
    },
    $e: function (a, c) {
      this.$d(a);
      for (var d = 0; d < c.length; d++) {
        var b = c[d];
        this.$c(b);
      }
      this.$A.closePath();
    },
    $8: function (a, d, f) {
      this.$A.save();
      this.$A.globalAlpha = a.$4 * this.$x();
      this.$A.fillStyle = a.$3(this.$G);
      this.$A.beginPath();
      this.$d(d);
      for (var b = 0; b < f.length; b++) {
        var c = f[b];
        this.$c(c);
      }
      this.$A.closePath();
      this.$A.fill();
      this.$A.restore();
    },
    $d: function (a) {
      this.$A.moveTo(
        this.$B.get_left() + a.x * this.$H,
        this.$B.get_top() + a.y * this.$H
      );
    },
    $c: function (a) {
      this.$A.lineTo(
        this.$B.get_left() + a.x * this.$H,
        this.$B.get_top() + a.y * this.$H
      );
    },
    $j: function (a, b, c) {
      this.$l(a.toString(), b, c.get_topLeft(), c.get_size());
    },
    $k: function (a, b, c) {
      this.$l(a.$3(this.$G), a.$4, b, c);
    },
    $l: function (a, d, f, b) {
      var c = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply(f, this.$H);
      this.$A.save();
      this.$A.globalAlpha = d * this.$x();
      this.$A.fillStyle = a;
      this.$A.fillRect(
        this.$B.get_left() + c.x,
        this.$B.get_top() + c.y,
        b.width * this.$H,
        b.height * this.$H
      );
      this.$A.restore();
    },
    $s: function (a, c, d) {
      var b = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply(c, this.$H);
      this.$A.save();
      this.$A.strokeStyle = a.toString();
      this.$A.lineWidth = 1;
      this.$A.strokeRect(
        this.$B.get_left() + b.x,
        this.$B.get_top() + b.y,
        d.width * this.$H,
        d.height * this.$H
      );
      this.$A.restore();
    },
    $f: function (a, b, c) {
      this.$0(a, c);
      this.$6(
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          b.get_topLeft().x + 5,
          b.get_topLeft().y + 5
        ),
        5,
        180
      );
      this.$6(
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          b.get_topRight().x - 5,
          b.get_topRight().y + 5
        ),
        5,
        270
      );
      this.$6(
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          b.get_bottomRight().x - 5,
          b.get_bottomRight().y - 5
        ),
        5,
        0
      );
      this.$6(
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          b.get_bottomLeft().x + 5,
          b.get_bottomLeft().y - 5
        ),
        5,
        90
      );
      this.$A.closePath();
      this.$i();
    },
    $o: function (a, b, c) {
      this.$n(a.toString(), b, c);
    },
    $m: function (a, b) {
      this.$n(a.$3(this.$G), a.$4, b);
    },
    $n: function (a, b, c) {
      this.$A.save();
      this.$A.beginPath();
      this.$A.lineWidth = 0;
      this.$A.globalAlpha = b * this.$x();
      this.$A.fillStyle = a;
      this.$6(
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          c.get_topLeft().x + 5,
          c.get_topLeft().y + 5
        ),
        5,
        180
      );
      this.$6(
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          c.get_topRight().x - 5,
          c.get_topRight().y + 5
        ),
        5,
        270
      );
      this.$6(
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          c.get_bottomRight().x - 5,
          c.get_bottomRight().y - 5
        ),
        5,
        0
      );
      this.$6(
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          c.get_bottomLeft().x + 5,
          c.get_bottomLeft().y - 5
        ),
        5,
        90
      );
      this.$A.closePath();
      this.$A.fill();
      this.$A.restore();
    },
    $6: function (a, c, d) {
      var b = Math.PI / 180;
      this.$A.arc(
        this.$B.get_left() + a.x * this.$H,
        this.$B.get_top() + a.y * this.$H,
        c * this.$H,
        d * b,
        (d + 90) * b
      );
    },
    $7: function (a, b) {
      this.$A.save();
      this.$A.globalAlpha = b * this.$x();
      this.$A.fillStyle = a.toString();
      this.$A.fillRect(0, 0, this.$A.canvas.width, this.$A.canvas.height);
      this.$A.restore();
    },
    $9: function (a, j, k, b) {
      this.$A.save();
      this.$A.globalAlpha = this.$x() * (k ? 0.3 : 0.4);
      var c = this.$B.get_left() + a.x * this.$H;
      var d = this.$B.get_top() + a.y * this.$H;
      var f = j.width * this.$H;
      var g = j.height * this.$H;
      var h = b ? "rgba(0,0,0," : "rgba(255,255,255,";
      var i = this.$A.createLinearGradient(
        c,
        d + (k ? g : 0),
        c,
        d + (k ? 0 : g)
      );
      i.addColorStop(0, h + "0.00)");
      i.addColorStop(0.2, h + "0.10)");
      i.addColorStop(0.4, h + "0.25)");
      i.addColorStop(0.6, h + "0.45)");
      i.addColorStop(1, h + "1.00)");
      this.$A.fillStyle = i;
      this.$A.fillRect(c, d, f, g);
      this.$A.restore();
    },
    $3: function (a, b, c) {
      this.$4(a.$3(this.$G), a.$4, b, c);
    },
    $5: function (a, c, d, b) {
      this.$4(a.toString(), c, d, b);
    },
    $4: function (a, c, d, b) {
      this.$A.save();
      this.$A.globalAlpha = c * this.$x();
      this.$A.fillStyle = a;
      this.$A.beginPath();
      this.$A.arc(
        this.$B.get_left() + d.x * this.$H,
        this.$B.get_top() + d.y * this.$H,
        b * this.$H,
        0,
        Math.PI * 2
      );
      this.$A.closePath();
      this.$A.fill();
      this.$A.restore();
    },
    $2: function (a, c, d, b) {
      if (c <= 0) {
        return;
      }
      this.$A.arc(
        this.$B.get_left() + a.x * this.$H,
        this.$B.get_top() + a.y * this.$H,
        c * this.$H,
        d,
        b
      );
    },
    $a: function (a, o, p, b) {
      this.$A.save();
      var c = i7.getContentImageElement(a);
      var d = a.get_aspectRatio();
      var f = o.get_width() / o.get_height();
      var g = o.get_topLeft();
      var h = o.get_size();
      if (d > f) {
        var i = o.get_width() / d;
        h = new VEL.Skynet.Core.Toolbox.Geometry.Size(h.width, i);
        var j = 0;
        if (b === 2) {
          j = o.get_height() - i;
        }
        if (b === 1) {
          j = (o.get_height() - i) / 2;
        }
        g = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
          g,
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0, j)
        );
      } else {
        var k = o.get_height() * d;
        h = new VEL.Skynet.Core.Toolbox.Geometry.Size(k, h.height);
        var l = 0;
        if (p === 2) {
          l = o.get_width() - k;
        }
        if (p === 1) {
          l = (o.get_width() - k) / 2;
        }
        g = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
          g,
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(l, 0)
        );
      }
      var m = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
        this.$B.get_topLeft(),
        VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply(g, this.$H)
      );
      var n = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(h, this.$H);
      if (a.get_canTransparent()) {
        this.$A.fillStyle = "white";
        this.$A.fillRect(m.x, m.y, n.width, n.height);
      }
      hZ.safeDrawImage$1(this.$A, c, m, n);
      this.$A.restore();
    },
    $g: function (a, g, h, b, c, d, f) {
      this.$h(
        new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(a, 1),
        g,
        h,
        b,
        c,
        d,
        f
      );
    },
    $h: function (a, p, q, b, c, d, f) {
      this.$A.save();
      var g = null;
      if (!a.get_isEmpty()) {
        this.$A.globalAlpha = p.$4 * this.$x();
        this.$A.fillStyle = p.$3(this.$G);
        this.$A.textBaseline = "alphabetic";
        this.$A.textAlign = "left";
        var h = new VEL.Skynet.Core.View.Helpers.TypeSetterOptions();
        h.horizontalAlign = c;
        h.verticalAlign = d;
        h.maxFontSize = b;
        h.lineSpacing = 0.3;
        h.verticalMetrics =
          VEL.Skynet.Core.View.Helpers.TypeSetter.getVerticalMetrics(
            a,
            ss.mkdel(this, this.$p)
          );
        var i = h;
        g = VEL.Skynet.Core.View.Helpers.TypeSetter.arrange(
          a,
          q.get_size(),
          ss.mkdel(this, this.$p),
          i
        );
        var j = this.$A.globalAlpha;
        for (var k = 0; k < g.chunks.length; k++) {
          var l = g.chunks[k];
          this.$A.font = ss.formatString(
            '{0}px RedditSansMedium, "Reddit Sans", Rubik, Arial, sans-serif',
            l.fontSize * this.$H
          );
          if (l.get_isBold()) {
            this.$A.globalAlpha = 1;
          }
          var m = (g.isRtl ? "" : "") + l.text + "";
          this.$A.fillText(
            m,
            this.$B.get_left() + (q.get_left() + l.position.x) * this.$H,
            this.$B.get_top() + (q.get_top() + l.position.y) * this.$H
          );
          this.$A.globalAlpha = j;
          if (hM.$7()) {
            this.$A.strokeStyle = e2.$1.toString();
            this.$A.lineWidth = 0.5;
            this.$A.strokeRect(
              this.$B.get_left() +
                (q.get_left() + l.get_bounds().get_left()) * this.$H,
              this.$B.get_top() +
                (q.get_top() + l.get_bounds().get_top()) * this.$H,
              l.get_bounds().get_width() * this.$H,
              l.get_bounds().get_height() * this.$H
            );
          }
        }
      }
      if (f) {
        this.$A.lineWidth = 0.5;
        this.$A.strokeStyle = p.$3(this.$G);
        var n = ss.isValue(g)
          ? Enumerable.from(g.chunks).lastOrDefault(
              null,
              ss.getDefaultValue(VEL.Skynet.Core.View.Helpers.Entities.Chunk)
            )
          : null;
        this.$A.beginPath();
        var o = ss.isNullOrUndefined(n)
          ? q.get_center()
          : g.isRtl
          ? q.get_left() + n.get_bounds().get_left()
          : q.get_left() + n.get_bounds().get_right();
        if (ss.endsWithString(a.toString(), " ")) {
          o += b / 3;
        }
        this.$A.moveTo(
          this.$B.get_left() + 2 + o * this.$H,
          this.$B.get_top() + (q.get_middle() - b * 0.5) * this.$H
        );
        this.$A.lineTo(
          this.$B.get_left() + 2 + o * this.$H,
          this.$B.get_top() + (q.get_middle() + b * 0.5) * this.$H
        );
        this.$A.stroke();
      }
      this.$A.restore();
    },
    $u: function () {
      if (ss.isNullOrUndefined(this.$E)) {
        return true;
      }
      return this.$E.$15();
    },
    $t: function (a) {
      return VEL.Skynet.Core.Toolbox.Geometry.Rect.op_Multiply(a, this.$H);
    },
    $p: function (a, b, c) {
      return this.$F.measureSize(a, b, c & -2);
    },
  });
  ss.initClass(je, e, {
    $t: function () {
      return this.$1$1;
    },
    $u: function (a) {
      this.$1$1 = a;
    },
    $c: function () {
      return this.$1$2;
    },
    $d: function (a) {
      this.$1$2 = a;
    },
    $q: function () {
      return this.$1$3;
    },
    $r: function (a) {
      this.$1$3 = a;
    },
    $e: function () {
      return this.$1$4;
    },
    $f: function (a) {
      this.$1$4 = a;
    },
    $j: function () {
      return this.$1$5;
    },
    $k: function (a) {
      this.$1$5 = a;
    },
    $o: function () {
      return this.$1$6;
    },
    $p: function (a) {
      this.$1$6 = a;
    },
    $l: function () {
      return this.$1$7;
    },
    $m: function (a) {
      this.$1$7 = a;
    },
    $n: function () {
      return !ss.staticEquals(this.$v, null);
    },
    $g: function () {
      return this.$1$8;
    },
    $h: function (a) {
      this.$1$8 = a;
    },
    $s: function () {
      return null;
    },
    $0: function (a) {
      this.$d(
        ss.isValue(this.$q()) && ss.isValue(a) ? a.removeMargin$1(this.$q()) : a
      );
    },
    $i: function () {
      return false;
    },
    $1: null,
    $5: function () {},
    $6: function (a) {
      if (!this.$n()) {
        return !this.$e();
      }
      jT.$0(this);
      if (!ss.staticEquals(this.$v, null) && ss.equals(this, je.$0)) {
        this.$v();
      }
      return true;
    },
    $7: function (a, b) {
      if (!this.$n()) {
        return !this.$e();
      }
      if (b) {
        this.$8(a);
      }
      this.$k(true);
      this.$p(b);
      je.$0 = this;
      jT.$0(this);
      if (this.$i() && b && !ss.staticEquals(this.$v, null)) {
        this.$v();
      }
      return true;
    },
    $a: function (a, b) {
      if (!this.$n()) {
        return !this.$e();
      }
      return true;
    },
    $b: function (a, b) {
      if (!this.$n()) {
        return !this.$e();
      }
      var c = ss.referenceEquals(je.$0, this);
      if (b) {
        this.$9();
      }
      this.$p(false);
      this.$k(false);
      jT.$0(this);
      if (!this.$i() && b && !ss.staticEquals(this.$v, null) && c) {
        this.$v();
      }
      return true;
    },
    $8: function (a) {
      if (!this.$n()) {
        return !this.$e();
      }
      this.$m(true);
      jT.$0(this);
      return true;
    },
    $9: function () {
      if (!this.$n()) {
        return !this.$e();
      }
      this.$m(false);
      jT.$0(this);
      this.$p(false);
      this.$k(false);
      if (ss.referenceEquals(je.$0, this)) {
        je.$0 = null;
      }
      return true;
    },
    $4: function (a) {
      var b = this.$c();
      if (ss.isNullOrUndefined(b)) {
        return false;
      }
      if (this.$g() && ss.isValue(this.$q())) {
        b = b.addMargin(this.$q());
      }
      return b.isInside(a);
    },
    $2: function (a, c, d) {
      if (d) {
        var b = this.$c().get_minDimension();
        return new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          this.$c().get_left() + a * b + (this.$c().get_width() - b) / 2,
          this.$c().get_top() + c * b + (this.$c().get_height() - b) / 2
        );
      }
      return new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
        this.$c().get_left() + a * this.$c().get_width(),
        this.$c().get_top() + c * this.$c().get_height()
      );
    },
    $3: function (a) {
      return this.$c().get_minDimension() * a;
    },
  });
  ss.initClass(
    jg,
    e,
    {
      $s: function () {
        return "Icon" + this.$G;
      },
      $B: function (a) {
        this.$E = true;
        this.$F = new VEL.Skynet.Core.Toolbox.Threading.ThreadManager(
          null,
          250,
          12,
          false,
          true
        );
        this.$F.execute = ss.mkdel(this, function (b) {
          this.$D = b / 12;
          jT.$0(this);
        });
        this.$F.completed = ss.mkdel(this, function () {
          this.$E = false;
          this.$F = null;
          a();
          this.$D = 0;
        });
        this.$F.start();
      },
      $w: function () {
        if (ss.isValue(this.$F)) {
          this.$F.stop();
          this.$E = false;
          this.$F = null;
          jT.$0(this);
          this.$D = 0;
        }
      },
      $A: function (a) {
        if (a === this.$G) {
          return;
        }
        this.$G = a;
        jT.$0(this);
      },
      $z: function (a) {
        this.$C = a;
      },
      $1: function (a) {
        if (this.$G === 8) {
          return;
        }
        var b = this.$3(0.09);
        this.$x(a, this.$C, b);
        if (this.$E) {
          var c = new jV(6, this.$C.$4 / 2);
          a.$0(c, b);
          a.$b(this.$2(0.15, 1.05, true), [this.$2(0.85, 1.05, true)]);
          a.$i();
          a.$0(this.$C, b);
          a.$b(this.$2(0.15, 1.05, true), [
            this.$2(0.15 + 0.7 * this.$D, 1.05, true),
          ]);
          a.$i();
        }
        if (this.$G === 0 || this.$G === 5) {
          a.$f(this.$C, this.$c(), b * 0.6);
        }
      },
      $x: function (a, k, l) {
        a.$0(k, l);
        switch (this.$G) {
          case 4:
            a.$b(this.$2(0.125, 0.125, true), [this.$2(0.325, 0.325, true)]);
            a.$b(this.$2(0.125, 0.875, true), [this.$2(0.325, 0.675, true)]);
            a.$b(this.$2(0.875, 0.125, true), [this.$2(0.675, 0.325, true)]);
            a.$b(this.$2(0.875, 0.875, true), [this.$2(0.675, 0.675, true)]);
            if (VEL.Skynet.Global.Modules.app.isFullScreen()) {
              a.$b(this.$2(0.125, 0.35, true), [this.$2(0.35, 0.35, true)]);
              a.$b(this.$2(0.35, 0.125, true), [this.$2(0.35, 0.35, true)]);
              a.$b(this.$2(0.875, 0.35, true), [this.$2(0.65, 0.35, true)]);
              a.$b(this.$2(0.65, 0.125, true), [this.$2(0.65, 0.35, true)]);
              a.$b(this.$2(0.125, 0.65, true), [this.$2(0.35, 0.65, true)]);
              a.$b(this.$2(0.35, 0.875, true), [this.$2(0.35, 0.65, true)]);
              a.$b(this.$2(0.875, 0.65, true), [this.$2(0.65, 0.65, true)]);
              a.$b(this.$2(0.65, 0.875, true), [this.$2(0.65, 0.65, true)]);
            } else {
              a.$b(this.$2(0.1, 0.35, true), [this.$2(0.1, 0.1, true)]);
              a.$b(this.$2(0.35, 0.1, true), [this.$2(0.1, 0.1, true)]);
              a.$b(this.$2(0.9, 0.35, true), [this.$2(0.9, 0.1, true)]);
              a.$b(this.$2(0.65, 0.1, true), [this.$2(0.9, 0.1, true)]);
              a.$b(this.$2(0.1, 0.65, true), [this.$2(0.1, 0.9, true)]);
              a.$b(this.$2(0.35, 0.9, true), [this.$2(0.1, 0.9, true)]);
              a.$b(this.$2(0.9, 0.65, true), [this.$2(0.9, 0.9, true)]);
              a.$b(this.$2(0.65, 0.9, true), [this.$2(0.9, 0.9, true)]);
            }
            break;
          case 3:
            a.$b(this.$2(0.25, 0.25, true), [this.$2(0.75, 0.75, true)]);
            a.$b(this.$2(0.75, 0.25, true), [this.$2(0.25, 0.75, true)]);
            break;
          case 0:
            a.$b(this.$2(0.275, 0.275, true), [this.$2(0.725, 0.275, true)]);
            a.$b(this.$2(0.275, 0.5, true), [this.$2(0.725, 0.5, true)]);
            a.$b(this.$2(0.275, 0.725, true), [this.$2(0.725, 0.725, true)]);
            break;
          case 5:
            var b = 0.2;
            var c = 0.1;
            var d = 0.15;
            for (var f = 0; f < 5; f++) {
              var g = 0.125;
              for (var h = 0; h < 8; h++) {
                var i = this.$2(g, b, false);
                if (f === 4 && h === 2) {
                  g += 3 * c;
                  h += 3;
                }
                var j = this.$2(g + c / 3, b, false);
                a.$b(i, [j]);
                g += c;
              }
              b += d;
            }
            break;
          case 7:
            this.$y(a);
            a.$b(this.$2(0.7, 0.4, true), [this.$2(0.9, 0.6, true)]);
            a.$b(this.$2(0.7, 0.6, true), [this.$2(0.9, 0.4, true)]);
            break;
          case 6:
            this.$y(a);
            a.$q(null);
            a.$2(this.$2(0.5, 0.5, true), this.$3(0.2), -0.610865, 0.610865);
            a.$q(null);
            a.$2(this.$2(0.5, 0.5, true), this.$3(0.4), -0.610865, 0.610865);
            a.$q(null);
            break;
          case 1:
            a.$e(this.$2(0.8, 0.15, true), [
              this.$2(0.7, 0.15, true),
              this.$2(0.1, 0.5, true),
              this.$2(0.7, 0.85, true),
              this.$2(0.8, 0.85, true),
            ]);
            break;
          case 2:
            a.$e(this.$2(0.2, 0.15, true), [
              this.$2(0.3, 0.15, true),
              this.$2(0.9, 0.5, true),
              this.$2(0.3, 0.85, true),
              this.$2(0.2, 0.85, true),
            ]);
            break;
        }
        a.$i();
      },
      $y: function (a) {
        a.$b(this.$2(0.5, 0.5, true), [
          this.$2(0.5, 0.2, true),
          this.$2(0.5, 0.8, true),
          this.$2(0.3, 0.65, true),
          this.$2(0.1, 0.65, true),
          this.$2(0.1, 0.35, true),
          this.$2(0.3, 0.35, true),
          this.$2(0.5, 0.2, true),
          this.$2(0.5, 0.5, true),
        ]);
      },
    },
    je
  );
  ss.initClass(
    ji,
    e,
    {
      $w: function () {
        return this.$2$1;
      },
      $x: function (a) {
        this.$2$1 = a;
      },
      $1: function (a) {
        a.$7(this.$y, this.$z);
      },
    },
    je
  );
  ss.initEnum(jk, e, { $0: 0, $2: 1, $1: 2, $3: 3 });
  ss.initClass(
    jm,
    e,
    {
      $1: function (a) {
        a.$j(
          e2.$7,
          0.8,
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_left(),
            this.$c().get_top(),
            this.$c().get_width() / 3,
            this.$c().get_height()
          )
        );
        a.$j(
          e2.$7,
          0.8,
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_left() + (this.$c().get_width() * 2) / 3,
            this.$c().get_top(),
            this.$c().get_width() / 3,
            this.$c().get_height()
          )
        );
      },
    },
    je
  );
  ss.initClass(
    jo,
    e,
    {
      $5: function () {
        if (ss.isNullOrUndefined(this.$c())) {
          return;
        }
        this.$w += Math.PI / 6;
        if (this.$w > 2 * Math.PI) {
          this.$w -= 2 * Math.PI;
        }
        jT.$1();
      },
      $1: function (a) {
        var h = this.$c().get_middleCenter();
        var i = this.$c().get_minDimension() / 2;
        var b = this.$w;
        for (var c = 0; c < 12; c++) {
          var d = (c + 3) / 160;
          var f = h.x + Math.cos(b) * i;
          var g = h.y + Math.sin(b) * i;
          a.$3(
            jV.$m,
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(f, g),
            Math.max(0, i * d)
          );
          b += Math.PI / 6;
        }
      },
    },
    je
  );
  ss.initClass(
    jq,
    e,
    {
      $w: function (a) {
        if (ss.isNullOrUndefined(this.$x) && ss.isNullOrUndefined(a)) {
          return;
        }
        this.$x = a;
        jT.$0(this);
      },
      $1: function (a) {
        if (ss.isNullOrUndefined(this.$x)) {
          return;
        }
        var d = this.$y ? jV.$i : jV.$d;
        a.$j(d, 0.2, this.$c());
        var f = this.$x.max + this.$x.range;
        var b = this.$c().get_top() + (this.$x.y * this.$c().get_height()) / f;
        var c = (this.$x.range * this.$c().get_height()) / f;
        a.$j(
          d,
          1,
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_left(),
            b,
            this.$c().get_width(),
            c
          )
        );
      },
    },
    je
  );
  ss.initClass(
    js,
    e,
    {
      $1: function (a) {
        a.$k(jV.$f, this.$c().get_topLeft(), this.$c().get_size());
        a.$g(this.$y, jV.$m, this.$c(), 40, 1, 1, this.$x);
      },
      $5: function () {
        this.$x = !this.$x;
        jT.$1();
      },
      $w: function (a) {
        this.$y = a;
        jT.$0(this);
      },
    },
    je
  );
  ss.initClass(
    ju,
    e,
    {
      $x: function () {
        return this.$F;
      },
      $B: function () {
        return this.$I;
      },
      $C: function (a) {
        if (ss.referenceEquals(a, this.$I)) {
          return;
        }
        this.$I = a;
        jT.$0(this);
      },
      $w: function () {
        if (ss.isNullOrUndefined(this.$I) || this.$I.get_isEmpty()) {
          return 0;
        }
        var a = h1.fromCanvasFont(
          '{0}px RedditSansMedium, "Reddit Sans", Rubik, Arial, sans-serif',
          null
        );
        var b = a.measureWidth(this.$I.toString(), this.$F, 0);
        if (ss.isValue(this.$q())) {
          b += this.$q().get_left() + this.$q().get_right();
        }
        return b;
      },
      $5: function () {
        if (this.$z()) {
          this.$E = !this.$E;
          jT.$0(this);
        } else {
          if (this.$E) {
            this.$E = false;
            jT.$0(this);
          }
        }
      },
      $1: function (a) {
        if (this.$E || ss.isNullOrUndefined(this.$I) || this.$I.get_isEmpty()) {
          return;
        }
        a.$h(
          this.$I,
          this.$H ? this.$D.$2() : this.$D,
          this.$c(),
          this.$F,
          this.$G,
          this.$J,
          false
        );
      },
      $y: function (a) {
        if (this.$H === a) {
          return;
        }
        jT.$0(this);
        this.$H = a;
      },
      $z: function () {
        return this.$2$1;
      },
      $A: function (a) {
        this.$2$1 = a;
      },
    },
    je
  );
  ju.$0.prototype = ju.prototype;
  ss.initClass(
    jw,
    e,
    {
      $1: function (a) {
        ju.prototype.$1.call(this, a);
        if (ss.isNullOrUndefined(this.$B()) || this.$B().get_isEmpty()) {
          return;
        }
        var b = ja.$a();
        a.$0(jV.$9, b / 8);
        if (hK.$1()) {
          a.$b(
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              this.$c().get_right() + 0.3 * b,
              this.$c().get_top() + 0.6 * b
            ),
            [
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                this.$c().get_right() + 0.4 * b,
                this.$c().get_top() + 0.7 * b
              ),
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                this.$c().get_right() + 0.7 * b,
                this.$c().get_top() + 0.3 * b
              ),
            ]
          );
        } else {
          a.$b(
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              this.$c().get_left() + 0.3 * b - b,
              this.$c().get_top() + 0.6 * b
            ),
            [
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                this.$c().get_left() + 0.4 * b - b,
                this.$c().get_top() + 0.7 * b
              ),
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                this.$c().get_left() + 0.7 * b - b,
                this.$c().get_top() + 0.3 * b
              ),
            ]
          );
        }
        a.$i();
      },
    },
    ju
  );
  ss.initClass(
    jy,
    e,
    {
      $0: function (a) {
        this.$r(
          hK.$1()
            ? new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor4(
                0,
                0,
                ja.$a(),
                0
              )
            : new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor4(
                ja.$a(),
                0,
                0,
                0
              )
        );
        je.prototype.$0.call(this, a);
      },
      $K: function (a) {
        this.$C(
          new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(
            a.toString(),
            1
          )
        );
      },
    },
    jw
  );
  ss.initClass(
    jA,
    e,
    {
      $0: function (a) {
        this.$r(
          hK.$1()
            ? new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor4(
                0,
                0,
                ja.$3(),
                0
              )
            : new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor4(
                ja.$3(),
                0,
                0,
                0
              )
        );
        je.prototype.$0.call(this, a);
      },
    },
    jw
  );
  ss.initClass(
    j7,
    e,
    {
      $B: function () {
        return this.$C.length;
      },
      $1: function (a) {
        for (var b = 0; b < this.$C.length; b++) {
          var c = this.$C[b];
          if (ss.isNullOrUndefined(c.$c())) {
            continue;
          }
          switch (a.$v()) {
            case 1:
              if (c.$c().get_top() > ja.$b()) {
                continue;
              }
              break;
            case 2:
              if (c.$c().get_bottom() < hK.$6().height - ja.$7()) {
                continue;
              }
              break;
          }
          c.$1(a);
        }
      },
      $y: function (a) {
        if (ss.isNullOrUndefined(a)) {
          return null;
        }
        a = a.toLowerCase().trim();
        if (
          ss.isValue(this.$s()) &&
          ss.referenceEquals(this.$s().toLowerCase().trim(), a)
        ) {
          return this.$c();
        }
        for (var c = 0; c < this.$C.length; c++) {
          var d = this.$C[c];
          if (ss.isInstanceOfType(d, j7)) {
            var b = ss.cast(d, j7).$y(a);
            if (ss.isValue(b)) {
              return b;
            }
          } else {
            if (
              ss.isValue(d.$s()) &&
              ss.referenceEquals(d.$s().toLowerCase().trim(), a)
            ) {
              return d.$c();
            }
          }
        }
        return null;
      },
      $5: function () {
        for (var a = 0; a < this.$C.length; a++) {
          var b = this.$C[a];
          b.$5();
        }
      },
      $7: function (a, c) {
        var d = Enumerable.from(this.$C).reverse().getEnumerator();
        try {
          while (d.moveNext()) {
            var b = d.current();
            if (ss.isNullOrUndefined(b.$c())) {
              continue;
            }
            if (!b.$4(a)) {
              continue;
            }
            if (b.$7(a, c)) {
              return true;
            }
          }
        } finally {
          d.dispose();
        }
        return je.prototype.$7.call(this, a, c);
      },
      $a: function (a, d) {
        var f = false;
        var b = Enumerable.from(this.$C).reverse().getEnumerator();
        try {
          while (b.moveNext()) {
            var c = b.current();
            if (ss.isNullOrUndefined(c.$c())) {
              continue;
            }
            if (c.$4(a)) {
              f = c.$a(a, d) || f;
              if (!c.$l()) {
                c.$8(a);
              }
            } else {
              if (c.$l()) {
                c.$9();
              }
            }
          }
        } finally {
          b.dispose();
        }
        return je.prototype.$a.call(this, a, d) || f;
      },
      $b: function (a, c) {
        var d = Enumerable.from(this.$C).reverse().getEnumerator();
        try {
          while (d.moveNext()) {
            var b = d.current();
            if (ss.isNullOrUndefined(b.$c())) {
              continue;
            }
            if (!b.$4(a)) {
              continue;
            }
            if (b.$b(a, c)) {
              return true;
            }
          }
        } finally {
          d.dispose();
        }
        return je.prototype.$b.call(this, a, c);
      },
      $6: function (a) {
        var b = Enumerable.from(this.$C).reverse().getEnumerator();
        try {
          while (b.moveNext()) {
            var c = b.current();
            if (ss.isNullOrUndefined(c.$c())) {
              continue;
            }
            if (!c.$4(a)) {
              continue;
            }
            if (c.$6(a)) {
              return true;
            }
          }
        } finally {
          b.dispose();
        }
        return je.prototype.$6.call(this, a);
      },
      $w: function (a) {
        a.$u(this);
        this.$C.push(a);
      },
      $A: function (a) {
        a.$u(null);
        ss.remove(this.$C, a);
      },
      $z: function (a) {
        a.$u(this);
        ss.insert(this.$C, 0, a);
      },
      $x: function (a) {
        return ss.contains(this.$C, a);
      },
    },
    je
  );
  ss.initClass(
    jC,
    e,
    {
      $D: function (a, b) {
        this.$E.$C(
          new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(
            ss.formatString(Strings.menu_Page, a.toString(), b),
            1
          )
        );
      },
      $0: function (a) {
        if (ss.isNullOrUndefined(this.$E)) {
          this.$w((this.$E = new jA(ja.$1())));
        }
        je.prototype.$0.call(this, a);
        var b =
          this.$c().get_left() +
          (this.$c().get_width() - this.$E.$w() - ja.$3()) / 2;
        this.$E.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            b,
            this.$c().get_top(),
            this.$E.$w(),
            this.$c().get_height()
          )
        );
      },
    },
    j7
  );
  ss.initClass(
    jE,
    e,
    {
      $1: function (a) {
        if (ss.isValue(this.$w.name)) {
          var d = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_left(),
            this.$c().get_top(),
            this.$c().get_width(),
            this.$c().get_height() / 3
          );
          a.$g(this.$w.name, jV.$1, d, 20, 1, 2, false);
          var f = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_left(),
            this.$c().get_top() + this.$c().get_height() / 3,
            this.$c().get_width(),
            (this.$c().get_height() * 2) / 3
          );
          if (ss.isValue(this.$w.subValue)) {
            var b = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor1(
              f.get_topLeft(),
              new VEL.Skynet.Core.Toolbox.Geometry.Size(
                f.get_size().width * 0.51,
                f.get_size().height
              )
            );
            var c = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor1(
              VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
                f.get_topLeft(),
                new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                  f.get_size().width * 0.55,
                  f.get_size().height * 0.18
                )
              ),
              new VEL.Skynet.Core.Toolbox.Geometry.Size(
                f.get_size().width * 0.45,
                f.get_size().height * 0.82
              )
            );
            a.$h(this.$w.value, jV.$m, b, 40, 2, 1, false);
            a.$h(this.$w.subValue, jV.$m, c, 20, 0, 1, false);
          } else {
            a.$h(this.$w.value, jV.$m, f, 40, 1, 1, false);
          }
        } else {
          a.$h(this.$w.value, jV.$m, this.$c(), 100, 1, 1, false);
        }
      },
    },
    je
  );
  ss.initClass(
    jG,
    e,
    {
      $x: function () {
        return this.$2$1;
      },
      $y: function (a) {
        this.$2$1 = a;
      },
      $s: function () {
        return "KeyboardArrowButton" + this.$B;
      },
      $i: function () {
        return true;
      },
      $z: function () {
        return this.$B;
      },
      $1: function (a) {
        var g = this.$j() || this.$x();
        var h = this.$l() ? jV.$l : jV.$0;
        var b = new jV(g ? 3 : 2, 1);
        var c = new e6(g ? "lightgray" : "white");
        var d = g ? 3 : 0;
        var f = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          this.$c().get_left() + 1.75,
          this.$c().get_top() + d + 1.75,
          this.$c().get_width() - 3.5,
          this.$c().get_height() - 3.5
        );
        a.$o(c, 1, f);
        a.$f(
          b,
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            f.get_left(),
            f.get_top(),
            f.get_width(),
            f.get_height() + 3.5 - d
          ),
          3.5
        );
        if (!g) {
          a.$f(
            b,
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              f.get_left(),
              f.get_top(),
              f.get_width(),
              f.get_height()
            ),
            3.5
          );
        }
        this.$w(a, h);
      },
      $w: function (a, b) {
        var c = this.$j() || this.$x() ? 0.07000000000000001 : 0;
        a.$0(b, 4.2);
        switch (this.$B) {
          case 2:
            a.$b(this.$2(0.3, 0.5 + c, true), [this.$2(0.7, 0.5 + c, true)]);
            a.$b(this.$2(0.5, 0.25 + c, true), [
              this.$2(0.29, 0.5 + c, true),
              this.$2(0.5, 0.75 + c, true),
            ]);
            break;
          case 3:
            a.$b(this.$2(0.3, 0.5 + c, true), [this.$2(0.7, 0.5 + c, true)]);
            a.$b(this.$2(0.5, 0.25 + c, true), [
              this.$2(0.71, 0.5 + c, true),
              this.$2(0.5, 0.75 + c, true),
            ]);
            break;
          case 1:
            a.$b(this.$2(0.5, 0.3 + c, true), [this.$2(0.5, 0.7 + c, true)]);
            a.$b(this.$2(0.25, 0.5 + c, true), [
              this.$2(0.5, 0.29 + c, true),
              this.$2(0.75, 0.5 + c, true),
            ]);
            break;
          case 0:
            a.$b(this.$2(0.5, 0.3 + c, true), [this.$2(0.5, 0.7 + c, true)]);
            a.$b(this.$2(0.25, 0.5 + c, true), [
              this.$2(0.5, 0.71 + c, true),
              this.$2(0.75, 0.5 + c, true),
            ]);
            break;
          default:
            throw new ss.NotImplementedException();
        }
        a.$i();
      },
      $6: function (a) {
        return false;
      },
      $7: function (a, b) {
        return je.prototype.$7.call(this, a, true);
      },
      $b: function (a, b) {
        if (!ss.staticEquals(this.$A, null)) {
          this.$A(this.$B);
        }
        return je.prototype.$b.call(this, a, true);
      },
      $9: function () {
        if (!ss.staticEquals(this.$A, null)) {
          this.$A(this.$B);
        }
        return je.prototype.$9.call(this);
      },
    },
    je
  );
  ss.initClass(
    jI,
    e,
    {
      $s: function () {
        return "MovementButtonsOverlay";
      },
      $E: function () {
        ss.clear(this.$C);
        var a = new jG(0, this.$H, this.$I);
        a.$r(new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(2, 4));
        this.$w(a);
        var c = new jG(1, this.$H, this.$I);
        c.$r(new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(2, 4));
        this.$w(c);
        var d = new jG(2, this.$H, this.$I);
        d.$r(new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(2, 4));
        this.$w(d);
        var b = new jG(3, this.$H, this.$I);
        b.$r(new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(2, 4));
        this.$w(b);
        this.$G = Enumerable.from(this.$C)
          .select(function (f) {
            return ss.cast(f, jG);
          })
          .toArray();
        jT.$0(this);
      },
      $D: function () {
        ss.clear(this.$C);
        this.$G = [];
        jT.$0(this);
      },
      $F: function (a) {
        for (var c = 0; c < this.$G.length; c++) {
          var d = this.$G[c];
          var b = Enumerable.from(a).contains(d.$z());
          if (b !== d.$x()) {
            d.$y(b);
            jT.$0(d);
          }
        }
      },
      $0: function (a) {
        je.prototype.$0.call(this, a);
        if (this.$G.length === 4) {
          this.$G[0].$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              a.get_left() + 55,
              a.get_top() + 57,
              55,
              57
            )
          );
          this.$G[1].$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              a.get_left() + 55,
              a.get_top(),
              55,
              57
            )
          );
          this.$G[2].$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              a.get_left(),
              a.get_top() + 28.5,
              55,
              57
            )
          );
          this.$G[3].$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              a.get_left() + 110,
              a.get_top() + 28.5,
              55,
              57
            )
          );
        }
      },
    },
    j7
  );
  ss.initClass(
    jK,
    e,
    {
      $H: function () {
        return this.$3$1;
      },
      $I: function (a) {
        this.$3$1 = a;
      },
      $n: function () {
        return !this.$H() && je.prototype.$n.call(this);
      },
      $s: function () {
        return "IconButton" + this.$G;
      },
      $1: function (a) {
        if (a.$u()) {
          this.$z(jV.$9.$0(0));
        } else {
          if (this.$H()) {
            this.$z(jV.$3);
          } else {
            if (this.$j() || this.$l()) {
              this.$z(jV.$5);
            } else {
              this.$z(jV.$9);
            }
          }
        }
        jg.prototype.$1.call(this, a);
      },
    },
    jg
  );
  ss.initClass(
    jM,
    e,
    {
      $s: function () {
        return this.$x;
      },
      $n: function () {
        if (ss.isValue(this.$w)) {
          return this.$w.get_isEnabled();
        }
        return false;
      },
    },
    je
  );
  ss.initClass(
    jO,
    e,
    {
      $y: function () {
        var a = h1.fromCanvasFont(
          '{0}px RedditSansMedium, "Reddit Sans", Rubik, Arial, sans-serif',
          null
        );
        return (
          a.measureWidth(this.$z, ja.$0(), 0) +
          68 +
          this.$q().get_left() +
          this.$q().get_right()
        );
      },
      $1: function (a) {
        if (ss.isNullOrUndefined(this.$w) || !this.$w.get_isVisible()) {
          return;
        }
        var b = this.$w.get_isEnabled()
          ? this.$w.get_isSelected() || this.$l()
            ? jV.$5
            : jV.$9
          : jV.$3;
        if (this.$A === 1) {
          a.$m(this.$l() ? jV.$6 : jV.$2, this.$c());
        } else {
          if (this.$A === 0) {
            a.$m(this.$l() ? jV.$8 : jV.$b, this.$c());
          }
        }
        if (this.$A === 2) {
          if (this.$w.get_isSelected()) {
            a.$0(b, 2);
            a.$b(this.$c().get_bottomLeft(), [this.$c().get_bottomRight()]);
            a.$i();
          }
        } else {
          if (this.$w.get_isEnabled()) {
            a.$f(this.$l() ? jV.$7 : jV.$a, this.$c(), 2);
          } else {
            a.$f(jV.$4, this.$c(), 1);
          }
        }
        var c = this.$c().removeMargin$1(
          new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(8, 0)
        );
        a.$g(this.$z, b, c, ja.$0(), 1, 1, false);
      },
    },
    jM
  );
  ss.initClass(
    jQ,
    e,
    {
      $y: function (a) {
        this.$A = a;
      },
      $1: function (a) {
        var c;
        if (ss.isValue(this.$w) && !this.$w.get_isEnabled()) {
          c = jQ.$1;
        } else {
          if (this.$l() || this.$j()) {
            c = jQ.$3;
            var d = this.$c().addMargin(
              new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(8, 0)
            );
            a.$m(jQ.$0, d);
          } else {
            c = jQ.$4;
          }
        }
        var b = this.$c().removeMargin$1(this.$A);
        a.$g(this.$x, c, b, 24, this.$z, 1, false);
      },
    },
    jM
  );
  ss.initClass(
    jS,
    e,
    {
      $s: function () {
        return "Start";
      },
      $1: function (a) {
        var b = this.$l() ? jV.$h : jV.$k;
        a.$o(b, 1, this.$c());
        j7.prototype.$1.call(this, a);
      },
      $0: function (a) {
        je.prototype.$0.call(this, a);
        var b = this.$c().removeMargin(a.get_width() * 0.05);
        this.$D.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            b.get_left(),
            b.get_top(),
            b.get_width(),
            (3 * b.get_height()) / 4
          )
        );
        this.$E.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            b.get_left(),
            b.get_top() + (b.get_height() * 3) / 4,
            b.get_width(),
            this.$c().get_height() / 4
          )
        );
      },
    },
    j7
  );
  ss.initClass(
    jU,
    e,
    {
      $1: function (a) {
        var f = this.$c().get_minDimension();
        var g = (this.$c().get_width() - f) / 2;
        var b = (this.$c().get_height() - f) / 2;
        var c = f / 10;
        var d = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          this.$c().get_left() + 2 * c + g,
          this.$c().get_top() + c + b,
          f - 3 * c,
          f - 2 * c
        );
        a.$8(jV.$m, d.get_topLeft(), [d.get_middleRight(), d.get_bottomLeft()]);
      },
    },
    je
  );
  ss.initClass(
    jW,
    e,
    {
      $0: function (a) {
        je.prototype.$0.call(this, a);
        var l = new VEL.Skynet.Core.Toolbox.Geometry.Margin(
          this.$c().get_height() / 20
        );
        var m = this.$c().get_width() / this.$D();
        if (this.$F() <= this.$D()) {
          var b = this.$c().get_left() + ((this.$D() - this.$F()) * m) / 2;
          var c = Enumerable.from(this.$C)
            .select(function (n) {
              return ss.cast(n, jY);
            })
            .getEnumerator();
          try {
            while (c.moveNext()) {
              var d = c.current();
              var f = m * d.$y();
              d.$r(l);
              d.$0(
                new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
                  b,
                  this.$c().get_top(),
                  f,
                  this.$c().get_height()
                )
              );
              b += f;
            }
          } finally {
            c.dispose();
          }
        } else {
          var g = this.$D() - this.$B();
          var h = this.$c().get_right();
          var i = Enumerable.from(this.$C)
            .reverse()
            .select(function (n) {
              return ss.cast(n, jY);
            })
            .getEnumerator();
          try {
            while (i.moveNext()) {
              var j = i.current();
              var k = 1;
              while (g > 0 && j.$y() - k > 0) {
                g--;
                k++;
              }
              j.$r(l);
              h -= m * k;
              j.$0(
                new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
                  h,
                  this.$c().get_top(),
                  m * k,
                  this.$c().get_height()
                )
              );
            }
          } finally {
            i.dispose();
          }
        }
      },
      $D: function () {
        return this.$3$1;
      },
      $E: function (a) {
        this.$3$1 = a;
      },
      $F: function () {
        return Enumerable.from(this.$C)
          .select(function (a) {
            return ss.cast(a, jY);
          })
          .sum(function (a) {
            return a.$y();
          });
      },
    },
    j7
  );
  ss.initClass(
    jY,
    e,
    {
      $B: function () {
        return this.$2$1;
      },
      $C: function (a) {
        this.$2$1 = a;
      },
      $A: function () {
        return this.$E !== 0;
      },
      $y: function () {
        return this.$2$2;
      },
      $z: function (a) {
        this.$2$2 = a;
      },
      $s: function () {
        if (this.$D === 12) {
          return this.$G.get_skip();
        }
        if (this.$D === 11) {
          return this.$G.get_enter();
        }
        if (ss.isValue(this.$J)) {
          return this.$H;
        }
        return null;
      },
      $i: function () {
        return !this.$A();
      },
      $x: function (a) {
        this.$F = a;
        this.$H = a ? this.$I : this.$J;
        jT.$0(this);
      },
      $1: function (a) {
        var f = this.$j() ? jY.$6 : jY.$5;
        var g = this.$l() || this.$B() ? jY.$2 : jY.$1;
        var b = new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor4(
          0,
          0,
          0,
          0.05 * this.$c().get_height()
        );
        var c = this.$c().removeMargin$1(b);
        var d = this.$c().get_height() * 0.05;
        a.$f(jY.$0, this.$c(), d);
        a.$m(jY.$0, this.$c());
        a.$m(g, c);
        this.$w(f, a, c);
      },
      $w: function (a, i, j) {
        var b = 0.05 * this.$c().get_width();
        var c = 0.05 * this.$c().get_height();
        var d = this.$c().removeMargin$1(
          new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor4(b, 0, b, c)
        );
        var f = Math.min(32, d.get_minDimension());
        if (ss.isValue(this.$J)) {
          i.$g(this.$H, a, d, f, 1, 1, false);
          return;
        }
        if (this.$D !== 0) {
          switch (this.$D) {
            case 10:
              i.$0(a, 3);
              i.$b(this.$2(0.8, 0.5, true), [this.$2(0.25, 0.5, true)]);
              i.$b(this.$2(0.32, 0.38, true), [
                this.$2(0.2, 0.5, true),
                this.$2(0.32, 0.62, true),
              ]);
              i.$i();
              break;
            case 11:
              i.$g(this.$G.get_enter(), a, d, f, 1, 1, false);
              break;
            case 12:
              i.$g(this.$G.get_skip(), a, d, f, 1, 1, false);
              break;
          }
        } else {
          switch (this.$E) {
            case 5:
              i.$8(a, this.$2(0.3, 0.375, true), [
                this.$2(0.7, 0.375, true),
                this.$2(0.5, 0.625, true),
              ]);
              break;
            case 1:
              var g = this.$2(0.25, 0.55, true);
              var h = [
                this.$2(0.5, 0.3, true),
                this.$2(0.75, 0.55, true),
                this.$2(0.62, 0.55, true),
                this.$2(0.62, 0.75, true),
                this.$2(0.38, 0.75, true),
                this.$2(0.38, 0.55, true),
                this.$2(0.25, 0.55, true),
              ];
              i.$0(a, 3);
              i.$e(g, h);
              i.$i();
              if (this.$B()) {
                i.$8(a, g, h);
              }
              break;
            case 4:
              i.$g(this.$G.get_lettersButton(), a, d, f, 1, 1, false);
              break;
            case 3:
              i.$g(this.$G.get_numbersButton(), a, d, f, 1, 1, false);
              break;
            case 2:
              i.$g(this.$G.get_specialButton(), a, d, f, 1, 1, false);
              break;
          }
        }
      },
    },
    je
  );
  jY.$8.prototype = jY.$7.prototype = jY.prototype;
  ss.initClass(
    j1,
    e,
    {
      $N: function (a) {
        this.$U = a;
        this.$F();
      },
      $M: function () {
        return this.$U === 2 && this.$Q;
      },
      $H: function () {
        this.$Q = true;
        this.$F();
      },
      $I: function () {
        this.$Q = false;
        this.$F();
      },
      $L: function () {
        if (ss.isNullOrUndefined(this.$10)) {
          return;
        }
        if (this.$M()) {
          this.$10.$D();
        } else {
          this.$10.$E();
        }
      },
      $F: function () {
        ss.clear(this.$C);
        switch (this.$U) {
          case 2:
            if (this.$Q) {
              if (ss.isNullOrUndefined(this.$X)) {
                this.$K(0);
              } else {
                ss.arrayAddRange(this.$C, this.$X);
              }
            } else {
              this.$C.push(this.$O);
              this.$O.$I(false);
            }
            break;
          case 1:
            this.$C.push(this.$O);
            this.$O.$I(true);
            break;
          case 0:
            break;
        }
        if (!this.$R) {
          jT.$6 = true;
        }
        this.$L();
      },
      $D: function (a, m) {
        if (m.indexOf("|") !== -1) {
          var n = m.split(String.fromCharCode(124));
          var b = ss.Int32.div(n.length, 2);
          for (var c = 0; c < b; c++) {
            var d = n[c];
            var f = n[c + b];
            var g = new jY(d, f, ss.mkdel(this, this.$G));
            a.$w(g);
            if (!ss.referenceEquals(d, f)) {
              this.$Z.push(g);
            }
          }
        } else {
          var h = String.getEnumerator(m);
          try {
            while (h.moveNext()) {
              var i = h.current();
              var j = String.fromCharCode(ss.toLower(i));
              var k = String.fromCharCode(ss.toUpper(i));
              var l = new jY(j, k, ss.mkdel(this, this.$G));
              a.$w(l);
              if (!ss.referenceEquals(j, k)) {
                this.$Z.push(l);
              }
            }
          } finally {
            h.dispose();
          }
        }
      },
      $E: function (a) {
        return Enumerable.from(a).any(function (b) {
          return (
            b.indexOf("|") !== -1 ||
            !ss.referenceEquals(b.toUpperCase(), b.toLowerCase())
          );
        });
      },
      $K: function (a) {
        ss.clear(this.$C);
        ss.clear(this.$Z);
        var m = new jW();
        var n = new jW();
        var b = new jW();
        var c = new jW();
        this.$w(m);
        this.$w(n);
        this.$w(b);
        this.$w(c);
        this.$Y = new jY.$8(1, this.$T, ss.mkdel(this, this.$J));
        this.$Y.$C(this.$S);
        if (this.$R) {
          c.$w(new jY.$7(12, this.$T, this.$V));
        } else {
          c.$w(new jY.$8(5, this.$T, ss.mkdel(this, this.$I)));
        }
        switch (a) {
          case 0:
            this.$D(m, this.$T.get_lettersRow1());
            this.$D(n, this.$T.get_lettersRow2());
            if (
              this.$E([
                this.$T.get_lettersRow1(),
                this.$T.get_lettersRow2(),
                this.$T.get_lettersRow3(),
              ])
            ) {
              b.$w(this.$Y);
            }
            this.$D(b, this.$T.get_lettersRow3());
            b.$w(new jY.$7(10, this.$T, this.$V));
            c.$w(
              new jY.$8(
                3,
                this.$T,
                ss.mkdel(this, function () {
                  this.$K(2);
                })
              )
            );
            break;
          case 2:
            this.$D(m, this.$T.get_numbersRow1());
            this.$D(n, this.$T.get_numbersRow2());
            if (
              this.$E([
                this.$T.get_numbersRow1(),
                this.$T.get_numbersRow2(),
                this.$T.get_numbersRow3(),
              ])
            ) {
              b.$w(this.$Y);
            }
            this.$D(b, this.$T.get_numbersRow3());
            b.$w(new jY.$7(10, this.$T, this.$V));
            c.$w(
              new jY.$8(
                2,
                this.$T,
                ss.mkdel(this, function () {
                  this.$K(1);
                })
              )
            );
            break;
          case 1:
            this.$D(m, this.$T.get_specialRow1());
            this.$D(n, this.$T.get_specialRow2());
            if (
              this.$E([
                this.$T.get_specialRow1(),
                this.$T.get_specialRow2(),
                this.$T.get_specialRow3(),
              ])
            ) {
              b.$w(this.$Y);
            }
            this.$D(b, this.$T.get_specialRow3());
            b.$w(new jY.$7(10, this.$T, this.$V));
            c.$w(
              new jY.$8(
                4,
                this.$T,
                ss.mkdel(this, function () {
                  this.$K(0);
                })
              )
            );
            break;
        }
        c.$w(new jY(" ", " ", ss.mkdel(this, this.$G)));
        c.$w(new jY.$7(11, this.$T, this.$V));
        for (var d = 0; d < this.$Z.length; d++) {
          var f = this.$Z[d];
          f.$x(this.$S);
        }
        var g = (this.$X = [m, n, b]);
        var h = Enumerable.from(g).max(function (o) {
          return o.$B();
        });
        var i = Enumerable.from(g).max(function (o) {
          return o.$F();
        });
        var j = i <= 10 ? i : h;
        for (var k = 0; k < g.length; k++) {
          var l = g[k];
          l.$E(j);
        }
        c.$E(c.$F());
        this.$X = [m, n, b, c];
        jT.$1();
      },
      $1: function (a) {
        if (this.$M()) {
          var b = this.$c().addMargin(this.$q());
          a.$k(new jV(5, 0.4), b.get_topLeft(), b.get_size());
        }
        j7.prototype.$1.call(this, a);
      },
      $0: function (a) {
        if (this.$U === 0) {
          this.$d(null);
          return;
        }
        je.prototype.$0.call(this, a);
        if (this.$M()) {
          var l = (this.$c().get_height() * 0.95) / this.$C.length;
          var m = Math.min(this.$c().get_width(), this.$c().get_height() * 2.5);
          var b = this.$c().get_top();
          var c = this.$c().get_left() + (this.$c().get_width() - m) * 0.5;
          for (var d = 0; d < this.$C.length; d++) {
            var f = this.$C[d];
            var g =
              !this.$R &&
              ss.referenceEquals(f, Enumerable.from(this.$C).last());
            if (g) {
              var h = c;
              var i = m;
              if (h < this.$c().get_left() + ja.$5()) {
                i -= this.$c().get_left() + ja.$5() - h;
                h = this.$c().get_left() + ja.$5();
              }
              if (h + i > this.$c().get_right() - ja.$6()) {
                i = this.$c().get_right() - ja.$6() - h;
              }
              f.$0(
                new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(h, b, i, l)
              );
            } else {
              f.$0(
                new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(c, b, m, l)
              );
            }
            b += l;
          }
        } else {
          var j = Enumerable.from(this.$C).first();
          var k = this.$c().get_center() - ja.$3();
          if (ss.isValue(this.$10) && ss.isValue(this.$10.$H())) {
            k = ss.unbox(this.$10.$H()) - ja.$3() * 2;
            if (k - 16 > ja.$5()) {
              k -= 16;
            }
          }
          j.$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              k,
              this.$c().get_bottom() - ja.$3(),
              ja.$3() * 2,
              ja.$3()
            )
          );
        }
      },
      $G: function (a) {
        this.$W(a);
        if (this.$P) {
          this.$P = false;
          if (this.$S) {
            this.$Y.$C(false);
            this.$S = false;
            for (var b = 0; b < this.$Z.length; b++) {
              var c = this.$Z[b];
              c.$x(this.$S);
            }
          }
        }
      },
      $J: function () {
        this.$S = !this.$S;
        this.$Y.$C(this.$S);
        for (var a = 0; a < this.$Z.length; a++) {
          var b = this.$Z[a];
          b.$x(this.$S);
        }
      },
    },
    j7
  );
  ss.initEnum(j3, e, { $2: 0, $4: 1, $5: 2, $3: 3, $1: 4, $0: 5 });
  ss.initEnum(j5, e, { $0: 0, $2: 1, $1: 2 });
  ss.initClass(
    j9,
    e,
    {
      $D: function () {
        return new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(16, 10);
      },
      $E: function () {
        return this.$3$1;
      },
      $F: function (a) {
        this.$3$1 = a;
      },
      $0: function (a) {
        je.prototype.$0.call(this, a);
        var m = Math.min(
          1,
          new VEL.Skynet.Core.Toolbox.Geometry.Size(
            this.$I,
            this.$K
          ).getInnerFit(a.get_size())
        );
        var n = this.$I * m;
        var b = this.$K * m;
        var c = this.$c().get_left();
        if (this.$H === 1) {
          c += (this.$c().get_width() - n) / 2;
        } else {
          if (this.$H === 2) {
            c += this.$c().get_width() - n;
          }
        }
        var d = this.$c().get_top();
        if (this.$L === 1) {
          d += (this.$c().get_height() - b) / 2;
        } else {
          if (this.$L === 2) {
            d += this.$c().get_height() - b;
          }
        }
        this.$G.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(c, d, n, b)
        );
        this.$F(
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            c + n,
            b + this.$D().get_top()
          )
        );
        n -= this.$D().get_left() + this.$D().get_right();
        c += this.$D().get_left();
        d += this.$D().get_top();
        var f = null;
        var g = Enumerable.from(this.$C).count(function (o) {
          return ss.isInstanceOfType(o, jE);
        });
        var h = 0;
        for (var i = 0; i < this.$C.length; i++) {
          var j = this.$C[i];
          var k = ss.isInstanceOfType(j, jE) && ss.isInstanceOfType(f, jE);
          if (k) {
            d -= f.$c().get_height();
          }
          if (ss.isInstanceOfType(j, kb)) {
            continue;
          }
          if (ss.isInstanceOfType(j, ju)) {
            var l = ss.cast(j, ju);
            j.$0(
              new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
                c,
                d,
                n,
                l.$x() * 1.9 * m
              )
            );
          } else {
            if (ss.isInstanceOfType(j, jQ)) {
              j.$0(
                new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
                  c,
                  d,
                  n,
                  45.6 * m
                )
              );
            } else {
              if (ss.isInstanceOfType(j, jE)) {
                j.$0(
                  new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
                    c + (h * n) / g,
                    d,
                    n / g,
                    80 * m
                  )
                );
                h++;
              } else {
                j.$0(
                  new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
                    c,
                    d,
                    n,
                    2 * m
                  )
                );
                d += 8 * m;
              }
            }
          }
          d += j.$c().get_height();
          f = j;
        }
      },
    },
    j7
  );
  ss.initClass(
    kb,
    e,
    {
      $1: function (a) {
        a.$o(jV.$d, 0.95, this.$c());
        a.$f(jV.$c, this.$c(), 2);
      },
      $n: function () {
        return true;
      },
    },
    je
  );
  ss.initClass(
    kd,
    e,
    {
      $1: function (a) {
        var b = this.$w ? jV.$d : new e6(jV.$c.toString());
        a.$j(b, 0.95, this.$c());
      },
    },
    je
  );
  ss.initClass(
    kf,
    e,
    {
      $F: function () {
        if (id.hasMusic()) {
          var a = this.$J.getAudioSetting(0);
          this.$K.$A(a ? 7 : 6);
          this.$K.$z(a ? this.$G : this.$H);
        } else {
          this.$K.$A(8);
        }
        var b = this.$J.getAudioSetting(1);
        this.$M.$A(b ? 7 : 6);
        this.$M.$z(b ? this.$G : this.$H);
      },
      $0: function (a) {
        je.prototype.$0.call(this, a);
        var l = new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(16, 10);
        var m = Math.min(320, a.get_width());
        var b = m - l.get_left() - l.get_right();
        var c = ja.$3() + ja.$2();
        var d = c * 2 + l.get_top() + l.get_bottom();
        var f = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          this.$c().get_right() - m,
          this.$c().get_bottom() - d - ja.$3() - ja.$2(),
          m,
          d
        );
        var g = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          f.get_left() + l.get_left(),
          f.get_top() + l.get_top(),
          b,
          c
        );
        var h = g.translate(
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0, c)
        );
        var i = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          hK.$1() ? g.get_left() : g.get_right() - ja.$3(),
          g.get_bottom() - ja.$3() - ja.$2() * 0.5,
          ja.$3(),
          ja.$3()
        );
        var j = i.translate(
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0, c)
        );
        var k = new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor4(
          0,
          0,
          ja.$3() + ja.$2(),
          0
        );
        if (hK.$1()) {
          k = k.flip();
        }
        this.$L.$y(k);
        this.$N.$y(k);
        this.$I.$0(f);
        this.$L.$0(g);
        this.$K.$0(i);
        this.$N.$0(h);
        this.$M.$0(j);
      },
      $E: function () {
        var a = !this.$J.getAudioSetting(1);
        this.$J.setAudioSetting(1, a);
        this.$F();
        if (ServerHelper.get_isLoggedIn()) {
          VEL.Skynet.Global.Helpers.EventsHelper.addSoundEvent(
            229,
            a,
            ServerModel.themeId,
            ServerModel.templateId
          );
        }
      },
      $D: function () {
        var a = !this.$J.getAudioSetting(0);
        this.$J.setAudioSetting(0, a);
        this.$F();
        if (ServerHelper.get_isLoggedIn()) {
          VEL.Skynet.Global.Helpers.EventsHelper.addSoundEvent(
            228,
            a,
            ServerModel.themeId,
            ServerModel.templateId
          );
        }
      },
    },
    j7
  );
  ss.initClass(
    kh,
    e,
    {
      $H: function () {
        return Enumerable.from(this.$C).any(function (a) {
          return ss.isInstanceOfType(a, ji) && ss.cast(a, ji).$w();
        });
      },
      $E: function (a) {},
      $G: function () {
        this.$L.$A(this.$K.getSoundIconState());
      },
      $D: function () {
        this.$F(true);
      },
      $F: function (a) {
        if (a || this.$x(this.$M)) {
          this.$A(this.$M);
          this.$A(this.$N);
        } else {
          this.$w(this.$M);
          this.$M.$F();
          this.$z(this.$N);
        }
        jT.$0(this);
      },
      $I: function () {
        return true;
      },
      $0: function (a) {
        je.prototype.$0.call(this, a);
        if (ss.isValue(this.$O)) {
          this.$O.$0(a);
        }
        if (ss.isValue(this.$M)) {
          this.$M.$0(this.$c());
        }
        if (ss.isValue(this.$N)) {
          this.$N.$0(a);
        }
        var b = 0;
        var c = ja.$3() + ja.$2() * 2;
        if (ss.isValue(this.$J)) {
          b += c;
          this.$J.$r(
            new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(
              ja.$2(),
              ja.$2()
            )
          );
          this.$J.$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              a.get_right() - c,
              a.get_bottom() - c,
              c,
              c
            )
          );
        }
        if (ss.isValue(this.$L)) {
          this.$L.$r(
            new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(
              ja.$2(),
              ja.$2()
            )
          );
          this.$L.$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              a.get_right() - c - b,
              a.get_bottom() - c,
              c,
              c
            )
          );
        }
      },
    },
    j7
  );
  ss.initClass(
    kj,
    e,
    {
      $I: function () {
        return false;
      },
      $0: function (a) {
        kh.prototype.$0.call(this, a);
        var c = this.$c().get_minDimension() / 4;
        if (hK.$b.width < 320 && hK.$b.height < 320) {
          this.$J.$0(VEL.Skynet.Core.Toolbox.Geometry.Rect.get_hidden());
          this.$L.$0(VEL.Skynet.Core.Toolbox.Geometry.Rect.get_hidden());
          c = a.get_minDimension() / 2;
        }
        var d = this.$c().get_left() + (this.$c().get_width() - c) / 2;
        var b = this.$c().get_top() + (this.$c().get_height() - c) / 2;
        this.$P.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(d, b, c, c)
        );
      },
    },
    kh
  );
  ss.initClass(
    kl,
    e,
    {
      $I: function () {
        return false;
      },
      $0: function (a) {
        kh.prototype.$0.call(this, a);
        var b = this.$c().get_minDimension() / 4;
        this.$P.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_left() + (this.$c().get_width() - b) / 2,
            this.$c().get_top() + (this.$c().get_height() - b) / 2,
            b,
            b
          )
        );
      },
    },
    kh
  );
  ss.initClass(
    kn,
    e,
    {
      $P: function (a) {
        this.$U.$w(a);
      },
      $0: function (a) {
        kh.prototype.$0.call(this, a);
        var f = Math.min(1, kn.$0.getInnerFit(this.$c().get_size()));
        var g = 5 * f;
        var b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(kn.$0, f);
        var c = this.$c().get_left() + (this.$c().get_width() - b.width) / 2;
        var d = this.$c().get_top() + (this.$c().get_height() - b.height) / 2;
        this.$Q.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            c,
            d,
            b.width,
            b.height
          )
        );
        b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction(
          b,
          new VEL.Skynet.Core.Toolbox.Geometry.Margin(g)
        );
        c += g;
        d += g;
        this.$V.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            c,
            d,
            b.width,
            b.height / 10
          )
        );
        d += this.$V.$c().get_height();
        this.$T.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            c,
            d,
            b.width,
            3 * f
          )
        );
        d += this.$T.$c().get_height();
        this.$S.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            c,
            d,
            b.width,
            b.height / 8
          )
        );
        d += this.$S.$c().get_height();
        this.$U.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            c + g,
            d,
            b.width - g * 2,
            b.height / 8
          )
        );
        d += this.$U.$c().get_height();
        this.$R.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            c,
            d,
            b.width,
            b.height -
              this.$V.$c().get_height() -
              this.$T.$c().get_height() -
              this.$S.$c().get_height() -
              this.$U.$c().get_height()
          )
        );
      },
    },
    kh
  );
  ss.initClass(
    kp,
    e,
    {
      $T: function () {
        return this.$W.$B();
      },
      $U: function (a) {
        this.$W.$C(a);
      },
      $R: function () {
        return this.$V.$B();
      },
      $S: function (a) {
        this.$V.$C(a);
      },
      $0: function (a) {
        kh.prototype.$0.call(this, a);
        var b = hK.$b.width < 320 && hK.$b.height < 320;
        if (b) {
          this.$Q(a);
        } else {
          this.$P(a);
        }
      },
      $P: function (a) {
        var h = a.get_minDimension() / 80;
        this.$W.$r(
          new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(0, 4 * h)
        );
        this.$Y.$r(
          new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor4(h, 2 * h, h, 0)
        );
        this.$V.$r(
          new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor4(h, 0, h, 2 * h)
        );
        var i = ja.$3();
        var b = this.$c().get_minDimension() / 4;
        this.$X.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_left() + (this.$c().get_width() - b) / 2,
            this.$c().get_top() + (this.$c().get_height() - b) / 2,
            b,
            b
          )
        );
        var c = (this.$c().get_height() - b) / 2.4;
        var d = this.$c().get_left() + 0.5 * i;
        var f = this.$c().get_width() - i;
        if (hK.$3()) {
          c -= i;
          var g = c * 0.25;
          this.$Y.$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              d,
              this.$c().get_top() + i,
              f,
              c * 0.25
            )
          );
          this.$W.$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              d,
              this.$c().get_top() + i + g,
              f,
              c * 0.75
            )
          );
          this.$V.$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              d,
              this.$c().get_bottom() - c - i,
              f,
              c
            )
          );
        } else {
          d += ja.$4();
          f -= ja.$4() + ja.$6();
          this.$Y.$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              d,
              this.$c().get_top(),
              f,
              c * 0.35
            )
          );
          this.$W.$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              d,
              this.$c().get_top() + c * 0.2,
              f,
              c
            )
          );
          this.$V.$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              d,
              this.$c().get_bottom() - c,
              f,
              c
            )
          );
        }
      },
      $Q: function (a) {
        var b = VEL.Skynet.Core.Toolbox.Geometry.Rect.get_hidden();
        this.$J.$0(b);
        this.$L.$0(b);
        this.$W.$0(b);
        this.$Y.$0(b);
        this.$V.$0(b);
        var c = a.get_minDimension() / 1.5;
        this.$X.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_left() + (this.$c().get_width() - c) / 2,
            this.$c().get_top() + (this.$c().get_height() - c) / 2,
            c,
            c
          )
        );
      },
    },
    kh
  );
  ss.initClass(
    kr,
    e,
    {
      $0: function (a) {
        kh.prototype.$0.call(this, a);
        this.$P.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_left(),
            this.$c().get_top() + ja.$a(),
            this.$c().get_width(),
            this.$c().get_height() - ja.$a() - ja.$3()
          )
        );
      },
    },
    kh
  );
  ss.initClass(
    kt,
    e,
    {
      $W: function () {
        var a = Math.max(this.$c().get_minDimension() / 500, 1);
        var b = Math.min(this.$10.get_length() / 160, 1);
        b = Math.pow(b, 1);
        return 150000 * a * b;
      },
      $0: function (a) {
        kh.prototype.$0.call(this, a);
        var b = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          this.$c().get_left(),
          this.$c().get_top(),
          this.$c().get_width() - ja.$6(),
          this.$c().get_height()
        );
        this.$11.$0(b);
        if (ss.isValue(this.$X)) {
          var c = this.$S();
          this.$U(c);
        }
      },
      $S: function () {
        var a = this.$Q();
        if (this.$P(a)) {
          return a;
        }
        var b = this.$R();
        if (this.$P(b)) {
          return b;
        }
        if (a.get_area() >= this.$W()) {
          return a;
        }
        var c = a.get_area() >= b.get_area();
        return c ? a : b;
      },
      $Q: function () {
        var a = this.$11.$E().y + 20;
        return new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          this.$c().get_left(),
          this.$c().get_top(),
          this.$c().get_width(),
          this.$c().get_height() - a
        );
      },
      $R: function () {
        var a = this.$11.$E().x + 20;
        return new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          a,
          this.$c().get_top(),
          this.$c().get_width() - a,
          this.$c().get_height() - this.$J.$c().get_height()
        );
      },
      $P: function (a) {
        var b = this.$T(a);
        var c = b > 60;
        return c;
      },
      $T: function (a) {
        var b = this.$W() / a.get_width();
        var c = a.get_height();
        return c - b;
      },
      $U: function (a) {
        var g = {};
        a = this.$V(a, g);
        var h = this.$c().get_minDimension() / 80;
        var b = this.$X;
        var c = this.$Z;
        var d = new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(h, 0);
        c.$r(d);
        b.$r(d);
        this.$Z.$0(
          a.translate(new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(1, 2))
        );
        this.$X.$0(a);
        var f = g.$
          ? new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              a.get_left(),
              a.get_top() - 60,
              a.get_width(),
              80
            )
          : VEL.Skynet.Core.Toolbox.Geometry.Rect.get_hidden();
        this.$Y.$0(f);
      },
      $V: function (a, k) {
        var l = a.get_width();
        var b = Math.max(80, this.$W() / l);
        var c = a.get_height();
        var d = c - b;
        var f = Math.max(80, Math.min(c, b));
        var g = 0;
        if (f === 80) {
          var h = l;
          var i = Math.max(320, this.$W() / f);
          l = Math.min(i, h);
          g = (h - l) / 2;
        }
        k.$ = d > 60;
        var j = k.$ ? (d - 60) / 2 + 60 : Math.max(0, d / 2);
        return new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          a.get_left() + g,
          a.get_top() + j,
          l,
          f
        );
      },
    },
    kh
  );
  ss.initClass(
    kv,
    e,
    {
      $E: function (a) {
        this.$1y.$K(a);
      },
      $Y: function (a) {
        this.$1p.$L(a);
      },
      $10: function (a) {
        this.$1w.$K(a);
      },
      $11: function (a, b) {
        this.$1l.$D(a, b);
      },
      $Z: function (a) {
        this.$1v.$w(a);
      },
      $1f: function (a) {
        this.$1x.$w(a);
      },
      $1a: function (a, b, c) {
        this.$1A.$F(a, b, c);
      },
      $18: function () {
        this.$1t.$E();
      },
      $W: function () {
        this.$1t.$D();
      },
      $1e: function (a) {
        this.$1t.$F(a);
      },
      $19: function (a, d, f, b, c) {
        this.$1u.$D();
        this.$1u.$F(a, d, f, b, c);
      },
      $1d: function (a) {
        this.$1u.$E(a);
      },
      $V: function () {
        this.$1u.$D();
      },
      $1b: function (a, b) {
        this.$1B.$K(a, b);
      },
      $1c: function (a, b) {
        this.$14();
        this.$1C.$w(a, b);
      },
      $14: function () {
        this.$U();
        if (this.$1D !== 0) {
          this.$1D = 0;
          jT.$0(this.$1C);
          this.$S();
        }
      },
      $17: function (a, b) {
        this.$13();
        this.$1r.$w(a, b);
      },
      $13: function () {
        this.$U();
        if (this.$1s !== 0) {
          this.$1s = 0;
          jT.$0(this.$1r);
          this.$R();
        }
      },
      $X: function (a, b, c) {
        this.$P(
          a,
          b,
          c,
          0,
          1,
          ss.mkdel(this, function (d) {
            this.$1s = d;
            this.$R();
          }),
          this.$1r
        );
      },
      $15: function (a, b) {
        this.$12();
        this.$1j.$w(a, b);
      },
      $12: function () {
        this.$U();
        if (this.$1k !== 0) {
          this.$1k = 0;
          jT.$0(this.$1j);
          this.$Q();
        }
      },
      $U: function () {
        if (ss.isValue(this.$1z)) {
          this.$1z.stop();
          this.$1z = null;
        }
      },
      $T: function (a, d, f, b, c) {
        if (this.$1k !== 0) {
          this.$1k = 0;
          jT.$0(this.$1j);
          this.$Q();
        }
        this.$1j.$w(a, d);
        this.$P(
          f,
          b,
          c,
          1,
          0,
          ss.mkdel(this, function (g) {
            this.$1k = g;
            this.$Q();
          }),
          this.$1j
        );
      },
      $P: function (a, g, h, b, c, d, f) {
        this.$U();
        this.$1z =
          VEL.Skynet.Core.Toolbox.Threading.ThreadManager.animateAmount(
            a,
            b,
            c,
            h,
            function (i) {
              jT.$0(f);
              d(i);
              jT.$0(f);
            },
            g
          );
      },
      $16: function (a, b) {
        if (ss.isNullOrUndefined(this.$1o)) {
          this.$w(
            (this.$1o = new j1(
              0,
              a,
              false,
              ss.mkdel(this.$1m, this.$1m.onKeyboardText),
              ss.mkdel(this.$1m, this.$1m.onKeyboardControlDown),
              this.$q(),
              b,
              this.$1A
            ))
          );
        } else {
          this.$1o.$N(a);
        }
        jT.$1();
      },
      $1i: function () {
        if (
          ss.isNullOrUndefined(this.$1o) ||
          ss.isNullOrUndefined(this.$1o.$c())
        ) {
          return 0;
        }
        return this.$1o.$c().get_height();
      },
      $1g: function () {
        if (ss.isNullOrUndefined(this.$1o)) {
          return false;
        }
        return this.$1o.$M();
      },
      $1h: function () {
        if (ss.isNullOrUndefined(this.$1B) || ss.isNullOrUndefined(this.$1A)) {
          return false;
        }
        return (
          (this.$1A.$G() || ss.isValue(this.$1o)) &&
          this.$1u.$G() &&
          this.$1B.$L()
        );
      },
      $0: function (a) {
        kh.prototype.$0.call(this, a);
        this.$1x.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_right() - 17,
            this.$c().get_top() + ja.$a(),
            17,
            this.$c().get_height() - ja.$a() - ja.$3() - this.$q().get_bottom()
          )
        );
        this.$1n.$0(a);
        var m = ja.$3() + ja.$2() * 2;
        this.$1q.$r(
          new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(ja.$2(), ja.$2())
        );
        this.$1q.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            a.get_left(),
            a.get_bottom() - m,
            m,
            m
          )
        );
        var n = this.$1v.$x() ? this.$c().get_width() / 8 : 0;
        var b = this.$1w.$w();
        var c = this.$1p.$w();
        var d = Math.max(n, this.$1y.$w());
        var f = Math.max(n, c + b);
        this.$1p.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_right() - b - c,
            this.$c().get_top(),
            c,
            ja.$a()
          )
        );
        this.$1w.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_right() - b,
            this.$c().get_top(),
            b,
            ja.$a()
          )
        );
        this.$1y.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_left(),
            this.$c().get_top(),
            d,
            ja.$a()
          )
        );
        var g = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          this.$c().get_left() + d,
          this.$c().get_top(),
          this.$c().get_width() - d - f,
          ja.$a()
        );
        var h = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          this.$c().get_left() + ja.$4(),
          a.get_bottom() - ja.$3() - ja.$2(),
          this.$c().get_width() - (ja.$4() + ja.$6()),
          ja.$3()
        );
        var i = this.$1A.$G() || ss.isValue(this.$1o);
        this.$1l.$0(h);
        if (this.$1v.$x()) {
          this.$1u.$0(i ? null : h);
        } else {
          this.$1u.$0(i ? g : h);
        }
        this.$1A.$0(h);
        if (ss.isValue(this.$1o)) {
          var j = a.get_width() < a.get_height();
          var k = j
            ? Math.max(5 * ja.$3() + 20, this.$c().get_height() * 0.3)
            : this.$c().get_height() * 0.5;
          var l = Math.min(7 * ja.$3() + 20, this.$c().get_height() * 0.5);
          k = Math.min(k, l);
          this.$1o.$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              0,
              a.get_bottom() - k,
              a.get_width(),
              k
            )
          );
        }
        this.$1v.$0(this.$1B.$L() ? null : g);
        this.$S();
        this.$R();
        this.$Q();
        this.$1B.$0(
          this.$1h()
            ? new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
                g.get_left(),
                g.get_top() + ja.$a(),
                g.get_width(),
                g.get_height()
              )
            : g
        );
        this.$1t.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            h.get_left() - 55,
            h.get_top() - 205,
            165,
            114
          )
        );
      },
      $S: function () {
        this.$1C.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_left(),
            this.$c().get_top() + 45 + this.$1D,
            this.$c().get_width(),
            VEL.Skynet.Global.Helpers.DeviceHelper.isPortraitPhoneSized()
              ? 2 * ja.$8()
              : ja.$8()
          )
        );
      },
      $Q: function () {
        this.$1j.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_left() + ja.$4(),
            this.$c().get_bottom() - ja.$8() + this.$1k * ja.$8(),
            this.$c().get_width() - (ja.$4() + ja.$6()),
            ja.$8()
          )
        );
      },
      $R: function () {
        this.$1r.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            0,
            2 * ja.$a() + this.$1s * this.$c().get_height(),
            this.$c().get_width() +
              this.$q().get_left() +
              this.$q().get_right(),
            this.$c().get_height() - 2 * ja.$a() - ja.$8()
          )
        );
      },
    },
    kh
  );
  ss.initClass(
    kx,
    e,
    {
      $E: function (a) {
        this.$Q.value = new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(
          VEL.Skynet.Core.Toolbox.Extensions.IntExtensions.toReadableSeconds(
            a,
            false
          ),
          1
        );
      },
      $0: function (a) {
        kh.prototype.$0.call(this, a);
        this.$P.$0(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            this.$c().get_left(),
            this.$c().get_top() + ja.$a(),
            this.$c().get_width(),
            this.$c().get_height() - ja.$a() - ja.$3()
          )
        );
      },
    },
    kh
  );
  ss.initClass(
    kB,
    e,
    {
      $w: function (a, b) {
        this.$y = a;
        this.$x = b;
        this.$r(new VEL.Skynet.Core.Toolbox.Geometry.Margin.$ctor3(12, 0));
        jT.$0(this);
      },
      $1: function (a) {
        var h = ss.isValue(this.$y) && !this.$y.get_isEmpty();
        if (ss.isNullOrUndefined(this.$x) && !h) {
          return;
        }
        a.$o(e2.$0, 0.5, this.$c());
        var i = this.$c().removeMargin(12);
        if (h && ss.isValue(this.$x)) {
          var b = Math.min(i.get_width() / 2, (4 * i.get_height()) / 3);
          if (hK.$1()) {
            var c = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              i.get_right() - b,
              i.get_top(),
              b,
              i.get_height()
            );
            var d = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              i.get_left(),
              i.get_top(),
              i.get_width() - b - 12,
              i.get_height()
            );
            a.$a(this.$x, c, 0, 1);
            a.$h(this.$y, jV.$m, d, 80, 2, 1, false);
          } else {
            var f = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              i.get_left(),
              i.get_top(),
              b,
              i.get_height()
            );
            var g = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              i.get_left() + b + 12,
              i.get_top(),
              i.get_width() - b - 12,
              i.get_height()
            );
            a.$a(this.$x, f, 2, 1);
            a.$h(this.$y, jV.$m, g, 80, 0, 1, false);
          }
        } else {
          if (ss.isValue(this.$x)) {
            a.$a(this.$x, i, 1, 1);
          } else {
            if (h) {
              a.$h(this.$y, jV.$m, i, 80, 1, 1, false);
            }
          }
        }
      },
    },
    je
  );
  ss.initClass(
    kD,
    e,
    {
      $w: function (a) {
        if (ss.isValue(a)) {
          a = Math.min(1, Math.max(0, ss.unbox(a)));
        }
        if (ss.referenceEquals(a, this.$A)) {
          return;
        }
        this.$A = a;
        jT.$0(this);
      },
      $x: function () {
        return ss.isValue(this.$A);
      },
      $1: function (a) {
        if (ss.isValue(this.$A)) {
          a.$k(this.$y, this.$c().get_topLeft(), this.$c().get_size());
          a.$k(
            this.$z,
            this.$c().get_topLeft(),
            new VEL.Skynet.Core.Toolbox.Geometry.Size(
              this.$c().get_width() * ss.unbox(this.$A),
              this.$c().get_height()
            )
          );
        }
      },
    },
    je
  );
  ss.initClass(
    kF,
    e,
    {
      $1: function (a) {
        a.$9(
          this.$c().get_topLeft(),
          new VEL.Skynet.Core.Toolbox.Geometry.Size(
            this.$c().get_width(),
            50
          ),
          true,
          this.$w
        );
        a.$9(
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            this.$c().get_left(),
            this.$c().get_bottom() - 70
          ),
          new VEL.Skynet.Core.Toolbox.Geometry.Size(
            this.$c().get_width(),
            70
          ),
          false,
          this.$w
        );
      },
    },
    je
  );
  ss.initClass(
    kH,
    e,
    {
      $L: function (a) {
        if (this.$M > 0 && a === 0) {
          this.$A(true);
          VEL.Skynet.Core.Toolbox.Threading.ThreadManager.setTimeout(
            null,
            2000,
            ss.mkdel(this, function () {
              this.$C(VEL.Skynet.Core.DataStructures.WordwallXml.get_empty());
            }),
            true,
            true
          );
          return;
        }
        this.$M = a;
        this.$C(this.$K(a));
      },
      $0: function (a) {
        if (this.$M === 0) {
          this.$d(null);
          return;
        }
        var b = this.$K(this.$M);
        if (!ss.referenceEquals(b, this.$B())) {
          this.$C(b);
        }
        je.prototype.$0.call(this, a);
      },
      $K: function (a) {
        if (ss.isNullOrUndefined(this.$c())) {
          return null;
        }
        var c = "";
        var d = VEL.Skynet.Global.Helpers.DeviceHelper.isPortraitPhoneSized();
        if (a > 5 || d) {
          c = hK.$1() ? a + " ❤" : "❤ " + a;
        } else {
          for (var b = 0; b < a; b++) {
            c += "❤";
          }
        }
        return new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(c, 1);
      },
    },
    ju
  );
  ss.initClass(
    kJ,
    e,
    {
      $K: function (a) {
        if (ss.Nullable$1.gt(this.$L, 0) && a === 0) {
          this.$A(true);
        } else {
          if (a > 0) {
            this.$A(false);
          }
        }
        this.$L = a;
        this.$C(
          new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(
            VEL.Skynet.Core.Toolbox.Extensions.IntExtensions.toReadableSeconds(
              a,
              false
            ),
            1
          )
        );
      },
    },
    ju
  );
  ss.initClass(
    kL,
    e,
    {
      $D: function () {
        this.$K = true;
        this.$F(this.$M, this.$J, this.$L);
      },
      $E: function () {
        this.$K = false;
        this.$F(this.$M, this.$J, this.$L);
      },
      $F: function (a, d, f) {
        ss.clear(this.$C);
        this.$M = a;
        this.$J = d;
        this.$L = f;
        if (ss.isValue(d) && !this.$K) {
          var b = ss.getEnumerator(d);
          try {
            while (b.moveNext()) {
              var c = b.current();
              this.$w(new jO(a, c, f));
            }
          } finally {
            b.dispose();
          }
        }
        jT.$0(this);
      },
      $G: function () {
        return (
          ss.isValue(this.$J) &&
          Enumerable.from(this.$J).any(function (a) {
            return a.get_isVisible();
          })
        );
      },
      $H: function () {
        return this.$3$1;
      },
      $I: function (a) {
        this.$3$1 = a;
      },
      $0: function (a) {
        je.prototype.$0.call(this, a);
        if (this.$C.length === 0) {
          this.$I(null);
          return;
        }
        var n =
          Math.max(
            200,
            Enumerable.from(this.$C)
              .select(function (p) {
                return ss.cast(p, jO);
              })
              .max(function (p) {
                return p.$y();
              })
          ) * this.$B();
        if (n < this.$c().get_width()) {
          var o = n / this.$B();
          var b = this.$c().get_left() + (this.$c().get_width() - n) / 2;
          this.$I(b);
          var c = Enumerable.from(this.$C)
            .select(function (p) {
              return ss.cast(p, jO);
            })
            .getEnumerator();
          try {
            while (c.moveNext()) {
              var d = c.current();
              d.$0(
                new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
                  b,
                  this.$c().get_top(),
                  o,
                  this.$c().get_height()
                )
              );
              b += o;
            }
          } finally {
            c.dispose();
          }
          return;
        }
        n = Enumerable.from(this.$C)
          .select(function (p) {
            return ss.cast(p, jO);
          })
          .sum(function (p) {
            return p.$y();
          });
        if (n < this.$c().get_width()) {
          var f = this.$c().get_left() + (this.$c().get_width() - n) / 2;
          this.$I(f);
          var g = Enumerable.from(this.$C)
            .select(function (p) {
              return ss.cast(p, jO);
            })
            .getEnumerator();
          try {
            while (g.moveNext()) {
              var h = g.current();
              h.$0(
                new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
                  f,
                  this.$c().get_top(),
                  h.$y(),
                  this.$c().get_height()
                )
              );
              f += h.$y();
            }
          } finally {
            g.dispose();
          }
        } else {
          var i = this.$c().get_left();
          this.$I(i);
          var j = this.$c().get_width() / n;
          var k = Enumerable.from(this.$C)
            .select(function (p) {
              return ss.cast(p, jO);
            })
            .getEnumerator();
          try {
            while (k.moveNext()) {
              var l = k.current();
              var m = j * l.$y();
              l.$0(
                new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
                  i,
                  this.$c().get_top(),
                  m,
                  this.$c().get_height()
                )
              );
              i += m;
            }
          } finally {
            k.dispose();
          }
        }
      },
    },
    j7
  );
  ss.initClass(
    kN,
    e,
    {
      $L: function () {
        return !ss.isNullOrEmptyString(this.$O);
      },
      $K: function (a, b) {
        if (ss.isValue(a)) {
          a = VEL.Skynet.Global.Extensions.StringExtensions.toPascal(a);
        }
        if (ss.isValue(a) && a.indexOf("|") !== -1) {
          this.$Q = a.split(String.fromCharCode(124));
          a = this.$Q[0];
        } else {
          this.$Q = null;
        }
        this.$P = b;
        this.$O = a;
        this.$C(new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(a, 1));
        this.$M = 0;
        this.$y(false);
      },
      $5: function () {
        if (ss.isNullOrEmptyString(this.$O) || this.$P === 2) {
          return;
        }
        this.$M++;
        if (this.$P === 1) {
          this.$y(this.$M % 2 === 0);
          if (ss.isValue(this.$Q) && this.$M % 14 === 13) {
            this.$N = (this.$N + 1) % this.$Q.length;
            this.$O = this.$Q[this.$N];
          }
        } else {
          if (this.$M === 13) {
            this.$C(null);
          }
        }
      },
    },
    ju
  );
  ss.initClass(
    kP,
    e,
    {
      $G: function () {
        return this.$3$1;
      },
      $H: function (a) {
        this.$3$1 = a;
      },
      $F: function (a, f, g, b, c) {
        if (f <= 0) {
          ss.clear(this.$C);
          this.$H(false);
          return;
        }
        if (!this.$G()) {
          if (g) {
            this.$w(
              (this.$I = new jK(
                hK.$1() ? 2 : 1,
                ss.mkdel(this.$J, this.$J.onPageBack)
              ))
            );
            this.$w(
              (this.$K = new jK(
                hK.$1() ? 1 : 2,
                ss.mkdel(this.$J, this.$J.onPageNext)
              ))
            );
          }
          this.$w((this.$L = new ju("", ja.$1(), jV.$9, 1, 1, null, null)));
          this.$H(true);
        }
        var d = ss.isValue(c)
          ? c[a]
          : ss.formatString(Strings.menu_Page, a + 1, f);
        this.$L.$C(
          new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(d, 1)
        );
        if (ss.isValue(this.$I)) {
          this.$I.$I(a === 0);
        }
        if (ss.isValue(this.$K)) {
          this.$K.$I(!b && a === f - 1);
        }
      },
      $E: function (a) {
        if (ss.isValue(this.$K)) {
          this.$K.$B(a);
        } else {
          a();
        }
      },
      $D: function () {
        if (ss.isValue(this.$K)) {
          this.$K.$w();
        }
      },
      $0: function (a) {
        je.prototype.$0.call(this, a);
        if (!this.$G() || ss.isNullOrUndefined(a)) {
          return;
        }
        var g = this.$L.$w() + 16;
        if (ss.isValue(this.$K)) {
          var h = g + ja.$3() * 2;
          if (h > this.$c().get_width()) {
            g = Math.max(0, this.$c().get_width() - ja.$3() * 2);
            h = g + ja.$3() * 2;
          }
          var b = this.$c().get_left() + (this.$c().get_width() - h) / 2;
          this.$L.$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              b + ja.$3(),
              this.$c().get_top(),
              g,
              this.$c().get_height()
            )
          );
          var c = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            b,
            this.$c().get_top(),
            ja.$3(),
            this.$c().get_height()
          );
          var d = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            b + g + ja.$3(),
            this.$c().get_top(),
            ja.$3(),
            this.$c().get_height()
          );
          this.$I.$0(hK.$1() ? d : c);
          this.$K.$0(hK.$1() ? c : d);
        } else {
          g = Math.min(g, this.$c().get_width());
          var f = this.$c().get_left() + (this.$c().get_width() - g) / 2;
          this.$L.$0(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              f,
              this.$c().get_top(),
              g,
              this.$c().get_height()
            )
          );
        }
      },
    },
    j7
  );
  ss.initClass(
    j2,
    e,
    {
      get_$isInvalidated: function () {
        return Enumerable.from(this.$9).any(function (a) {
          return a.get_$isInvalidated();
        });
      },
      $render: function (a, d) {
        if (ss.isValue(this.$7) && ss.isValue(this.$7.$b())) {
          var f = this.$7.$b();
          if (d === 1) {
            var b = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                f.get_actualWidth(),
                f.get_actualHeight()
              ),
              -0.5
            );
            this.$8 = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Division(
              VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
                b,
                VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply(this.$8, 9)
              ),
              10
            );
            var c = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
              this.$7.$k(),
              this.$8
            );
            f.$Y(c);
            this.$4();
          }
          f.$render(a, d);
        }
      },
      $6: function (a) {
        this.$7 = a;
        var b = a.$b();
        if (ss.isValue(b)) {
          this.$8 = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Subtraction(
            b.$1d(),
            a.$n()
          );
        }
      },
      $5: function (a) {
        var b = ss.safeCast(a.$b(), ky);
        if (ss.isValue(b)) {
          b.$Y(
            VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
              this.$8,
              this.$7.$k()
            )
          );
          var c = this.$2(b);
          this.$a
            .get_game()
            .onDragDrop(b.$1E(), b.get_actualWidth(), b.get_actualHeight(), c);
        } else {
          this.$a.get_game().onDragDrop(null, 0, 0, null);
        }
        if (ss.referenceEquals(this.$7, a)) {
          this.$7 = null;
          this.$8 = VEL.Skynet.Core.Toolbox.Geometry.Point.empty;
        }
      },
      $4: function () {
        var a = ss.safeCast(this.$7.$b(), ky);
        if (ss.isValue(a)) {
          var b = this.$2(a);
          this.$a
            .get_game()
            .onDragMove(a.$1E(), a.get_actualWidth(), a.get_actualHeight(), b);
        }
      },
      $2: function (a) {
        if (this.$a.get_game().useFullAreaDragAndDrop()) {
          return this.$3(a);
        } else {
          return this.$1(a);
        }
      },
      $1: function (a) {
        var k = a.get_actualBounds().get_middleCenter();
        var l = [];
        for (var b = this.$9.length - 1; b >= 0; b--) {
          var c = this.$9[b];
          if (!ss.referenceEquals(c, this.$7.$b())) {
            var d = c.get_actualBounds();
            if (c.$X(k, false)) {
              var f = k.x - d.get_left();
              var g = k.y - d.get_top();
              var h = f / d.get_width();
              var i = g / d.get_height();
              var j = new VEL.Skynet.Core.Behaviours.Input.Drag.DragTarget();
              j.set_object(c.get_data());
              j.set_width(c.get_actualWidth());
              j.set_height(c.get_actualHeight());
              j.set_x(h * c.get_size().width);
              j.set_y(i * c.get_size().height);
              j.set_relativeX(h);
              j.set_relativeY(i);
              l.push(j);
            }
          }
        }
        return l;
      },
      $3: function (a) {
        var m = a.get_actualBounds().get_middleCenter();
        var n = new (ss.makeGenericType(ss.Dictionary$2, [
          VEL.Skynet.Core.Behaviours.Input.Drag.DragTarget,
          Number,
        ]))();
        for (var b = this.$9.length - 1; b >= 0; b--) {
          var c = this.$9[b];
          if (!ss.referenceEquals(c, this.$7.$b())) {
            var d = c.get_actualBounds();
            var f = c.$W(a);
            if (f > 0) {
              var g = m.x - d.get_left();
              var h = m.y - d.get_top();
              var i = g / d.get_width();
              var j = h / d.get_height();
              var k = new VEL.Skynet.Core.Behaviours.Input.Drag.DragTarget();
              k.set_object(c.get_data());
              k.set_width(c.get_actualWidth());
              k.set_height(c.get_actualHeight());
              k.set_x(i * c.get_size().width);
              k.set_y(j * c.get_size().height);
              k.set_relativeX(i);
              k.set_relativeY(j);
              k.set_distance(this.$0(m, d.get_middleCenter()));
              n.add(k, f);
            }
          }
        }
        var l = [];
        if (Enumerable.from(n).any()) {
          l = Enumerable.from(n)
            .orderByDescending(function (o) {
              return o.value;
            })
            .thenBy(function (o) {
              return o.key.get_distance();
            })
            .select(function (o) {
              return o.key;
            })
            .toArray();
        }
        return l;
      },
      $0: function (a, b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
      },
      dispose: function () {
        for (var a = 0; a < this.$9.length; a++) {
          var b = this.$9[a];
          b.dispose();
        }
      },
    },
    null,
    [ss.IDisposable, jt]
  );
  ss.initClass(
    j4,
    e,
    {
      $t: function () {
        return this.$1$1;
      },
      $u: function (a) {
        this.$1$1 = a;
      },
      $A: function () {
        return this.$1$2;
      },
      $B: function (a) {
        this.$1$2 = a;
      },
      $y: function () {
        return this.$1$3;
      },
      $z: function (a) {
        this.$1$3 = a;
      },
      $v: function () {
        return this.$1$4;
      },
      $w: function (a) {
        this.$1$4 = a;
      },
      get_$isInvalidated: function () {
        return Enumerable.from(this.$y()).any(function (a) {
          return a.get_$isInvalidated();
        });
      },
      $r: function () {
        return this.$1$5;
      },
      $s: function (a) {
        this.$1$5 = a;
      },
      $C: function () {
        return this.$1$6;
      },
      $D: function (a) {
        this.$1$6 = a;
      },
      $g: function () {
        ss.clear(this.$y());
        ss.arrayAddRange(this.$y(), this.$R.$2());
        var a = this.$v();
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          c.dispose();
        }
        ss.clear(this.$v());
        this.$q();
      },
      $k: function (a, b, c) {
        this.$Q = a;
        this.$P = b;
        this.$4(false, true, function (d) {
          c();
        });
      },
      $h: function (a, b, c) {
        if (ss.isValue(this.$P)) {
          this.$4(
            a,
            b,
            ss.mkdel(this, function (d) {
              this.$P.sizeControls();
              this.$p();
              this.$P.targetControls();
              this.$q();
              if (!ss.staticEquals(c, null)) {
                c();
              }
            })
          );
        }
      },
      $1: function (a, d, f, b) {
        this.$P.clearBindings();
        this.$P = a;
        var c = this.$A();
        this.$4(
          false,
          f,
          ss.mkdel(this, function (g) {
            if (d === 1) {
              this.$M = c;
              this.$N = g;
              this.$F = 0;
            } else {
              this.$B(g);
              this.$q();
            }
            this.$P.sizeControls();
            this.$p();
            this.$P.targetControls();
            if (!ss.staticEquals(b, null)) {
              b();
            }
          })
        );
      },
      $render: function (a, h) {
        var i = Enumerable.from(this.$y()).where(
          ss.mkdel(this, function (j) {
            return !ss.referenceEquals(j, this.$G);
          })
        );
        var b = i.getEnumerator();
        try {
          while (b.moveNext()) {
            var c = b.current();
            c.$render(a, h);
          }
        } finally {
          b.dispose();
        }
        var d = this.$v();
        for (var f = 0; f < d.length; f++) {
          var g = d[f];
          g.$render(a, h);
        }
        this.$s(a.$l(this.$A()));
      },
      $j: function (a) {
        this.$u(a);
        this.$q();
      },
      $c: function (a) {
        var c = ss.getEnumerator(a);
        try {
          while (c.moveNext()) {
            var d = c.current();
            d.control.jumpToTarget();
            var b = ss.safeCast(d.control, ki);
            if (ss.isValue(b)) {
              b.$m();
              if (d.isDisabled) {
                b.$c();
              }
            }
          }
        } finally {
          c.dispose();
        }
      },
      $d: function (a) {
        var b = ss.getEnumerator(a);
        try {
          while (b.moveNext()) {
            var c = b.current();
            c.control.set_isVisible(false);
          }
        } finally {
          b.dispose();
        }
      },
      $b: function (a, b) {
        var c = ss.safeCast(a.control, ki);
        if (ss.isValue(c)) {
          c.$h(b);
        }
      },
      $7: function (a, b) {
        var c = ss.safeCast(a.control, ki);
        if (ss.isValue(c)) {
          c.$a(b);
        }
      },
      $6: function (a, b) {
        var c = ss.safeCast(a.control, ki);
        if (ss.isValue(c)) {
          if (c.get_isOffScreen() && !c.$11()) {
            c.jumpToTarget();
            c.$m();
            if (!ss.staticEquals(b, null)) {
              b();
            }
          } else {
            c.$9(b);
          }
        }
      },
      $a: function (a, b) {
        var c = ss.safeCast(a.control, ki);
        if (ss.isNullOrUndefined(c)) {
          return;
        }
        if (c.get_isOffScreen() && !c.$11()) {
          c.$n();
          if (!ss.staticEquals(b, null)) {
            b();
          }
        } else {
          c.$f(b);
        }
      },
      $f: function (a) {
        var b = ss.safeCast(a.control, ki);
        if (ss.isValue(b)) {
          b.$Z();
        }
      },
      $l: function (a, c) {
        this.$G = null;
        var d = ss.safeCast(c.$b(), ky);
        if (ss.isValue(d)) {
          var b = this.$O.get_game().onDragStart(d.$1E());
          if (ss.isValue(b)) {
            this.$G = ss.cast(b.control, ky);
            if (ss.isValue(this.$G)) {
              if (!ss.referenceEquals(this.$G, c.$b())) {
                c.$6(this.$G);
                c.$o(
                  VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition$1(
                    this.$G.$1d(),
                    VEL.Skynet.Core.Toolbox.Geometry.Size.op_Division(
                      this.$G.get_size(),
                      2
                    )
                  )
                );
              }
              a.$6(c);
            }
          }
        }
      },
      $m: function (a, b) {
        var c = ss.safeCast(b.$b(), ky);
        if (ss.isValue(c) && ss.referenceEquals(c, this.$G)) {
          a.$5(b);
          this.$G = null;
          this.$0(c.get_data());
        }
        this.$P.targetControls();
      },
      $o: function (a) {
        if (ss.isValue(this.$M)) {
          this.$F += a;
          if (this.$F >= 1000) {
            this.$B(this.$N);
            this.$F = 0;
            this.$M = null;
            this.$q();
          } else {
            var g = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction$1(
              this.$N,
              this.$M
            );
            var h = this.$L.getEase(this.$F, this.$M.width, g.width, 1000);
            var b = this.$L.getEase(this.$F, this.$M.height, g.height, 1000);
            this.$B(new VEL.Skynet.Core.Toolbox.Geometry.Size(h, b));
            this.$q();
          }
        }
        var c = this.$y();
        for (var d = 0; d < c.length; d++) {
          var f = c[d];
          f.$z(a);
        }
        this.$H = true;
      },
      $0: function (a) {
        if (ss.isValue(a)) {
          var b = ss.cast(a.control, ki);
          if (ss.isValue(b)) {
            ss.remove(this.$y(), b);
            this.$y().push(b);
          }
        }
      },
      $i: function (a) {
        var b = ss.cast(a.control, ki);
        if (ss.isValue(a.control)) {
          ss.remove(this.$y(), b);
          ss.insert(this.$y(), 0, b);
        }
      },
      $9: function (a) {
        ss.remove(this.$y(), a);
        this.$P.targetControls();
        a.dispose();
      },
      $8: function (a, k, l) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          c.get_data().control = c;
          var d = -1;
          for (var f = 0; f < this.$y().length; f++) {
            if (
              this.$y()[f].get_data().get_intrinsicZOrder() >
              c.get_data().get_intrinsicZOrder()
            ) {
              d = f;
              break;
            }
          }
          if (d !== -1) {
            ss.insert(this.$y(), d, c);
          } else {
            this.$y().push(c);
          }
        }
        if (k) {
          this.$h(true, false, null);
        }
        if (l) {
          var g = Enumerable.from(a)
            .select(function (m) {
              return m.get_data();
            })
            .getEnumerator();
          try {
            while (g.moveNext()) {
              var h = g.current();
              this.$6(h, null);
            }
          } finally {
            g.dispose();
          }
        }
        for (var i = 0; i < a.length; i++) {
          var j = a[i];
          j.$Z();
        }
      },
      $e: function (a) {
        return this.$P.tryTargetControl(a.control);
      },
      $x: function () {
        if (!this.$H) {
          return this.$I;
        }
        var a = Enumerable.from(this.$y())
          .ofType(kA)
          .first(function (b) {
            return !b.$14();
          })
          .get_angle()
          .get_z()
          .get_degrees();
        this.$I = !ss.equalsT(a, this.$J);
        this.$J = a;
        this.$H = false;
        return this.$I;
      },
      $3: function (a) {
        var d = this.$r();
        var f = this.$A();
        var b = (a.x - d.get_left()) / d.get_width();
        var c = (a.y - d.get_top()) / d.get_height();
        return new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          b * f.width,
          c * f.height
        );
      },
      $2: function (a) {
        var b = Enumerable.from(this.$y()).reverse().getEnumerator();
        try {
          while (b.moveNext()) {
            var c = b.current();
            if (c.$X(a, true)) {
              return c;
            }
          }
        } finally {
          b.dispose();
        }
        return null;
      },
      $5: function (a, p, q, b) {
        var c = q;
        var d = b;
        var f = a.get_absoluteBounds().get_middleCenter();
        var g = p.get_absoluteBounds().get_middleCenter();
        if (c.x === d.x) {
          c = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            c.x + 0.0001,
            c.y
          );
        }
        if (f.x === g.x) {
          f = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
            f.x + 0.0001,
            f.y
          );
        }
        var h = (d.y - c.y) / (d.x - c.x);
        var i = c.y - h * c.x;
        var j = (g.y - f.y) / (g.x - f.x);
        var k = f.y - j * f.x;
        if (h === j) {
          return false;
        }
        var l = (k - i) / (h - j);
        var m = h * l + i;
        var n =
          l > Math.min(c.x, d.x) &&
          l < Math.max(c.x, d.x) &&
          m > Math.min(c.y, d.y) &&
          m < Math.max(c.y, d.y);
        var o =
          l > Math.min(f.x, g.x) &&
          l < Math.max(f.x, g.x) &&
          m > Math.min(f.y, g.y) &&
          m < Math.max(f.y, g.y);
        return n && o;
      },
      dispose: function () {
        var a = this.$y();
        for (var f = 0; f < a.length; f++) {
          var g = a[f];
          g.dispose();
        }
        var b = this.$v();
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          d.dispose();
        }
      },
      $p: function () {
        for (var a = 0; a < this.$y().length; a++) {
          var b = this.$y()[a];
          var c = ss.safeCast(b, ky);
          if (ss.isValue(c)) {
            if (c.$1E().shape !== c.$1C()) {
              c.dispose();
              c.$1E().control = this.$y()[a] = ss.cast(
                this.$R.build(c.$1E()),
                ki
              );
              if (!c.$1E().get_programmaticAppear() || !c.$14()) {
                this.$c([c.$1E()]);
              }
            }
          }
        }
      },
      $4: function (a, c, d) {
        var b = VEL.Skynet.Core.View.Layouts.LayoutConstraints.createForGame(
          this.$t(),
          hK.$1(),
          this.$Q.get_hasRtlContent(),
          a,
          c,
          this.$E.get_tileContents(),
          null
        );
        this.$P.initializePanel(
          this.$R,
          b,
          ss.mkdel(this, function (f) {
            if (
              ss.isNullOrUndefined(f) ||
              f.width < 1 ||
              f.height < 1 ||
              f.width > 50000 ||
              f.height > 50000
            ) {
              throw new ss.Exception(
                "Invalid object panel size: " +
                  (ss.isValue(f) ? f.toString() : "null")
              );
            }
            this.$B(f);
            if (!ss.staticEquals(d, null)) {
              d(f);
            }
          })
        );
        if (b.get_async()) {
          this.$n();
        }
      },
      $n: function () {
        var a = true;
        var b = new ss.Stopwatch();
        b.start();
        while (a && b.milliseconds() < 20) {
          a = this.$P.tickLayout();
        }
        if (a) {
          window.setTimeout(ss.mkdel(this, this.$n), 0);
        }
      },
      $q: function () {
        if (
          ss.isNullOrUndefined(this.$t()) ||
          ss.isNullOrUndefined(this.$A()) ||
          this.$A().width < 1
        ) {
          return;
        }
        var a = this.$A().getInnerFit(this.$t());
        var b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(
          this.$A(),
          a
        );
        this.$K = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          (this.$t().width - b.width) / 2,
          (this.$t().height - b.height) / 2
        );
        this.$C().$3 = this.$K;
        this.$C().$6 = a;
      },
    },
    null,
    [ss.IDisposable, jt]
  );
  ss.initClass(
    j6,
    e,
    {
      get_absoluteBounds: function () {
        return this.$1$1;
      },
      $A: function (a) {
        this.$1$1 = a;
      },
      get_size: function () {
        return this.$1$2;
      },
      $I: function (a) {
        this.$1$2 = a;
      },
      get_$isInvalidated: function () {
        return this.$1$3;
      },
      $E: function (a) {
        this.$1$3 = a;
      },
      $J: function () {
        return this.$1$4;
      },
      $K: function (a) {
        this.$1$4 = a;
      },
      $B: function () {
        return this.$T;
      },
      $C: function (a) {
        this.$T = a;
        for (var b = 0; b < this.$N.length; b++) {
          var c = this.$N[b];
          c.$C(this.$T);
        }
      },
      $0: function (a) {
        if (ss.isNullOrUndefined(a)) {
          return;
        }
        var l = ss.getEnumerator(a);
        try {
          while (l.moveNext()) {
            var m = l.current();
            var b = im.$0(m.get_resourceName());
            if (m.get_delay() !== 0) {
              var c = new h8();
              c.set_delay(m.get_delay());
              var d = [];
              d.push(b.$2());
              c.set_children(d);
              var f = c;
              b = new hB(f);
            }
            var g = b.$0(this);
            var h = {};
            var i = ss.cast(ss.Enum.parse(kg, m.get_name()), ss.Int32);
            if (i === 0) {
              throw new ss.ArgumentException();
            }
            if (
              !this.$S.tryGetValue(i, h) ||
              ss.referenceEquals(h.$, g3.$0())
            ) {
              this.$S.set_item(i, g);
            } else {
              if (!ss.referenceEquals(b, g3.$0())) {
                if (ss.isInstanceOfType(h.$, hB)) {
                  var j = ss.cast(h.$, hB);
                  j.$c(g);
                } else {
                  var k = [];
                  k.push(h.$);
                  k.push(g);
                  this.$S.set_item(i, new hB.$0(this, k, 0));
                }
              }
            }
          }
        } finally {
          l.dispose();
        }
      },
      $y: function (a, f, g) {
        var b = {};
        if (this.$S.tryGetValue(a, b) || this.$S.tryGetValue(this.$5(a), b)) {
          var c = this.$6(a);
          var d = this.$8(a);
          b.$ = b.$.$0(this);
          b.$.$3(f);
          this.$L.$0(b.$, c, g, d);
          return true;
        }
        if (!ss.staticEquals(g, null)) {
          g();
        }
        return false;
      },
      $z: function (a) {
        for (var b = 0; b < this.$N.length; b++) {
          var c = this.$N[b];
          c.$z(a);
        }
        if (ss.isValue(this.$J()) && this.$P.$1 && this.$J().$update(a)) {
          this.$7();
        }
      },
      $u: null,
      $G: function () {
        return hK.$a;
      },
      $h: function (a) {
        for (var b = 0; b < this.$N.length; b++) {
          var c = this.$N[b];
          c.$h(a);
        }
        switch (a) {
          case 2:
            this.$y(52, null, null);
            break;
          case 3:
            this.$y(53, null, null);
            break;
          case 1:
            this.$y(54, null, null);
            break;
          case 0:
            this.$y(55, null, null);
            break;
        }
      },
      $a: function (a) {
        for (var b = 0; b < this.$N.length; b++) {
          var c = this.$N[b];
          c.$a(null);
        }
        this.$y(57, null, a);
      },
      $9: function (a) {
        for (var c = 0; c < this.$N.length; c++) {
          var d = this.$N[c];
          d.$9(null);
        }
        var b = this.$y(1, null, a);
        if (!b) {
          this.$P.$1 = true;
          if (!ss.staticEquals(a, null)) {
            a();
          }
          if (ss.isInstanceOfType(this, ky)) {
            b1.error("Appear missing for " + ss.cast(this, ky).get_data());
          }
        }
      },
      $m: function () {
        for (var a = 0; a < this.$N.length; a++) {
          var b = this.$N[a];
          b.$m();
        }
        this.$P.$1 = true;
      },
      $n: function () {
        for (var a = 0; a < this.$N.length; a++) {
          var b = this.$N[a];
          b.$n();
        }
        this.$P.$1 = false;
      },
      $f: function (a) {
        var c = false;
        if (!this.$P.$1) {
          if (!ss.staticEquals(a, null)) {
            a();
          }
          return c;
        }
        c = this.$y(4, null, a);
        if (!c) {
          if (ss.isNullOrUndefined(this.get_parent())) {
            this.$P.$1 = false;
          }
          if (!ss.staticEquals(a, null)) {
            a();
          }
        }
        for (var d = 0; d < this.$N.length; d++) {
          var b = this.$N[d];
          if (b.$f(null)) {
            c = true;
          }
        }
        return c;
      },
      $g: function (a, g, h) {
        var b = false;
        for (var c = 0; c < this.$N.length; c++) {
          var d = this.$N[c];
          if (d.$g(a, g, null)) {
            b = true;
          }
        }
        if (a === 15) {
          this.$x();
          if (!ss.staticEquals(h, null)) {
            h();
          }
          return true;
        }
        var f = this.$3(a);
        return this.$y(f, g, h) || b;
      },
      $x: function () {
        this.$L.$1();
        for (var a = 0; a < this.$N.length; a++) {
          var b = this.$N[a];
          b.$x();
        }
      },
      $l: function () {
        return this.$s(11);
      },
      $k: function () {
        return this.$s(12);
      },
      $p: function () {
        return this.$s(13);
      },
      $o: function () {
        return this.$s(14);
      },
      $c: function () {
        return this.$s(15);
      },
      $b: function () {
        return this.$s(16);
      },
      $d: function () {
        return this.$s(32);
      },
      $e: function () {
        return this.$s(33);
      },
      $q: function () {
        return this.$s(34);
      },
      $r: function () {
        return this.$s(35);
      },
      $j: function () {
        return this.$s(40);
      },
      $i: function () {
        return this.$s(41);
      },
      $D: function () {
        return (
          this.$L.$2() ||
          Enumerable.from(this.$N).any(function (a) {
            return a.$D();
          })
        );
      },
      $w: function (a) {
        lB.$4(this.$M);
        this.$M = null;
        this.$I(a);
        for (var b = 0; b < this.$N.length; b++) {
          var c = this.$N[b];
          c.$w(a);
        }
      },
      $4: function () {
        var a =
          this.$M ||
          Enumerable.from(this.$N).first(function (b) {
            return ss.isValue(b.$M);
          }).$M;
        return new VEL.Skynet.Core.Toolbox.Geometry.Size(a.width, a.height);
      },
      $7: function () {
        this.$E(true);
        for (var a = 0; a < this.$N.length; a++) {
          var b = this.$N[a];
          b.$7();
        }
      },
      get_isMirrored: function () {
        return (
          ss.isValue(this.get_parent()) && this.get_parent().get_isMirrored()
        );
      },
      $render: function (a, h) {
        if (h === 1) {
          this.$t(a);
        }
        if (!this.$P.$1) {
          return;
        }
        this.$Q.$C = this.get_isMirrored();
        for (var i = 0; i < this.$N.length; i++) {
          var b = this.$N[i];
          if (b.$V) {
            var c = this.$Q.$1(this.get_absoluteBounds(), b.$U);
            b.$render(c, h);
          }
        }
        if (h === this.$R) {
          this.$u();
          if (ss.isValue(this.$M)) {
            this.$1();
          }
        }
        if (hM.$7() && h === 2) {
          this.$v();
        }
        for (var d = 0; d < this.$N.length; d++) {
          var f = this.$N[d];
          if (!f.$V) {
            var g = this.$Q.$1(this.get_absoluteBounds(), f.$U);
            f.$render(g, h);
          }
        }
      },
      $1: function () {
        this.$Q.$8(this.$M, this.get_size(), null);
      },
      $t: function (a) {
        this.$Q = a.$z(this.$P).$y(this.$O);
        this.$A(this.$Q.$l(this.get_size()));
      },
      $v: function () {
        if (ss.isNullOrUndefined(this.$Q)) {
          return;
        }
        var a =
          "Type=" +
          ss.replaceAllString(
            ss.getTypeName(ss.getInstanceType(this)),
            "$",
            ""
          ) +
          " AbsBound=" +
          ss.Int32.trunc(this.get_absoluteBounds().get_left()) +
          "," +
          ss.Int32.trunc(this.get_absoluteBounds().get_top()) +
          " " +
          ss.Int32.trunc(this.get_absoluteBounds().get_width()) +
          "x" +
          ss.Int32.trunc(this.get_absoluteBounds().get_height()) +
          " PosXY=" +
          ss.Int32.trunc(this.$P.$3.x) +
          "," +
          ss.Int32.trunc(this.$P.$3.y) +
          " PermOfst=" +
          ss.Int32.trunc(this.$O.x) +
          "," +
          ss.Int32.trunc(this.$O.y) +
          " ObjSize=" +
          ss.Int32.trunc(this.get_size().width) +
          "x" +
          ss.Int32.trunc(this.get_size().height) +
          " Scale=" +
          this.$Q.$F.toFixed(2) +
          " BufSize=";
        if (ss.isValue(this.$M)) {
          a += this.$M.width + "x" + this.$M.height;
        } else {
          a += "NONE";
        }
        if (!this.$P.$1) {
          a += " HIDDEN";
        }
        hM.$5(this.$Q, a);
        if (ss.isInstanceOfType(this, ky) && !this.$P.$1) {
          return;
        }
        var b =
          ss.isInstanceOfType(this, ki) || ss.isInstanceOfType(this, kC)
            ? e2.$3
            : ss.isInstanceOfType(this, ka)
            ? e2.$8
            : e2.$2;
        this.$Q.$t(this.get_size(), b, 1, 0, null);
        this.$2();
      },
      $2: function () {
        if (
          ss.isValue(this.get_rotationCenter()) &&
          (this.get_rotationCenter().x !== 0 ||
            this.get_rotationCenter().y !== 0)
        ) {
          var a = Math.min(
            10,
            Math.max(this.get_size().width, this.get_size().height) / 50
          );
          var d = this.$Q;
          var f = new hT();
          f.$3 = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Multiply$1(
            this.get_rotationCenter(),
            this.get_size()
          );
          var b = d.$z(f);
          var c = new hT();
          c.$3 = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(-a, -a);
          b.$z(c).$s(a, 1, e2.$5, null);
          b.$c(
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(-a, -a),
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(a, a),
            e2.$5,
            1,
            null,
            null
          );
          b.$c(
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(a, -a),
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(-a, a),
            e2.$5,
            1,
            null,
            null
          );
        }
      },
      get_forceRendering: function () {
        return true;
      },
      get_parent: function () {
        return this.$1$5;
      },
      $H: function (a) {
        this.$1$5 = a;
      },
      get_translateX: function () {
        return this.$P.$9;
      },
      set_translateX: function (a) {
        this.$P.$9 = a;
      },
      get_translateY: function () {
        return this.$P.$a;
      },
      set_translateY: function (a) {
        this.$P.$a = a;
      },
      get_translateZ: function () {
        throw new ss.NotImplementedException();
      },
      set_translateZ: function (a) {
        throw new ss.NotImplementedException();
      },
      get_opacity: function () {
        return this.$P.$2;
      },
      set_opacity: function (a) {
        this.$P.$2 = a;
      },
      get_scaleX: function () {
        return this.$P.$7;
      },
      set_scaleX: function (a) {
        this.$P.$7 = a;
      },
      get_scaleY: function () {
        return this.$P.$8;
      },
      set_scaleY: function (a) {
        this.$P.$8 = a;
      },
      updateFrame: function (a) {
        if (ss.isValue(this.$J())) {
          this.$J().$updateFrame(a);
        }
      },
      get_frame: function () {
        return ss.isValue(this.$J()) ? this.$J().get_$frame() : null;
      },
      get_angle: function () {
        return this.$P.$4;
      },
      set_angle: function (a) {
        this.$P.$4 = a;
      },
      get_angleAxisRatio: function () {
        return this.$P.$0;
      },
      set_angleAxisRatio: function (a) {
        this.$P.$0 = a;
      },
      get_rotationCenter: function () {
        return this.$P.$5;
      },
      set_rotationCenter: function (a) {
        this.$P.$5 = a;
      },
      get_visibility: function () {
        return this.$P.$1;
      },
      set_visibility: function (a) {
        this.$P.$1 = a;
      },
      get_objectBounds: function () {
        return new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          this.$P.$3.x,
          this.$P.$3.y,
          this.get_size().width,
          this.get_size().height
        );
      },
      $F: function () {
        return null;
      },
      dispose: function () {
        ik.$0(this);
        for (var a = 0; a < this.$N.length; a++) {
          var b = this.$N[a];
          b.dispose();
        }
        lB.$4(this.$M);
      },
      $8: function (a) {
        switch (a) {
          case 1:
          case 2:
          case 4:
          case 42:
          case 43:
          case 44:
          case 45:
          case 50:
          case 47:
          case 48:
          case 49:
          case 46:
          case 56:
            return true;
          default:
            return false;
        }
      },
      $6: function (a) {
        switch (a) {
          case 12:
          case 11:
            return 0;
          case 13:
          case 14:
            return 2;
          case 15:
          case 16:
            return 1;
          case 36:
          case 37:
          case 38:
          case 39:
            return 4;
          default:
            return 3;
        }
      },
      $5: function (a) {
        switch (a) {
          case 17:
            return 18;
          case 18:
            return 17;
          case 19:
            return 20;
          case 20:
            return 19;
          case 23:
            return 19;
          case 21:
            return 17;
          case 24:
            return 20;
          case 22:
            return 18;
          case 2:
            return 1;
          default:
            return 0;
        }
      },
      $3: function (a) {
        return ss.cast(
          ss.Enum.parse(
            kg,
            ss.Enum.getName(VEL.Skynet.Core.View.EventEnum, a)
          ),
          ss.Int32
        );
      },
      $s: function (a) {
        var c = false;
        for (var d = 0; d < this.$N.length; d++) {
          var b = this.$N[d];
          if (b.$s(a)) {
            c = true;
          }
        }
        return this.$y(a, null, null) || c;
      },
    },
    null,
    [ss.IDisposable, jt, h5, h9, h7, g1]
  );
  ss.initClass(
    j8,
    e,
    { $W: null, $Y: null, $Z: null, $10: null, $11: null, $X: null },
    j6,
    [ss.IDisposable, jt, h5, h9, h7, g1]
  );
  ss.initClass(
    ka,
    e,
    {
      $15: function () {
        if (ss.isNullOrUndefined(this.get_parent()) || !this.$1h || !this.$1n) {
          return;
        }
        var a =
          this.get_parent().get_rotationCenter() ||
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.5, 0.5);
        var g = a.x * this.get_parent().get_objectBounds().get_width();
        var h = a.y * this.get_parent().get_objectBounds().get_height();
        var b, c;
        switch (this.$1d) {
          case 7:
          case 0:
          case 1:
            b = this.$1f.x;
            break;
          case 2:
          case 3:
          case 8:
            b =
              this.$1f.x +
              this.get_parent().get_objectBounds().get_width() -
              this.get_size().width;
            break;
          case 4:
          case 5:
          case 6:
          default:
            b =
              this.$1f.x +
              (this.get_parent().get_objectBounds().get_width() -
                this.get_size().width) /
                2;
            break;
        }
        switch (this.$1d) {
          case 5:
          case 0:
          case 2:
            c = this.$1f.y;
            break;
          case 6:
          case 1:
          case 3:
            c =
              this.$1f.y +
              this.get_parent().get_objectBounds().get_height() -
              this.get_size().height;
            break;
          case 4:
          case 7:
          case 8:
          default:
            c =
              this.$1f.y +
              (this.get_parent().get_objectBounds().get_height() -
                this.get_size().height) /
                2;
            break;
        }
        var d = (g - b) / this.get_size().width;
        var f = (h - c) / this.get_size().height;
        this.$P.$5 = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(d, f);
      },
      $W: function () {
        return this.$y(36, null, null);
      },
      $Z: function () {
        this.$y(38, null, null);
      },
      $Y: function () {
        return this.$y(37, null, null);
      },
      $10: function () {
        this.$y(39, null, null);
      },
      $13: function (a) {
        this.$H(a);
        if (ss.isValue(a)) {
          this.$14();
        }
      },
      $w: function (a) {
        if (this.$18) {
          if (ss.isValue(this.get_parent())) {
            this.$14();
          }
        } else {
          var b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction(
            a,
            this.$1a
          );
          j6.prototype.$w.call(this, b);
        }
      },
      $9: function (a) {
        if (this.$19) {
          j6.prototype.$9.call(this, a);
        } else {
          if (!ss.staticEquals(a, null)) {
            a();
          }
        }
      },
      $m: function () {
        if (this.$19) {
          j6.prototype.$m.call(this);
        }
      },
      $16: function () {
        return this.$R === 2;
      },
      get_forceRendering: function () {
        return this.$17;
      },
      $u: function () {
        if (
          this.get_size().get_isPositive() &&
          (ss.isNullOrUndefined(this.$M) ||
            this.$1e.$1() ||
            this.get_$isInvalidated())
        ) {
          lB.$4(this.$M);
          this.$M = this.$1e.$2(
            this.get_size(),
            this.$1b,
            this.get_isMirrored()
          );
          this.$E(false);
        }
      },
      $render: function (a, c) {
        if (ss.isValue(this.get_parent())) {
          this.$15();
          if (!this.$1i) {
            a = a.$q();
          }
          if (!this.$1c) {
            a = a.$o();
          }
          if (!this.$1h) {
            a = a.$p();
          }
          if (!this.$1k) {
            a = a.$y(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                -this.get_parent().get_translateX(),
                -this.get_parent().get_translateY()
              )
            );
          }
          if (this.$1l) {
            var d = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Subtraction(
              VEL.Skynet.Core.Toolbox.Geometry.Point.op_Subtraction(
                this.get_parent().get_objectBounds().get_middleCenter(),
                this.get_objectBounds().get_middleCenter()
              ),
              this.$O
            );
            var b = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Subtraction(
              d,
              d.scale$1(a.$A(), a.$B())
            );
            a = a.$y(b);
          }
        }
        if (this.$1g > 0) {
          this.$12(a, c);
        } else {
          j6.prototype.$render.call(this, a, c);
        }
        if (this.$P.$1) {
          this.$1e.$3(a, c);
        }
      },
      $z: function (a) {
        for (var b = 0; b < this.$N.length; b++) {
          var c = this.$N[b];
          c.$z(a);
        }
        if (ss.isValue(this.$1e) && this.$P.$1 && this.$1e.$4(a)) {
          this.$7();
        }
      },
      updateFrame: function (a) {
        if (ss.isValue(this.$1e)) {
          this.$1e.$5(a);
        }
      },
      get_frame: function () {
        return ss.isValue(this.$1e) ? this.$1e.$6() : null;
      },
      $12: function (a, i) {
        if (i !== this.$R) {
          return;
        }
        this.$t(a);
        this.$u();
        var j = this.get_size();
        var b = this.$1g;
        if (ss.isValue(this.get_parent())) {
          switch (this.$1j) {
            case 1:
              var c =
                this.get_parent().get_objectBounds().get_height() /
                this.get_size().height;
              b *= c;
              j = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(j, c);
              break;
            case 2:
              var d =
                this.get_parent().get_objectBounds().get_width() /
                this.get_size().width;
              b *= d;
              j = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(j, d);
              break;
          }
        }
        var f = this.$Q.$D.x;
        var g = this.$Q.$y(
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1((f % b) - f, 0)
        );
        var h = g;
        while (h.$D.x < hK.$8().width) {
          h.$8(this.$M, j, null);
          h = h.$y(new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(b, 0));
        }
        h = g;
        while (h.$D.x > -this.get_size().width) {
          h = h.$y(new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(-b, 0));
          h.$8(this.$M, j, null);
        }
      },
      $14: function () {
        var a = ig.$1(this.get_parent(), this.$R);
        if (this.$1d === 10) {
          this.$1d = 0;
          var b = new VEL.Skynet.Core.Toolbox.Maths.PseudoRandom(
            new ss.Random().next()
          );
          this.$1f = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
            this.$1f,
            VEL.Skynet.Core.Toolbox.Geometry.Point.op_Subtraction$1(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                b.nextGaussian() * a.get_width(),
                b.nextGaussian() * a.get_height()
              ),
              VEL.Skynet.Core.Toolbox.Geometry.Size.op_Division(
                this.get_size(),
                2
              )
            )
          );
        }
        this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
          this.$1f,
          this.$1m
            ? a.get_topLeft()
            : VEL.Skynet.Core.Toolbox.Geometry.Point.empty
        );
        switch (this.$1d) {
          case 5:
            this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
              this.$O,
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                (a.get_width() - this.get_size().width) / 2,
                0
              )
            );
            break;
          case 6:
            this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
              this.$O,
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                (a.get_width() - this.get_size().width) / 2,
                a.get_height() - this.get_size().height
              )
            );
            break;
          case 7:
            this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
              this.$O,
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                0,
                (a.get_height() - this.get_size().height) / 2
              )
            );
            break;
          case 8:
            this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
              this.$O,
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                a.get_width() - this.get_size().width,
                (a.get_height() - this.get_size().height) / 2
              )
            );
            break;
          case 4:
            this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
              this.$O,
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                (a.get_width() - this.get_size().width) / 2,
                (a.get_height() - this.get_size().height) / 2
              )
            );
            break;
          case 2:
            this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
              this.$O,
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                a.get_width() - this.get_size().width,
                0
              )
            );
            break;
          case 1:
            this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
              this.$O,
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                0,
                a.get_height() - this.get_size().height
              )
            );
            break;
          case 3:
            this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
              this.$O,
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                a.get_width() - this.get_size().width,
                a.get_height() - this.get_size().height
              )
            );
            break;
          case 9:
            var c = ss.cast(this.get_parent(), j6).$F();
            if (ss.isValue(c)) {
              this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
                this.$O,
                VEL.Skynet.Core.Toolbox.Geometry.Point.op_Subtraction$1(
                  c,
                  VEL.Skynet.Core.Toolbox.Geometry.Size.op_Division(
                    this.get_size(),
                    2
                  )
                )
              );
            } else {
              this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
                this.$O,
                new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                  (a.get_width() - this.get_size().width) / 2,
                  (a.get_height() - this.get_size().height) / 2
                )
              );
            }
            break;
        }
      },
      $X: function () {},
      $11: function () {
        this.$y(25, null, null);
      },
    },
    j8,
    [ss.IDisposable, jt, h5, h9, h7, g1]
  );
  ss.initEnum(kc, e, {
    TopLeft: 0,
    BottomLeft: 1,
    TopRight: 2,
    BottomRight: 3,
    Center: 4,
    Top: 5,
    Bottom: 6,
    Left: 7,
    Right: 8,
    Marking: 9,
    Random: 10,
  });
  ss.initEnum(ke, e, { None: 0, Vertical: 1, Horizontal: 2 });
  ss.initEnum(kg, e, {
    None: 0,
    Appear: 1,
    AppearDisabled: 2,
    InstantAppear: 3,
    Eliminate: 4,
    GameOverText: 5,
    GameCompleteText: 6,
    TimesUpText: 7,
    GameOverScreen: 8,
    GameCompleteScreen: 9,
    TimesUpScreen: 10,
    HighlightOn: 11,
    HighlightOff: 12,
    SelectOn: 13,
    SelectOff: 14,
    DisableOn: 15,
    DisableOff: 16,
    LargeCross: 17,
    SmallCross: 18,
    LargeTick: 19,
    SmallTick: 20,
    LargeCrossMarking: 21,
    SmallCrossMarking: 22,
    LargeTickMarking: 23,
    SmallTickMarking: 24,
    MarkingInstantAppear: 25,
    MarkingDisappear: 26,
    Flash: 27,
    Pow: 28,
    Shake: 29,
    Text: 30,
    SmallText: 31,
    DragStarting: 32,
    DragStopped: 33,
    ShuffleStarting: 34,
    ShuffleStopped: 35,
    FlipAppear: 36,
    FlipDisappear: 37,
    InstantFlipAppear: 38,
    InstantFlipDisappear: 39,
    FlipToFront: 40,
    FlipToBack: 41,
    PageForwardAppear: 42,
    PageBackwardAppear: 43,
    PageForwardEliminate: 44,
    PageBackwardEliminate: 45,
    MoleHide: 46,
    MolePartUp: 47,
    MoleFullyUp: 48,
    MoleBobbing: 49,
    MoleInstant: 50,
    MoleWhacked: 51,
    FaceLeft: 52,
    FaceRight: 53,
    FaceUp: 54,
    FaceDown: 55,
    CrateDrop: 56,
    ConveyorAppear: 57,
  });
  ss.initClass(
    ki,
    e,
    {
      get_appearTrigger: function () {
        return this.$2$1;
      },
      set_appearTrigger: function (a) {
        this.$2$1 = a;
      },
      get_isVisible: function () {
        return this.$P.$1;
      },
      set_isVisible: function (a) {
        if (this.get_isVisible() !== a) {
          this.$P.$1 = a;
          if (a) {
            this.$7();
          }
        }
      },
      get_isOffScreen: function () {
        return (
          this.get_absoluteBounds().get_bottom() < 0 ||
          this.get_absoluteBounds().get_right() < 0 ||
          this.get_absoluteBounds().get_left() > hK.$8().width ||
          this.get_absoluteBounds().get_top() > hK.$8().height
        );
      },
      get_data: function () {
        return this.$2$2;
      },
      $10: function (a) {
        this.$2$2 = a;
      },
      $12: function () {
        return this.$2$3;
      },
      $13: function (a) {
        this.$2$3 = a;
      },
      $16: function () {
        return this.$2$4;
      },
      $17: function (a) {
        this.$2$4 = a;
      },
      $19: function () {
        return this.$2$5;
      },
      $1a: function (a) {
        this.$2$5 = a;
      },
      $14: function () {
        return this.$2$6;
      },
      $15: function (a) {
        this.$2$6 = a;
      },
      $Z: function () {
        if (ss.isValue(this.get_data().rotation)) {
          this.$P.$4 = VEL.Skynet.Core.Toolbox.Geometry.EulerAngles.fromAngle(
            this.get_data().rotation
          );
        }
        if (this.$14() !== this.get_data().isEliminated) {
          this.$15(this.get_data().isEliminated);
          if (this.$14()) {
            this.$f(null);
          } else {
            this.$9(null);
          }
        }
        if (this.$12() !== this.get_data().isDisabled) {
          this.$13(this.get_data().isDisabled);
          if (this.$12()) {
            this.$c();
          } else {
            this.$b();
          }
        }
        if (this.get_data().isHighlighted !== this.$16()) {
          this.$17(this.get_data().isHighlighted);
          if (this.$16()) {
            this.$l();
          } else {
            this.$k();
          }
        }
        if (this.get_data().isSelected !== this.$19()) {
          this.$1a(this.get_data().isSelected);
          if (this.$19()) {
            this.$p();
          } else {
            this.$o();
          }
        }
      },
      $9: function (a) {
        this.jumpToTarget();
        this.$15(false);
        if (this.get_data().isDisabled) {
          var b = this.$y(2, null, a);
          if (b) {
            this.$N.forEach(function (c) {
              c.$c();
            });
            return;
          }
        }
        j6.prototype.$9.call(this, a);
      },
      $f: function (a) {
        return j6.prototype.$f.call(this, a);
      },
      $1d: function () {
        return new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          this.$P.$3.x + this.$P.$9,
          this.$P.$3.y + this.$P.$a
        );
      },
      get_actualX: function () {
        return this.$P.$3.x;
      },
      get_actualY: function () {
        return this.$P.$3.y;
      },
      get_actualWidth: function () {
        return this.get_size().width;
      },
      get_actualHeight: function () {
        return this.get_size().height;
      },
      get_actualBounds: function () {
        return new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          this.get_actualX(),
          this.get_actualY(),
          this.get_actualWidth(),
          this.get_actualHeight()
        );
      },
      get_outerWidth: function () {
        return this.get_actualWidth();
      },
      get_outerHeight: function () {
        return this.get_actualHeight();
      },
      get_targetX: function () {
        return this.$2$7;
      },
      $1b: function (a) {
        this.$2$7 = a;
      },
      get_targetY: function () {
        return this.$2$8;
      },
      $1c: function (a) {
        this.$2$8 = a;
      },
      $11: function () {
        return (
          this.get_actualX() === this.get_targetX() &&
          this.get_actualY() === this.get_targetY()
        );
      },
      $1e: function () {
        return new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
          this.get_targetX() + this.$O.x,
          this.get_targetY() + this.$O.y,
          this.get_size().width,
          this.get_size().height
        );
      },
      $18: function () {
        return Math.abs(this.$P.$9) > 1 || Math.abs(this.$P.$a) > 1;
      },
      isHitBy: function (a) {
        var b = ss.safeCast(a, ki);
        return (
          ss.isValue(b) &&
          this.$X(b.get_absoluteBounds().get_middleCenter(), true)
        );
      },
      $X: function (a, f) {
        if (!this.get_isVisible()) {
          return false;
        }
        var g = f
          ? this.get_absoluteBounds()
          : this.get_actualBounds().translate(this.$O);
        if (ss.isValue(this.$1f)) {
          g = g.addMargin(
            f
              ? VEL.Skynet.Core.Toolbox.Geometry.Margin.op_Multiply(
                  this.$1f,
                  hK.$a
                )
              : this.$1f
          );
        }
        if (this.$1g === 1) {
          var b = 25;
          var c = Math.max(b, g.get_width() / 2);
          var d = Math.max(b, g.get_height() / 2);
          return (
            VEL.Skynet.Core.Toolbox.Maths.MathEx.pow2(
              a.x - g.get_middleCenter().x
            ) /
              VEL.Skynet.Core.Toolbox.Maths.MathEx.pow2(c) +
              VEL.Skynet.Core.Toolbox.Maths.MathEx.pow2(
                a.y - g.get_middleCenter().y
              ) /
                VEL.Skynet.Core.Toolbox.Maths.MathEx.pow2(d) <=
            1
          );
        } else {
          return g.isInside(a);
        }
      },
      $W: function (a) {
        if (!this.get_isVisible() || !a.get_isVisible()) {
          return 0;
        }
        var i = this.get_actualBounds().translate(this.$O);
        var j = a.get_actualBounds().translate(a.$O);
        if (ss.isValue(this.$1f)) {
          i = i.addMargin(this.$1f);
        }
        if (ss.isValue(a.$1f)) {
          j = j.addMargin(a.$1f);
        }
        var b = Math.max(
          0,
          Math.min(i.get_right(), j.get_right()) -
            Math.max(i.get_left(), j.get_left())
        );
        var c = Math.max(
          0,
          Math.min(i.get_bottom(), j.get_bottom()) -
            Math.max(i.get_top(), j.get_top())
        );
        var d = b * c;
        var f = i.get_width() * i.get_height();
        var g = j.get_width() * j.get_height();
        var h = f + g - d;
        return (d / h) * 100;
      },
      setTarget: function (a, c) {
        if (a !== this.get_targetX() || c !== this.get_targetY()) {
          var d = 1000;
          var b = 1400;
          this.$1b(a);
          this.$1c(c);
          this.$1j = this.$P.$3;
          this.$1i = d + ki.$2.nextDouble() * 400;
          this.$1h = 0;
        }
      },
      setSize: function (a, b) {
        this.$w(new VEL.Skynet.Core.Toolbox.Geometry.Size(a, b));
      },
      $Y: function (a) {
        this.$1b(a.x);
        this.$1c(a.y);
        this.jumpToTarget();
      },
      jumpToTarget: function () {
        this.$P.$3 = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          this.get_targetX(),
          this.get_targetY()
        );
        if (ss.isValue(this.$1j)) {
          this.$1h = 0;
          this.$1j = null;
        }
      },
      $z: function (a) {
        j6.prototype.$z.call(this, a);
        if (ss.isValue(this.$1j)) {
          this.$1h += a;
          if (this.$1h >= this.$1i) {
            this.jumpToTarget();
          } else {
            var d = this.get_targetX() - this.$1j.x;
            var f = this.get_targetY() - this.$1j.y;
            var b = ki.$1.getEase(this.$1h, this.$1j.x, d, this.$1i);
            var c = ki.$1.getEase(this.$1h, this.$1j.y, f, this.$1i);
            this.$P.$3 = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              b,
              c
            );
          }
        }
      },
      $u: function () {
        if (ss.isNullOrUndefined(this.$J())) {
          return;
        }
        if (
          !this.get_$isInvalidated() &&
          this.$J().$hasChanged(this.get_data(), 0)
        ) {
          this.$E(true);
        }
        if (!this.get_$isInvalidated() && ss.isValue(this.$M)) {
          return;
        }
        this.$E(false);
        this.$M = this.$M || lB.$2();
        var a = this.$G();
        var b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(
          this.get_size(),
          a
        );
        hZ.setSize(this.$M, b);
        var c = new hO(this.$M);
        c.$F = a;
        this.$J().$paintGraphics(c, this.get_data(), this.get_size(), b, 0);
      },
      $v: function () {
        this.$Q
          .$y(
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              -this.$O.x,
              -this.$O.y
            )
          )
          .$t(
            new VEL.Skynet.Core.Toolbox.Geometry.Size(
              this.get_outerWidth(),
              this.get_outerHeight()
            ),
            e2.$1,
            1,
            0,
            null
          );
        j6.prototype.$v.call(this);
        if (ss.isValue(this.$1f) || this.$1g !== 0) {
          var a =
            this.$1f || VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty();
          var b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Addition(
            this.get_size(),
            a
          );
          var c = this.$1g === 1 ? b.width / 2 : 0;
          this.$Q
            .$y(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                -a.get_left(),
                -a.get_top()
              )
            )
            .$t(b, e2.$4, 1, c, null);
        }
      },
    },
    j6,
    [
      ss.IDisposable,
      jt,
      h5,
      h9,
      h7,
      g1,
      VEL.Skynet.Core.View.ObjectControls.IObjectControl,
    ]
  );
  ss.initClass(
    kk,
    e,
    {
      $1k: function (a) {
        this.$1l = a;
      },
      $w: function (a) {
        var b = a.fitByAspectRatio(this.$1m, this.$1l);
        this.$O = b.get_topLeft();
        this.$1p = a;
        j6.prototype.$w.call(this, b.get_size());
      },
      get_outerWidth: function () {
        return this.$1p.width;
      },
      get_outerHeight: function () {
        return this.$1p.height;
      },
      $Z: function () {
        ki.prototype.$Z.call(this);
        var a = ss.cast(
          this.get_data(),
          VEL.Skynet.Core.View.ObjectDatas.Mosaic.MosaicData
        );
        this.$1q = a.reveal;
      },
      $u: function () {
        var a = this.$1o.$4();
        var d = ss.Int32.trunc(this.$1q * a);
        if (d !== this.$1n) {
          this.$1n = d;
          this.$E(true);
        }
        if (ss.isNullOrUndefined(this.$M) || this.get_$isInvalidated()) {
          var f = ss.cast(
            this.get_data(),
            VEL.Skynet.Core.View.ObjectDatas.Mosaic.MosaicData
          );
          this.$M = this.$M || lB.$2();
          var b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(
            this.get_size(),
            hK.$a
          );
          hZ.setSize(this.$M, b);
          var c = new hO(this.$M);
          this.$1o.$3(c, b, f);
          this.$E(false);
        }
      },
    },
    ki,
    [
      ss.IDisposable,
      jt,
      h5,
      h9,
      h7,
      g1,
      VEL.Skynet.Core.View.ObjectControls.IObjectControl,
      VEL.Skynet.Core.View.ObjectControls.IMosaicControl,
    ]
  );
  ss.initClass(
    km,
    e,
    {
      $9: function (a) {
        this.$E(true);
        for (var b = 0; b < this.$N.length; b++) {
          var c = this.$N[b];
          c.$9(null);
        }
        ki.prototype.$9.call(this, a);
      },
      $1k: function () {
        var a = Enumerable.from(this.$N)
          .where(function (c) {
            return ss.isInstanceOfType(c, ka);
          })
          .getEnumerator();
        try {
          while (a.moveNext()) {
            var b = a.current();
            b.$13(this);
          }
        } finally {
          a.dispose();
        }
      },
    },
    ki,
    [
      ss.IDisposable,
      jt,
      h5,
      h9,
      h7,
      g1,
      VEL.Skynet.Core.View.ObjectControls.IObjectControl,
      VEL.Skynet.Core.View.ObjectControls.ISpriteControl,
    ]
  );
  ss.initClass(
    ko,
    e,
    {
      $1k: function () {
        return this.$3$1;
      },
      set_beltPosition: function (a) {
        this.$3$1 = a;
      },
      $u: function () {},
    },
    ki,
    [
      ss.IDisposable,
      jt,
      h5,
      h9,
      h7,
      g1,
      VEL.Skynet.Core.View.ObjectControls.IObjectControl,
      VEL.Skynet.Core.View.ObjectControls.IConveyorControl,
    ]
  );
  ss.initClass(
    kq,
    e,
    {
      get_margin: function () {
        return this.$3$1;
      },
      $1k: function (a) {
        this.$3$1 = a;
      },
      setAlignment: function (a) {
        this.$1l = a;
      },
      $w: function (a) {
        this.$1n = a;
        var b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction(
          a,
          this.get_margin()
        ).fitByAspectRatio(this.$1m, this.$1l);
        this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
          b.get_topLeft(),
          this.get_margin().get_topLeft()
        );
        j6.prototype.$w.call(this, b.get_size());
      },
      get_outerWidth: function () {
        return this.$1n.width;
      },
      get_outerHeight: function () {
        return this.$1n.height;
      },
    },
    ki,
    [
      ss.IDisposable,
      jt,
      h5,
      h9,
      h7,
      g1,
      VEL.Skynet.Core.View.ObjectControls.IObjectControl,
      VEL.Skynet.Core.View.ObjectControls.IImageControl,
    ]
  );
  ss.initClass(
    ks,
    e,
    {
      $Z: function () {
        ki.prototype.$Z.call(this);
        var a = ss
          .cast(
            this.get_data(),
            VEL.Skynet.Core.View.ObjectDatas.Label.LabelData
          )
          .get_text();
        var b = this.get_data().paletteIndex;
        if (!a.equals$1(this.$1r) || !ss.referenceEquals(b, this.$1q)) {
          this.$1s = null;
          this.$1r = a;
          this.$1q = b;
          this.setTypesetting(this.$1p.width, this.$1p.height, false);
          this.$7();
        }
      },
      $G: function () {
        var a = ss.cast(
          this.get_data(),
          VEL.Skynet.Core.View.ObjectDatas.Label.LabelData
        ).fixedScale;
        return ss.isValue(a) ? ss.unbox(a) * hK.$0() : hK.$9();
      },
      $u: function () {
        if (
          !this.get_$isInvalidated() &&
          this.$1o.$hasChanged(this.get_data(), 0)
        ) {
          this.$E(true);
        }
        if (ss.isNullOrUndefined(this.$M) || this.get_$isInvalidated()) {
          if (!this.$1n.get_isPositive()) {
            lB.$4(this.$M);
            this.$M = null;
            this.$E(false);
            return;
          }
          var a = this.$G();
          var b = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(
            this.$1n,
            a
          );
          this.$M = this.$M || lB.$2();
          hZ.setSize(this.$M, b);
          var c = new hO(this.$M);
          c.$F = a;
          this.$1o.$paintGraphics(c, this.get_data(), this.$1n, b, 0);
          this.$1o.$3(
            c,
            this.$1r,
            this.$1s,
            this.$1n,
            this.get_data().paletteIndex
          );
          if (this.$1n.get_isPositive()) {
            this.$E(false);
          }
        }
      },
      $w: function (a) {
        var b = ss.cast(
          this.get_data().targeter,
          VEL.Skynet.Core.View.Layouts.Targeters.LabelTargeter
        );
        if (ss.isValue(b)) {
          this.setAlignment(b.get_textAlign());
          this.$1s = b.get_typeSetting();
        }
        var c = this.$1o.$4() / 2;
        this.$1p = a;
        this.$1n = new VEL.Skynet.Core.Toolbox.Geometry.Size(
          this.$1s.actualBounds.get_width() + c * 2,
          this.$1s.actualBounds.get_height() + c * 2
        );
        this.$O = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Subtraction(
          this.$1s.actualBounds.get_topLeft(),
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(c, c)
        );
        this.$7();
        j6.prototype.$w.call(this, this.$1n);
      },
      get_outerWidth: function () {
        return this.$1p.width;
      },
      get_outerHeight: function () {
        return this.$1p.height;
      },
      setTypesetting: function (a, c, d) {
        this.$1s = this.$1o.$2(this.$1r, a, c, d);
        var b = ss.cast(
          this.get_data().targeter,
          VEL.Skynet.Core.View.Layouts.Targeters.LabelTargeter
        );
        if (ss.isValue(b)) {
          b.set_typeSetting(this.$1s);
        }
        this.setSize(a, c);
      },
      setAlignment: function (a) {
        if (a === this.$1m) {
          return;
        }
        this.$1m = a;
        this.$7();
      },
      $1l: function () {
        return this.$3$1;
      },
      set_maxFontSize: function (a) {
        this.$3$1 = a;
      },
      getOffset: function () {
        return this.$O;
      },
      $1k: function () {
        return this.$1r.toString();
      },
    },
    ki,
    [
      ss.IDisposable,
      jt,
      h5,
      h9,
      h7,
      g1,
      VEL.Skynet.Core.View.ObjectControls.IObjectControl,
      VEL.Skynet.Core.View.ObjectControls.ILabelControl,
    ]
  );
  ss.initClass(
    ku,
    e,
    {
      get_padding: function () {
        return this.$3$1;
      },
      set_padding: function (a) {
        this.$3$1 = a;
      },
      $1k: function (a) {
        this.setSize(a.$A().width, a.$A().height);
        if (ig.$5()) {
          this.$A(
            new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
              0,
              0,
              hK.$8().width,
              hK.$8().height
            )
          );
        }
      },
      get_outerWidth: function () {
        return (
          this.get_actualWidth() + this.$1m.get_left() + this.$1m.get_right()
        );
      },
      get_outerHeight: function () {
        return (
          this.get_actualHeight() + this.$1m.get_top() + this.$1m.get_bottom()
        );
      },
      $w: function (a) {
        this.$O = this.$1m.get_topLeft();
        j6.prototype.$w.call(
          this,
          VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction(a, this.$1m)
        );
      },
      $X: function (a, b) {
        return (
          (this.get_isVisible() || !this.$1l) &&
          ki.prototype.$X.call(this, a, b)
        );
      },
    },
    ki,
    [
      ss.IDisposable,
      jt,
      h5,
      h9,
      h7,
      g1,
      VEL.Skynet.Core.View.ObjectControls.IObjectControl,
      VEL.Skynet.Core.View.ObjectControls.IPlaceControl,
    ]
  );
  ss.initEnum(kw, e, { Rectangle: 0, Ellipse: 1 });
  ss.initClass(
    ky,
    e,
    {
      $1k: function () {
        var a = ss.cast(
          this.$1E().targeter,
          VEL.Skynet.Core.View.Layouts.Targeters.TileTargeter
        );
        ky.$1(this.$1K, a);
        if (ss.isValue(this.$1I)) {
          ky.$0(this.$1I, a);
        }
      },
      setDiameter: function (a) {
        this.$1m();
      },
      $1C: function () {
        return this.$3$2;
      },
      $1D: function (a) {
        this.$3$2 = a;
      },
      $1E: function () {
        return ss.cast(
          this.get_data(),
          VEL.Skynet.Core.View.ObjectDatas.Tile.TileData
        );
      },
      $1F: function (a) {
        this.$10(a);
      },
      get_$isInvalidated: function () {
        return this.$1u() === 0
          ? this.$1K.get_$isInvalidated()
          : this.$1I.get_$isInvalidated();
      },
      $1u: function () {
        return this.$3$3;
      },
      $1v: function (a) {
        this.$3$3 = a;
      },
      $F: function () {
        return this.$1K.$F();
      },
      $1w: function () {
        return this.$3$4;
      },
      $1x: function (a) {
        this.$3$4 = a;
      },
      $1s: function () {
        return this.$3$5;
      },
      $1t: function (a) {
        this.$3$5 = a;
      },
      $1G: function () {
        return this.$3$6;
      },
      $1H: function (a) {
        this.$3$6 = a;
      },
      $1q: function () {
        return this.$3$7;
      },
      $1r: function (a) {
        this.$3$7 = a;
      },
      $1y: function () {
        return this.$3$8;
      },
      $1z: function (a) {
        this.$3$8 = a;
      },
      $1A: function () {
        return this.$3$9;
      },
      $1B: function (a) {
        this.$3$9 = a;
      },
      $Z: function () {
        ki.prototype.$Z.call(this);
        var a;
        if ((a = this.$1L.$0(this.$1E())) !== 0) {
          if (a === 1 || a === 3) {
            this.$1K.$7();
          }
          if ((a === 2 || a === 3) && ss.isValue(this.$1I)) {
            this.$1I.$7();
          }
          this.$1L = new lf(this.$1E());
        }
        if (this.$1E().faceShown !== this.$1u()) {
          this.$1l();
        }
        this.$1p();
      },
      $u: function () {},
      $1l: function () {
        if (this.$1M) {
          return;
        }
        this.$1M = true;
        this.$1v(this.$1E().faceShown);
        var a = this.$1u() === 0 ? this.$1K : this.$1I;
        if (ss.isValue(a)) {
          a.$W();
        }
        var b = this.$1u() === 0 ? this.$1I : this.$1K;
        if (ss.isValue(b)) {
          b.$Y();
        }
        if (this.$1u() === 0) {
          this.$j();
        } else {
          this.$i();
        }
        this.$K(ss.isValue(a) ? a.$J() : null);
      },
      $1o: function () {
        this.$1M = false;
        if (this.$1u() !== this.$1E().faceShown) {
          this.$1l();
        }
      },
      $render: function (a, b) {
        j6.prototype.$render.call(this, a, b);
        if (this.$1y() && b === 1) {
          this.$1J++;
          if (this.$1J === 30) {
            this.$1J = 0;
            ky.$3(!ky.$2());
            this.$1K.$7();
          }
        }
      },
      $1p: function () {
        var a =
          this.$1u() === 0 ? this.$1E().primaryText : this.$1E().secondaryText;
        this.$1t(a.toString());
        this.$1H(
          (this.$1u() === 0
            ? this.$1E().primaryHeader
            : this.$1E().secondaryHeader
          ).toString()
        );
        this.$1r(
          (this.$1u() === 0
            ? this.$1E().primaryFooter
            : this.$1E().secondaryFooter
          ).toString()
        );
        this.$1x(
          this.$1u() === 0 ? this.$1E().primaryGlyph : this.$1E().secondaryGlyph
        );
        var b = this.$1E().paletteIndex;
        if (ss.isNullOrUndefined(b)) {
          b = this.$B();
        }
        this.$1B(b);
        this.$1z(ss.isValue(this.$1E().cursorPosition));
      },
      $1m: function () {
        this.$I(this.$1K.$17());
        var a = Enumerable.from(this.$N)
          .where(function (c) {
            return ss.isInstanceOfType(c, ka);
          })
          .getEnumerator();
        try {
          while (a.moveNext()) {
            var b = a.current();
            b.$13(this);
          }
        } finally {
          a.dispose();
        }
      },
      $1n: function () {
        this.$I(
          new VEL.Skynet.Core.Toolbox.Geometry.Size(
            this.get_data().targeter.get_outerWidth(),
            this.get_data().targeter.get_outerHeight()
          )
        );
        var a = Enumerable.from(this.$N)
          .where(function (c) {
            return ss.isInstanceOfType(c, ka);
          })
          .getEnumerator();
        try {
          while (a.moveNext()) {
            var b = a.current();
            b.$13(this);
          }
        } finally {
          a.dispose();
        }
      },
      $w: function (a) {
        j6.prototype.$w.call(this, a);
        if (this.$1E().get_isSizeDynamic()) {
          this.$1k();
          if (this.$1C() !== 11) {
            ss.cast(this.$1K, kG).$1f();
            if (ss.isValue(this.$1I)) {
              ss.cast(this.$1K, kG).$1f();
            }
          }
        }
      },
    },
    ki,
    [
      ss.IDisposable,
      jt,
      h5,
      h9,
      h7,
      g1,
      VEL.Skynet.Core.View.ObjectControls.IObjectControl,
      VEL.Skynet.Core.View.ObjectControls.ITileControl,
    ]
  );
  ss.initClass(
    kA,
    e,
    {
      $Z: function () {
        ky.prototype.$Z.call(this);
        var a = ss.cast(
          this.get_data(),
          VEL.Skynet.Core.View.ObjectDatas.Tile.SegmentTileData
        );
        if (!a.sweepAngle.equals$1(this.$1P)) {
          this.$1P = a.sweepAngle;
          this.$7();
          var b = this.$1O.$1f();
          this.$w(b);
          this.$1N();
        }
      },
      $t: function (a) {
        j6.prototype.$t.call(this, a);
        var b = this.get_absoluteBounds();
        this.$A(
          new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor2(
            b.get_left() + b.get_width() / 2 - b.get_height(),
            b.get_top(),
            b.get_height() * 2,
            b.get_height() * 2
          )
        );
      },
      $1N: function () {
        this.$P.$5 = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          0.5,
          this.$1O.$1e()
        );
      },
    },
    ky,
    [
      ss.IDisposable,
      jt,
      h5,
      h9,
      h7,
      g1,
      VEL.Skynet.Core.View.ObjectControls.IObjectControl,
      VEL.Skynet.Core.View.ObjectControls.ITileControl,
    ]
  );
  ss.initClass(
    kC,
    e,
    {
      $13: function () {
        return this.$P.$1;
      },
      $14: function (a) {
        this.$P.$1 = a;
      },
      $17: function () {
        return VEL.Skynet.Core.Toolbox.Geometry.Size.op_Addition(
          this.get_size(),
          this.$1d
        );
      },
      $15: function () {
        return this.$3$1;
      },
      $16: function (a) {
        this.$3$1 = a;
      },
      $D: function () {
        return this.$1c.$2() || j6.prototype.$D.call(this);
      },
      $9: function (a) {
        if (this.$19.faceShown === this.$1a) {
          j6.prototype.$9.call(this, a);
          this.$12();
        } else {
          this.$10();
        }
      },
      $m: function () {
        if (this.$19.faceShown === this.$1a) {
          j6.prototype.$m.call(this);
          this.$12();
          this.$Z();
        } else {
          this.$10();
        }
      },
      $W: function () {
        var a = false;
        var b = Enumerable.from(this.$N).ofType(j8).getEnumerator();
        try {
          while (b.moveNext()) {
            var c = b.current();
            if (c.$W()) {
              a = true;
            }
          }
        } finally {
          b.dispose();
        }
        this.$12();
        return this.$y(36, null, ss.mkdel(this, this.$X)) || a;
      },
      $Z: function () {
        var a = Enumerable.from(this.$N).ofType(j8).getEnumerator();
        try {
          while (a.moveNext()) {
            var b = a.current();
            b.$Z();
          }
        } finally {
          a.dispose();
        }
        this.$12();
        if (!this.$y(38, null, null)) {
          this.$P.$1 = true;
        }
      },
      $Y: function () {
        return this.$s(37);
      },
      $10: function () {
        var a = Enumerable.from(this.$N).ofType(j8).getEnumerator();
        try {
          while (a.moveNext()) {
            var b = a.current();
            b.$10();
          }
        } finally {
          a.dispose();
        }
        if (!this.$y(39, null, null)) {
          this.$P.$1 = false;
        }
      },
      $G: function () {
        return this.$19.isScaleConstant ? hK.$0() : hK.$9();
      },
      $X: function () {
        var a = ss.cast(this.$19.control, ky);
        a.$1o();
      },
      $12: function () {
        if (
          (this.$1a === 0 &&
            (this.$19.primaryGlyph === 2 || this.$19.primaryGlyph === 3)) ||
          (this.$1a === 1 &&
            (this.$19.secondaryGlyph === 2 || this.$19.secondaryGlyph === 3))
        ) {
          this.$11();
        }
      },
      $11: function () {
        this.$y(25, null, null);
        var a = Enumerable.from(this.$N).ofType(j8).getEnumerator();
        try {
          while (a.moveNext()) {
            var b = a.current();
            b.$11();
          }
        } finally {
          a.dispose();
        }
      },
    },
    j8,
    [ss.IDisposable, jt, h5, h9, h7, g1]
  );
  ss.initClass(
    kE,
    e,
    {
      $1f: function () {
        return this.$1g().outerSize;
      },
      $1e: function () {
        var a = this.$1g();
        return a.centerVertex.y / a.outerSize.height;
      },
      $u: function () {
        if (
          (ss.isNullOrUndefined(this.$M) || this.get_$isInvalidated()) &&
          !this.$19.isEliminated
        ) {
          this.$w(this.$1f());
          var a = this.get_size();
          var j = this.$G();
          var k = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(a, j);
          this.$M = this.$M || lB.$2();
          hZ.setSize(this.$M, k);
          var b = new hO(this.$M);
          b.$F = j;
          this.$1i.$paintGraphics(b, this.$1h, a, k, this.$1a);
          var c = VEL.Skynet.Core.Toolbox.Geometry.Segment.fromOuterHeight(
            a.height,
            this.$1g().sweepAngle
          );
          var d = Math.min(this.$1g().sweepAngle.get_degrees(), 180);
          if (d === 0) {
            d = 180;
          }
          var f = VEL.Skynet.Core.Toolbox.Geometry.Segment.fromRadius(
            c.radius,
            VEL.Skynet.Core.Toolbox.Geometry.Angle.fromDegrees(d)
          );
          var g = f.outerSize;
          var h = k.width / 2;
          var i = k.height;
          b = b.$r(
            VEL.Skynet.Core.Toolbox.Geometry.Angle.fromDegrees(90),
            h,
            i
          );
          this.$1i.$1(b, this.$1h, this.$15(), this.$1a, g);
          this.$E(false);
        }
      },
      $1g: function () {
        if (
          ss.isNullOrUndefined(this.$1j) ||
          !ss.referenceEquals(this.$1j.sweepAngle, this.$1h.sweepAngle) ||
          this.$1j.radius !== this.$1i.$6().height
        ) {
          this.$1j = VEL.Skynet.Core.Toolbox.Geometry.Segment.fromRadius(
            this.$1i.$6().height,
            this.$1h.sweepAngle
          );
        }
        return this.$1j;
      },
    },
    kC,
    [ss.IDisposable, jt, h5, h9, h7, g1]
  );
  ss.initClass(
    kG,
    e,
    {
      $1e: function (a) {
        return VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction(
          new VEL.Skynet.Core.Toolbox.Geometry.Size(
            ss.coalesce(a.targeter.actualWidth, 0),
            ss.coalesce(a.targeter.actualHeight, 0)
          ),
          this.$1h.$3()
        );
      },
      $F: function () {
        if (ss.isNullOrUndefined(this.$1h.$5())) {
          return null;
        }
        return VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
          this.$1h.$5(),
          this.$O
        );
      },
      get_isMirrored: function () {
        return this.$19.faceShown === 1 && this.$1g;
      },
      $1f: function () {
        this.$1h.$2(this.$1e(this.$19));
        this.$w(this.$1h.$6());
      },
      $u: function () {
        if (
          !this.get_$isInvalidated() &&
          this.$1h.$hasChanged(this.$19, this.$1a)
        ) {
          this.$E(true);
        }
        if (ss.isNullOrUndefined(this.$M) || this.get_$isInvalidated()) {
          this.$M = this.$M || lB.$2();
          var a = this.$G();
          var c = this.$1h.$6();
          var d = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Multiply(c, a);
          hZ.setSize(this.$M, d);
          var b = new hO(this.$M);
          b.$C = this.get_isMirrored();
          b.$F = a;
          if (this.get_$isInvalidated()) {
            b.$4();
          }
          this.$1h.$paintGraphics(b, this.$19, c, d, this.$1a);
          this.$1h.$1(b, this.$19, this.$15(), this.$1a, c);
          this.$E(false);
          if (hM.$7() && ss.isValue(this.$1h.$5())) {
            b.$h(this.$1h.$5(), 3, e2.$5);
          }
        }
      },
    },
    kC,
    [ss.IDisposable, jt, h5, h9, h7, g1]
  );
  ss.initClass(kI, e, { $0: null });
  ss.initClass(kM, e, {
    $c: function () {
      return this.$1$1;
    },
    $d: function (a) {
      this.$1$1 = a;
    },
    $8: function () {
      return this.$1$2;
    },
    $9: function (a) {
      this.$1$2 = a;
    },
    $a: function () {
      return this.$1$3;
    },
    $b: function (a) {
      this.$1$3 = a;
    },
    $1: function (a, k, l, b, c, d) {
      if (this.$c().get_direction() !== 3) {
        c = this.$c().get_direction();
      }
      var f = l === 0 ? k.primaryImage : k.secondaryImage;
      a = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction(
        a,
        this.$c().get_margin()
      );
      if (ss.isValue(f)) {
        if (c === 1) {
          var g = d ? (b ? 0 : 1) : 0.66667;
          var h = Math.min(
            a.height * g,
            (f.get_height() * a.width) / f.get_width()
          );
          return new VEL.Skynet.Core.Toolbox.Geometry.Size(
            a.width,
            b ? a.height - h : h
          );
        } else {
          var i = d ? (b ? 0 : 1) : 0.4;
          var j = Math.min(
            a.width * i,
            (f.get_width() * a.height) / f.get_height()
          );
          return new VEL.Skynet.Core.Toolbox.Geometry.Size(
            b ? a.width - j : j,
            a.height
          );
        }
      } else {
        return a;
      }
    },
    $3: function (a, k, l, b, c, d, f) {
      if (this.$c().get_direction() !== 3) {
        f = this.$c().get_direction();
      }
      var g = c === 0 ? k.primaryImage : k.secondaryImage;
      var h = c === 0 ? k.primaryText : k.secondaryText;
      var i = this.$8().clone();
      i.set_fillColour(e0.$2(i.get_fillColour(), k, c));
      i.set_strokeColour(e0.$2(i.get_strokeColour(), k, c));
      var j = hK.$1() && f === 0;
      switch (d) {
        case 0:
          this.$6(a, g, h, i, l, k.cursorPosition, b, f, j);
          break;
        case 1:
          this.$5(a, g, h, i, l, k.cursorPosition, b, f, j);
          break;
      }
    },
    $6: function (a, q, r, b, c, d, f, g, h) {
      a = a.$y(this.$c().get_margin().get_topLeft());
      if (h && ss.isValue(q)) {
        a = a.$y(
          new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(f.width, 0)
        );
      }
      var i = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction(
        f,
        this.$c().get_margin()
      );
      var j = i;
      var k = null;
      if (ss.isValue(q)) {
        var l = i.height;
        var m = i.width;
        if (!r.get_isEmptyOrWhitespace()) {
          if (g === 1) {
            m = i.width;
            l = Math.min(
              i.height * 0.66667,
              (i.width * q.get_height()) / q.get_width()
            );
          } else {
            m = Math.min(
              i.width * 0.4,
              (i.height * q.get_width()) / q.get_height()
            );
            l = i.height;
          }
        }
        var n = new VEL.Skynet.Core.Toolbox.Geometry.Size(m, l);
        if (h) {
          a = a.$y(
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(-n.width, 0)
          );
        }
        var o = (i.width + i.height) * 0.02;
        if (g === 1) {
          j = new VEL.Skynet.Core.Toolbox.Geometry.Size(
            j.width,
            j.height - l - o
          );
          k = this.$2(r, b, c, j, 0, ss.isValue(d));
          var p = (i.height * 0.66667 - l) / 2;
          if (k.actualBounds.get_top() >= p && !r.get_isEmptyOrWhitespace()) {
            k.applyY(p);
            a = a.$y(new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0, p));
            this.$4(a, q, n);
            a = a.$y(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                0,
                l + o + this.$c().get_margin().get_bottom() - p
              )
            );
          } else {
            this.$4(a, q, n);
            a = a.$y(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                0,
                l + o + this.$c().get_margin().get_bottom()
              )
            );
          }
        } else {
          this.$4(a, q, n);
          j = new VEL.Skynet.Core.Toolbox.Geometry.Size(
            j.width - m - o,
            j.height
          );
          if (h) {
            a = a.$y(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                -this.$c().get_margin().get_right() - o - j.width,
                0
              )
            );
          } else {
            a = a.$y(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                m + this.$c().get_margin().get_right() + o,
                0
              )
            );
          }
        }
      }
      if (ss.isValue(r) && (!r.get_isEmptyOrWhitespace() || ss.isValue(d))) {
        k = k || this.$2(r, b, c, j, 0, ss.isValue(d));
        this.$7(a, b, k, d);
      }
    },
    $5: function (a, u, v, b, c, d, f, g, h) {
      var i = new VEL.Skynet.Core.Toolbox.Geometry.Rect.$ctor1(
        VEL.Skynet.Core.Toolbox.Geometry.Point.empty,
        f
      ).removeMargin$1(this.$c().get_margin());
      var j = ss.isValue(u);
      var k = ss.isValue(v) && (!v.get_isEmptyOrWhitespace() || ss.isValue(d));
      if (k && j) {
        var l = new VEL.Skynet.Core.Toolbox.Geometry.Size(
          i.get_width() / Math.sqrt(2),
          i.get_height() / Math.sqrt(2)
        );
        var m = i.centreRectangle(l);
        var n = m.addMargin(this.$c().get_margin());
        var o = a.$y(n.get_topLeft());
        this.$6(o, u, v, b, c, d, n.get_size(), g, h);
      } else {
        if (k) {
          var p = this.$2(v, b, c, i.get_size(), 1, ss.isValue(d));
          var q = a.$y(i.get_topLeft());
          this.$7(q, b, p, d);
        } else {
          if (j) {
            var r = new VEL.Skynet.Core.Toolbox.Geometry.Size(
              u.get_width(),
              u.get_height()
            ).get_aspectRatio();
            var s = i
              .get_size()
              .fitInEllipseByAspectRatio(r)
              .translate(i.get_topLeft());
            var t = a.$y(s.get_topLeft());
            this.$4(t, u, s.get_size());
          }
        }
      }
    },
    $4: function (a, g, h) {
      var b = i7.getContentImageElement(g);
      var c = new VEL.Skynet.Core.Toolbox.Geometry.Size(b.width, b.height);
      var d = h.fitByAspectRatio(c.get_aspectRatio(), 1);
      var f = this.$0(b);
      if (ss.isValue(f) && f.isTransparent) {
        f = this.$a() || e2.$7;
      }
      if (ss.isValue(f)) {
        a.$j(h, f, 0, 0);
        a = a.$y(d.get_topLeft());
        a.$8(b, d.get_size(), null);
      } else {
        a = a.$y(d.get_topLeft());
        a.$8(b, d.get_size(), null);
      }
    },
    $0: function (a) {
      if (a.width < 4 || a.height < 4) {
        return null;
      }
      var n = {};
      if (this.$e.tryGetValue(a, n)) {
        return n.$;
      }
      var o = lB.$3();
      o.width = a.width;
      o.height = 4;
      var b = ss.cast(o.getContext("2d"), CanvasRenderingContext2D);
      b.drawImage(a, 0, 0, a.width, 2, 0, 0, a.width, 2);
      b.drawImage(a, 0, a.height - 2, a.width, 2, 0, 2, a.width, 2);
      var c = b.getImageData(0, 0, a.width, 4);
      var d = 0;
      var f = 0;
      var g = 0;
      var h = 0;
      var i = ss.Int32.div(c.data.length, 4);
      for (var j = 0; j < i; j++) {
        if (c.data[h + 3] < 127) {
          h += 4;
          g++;
          continue;
        }
        for (var k = 0; k < 3; k++) {
          var l = c.data[h];
          if (l >= 250) {
            d++;
          } else {
            if (l < 5) {
              f++;
            }
          }
          h++;
        }
        h++;
      }
      var m = ss.Int32.div(3 * i * 3, 4);
      if (d > m) {
        n.$ = e2.$7;
      } else {
        if (f > m) {
          n.$ = e2.$0;
        } else {
          if (g > m) {
            n.$ = e2.$6;
          } else {
            n.$ = null;
          }
        }
      }
      this.$e.set_item(a, n.$);
      return n.$;
    },
    $2: function (a, j, k, b, c, d) {
      var f =
        k === 0
          ? this.$c().get_font().get_fontSize()
          : Math.min(this.$c().get_font().get_fontSize(), k);
      var g = new h1.$i(j);
      var h = new VEL.Skynet.Core.View.Helpers.TypeSetterOptions();
      h.horizontalAlign = this.$c().get_alignment();
      h.maxFontSize = f;
      h.lineSpacing = 0.1;
      h.shape = c;
      h.whiteSpace = d;
      var i = h;
      return VEL.Skynet.Core.View.Helpers.TypeSetter.arrange(
        a,
        b,
        ss.mkdel(g, g.measureSize),
        i
      );
    },
    $7: function (a, m, n, b) {
      if (m.get_useStroke()) {
        for (var c = 0; c < n.chunks.length; c++) {
          var d = n.chunks[c];
          m.modify(d);
          a.$u(d.text, d.position.x, d.position.y, m);
        }
      }
      for (var f = 0; f < n.chunks.length; f++) {
        var g = n.chunks[f];
        m.modify(g);
        a.$k(g.text, g.position.x, g.position.y, m);
      }
      if (ky.$2() && ss.isValue(b)) {
        var h = n.getCursorRect(b);
        if (ss.isValue(h)) {
          var i = a.$y(h.get_topLeft());
          i.$j(h.get_size(), m.get_fillColour(), 0, 0);
        }
      }
      if (hM.$7()) {
        for (var j = 0; j < n.chunks.length; j++) {
          var k = n.chunks[j];
          var l = k.get_bounds();
          a.$y(l.get_topLeft()).$t(l.get_size(), e2.$8, 0.5, 0, null);
        }
      }
    },
  });
  ss.initClass(kX, e, { $1: null, $2: null, $0: null });
  ss.initClass(
    kO,
    e,
    {
      $1: function (a, b) {
        return b === 0 ? a.primaryHeader : a.secondaryHeader;
      },
      $0: function (a, b) {
        if (
          ss.isNullOrUndefined(a.get_sound()) ||
          (!a.get_showPrimarySoundGlyph() && b === 0) ||
          (!a.get_showSecondarySoundGlyph() && b === 1)
        ) {
          return 0;
        }
        return a.get_isSoundPlaying() ? 6 : 5;
      },
    },
    ss.makeGenericType(kY, [k5])
  );
  ss.initClass(
    kQ,
    e,
    { $0: function (a, c, d, b) {} },
    ss.makeGenericType(kK, [k0])
  );
  ss.initClass(kT, e, {
    $b: function () {
      return this.$1$1;
    },
    $c: function (a) {
      this.$1$1 = a;
    },
    $5: function () {
      return this.$1$2;
    },
    $6: function (a) {
      this.$1$2 = a;
    },
    $7: function () {
      return this.$1$3;
    },
    $8: function (a) {
      this.$1$3 = a;
    },
    $3: function () {
      return this.$1$4;
    },
    $4: function (a) {
      this.$1$4 = a;
    },
    $9: function () {
      return this.$1$5;
    },
    $a: function (a) {
      this.$1$5 = a;
    },
    $2: function (a, A, C, b, c) {
      var d;
      this.$a(null);
      switch (this.$b().get_shape()) {
        case 1:
          if (
            ss.referenceEquals(
              this.$b().get_margin(),
              VEL.Skynet.Core.Toolbox.Geometry.Margin.get_empty()
            ) ||
            ss.isNullOrUndefined(this.$b().get_instructionMargin())
          ) {
            throw new ss.Exception("missing Margin or InstructionMargin");
          }
          var f = ss.cast(
            A,
            VEL.Skynet.Core.View.ObjectDatas.Tile.SegmentTileData
          );
          var g = f.hasInstruction
            ? this.$b().get_instructionMargin()
            : this.$b().get_margin();
          var h = VEL.Skynet.Core.Toolbox.Geometry.Segment.fromRadius(
            c.height,
            f.sweepAngle
          );
          d = this.$0(h, f.hasInstruction);
          if (hM.$7()) {
            var i = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              c.height - g.get_right(),
              h.outerSize.width / 2 - d.height / 2
            );
            var j = VEL.Skynet.Core.Toolbox.Geometry.Point.op_Addition(
              i,
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0, d.height)
            );
            a.$c(i, j, e2.$5, 1, null, null);
          }
          var k =
            h.radius -
            Math.sqrt(
              VEL.Skynet.Core.Toolbox.Maths.MathEx.pow2(h.radius) -
                VEL.Skynet.Core.Toolbox.Maths.MathEx.pow2(d.height / 2)
            );
          a = a.$y(
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              k,
              h.outerSize.width / 2 - d.height / 2
            )
          );
          a = a.$y(g.get_topLeft());
          this.$7().$3(a, A, b, d, C, 0, this.$b().get_direction());
          break;
        case 2:
          d = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction(
            c,
            this.$b().get_margin()
          );
          a = a.$y(
            new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              this.$b().get_margin().get_left(),
              this.$b().get_margin().get_top()
            )
          );
          if (hM.$7()) {
            a.$t(d, e2.$5, 1, d.width / 2, null);
          }
          this.$7().$3(a, A, b, d, C, 1, this.$b().get_direction());
          break;
        case 0:
          var l = hK.$1() && this.$b().get_direction() === 0;
          var m =
            C === 0 ? this.$b().get_margin() : this.$b().get_margin().flip();
          d = VEL.Skynet.Core.Toolbox.Geometry.Size.op_Subtraction(c, m);
          a = a.$y(m.get_topLeft());
          if (l) {
            a = a.$y(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(d.width, 0)
            );
          }
          if (hM.$7()) {
            a.$t(d, e2.$5, 1, 0, null);
          }
          var n = d.height;
          var o = d.width;
          var p = VEL.Skynet.Core.Toolbox.Geometry.Size.get_empty();
          var q = VEL.Skynet.Core.Toolbox.Geometry.Size.get_empty();
          var r = VEL.Skynet.Core.Toolbox.Geometry.Point.empty;
          var s =
            C === 0
              ? !A.primaryText.get_isEmpty() || ss.isValue(A.primaryImage)
              : !A.secondaryText.get_isEmpty() || ss.isValue(A.secondaryImage);
          var t =
            C === 0
              ? ss.isValue(A.get_sound()) ||
                !A.primaryHeader.get_isEmpty() ||
                A.get_showPrimarySoundGlyph()
              : ss.isValue(A.get_sound()) ||
                !A.secondaryHeader.get_isEmpty() ||
                A.get_showSecondarySoundGlyph();
          var u =
            C === 0
              ? kZ.$0(A.primaryGlyph) || !A.primaryFooter.get_isEmpty()
              : kZ.$0(A.secondaryGlyph) || !A.secondaryFooter.get_isEmpty();
          if (!s) {
            if (ss.isValue(this.$5()) && t && !u) {
              this.$5().$2(
                a,
                A,
                new VEL.Skynet.Core.Toolbox.Geometry.Size(o, n),
                C,
                this.$b().get_direction(),
                this.$b().get_headerText().get_maxGlyphSize()
              );
              return;
            }
            if (ss.isValue(this.$3()) && u && !t) {
              this.$3().$2(
                a,
                A,
                new VEL.Skynet.Core.Toolbox.Geometry.Size(o, n),
                C,
                this.$b().get_direction(),
                null
              );
              return;
            }
          }
          if (ss.isValue(this.$3())) {
            q = this.$3().$5(d, A, C, this.$b().get_direction());
            if (this.$b().get_direction() === 1) {
              n -= q.height;
            } else {
              o -= q.width;
            }
          }
          if (ss.isValue(this.$5())) {
            p =
              A.get_expandHeaderIfNoMainContent() && !s
                ? new VEL.Skynet.Core.Toolbox.Geometry.Size(o, n)
                : this.$5().$5(d, A, C, this.$b().get_direction());
            if (this.$b().get_direction() === 1) {
              r = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                0,
                p.height
              );
              n -= r.y;
            } else {
              r = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                p.width,
                0
              );
              o -= r.x;
            }
            if (l) {
              a = a.$y(
                new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(-p.width, 0)
              );
            }
          } else {
            if (
              !A.primaryHeader.get_isEmpty() ||
              !A.secondaryHeader.get_isEmpty()
            ) {
              b1.error(
                "Missing ContentPanel.HeaderText for shape:" +
                  A.shape +
                  " face:" +
                  C
              );
            }
          }
          var v = new VEL.Skynet.Core.Toolbox.Geometry.Size(o, n);
          if (ss.isValue(this.$5())) {
            this.$5().$2(
              a,
              A,
              p,
              C,
              this.$b().get_direction(),
              this.$b().get_headerText().get_maxGlyphSize()
            );
          }
          if (l) {
            a = a.$y(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(-v.width, 0)
            );
          } else {
            a = a.$y(r);
          }
          this.$7().$3(a, A, b, v, C, 0, this.$b().get_direction());
          if (ss.isValue(this.$3())) {
            var w =
              this.$b().get_direction() === 1
                ? new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                    0,
                    v.height
                  )
                : new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                    v.width,
                    0
                  );
            if (l) {
              w = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                -q.width,
                0
              );
            }
            var x = a.$y(w);
            this.$3().$2(x, A, q, C, this.$b().get_direction(), null);
            var y = this.$3().$4(d, this.$b().get_direction(), false);
            var z =
              this.$b().get_direction() === 1
                ? new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                    this.$b().get_margin().get_left() + d.width / 2,
                    this.$b().get_margin().get_top() + d.height - y.height / 2
                  )
                : new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                    this.$b().get_margin().get_left() + d.width - y.width / 2,
                    this.$b().get_margin().get_top() + d.height / 2
                  );
            this.$a(l ? z.setX(c.width - z.x) : z);
          } else {
            var B = C === 0 ? A.primaryFooter : A.secondaryFooter;
            var D = C === 0 ? A.primaryGlyph : A.secondaryGlyph;
            if (!B.get_isEmpty() || D !== 0) {
              b1.error(
                "Missing ContentPanel.FooterText for shape:" +
                  A.shape +
                  " face:" +
                  C
              );
            }
          }
          break;
      }
    },
    $1: function (a, i, j, b, c) {
      var d =
        a.width -
        this.$b().get_margin().get_left() -
        this.$b().get_margin().get_right();
      var f =
        a.height -
        this.$b().get_margin().get_top() -
        this.$b().get_margin().get_bottom();
      if (ss.isValue(this.$5())) {
        var g = this.$5().$5(a, i, j, this.$b().get_direction());
        if (this.$b().get_direction() === 1) {
          f -= g.height;
        } else {
          d -= g.width;
        }
      }
      if (ss.isValue(this.$3())) {
        var h = this.$3().$5(a, i, j, this.$b().get_direction());
        if (this.$b().get_direction() === 1) {
          f -= h.height;
        } else {
          d -= h.width;
        }
      }
      return this.$7().$1(
        new VEL.Skynet.Core.Toolbox.Geometry.Size(d, f),
        i,
        j,
        b,
        this.$b().get_direction(),
        c
      );
    },
    $0: function (a, l) {
      var m = a.halfSweepAngle;
      if (m.get_degrees() > 60) {
        m = VEL.Skynet.Core.Toolbox.Geometry.Angle.fromDegrees(60);
      }
      var b = m.get_radians();
      var c = 0.344 * b + 0.44;
      c = VEL.Skynet.Global.Extensions.NumberExtensions.clamp$1(Number).call(
        null,
        c,
        0.5,
        0.8
      );
      var d = a.radius * c;
      var f = a.radius - d;
      var g = 2 * Math.tan(b) * f;
      var h =
        a.radius -
        Math.sqrt(
          VEL.Skynet.Core.Toolbox.Maths.MathEx.pow2(a.radius) -
            VEL.Skynet.Core.Toolbox.Maths.MathEx.pow2(g / 2)
        );
      var i = d - h;
      var j = l ? this.$b().get_instructionMargin() : this.$b().get_margin();
      var k = a.radius - d;
      i -= j.get_left() + Math.max(0, j.get_right() - k);
      return new VEL.Skynet.Core.Toolbox.Geometry.Size(i, g);
    },
  });
  ss.initClass(
    kU,
    e,
    { $0: function (a, c, d, b) {} },
    ss.makeGenericType(kK, [k6])
  );
  ss.initClass(
    kV,
    e,
    {
      $0: function (a, g, h, b) {
        if (
          ss.isNullOrUndefined(this.$3) &&
          !ss.isNullOrEmptyString(this.$1().get_correctSrc())
        ) {
          this.$3 = i7.getImageElement(this.$1().get_correctSrc());
        }
        if (
          ss.isNullOrUndefined(this.$4) &&
          !ss.isNullOrEmptyString(this.$1().get_incorrectSrc())
        ) {
          this.$4 = i7.getImageElement(this.$1().get_incorrectSrc());
        }
        if (
          ss.isNullOrUndefined(this.$5) &&
          !ss.isNullOrEmptyString(this.$1().get_soundSrc())
        ) {
          this.$5 = i7.getImageElement(this.$1().get_soundSrc());
        }
        if (
          ss.isNullOrUndefined(this.$6) &&
          !ss.isNullOrEmptyString(this.$1().get_soundPlayingSrc())
        ) {
          this.$6 = i7.getImageElement(this.$1().get_soundPlayingSrc());
        }
        var c;
        switch (g) {
          case 0:
          case 1:
            return;
          case 2:
            c = this.$3;
            break;
          case 3:
            c = this.$4;
            break;
          case 5:
            c = this.$5;
            break;
          case 6:
            c = this.$6;
            break;
          default:
            throw new ss.NotImplementedException();
        }
        if (this.$1().get_percentage() !== 100) {
          var d = this.$1().get_percentage() / 100;
          var f = 0.5 - d / 2;
          a = a
            .$y(
              new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
                f * b.width,
                f * b.height
              )
            )
            .$x(d);
        }
        a.$8(c, b, null);
      },
    },
    ss.makeGenericType(kK, [k7])
  );
  ss.initClass(
    kW,
    e,
    {
      $9: function () {
        return this.$3$1;
      },
      $a: function (a) {
        this.$3$1 = a;
      },
      $5: function () {
        return this.$3$2;
      },
      $6: function (a) {
        this.$3$2 = a;
      },
      $7: function () {
        return this.$3$3;
      },
      $8: function (a) {
        this.$3$3 = a;
      },
      $b: function () {
        return this.$3$4;
      },
      $c: function (a) {
        this.$3$4 = a;
      },
      $0: function (a, c, d, b) {
        switch (c) {
          case 1:
          case 0:
            return;
          case 2:
            this.$3(
              a,
              this.$5() || d,
              this.$b(),
              this.$4(kW.$4, b),
              null,
              b,
              0.2
            );
            break;
          case 3:
            this.$3(
              a,
              this.$7() || d,
              this.$b(),
              this.$4(kW.$0, b),
              null,
              b,
              0.2
            );
            break;
          case 5:
            this.$3(
              a,
              this.$9() || d,
              this.$b(),
              this.$4(kW.$3, b),
              this.$4(kW.$1, b),
              b,
              0.05
            );
            break;
          case 6:
            this.$3(
              a,
              this.$9() || d,
              this.$b(),
              this.$4(kW.$2, b),
              this.$4(kW.$1, b),
              b,
              0.1
            );
            break;
          default:
            throw new ss.NotImplementedException();
        }
      },
      $3: function (a, j, k, b, c, d, f) {
        if (ss.isValue(b)) {
          var g = Math.min(d.width, d.height) * f;
          if (ss.isValue(k)) {
            a.$e(k, g * 1.5, "square", b, null, false);
          }
          a.$e(j, g, "square", b, null, false);
        }
        if (ss.isValue(c)) {
          for (var h = 0; h < c.length; h++) {
            var i = c[h];
            a.$i(j, i);
          }
        }
      },
      $4: function (a, i) {
        var j =
          (Math.min(i.width, i.height) * this.$1().get_percentage()) / 100;
        var b = new Array(a.length);
        for (var c = 0; c < a.length; c++) {
          var d = a[c];
          var f = (b[c] = new Array(d.length));
          for (var g = 0; g < d.length; g++) {
            var h = d[g];
            f[g] = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              i.width / 2 - j / 2 + h.x * j,
              i.height / 2 - j / 2 + h.y * j
            );
          }
        }
        return b;
      },
    },
    ss.makeGenericType(kK, [k9])
  );
  ss.initClass(
    kZ,
    e,
    {
      $1: function (a, b) {
        return b === 0 ? a.primaryFooter : a.secondaryFooter;
      },
      $0: function (a, b) {
        var c = b === 0 ? a.primaryGlyph : a.secondaryGlyph;
        if (ss.isNullOrUndefined(this.$9()) && c !== 0) {
          b1.error("Cant find FooterText.Glyph to show GlyphEnum." + c);
        }
        return ss.isValue(this.$9()) ? c : 0;
      },
    },
    ss.makeGenericType(kY, [k3])
  );
  ss.initClass(k4, e, {
    get_percentage: function () {
      return this.$1$1;
    },
    set_percentage: function (a) {
      this.$1$1 = a;
    },
  });
  ss.initClass(k0, e, {}, k4);
  ss.initClass(k1, e, {
    get_shape: function () {
      return this.$1$1;
    },
    set_shape: function (a) {
      this.$1$1 = a;
    },
    get_headerText: function () {
      return this.$1$2;
    },
    set_headerText: function (a) {
      this.$1$2 = a;
    },
    get_mainContent: function () {
      return this.$1$3;
    },
    set_mainContent: function (a) {
      this.$1$3 = a;
    },
    get_footerText: function () {
      return this.$1$4;
    },
    set_footerText: function (a) {
      this.$1$4 = a;
    },
    get_margin: function () {
      return this.$1$5;
    },
    set_margin: function (a) {
      this.$1$5 = a;
    },
    get_instructionMargin: function () {
      return this.$1$6;
    },
    set_instructionMargin: function (a) {
      this.$1$6 = a;
    },
    get_direction: function () {
      return this.$1$7;
    },
    set_direction: function (a) {
      this.$1$7 = a;
    },
  });
  ss.initEnum(k2, e, { Rectangle: 0, Segment: 1, Circle: 2 });
  ss.initClass(la, e, {
    get_margin: function () {
      return this.$1$1;
    },
    set_margin: function (a) {
      this.$1$1 = a;
    },
    get_percentage: function () {
      return this.$1$2;
    },
    set_percentage: function (a) {
      this.$1$2 = a;
    },
    get_collapsedPercentage: function () {
      return this.$1$3;
    },
    set_collapsedPercentage: function (a) {
      this.$1$3 = a;
    },
    get_font: function () {
      return this.$1$4;
    },
    set_font: function (a) {
      this.$1$4 = a;
    },
    get_glyph: function () {
      return this.$1$5;
    },
    set_glyph: function (a) {
      this.$1$5 = a;
    },
  });
  ss.initClass(k3, e, {}, la);
  ss.initClass(
    k5,
    e,
    {
      get_maxGlyphSize: function () {
        return this.$2$1;
      },
      set_maxGlyphSize: function (a) {
        this.$2$1 = a;
      },
    },
    la
  );
  ss.initClass(k6, e, {}, k4);
  ss.initClass(
    k7,
    e,
    {
      get_correctSrc: function () {
        return this.$2$1;
      },
      set_correctSrc: function (a) {
        this.$2$1 = a;
      },
      get_incorrectSrc: function () {
        return this.$2$2;
      },
      set_incorrectSrc: function (a) {
        this.$2$2 = a;
      },
      get_soundSrc: function () {
        return this.$2$3;
      },
      set_soundSrc: function (a) {
        this.$2$3 = a;
      },
      get_soundPlayingSrc: function () {
        return this.$2$4;
      },
      set_soundPlayingSrc: function (a) {
        this.$2$4 = a;
      },
    },
    k4
  );
  ss.initClass(k8, e, {
    get_margin: function () {
      return this.$1$1;
    },
    set_margin: function (a) {
      this.$1$1 = a;
    },
    get_font: function () {
      return this.$1$2;
    },
    set_font: function (a) {
      this.$1$2 = a;
    },
    get_alignment: function () {
      return this.$1$3;
    },
    set_alignment: function (a) {
      this.$1$3 = a;
    },
    get_imageBackground: function () {
      return this.$1$4;
    },
    set_imageBackground: function (a) {
      this.$1$4 = a;
    },
    get_direction: function () {
      return this.$1$5;
    },
    set_direction: function (a) {
      this.$1$5 = a;
    },
  });
  ss.initClass(
    k9,
    e,
    {
      get_soundColour: function () {
        return this.$2$1;
      },
      set_soundColour: function (a) {
        this.$2$1 = a;
      },
      get_correctColour: function () {
        return this.$2$2;
      },
      set_correctColour: function (a) {
        this.$2$2 = a;
      },
      get_incorrectColour: function () {
        return this.$2$3;
      },
      set_incorrectColour: function (a) {
        this.$2$3 = a;
      },
      get_strokeColour: function () {
        return this.$2$4;
      },
      set_strokeColour: function (a) {
        this.$2$4 = a;
      },
    },
    k4
  );
  ss.initClass(
    lb,
    e,
    {
      $W: null,
      $1: function () {
        if (ss.isNullOrUndefined(this.$10)) {
          if (ss.isValue(this.$X)) {
            var a = ss.coalesce(this.get_frame(), 0);
            var b = new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
              a * this.$X.width,
              0
            );
            this.$Q.$a(this.$W(), b, this.$X, null, this.get_size());
          } else {
            this.$Q.$8(this.$W(), this.get_size(), null);
          }
        } else {
          this.$Q.$7(this.$W(), this.get_size(), this.$10);
        }
        if (hM.$7()) {
          var c = 30;
          this.$Q.$e(
            e2.$5,
            1,
            "square",
            [
              [
                new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0, c),
                new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0, 0),
                new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(c, 0),
              ],
            ],
            null,
            false
          );
          this.$2();
        }
      },
      get_frame: function () {
        return this.$Z;
      },
      updateFrame: function (a) {
        this.$Z = a;
      },
    },
    j6,
    [ss.IDisposable, jt, h5, h9, h7, g1]
  );
  ss.initClass(
    lc,
    e,
    {
      $W: function () {
        return this.$M;
      },
      $u: function () {
        this.$E(false);
        if (ss.isNullOrUndefined(this.$M)) {
          this.$M = lB.$1();
          this.$M.width = 1;
          this.$M.height = 1;
          var a = new hO(this.$M);
          a.$5(this.$11);
        }
      },
    },
    lb,
    [ss.IDisposable, jt, h5, h9, h7, g1]
  );
  ss.initClass(
    ld,
    e,
    {
      $W: function () {
        return this.$11;
      },
      $render: function (a, b) {
        this.$t(a);
        this.$1();
      },
      $u: function () {
        this.$E(false);
      },
    },
    lb,
    [ss.IDisposable, jt, h5, h9, h7, g1]
  );
  ss.initEnum(le, e, { Rectangle: 0 });
  ss.initClass(lf, e, {
    $0: function (a) {
      var i;
      var j;
      var b;
      var c;
      var d;
      var f;
      var g;
      var h;
      b = this.$1(this.$7, a.paletteIndex);
      c = this.$1(this.$j, a.get_state());
      d = this.$1(this.$4, a.isNeutral);
      f = this.$1(this.$3, a.isHighlighted);
      g = this.$1(this.$5, a.isSelected);
      h = this.$1(this.$2, a.isDisabled);
      i =
        this.$1(this.$b, a.primaryText) ||
        this.$1(this.$9, a.primaryGlyph) ||
        this.$1(this.$c, a.primaryHeader) ||
        this.$1(this.$8, a.primaryFooter) ||
        this.$1(this.$6, a.get_isSoundPlaying()) ||
        !ss.referenceEquals(this.$a, a.primaryImage) ||
        (!ss.referenceEquals(this.$i, a.get_sound()) && a.faceShown === 0) ||
        (b && a.isFrontColored) ||
        c ||
        d ||
        f ||
        g ||
        h;
      j =
        this.$1(this.$d, a.secondaryFooter) ||
        this.$1(this.$g, a.secondaryText) ||
        this.$1(this.$e, a.secondaryGlyph) ||
        this.$1(this.$h, a.secondaryHeader) ||
        this.$1(this.$6, a.get_isSoundPlaying()) ||
        !ss.referenceEquals(this.$f, a.secondaryImage) ||
        (!ss.referenceEquals(this.$i, a.get_sound()) && a.faceShown === 1) ||
        (b && a.isBackColored) ||
        c ||
        d ||
        f ||
        g ||
        h;
      if (i && j) {
        return 3;
      }
      if (i) {
        return 1;
      }
      if (j) {
        return 2;
      }
      return 0;
    },
    $1: function (a, b) {
      if (ss.isNullOrUndefined(a) && ss.isNullOrUndefined(b)) {
        return false;
      }
      return (
        ss.isNullOrUndefined(a) || ss.isNullOrUndefined(b) || !ss.equals(a, b)
      );
    },
  });
  ss.initEnum(lg, e, { $3: 0, $2: 1, $0: 2, $1: 3 });
  ss.setMetadata(lt, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute(null)],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "LineSpacing",
        type: 16,
        returnType: ss.makeGenericType(ss.Nullable$1, [Number]),
        getter: {
          name: "get_LineSpacing",
          type: 8,
          sname: "get_lineSpacing",
          returnType: ss.makeGenericType(ss.Nullable$1, [Number]),
          params: [],
        },
        setter: {
          name: "set_LineSpacing",
          type: 8,
          sname: "set_lineSpacing",
          returnType: Object,
          params: [ss.makeGenericType(ss.Nullable$1, [Number])],
        },
      },
      {
        name: "MaxFontSize",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_MaxFontSize",
          type: 8,
          sname: "get_maxFontSize",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_MaxFontSize",
          type: 8,
          sname: "set_maxFontSize",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "MinAscent",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_MinAscent",
          type: 8,
          sname: "get_minAscent",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_MinAscent",
          type: 8,
          sname: "set_minAscent",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "MinDescent",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_MinDescent",
          type: 8,
          sname: "get_minDescent",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_MinDescent",
          type: 8,
          sname: "set_minDescent",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Range",
        type: 16,
        returnType: VEL.Skynet.Core.DataStructures.UnicodeLanguage,
        getter: {
          name: "get_Range",
          type: 8,
          sname: "get_range",
          returnType: VEL.Skynet.Core.DataStructures.UnicodeLanguage,
          params: [],
        },
        setter: {
          name: "set_Range",
          type: 8,
          sname: "set_range",
          returnType: Object,
          params: [VEL.Skynet.Core.DataStructures.UnicodeLanguage],
        },
      },
    ],
  });
  ss.setMetadata(lv, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute(null)],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "IsGenericFontFamily",
        isStatic: true,
        type: 8,
        sname: "isGenericFontFamily",
        returnType: Boolean,
        params: [String],
      },
      {
        name: "Family",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Family",
          type: 8,
          sname: "get_family",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Family",
          type: 8,
          sname: "set_family",
          returnType: Object,
          params: [String],
        },
      },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlAttributeArrayAttribute(
            VEL.Skynet.Core.DataStructures.UnicodeLanguage
          ),
        ],
        name: "Ranges",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Ranges",
          type: 8,
          sname: "get_ranges",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Ranges",
          type: 8,
          sname: "set_ranges",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "Src",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Src",
          type: 8,
          sname: "get_src",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Src",
          type: 8,
          sname: "set_src",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Weight",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Weight",
          type: 8,
          sname: "get_weight",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Weight",
          type: 8,
          sname: "set_weight",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "GenericFontFamilies",
        isStatic: true,
        type: 4,
        returnType: Array,
        sname: "genericFontFamilies",
      },
    ],
  });
  ss.setMetadata(lx, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute(null)],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "GetFamilies",
        type: 8,
        sname: "getFamilies",
        returnType: ss.IEnumerable,
        params: [ss.Int32],
      },
      {
        name: "IsFamilyIncluded",
        type: 8,
        sname: "isFamilyIncluded",
        returnType: Boolean,
        params: [String, VEL.Skynet.Core.DataStructures.UnicodeLanguage],
      },
      {
        name: "FontAdjustments",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_FontAdjustments",
          type: 8,
          sname: "get_fontAdjustments",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_FontAdjustments",
          type: 8,
          sname: "set_fontAdjustments",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "FontFaces",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_FontFaces",
          type: 8,
          sname: "get_fontFaces",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_FontFaces",
          type: 8,
          sname: "set_fontFaces",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "FontStacks",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_FontStacks",
          type: 8,
          sname: "get_fontStacks",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_FontStacks",
          type: 8,
          sname: "set_fontStacks",
          returnType: Object,
          params: [Array],
        },
      },
    ],
  });
  ss.setMetadata(lz, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute(null)],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "GetAllStackFamilies",
        type: 8,
        sname: "getAllStackFamilies",
        returnType: Array,
        params: [],
      },
      {
        name: "GetNonGenericStackFamilies",
        type: 8,
        sname: "getNonGenericStackFamilies",
        returnType: Array,
        params: [],
      },
      {
        name: "Id",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Id",
          type: 8,
          sname: "get_id",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Id",
          type: 8,
          sname: "set_id",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "Name",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Name",
          type: 8,
          sname: "get_name",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Name",
          type: 8,
          sname: "set_name",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Select",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Select",
          type: 8,
          sname: "get_select",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Select",
          type: 8,
          sname: "set_select",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Stack",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Stack",
          type: 8,
          sname: "get_stack",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Stack",
          type: 8,
          sname: "set_stack",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(li, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute(null)],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Delay",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Delay",
          type: 8,
          sname: "get_delay",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Delay",
          type: 8,
          sname: "set_delay",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "IsForced",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_IsForced",
          type: 8,
          sname: "get_isForced",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_IsForced",
          type: 8,
          sname: "set_isForced",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "Name",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Name",
          type: 8,
          sname: "get_name",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Name",
          type: 8,
          sname: "set_name",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "ResourceName",
        type: 16,
        returnType: String,
        getter: {
          name: "get_ResourceName",
          type: 8,
          sname: "get_resourceName",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_ResourceName",
          type: 8,
          sname: "set_resourceName",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Shape",
        type: 16,
        returnType: VEL.Skynet.Core.View.ObjectDatas.TileShapeEnum,
        getter: {
          name: "get_Shape",
          type: 8,
          sname: "get_shape",
          returnType: VEL.Skynet.Core.View.ObjectDatas.TileShapeEnum,
          params: [],
        },
        setter: {
          name: "set_Shape",
          type: 8,
          sname: "set_shape",
          returnType: Object,
          params: [VEL.Skynet.Core.View.ObjectDatas.TileShapeEnum],
        },
      },
    ],
  });
  ss.setMetadata(lC, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Src",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Src",
          type: 8,
          sname: "get_src",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Src",
          type: 8,
          sname: "set_src",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Volume",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Volume",
          type: 8,
          sname: "get_volume",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Volume",
          type: 8,
          sname: "set_volume",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(lE, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Audios")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Children",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Children",
          type: 8,
          sname: "get_children",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Children",
          type: 8,
          sname: "set_children",
          returnType: Object,
          params: [Array],
        },
      },
    ],
  });
  ss.setMetadata(lG, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Animation",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Animation",
          type: 8,
          sname: "get_animation",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Animation",
          type: 8,
          sname: "set_animation",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Children",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Children",
          type: 8,
          sname: "get_children",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Children",
          type: 8,
          sname: "set_children",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "MuteMode",
        type: 16,
        returnType: lM,
        getter: {
          name: "get_MuteMode",
          type: 8,
          sname: "get_muteMode",
          returnType: lM,
          params: [],
        },
        setter: {
          name: "set_MuteMode",
          type: 8,
          sname: "set_muteMode",
          returnType: Object,
          params: [lM],
        },
      },
      {
        name: "Shuffle",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_Shuffle",
          type: 8,
          sname: "get_shuffle",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_Shuffle",
          type: 8,
          sname: "set_shuffle",
          returnType: Object,
          params: [Boolean],
        },
      },
    ],
  });
  ss.setMetadata(lI, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("LoopSounds"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "FadeInTime",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_FadeInTime",
          type: 8,
          sname: "get_fadeInTime",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_FadeInTime",
          type: 8,
          sname: "set_fadeInTime",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "FadeOutTime",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_FadeOutTime",
          type: 8,
          sname: "get_fadeOutTime",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_FadeOutTime",
          type: 8,
          sname: "set_fadeOutTime",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "Type",
        type: 16,
        returnType: VEL.Skynet.Core.View.LoopingSoundEnum,
        getter: {
          name: "get_Type",
          type: 8,
          sname: "get_type",
          returnType: VEL.Skynet.Core.View.LoopingSoundEnum,
          params: [],
        },
        setter: {
          name: "set_Type",
          type: 8,
          sname: "set_type",
          returnType: Object,
          params: [VEL.Skynet.Core.View.LoopingSoundEnum],
        },
      },
    ],
  });
  ss.setMetadata(lK, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Music")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Scene",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Scene",
          type: 8,
          sname: "get_scene",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Scene",
          type: 8,
          sname: "set_scene",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Type",
        type: 16,
        returnType: VEL.Skynet.Core.View.MusicEnum,
        getter: {
          name: "get_Type",
          type: 8,
          sname: "get_type",
          returnType: VEL.Skynet.Core.View.MusicEnum,
          params: [],
        },
        setter: {
          name: "set_Type",
          type: 8,
          sname: "set_type",
          returnType: Object,
          params: [VEL.Skynet.Core.View.MusicEnum],
        },
      },
    ],
  });
  ss.setMetadata(lO, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Sound")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Pitch",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Pitch",
          type: 8,
          sname: "get_pitch",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Pitch",
          type: 8,
          sname: "set_pitch",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "PlaybackRate",
        type: 16,
        returnType: ss.makeGenericType(ss.Nullable$1, [Number]),
        getter: {
          name: "get_PlaybackRate",
          type: 8,
          sname: "get_playbackRate",
          returnType: ss.makeGenericType(ss.Nullable$1, [Number]),
          params: [],
        },
      },
      {
        name: "Scene",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Scene",
          type: 8,
          sname: "get_scene",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Scene",
          type: 8,
          sname: "set_scene",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Src",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Src",
          type: 8,
          sname: "get_src",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Src",
          type: 8,
          sname: "set_src",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Volume",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Volume",
          type: 8,
          sname: "get_volume",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Volume",
          type: 8,
          sname: "set_volume",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(lQ, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Sounds")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Type",
        type: 16,
        returnType: VEL.Skynet.Core.View.SoundEnum,
        getter: {
          name: "get_Type",
          type: 8,
          sname: "get_type",
          returnType: VEL.Skynet.Core.View.SoundEnum,
          params: [],
        },
        setter: {
          name: "set_Type",
          type: 8,
          sname: "set_type",
          returnType: Object,
          params: [VEL.Skynet.Core.View.SoundEnum],
        },
      },
    ],
  });
  ss.setMetadata(aM, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Conveyor")],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(aO, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Face")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlSerializationIgnoreAttribute(),
        ],
        name: "AspectRatio",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_AspectRatio",
          type: 8,
          sname: "get_aspectRatio",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_AspectRatio",
          type: 8,
          sname: "set_aspectRatio",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "ContentPanel",
        type: 16,
        returnType: k1,
        getter: {
          name: "get_ContentPanel",
          type: 8,
          sname: "get_contentPanel",
          returnType: k1,
          params: [],
        },
        setter: {
          name: "set_ContentPanel",
          type: 8,
          sname: "set_contentPanel",
          returnType: Object,
          params: [k1],
        },
      },
      {
        name: "Height",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Height",
          type: 8,
          sname: "get_height",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Height",
          type: 8,
          sname: "set_height",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "Margin",
        type: 16,
        returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
        getter: {
          name: "get_Margin",
          type: 8,
          sname: "get_margin",
          returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
          params: [],
        },
        setter: {
          name: "set_Margin",
          type: 8,
          sname: "set_margin",
          returnType: Object,
          params: [VEL.Skynet.Core.Toolbox.Geometry.Margin],
        },
      },
      {
        name: "MirrorBack",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_MirrorBack",
          type: 8,
          sname: "get_mirrorBack",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_MirrorBack",
          type: 8,
          sname: "set_mirrorBack",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "Type",
        type: 16,
        returnType:
          VEL.Skynet.Core.View.ObjectDatas.Tile.Enumerations.FaceTypeEnum,
        getter: {
          name: "get_Type",
          type: 8,
          sname: "get_type",
          returnType:
            VEL.Skynet.Core.View.ObjectDatas.Tile.Enumerations.FaceTypeEnum,
          params: [],
        },
        setter: {
          name: "set_Type",
          type: 8,
          sname: "set_type",
          returnType: Object,
          params: [
            VEL.Skynet.Core.View.ObjectDatas.Tile.Enumerations.FaceTypeEnum,
          ],
        },
      },
      {
        name: "Width",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Width",
          type: 8,
          sname: "get_width",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Width",
          type: 8,
          sname: "set_width",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "X",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_X",
          type: 8,
          sname: "get_x",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_X",
          type: 8,
          sname: "set_x",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Y",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Y",
          type: 8,
          sname: "get_y",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Y",
          type: 8,
          sname: "set_y",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(aQ, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("ImageBuilder"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Background",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Background",
          type: 8,
          sname: "get_background",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Background",
          type: 8,
          sname: "set_background",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "ClipCorner",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_ClipCorner",
          type: 8,
          sname: "get_clipCorner",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_ClipCorner",
          type: 8,
          sname: "set_clipCorner",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Margin",
        type: 16,
        returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
        getter: {
          name: "get_Margin",
          type: 8,
          sname: "get_margin",
          returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
          params: [],
        },
        setter: {
          name: "set_Margin",
          type: 8,
          sname: "set_margin",
          returnType: Object,
          params: [VEL.Skynet.Core.Toolbox.Geometry.Margin],
        },
      },
      {
        name: "Type",
        type: 16,
        returnType: VEL.Skynet.Core.View.ObjectDatas.ImageTypeEnum,
        getter: {
          name: "get_Type",
          type: 8,
          sname: "get_type",
          returnType: VEL.Skynet.Core.View.ObjectDatas.ImageTypeEnum,
          params: [],
        },
        setter: {
          name: "set_Type",
          type: 8,
          sname: "set_type",
          returnType: Object,
          params: [VEL.Skynet.Core.View.ObjectDatas.ImageTypeEnum],
        },
      },
    ],
  });
  ss.setMetadata(aS, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Label")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Font",
        type: 16,
        returnType: f0,
        getter: {
          name: "get_Font",
          type: 8,
          sname: "get_font",
          returnType: f0,
          params: [],
        },
        setter: {
          name: "set_Font",
          type: 8,
          sname: "set_font",
          returnType: Object,
          params: [f0],
        },
      },
      {
        name: "Glyph",
        type: 16,
        returnType: k4,
        getter: {
          name: "get_Glyph",
          type: 8,
          sname: "get_glyph",
          returnType: k4,
          params: [],
        },
        setter: {
          name: "set_Glyph",
          type: 8,
          sname: "set_glyph",
          returnType: Object,
          params: [k4],
        },
      },
    ],
  });
  ss.setMetadata(aU, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Mosaic")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Background",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Background",
          type: 8,
          sname: "get_background",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Background",
          type: 8,
          sname: "set_background",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Count",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Count",
          type: 8,
          sname: "get_count",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Count",
          type: 8,
          sname: "set_count",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "Gap",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Gap",
          type: 8,
          sname: "get_gap",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Gap",
          type: 8,
          sname: "set_gap",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(aW, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "AppearTrigger",
        type: 16,
        returnType: VEL.Skynet.Core.View.ObjectControls.AppearTriggerEnum,
        getter: {
          name: "get_AppearTrigger",
          type: 8,
          sname: "get_appearTrigger",
          returnType: VEL.Skynet.Core.View.ObjectControls.AppearTriggerEnum,
          params: [],
        },
        setter: {
          name: "set_AppearTrigger",
          type: 8,
          sname: "set_appearTrigger",
          returnType: Object,
          params: [VEL.Skynet.Core.View.ObjectControls.AppearTriggerEnum],
        },
      },
      {
        name: "Binding",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Binding",
          type: 8,
          sname: "get_binding",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Binding",
          type: 8,
          sname: "set_binding",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Clipping",
        type: 16,
        returnType: aK,
        getter: {
          name: "get_Clipping",
          type: 8,
          sname: "get_clipping",
          returnType: aK,
          params: [],
        },
        setter: {
          name: "set_Clipping",
          type: 8,
          sname: "set_clipping",
          returnType: Object,
          params: [aK],
        },
      },
      {
        name: "Decorations",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Decorations",
          type: 8,
          sname: "get_decorations",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Decorations",
          type: 8,
          sname: "set_decorations",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "EventTriggers",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_EventTriggers",
          type: 8,
          sname: "get_eventTriggers",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_EventTriggers",
          type: 8,
          sname: "set_eventTriggers",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "Graphics",
        type: 16,
        returnType: aL,
        getter: {
          name: "get_Graphics",
          type: 8,
          sname: "get_graphics",
          returnType: aL,
          params: [],
        },
        setter: {
          name: "set_Graphics",
          type: 8,
          sname: "set_graphics",
          returnType: Object,
          params: [aL],
        },
      },
      {
        name: "ZLayer",
        type: 16,
        returnType: h3,
        getter: {
          name: "get_ZLayer",
          type: 8,
          sname: "get_zLayer",
          returnType: h3,
          params: [],
        },
        setter: {
          name: "set_ZLayer",
          type: 8,
          sname: "set_zLayer",
          returnType: Object,
          params: [h3],
        },
      },
    ],
  });
  ss.setMetadata(aY, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Place")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Margin",
        type: 16,
        returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
        getter: {
          name: "get_Margin",
          type: 8,
          sname: "get_margin",
          returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
          params: [],
        },
        setter: {
          name: "set_Margin",
          type: 8,
          sname: "set_margin",
          returnType: Object,
          params: [VEL.Skynet.Core.Toolbox.Geometry.Margin],
        },
      },
      {
        name: "Padding",
        type: 16,
        returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
        getter: {
          name: "get_Padding",
          type: 8,
          sname: "get_padding",
          returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
          params: [],
        },
        setter: {
          name: "set_Padding",
          type: 8,
          sname: "set_padding",
          returnType: Object,
          params: [VEL.Skynet.Core.Toolbox.Geometry.Margin],
        },
      },
      {
        name: "Type",
        type: 16,
        returnType: VEL.Skynet.Core.View.ObjectDatas.Place.PlaceEnum,
        getter: {
          name: "get_Type",
          type: 8,
          sname: "get_type",
          returnType: VEL.Skynet.Core.View.ObjectDatas.Place.PlaceEnum,
          params: [],
        },
        setter: {
          name: "set_Type",
          type: 8,
          sname: "set_type",
          returnType: Object,
          params: [VEL.Skynet.Core.View.ObjectDatas.Place.PlaceEnum],
        },
      },
    ],
  });
  ss.setMetadata(a0, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Sprite")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "AspectRatio",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_AspectRatio",
          type: 8,
          sname: "get_aspectRatio",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_AspectRatio",
          type: 8,
          sname: "set_aspectRatio",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Height",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Height",
          type: 8,
          sname: "get_height",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Height",
          type: 8,
          sname: "set_height",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "Type",
        type: 16,
        returnType: VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteEnum,
        getter: {
          name: "get_Type",
          type: 8,
          sname: "get_type",
          returnType: VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteEnum,
          params: [],
        },
        setter: {
          name: "set_Type",
          type: 8,
          sname: "set_type",
          returnType: Object,
          params: [VEL.Skynet.Core.View.ObjectDatas.Sprite.SpriteEnum],
        },
      },
      {
        name: "Width",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Width",
          type: 8,
          sname: "get_width",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Width",
          type: 8,
          sname: "set_width",
          returnType: Object,
          params: [ss.Int32],
        },
      },
    ],
  });
  ss.setMetadata(a2, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Tile")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlSerializationIgnoreAttribute(),
        ],
        name: "CollisionMargin",
        type: 16,
        returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
        getter: {
          name: "get_CollisionMargin",
          type: 8,
          sname: "get_collisionMargin",
          returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
          params: [],
        },
        setter: {
          name: "set_CollisionMargin",
          type: 8,
          sname: "set_collisionMargin",
          returnType: Object,
          params: [VEL.Skynet.Core.Toolbox.Geometry.Margin],
        },
      },
      {
        name: "Faces",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Faces",
          type: 8,
          sname: "get_faces",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Faces",
          type: 8,
          sname: "set_faces",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "Shape",
        type: 16,
        returnType: VEL.Skynet.Core.View.ObjectDatas.TileShapeEnum,
        getter: {
          name: "get_Shape",
          type: 8,
          sname: "get_shape",
          returnType: VEL.Skynet.Core.View.ObjectDatas.TileShapeEnum,
          params: [],
        },
        setter: {
          name: "set_Shape",
          type: 8,
          sname: "set_shape",
          returnType: Object,
          params: [VEL.Skynet.Core.View.ObjectDatas.TileShapeEnum],
        },
      },
    ],
  });
  ss.setMetadata(am, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Connect")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Cap",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Cap",
          type: 8,
          sname: "get_cap",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Cap",
          type: 8,
          sname: "set_cap",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Colour",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Colour",
          type: 8,
          sname: "get_colour",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Colour",
          type: 8,
          sname: "set_colour",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Condition",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Condition",
          type: 8,
          sname: "get_condition$1",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Condition",
          type: 8,
          sname: "set_condition$1",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Thickness",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Thickness",
          type: 8,
          sname: "get_thickness",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Thickness",
          type: 8,
          sname: "set_thickness",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "XOffset",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_XOffset",
          type: 8,
          sname: "get_xOffset",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_XOffset",
          type: 8,
          sname: "set_xOffset",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "YOffset",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_YOffset",
          type: 8,
          sname: "get_yOffset",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_YOffset",
          type: 8,
          sname: "set_yOffset",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(ao, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "AspectRatio",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_AspectRatio",
          type: 8,
          sname: "get_aspectRatio",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_AspectRatio",
          type: 8,
          sname: "set_aspectRatio",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Binding",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Binding",
          type: 8,
          sname: "get_binding",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Binding",
          type: 8,
          sname: "set_binding",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Clipping",
        type: 16,
        returnType: aK,
        getter: {
          name: "get_Clipping",
          type: 8,
          sname: "get_clipping",
          returnType: aK,
          params: [],
        },
        setter: {
          name: "set_Clipping",
          type: 8,
          sname: "set_clipping",
          returnType: Object,
          params: [aK],
        },
      },
      {
        name: "Condition",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Condition",
          type: 8,
          sname: "get_condition",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Condition",
          type: 8,
          sname: "set_condition",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "EventTriggers",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_EventTriggers",
          type: 8,
          sname: "get_eventTriggers",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_EventTriggers",
          type: 8,
          sname: "set_eventTriggers",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "Height",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Height",
          type: 8,
          sname: "get_height",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Height",
          type: 8,
          sname: "set_height",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "Instances",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Instances",
          type: 8,
          sname: "get_instances",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Instances",
          type: 8,
          sname: "set_instances",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "IsVisible",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_IsVisible",
          type: 8,
          sname: "get_isVisible",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_IsVisible",
          type: 8,
          sname: "set_isVisible",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "Margin",
        type: 16,
        returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
        getter: {
          name: "get_Margin",
          type: 8,
          sname: "get_margin",
          returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
          params: [],
        },
        setter: {
          name: "set_Margin",
          type: 8,
          sname: "set_margin",
          returnType: Object,
          params: [VEL.Skynet.Core.Toolbox.Geometry.Margin],
        },
      },
      {
        name: "Opacity",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Opacity",
          type: 8,
          sname: "get_opacity",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Opacity",
          type: 8,
          sname: "set_opacity",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "OpacityWithParent",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_OpacityWithParent",
          type: 8,
          sname: "get_opacityWithParent",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_OpacityWithParent",
          type: 8,
          sname: "set_opacityWithParent",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "Origin",
        type: 16,
        returnType: kc,
        getter: {
          name: "get_Origin",
          type: 8,
          sname: "get_origin",
          returnType: kc,
          params: [],
        },
        setter: {
          name: "set_Origin",
          type: 8,
          sname: "set_origin",
          returnType: Object,
          params: [kc],
        },
      },
      {
        name: "RepeatX",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_RepeatX",
          type: 8,
          sname: "get_repeatX",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_RepeatX",
          type: 8,
          sname: "set_repeatX",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "RotateWithParent",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_RotateWithParent",
          type: 8,
          sname: "get_rotateWithParent",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_RotateWithParent",
          type: 8,
          sname: "set_rotateWithParent",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "ScaleWithParent",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_ScaleWithParent",
          type: 8,
          sname: "get_scaleWithParent",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_ScaleWithParent",
          type: 8,
          sname: "set_scaleWithParent",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "Stretch",
        type: 16,
        returnType: ke,
        getter: {
          name: "get_Stretch",
          type: 8,
          sname: "get_stretch",
          returnType: ke,
          params: [],
        },
        setter: {
          name: "set_Stretch",
          type: 8,
          sname: "set_stretch",
          returnType: Object,
          params: [ke],
        },
      },
      {
        name: "TranslateWithParent",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_TranslateWithParent",
          type: 8,
          sname: "get_translateWithParent",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_TranslateWithParent",
          type: 8,
          sname: "set_translateWithParent",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "UseParentScalingOrigin",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_UseParentScalingOrigin",
          type: 8,
          sname: "get_useParentScalingOrigin",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_UseParentScalingOrigin",
          type: 8,
          sname: "set_useParentScalingOrigin",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "UseParentsPosition",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_UseParentsPosition",
          type: 8,
          sname: "get_useParentsPosition",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_UseParentsPosition",
          type: 8,
          sname: "set_useParentsPosition",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "UseParentsRotationCenter",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_UseParentsRotationCenter",
          type: 8,
          sname: "get_useParentsRotationCenter",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_UseParentsRotationCenter",
          type: 8,
          sname: "set_useParentsRotationCenter",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "Width",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Width",
          type: 8,
          sname: "get_width",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Width",
          type: 8,
          sname: "set_width",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "X",
        type: 16,
        returnType: String,
        getter: {
          name: "get_X",
          type: 8,
          sname: "get_x",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_X",
          type: 8,
          sname: "set_x",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Y",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Y",
          type: 8,
          sname: "get_y",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Y",
          type: 8,
          sname: "set_y",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "ZLayer",
        type: 16,
        returnType: h3,
        getter: {
          name: "get_ZLayer",
          type: 8,
          sname: "get_zLayer",
          returnType: h3,
          params: [],
        },
        setter: {
          name: "set_ZLayer",
          type: 8,
          sname: "set_zLayer",
          returnType: Object,
          params: [h3],
        },
      },
      {
        name: "ZUnder",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_ZUnder",
          type: 8,
          sname: "get_zUnder",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_ZUnder",
          type: 8,
          sname: "set_zUnder",
          returnType: Object,
          params: [Boolean],
        },
      },
    ],
  });
  ss.setMetadata(aq, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("Decoration"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Graphics",
        type: 16,
        returnType: aL,
        getter: {
          name: "get_Graphics",
          type: 8,
          sname: "get_graphics",
          returnType: aL,
          params: [],
        },
        setter: {
          name: "set_Graphics",
          type: 8,
          sname: "set_graphics",
          returnType: Object,
          params: [aL],
        },
      },
      {
        name: "Text",
        type: 16,
        returnType: la,
        getter: {
          name: "get_Text",
          type: 8,
          sname: "get_text",
          returnType: la,
          params: [],
        },
        setter: {
          name: "set_Text",
          type: 8,
          sname: "set_text",
          returnType: Object,
          params: [la],
        },
      },
    ],
  });
  ss.setMetadata(aH, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Condition",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Condition",
          type: 8,
          sname: "get_condition",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Condition",
          type: 8,
          sname: "set_condition",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(aJ, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Group")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Children",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Children",
          type: 8,
          sname: "get_children",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Children",
          type: 8,
          sname: "set_children",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "Index",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Index",
          type: 8,
          sname: "get_index",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Index",
          type: 8,
          sname: "set_index",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(aL, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Graphics")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Children",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Children",
          type: 8,
          sname: "get_children",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Children",
          type: 8,
          sname: "set_children",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "Frame",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Frame",
          type: 8,
          sname: "get_frame",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Frame",
          type: 8,
          sname: "set_frame",
          returnType: Object,
          params: [String],
        },
      },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlSerializationIgnoreAttribute(),
        ],
        name: "FrameDuration",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_FrameDuration",
          type: 8,
          sname: "get_frameDuration",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_FrameDuration",
          type: 8,
          sname: "set_frameDuration",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "ImageQuality",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_ImageQuality",
          type: 8,
          sname: "get_imageQuality",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_ImageQuality",
          type: 8,
          sname: "set_imageQuality",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(aN, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Image")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlSerializationIgnoreAttribute(),
        ],
        name: "AspectRatio",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_AspectRatio",
          type: 8,
          sname: "get_aspectRatio",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_AspectRatio",
          type: 8,
          sname: "set_aspectRatio",
          returnType: Object,
          params: [Number],
        },
      },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlSerializationIgnoreAttribute(),
        ],
        name: "EdgeAlignSegment",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_EdgeAlignSegment",
          type: 8,
          sname: "get_edgeAlignSegment",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_EdgeAlignSegment",
          type: 8,
          sname: "set_edgeAlignSegment",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlSerializationIgnoreAttribute(),
        ],
        name: "Height",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Height",
          type: 8,
          sname: "get_height",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Height",
          type: 8,
          sname: "set_height",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlSerializationIgnoreAttribute(),
        ],
        name: "NineSlice",
        type: 16,
        returnType: VEL.Skynet.Core.Toolbox.Geometry.Point,
        getter: {
          name: "get_NineSlice",
          type: 8,
          sname: "get_nineSlice",
          returnType: VEL.Skynet.Core.Toolbox.Geometry.Point,
          params: [],
        },
        setter: {
          name: "set_NineSlice",
          type: 8,
          sname: "set_nineSlice",
          returnType: Object,
          params: [VEL.Skynet.Core.Toolbox.Geometry.Point],
        },
      },
      {
        name: "Src",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Src",
          type: 8,
          sname: "get_src",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Src",
          type: 8,
          sname: "set_src",
          returnType: Object,
          params: [String],
        },
      },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlSerializationIgnoreAttribute(),
        ],
        name: "Tint",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Tint",
          type: 8,
          sname: "get_tint",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Tint",
          type: 8,
          sname: "set_tint",
          returnType: Object,
          params: [String],
        },
      },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlSerializationIgnoreAttribute(),
        ],
        name: "Width",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Width",
          type: 8,
          sname: "get_width",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Width",
          type: 8,
          sname: "set_width",
          returnType: Object,
          params: [ss.Int32],
        },
      },
    ],
  });
  ss.setMetadata(aP, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Shape")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "CornerRadius",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_CornerRadius",
          type: 8,
          sname: "get_cornerRadius",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_CornerRadius",
          type: 8,
          sname: "set_cornerRadius",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Fill",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Fill",
          type: 8,
          sname: "get_fill",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Fill",
          type: 8,
          sname: "set_fill",
          returnType: Object,
          params: [String],
        },
      },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlSerializationIgnoreAttribute(),
        ],
        name: "FillGradient",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_FillGradient",
          type: 8,
          sname: "get_fillGradient",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_FillGradient",
          type: 8,
          sname: "set_fillGradient",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Stroke",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Stroke",
          type: 8,
          sname: "get_stroke",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Stroke",
          type: 8,
          sname: "set_stroke",
          returnType: Object,
          params: [String],
        },
      },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlSerializationIgnoreAttribute(),
        ],
        name: "StrokeStyle",
        type: 16,
        returnType: aT,
        getter: {
          name: "get_StrokeStyle",
          type: 8,
          sname: "get_strokeStyle",
          returnType: aT,
          params: [],
        },
        setter: {
          name: "set_StrokeStyle",
          type: 8,
          sname: "set_strokeStyle",
          returnType: Object,
          params: [aT],
        },
      },
      {
        name: "Thickness",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Thickness",
          type: 8,
          sname: "get_thickness",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Thickness",
          type: 8,
          sname: "set_thickness",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Type",
        type: 16,
        returnType: jj,
        getter: {
          name: "get_Type",
          type: 8,
          sname: "get_type",
          returnType: jj,
          params: [],
        },
        setter: {
          name: "set_Type",
          type: 8,
          sname: "set_type",
          returnType: Object,
          params: [jj],
        },
      },
    ],
  });
  ss.setMetadata(aR, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("SpriteSheet"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "ColumnProperty",
        type: 16,
        returnType: String,
        getter: {
          name: "get_ColumnProperty",
          type: 8,
          sname: "get_columnProperty",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_ColumnProperty",
          type: 8,
          sname: "set_columnProperty",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Columns",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Columns",
          type: 8,
          sname: "get_columns",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Columns",
          type: 8,
          sname: "set_columns",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "RowProperty",
        type: 16,
        returnType: String,
        getter: {
          name: "get_RowProperty",
          type: 8,
          sname: "get_rowProperty",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_RowProperty",
          type: 8,
          sname: "set_rowProperty",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Rows",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Rows",
          type: 8,
          sname: "get_rows",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Rows",
          type: 8,
          sname: "set_rows",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "Src",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Src",
          type: 8,
          sname: "get_src",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Src",
          type: 8,
          sname: "set_src",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Tint",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Tint",
          type: 8,
          sname: "get_tint",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Tint",
          type: 8,
          sname: "set_tint",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(b0, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute(
        "DecorationLayer"
      ),
    ],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(b2, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("FillLayer"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Colour",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Colour",
          type: 8,
          sname: "get_colour",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Colour",
          type: 8,
          sname: "set_colour",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(b6, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("GraphicsLayer"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Background",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Background",
          type: 8,
          sname: "get_background",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Background",
          type: 8,
          sname: "set_background",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Children",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Children",
          type: 8,
          sname: "get_children",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Children",
          type: 8,
          sname: "set_children",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "Z",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Z",
          type: 8,
          sname: "get_z",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Z",
          type: 8,
          sname: "set_z",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(b8, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Name",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Name",
          type: 8,
          sname: "get_name",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Name",
          type: 8,
          sname: "set_name",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Visibility",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_Visibility",
          type: 8,
          sname: "get_visibility",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_Visibility",
          type: 8,
          sname: "set_visibility",
          returnType: Object,
          params: [Boolean],
        },
      },
    ],
  });
  ss.setMetadata(c0, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("ObjectLayer"),
    ],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(c2, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Scene")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "AspectRatio",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_AspectRatio",
          type: 8,
          sname: "get_aspectRatio",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_AspectRatio",
          type: 8,
          sname: "set_aspectRatio",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "BackgroundFit",
        type: 16,
        returnType: b4,
        getter: {
          name: "get_BackgroundFit",
          type: 8,
          sname: "get_backgroundFit",
          returnType: b4,
          params: [],
        },
        setter: {
          name: "set_BackgroundFit",
          type: 8,
          sname: "set_backgroundFit",
          returnType: Object,
          params: [b4],
        },
      },
      {
        name: "Events",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Events",
          type: 8,
          sname: "get_events",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Events",
          type: 8,
          sname: "set_events",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "Height",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Height",
          type: 8,
          sname: "get_height",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Height",
          type: 8,
          sname: "set_height",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Layers",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Layers",
          type: 8,
          sname: "get_layers",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Layers",
          type: 8,
          sname: "set_layers",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "StartX",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_StartX",
          type: 8,
          sname: "get_startX",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_StartX",
          type: 8,
          sname: "set_startX",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "StartY",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_StartY",
          type: 8,
          sname: "get_startY",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_StartY",
          type: 8,
          sname: "set_startY",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "StartZ",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_StartZ",
          type: 8,
          sname: "get_startZ",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_StartZ",
          type: 8,
          sname: "set_startZ",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Width",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Width",
          type: 8,
          sname: "get_width",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Width",
          type: 8,
          sname: "set_width",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(d4, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("LayerImage"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Columns",
        type: 16,
        returnType: ss.makeGenericType(ss.Nullable$1, [ss.Int32]),
        getter: {
          name: "get_Columns",
          type: 8,
          sname: "get_columns",
          returnType: ss.makeGenericType(ss.Nullable$1, [ss.Int32]),
          params: [],
        },
        setter: {
          name: "set_Columns",
          type: 8,
          sname: "set_columns",
          returnType: Object,
          params: [ss.makeGenericType(ss.Nullable$1, [ss.Int32])],
        },
      },
      {
        name: "Src",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Src",
          type: 8,
          sname: "get_src",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Src",
          type: 8,
          sname: "set_src",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(d6, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("LayerShape"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Fill",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Fill",
          type: 8,
          sname: "get_fill",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Fill",
          type: 8,
          sname: "set_fill",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Type",
        type: 16,
        returnType: le,
        getter: {
          name: "get_Type",
          type: 8,
          sname: "get_type",
          returnType: le,
          params: [],
        },
        setter: {
          name: "set_Type",
          type: 8,
          sname: "set_type",
          returnType: Object,
          params: [le],
        },
      },
    ],
  });
  ss.setMetadata(d8, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "AspectRatio",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_AspectRatio",
          type: 8,
          sname: "get_aspectRatio",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_AspectRatio",
          type: 8,
          sname: "set_aspectRatio",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "CenterX",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_CenterX",
          type: 8,
          sname: "get_centerX",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_CenterX",
          type: 8,
          sname: "set_centerX",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "CenterY",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_CenterY",
          type: 8,
          sname: "get_centerY",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_CenterY",
          type: 8,
          sname: "set_centerY",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Children",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Children",
          type: 8,
          sname: "get_children",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Children",
          type: 8,
          sname: "set_children",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "Clipping",
        type: 16,
        returnType: aK,
        getter: {
          name: "get_Clipping",
          type: 8,
          sname: "get_clipping",
          returnType: aK,
          params: [],
        },
        setter: {
          name: "set_Clipping",
          type: 8,
          sname: "set_clipping",
          returnType: Object,
          params: [aK],
        },
      },
      {
        name: "Height",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Height",
          type: 8,
          sname: "get_height",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Height",
          type: 8,
          sname: "set_height",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "ImageQuality",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_ImageQuality",
          type: 8,
          sname: "get_imageQuality",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_ImageQuality",
          type: 8,
          sname: "set_imageQuality",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Name",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Name",
          type: 8,
          sname: "get_name",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Name",
          type: 8,
          sname: "set_name",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Opacity",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Opacity",
          type: 8,
          sname: "get_opacity",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Opacity",
          type: 8,
          sname: "set_opacity",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "RepeatColumns",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_RepeatColumns",
          type: 8,
          sname: "get_repeatColumns",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_RepeatColumns",
          type: 8,
          sname: "set_repeatColumns",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "RepeatRows",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_RepeatRows",
          type: 8,
          sname: "get_repeatRows",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_RepeatRows",
          type: 8,
          sname: "set_repeatRows",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "RepeatX",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_RepeatX",
          type: 8,
          sname: "get_repeatX",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_RepeatX",
          type: 8,
          sname: "set_repeatX",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "RepeatY",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_RepeatY",
          type: 8,
          sname: "get_repeatY",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_RepeatY",
          type: 8,
          sname: "set_repeatY",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Rotation",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Rotation",
          type: 8,
          sname: "get_rotation",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Rotation",
          type: 8,
          sname: "set_rotation",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Visibility",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_Visibility",
          type: 8,
          sname: "get_visibility",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_Visibility",
          type: 8,
          sname: "set_visibility",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "Width",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Width",
          type: 8,
          sname: "get_width",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Width",
          type: 8,
          sname: "set_width",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "X",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_X",
          type: 8,
          sname: "get_x",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_X",
          type: 8,
          sname: "set_x",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Y",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Y",
          type: 8,
          sname: "get_y",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Y",
          type: 8,
          sname: "set_y",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(f0, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Font")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "FillColour",
        type: 16,
        returnType: String,
        getter: {
          name: "get_FillColour",
          type: 8,
          sname: "get_fillColour",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_FillColour",
          type: 8,
          sname: "set_fillColour",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "FontName",
        type: 16,
        returnType: String,
        getter: {
          name: "get_FontName",
          type: 8,
          sname: "get_fontName",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_FontName",
          type: 8,
          sname: "set_fontName",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "FontSize",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_FontSize",
          type: 8,
          sname: "get_fontSize",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_FontSize",
          type: 8,
          sname: "set_fontSize",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "HasShadow",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_HasShadow",
          type: 8,
          sname: "get_hasShadow",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_HasShadow",
          type: 8,
          sname: "set_hasShadow",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "StrokeColour",
        type: 16,
        returnType: String,
        getter: {
          name: "get_StrokeColour",
          type: 8,
          sname: "get_strokeColour",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_StrokeColour",
          type: 8,
          sname: "set_strokeColour",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "StrokeWidth",
        type: 16,
        returnType: String,
        getter: {
          name: "get_StrokeWidth",
          type: 8,
          sname: "get_strokeWidth",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_StrokeWidth",
          type: 8,
          sname: "set_strokeWidth",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Weight",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Weight",
          type: 8,
          sname: "get_weight",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Weight",
          type: 8,
          sname: "set_weight",
          returnType: Object,
          params: [ss.Int32],
        },
      },
    ],
  });
  ss.setMetadata(f2, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute(null)],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: ".ctor",
        type: 1,
        params: [
          VEL.Skynet.Core.Toolbox.Geometry.Point,
          VEL.Skynet.Core.Toolbox.Geometry.Point,
        ],
        sname: "$ctor1",
      },
      {
        name: "GetCanvasGradient",
        type: 8,
        sname: "getCanvasGradient",
        returnType: CanvasGradient,
        params: [
          CanvasRenderingContext2D,
          VEL.Skynet.Core.Toolbox.Geometry.Size,
        ],
      },
      {
        name: "Children",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Children",
          type: 8,
          sname: "get_children",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Children",
          type: 8,
          sname: "set_children",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "EndPoint",
        type: 16,
        returnType: VEL.Skynet.Core.Toolbox.Geometry.Point,
        getter: {
          name: "get_EndPoint",
          type: 8,
          sname: "get_endPoint",
          returnType: VEL.Skynet.Core.Toolbox.Geometry.Point,
          params: [],
        },
        setter: {
          name: "set_EndPoint",
          type: 8,
          sname: "set_endPoint",
          returnType: Object,
          params: [VEL.Skynet.Core.Toolbox.Geometry.Point],
        },
      },
      {
        name: "StartPoint",
        type: 16,
        returnType: VEL.Skynet.Core.Toolbox.Geometry.Point,
        getter: {
          name: "get_StartPoint",
          type: 8,
          sname: "get_startPoint",
          returnType: VEL.Skynet.Core.Toolbox.Geometry.Point,
          params: [],
        },
        setter: {
          name: "set_StartPoint",
          type: 8,
          sname: "set_startPoint",
          returnType: Object,
          params: [VEL.Skynet.Core.Toolbox.Geometry.Point],
        },
      },
    ],
  });
  ss.setMetadata(f6, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute(
        "GradientSection"
      ),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Colour",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Colour",
          type: 8,
          sname: "get_colour",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Colour",
          type: 8,
          sname: "set_colour",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Offset",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Offset",
          type: 8,
          sname: "get_offset",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Offset",
          type: 8,
          sname: "set_offset",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(a7, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute("Palette")],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlChildTagAttribute(
            String,
            "Colour"
          ),
        ],
        name: "Children",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Children",
          type: 8,
          sname: "get_children",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Children",
          type: 8,
          sname: "set_children",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "Name",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Name",
          type: 8,
          sname: "$0",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Name",
          type: 8,
          sname: "$1",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(h8, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute(
        "AnimationCollection"
      ),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      { name: "Clone", type: 8, sname: "clone", returnType: h8, params: [] },
      {
        name: "DecorationsX",
        type: 16,
        returnType: String,
        getter: {
          name: "get_DecorationsX",
          type: 8,
          sname: "get_decorationsX",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_DecorationsX",
          type: 8,
          sname: "set_decorationsX",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "DecorationsY",
        type: 16,
        returnType: String,
        getter: {
          name: "get_DecorationsY",
          type: 8,
          sname: "get_decorationsY",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_DecorationsY",
          type: 8,
          sname: "set_decorationsY",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "MaxRepeats",
        type: 16,
        returnType: ss.makeGenericType(ss.Nullable$1, [ss.Int32]),
        getter: {
          name: "get_MaxRepeats",
          type: 8,
          sname: "get_maxRepeats",
          returnType: ss.makeGenericType(ss.Nullable$1, [ss.Int32]),
          params: [],
        },
        setter: {
          name: "set_MaxRepeats",
          type: 8,
          sname: "set_maxRepeats",
          returnType: Object,
          params: [ss.makeGenericType(ss.Nullable$1, [ss.Int32])],
        },
      },
      {
        name: "Repeat",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_Repeat",
          type: 8,
          sname: "get_repeat",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_Repeat",
          type: 8,
          sname: "set_repeat",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "ResourceName",
        type: 16,
        returnType: String,
        getter: {
          name: "get_ResourceName",
          type: 8,
          sname: "get_resourceName",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_ResourceName",
          type: 8,
          sname: "set_resourceName",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(ia, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Blocking",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_Blocking",
          type: 8,
          sname: "get_blocking",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_Blocking",
          type: 8,
          sname: "set_blocking",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "Name",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Name",
          type: 8,
          sname: "get_name",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Name",
          type: 8,
          sname: "set_name",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "TargetName",
        type: 16,
        returnType: String,
        getter: {
          name: "get_TargetName",
          type: 8,
          sname: "get_targetName",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_TargetName",
          type: 8,
          sname: "set_targetName",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(ic, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute(
        "AnimationSequence"
      ),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      { name: "Clone", type: 8, sname: "clone", returnType: ic, params: [] },
    ],
  });
  ss.setMetadata(ie, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Children",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Children",
          type: 8,
          sname: "get_children",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Children",
          type: 8,
          sname: "set_children",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "Delay",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Delay",
          type: 8,
          sname: "get_delay",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Delay",
          type: 8,
          sname: "set_delay",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(ih, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute(
        "BindingAnimation"
      ),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "AxisRatio",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_AxisRatio",
          type: 8,
          sname: "get_$axisRatio",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_AxisRatio",
          type: 8,
          sname: "set_$axisRatio",
          returnType: Object,
          params: [Number],
        },
      },
      {
        attr: [new VEL.Skynet.Core.Toolbox.Serialization.XmlChildAttribute()],
        name: "Binding",
        type: 16,
        returnType: i1,
        getter: {
          name: "get_Binding",
          type: 8,
          sname: "$0",
          returnType: i1,
          params: [],
        },
        setter: {
          name: "set_Binding",
          type: 8,
          sname: "$1",
          returnType: Object,
          params: [i1],
        },
      },
      {
        name: "CenterX",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_CenterX",
          type: 8,
          sname: "get_$centerX",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_CenterX",
          type: 8,
          sname: "set_$centerX",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "CenterY",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_CenterY",
          type: 8,
          sname: "get_$centerY",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_CenterY",
          type: 8,
          sname: "set_$centerY",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "IgnoreParent",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_IgnoreParent",
          type: 8,
          sname: "$2",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_IgnoreParent",
          type: 8,
          sname: "$3",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "Input",
        type: 16,
        returnType: ij,
        getter: {
          name: "get_Input",
          type: 8,
          sname: "$4",
          returnType: ij,
          params: [],
        },
        setter: {
          name: "set_Input",
          type: 8,
          sname: "$5",
          returnType: Object,
          params: [ij],
        },
      },
      {
        name: "MaxChangePerSecond",
        type: 16,
        returnType: ss.makeGenericType(ss.Nullable$1, [Number]),
        getter: {
          name: "get_MaxChangePerSecond",
          type: 8,
          sname: "$6",
          returnType: ss.makeGenericType(ss.Nullable$1, [Number]),
          params: [],
        },
        setter: {
          name: "set_MaxChangePerSecond",
          type: 8,
          sname: "$7",
          returnType: Object,
          params: [ss.makeGenericType(ss.Nullable$1, [Number])],
        },
      },
      {
        name: "Output",
        type: 16,
        returnType: il,
        getter: {
          name: "get_Output",
          type: 8,
          sname: "$8",
          returnType: il,
          params: [],
        },
        setter: {
          name: "set_Output",
          type: 8,
          sname: "$9",
          returnType: Object,
          params: [il],
        },
      },
    ],
  });
  ss.setMetadata(io, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("ClearAnimation"),
    ],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(it, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute(
        "DecorationAnimation"
      ),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        attr: [new VEL.Skynet.Core.Toolbox.Serialization.XmlChildAttribute()],
        name: "Animation",
        type: 16,
        returnType: ia,
        getter: {
          name: "get_Animation",
          type: 8,
          sname: "get_animation",
          returnType: ia,
          params: [],
        },
        setter: {
          name: "set_Animation",
          type: 8,
          sname: "set_animation",
          returnType: Object,
          params: [ia],
        },
      },
      {
        name: "AspectRatio",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_AspectRatio",
          type: 8,
          sname: "get_aspectRatio",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_AspectRatio",
          type: 8,
          sname: "set_aspectRatio",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Binding",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Binding",
          type: 8,
          sname: "get_binding",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Binding",
          type: 8,
          sname: "set_binding",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Fill",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Fill",
          type: 8,
          sname: "get_fill",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Fill",
          type: 8,
          sname: "set_fill",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "FontName",
        type: 16,
        returnType: String,
        getter: {
          name: "get_FontName",
          type: 8,
          sname: "get_fontName",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_FontName",
          type: 8,
          sname: "set_fontName",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "FontSize",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_FontSize",
          type: 8,
          sname: "get_fontSize",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_FontSize",
          type: 8,
          sname: "set_fontSize",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "FontWeight",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_FontWeight",
          type: 8,
          sname: "get_fontWeight",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_FontWeight",
          type: 8,
          sname: "set_fontWeight",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "Graphics",
        type: 16,
        returnType: aL,
        getter: {
          name: "get_Graphics",
          type: 8,
          sname: "get_graphics",
          returnType: aL,
          params: [],
        },
        setter: {
          name: "set_Graphics",
          type: 8,
          sname: "set_graphics",
          returnType: Object,
          params: [aL],
        },
      },
      {
        name: "HasShadow",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_HasShadow",
          type: 8,
          sname: "get_hasShadow",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_HasShadow",
          type: 8,
          sname: "set_hasShadow",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "Height",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Height",
          type: 8,
          sname: "get_height",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Height",
          type: 8,
          sname: "set_height",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Instances",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Instances",
          type: 8,
          sname: "get_instances",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Instances",
          type: 8,
          sname: "set_instances",
          returnType: Object,
          params: [ss.Int32],
        },
      },
      {
        name: "Origin",
        type: 16,
        returnType: kc,
        getter: {
          name: "get_Origin",
          type: 8,
          sname: "get_origin",
          returnType: kc,
          params: [],
        },
        setter: {
          name: "set_Origin",
          type: 8,
          sname: "set_origin",
          returnType: Object,
          params: [kc],
        },
      },
      {
        name: "RepeatX",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_RepeatX",
          type: 8,
          sname: "get_repeatX",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_RepeatX",
          type: 8,
          sname: "set_repeatX",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "StrokeColour",
        type: 16,
        returnType: String,
        getter: {
          name: "get_StrokeColour",
          type: 8,
          sname: "get_strokeColour",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_StrokeColour",
          type: 8,
          sname: "set_strokeColour",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "StrokeWidth",
        type: 16,
        returnType: String,
        getter: {
          name: "get_StrokeWidth",
          type: 8,
          sname: "get_strokeWidth",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_StrokeWidth",
          type: 8,
          sname: "set_strokeWidth",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "UseTypeSetting",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_UseTypeSetting",
          type: 8,
          sname: "get_useTypeSetting",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_UseTypeSetting",
          type: 8,
          sname: "set_useTypeSetting",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "Width",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Width",
          type: 8,
          sname: "get_width",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Width",
          type: 8,
          sname: "set_width",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "X",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_X",
          type: 8,
          sname: "get_x",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_X",
          type: 8,
          sname: "set_x",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Y",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Y",
          type: 8,
          sname: "get_y",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Y",
          type: 8,
          sname: "set_y",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "ZLayer",
        type: 16,
        returnType: h3,
        getter: {
          name: "get_ZLayer",
          type: 8,
          sname: "get_zLayer",
          returnType: h3,
          params: [],
        },
        setter: {
          name: "set_ZLayer",
          type: 8,
          sname: "set_zLayer",
          returnType: Object,
          params: [h3],
        },
      },
    ],
  });
  ss.setMetadata(iv, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Ease",
        type: 16,
        returnType: iG,
        getter: {
          name: "get_Ease",
          type: 8,
          sname: "get_ease",
          returnType: iG,
          params: [],
        },
        setter: {
          name: "set_Ease",
          type: 8,
          sname: "set_ease",
          returnType: Object,
          params: [iG],
        },
      },
    ],
  });
  ss.setMetadata(iz, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("FrameAnimation"),
    ],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(iB, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute(
        "FrameRampAnimation"
      ),
    ],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(iD, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute(
        "OpacityAnimation"
      ),
    ],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(iF, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute(
        "PhysicsAnimation1D"
      ),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "ConstantForce",
        type: 16,
        returnType: String,
        getter: {
          name: "get_ConstantForce",
          type: 8,
          sname: "get_constantForce",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_ConstantForce",
          type: 8,
          sname: "set_constantForce",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Drag",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Drag",
          type: 8,
          sname: "get_drag",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Drag",
          type: 8,
          sname: "set_drag",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "InitialSpeed",
        type: 16,
        returnType: String,
        getter: {
          name: "get_InitialSpeed",
          type: 8,
          sname: "get_initialSpeed",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_InitialSpeed",
          type: 8,
          sname: "set_initialSpeed",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "TargetProperty",
        type: 16,
        returnType: b7,
        getter: {
          name: "get_TargetProperty",
          type: 8,
          sname: "get_targetProperty",
          returnType: b7,
          params: [],
        },
        setter: {
          name: "set_TargetProperty",
          type: 8,
          sname: "set_targetProperty",
          returnType: Object,
          params: [b7],
        },
      },
    ],
  });
  ss.setMetadata(iH, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute(
        "RotateAnimation"
      ),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "AxisRatio",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_AxisRatio",
          type: 8,
          sname: "get_$axisRatio",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_AxisRatio",
          type: 8,
          sname: "set_$axisRatio",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "CenterX",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_CenterX",
          type: 8,
          sname: "get_$centerX",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_CenterX",
          type: 8,
          sname: "set_$centerX",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "CenterY",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_CenterY",
          type: 8,
          sname: "get_$centerY",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_CenterY",
          type: 8,
          sname: "set_$centerY",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "TargetProperty",
        type: 16,
        returnType: b5,
        getter: {
          name: "get_TargetProperty",
          type: 8,
          sname: "get_targetProperty",
          returnType: b5,
          params: [],
        },
        setter: {
          name: "set_TargetProperty",
          type: 8,
          sname: "set_targetProperty",
          returnType: Object,
          params: [b5],
        },
      },
    ],
  });
  ss.setMetadata(iJ, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("ScaleAnimation"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "TargetProperty",
        type: 16,
        returnType: iL,
        getter: {
          name: "get_TargetProperty",
          type: 8,
          sname: "get_targetProperty",
          returnType: iL,
          params: [],
        },
        setter: {
          name: "set_TargetProperty",
          type: 8,
          sname: "set_targetProperty",
          returnType: Object,
          params: [iL],
        },
      },
    ],
  });
  ss.setMetadata(iN, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("SoundAnimation"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Sounds",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Sounds",
          type: 8,
          sname: "get_sounds",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Sounds",
          type: 8,
          sname: "set_sounds",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "StartTime",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_StartTime",
          type: 8,
          sname: "get_startTime",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_StartTime",
          type: 8,
          sname: "set_startTime",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(iP, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Duration",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Duration",
          type: 8,
          sname: "get_duration",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Duration",
          type: 8,
          sname: "set_duration",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "RepeatTime",
        type: 16,
        returnType: String,
        getter: {
          name: "get_RepeatTime",
          type: 8,
          sname: "get_repeatTime",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_RepeatTime",
          type: 8,
          sname: "set_repeatTime",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "StartTime",
        type: 16,
        returnType: String,
        getter: {
          name: "get_StartTime",
          type: 8,
          sname: "get_startTime",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_StartTime",
          type: 8,
          sname: "set_startTime",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(iR, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute(
        "TranslateAnimation"
      ),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Coordinates",
        type: 16,
        returnType: iT,
        getter: {
          name: "get_Coordinates",
          type: 8,
          sname: "get_coordinates",
          returnType: iT,
          params: [],
        },
        setter: {
          name: "set_Coordinates",
          type: 8,
          sname: "set_coordinates",
          returnType: Object,
          params: [iT],
        },
      },
      {
        name: "TargetProperty",
        type: 16,
        returnType: b7,
        getter: {
          name: "get_TargetProperty",
          type: 8,
          sname: "get_targetProperty",
          returnType: b7,
          params: [],
        },
        setter: {
          name: "set_TargetProperty",
          type: 8,
          sname: "set_targetProperty",
          returnType: Object,
          params: [b7],
        },
      },
    ],
  });
  ss.setMetadata(iV, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "EndValue",
        type: 16,
        returnType: Object,
        getter: {
          name: "get_EndValue",
          type: 8,
          sname: "get_endValue",
          returnType: Object,
          params: [],
        },
        setter: {
          name: "set_EndValue",
          type: 8,
          sname: "set_endValue",
          returnType: Object,
          params: [Object],
        },
      },
      {
        name: "StartValue",
        type: 16,
        returnType: Object,
        getter: {
          name: "get_StartValue",
          type: 8,
          sname: "get_startValue",
          returnType: Object,
          params: [],
        },
        setter: {
          name: "set_StartValue",
          type: 8,
          sname: "set_startValue",
          returnType: Object,
          params: [Object],
        },
      },
      {
        name: "ValueChange",
        type: 16,
        returnType: Object,
        getter: {
          name: "get_ValueChange",
          type: 8,
          sname: "get_valueChange",
          returnType: Object,
          params: [],
        },
        setter: {
          name: "set_ValueChange",
          type: 8,
          sname: "set_valueChange",
          returnType: Object,
          params: [Object],
        },
      },
    ],
  });
  ss.setMetadata(iX, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute(
        "VisibilityAnimation"
      ),
    ],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(i1, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute(null)],
    members: [
      { name: ".cctor", type: 1, params: [] },
      { name: ".ctor", type: 1, params: [] },
      { name: "Clone", type: 8, sname: "$0", returnType: i1, params: [] },
      {
        name: "GetOutput",
        type: 8,
        sname: "getOutput",
        returnType: Number,
        params: [Number],
      },
      {
        name: "GetRandomNumber",
        type: 8,
        sname: "getRandomNumber",
        returnType: Number,
        params: [],
      },
      {
        name: "ActualOffset",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_ActualOffset",
          type: 8,
          sname: "get_actualOffset",
          returnType: Number,
          params: [],
        },
      },
      {
        name: "ActualScale",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_ActualScale",
          type: 8,
          sname: "get_actualScale",
          returnType: Number,
          params: [],
        },
      },
      {
        name: "Offset",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Offset",
          type: 8,
          sname: "get_offset",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Offset",
          type: 8,
          sname: "set_offset",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "RandomOffset",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_RandomOffset",
          type: 8,
          sname: "get_randomOffset",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_RandomOffset",
          type: 8,
          sname: "set_randomOffset",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "RandomScale",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_RandomScale",
          type: 8,
          sname: "get_randomScale",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_RandomScale",
          type: 8,
          sname: "set_randomScale",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Scale",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Scale",
          type: 8,
          sname: "get_scale",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Scale",
          type: 8,
          sname: "set_scale",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "random",
        isStatic: true,
        type: 4,
        returnType: VEL.Skynet.Core.Toolbox.Maths.PseudoRandom,
        sname: "random",
      },
    ],
  });
  ss.setMetadata(i3, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute(null)],
    members: [
      { name: ".ctor", type: 1, params: [] },
      { name: "Clone", type: 8, sname: "$0", returnType: i1, params: [] },
      {
        name: "GetOutput",
        type: 8,
        sname: "getOutput",
        returnType: Number,
        params: [Number],
      },
    ],
  });
  ss.setMetadata(i5, {
    attr: [new VEL.Skynet.Global.Serialization.XmlClassAttribute(null)],
    members: [
      { name: ".ctor", type: 1, params: [] },
      { name: "Clone", type: 8, sname: "$0", returnType: i1, params: [] },
      {
        name: "GetOutput",
        type: 8,
        sname: "getOutput",
        returnType: Number,
        params: [Number],
      },
      {
        name: "Frequency",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Frequency",
          type: 8,
          sname: "get_frequency",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Frequency",
          type: 8,
          sname: "set_frequency",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "RandomPhase",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_RandomPhase",
          type: 8,
          sname: "get_randomPhase",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_RandomPhase",
          type: 8,
          sname: "set_randomPhase",
          returnType: Object,
          params: [Boolean],
        },
      },
    ],
  });
  ss.setMetadata(iy, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("BounceEase"),
    ],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(iC, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("CircularEase"),
    ],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(iG, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "EasingMode",
        type: 16,
        returnType: iI,
        getter: {
          name: "get_EasingMode",
          type: 8,
          sname: "get_easingMode",
          returnType: iI,
          params: [],
        },
        setter: {
          name: "set_EasingMode",
          type: 8,
          sname: "set_easingMode",
          returnType: Object,
          params: [iI],
        },
      },
    ],
  });
  ss.setMetadata(iM, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("ElasticEase"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Springiness",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Springiness",
          type: 8,
          sname: "get_springiness",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Springiness",
          type: 8,
          sname: "set_springiness",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(iQ, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("QuadraticEase"),
    ],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(iU, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("SinusoidalEase"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Decay",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Decay",
          type: 8,
          sname: "get_decay",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Decay",
          type: 8,
          sname: "set_decay",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "Frequency",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Frequency",
          type: 8,
          sname: "get_frequency",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Frequency",
          type: 8,
          sname: "set_frequency",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Phase",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Phase",
          type: 8,
          sname: "get_phase",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Phase",
          type: 8,
          sname: "set_phase",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "RandomPhase",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_RandomPhase",
          type: 8,
          sname: "get_randomPhase",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_RandomPhase",
          type: 8,
          sname: "set_randomPhase",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "Scale",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Scale",
          type: 8,
          sname: "get_scale",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Scale",
          type: 8,
          sname: "set_scale",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(jB, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("SceneEvent"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Children",
        type: 16,
        returnType: Array,
        getter: {
          name: "get_Children",
          type: 8,
          sname: "get_children",
          returnType: Array,
          params: [],
        },
        setter: {
          name: "set_Children",
          type: 8,
          sname: "set_children",
          returnType: Object,
          params: [Array],
        },
      },
      {
        name: "MaxDelay",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_MaxDelay",
          type: 8,
          sname: "get_maxDelay",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_MaxDelay",
          type: 8,
          sname: "set_maxDelay",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "MinDelay",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_MinDelay",
          type: 8,
          sname: "get_minDelay",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_MinDelay",
          type: 8,
          sname: "set_minDelay",
          returnType: Object,
          params: [Number],
        },
      },
      {
        name: "StartImmediately",
        type: 16,
        returnType: Boolean,
        getter: {
          name: "get_StartImmediately",
          type: 8,
          sname: "get_startImmediately",
          returnType: Boolean,
          params: [],
        },
        setter: {
          name: "set_StartImmediately",
          type: 8,
          sname: "set_startImmediately",
          returnType: Object,
          params: [Boolean],
        },
      },
      {
        name: "Types",
        type: 16,
        returnType: String,
        getter: {
          name: "get_Types",
          type: 8,
          sname: "get_types",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_Types",
          type: 8,
          sname: "set_types",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(k0, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("CollapsedGlyph"),
    ],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(k1, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("ContentPanel"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Direction",
        type: 16,
        returnType:
          VEL.Skynet.Core.View.Layouts.Containers.LayoutDirectionEnum,
        getter: {
          name: "get_Direction",
          type: 8,
          sname: "get_direction",
          returnType:
            VEL.Skynet.Core.View.Layouts.Containers.LayoutDirectionEnum,
          params: [],
        },
        setter: {
          name: "set_Direction",
          type: 8,
          sname: "set_direction",
          returnType: Object,
          params: [
            VEL.Skynet.Core.View.Layouts.Containers.LayoutDirectionEnum,
          ],
        },
      },
      {
        name: "FooterText",
        type: 16,
        returnType: k3,
        getter: {
          name: "get_FooterText",
          type: 8,
          sname: "get_footerText",
          returnType: k3,
          params: [],
        },
        setter: {
          name: "set_FooterText",
          type: 8,
          sname: "set_footerText",
          returnType: Object,
          params: [k3],
        },
      },
      {
        name: "HeaderText",
        type: 16,
        returnType: k5,
        getter: {
          name: "get_HeaderText",
          type: 8,
          sname: "get_headerText",
          returnType: k5,
          params: [],
        },
        setter: {
          name: "set_HeaderText",
          type: 8,
          sname: "set_headerText",
          returnType: Object,
          params: [k5],
        },
      },
      {
        name: "InstructionMargin",
        type: 16,
        returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
        getter: {
          name: "get_InstructionMargin",
          type: 8,
          sname: "get_instructionMargin",
          returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
          params: [],
        },
        setter: {
          name: "set_InstructionMargin",
          type: 8,
          sname: "set_instructionMargin",
          returnType: Object,
          params: [VEL.Skynet.Core.Toolbox.Geometry.Margin],
        },
      },
      {
        name: "MainContent",
        type: 16,
        returnType: k8,
        getter: {
          name: "get_MainContent",
          type: 8,
          sname: "get_mainContent",
          returnType: k8,
          params: [],
        },
        setter: {
          name: "set_MainContent",
          type: 8,
          sname: "set_mainContent",
          returnType: Object,
          params: [k8],
        },
      },
      {
        name: "Margin",
        type: 16,
        returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
        getter: {
          name: "get_Margin",
          type: 8,
          sname: "get_margin",
          returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
          params: [],
        },
        setter: {
          name: "set_Margin",
          type: 8,
          sname: "set_margin",
          returnType: Object,
          params: [VEL.Skynet.Core.Toolbox.Geometry.Margin],
        },
      },
      {
        name: "Shape",
        type: 16,
        returnType: k2,
        getter: {
          name: "get_Shape",
          type: 8,
          sname: "get_shape",
          returnType: k2,
          params: [],
        },
        setter: {
          name: "set_Shape",
          type: 8,
          sname: "set_shape",
          returnType: Object,
          params: [k2],
        },
      },
    ],
  });
  ss.setMetadata(k3, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("FooterText"),
    ],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(k4, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Percentage",
        type: 16,
        returnType: Number,
        getter: {
          name: "get_Percentage",
          type: 8,
          sname: "get_percentage",
          returnType: Number,
          params: [],
        },
        setter: {
          name: "set_Percentage",
          type: 8,
          sname: "set_percentage",
          returnType: Object,
          params: [Number],
        },
      },
    ],
  });
  ss.setMetadata(k5, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("HeaderText"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "MaxGlyphSize",
        type: 16,
        returnType: ss.makeGenericType(ss.Nullable$1, [Number]),
        getter: {
          name: "get_MaxGlyphSize",
          type: 8,
          sname: "get_maxGlyphSize",
          returnType: ss.makeGenericType(ss.Nullable$1, [Number]),
          params: [],
        },
        setter: {
          name: "set_MaxGlyphSize",
          type: 8,
          sname: "set_maxGlyphSize",
          returnType: Object,
          params: [ss.makeGenericType(ss.Nullable$1, [Number])],
        },
      },
    ],
  });
  ss.setMetadata(k6, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("HiddenGlyph"),
    ],
    members: [{ name: ".ctor", type: 1, params: [] }],
  });
  ss.setMetadata(k7, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("ImageGlyph"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "CorrectSrc",
        type: 16,
        returnType: String,
        getter: {
          name: "get_CorrectSrc",
          type: 8,
          sname: "get_correctSrc",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_CorrectSrc",
          type: 8,
          sname: "set_correctSrc",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "IncorrectSrc",
        type: 16,
        returnType: String,
        getter: {
          name: "get_IncorrectSrc",
          type: 8,
          sname: "get_incorrectSrc",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_IncorrectSrc",
          type: 8,
          sname: "set_incorrectSrc",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "SoundPlayingSrc",
        type: 16,
        returnType: String,
        getter: {
          name: "get_SoundPlayingSrc",
          type: 8,
          sname: "get_soundPlayingSrc",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_SoundPlayingSrc",
          type: 8,
          sname: "set_soundPlayingSrc",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "SoundSrc",
        type: 16,
        returnType: String,
        getter: {
          name: "get_SoundSrc",
          type: 8,
          sname: "get_soundSrc",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_SoundSrc",
          type: 8,
          sname: "set_soundSrc",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(k8, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("MainContent"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "Alignment",
        type: 16,
        returnType: VEL.Skynet.Core.View.ObjectControls.HorizontalAlignEnum,
        getter: {
          name: "get_Alignment",
          type: 8,
          sname: "get_alignment",
          returnType: VEL.Skynet.Core.View.ObjectControls.HorizontalAlignEnum,
          params: [],
        },
        setter: {
          name: "set_Alignment",
          type: 8,
          sname: "set_alignment",
          returnType: Object,
          params: [VEL.Skynet.Core.View.ObjectControls.HorizontalAlignEnum],
        },
      },
      {
        name: "Direction",
        type: 16,
        returnType:
          VEL.Skynet.Core.View.Layouts.Containers.LayoutDirectionEnum,
        getter: {
          name: "get_Direction",
          type: 8,
          sname: "get_direction",
          returnType:
            VEL.Skynet.Core.View.Layouts.Containers.LayoutDirectionEnum,
          params: [],
        },
        setter: {
          name: "set_Direction",
          type: 8,
          sname: "set_direction",
          returnType: Object,
          params: [
            VEL.Skynet.Core.View.Layouts.Containers.LayoutDirectionEnum,
          ],
        },
      },
      {
        name: "Font",
        type: 16,
        returnType: f0,
        getter: {
          name: "get_Font",
          type: 8,
          sname: "get_font",
          returnType: f0,
          params: [],
        },
        setter: {
          name: "set_Font",
          type: 8,
          sname: "set_font",
          returnType: Object,
          params: [f0],
        },
      },
      {
        attr: [
          new VEL.Skynet.Core.Toolbox.Serialization.XmlSerializationIgnoreAttribute(),
        ],
        name: "ImageBackground",
        type: 16,
        returnType: String,
        getter: {
          name: "get_ImageBackground",
          type: 8,
          sname: "get_imageBackground",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_ImageBackground",
          type: 8,
          sname: "set_imageBackground",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "Margin",
        type: 16,
        returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
        getter: {
          name: "get_Margin",
          type: 8,
          sname: "get_margin",
          returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
          params: [],
        },
        setter: {
          name: "set_Margin",
          type: 8,
          sname: "set_margin",
          returnType: Object,
          params: [VEL.Skynet.Core.Toolbox.Geometry.Margin],
        },
      },
    ],
  });
  ss.setMetadata(k9, {
    attr: [
      new VEL.Skynet.Global.Serialization.XmlClassAttribute("PathGlyph"),
    ],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "CorrectColour",
        type: 16,
        returnType: String,
        getter: {
          name: "get_CorrectColour",
          type: 8,
          sname: "get_correctColour",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_CorrectColour",
          type: 8,
          sname: "set_correctColour",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "IncorrectColour",
        type: 16,
        returnType: String,
        getter: {
          name: "get_IncorrectColour",
          type: 8,
          sname: "get_incorrectColour",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_IncorrectColour",
          type: 8,
          sname: "set_incorrectColour",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "SoundColour",
        type: 16,
        returnType: String,
        getter: {
          name: "get_SoundColour",
          type: 8,
          sname: "get_soundColour",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_SoundColour",
          type: 8,
          sname: "set_soundColour",
          returnType: Object,
          params: [String],
        },
      },
      {
        name: "StrokeColour",
        type: 16,
        returnType: String,
        getter: {
          name: "get_StrokeColour",
          type: 8,
          sname: "get_strokeColour",
          returnType: String,
          params: [],
        },
        setter: {
          name: "set_StrokeColour",
          type: 8,
          sname: "set_strokeColour",
          returnType: Object,
          params: [String],
        },
      },
    ],
  });
  ss.setMetadata(la, {
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "CollapsedPercentage",
        type: 16,
        returnType: ss.makeGenericType(ss.Nullable$1, [ss.Int32]),
        getter: {
          name: "get_CollapsedPercentage",
          type: 8,
          sname: "get_collapsedPercentage",
          returnType: ss.makeGenericType(ss.Nullable$1, [ss.Int32]),
          params: [],
        },
        setter: {
          name: "set_CollapsedPercentage",
          type: 8,
          sname: "set_collapsedPercentage",
          returnType: Object,
          params: [ss.makeGenericType(ss.Nullable$1, [ss.Int32])],
        },
      },
      {
        name: "Font",
        type: 16,
        returnType: f0,
        getter: {
          name: "get_Font",
          type: 8,
          sname: "get_font",
          returnType: f0,
          params: [],
        },
        setter: {
          name: "set_Font",
          type: 8,
          sname: "set_font",
          returnType: Object,
          params: [f0],
        },
      },
      {
        name: "Glyph",
        type: 16,
        returnType: k4,
        getter: {
          name: "get_Glyph",
          type: 8,
          sname: "get_glyph",
          returnType: k4,
          params: [],
        },
        setter: {
          name: "set_Glyph",
          type: 8,
          sname: "set_glyph",
          returnType: Object,
          params: [k4],
        },
      },
      {
        name: "Margin",
        type: 16,
        returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
        getter: {
          name: "get_Margin",
          type: 8,
          sname: "get_margin",
          returnType: VEL.Skynet.Core.Toolbox.Geometry.Margin,
          params: [],
        },
        setter: {
          name: "set_Margin",
          type: 8,
          sname: "set_margin",
          returnType: Object,
          params: [VEL.Skynet.Core.Toolbox.Geometry.Margin],
        },
      },
      {
        name: "Percentage",
        type: 16,
        returnType: ss.Int32,
        getter: {
          name: "get_Percentage",
          type: 8,
          sname: "get_percentage",
          returnType: ss.Int32,
          params: [],
        },
        setter: {
          name: "set_Percentage",
          type: 8,
          sname: "set_percentage",
          returnType: Object,
          params: [ss.Int32],
        },
      },
    ],
  });
  (function () {
    kR.$0 = new ss.Random();
    kR.baseDir = null;
  })();
  (function () {
    lp.$0 = new kR();
  })();
  (function () {
    lB.$6 = new (ss.makeGenericType(lF, [Object]))("canvas");
    lB.$8 = new (ss.makeGenericType(lF, [Object]))("canvas");
    lB.$5 = new (ss.makeGenericType(lF, [Object]))("audio");
    lB.$7 = new (ss.makeGenericType(lF, [Object]))("img");
  })();
  (function () {
    lN.$6 = false;
    lN.$7 = null;
    lN.$1$1 = null;
  })();
  (function () {
    ll.$5 = "//user.cdn.skynet.net/";
    ll.$7 = 0;
    ll.$6 = 0;
  })();
  (function () {
    lv.genericFontFamilies = [
      "serif",
      "sans-serif",
      "monospace",
      "fantasy",
      "cursive",
    ];
  })();
  (function () {
    hK.$c = 1.5;
    hK.$1$1 = false;
    hK.$b = null;
    hK.$1$2 = null;
    hK.$1$3 = null;
    hK.$a = 0;
  })();
  (function () {
    g3.$1 = new g9(null);
  })();
  (function () {
    lH.useAssertLeak = false;
  })();
  (function () {
    jL.$0 = [1, 0, 2];
  })();
  (function () {
    iq.$1 = new VEL.Skynet.Core.Toolbox.Maths.PseudoRandom(
      ss.utcNow().getMilliseconds()
    );
    iq.$0 = 0;
  })();
  (function () {
    ik.$8 = null;
    ik.$1$1 = false;
  })();
  (function () {
    i9.$0 = -1;
  })();
  (function () {
    hV.$9 = " *(-?\\d+%?) *";
    hV.$8 = " *(\\s*[\\d\\.]*%?) *";
    hV.$a = new RegExp(
      "^(#?([0-9a-f]{3}|[0-9a-f]{6})|(rgb|hsl)a?\\( *(-?\\d+%?) *[,\\s]+ *(-?\\d+%?) *[,\\s]+ *(-?\\d+%?) *[,\\s]{0,1} *(\\s*[\\d\\.]*%?) *\\))$"
    );
  })();
  (function () {
    ii.$3 = null;
  })();
  (function () {
    iS.$0 = "Hz";
  })();
  (function () {
    aa.$0 = new ss.Random();
  })();
  (function () {
    ja.$h = '{0}px RedditSansMedium, "Reddit Sans", Rubik, Arial, sans-serif';
    ja.$i = "RedditSansMedium";
    ja.$l = 10;
    ja.$o = 30;
    ja.$n = 17;
    ja.$m = 2;
    ja.$g = 0.95;
    ja.$f = 2;
    ja.$j = 1280;
    ja.$k = 0.00025;
    ja.$p = 30;
    ja.$e = 2;
    ja.$c = 2;
    ja.$d = 1;
  })();
  (function () {
    jT.$7 = 3;
    jT.$6 = false;
  })();
  (function () {
    je.$0 = null;
  })();
  (function () {
    kF.$1 = 50;
    kF.$0 = 70;
  })();
  (function () {
    f7.$1 = 15;
    f7.$0 = 350;
    f7.$2 = 10;
  })();
  (function () {
    jp.$0 = new VEL.Skynet.Core.Toolbox.Geometry.Margin(240);
  })();
  (function () {
    jz.$3 = 0.01;
    jz.$2 = 100;
    jz.$1 = 1700;
    jz.$0 = 0.7;
  })();
  (function () {
    j4.$0 = 1000;
  })();
  (function () {
    g4.$0 = 1.8;
  })();
  (function () {
    kM.$0 = 0.66667;
    kM.$1 = 0.4;
  })();
  (function () {
    au.$0 = 600;
  })();
  (function () {
    kW.$4 = [
      [
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.1, 0.55),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.375, 0.825),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.9, 0.2),
      ],
    ];
    kW.$0 = [
      [
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.2, 0.8),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.8, 0.2),
      ],
      [
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.2, 0.2),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.8, 0.8),
      ],
    ];
    kW.$1 = [
      [
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.02, 0.38),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.05, 0.28),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.25, 0.26),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.25, 0.72),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.05, 0.72),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.02, 0.62),
      ],
      [
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.27, 0.31),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.52, 0.05),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.52, 0.95),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          0.27,
          0.6899999999999999
        ),
      ],
    ];
    kW.$2 = [
      [
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          0.6899999999999999,
          0.3
        ),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.73, 0.38),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.75, 0.46),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.75, 0.54),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.73, 0.62),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          0.6899999999999999,
          0.7
        ),
      ],
      [
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.85, 0.21),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.91, 0.32),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.93, 0.44),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(
          0.93,
          0.5600000000000001
        ),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.91, 0.68),
        new VEL.Skynet.Core.Toolbox.Geometry.Point.$ctor1(0.85, 0.79),
      ],
    ];
    kW.$3 = [kW.$2[0]];
  })();
  (function () {
    i7.$1 = null;
    i7.$2 = 0;
    i7.$1$1 = false;
    i7.$1$2 = null;
    i7.$1$3 = null;
  })();
  (function () {
    j0.$e = new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(
      "Who jumped over the brown dog?",
      1
    );
    j0.$9 = new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(
      "The quick brown fox",
      1
    );
    var a = new VEL.Skynet.Core.ContentModels.Entities.Item();
    a.set_text(j0.$9);
    j0.$c = a;
    j0.$8 = new VEL.Skynet.Core.ContentModels.ItemWrappers.AnswerItem(j0.$c);
    j0.$a = new VEL.Skynet.Core.ContentModels.ItemWrappers.GroupItem(j0.$c);
    var A = new VEL.Skynet.Core.View.ObjectDatas.Tile.TestTileData(
      j0.$e,
      j0.$9,
      null,
      null,
      0,
      0,
      1,
      1
    );
    var C = new VEL.Skynet.Core.View.ObjectDatas.Tile.TestTileData(
      j0.$e,
      j0.$9,
      null,
      null,
      0,
      0,
      3,
      1
    );
    var b = new VEL.Skynet.Core.View.ObjectDatas.Tile.TestTileData(
      j0.$e,
      j0.$9,
      null,
      null,
      0,
      0,
      2,
      1
    );
    var c = new VEL.Skynet.Core.View.ObjectDatas.Tile.TestTileData(
      j0.$e,
      j0.$9,
      null,
      null,
      0,
      0,
      4,
      1
    );
    var d = new VEL.Skynet.Core.View.ObjectDatas.Tile.TestTileData(
      j0.$e,
      j0.$9,
      null,
      null,
      0,
      0,
      29,
      0
    );
    var f = new VEL.Skynet.Core.View.ObjectDatas.Tile.TestBigTileData(
      new VEL.Skynet.Core.ContentModels.ItemWrappers.DoubleItem(j0.$c),
      0,
      false,
      true,
      5
    );
    var g = new VEL.Skynet.Core.View.ObjectDatas.Tile.TestBigTileData(
      new VEL.Skynet.Core.ContentModels.ItemWrappers.DoubleItem(j0.$c),
      0,
      false,
      true,
      6
    );
    var h =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.CorrectOrIncorrectMarkingTileData.$ctor1(
        false,
        true
      );
    var i =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.CrosswordTileData.$ctor1(
        "A",
        new VEL.Skynet.Core.View.ObjectDatas.Place.CrosswordPlaceData(),
        false,
        false
      );
    var a =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.WordsearchTileData.$ctor1(
        "B",
        0,
        0,
        0
      );
    a.set_isSizeDynamic(false);
    var j =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.HangmanLetterTileData.$ctor1(
        "Y",
        0,
        0
      );
    var k =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.HangmanAlphabetTileData.$ctor1(
        "C",
        0
      );
    var l = new VEL.Skynet.Core.View.ObjectDatas.Tile.SegmentTileData.$ctor1(
      new VEL.Skynet.Core.ContentModels.ItemWrappers.SingleItem(j0.$c),
      VEL.Skynet.Core.Toolbox.Geometry.Angle.fromDegrees(60),
      0,
      0,
      0,
      false
    );
    var m =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.WheelInstructionTileData.$ctor1(
        j0.$e
      );
    var n =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.WordMagnetsTileData.$ctor1(
        new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6(
          "alphabetically",
          1
        ),
        0
      );
    var o = new VEL.Skynet.Core.ContentModels.Entities.Item();
    o.set_text(
      new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6("Joshua", 1)
    );
    var p = new VEL.Skynet.Core.View.ObjectDatas.Tile.SeatingTileData.$ctor1(
      false,
      new VEL.Skynet.Core.ContentModels.ItemWrappers.StudentItem(o),
      null
    );
    var q = new VEL.Skynet.Core.View.ObjectDatas.Tile.LabelPinTileData.$ctor1(
      0,
      new VEL.Skynet.Core.View.ObjectDatas.Tile.LabelLabelTileData.$ctor1(
        j0.$9,
        0,
        null,
        null,
        null
      )
    );
    var r =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.MazeChaseTileData.$ctor1(
        VEL.Skynet.Core.Toolbox.Geometry.Point.empty,
        j0.$8
      );
    var s =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.OpenTheBoxQuestionTileData.$ctor1(
        0,
        0,
        j0.$e,
        null,
        null
      );
    var t =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.OpenTheBoxAnswerTileData.$ctor1(
        j0.$8,
        0
      );
    var u = new VEL.Skynet.Core.View.ObjectDatas.Tile.ReviewTileData.$ctor1(
      0,
      0,
      0
    );
    var v = new VEL.Skynet.Core.View.ObjectDatas.Tile.GameshowStageTileData();
    var w =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.GameshowQuizScoreTitleTileData(
        new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6("Title", 1)
      );
    var x =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.GameshowQuizScoreValueTileData(
        new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6("123", 1)
      );
    var y = new VEL.Skynet.Core.View.ObjectDatas.Tile.LifelineTileData.$ctor1(
      4,
      0,
      0
    );
    var z =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.GameshowQuizBonusTileData.$ctor1(
        6,
        0
      );
    var B =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.BalloonLevelSignTileData.$ctor1(
        0
      );
    var D = new VEL.Skynet.Core.View.ObjectDatas.Tile.CargoTileData.$ctor1(
      0,
      null
    );
    var E = new VEL.Skynet.Core.View.ObjectDatas.Tile.BlimpTileData(0);
    var F = new VEL.Skynet.Core.View.ObjectDatas.Tile.TruckTileData.$ctor1(
      0,
      0,
      0
    );
    var G = new VEL.Skynet.Core.View.ObjectDatas.Tile.TruckTileData.$ctor1(
      0,
      3,
      0
    );
    var H =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.BalloonScoreBannerTileData.$ctor1(
        "Balloon"
      );
    var I =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.WhackMoleTileData.$ctor1(
        0,
        0
      );
    var J =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.WhackSignTileData.$ctor1(
        0,
        0
      );
    var K =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.WhackSignTileData.$ctor3(
        0,
        1,
        "hello",
        new VEL.Skynet.Core.DataStructures.WordwallXml.$ctor6("world", 1)
      );
    var L = new VEL.Skynet.Core.View.ObjectDatas.Tile.AirplaneTileData.$ctor1(
      VEL.Skynet.Core.Toolbox.Geometry.Point.empty
    );
    var M =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.WinOrLoseQuizBetTileData(
        0,
        100
      );
    var N = new VEL.Skynet.Core.View.ObjectDatas.Tile.ConveyorTileData.$ctor1(
      new VEL.Skynet.Core.ContentModels.ItemWrappers.SingleItem(j0.$c),
      0,
      0,
      true,
      null,
      0
    );
    var O =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.SpeedSortingConveyorTileData.$ctor1(
        new VEL.Skynet.Core.ContentModels.ItemWrappers.SingleItem(j0.$c),
        0,
        0,
        new VEL.Skynet.Core.View.ObjectDatas.Conveyor.ConveyorData(),
        0
      );
    var P =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.SpeedSortingBinTileData.$ctor1(
        j0.$a.get_text(),
        j0.$a.get_image(),
        0
      );
    P.shape = 39;
    var Q =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.SpeedSortingBinTileData.$ctor1(
        j0.$a.get_text(),
        j0.$a.get_image(),
        0
      );
    Q.shape = 40;
    var R =
      new VEL.Skynet.Core.View.ObjectDatas.Tile.FlyingFruitAnswerTileData.$ctor1(
        j0.$8
      );
    var S = new VEL.Skynet.Core.View.ObjectDatas.Tile.TypeTheAnswerTileData();
    var T = new VEL.Skynet.Core.View.ObjectDatas.Tile.TestTileData(
      j0.$9,
      null,
      null,
      null,
      0,
      0,
      44,
      0
    );
    T.primaryGlyph = 2;
    j0.$g = [
      A,
      C,
      b,
      c,
      d,
      f,
      g,
      h,
      i,
      a,
      j,
      k,
      l,
      m,
      n,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      B,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
    ];
    j0.$b = [
      new VEL.Skynet.Core.View.ObjectDatas.Image.ImageData(),
      new VEL.Skynet.Core.View.ObjectDatas.Image.LabeledDiagramImageData(),
    ];
    j0.$d = [
      new VEL.Skynet.Core.View.ObjectDatas.Place.SeatingFloorPlaceData.$ctor1(
        10,
        10
      ),
    ];
    var A =
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.Wheel.ArrowSpriteData();
    var C =
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.Airplane.AirplanePlayerSpriteData(
        10
      );
    var b =
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.Airplane.AirplaneArrowSpriteData.$ctor1(
        1
      );
    var c =
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.Airplane.AirplaneSmokeSpriteData();
    var d =
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.MazeChase.MazeChasePlayerSpriteData();
    var f =
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.MazeChase.MazeChaseArrowSpriteData();
    var g =
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.MazeChase.MazeChaseEnemySpriteData();
    var a =
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.MazeChase.MazeChaseMapSpriteData.$ctor1(
        0,
        VEL.Skynet.Core.Toolbox.Geometry.Vector.get_empty()
      );
    a.paletteIndex = 0;
    j0.$f = [
      A,
      C,
      b,
      c,
      d,
      f,
      g,
      a,
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.Airplane.AirplaneSmokeSpriteData.$ctor1(
        6,
        VEL.Skynet.Core.Toolbox.Geometry.Vector.get_empty(),
        1
      ),
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.Balloon.BonusBalloonSpriteData(
        0
      ),
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.Hangman.HangmanGallowsSpriteData(
        0
      ),
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.OpenTheBox.OpenTheBoxLockSpriteData(
        0
      ),
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.Sound.AnswerSoundSpriteData(),
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.Wheel.WheelBackgroundSpriteData(),
      new VEL.Skynet.Core.View.ObjectDatas.Sprite.Wheel.WheelDividerSpriteData(),
    ];
  })();
  (function () {
    jc.$0 = 5;
  })();
  (function () {
    kn.$0 = new VEL.Skynet.Core.Toolbox.Geometry.Size(640, 480);
  })();
  (function () {
    j9.$3 = 200;
    j9.$6 = 16;
    j9.$2 = 13;
    j9.$4 = 2;
    j9.$5 = 8;
    j9.$1 = 1.9;
    j9.$0 = 80;
  })();
  (function () {
    kt.$4 = 60;
    kt.$7 = 26;
    kt.$2 = 1;
    kt.$b = 1;
    kt.$1 = 500;
    kt.$0 = 150000;
    kt.$8 = 20;
    kt.$5 = 60;
    kt.$9 = 80;
    kt.$a = 320;
    kt.$3 = 160;
    kt.$6 = 1;
  })();
  (function () {
    jG.$0 = 3.5;
  })();
  (function () {
    jI.$3 = 55;
    jI.$2 = 4;
    jI.$1 = 2;
    jI.$0 = 57;
  })();
  (function () {
    kB.$0 = 80;
    kB.$1 = 12;
  })();
  (function () {
    kP.$0 = 16;
  })();
  (function () {
    jO.$2 = 2;
    jO.$1 = 1;
    jO.$3 = 8;
    jO.$0 = 24;
    jO.$4 = 4;
  })();
  (function () {
    kL.$0 = 200;
  })();
  (function () {
    e2.$0 = new e6("black");
    e2.$7 = new e6("white");
    e2.$6 = new e6("transparent");
    e2.$5 = new e6("red");
    e2.$1 = new e6("blue");
    e2.$8 = new e6("yellow");
    e2.$3 = new e6("green");
    e2.$2 = new e6("#00FFFF");
    e2.$4 = new e6("#FF00FF");
  })();
  (function () {
    jV.$k = new e6("#35B7FF");
    jV.$h = new e6("#38C3FF");
    jV.$d = new e6("#111111");
    jV.$e = new e6("#444444");
    jV.$i = e2.$7;
    jV.$1 = new jV(8, 1);
    jV.$m = new jV(0, 1);
    jV.$j = new jV(2, 1);
    jV.$g = new jV(3, 1);
    jV.$f = new jV(4, 1);
    jV.$l = new jV(5, 1);
    jV.$0 = new jV(1, 1);
    jV.$9 = new jV(6, 0.8);
    jV.$3 = new jV(6, 0.2);
    jV.$5 = new jV(6, 1);
    jV.$2 = new jV(7, 0.7);
    jV.$6 = new jV(7, 0.8);
    jV.$b = new jV(7, 0.4);
    jV.$8 = new jV(7, 0.5);
    jV.$a = new jV(6, 0.5);
    jV.$7 = new jV(6, 0.7);
    jV.$4 = new jV(6, 0.2);
    jV.$c = jV.$g;
  })();
  (function () {
    jQ.$2 = 24;
    jQ.$4 = new jV(0, 0.8);
    jQ.$3 = new jV(0, 1);
    jQ.$1 = new jV(0, 0.2);
    jQ.$0 = new jV(0, 0.1);
  })();
  (function () {
    kf.$0 = 320;
  })();
  (function () {
    jg.$1 = 0.09;
    jg.$2 = 12;
    jg.$0 = 3000;
  })();
  (function () {
    jY.$5 = new jV(0, 1);
    jY.$6 = new jV(8, 1);
    jY.$0 = new jV(5, 1);
    jY.$1 = new jV(4, 0.8);
    jY.$2 = new jV(3, 0.5);
    jY.$4 = 32;
    jY.$3 = 3;
  })();
  (function () {
    j1.$0 = 16;
  })();
  (function () {
    jF.$0 = 0.005;
  })();
  (function () {
    jP.$0 = [1, 0, 2];
  })();
  (function () {
    a5.$0 = 0;
  })();
  (function () {
    id.$b = 200;
    id.$q = Enumerable.from(ss.Enum.getValues(lM))
      .select(function (a) {
        return ss.cast(a, lM);
      })
      .toDictionary(
        function (a) {
          return a;
        },
        function (a) {
          return 0;
        },
        lM,
        Number
      );
    id.$j = Enumerable.from(ss.Enum.getValues(lM))
      .select(function (a) {
        return ss.cast(a, lM);
      })
      .toDictionary(
        function (a) {
          return a;
        },
        function (a) {
          return 0;
        },
        lM,
        Number
      );
    id.$r = false;
    id.$h = false;
    id.$g = 0.25;
    id.$d = null;
    id.$k = null;
    id.$o = null;
    id.$e = null;
    id.$c = null;
    id.$i = null;
    id.$n = null;
    id.$l = null;
    id.$m = null;
    id.$p = null;
    id.$f = 0;
  })();
  (function () {
    im.$3 = null;
  })();
  (function () {
    h1.$h = false;
    h1.$g = null;
    h1.loadingText =
      "abcdwxyz āćď αβγ جبأ רשת กขฃ абв աբգ अइउ ぁぃぅ 丁丂七 ァィゥ அஇஉ აბგ 가각갂";
    h1.$d = "abcdwxyz";
    h1.$5 = "āćď";
    h1.$7 = "αβγ";
    h1.$1 = "جبأ";
    h1.$a = "רשת";
    h1.$f = "กขฃ";
    h1.$3 = "абв";
    h1.$2 = "աբգ";
    h1.$4 = "अइउ";
    h1.$b = "ぁぃぅ";
    h1.$8 = "丁丂七";
    h1.$c = "ァィゥ";
    h1.$e = "அஇஉ";
    h1.$6 = "აბგ";
    h1.$9 = "가각갂";
    var a = document.createElement("canvas");
    var b = ss.cast(
      a,
      ss.isValue(a) && ss.isInstanceOfType(a, Element) && a.tagName === "CANVAS"
    );
    b.width = 1;
    b.height = 1;
    h1.$g = ss.cast(b.getContext("2d"), CanvasRenderingContext2D);
    var c = h1.$g.measureText(
      "abcdwxyz āćď αβγ جبأ רשת กขฃ абв աբգ अइउ ぁぃぅ 丁丂七 ァィゥ அஇஉ აბგ 가각갂"
    ).actualBoundingBoxAscent;
    h1.$h =
      !isNaN(c) && !(navigator.userAgent.toLowerCase().indexOf("firefox") > -1);
  })();
  (function () {
    hM.$c = 0;
    hM.$f = 0;
    hM.$e = 0;
    hM.$d = 0;
    hM.$g = 0;
    hM.$h = null;
    hM.$i = 0;
    var a = new e8();
    a.set_fontSize(10 * hK.$0());
    a.set_fontName("RedditSansMedium");
    a.set_fillColour(e2.$0);
    hM.$b = a;
  })();
  (function () {
    hC.$0 = 2;
  })();
  (function () {
    ki.$2 = new ss.Random();
    ki.$1 = new iK.$ctor1(0.7, 2);
  })();
  (function () {
    ig.$7 = null;
    ig.$6 = null;
  })();
  (function () {
    ky.$4 = 30;
    ky.$3$1 = false;
  })();
  (function () {
    a8.$3 = ".js-render-canvas";
  })();
  (function () {
    e0.$5 = null;
  })();
  (function () {
    ln.$0 = 100;
  })();
  (function () {
    ab.$0 = 50;
  })();
  (function () {
    i1.random = null;
    i1.random = new VEL.Skynet.Core.Toolbox.Maths.PseudoRandom(
      ss.utcNow().getMilliseconds()
    );
  })();
})();
