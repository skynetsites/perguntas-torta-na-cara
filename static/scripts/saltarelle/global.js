(function () {
  var aa = {};
  global.VEL = global.VEL || {};
  global.VEL.Skynet = global.VEL.Skynet || {};
  global.VEL.Skynet.Global = global.VEL.Skynet.Global || {};
  global.VEL.Skynet.Global.Enums = global.VEL.Skynet.Global.Enums || {};
  global.VEL.Skynet.Global.Extensions =
    global.VEL.Skynet.Global.Extensions || {};
  global.VEL.Skynet.Global.Interop = global.VEL.Skynet.Global.Interop || {};
  global.VEL.Skynet.Global.Json = global.VEL.Skynet.Global.Json || {};
  global.VEL.Skynet.Global.Json.AIContentGeneration =
    global.VEL.Skynet.Global.Json.AIContentGeneration || {};
  global.VEL.Skynet.Global.Json.GoogleClassroom =
    global.VEL.Skynet.Global.Json.GoogleClassroom || {};
  global.VEL.Skynet.Global.Json.Requests =
    global.VEL.Skynet.Global.Json.Requests || {};
  global.VEL.Skynet.Global.Serialization =
    global.VEL.Skynet.Global.Serialization || {};
  global.VEL.Skynet.Global.Server = global.VEL.Skynet.Global.Server || {};
  ss.initAssembly(aa, "VEL.Skynet.Global");
  var ac = function () {};
  ac.__typeName = "ServerHelper";
  ac.get_isLoggedIn = function () {
    return ServerModel.userId !== 0;
  };
  ac.get_isGuest = function () {
    return ServerModel.userId === 0;
  };
  global.ServerHelper = ac;
  var a5 = function () {};
  a5.__typeName = "VEL.Skynet.Global.IActivityPreloader";
  global.VEL.Skynet.Global.IActivityPreloader = a5;
  var ef = function () {};
  ef.__typeName = "VEL.Skynet.Global.PreloaderLogEnum";
  global.VEL.Skynet.Global.PreloaderLogEnum = ef;
  var eS = function () {};
  eS.__typeName = "VEL.Skynet.Global.Enums.ActivityOptionsScope";
  global.VEL.Skynet.Global.Enums.ActivityOptionsScope = eS;
  var eU = function () {};
  eU.__typeName = "VEL.Skynet.Global.Enums.ActivityTagType";
  global.VEL.Skynet.Global.Enums.ActivityTagType = eU;
  var eW = function () {};
  eW.__typeName = "VEL.Skynet.Global.Enums.AiGenerationFeedbackTypeEnum";
  global.VEL.Skynet.Global.Enums.AiGenerationFeedbackTypeEnum = eW;
  var eY = function () {};
  eY.__typeName = "VEL.Skynet.Global.Enums.AudioSetting";
  global.VEL.Skynet.Global.Enums.AudioSetting = eY;
  var e0 = function () {};
  e0.__typeName = "VEL.Skynet.Global.Enums.CancellationReasonEnum";
  global.VEL.Skynet.Global.Enums.CancellationReasonEnum = e0;
  var e2 = function () {};
  e2.__typeName = "VEL.Skynet.Global.Enums.ConsentType";
  global.VEL.Skynet.Global.Enums.ConsentType = e2;
  var e4 = function () {};
  e4.__typeName = "VEL.Skynet.Global.Enums.DeviceType";
  global.VEL.Skynet.Global.Enums.DeviceType = e4;
  var e6 = function () {};
  e6.__typeName = "VEL.Skynet.Global.Enums.EventType";
  global.VEL.Skynet.Global.Enums.EventType = e6;
  var e8 = function () {};
  e8.__typeName = "VEL.Skynet.Global.Enums.ExperimentTriggerType";
  global.VEL.Skynet.Global.Enums.ExperimentTriggerType = e8;
  var fa = function () {};
  fa.__typeName = "VEL.Skynet.Global.Enums.ExportEnum";
  global.VEL.Skynet.Global.Enums.ExportEnum = fa;
  var fc = function () {};
  fc.__typeName = "VEL.Skynet.Global.Enums.FeatureRuleTargetType";
  global.VEL.Skynet.Global.Enums.FeatureRuleTargetType = fc;
  var fe = function () {};
  fe.__typeName = "VEL.Skynet.Global.Enums.FeatureSwitchType";
  global.VEL.Skynet.Global.Enums.FeatureSwitchType = fe;
  var fg = function () {};
  fg.__typeName = "VEL.Skynet.Global.Enums.FeatureSwitchTypeExtensions";
  fg.isCodeDefined = function (a) {
    return ss.contains(fg.codeDefinedTypes, a);
  };
  global.VEL.Skynet.Global.Enums.FeatureSwitchTypeExtensions = fg;
  var fi = function () {};
  fi.__typeName = "VEL.Skynet.Global.Enums.FolderColor";
  global.VEL.Skynet.Global.Enums.FolderColor = fi;
  var fk = function () {};
  fk.__typeName = "VEL.Skynet.Global.Enums.FormatEnum";
  global.VEL.Skynet.Global.Enums.FormatEnum = fk;
  var fm = function () {};
  fm.__typeName = "VEL.Skynet.Global.Enums.GameOverOptionsEnum";
  global.VEL.Skynet.Global.Enums.GameOverOptionsEnum = fm;
  var fo = function () {};
  fo.__typeName = "VEL.Skynet.Global.Enums.GenAIMethod";
  global.VEL.Skynet.Global.Enums.GenAIMethod = fo;
  var fq = function () {};
  fq.__typeName = "VEL.Skynet.Global.Enums.GoogleClassroomAssignToOption";
  global.VEL.Skynet.Global.Enums.GoogleClassroomAssignToOption = fq;
  var fs = function () {};
  fs.__typeName = "VEL.Skynet.Global.Enums.HomeworkType";
  global.VEL.Skynet.Global.Enums.HomeworkType = fs;
  var fu = function () {};
  fu.__typeName = "VEL.Skynet.Global.Enums.MyActivitiesVariation";
  global.VEL.Skynet.Global.Enums.MyActivitiesVariation = fu;
  var fw = function () {};
  fw.__typeName = "VEL.Skynet.Global.Enums.NpsSurveyUserProfileEnum";
  global.VEL.Skynet.Global.Enums.NpsSurveyUserProfileEnum = fw;
  var fy = function () {};
  fy.__typeName = "VEL.Skynet.Global.Enums.OptionalEditorActions";
  global.VEL.Skynet.Global.Enums.OptionalEditorActions = fy;
  var ab = function () {};
  ab.__typeName = "VEL.Skynet.Global.Enums.PageIds";
  global.VEL.Skynet.Global.Enums.PageIds = ab;
  var ad = function () {};
  ad.__typeName = "VEL.Skynet.Global.Enums.PolicyUpdateMode";
  global.VEL.Skynet.Global.Enums.PolicyUpdateMode = ad;
  var a6 = function () {};
  a6.__typeName = "VEL.Skynet.Global.Enums.PrintActions";
  global.VEL.Skynet.Global.Enums.PrintActions = a6;
  var eg = function () {};
  eg.__typeName = "VEL.Skynet.Global.Enums.RegionalSocialMedia";
  global.VEL.Skynet.Global.Enums.RegionalSocialMedia = eg;
  var eT = function () {};
  eT.__typeName = "VEL.Skynet.Global.Enums.RegistrationMode";
  global.VEL.Skynet.Global.Enums.RegistrationMode = eT;
  var eV = function () {};
  eV.__typeName = "VEL.Skynet.Global.Enums.SampledEventType";
  global.VEL.Skynet.Global.Enums.SampledEventType = eV;
  var eX = function () {};
  eX.__typeName = "VEL.Skynet.Global.Enums.ShareLocation";
  global.VEL.Skynet.Global.Enums.ShareLocation = eX;
  var eZ = function () {};
  eZ.__typeName = "VEL.Skynet.Global.Enums.SubscriptionRequiredFeatureEnum";
  global.VEL.Skynet.Global.Enums.SubscriptionRequiredFeatureEnum = eZ;
  var e1 = function () {};
  e1.__typeName = "VEL.Skynet.Global.Enums.TemplateVisibility";
  global.VEL.Skynet.Global.Enums.TemplateVisibility = e1;
  var e3 = function () {};
  e3.__typeName = "VEL.Skynet.Global.Enums.TemplateVisibilityExtension";
  e3.isTemplateVisible = function (a) {
    return e3.$0(a);
  };
  e3.isTemplateVisible$1 = function (a) {
    return e3.$0(a);
  };
  e3.$0 = function (a) {
    return a === 2 || a === 5 || a === 6;
  };
  global.VEL.Skynet.Global.Enums.TemplateVisibilityExtension = e3;
  var e5 = function () {};
  e5.__typeName = "VEL.Skynet.Global.Enums.TextToSpeechSpeedOption";
  global.VEL.Skynet.Global.Enums.TextToSpeechSpeedOption = e5;
  var e7 = function () {};
  e7.__typeName = "VEL.Skynet.Global.Enums.TextToSpeechSpeedOptionExtensions";
  e7.getRate = function (a) {
    switch (a) {
      case 0:
        return "0.6";
      case 1:
        return "0.8";
      case 2:
        return "1.0";
      case 3:
        return "1.3";
      default:
        throw new ss.NotImplementedException(
          "Not supported TTS speed value: " + ss.Enum.getName(e5, a) + "."
        );
    }
  };
  global.VEL.Skynet.Global.Enums.TextToSpeechSpeedOptionExtensions = e7;
  var e9 = function () {};
  e9.__typeName = "VEL.Skynet.Global.Enums.ThemeActions";
  global.VEL.Skynet.Global.Enums.ThemeActions = e9;
  var fb = function () {};
  fb.__typeName = "VEL.Skynet.Global.Enums.UserJobType";
  global.VEL.Skynet.Global.Enums.UserJobType = fb;
  var fd = function () {};
  fd.__typeName = "VEL.Skynet.Global.Extensions.DateTimeExtensions";
  fd.toUnix = function (a) {
    return a - new Date(1970, 1 - 1, 1);
  };
  fd.fromUnix = function (a) {
    return new Date(a);
  };
  global.VEL.Skynet.Global.Extensions.DateTimeExtensions = fd;
  var ff = function () {
    this.x = 0;
    this.y = 0;
  };
  ff.__typeName = "VEL.Skynet.Global.Extensions.IntPoint";
  ff.$ctor1 = function (a, b) {
    this.x = 0;
    this.y = 0;
    this.x = a;
    this.y = b;
  };
  global.VEL.Skynet.Global.Extensions.IntPoint = ff;
  var fh = function () {};
  fh.__typeName = "VEL.Skynet.Global.Extensions.NumberExtensions";
  fh.clamp$1 = function (a) {
    return function (b, c, d) {
      if (ss.isNullOrUndefined(b)) {
        return b;
      }
      if (ss.compare(b, c) < 0) {
        return c;
      }
      if (ss.compare(b, d) > 0) {
        return d;
      }
      return b;
    };
  };
  fh.clamp = function (a, b, c) {
    if (ss.isValue(b) && a < ss.unbox(b)) {
      return ss.unbox(b);
    }
    if (ss.isValue(c) && a > ss.unbox(c)) {
      return ss.unbox(c);
    }
    return a;
  };
  global.VEL.Skynet.Global.Extensions.NumberExtensions = fh;
  var fj = function () {};
  fj.__typeName = "VEL.Skynet.Global.Extensions.StringExtensions";
  fj.toArrayOfIntegers = function (a) {
    return ss.isNullOrEmptyString(a)
      ? []
      : Enumerable.from(a.split(String.fromCharCode(44)))
          .select(function (b) {
            return parseInt(b);
          })
          .toArray();
  };
  fj.toArrayOfDoubles = function (a) {
    return ss.isNullOrEmptyString(a)
      ? []
      : Enumerable.from(a.split(String.fromCharCode(44)))
          .select(function (b) {
            return parseFloat(b);
          })
          .toArray();
  };
  fj.toSwitchDictionary = function (a) {
    return ss.cast(
      Enumerable.from(a.split(String.fromCharCode(44)))
        .select(function (b) {
          return ss.netSplit(
            b,
            [58].map(function (c) {
              return String.fromCharCode(c);
            }),
            2
          );
        })
        .where(function (b) {
          return (
            b.length === 2 &&
            Enumerable.from(b).all(function (c) {
              return !ss.isNullOrEmptyString(c.trim());
            })
          );
        })
        .toDictionary(
          function (b) {
            return b[0];
          },
          function (b) {
            return b[1];
          },
          String,
          String
        ),
      ss.makeGenericType(ss.Dictionary$2, [String, String])
    );
  };
  fj.toPascal = function (a) {
    if (ss.isNullOrEmptyString(a)) {
      return "";
    }
    if (a.length === 1) {
      return a.toUpperCase();
    }
    return a.substr(0, 1).toUpperCase() + a.substring(1);
  };
  fj.toCamel = function (a) {
    if (ss.isNullOrEmptyString(a)) {
      return "";
    }
    if (a.length === 1) {
      return a.toLowerCase();
    }
    return a.substr(0, 1).toLowerCase() + a.substring(1);
  };
  global.VEL.Skynet.Global.Extensions.StringExtensions = fj;
  var fl = function () {
    this.alpha = true;
    this.desynchronized = false;
    this.colorSpace = "srgb";
    this.willReadFrequently = false;
  };
  fl.__typeName =
    "VEL.Skynet.Global.Interop.CanvasRenderingContext2DSettings";
  global.VEL.Skynet.Global.Interop.CanvasRenderingContext2DSettings = fl;
  var fn = function () {};
  fn.__typeName = "VEL.Skynet.Global.Interop.Constants";
  global.VEL.Skynet.Global.Interop.Constants = fn;
  var fp = function () {};
  fp.__typeName = "VEL.Skynet.Global.Interop.Constants$Admin";
  global.VEL.Skynet.Global.Interop.Constants$Admin = fp;
  var fr = function () {};
  fr.__typeName = "VEL.Skynet.Global.Interop.Constants$Admin$Containers";
  global.VEL.Skynet.Global.Interop.Constants$Admin$Containers = fr;
  var ft = function () {};
  ft.__typeName = "VEL.Skynet.Global.Interop.Constants$App";
  global.VEL.Skynet.Global.Interop.Constants$App = ft;
  var fv = function () {};
  fv.__typeName = "VEL.Skynet.Global.Interop.Constants$App$Containers";
  global.VEL.Skynet.Global.Interop.Constants$App$Containers = fv;
  var fx = function () {};
  fx.__typeName = "VEL.Skynet.Global.Interop.Constants$Cache";
  global.VEL.Skynet.Global.Interop.Constants$Cache = fx;
  var fz = function () {};
  fz.__typeName = "VEL.Skynet.Global.Interop.Constants$Cache$Containers";
  global.VEL.Skynet.Global.Interop.Constants$Cache$Containers = fz;
  var ae = function () {};
  ae.__typeName = "VEL.Skynet.Global.Interop.Constants$CapabilityIds";
  global.VEL.Skynet.Global.Interop.Constants$CapabilityIds = ae;
  var ag = function () {};
  ag.__typeName = "VEL.Skynet.Global.Interop.Constants$ContentSounds";
  global.VEL.Skynet.Global.Interop.Constants$ContentSounds = ag;
  var ai = function () {};
  ai.__typeName = "VEL.Skynet.Global.Interop.Constants$CookieConsent";
  global.VEL.Skynet.Global.Interop.Constants$CookieConsent = ai;
  var ak = function () {};
  ak.__typeName = "VEL.Skynet.Global.Interop.Constants$Data";
  global.VEL.Skynet.Global.Interop.Constants$Data = ak;
  var am = function () {};
  am.__typeName = "VEL.Skynet.Global.Interop.Constants$Data$Containers";
  global.VEL.Skynet.Global.Interop.Constants$Data$Containers = am;
  var ao = function () {};
  ao.__typeName = "VEL.Skynet.Global.Interop.Constants$EventSampling";
  global.VEL.Skynet.Global.Interop.Constants$EventSampling = ao;
  var aq = function () {};
  aq.__typeName = "VEL.Skynet.Global.Interop.Constants$Icons";
  global.VEL.Skynet.Global.Interop.Constants$Icons = aq;
  var at = function () {};
  at.__typeName = "VEL.Skynet.Global.Interop.Constants$Screens";
  global.VEL.Skynet.Global.Interop.Constants$Screens = at;
  var av = function () {};
  av.__typeName = "VEL.Skynet.Global.Interop.Constants$Sound";
  global.VEL.Skynet.Global.Interop.Constants$Sound = av;
  var ax = function () {};
  ax.__typeName = "VEL.Skynet.Global.Interop.Constants$Tags";
  global.VEL.Skynet.Global.Interop.Constants$Tags = ax;
  var az = function () {};
  az.__typeName = "VEL.Skynet.Global.Interop.Constants$Themes";
  global.VEL.Skynet.Global.Interop.Constants$Themes = az;
  var aB = function () {};
  aB.__typeName = "VEL.Skynet.Global.Interop.Constants$User";
  global.VEL.Skynet.Global.Interop.Constants$User = aB;
  var aD = function () {};
  aD.__typeName = "VEL.Skynet.Global.Interop.Constants$User$Containers";
  global.VEL.Skynet.Global.Interop.Constants$User$Containers = aD;
  var aF = function () {};
  aF.__typeName = "VEL.Skynet.Global.Interop.InteropHelper";
  aF.waitFor$1 = function (a, b, c) {
    var d = 0,
      e = new ss.TaskCompletionSource(),
      f;
    var g = function () {
      try {
        $sm1: for (;;) {
          switch (d) {
            case 0:
              d = -1;
              f = aF.waitFor(
                function () {
                  return typeof window[a] !== "undefined";
                },
                b,
                c
              );
              d = 1;
              f.continueWith(g);
              return;
            case 1:
              d = -1;
              f.getAwaitedResult();
              d = -1;
              break $sm1;
            default:
              break $sm1;
          }
        }
        e.setResult(null);
      } catch (h) {
        e.setException(ss.Exception.wrap(h));
      }
    };
    g();
    return e.task;
  };
  aF.waitFor = function (a, b, c) {
    var d = 0,
      e = new ss.TaskCompletionSource(),
      f,
      g;
    var h = function () {
      try {
        $sm1: for (;;) {
          switch (d) {
            case 0:
              d = -1;
              f = 0;
              d = 1;
              continue $sm1;
            case 1:
              d = -1;
              if (!!a()) {
                d = -1;
                break $sm1;
              }
              if (c > 0 && f >= c) {
                throw new ss.Exception(
                  "Condition was not met within the timeout period."
                );
              }
              g = ss.Task.delay(b);
              d = 2;
              g.continueWith(h);
              return;
            case 2:
              d = -1;
              g.getAwaitedResult();
              f += b;
              d = 1;
              continue $sm1;
            default:
              break $sm1;
          }
        }
        e.setResult(null);
      } catch (i) {
        e.setException(ss.Exception.wrap(i));
      }
    };
    h();
    return e.task;
  };
  global.VEL.Skynet.Global.Interop.InteropHelper = aF;
  var aH = function () {
    this.ActivityId = 0;
    this.ThemeId = 0;
    this.BookmarkId = 0;
    this.TemplateId = 0;
    this.Author = null;
    this.AuthorId = 0;
    this.ParentFolderId = 0;
    this.TemplateName = null;
    this.Guid = null;
    this.IsShared = false;
    this.IsShareable = false;
    this.IsEditable = false;
    this.HomeworkType = 0;
    this.Thumbnail = null;
    this.HasCopyrightInfringement = false;
    this.Likes = 0;
    this.FontStackId = 0;
    a1.call(this);
  };
  aH.__typeName = "VEL.Skynet.Global.Json.ActivityInfo";
  global.VEL.Skynet.Global.Json.ActivityInfo = aH;
  var aJ = function () {
    this.$1$1 = 0;
    this.$1$2 = 0;
    this.$1$3 = null;
    this.$1$4 = 0;
    this.$1$5 = null;
    this.$1$6 = 0;
    this.$1$7 = false;
    this.$1$8 = false;
    this.$1$9 = 0;
    this.$1$10 = 0;
    this.$1$11 = 0;
    this.$1$12 = 0;
    this.$1$13 = 0;
    this.$1$14 = 0;
    this.$1$15 = 0;
    this.$1$16 = 0;
    this.$1$17 = 0;
    this.$1$18 = 0;
    this.$1$19 = 0;
    this.$1$20 = 0;
    this.$1$21 = 0;
    this.$1$22 = null;
    this.$1$23 = null;
  };
  aJ.__typeName = "VEL.Skynet.Global.Json.ActivityMetadata";
  global.VEL.Skynet.Global.Json.ActivityMetadata = aJ;
  var aL = function () {
    this.ActivityId = 0;
    this.ActivityGuid = null;
  };
  aL.__typeName = "VEL.Skynet.Global.Json.ActivityReference";
  global.VEL.Skynet.Global.Json.ActivityReference = aL;
  var aN = function (a) {
    var b = function () {
      this.Asset = ss.getDefaultValue(a);
      this.Message = null;
    };
    ss.registerGenericClassInstance(
      b,
      aN,
      [a],
      {},
      function () {
        return null;
      },
      function () {
        return [];
      }
    );
    return b;
  };
  aN.__typeName = "VEL.Skynet.Global.Json.AddAssetResponse$1";
  ss.initGenericClass(aN, aa, 1);
  global.VEL.Skynet.Global.Json.AddAssetResponse$1 = aN;
  var aP = function () {
    this.Name = null;
    this.AgeBandId = null;
  };
  aP.__typeName = "VEL.Skynet.Global.Json.AgeBandData";
  global.VEL.Skynet.Global.Json.AgeBandData = aP;
  var aR = function () {
    this.ThemeId = 0;
    this.Index = 0;
    this.SortIndex = 0;
    this.FileName = null;
    this.BlobName = null;
    this.Src = null;
    this.Url = null;
    this.Parts = null;
    this.FileSize = 0;
  };
  aR.__typeName = "VEL.Skynet.Global.Json.Asset";
  global.VEL.Skynet.Global.Json.Asset = aR;
  var aT = function () {
    this.TagName = null;
    this.Type = null;
    this.Animation = "";
    this.Shuffle = false;
    this.MuteWithMusic = false;
    this.Volume = 1;
    this.SoundAssets = null;
  };
  aT.__typeName = "VEL.Skynet.Global.Json.AudioAsset";
  global.VEL.Skynet.Global.Json.AudioAsset = aT;
  var aV = function () {
    this.TagName = null;
    this.Type = null;
    this.LiveAudioAsset = null;
    this.EditAudioAsset = null;
  };
  aV.__typeName = "VEL.Skynet.Global.Json.AudioWorkItem";
  global.VEL.Skynet.Global.Json.AudioWorkItem = aV;
  var aX = function () {
    this.BannerId = null;
    this.Header = null;
    this.Msg = null;
    this.ButtonText = null;
    this.Url = null;
    this.OpenInAnotherTab = false;
    this.BackgroundColour = null;
    this.PrefixIcon = null;
    this.TextColour = null;
    this.DismissalRecurrence = 0;
    this.EngagementRecurrence = 0;
    this.ReminderDate = null;
  };
  aX.__typeName = "VEL.Skynet.Global.Json.BannerJson";
  global.VEL.Skynet.Global.Json.BannerJson = aX;
  var aZ = function () {};
  aZ.__typeName = "VEL.Skynet.Global.Json.BannerRecurrence";
  global.VEL.Skynet.Global.Json.BannerRecurrence = aZ;
  var a1 = function () {
    this.Name = null;
    this.Plays = 0;
    this.ModifiedUnix = 0;
    this.LastPlayedUnix = 0;
    this.IsInRecycleBin = false;
  };
  a1.__typeName = "VEL.Skynet.Global.Json.BaseInfo";
  global.VEL.Skynet.Global.Json.BaseInfo = a1;
  var a3 = function () {
    this.EmphasizeLossInCancel = false;
    this.SurveyBeforeConfirmInCancel = false;
  };
  a3.__typeName = "VEL.Skynet.Global.Json.BeginCancellationJson";
  global.VEL.Skynet.Global.Json.BeginCancellationJson = a3;
  var af = function () {
    this.CancelFeedbackId = 0;
  };
  af.__typeName = "VEL.Skynet.Global.Json.CancelFeedbackJson";
  global.VEL.Skynet.Global.Json.CancelFeedbackJson = af;
  var ah = function () {
    this.CanSave = false;
    this.Message = null;
  };
  ah.__typeName = "VEL.Skynet.Global.Json.CanSaveXmlData";
  global.VEL.Skynet.Global.Json.CanSaveXmlData = ah;
  var aj = function () {
    this.BannerId = null;
    this.DismissedDate = null;
    this.IsEngaged = false;
  };
  aj.__typeName = "VEL.Skynet.Global.Json.DismissedBannerJson";
  global.VEL.Skynet.Global.Json.DismissedBannerJson = aj;
  var al = function () {
    this.Themes = null;
    this.RootFolderPath = null;
    this.TemplatesRequirements = null;
  };
  al.__typeName = "VEL.Skynet.Global.Json.EditSoundAssetsData";
  global.VEL.Skynet.Global.Json.EditSoundAssetsData = al;
  var an = function () {
    this.ErrorMessage = null;
  };
  an.__typeName = "VEL.Skynet.Global.Json.ErrorJson";
  global.VEL.Skynet.Global.Json.ErrorJson = an;
  var ap = function () {
    this.$1$1 = null;
    this.Variations = null;
    this.GoalType = null;
    this.GoalDevice = null;
    this.TriggerType = 0;
    this.TriggerDetail = 0;
    this.TriggerDevice = null;
    this.Targets = null;
  };
  ap.__typeName = "VEL.Skynet.Global.Json.ExperimentDuplicate";
  global.VEL.Skynet.Global.Json.ExperimentDuplicate = ap;
  var ar = function () {
    this.TargetType = 0;
    this.TargetValue = 0;
  };
  ar.__typeName = "VEL.Skynet.Global.Json.ExperimentDuplicateTarget";
  global.VEL.Skynet.Global.Json.ExperimentDuplicateTarget = ar;
  var au = function () {
    this.Name = null;
    this.Actions = null;
  };
  au.__typeName = "VEL.Skynet.Global.Json.ExperimentDuplicateVariation";
  global.VEL.Skynet.Global.Json.ExperimentDuplicateVariation = au;
  var aw = function () {
    this.FeatureSwitchId = 0;
    this.Key = null;
    this.Type = 0;
    this.Value = null;
    this.Action = null;
    this.TypeDescription = null;
  };
  aw.__typeName = "VEL.Skynet.Global.Json.ExperimentDuplicateVariationAction";
  global.VEL.Skynet.Global.Json.ExperimentDuplicateVariationAction = aw;
  var ay = function () {
    this.FolderId = 0;
    this.ParentFolderId = 0;
    this.Level = 0;
    this.Path = null;
    this.ItemCount = 0;
    this.Color = 0;
    this.ParentColor = 0;
    a1.call(this);
  };
  ay.__typeName = "VEL.Skynet.Global.Json.FolderInfo";
  global.VEL.Skynet.Global.Json.FolderInfo = ay;
  var aA = function () {
    this.Data = null;
    this.Url = null;
    this.Error = null;
  };
  aA.__typeName = "VEL.Skynet.Global.Json.GenerateTextToSpeechResponse";
  global.VEL.Skynet.Global.Json.GenerateTextToSpeechResponse = aA;
  var aC = function () {
    this.AgeBands = null;
  };
  aC.__typeName = "VEL.Skynet.Global.Json.GetAgeBandsResultJson";
  global.VEL.Skynet.Global.Json.GetAgeBandsResultJson = aC;
  var aE = function () {
    this.Subjects = null;
  };
  aE.__typeName = "VEL.Skynet.Global.Json.GetSubjectsResultJson";
  global.VEL.Skynet.Global.Json.GetSubjectsResultJson = aE;
  var aG = function () {
    this.Title = null;
    this.ActivityId = 0;
    this.ActivityGuid = null;
    this.HomeworkGameId = 0;
    this.ParentFolderId = 0;
    this.PlayUrl = null;
    this.TemplateName = null;
    this.NumberOfPlayers = 0;
    this.Modified = null;
    this.Deadline = null;
    this.IsClosed = false;
    this.ResultsUrl = null;
    this.ShareableResultsUrl = null;
    this.IsInRecycleBin = false;
    this.IsGoogleClassroom = false;
    this.Thumbnail = null;
    this.HasNewSubmission = false;
  };
  aG.__typeName = "VEL.Skynet.Global.Json.HomeworkInfo";
  global.VEL.Skynet.Global.Json.HomeworkInfo = aG;
  var aI = function () {
    this.HomeworkSubmissionId = 0;
  };
  aI.__typeName = "VEL.Skynet.Global.Json.HomeworkSubmissionInfo";
  global.VEL.Skynet.Global.Json.HomeworkSubmissionInfo = aI;
  var aK = function () {
    aR.call(this);
  };
  aK.__typeName = "VEL.Skynet.Global.Json.ImageAsset";
  global.VEL.Skynet.Global.Json.ImageAsset = aK;
  var aM = function () {};
  aM.__typeName = "VEL.Skynet.Global.Json.ImageSizeEnum";
  global.VEL.Skynet.Global.Json.ImageSizeEnum = aM;
  var aO = function () {
    this.entryId = 0;
    this.name = null;
    this.score = 0;
    this.time = 0;
  };
  aO.__typeName = "VEL.Skynet.Global.Json.LeaderboardEntryJson";
  global.VEL.Skynet.Global.Json.LeaderboardEntryJson = aO;
  var aQ = function () {};
  aQ.__typeName = "VEL.Skynet.Global.Json.LeaderboardEnum";
  global.VEL.Skynet.Global.Json.LeaderboardEnum = aQ;
  var aS = function () {
    this.enabled = false;
    this.allowDuplicates = false;
    this.entryCount = 0;
    this.removalTime = 0;
    this.error = null;
  };
  aS.__typeName = "VEL.Skynet.Global.Json.LeaderboardOptionJson";
  global.VEL.Skynet.Global.Json.LeaderboardOptionJson = aS;
  var aU = function () {
    this.IsPaid = false;
    this.IsGuest = false;
    this.CommunityTagPageResultsLimit = 0;
  };
  aU.__typeName = "VEL.Skynet.Global.Json.LimitCommunityTagsUserStateJson";
  global.VEL.Skynet.Global.Json.LimitCommunityTagsUserStateJson = aU;
  var aW = function () {
    this.ImageAssets = null;
    this.RootFolderPath = null;
  };
  aW.__typeName = "VEL.Skynet.Global.Json.ManageImageAssetsData";
  global.VEL.Skynet.Global.Json.ManageImageAssetsData = aW;
  var aY = function () {
    this.SoundAssets = null;
    this.RootFolderPath = null;
  };
  aY.__typeName = "VEL.Skynet.Global.Json.ManageSoundAssetsData";
  global.VEL.Skynet.Global.Json.ManageSoundAssetsData = aY;
  var a0 = function () {
    this.Activities = null;
    this.Folders = null;
    this.Bookmarks = null;
    this.Breadcrumbs = null;
  };
  a0.__typeName = "VEL.Skynet.Global.Json.MyActivitiesData";
  global.VEL.Skynet.Global.Json.MyActivitiesData = a0;
  var a2 = function () {
    this.Data = null;
    this.IsBlocked = false;
    this.IsOk = false;
  };
  a2.__typeName = "VEL.Skynet.Global.Json.MyActivitiesDuplicateResponse";
  global.VEL.Skynet.Global.Json.MyActivitiesDuplicateResponse = a2;
  var a4 = function () {
    this.Homeworks = null;
    this.Folders = null;
    this.Breadcrumbs = null;
  };
  a4.__typeName = "VEL.Skynet.Global.Json.MyResultsData";
  global.VEL.Skynet.Global.Json.MyResultsData = a4;
  var a7 = function () {
    this.Success = false;
    this.Code = null;
    this.ConnectionId = null;
  };
  a7.__typeName = "VEL.Skynet.Global.Json.OpenInfo";
  global.VEL.Skynet.Global.Json.OpenInfo = a7;
  var a9 = function () {
    this.Version = 0;
    this.Timestamp = null;
  };
  a9.__typeName = "VEL.Skynet.Global.Json.PolicyNotificationDismissalJson";
  global.VEL.Skynet.Global.Json.PolicyNotificationDismissalJson = a9;
  var b1 = function () {
    this.Amount = 0;
    this.Currency = null;
  };
  b1.__typeName = "VEL.Skynet.Global.Json.PriceJson";
  global.VEL.Skynet.Global.Json.PriceJson = b1;
  var b3 = function () {
    this.PrinterId = 0;
    this.Tag = null;
    this.Title = null;
    this.ShowFeedbackBanner = false;
  };
  b3.__typeName = "VEL.Skynet.Global.Json.PrintConversion";
  global.VEL.Skynet.Global.Json.PrintConversion = b3;
  var b5 = function () {
    this.Conversions = null;
  };
  b5.__typeName = "VEL.Skynet.Global.Json.PrintConversionsJson";
  global.VEL.Skynet.Global.Json.PrintConversionsJson = b5;
  var b7 = function () {
    this.Url = null;
    this.Name = null;
  };
  b7.__typeName = "VEL.Skynet.Global.Json.PrintPreviewJson";
  global.VEL.Skynet.Global.Json.PrintPreviewJson = b7;
  var b9 = function () {
    this.Ok = false;
    this.Message = null;
  };
  b9.__typeName = "VEL.Skynet.Global.Json.RenewalJson";
  global.VEL.Skynet.Global.Json.RenewalJson = b9;
  var c1 = function () {
    this.HomeworkGameId = 0;
    this.Title = null;
    this.Url = null;
    this.Screenshot = null;
    this.ActivityId = 0;
    this.ActivityGuid = null;
    this.ThemeId = 0;
    this.EndTime = null;
    this.EndTimeString = null;
    this.Registration = 0;
    this.GameOver = 0;
  };
  c1.__typeName = "VEL.Skynet.Global.Json.ShareHomeworkJson";
  global.VEL.Skynet.Global.Json.ShareHomeworkJson = c1;
  var c3 = function () {
    this.Volume = 1;
    this.Pitch = 0;
    this.Scene = "";
    aR.call(this);
  };
  c3.__typeName = "VEL.Skynet.Global.Json.SoundAsset";
  global.VEL.Skynet.Global.Json.SoundAsset = c3;
  var c5 = function () {
    this.Audios = null;
    this.Id = 0;
    this.Name = null;
    this.ThemeIconUrl = null;
    this.CurrentUserId = null;
    this.XmlContent = null;
    this.Requirements = null;
  };
  c5.__typeName = "VEL.Skynet.Global.Json.SoundAssetTheme";
  global.VEL.Skynet.Global.Json.SoundAssetTheme = c5;
  var c7 = function () {
    this.Name = null;
    this.SubjectId = null;
  };
  c7.__typeName = "VEL.Skynet.Global.Json.SubjectData";
  global.VEL.Skynet.Global.Json.SubjectData = c7;
  var c9 = function () {
    this.RedirectTo = null;
    this.Error = null;
    this.ClientSecret = null;
  };
  c9.__typeName = "VEL.Skynet.Global.Json.SubscribeJson";
  global.VEL.Skynet.Global.Json.SubscribeJson = c9;
  var dN = function () {
    this.Success = false;
    this.Error = null;
  };
  dN.__typeName = "VEL.Skynet.Global.Json.TagResultJson";
  global.VEL.Skynet.Global.Json.TagResultJson = dN;
  var dP = function () {
    this.Tag = null;
    this.Text = null;
    this.SoundTypes = null;
  };
  dP.__typeName = "VEL.Skynet.Global.Json.TemplateRequirements";
  global.VEL.Skynet.Global.Json.TemplateRequirements = dP;
  var dR = function () {
    this.Name = null;
    this.AnimationSounds = null;
  };
  dR.__typeName = "VEL.Skynet.Global.Json.ThemeRequirements";
  global.VEL.Skynet.Global.Json.ThemeRequirements = dR;
  var dT = function () {
    this.UserId = null;
    this.WorkName = null;
    this.IsMyWork = false;
  };
  dT.__typeName = "VEL.Skynet.Global.Json.ThemeResourceWork";
  global.VEL.Skynet.Global.Json.ThemeResourceWork = dT;
  var dV = function () {
    this.Text = null;
    this.Value = null;
    this.ValidationMessage = null;
  };
  dV.__typeName = "VEL.Skynet.Global.Json.ThemeTemplateOption";
  global.VEL.Skynet.Global.Json.ThemeTemplateOption = dV;
  var dX = function () {
    this.PlayUrlPattern = null;
    this.TemplateOptions = null;
  };
  dX.__typeName = "VEL.Skynet.Global.Json.ThemeTemplatesData";
  global.VEL.Skynet.Global.Json.ThemeTemplatesData = dX;
  var dZ = function () {
    this.Unix = 0;
    this.Readable = null;
    this.Editable = null;
  };
  dZ.__typeName = "VEL.Skynet.Global.Json.TimeInfo";
  global.VEL.Skynet.Global.Json.TimeInfo = dZ;
  var d1 = function () {
    this.Translation = null;
  };
  d1.__typeName = "VEL.Skynet.Global.Json.TranslateResultJson";
  global.VEL.Skynet.Global.Json.TranslateResultJson = d1;
  var d3 = function () {
    this.MaleId = null;
    this.FemaleId = null;
    this.DisplayName = null;
    this.LanguageId = 0;
    this.LocaleId = 0;
    this.IsDefault = false;
  };
  d3.__typeName = "VEL.Skynet.Global.Json.TtsOption";
  global.VEL.Skynet.Global.Json.TtsOption = d3;
  var d5 = function () {
    this.Timestamp = null;
    d7.call(this);
  };
  d5.__typeName = "VEL.Skynet.Global.Json.UnsubmittedUserConsentJson";
  global.VEL.Skynet.Global.Json.UnsubmittedUserConsentJson = d5;
  var d7 = function () {
    this.ConsentType = 0;
    this.Version = 0;
  };
  d7.__typeName = "VEL.Skynet.Global.Json.UserConsentJson";
  global.VEL.Skynet.Global.Json.UserConsentJson = d7;
  var d9 = function () {
    this.Found = false;
    this.Result = null;
  };
  d9.__typeName = "VEL.Skynet.Global.Json.UserConsentResultJson";
  global.VEL.Skynet.Global.Json.UserConsentResultJson = d9;
  var eb = function () {
    this.UserName = null;
    this.Email = null;
  };
  eb.__typeName = "VEL.Skynet.Global.Json.UserDetailJson";
  global.VEL.Skynet.Global.Json.UserDetailJson = eb;
  var ed = function () {
    this.Content = null;
    this.Deleted = false;
    this.Changed = false;
    aR.call(this);
  };
  ed.__typeName = "VEL.Skynet.Global.Json.XmlAsset";
  global.VEL.Skynet.Global.Json.XmlAsset = ed;
  var a8 = function () {};
  a8.__typeName = "VEL.Skynet.Global.Json.AIContentGeneration.AIContent";
  global.VEL.Skynet.Global.Json.AIContentGeneration.AIContent = a8;
  var b0 = function (a) {
    var b = function () {
      this.title = null;
      this.content = null;
      a8.call(this);
    };
    ss.registerGenericClassInstance(
      b,
      b0,
      [a],
      {},
      function () {
        return a8;
      },
      function () {
        return [];
      }
    );
    return b;
  };
  b0.__typeName = "VEL.Skynet.Global.Json.AIContentGeneration.AIContent$1";
  ss.initGenericClass(b0, aa, 1);
  global.VEL.Skynet.Global.Json.AIContentGeneration.AIContent$1 = b0;
  var b2 = function () {
    this.title = null;
  };
  b2.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.AIContentWithTitle";
  global.VEL.Skynet.Global.Json.AIContentGeneration.AIContentWithTitle = b2;
  var b4 = function () {};
  b4.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.AIContentWrapper";
  global.VEL.Skynet.Global.Json.AIContentGeneration.AIContentWrapper = b4;
  var b6 = function (a) {
    var b = function (c) {
      this.$0 = null;
      b4.call(this);
      this.$0 = c;
    };
    ss.registerGenericClassInstance(
      b,
      b6,
      [a],
      {
        get_data: function () {
          return this.$0;
        },
        serialize: function (c) {
          return c(this.$0);
        },
      },
      function () {
        return b4;
      },
      function () {
        return [];
      }
    );
    return b;
  };
  b6.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.AIContentWrapper$1";
  ss.initGenericClass(b6, aa, 1);
  global.VEL.Skynet.Global.Json.AIContentGeneration.AIContentWrapper$1 = b6;
  var b8 = function () {
    this.title = null;
    this.correct = null;
    this.incorrect = null;
    a8.call(this);
  };
  b8.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.CorrectIncorrectAIContent";
  global.VEL.Skynet.Global.Json.AIContentGeneration.CorrectIncorrectAIContent =
    b8;
  var c0 = function (a) {
    ss.makeGenericType(b6, [b8]).call(this, a);
  };
  c0.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.CorrectIncorrectAIContentWrapper";
  global.VEL.Skynet.Global.Json.AIContentGeneration.CorrectIncorrectAIContentWrapper =
    c0;
  var c2 = function () {
    ss.makeGenericType(b0, [c4]).call(this);
  };
  c2.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.DoubleAIContent";
  global.VEL.Skynet.Global.Json.AIContentGeneration.DoubleAIContent = c2;
  var c4 = function () {
    this.primary = null;
    this.secondary = null;
  };
  c4.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.DoubleAIContentItem";
  global.VEL.Skynet.Global.Json.AIContentGeneration.DoubleAIContentItem = c4;
  var c6 = function (a) {
    ss.makeGenericType(b6, [c2]).call(this, a);
  };
  c6.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.DoubleAIContentWrapper";
  global.VEL.Skynet.Global.Json.AIContentGeneration.DoubleAIContentWrapper =
    c6;
  var c8 = function () {
    this.Error = null;
  };
  c8.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.GenerateContentFailedResponse";
  global.VEL.Skynet.Global.Json.AIContentGeneration.GenerateContentFailedResponse =
    c8;
  var dM = function () {
    ss.makeGenericType(b0, [dO]).call(this);
  };
  dM.__typeName = "VEL.Skynet.Global.Json.AIContentGeneration.GroupAIContent";
  global.VEL.Skynet.Global.Json.AIContentGeneration.GroupAIContent = dM;
  var dO = function () {
    this.primary = null;
    ss.makeGenericType(b0, [d4]).call(this);
  };
  dO.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.GroupAIContentItem";
  global.VEL.Skynet.Global.Json.AIContentGeneration.GroupAIContentItem = dO;
  var dQ = function (a) {
    ss.makeGenericType(b6, [dO]).call(this, a);
  };
  dQ.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.GroupAIContentItemWrapper";
  global.VEL.Skynet.Global.Json.AIContentGeneration.GroupAIContentItemWrapper =
    dQ;
  var dS = function (a) {
    ss.makeGenericType(b6, [dM]).call(this, a);
  };
  dS.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.GroupAIContentWrapper";
  global.VEL.Skynet.Global.Json.AIContentGeneration.GroupAIContentWrapper =
    dS;
  var dU = function () {
    ss.makeGenericType(b0, [dW]).call(this);
  };
  dU.__typeName = "VEL.Skynet.Global.Json.AIContentGeneration.QuizAIContent";
  global.VEL.Skynet.Global.Json.AIContentGeneration.QuizAIContent = dU;
  var dW = function () {
    this.primary = null;
    this.secondary = null;
    this.index = 0;
  };
  dW.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.QuizAIContentItem";
  global.VEL.Skynet.Global.Json.AIContentGeneration.QuizAIContentItem = dW;
  var dY = function () {
    this.content = null;
    this.isCorrect = false;
  };
  dY.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.QuizAIContentSecondaryItem";
  global.VEL.Skynet.Global.Json.AIContentGeneration.QuizAIContentSecondaryItem =
    dY;
  var d0 = function (a) {
    ss.makeGenericType(b6, [dU]).call(this, a);
  };
  d0.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.QuizAIContentWrapper";
  d0.$1 = function (a, b, c) {
    var d = [];
    for (var e = 0; e < c; e++) {
      d.push(a.shift() % b);
    }
    return d;
  };
  d0.$4 = function (a, b, c, d) {
    if (c.length < d) {
      var e = d0.$0(b, a);
      for (var f = 0; f < e.length; f++) {
        var g = e[f];
        c.push(g);
      }
      var h = d;
      for (var i = 0; i < h; i++) {
        c.push(a());
      }
    }
  };
  d0.$3 = function (a, b, c) {
    for (var d = 0; d < b.length; d++) {
      var e = b[d];
      var f = Enumerable.from(c).first();
      var g = a.secondary[e];
      a.secondary[e] = a.secondary[f];
      a.secondary[f] = g;
      ss.remove(c, f);
    }
  };
  d0.$2 = function (a, b) {
    var c = [];
    var d = [];
    for (var e = 0; e < a.secondary.length; e++) {
      if (a.secondary[e].isCorrect) {
        c.push(e);
      } else {
        d.push(e);
      }
    }
    var f = b.$;
    var g = Enumerable.from(c)
      .where(function (h) {
        return ss.contains(f, h);
      })
      .toArray();
    c = Enumerable.from(c).except(g).toArray();
    b.$ = Enumerable.from(b.$).except(g).toArray();
    return c;
  };
  d0.$0 = function (a, b) {
    var c = Enumerable.range(0, Math.max(0, a)).orderBy(function (d) {
      return b();
    });
    return c.toArray();
  };
  global.VEL.Skynet.Global.Json.AIContentGeneration.QuizAIContentWrapper = d0;
  var d2 = function () {
    ss.makeGenericType(b0, [d4]).call(this);
  };
  d2.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.SingleAIContent";
  global.VEL.Skynet.Global.Json.AIContentGeneration.SingleAIContent = d2;
  var d4 = function () {
    this.primary = null;
  };
  d4.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.SingleAIContentItem";
  global.VEL.Skynet.Global.Json.AIContentGeneration.SingleAIContentItem = d4;
  var d6 = function (a) {
    ss.makeGenericType(b6, [d2]).call(this, a);
  };
  d6.__typeName =
    "VEL.Skynet.Global.Json.AIContentGeneration.SingleAIContentWrapper";
  global.VEL.Skynet.Global.Json.AIContentGeneration.SingleAIContentWrapper =
    d6;
  var d8 = function () {
    this.id = null;
    this.name = null;
  };
  d8.__typeName = "VEL.Skynet.Global.Json.GoogleClassroom.Course";
  global.VEL.Skynet.Global.Json.GoogleClassroom.Course = d8;
  var ea = function () {
    this.courseId = null;
    this.id = null;
    this.title = null;
    this.materials = null;
    this.state = null;
    this.alternateLink = null;
    this.dueDate = null;
    this.dueTime = null;
    this.maxPoints = null;
    this.workType = null;
    this.assigneeMode = null;
    this.individualStudentsOptions = null;
  };
  ea.__typeName = "VEL.Skynet.Global.Json.GoogleClassroom.CourseWork";
  global.VEL.Skynet.Global.Json.GoogleClassroom.CourseWork = ea;
  var ec = function () {
    this.year = 0;
    this.month = 0;
    this.day = 0;
  };
  ec.__typeName = "VEL.Skynet.Global.Json.GoogleClassroom.Date";
  ec.create = function (a) {
    var b = ss.toUTC(a);
    var c = new ec();
    c.year = b.getFullYear();
    c.month = b.getMonth() + 1;
    c.day = b.getDate();
    return c;
  };
  ec.create$1 = function (a) {
    return ss.isValue(a) ? ec.create(ss.unbox(a)) : null;
  };
  global.VEL.Skynet.Global.Json.GoogleClassroom.Date = ec;
  var ee = function () {
    this.message = null;
    this.statusCode = 0;
    this.errorCode = null;
  };
  ee.__typeName =
    "VEL.Skynet.Global.Json.GoogleClassroom.GoogleClassroomError";
  global.VEL.Skynet.Global.Json.GoogleClassroom.GoogleClassroomError = ee;
  var eh = function () {
    this.studentIds = null;
  };
  eh.__typeName =
    "VEL.Skynet.Global.Json.GoogleClassroom.IndividualStudentsOptions";
  global.VEL.Skynet.Global.Json.GoogleClassroom.IndividualStudentsOptions =
    eh;
  var ej = function () {
    this.url = null;
    this.title = null;
    this.thumbnailUrl = null;
  };
  ej.__typeName = "VEL.Skynet.Global.Json.GoogleClassroom.Link";
  global.VEL.Skynet.Global.Json.GoogleClassroom.Link = ej;
  var el = function () {
    this.link = null;
  };
  el.__typeName = "VEL.Skynet.Global.Json.GoogleClassroom.Material";
  el.createLinkMaterial = function (a) {
    var b = new el();
    var c = new ej();
    c.url = a;
    b.link = c;
    return b;
  };
  global.VEL.Skynet.Global.Json.GoogleClassroom.Material = el;
  var en = function () {
    this.fullName = null;
  };
  en.__typeName = "VEL.Skynet.Global.Json.GoogleClassroom.Name";
  global.VEL.Skynet.Global.Json.GoogleClassroom.Name = en;
  var ep = function () {
    this.courseId = null;
    this.userId = null;
    this.profile = null;
  };
  ep.__typeName = "VEL.Skynet.Global.Json.GoogleClassroom.Student";
  global.VEL.Skynet.Global.Json.GoogleClassroom.Student = ep;
  var er = function () {
    this.courseId = null;
    this.courseWorkId = null;
    this.id = null;
    this.userId = null;
    this.state = null;
    this.draftGrade = 0;
  };
  er.__typeName = "VEL.Skynet.Global.Json.GoogleClassroom.StudentSubmission";
  global.VEL.Skynet.Global.Json.GoogleClassroom.StudentSubmission = er;
  var et = function () {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.nanos = 0;
  };
  et.__typeName = "VEL.Skynet.Global.Json.GoogleClassroom.TimeOfDay";
  et.create = function (a) {
    var b = ss.toUTC(a);
    var c = new et();
    c.hours = b.getHours();
    c.minutes = b.getMinutes();
    c.seconds = b.getSeconds();
    return c;
  };
  et.create$1 = function (a) {
    return ss.isValue(a) ? et.create(ss.unbox(a)) : null;
  };
  global.VEL.Skynet.Global.Json.GoogleClassroom.TimeOfDay = et;
  var ev = function () {
    this.id = null;
    this.name = null;
    this.emailAddress = null;
    this.photoUrl = null;
  };
  ev.__typeName = "VEL.Skynet.Global.Json.GoogleClassroom.UserProfile";
  global.VEL.Skynet.Global.Json.GoogleClassroom.UserProfile = ev;
  var ex = function () {
    this.isSignedIn = false;
    this.hasGrantedPermissions = false;
    this.userProfile = null;
  };
  ex.__typeName = "VEL.Skynet.Global.Json.GoogleClassroom.UserState";
  global.VEL.Skynet.Global.Json.GoogleClassroom.UserState = ex;
  var ez = function () {
    this.query = null;
    this.size = 0;
    this.page = 0;
    this.urls = null;
  };
  ez.__typeName =
    "VEL.Skynet.Global.Json.Requests.InvalidateImageSearchRequest";
  global.VEL.Skynet.Global.Json.Requests.InvalidateImageSearchRequest = ez;
  var eB = function (a) {
    var b = function () {};
    ss.registerGenericInterfaceInstance(
      b,
      eB,
      [a],
      { get_children: null, set_children: null },
      function () {
        return [];
      }
    );
    return b;
  };
  eB.__typeName = "VEL.Skynet.Global.Serialization.IXmlArray$1";
  ss.initGenericInterface(eB, aa, 1);
  global.VEL.Skynet.Global.Serialization.IXmlArray$1 = eB;
  var eD = function () {};
  eD.__typeName = "VEL.Skynet.Global.Serialization.JsonClassAttribute";
  global.VEL.Skynet.Global.Serialization.JsonClassAttribute = eD;
  var eF = function (a) {
    this.tag = null;
    this.tag = a;
  };
  eF.__typeName = "VEL.Skynet.Global.Serialization.XmlClassAttribute";
  global.VEL.Skynet.Global.Serialization.XmlClassAttribute = eF;
  var eG = function (a) {
    ss.makeGenericType(eO, [Boolean]).call(this, a, false, false);
  };
  eG.__typeName = "VEL.Skynet.Global.Server.$0";
  var eH = function (a) {
    ss.makeGenericType(eO, [ss.Int32]).call(this, a, 0, false);
  };
  eH.__typeName = "VEL.Skynet.Global.Server.$1";
  var eI = function (a) {
    ss.makeGenericType(eO, [String]).call(this, a, "", false);
  };
  eI.__typeName = "VEL.Skynet.Global.Server.$2";
  var eJ = function (a, b) {
    ss.makeGenericType(eO, [Boolean]).call(this, a, b, true);
  };
  eJ.__typeName = "VEL.Skynet.Global.Server.$3";
  var eK = function (a, b) {
    ss.makeGenericType(eO, [ss.Int32]).call(this, a, b, true);
  };
  eK.__typeName = "VEL.Skynet.Global.Server.$4";
  var eL = function (a, b) {
    ss.makeGenericType(eO, [String]).call(this, a, ss.coalesce(b, ""), true);
  };
  eL.__typeName = "VEL.Skynet.Global.Server.$5";
  var eM = function () {};
  eM.__typeName = "VEL.Skynet.Global.Server.AssetHelper";
  eM.getFolderImage = function (a) {
    var b = "/content/images/my_activities/";
    switch (a) {
      case 0:
        return Assets.cdn[(b + "folder-blue.png").toLowerCase()];
      case 1:
        return Assets.cdn[(b + "folder-grey.png").toLowerCase()];
      case 2:
        return Assets.cdn[(b + "folder-green.png").toLowerCase()];
      case 3:
        return Assets.cdn[(b + "folder-yellow.png").toLowerCase()];
      case 4:
        return Assets.cdn[(b + "folder-orange.png").toLowerCase()];
      case 5:
        return Assets.cdn[(b + "folder-red.png").toLowerCase()];
      case 6:
        return Assets.cdn[(b + "folder-purple.png").toLowerCase()];
      case 7:
        return Assets.cdn[(b + "folder-indigo.png").toLowerCase()];
    }
    return null;
  };
  global.VEL.Skynet.Global.Server.AssetHelper = eM;
  var eN = function () {};
  eN.__typeName = "VEL.Skynet.Global.Server.BaseSwitchKeyList";
  eN.initializeAll = function () {
    if (eN.$0) {
      return;
    }
    eN.$0 = true;
    var a = Enumerable.from(ss.getAssemblies())
      .where(function (d) {
        return ss.startsWithString(d.toString(), "VEL.Skynet.");
      })
      .selectMany(function (d) {
        return ss.getAssemblyTypes(d);
      })
      .where(function (d) {
        return d.prototype instanceof eN;
      });
    var b = a.getEnumerator();
    try {
      while (b.moveNext()) {
        var c = b.current();
        ss.createInstance(c);
      }
    } finally {
      b.dispose();
    }
  };
  eN.register = function (a) {
    eN.keys;
    if (eN.keys.containsKey(a.get_key())) {
      throw new ss.InvalidOperationException(
        "Cannot add duplicate key '" + a.get_key() + "'"
      );
    }
    eN.keys.set_item(a.get_key(), a);
  };
  eN.getKey = function (a) {
    if (ss.isNullOrEmptyString(a)) {
      return null;
    }
    eN.initializeAll();
    var b = {};
    if (!eN.keys.tryGetValue(a, b)) {
      return null;
    }
    return b.$;
  };
  eN.getKeys = function () {
    eN.initializeAll();
    return eN.keys.get_values();
  };
  eN.createTestKeyObject = function (a, b) {
    switch (b) {
      case 1:
        return new eG(a);
      case 2:
        return new eH(a);
      case 13:
        return new eI(a);
      default:
        throw new ss.ArgumentException(
          "type must be a code defined switch type, but it was " + b
        );
    }
  };
  eN.getSwitchType = function (a) {
    if (ss.isInstanceOfType(a, eo)) {
      return 1;
    } else {
      if (ss.isInstanceOfType(a, eq)) {
        return 2;
      } else {
        if (ss.isInstanceOfType(a, es)) {
          return 13;
        } else {
          throw new ss.ArgumentException("key must be a known switch key type");
        }
      }
    }
  };
  global.VEL.Skynet.Global.Server.BaseSwitchKeyList = eN;
  var eO = function (a) {
    var b = function (c, d, e) {
      this.$1 = null;
      this.$0 = ss.getDefaultValue(a);
      this.$1 = c;
      this.$0 = d;
      if (ss.isNullOrEmptyString(c)) {
        throw new ss.ArgumentException("key must be specified");
      }
      if (e) {
        eN.register(this);
      }
    };
    ss.registerGenericClassInstance(
      b,
      eO,
      [a],
      {
        get_key: function () {
          return this.$1;
        },
        get_defaultValue: function () {
          return this.$0;
        },
        get_untypedDefaultValue: function () {
          return this.$0;
        },
        toString: function () {
          return ss.getTypeName(ss.getInstanceType(this)) + "(" + this.$1 + ")";
        },
      },
      function () {
        return null;
      },
      function () {
        return [ew, ss.makeGenericType(ey, [a])];
      }
    );
    return b;
  };
  eO.__typeName =
    "VEL.Skynet.Global.Server.BaseSwitchKeyList$BaseSwitchKey$1";
  ss.initGenericClass(eO, aa, 1);
  global.VEL.Skynet.Global.Server.BaseSwitchKeyList$BaseSwitchKey$1 = eO;
  var eP = function (a, b) {
    this.$1$1 = null;
    this.$1$2 = false;
    this.$1$3 = false;
    this.$1$4 = false;
    this.$1$5 = false;
    this.$1$6 = 0;
    this.$1$7 = 0;
    this.$1$8 = 0;
    this.$1$9 = 0;
    this.$1$10 = 0;
    this.$1$11 = 0;
    this.$1$12 = null;
    this.set_experiments(
      ss.isNullOrUndefined(a) ? [] : fj.toArrayOfIntegers(a)
    );
    this.set_userId(ServerModel.userId);
    this.set_languageId(ServerModel.languageId);
    this.set_localeId(ServerModel.localeId);
    this.set_isBasic(ServerModel.isBasic);
    this.set_isPro(ServerModel.isPro);
    this.set_isTest(ServerModel.isTest);
    this.set_isGuest(this.get_userId() === 0);
    this.set_page(ServerModel.pageId === undefined ? 0 : ServerModel.pageId);
    this.set_templateId(
      ServerModel.templateId === undefined ? 0 : ServerModel.templateId
    );
    this.set_themeId(
      ServerModel.themeId === undefined ? 0 : ServerModel.themeId
    );
    this.set_overrides(
      ss.isNullOrUndefined(b)
        ? new (ss.makeGenericType(ss.Dictionary$2, [String, String]))()
        : fj.toSwitchDictionary(b)
    );
  };
  eP.__typeName = "VEL.Skynet.Global.Server.ClientSwitchContext";
  global.VEL.Skynet.Global.Server.ClientSwitchContext = eP;
  var eQ = function () {};
  eQ.__typeName = "VEL.Skynet.Global.Server.CookieNames";
  global.VEL.Skynet.Global.Server.CookieNames = eQ;
  var eR = function () {
    this.id = 0;
    this.value = null;
  };
  eR.__typeName = "VEL.Skynet.Global.Server.GlobalAction";
  global.VEL.Skynet.Global.Server.GlobalAction = eR;
  var ei = function () {
    this.type = 0;
    this.id = 0;
  };
  ei.__typeName = "VEL.Skynet.Global.Server.GlobalRule";
  global.VEL.Skynet.Global.Server.GlobalRule = ei;
  var ek = function () {
    this.type = 0;
    this.key = null;
    this.value = null;
    this.isTest = false;
    this.isServerOnly = false;
    this.actions = null;
    this.values = null;
  };
  ek.__typeName = "VEL.Skynet.Global.Server.GlobalSwitch";
  global.VEL.Skynet.Global.Server.GlobalSwitch = ek;
  var em = function () {
    this.value = null;
    this.rules = null;
  };
  em.__typeName = "VEL.Skynet.Global.Server.GlobalValue";
  global.VEL.Skynet.Global.Server.GlobalValue = em;
  var eo = function () {};
  eo.__typeName = "VEL.Skynet.Global.Server.IBoolSwitchKey";
  global.VEL.Skynet.Global.Server.IBoolSwitchKey = eo;
  var eq = function () {};
  eq.__typeName = "VEL.Skynet.Global.Server.IIntSwitchKey";
  global.VEL.Skynet.Global.Server.IIntSwitchKey = eq;
  var es = function () {};
  es.__typeName = "VEL.Skynet.Global.Server.IStringSwitchKey";
  global.VEL.Skynet.Global.Server.IStringSwitchKey = es;
  var eu = function () {};
  eu.__typeName = "VEL.Skynet.Global.Server.ISwitchContext";
  global.VEL.Skynet.Global.Server.ISwitchContext = eu;
  var ew = function () {};
  ew.__typeName = "VEL.Skynet.Global.Server.ISwitchKey";
  global.VEL.Skynet.Global.Server.ISwitchKey = ew;
  var ey = function (a) {
    var b = function () {};
    ss.registerGenericInterfaceInstance(
      b,
      ey,
      [a],
      { get_defaultValue: null },
      function () {
        return [ew];
      }
    );
    return b;
  };
  ey.__typeName = "VEL.Skynet.Global.Server.ISwitchKey$1";
  ss.initGenericInterface(ey, aa, 1);
  global.VEL.Skynet.Global.Server.ISwitchKey$1 = ey;
  var eA = function () {};
  eA.__typeName = "VEL.Skynet.Global.Server.Switches";
  eA.initialize = function (a) {
    eA.$7 = a;
    eA.$8.clear();
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (ss.isNullOrEmptyString(c.key)) {
        continue;
      }
      var d = eA.$2(c.type, c.key);
      if (eA.$8.containsKey(d) && Enumerable.from(c.actions).any()) {
        var e = eA.$8.get_item(d);
        var f = eA.$8;
        var g = new ek();
        g.type = e.type;
        g.key = e.key;
        g.value = e.value;
        g.isTest = e.isTest;
        g.isServerOnly = e.isServerOnly;
        g.values = e.values;
        g.actions = c.actions;
        f.set_item(d, g);
      } else {
        eA.$8.set_item(d, c);
      }
    }
  };
  eA.getBoolean = function (a, b) {
    var c = eA.$3(a, b.get_key(), 1);
    var d = {};
    if (ss.tryParseBool(c, d)) {
      return d.$;
    } else {
      return b.get_defaultValue();
    }
  };
  eA.getInteger = function (a, b) {
    var c = eA.$0(a, b.get_key(), 2);
    if (ss.isValue(c)) {
      return ss.unbox(c);
    } else {
      return b.get_defaultValue();
    }
  };
  eA.getString = function (a, b) {
    var c = eA.$3(a, b.get_key(), 13);
    if (ss.isValue(c)) {
      return c;
    } else {
      return b.get_defaultValue();
    }
  };
  eA.getTranslationString = function (a, b) {
    return eA.$3(a, b, 3);
  };
  eA.getStringsScript = function (a) {
    var b = new ss.StringBuilder();
    var c = Enumerable.from(eA.$7)
      .where(function (f) {
        return f.type === 3;
      })
      .select(function (f) {
        return f.key;
      })
      .distinct()
      .getEnumerator();
    try {
      while (c.moveNext()) {
        var d = c.current();
        var e = eA.$3(a, d, 3);
        if (ss.isValue(e)) {
          b.append(
            "window.Strings." +
              fj.toCamel(d) +
              '="' +
              ss.replaceAllString(e, '"', '\\"') +
              '";'
          );
        }
      }
    } finally {
      c.dispose();
    }
    return b.toString();
  };
  eA.getScripts = function (a) {
    return eA.$1(a, 5, 59);
  };
  eA.getStyles = function (a) {
    return eA.$1(a, 6, 32);
  };
  eA.getGameOption = function (a, b, c) {
    return eA.$3(a, b + "_" + c, 4);
  };
  eA.getThemeAction = function (a, b, c) {
    return ss.coalesce(eA.$0(a, b + "_" + c, 7), 0);
  };
  eA.getOptionalEditorAction = function (a, b) {
    return ss.coalesce(eA.$0(a, b.toString(), 8), 0);
  };
  eA.getTemplateVisibility = function (a, b) {
    return ss.coalesce(eA.$0(a, b.toString(), 10), 0);
  };
  eA.getPrintAction = function (a, b, c) {
    var d = (ss.isNullOrUndefined(c) ? "0" : c.toString()) + "_" + b.toString();
    return ss.coalesce(eA.$0(a, d, 11), 0);
  };
  eA.getPrintOption = function (a, b, c) {
    return eA.$3(a, b + "_" + c, 9);
  };
  eA.getThemeAudio = function (a, b) {
    return eA.$3(a, b.toString(), 12);
  };
  eA.$0 = function (a, b, c) {
    var d = eA.$3(a, b, c);
    var e = {};
    if (ss.Int32.tryParse(d, e)) {
      return e.$;
    } else {
      return null;
    }
  };
  eA.$1 = function (a, b, c) {
    var d = a.get_page().toString();
    var e = Enumerable.from(eA.$7).where(function (g) {
      return (
        g.type === b &&
        (ss.referenceEquals(g.key, eA.$6) || ss.referenceEquals(g.key, d))
      );
    });
    var f = e
      .selectMany(function (g) {
        return eA.$4(a, g);
      })
      .select(function (g) {
        return ss.isValue(g) ? g.trim() : null;
      })
      .where(function (g) {
        return !ss.isNullOrEmptyString(g);
      });
    return ss.arrayFromEnumerable(f).join(String.fromCharCode(c));
  };
  eA.$3 = function (a, b, c) {
    var d = {};
    if (a.get_overrides().tryGetValue(b, d)) {
      return d.$;
    }
    var e = {};
    if (eA.$8.tryGetValue(eA.$2(c, b), e)) {
      return Enumerable.from(eA.$4(a, e.$)).firstOrDefault(
        null,
        ss.getDefaultValue(String)
      );
    } else {
      return null;
    }
  };
  eA.$4 = function (a, b) {
    if (ss.isNullOrUndefined(a)) {
      throw new ss.InvalidOperationException();
    }
    if (Enumerable.from(b.actions).any()) {
      var c = a.get_experiments();
      for (var d = 0; d < c.length; d++) {
        var e = { $: c[d] };
        var f = Enumerable.from(b.actions).where(
          ss.mkdel({ id: e }, function (r) {
            return r.id === this.id.$;
          })
        );
        if (f.any()) {
          return f
            .select(function (r) {
              return r.value;
            })
            .toArray();
        }
      }
    }
    if (a.get_isTest() && !b.isTest) {
      var g = Enumerable.from(b.values).firstOrDefault(function (r) {
        return Enumerable.from(r.rules)
          .where(function (s) {
            return s.type === 1;
          })
          .any(function (s) {
            return s.id === a.get_userId();
          });
      }, ss.getDefaultValue(em));
      if (ss.isValue(g)) {
        return [g.value];
      }
      var h = eN.getKey(b.key);
      if (ss.isValue(h)) {
        return [h.get_untypedDefaultValue().toString()];
      } else {
        return [b.value];
      }
    }
    for (var i = 0; i < b.values.length; i++) {
      var j = b.values[i];
      if (j.rules.length === 0) {
        continue;
      }
      var k = Enumerable.from(j.rules).where(function (r) {
        return r.type === 1;
      });
      if (k.any()) {
        if (
          !k.any(function (r) {
            return r.id === a.get_userId();
          })
        ) {
          continue;
        }
      }
      var l = Enumerable.from(j.rules).where(function (r) {
        return r.type === 2;
      });
      if (l.any()) {
        if (
          !l.any(function (r) {
            return r.id === a.get_localeId();
          })
        ) {
          continue;
        }
      }
      var m = Enumerable.from(j.rules).where(function (r) {
        return r.type === 3;
      });
      if (m.any()) {
        if (
          !m.any(function (r) {
            return r.id === a.get_languageId();
          })
        ) {
          continue;
        }
      }
      var n = Enumerable.from(j.rules).where(function (r) {
        return r.type === 5;
      });
      if (n.any()) {
        if (
          !n.any(function (r) {
            return r.id === 10000 || r.id === a.get_page();
          })
        ) {
          continue;
        }
      }
      var o = Enumerable.from(j.rules).where(function (r) {
        return r.type === 4;
      });
      if (o.any()) {
        if (
          !o.any(function (r) {
            return eA.$5(a, r.id);
          })
        ) {
          continue;
        }
      }
      var p = Enumerable.from(j.rules).where(function (r) {
        return r.type === 6;
      });
      if (p.any()) {
        if (
          !p.any(function (r) {
            return a.get_templateId() === r.id;
          })
        ) {
          continue;
        }
      }
      var q = Enumerable.from(j.rules).where(function (r) {
        return r.type === 7;
      });
      if (q.any()) {
        if (
          !q.any(function (r) {
            return a.get_themeId() === r.id;
          })
        ) {
          continue;
        }
      }
      return [j.value];
    }
    return [b.value];
  };
  eA.$5 = function (a, b) {
    if (a.get_isGuest()) {
      return b === 0;
    }
    if (a.get_isBasic()) {
      return b === 10;
    }
    if (a.get_isPro()) {
      return b === 16;
    }
    return b === 15;
  };
  eA.$2 = function (a, b) {
    return a + "_" + b;
  };
  global.VEL.Skynet.Global.Server.Switches = eA;
  var eC = function () {
    eN.call(this);
  };
  eC.__typeName = "VEL.Skynet.Global.Server.SwitchKeys";
  global.VEL.Skynet.Global.Server.SwitchKeys = eC;
  var eE = function () {};
  eE.__typeName = "VEL.Skynet.Global.Server.UnknownSwitchContext";
  global.VEL.Skynet.Global.Server.UnknownSwitchContext = eE;
  ss.initClass(ac, aa, {});
  ss.initInterface(a5, aa, { info: null, onAssetLoaded: null });
  ss.initEnum(ef, aa, {
    initializePage: 0,
    startInteractive: 1,
    loadLeaderboard: 2,
    leaderboardLoaded: 3,
    setFontstack: 4,
    setTheme: 5,
    startGame: 6,
    onDocumentOpened: 7,
    documentOpened: 8,
    populatePage: 9,
    pagePopulated: 10,
    preloadGame: 11,
  });
  ss.initEnum(eS, aa, {
    thisActivity: 0,
    defaultForTemplate: 1,
    revertToDefault: 2,
    revertToAuthor: 3,
  });
  ss.initEnum(eU, aa, { ageBand: 0, subject: 1, topic: 2 });
  ss.initEnum(eW, aa, {
    unknown: 0,
    cancelClicked: 1,
    generateClicked: 2,
    resourcePage: 3,
    assistClicked: 4,
  });
  ss.initEnum(eY, aa, { muteMusic: 0, muteSounds: 1 });
  ss.initEnum(e0, aa, {
    undefined: 0,
    notUseful: 1,
    createdEnough: 2,
    timeOfYear: 3,
    lacksFeatures: 4,
    tooExpensive: 5,
    noLongerTeaching: 6,
    paymentProblem: 7,
    other: 8,
    refusedAnswer: 9,
    temporary: 10,
  });
  ss.initEnum(e2, aa, { policyUpdate: 1 });
  ss.initEnum(e4, aa, { unknown: 0, mobile: 1, tablet: 2, desktop: 3, bot: 4 });
  ss.initEnum(e6, aa, {
    subscribe: 101,
    _ManualCancel: 102,
    _AutoCancel: 103,
    upgradePlan: 104,
    downgradePlan: 105,
    _AddCard: 106,
    _ChangeCard: 107,
    authorizeCard: 108,
    require3dSecure: 109,
    failedPayment: 110,
    renewalNotice: 111,
    paymentReceived: 112,
    paymentBlocked: 113,
    _SchoolStep4Completed: 114,
    cancel: 115,
    changeToMonthly: 116,
    changeToAnnual: 117,
    changeCard: 118,
    changeCapability: 119,
    clickIndividualFaq: 120,
    beginCheckout: 121,
    successfulPayment: 122,
    pickTemplate: 201,
    createResource: 202,
    editedResource: 203,
    _PlayYourOwn: 204,
    printOrDownload: 205,
    deleteResource: 206,
    shareResource: 207,
    restoreResource: 208,
    makePrivate: 209,
    contentGenerated: 210,
    play10Times: 211,
    deleteFolder: 213,
    restoreFolder: 214,
    createFolder: 215,
    setAssignment: 216,
    loadPrintable: 217,
    changeTheme: 218,
    _Play10Assignment: 219,
    changeBooleanGameOption: 220,
    changeIntegerGameOption: 221,
    shareQrCode: 222,
    shareEmbed: 223,
    playConverted: 224,
    playAssignment: 225,
    duplicateActivity: 226,
    renameResource: 227,
    toggleMusic: 228,
    toggleSound: 229,
    changeBooleanPrintOption: 230,
    changeIntegerPrintOption: 231,
    changeStringPrintOption: 232,
    shareFacebook: 234,
    shareTwitter: 235,
    shareGoogleClassroom: 236,
    shareEmail: 237,
    createActivityButton: 238,
    recolorFolder: 239,
    aiGenerateButtonClick: 240,
    _CreatedWithImage: 241,
    _CreatedWithSound: 242,
    sharePinterest: 243,
    shareVk: 244,
    changeFontStack: 245,
    printDialogueOpened: 246,
    pinTemplate: 247,
    leaderboardInteraction: 248,
    switchPrintable: 249,
    editConverted: 250,
    aiContentGenerated: 251,
    aiContentGenerationFailed: 252,
    leaderboardRemoveEntry: 253,
    aiContentAssist: 254,
    aiContentAssistFailed: 255,
    aiImportFileClick: 256,
    aiFileImported: 257,
    aiFileImportFailed: 258,
    signUp: 301,
    dailyVisit: 302,
    basicLimitPageVisit: 303,
    basicLimitPageButton: 304,
    googleSignUpStart: 305,
    googleSignUpEnd: 306,
    _GcAddOnAttachmentDiscovery: 401,
    jsError: 501,
    jobFail: 502,
    unauthorisedUsage: 503,
    pageReferral: 550,
    communitySearch: 601,
    _PlayCommunity: 602,
    bookmarkResource: 603,
    likeResource: 604,
    _ReceiveLike: 605,
    tagResource: 606,
    resourceSelect: 607,
    authorSelect: 608,
    communityEdit: 212,
    communityHome: 609,
    viewAssignment: 701,
    exportResult: 702,
    changeDeadline: 703,
    moveResults: 704,
    createResultFolder: 705,
    recolorResultFolder: 706,
    school1SelectPlan: 800,
    school2EnterDetails: 801,
    school3GetQuote: 802,
    school4MakePayment: 803,
    school5StartPlan: 804,
    visitMySchool: 805,
    inviteMyself: 806,
    adminMyself: 807,
    changeAdmin: 808,
    detachSchool: 809,
    detachUser: 810,
    inviteVisit: 811,
    inviteAttach: 812,
    inviteSignUp: 813,
    emailInvoice: 814,
    printInvoice: 815,
    downloadInvoice: 816,
    schoolCardPayment: 817,
    orderByName: 900,
    orderByModified: 901,
    orderByLastPlayed: 902,
    orderByPlays: 903,
    viewAsLargeIcons: 904,
    viewAsSmallIcons: 905,
    viewAsPublic: 906,
    searchActivities: 907,
    moveActivity: 908,
  });
  ss.initEnum(e8, aa, {
    signUp: 1,
    pickTemplate: 2,
    createTemplate: 3,
    subscribe_Any: 4,
    createFolder: 6,
    viewPrintable: 7,
    guestVisit: 9,
    schoolUserCheckup: 10,
    basicLimit: 14,
    mature: 15,
    communitySearch_UserMatch: 16,
    communitySearch_First: 17,
    openPrintModal: 18,
    noSchool: 19,
    cancellation: 20,
    visitAfterCancellation: 21,
    beginCancellation: 22,
    registeredUserVisit: 23,
    genAiFromText: 24,
    genAiFromFile: 25,
    subscribe_New: 26,
    subscribe_Reactivate: 27,
    importFile: 28,
    test: 666,
  });
  ss.initEnum(fa, aa, { excel: 0, csv: 1 });
  ss.initEnum(fc, aa, {
    user: 1,
    locale: 2,
    language: 3,
    tier: 4,
    page: 5,
    template: 6,
    theme: 7,
  });
  ss.initEnum(fe, aa, {
    Boolean: 1,
    Integer: 2,
    String: 13,
    Translations: 3,
    GameOption: 4,
    Script: 5,
    Style: 6,
    Theme: 7,
    OptionalEditor: 8,
    PrintOption: 9,
    Template: 10,
    PrintAction: 11,
    ThemeAudio: 12,
    Test: 666,
  });
  ss.initClass(fg, aa, {});
  ss.initEnum(fi, aa, {
    blue: 0,
    grey: 1,
    green: 2,
    yellow: 3,
    orange: 4,
    red: 5,
    purple: 6,
    indigo: 7,
  });
  ss.initEnum(fk, aa, { interactive: 1, printable: 4 });
  ss.initEnum(fm, aa, {
    none: 0,
    showAnswers: 1,
    leaderboard: 2,
    restart: 4,
    all: 7,
  });
  ss.initEnum(fo, aa, {
    unknown: 0,
    text: 1,
    file: 2,
    textAndFile: 3,
    import$1: 4,
  });
  ss.initEnum(fq, aa, { allStudents: 0, selectedStudents: 1 });
  ss.initEnum(fs, aa, { none: 0, openEnded: 1, scored: 2 });
  ss.initEnum(fu, aa, { default$1: 0, teacherSharedActivities: 1 });
  ss.initEnum(fw, aa, {
    teacherClassroom: 0,
    teacherOnline: 1,
    teacherBoth: 2,
    parentGuardian: 3,
    student: 4,
    other: 5,
  });
  ss.initEnum(fy, aa, {
    None: 0,
    ForceOption1: 1,
    DefaultOption1: 2,
    ForceOption2: 3,
    DefaultOption2: 4,
  });
  ss.initEnum(ab, aa, {
    Unknown: 0,
    Resource: 1,
    Teacher: 2,
    Embed: 21,
    Play: 22,
    Community_Search: 3,
    Community_Tags: 27,
    Community_Examples: 28,
    Home: 20,
    PricePlans: 4,
    PricePlans_School: 5,
    Contact: 6,
    About: 18,
    AboutTemplate: 23,
    Features: 24,
    Account_BasicSignUp: 29,
    Account_LogIn: 30,
    Account_LicenceInvite: 31,
    Account_ActivateKey: 32,
    Account_SignUpWithKey: 33,
    Account_FinishGoogleSignUp: 37,
    Result: 7,
    MyActivities: 8,
    MyResults: 9,
    Account_MySchool: 10,
    Account_PersonalDetails: 11,
    Account_ChangePassword: 34,
    Payment_Subscribe: 12,
    Payment_SchoolPlan: 13,
    Payment_ManagePayments: 14,
    Payment_FailedPayment: 15,
    Payment_Subscribed: 35,
    Create_PickTemplate: 16,
    Create_EnterOrEditContent: 17,
    Share_Resource_Modal: 25,
    Assignment_Setup_Modal: 26,
    NpsSurvey: 36,
    Test_Recruit: 666,
    AllPages: 10000,
  });
  ss.initEnum(ad, aa, { unknown: 0, ignored: 1, warning: 2, active: 3 });
  ss.initEnum(a6, aa, { None: 0, Hide: 1, Show: 2, SetDefault: 3 });
  ss.initEnum(eg, aa, { Pinterest: 0, None: 1 });
  ss.initEnum(eT, aa, {
    anonymous: 0,
    enterNames: 1,
    googleClassroom: 2,
    googleClassroomAddOn: 3,
  });
  ss.initEnum(eV, aa, {
    _CommunitySearch: 601,
    resourcePlay: 1000,
    _ResourcePageVisit: 233,
    playConverted: 1007,
    addImageStart: 1001,
    searchImage: 1002,
    uploadImage: 1003,
    editorSessionStarts: 1004,
    editorSessionEnds: 1005,
    editorValidationFailed: 1006,
    addImageComplete: 1008,
    pageUniqueLanding: 1102,
    pageVisit: 1103,
  });
  ss.initEnum(eX, aa, {
    none: 0,
    shareModal: 1,
    setAssignment: 2,
    sideBar: 3,
    actionMenu: 4,
  });
  ss.initEnum(eZ, aa, {
    Printables: 0,
    AI: 1,
    GameOptions: 2,
    EditContent: 3,
    Community: 4,
    SetAssignment: 5,
  });
  ss.initEnum(e1, aa, {
    Default: 0,
    Hide: 1,
    Show: 2,
    Discontinue: 3,
    Beta: 4,
    ProOnly: 5,
    StandardOnly: 6,
  });
  ss.initClass(e3, aa, {});
  ss.initEnum(e5, aa, { extraSlow: 0, slow: 1, normal: 2, fast: 3 });
  ss.initClass(e7, aa, {});
  ss.initEnum(e9, aa, {
    None: 0,
    Hide: 1,
    Show: 2,
    Default: 3,
    Promote: 4,
    Demote: 5,
    Replace: 6,
  });
  ss.initEnum(fb, aa, { teacher: 0, tutor: 1, student: 2, other: 3 });
  ss.initClass(fd, aa, {});
  ss.initClass(ff, aa, {});
  ff.$ctor1.prototype = ff.prototype;
  ss.initClass(fh, aa, {});
  ss.initClass(fj, aa, {});
  ss.initClass(fl, aa, {});
  ss.initClass(fn, aa, {});
  ss.initClass(fp, aa, {});
  ss.initClass(fr, aa, {});
  ss.initClass(ft, aa, {});
  ss.initClass(fv, aa, {});
  ss.initClass(fx, aa, {});
  ss.initClass(fz, aa, {});
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
  ss.initClass(a1, aa, {});
  ss.initClass(aH, aa, {}, a1);
  ss.initClass(aJ, aa, {
    get_activityId: function () {
      return this.$1$1;
    },
    set_activityId: function (a) {
      this.$1$1 = a;
    },
    get_tier: function () {
      return this.$1$2;
    },
    set_tier: function (a) {
      this.$1$2 = a;
    },
    get_title: function () {
      return this.$1$3;
    },
    set_title: function (a) {
      this.$1$3 = a;
    },
    get_template: function () {
      return this.$1$4;
    },
    set_template: function (a) {
      this.$1$4 = a;
    },
    get_instructions: function () {
      return this.$1$5;
    },
    set_instructions: function (a) {
      this.$1$5 = a;
    },
    get_createIndex: function () {
      return this.$1$6;
    },
    set_createIndex: function (a) {
      this.$1$6 = a;
    },
    get_shared: function () {
      return this.$1$7;
    },
    set_shared: function (a) {
      this.$1$7 = a;
    },
    get_deleted: function () {
      return this.$1$8;
    },
    set_deleted: function (a) {
      this.$1$8 = a;
    },
    get_language: function () {
      return this.$1$9;
    },
    set_language: function (a) {
      this.$1$9 = a;
    },
    get_locale: function () {
      return this.$1$10;
    },
    set_locale: function (a) {
      this.$1$10 = a;
    },
    get_words: function () {
      return this.$1$11;
    },
    set_words: function (a) {
      this.$1$11 = a;
    },
    get_characters: function () {
      return this.$1$12;
    },
    set_characters: function (a) {
      this.$1$12 = a;
    },
    get_items: function () {
      return this.$1$13;
    },
    set_items: function (a) {
      this.$1$13 = a;
    },
    get_option: function () {
      return this.$1$14;
    },
    set_option: function (a) {
      this.$1$14 = a;
    },
    get_texts: function () {
      return this.$1$15;
    },
    set_texts: function (a) {
      this.$1$15 = a;
    },
    get_images: function () {
      return this.$1$16;
    },
    set_images: function (a) {
      this.$1$16 = a;
    },
    get_ttsSounds: function () {
      return this.$1$17;
    },
    set_ttsSounds: function (a) {
      this.$1$17 = a;
    },
    get_fileSounds: function () {
      return this.$1$18;
    },
    set_fileSounds: function (a) {
      this.$1$18 = a;
    },
    get_bold: function () {
      return this.$1$19;
    },
    set_bold: function (a) {
      this.$1$19 = a;
    },
    get_super: function () {
      return this.$1$20;
    },
    set_super: function (a) {
      this.$1$20 = a;
    },
    get_sub: function () {
      return this.$1$21;
    },
    set_sub: function (a) {
      this.$1$21 = a;
    },
    get_screenshotGuid: function () {
      return this.$1$22;
    },
    set_screenshotGuid: function (a) {
      this.$1$22 = a;
    },
    get_error: function () {
      return this.$1$23;
    },
    set_error: function (a) {
      this.$1$23 = a;
    },
  });
  ss.initClass(aL, aa, {});
  ss.initClass(aP, aa, {});
  ss.initClass(aR, aa, {});
  ss.initClass(aT, aa, {});
  ss.initClass(aV, aa, {});
  ss.initClass(aX, aa, {});
  ss.initEnum(aZ, aa, {
    daily: 0,
    untilClicked: 1,
    untilClickedWithReminder: 2,
  });
  ss.initClass(a3, aa, {});
  ss.initClass(af, aa, {});
  ss.initClass(ah, aa, {});
  ss.initClass(aj, aa, {});
  ss.initClass(al, aa, {});
  ss.initClass(an, aa, {});
  ss.initClass(ap, aa, {
    get_ScreenshotUrls: function () {
      return this.$1$1;
    },
    set_ScreenshotUrls: function (a) {
      this.$1$1 = a;
    },
  });
  ss.initClass(ar, aa, {});
  ss.initClass(au, aa, {});
  ss.initClass(aw, aa, {});
  ss.initClass(ay, aa, {}, a1);
  ss.initClass(aA, aa, {});
  ss.initClass(aC, aa, {});
  ss.initClass(aE, aa, {});
  ss.initClass(aG, aa, {});
  ss.initClass(aI, aa, {});
  ss.initClass(aK, aa, {}, aR);
  ss.initEnum(aM, aa, { all: 0, small: 1, medium: 2, large: 3 });
  ss.initClass(aO, aa, {});
  ss.initEnum(aQ, aa, {
    unknown: -1,
    none: 0,
    scoreAndTime: 1,
    scoreOnly: 2,
    timeOnly: 3,
  });
  ss.initClass(aS, aa, {});
  ss.initClass(aU, aa, {});
  ss.initClass(aW, aa, {});
  ss.initClass(aY, aa, {});
  ss.initClass(a0, aa, {});
  ss.initClass(a2, aa, {});
  ss.initClass(a4, aa, {});
  ss.initClass(a7, aa, {});
  ss.initClass(a9, aa, {});
  ss.initClass(b1, aa, {});
  ss.initClass(b3, aa, {});
  ss.initClass(b5, aa, {});
  ss.initClass(b7, aa, {});
  ss.initClass(b9, aa, {});
  ss.initClass(c1, aa, {});
  ss.initClass(c3, aa, {}, aR);
  ss.initClass(c5, aa, {});
  ss.initClass(c7, aa, {});
  ss.initClass(c9, aa, {});
  ss.initClass(dN, aa, {});
  ss.initClass(dP, aa, {});
  ss.initClass(dR, aa, {});
  ss.initClass(dT, aa, {});
  ss.initClass(dV, aa, {});
  ss.initClass(dX, aa, {});
  ss.initClass(dZ, aa, {});
  ss.initClass(d1, aa, {});
  ss.initClass(d3, aa, {});
  ss.initClass(d7, aa, {});
  ss.initClass(d5, aa, {}, d7);
  ss.initClass(d9, aa, {});
  ss.initClass(eb, aa, {});
  ss.initClass(ed, aa, {}, aR);
  ss.initClass(a8, aa, {});
  ss.initClass(b2, aa, {});
  ss.initClass(b4, aa, {
    get_count: null,
    serialize: null,
    postprocessData: null,
  });
  ss.initClass(b8, aa, {}, a8);
  ss.initClass(
    c0,
    aa,
    {
      get_count: function () {
        return ss.isNullOrUndefined(this.get_data().correct)
          ? 0
          : this.get_data().correct.length;
      },
      postprocessData: function () {},
    },
    ss.makeGenericType(b6, [b8])
  );
  ss.initClass(c2, aa, {}, ss.makeGenericType(b0, [c4]));
  ss.initClass(c4, aa, {});
  ss.initClass(
    c6,
    aa,
    {
      get_count: function () {
        return ss.isNullOrUndefined(this.get_data().content)
          ? 0
          : this.get_data().content.length;
      },
      postprocessData: function () {},
    },
    ss.makeGenericType(b6, [c2])
  );
  ss.initClass(c8, aa, {});
  ss.initClass(dM, aa, {}, ss.makeGenericType(b0, [dO]));
  ss.initClass(dO, aa, {}, ss.makeGenericType(b0, [d4]));
  ss.initClass(
    dQ,
    aa,
    {
      get_count: function () {
        return ss.isNullOrUndefined(this.get_data().content)
          ? 0
          : this.get_data().content.length;
      },
      postprocessData: function () {},
    },
    ss.makeGenericType(b6, [dO])
  );
  ss.initClass(
    dS,
    aa,
    {
      get_count: function () {
        return ss.isNullOrUndefined(this.get_data().content)
          ? 0
          : this.get_data().content.length;
      },
      postprocessData: function () {},
    },
    ss.makeGenericType(b6, [dM])
  );
  ss.initClass(dU, aa, {}, ss.makeGenericType(b0, [dW]));
  ss.initClass(dW, aa, {});
  ss.initClass(dY, aa, {});
  ss.initClass(
    d0,
    aa,
    {
      get_count: function () {
        return ss.isNullOrUndefined(this.get_data().content)
          ? 0
          : this.get_data().content.length;
      },
      postprocessData: function () {
        if (
          ss.isNullOrUndefined(
            Enumerable.from(this.get_data().content).first().secondary
          )
        ) {
          return;
        }
        var a = new ss.Random();
        var b = function () {
          return a.next();
        };
        var c = eA.getInteger(eA.static$1, eC.genAIQuizShuffleAnswers);
        switch (c) {
          case 1:
            this.basicShuffle(b);
            break;
          case 2:
            this.advancedShuffle(b);
            break;
        }
      },
      basicShuffle: function (a) {
        var b = this.get_data().content;
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          d.secondary = Enumerable.from(d.secondary)
            .orderBy(function (e) {
              return a();
            })
            .toArray();
        }
      },
      advancedShuffle: function (a) {
        var b = Enumerable.from(this.get_data().content).count();
        var c = Enumerable.from(this.get_data().content).max(function (l) {
          return l.secondary.length;
        });
        var d = new Array();
        var e = this.get_data().content;
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          var h = g.secondary.length;
          var i = Enumerable.from(g.secondary).count(function (l) {
            return l.isCorrect;
          });
          d0.$4(a, c, d, i);
          var j = { $: d0.$1(d, h, i) };
          var k = d0.$2(g, j);
          d0.$3(g, j.$, k);
        }
      },
    },
    ss.makeGenericType(b6, [dU])
  );
  ss.initClass(d2, aa, {}, ss.makeGenericType(b0, [d4]));
  ss.initClass(d4, aa, {});
  ss.initClass(
    d6,
    aa,
    {
      get_count: function () {
        return ss.isNullOrUndefined(this.get_data().content)
          ? 0
          : this.get_data().content.length;
      },
      postprocessData: function () {},
    },
    ss.makeGenericType(b6, [d2])
  );
  ss.initClass(d8, aa, {});
  ss.initClass(ea, aa, {});
  ss.initClass(ec, aa, {});
  ss.initClass(ee, aa, {});
  ss.initClass(eh, aa, {});
  ss.initClass(ej, aa, {});
  ss.initClass(el, aa, {});
  ss.initClass(en, aa, {});
  ss.initClass(ep, aa, {});
  ss.initClass(er, aa, {});
  ss.initClass(et, aa, {});
  ss.initClass(ev, aa, {});
  ss.initClass(ex, aa, {});
  ss.initClass(ez, aa, {});
  ss.initClass(eD, aa, {});
  ss.initClass(eF, aa, {});
  ss.initInterface(ew, aa, { get_key: null, get_untypedDefaultValue: null });
  ss.initInterface(eo, aa, {}, [ew, ss.makeGenericType(ey, [Boolean])]);
  ss.initClass(eG, aa, {}, ss.makeGenericType(eO, [Boolean]), [
    ew,
    ss.makeGenericType(ey, [Boolean]),
    eo,
  ]);
  ss.initInterface(eq, aa, {}, [ew, ss.makeGenericType(ey, [ss.Int32])]);
  ss.initClass(eH, aa, {}, ss.makeGenericType(eO, [ss.Int32]), [
    ew,
    ss.makeGenericType(ey, [ss.Int32]),
    eq,
  ]);
  ss.initInterface(es, aa, {}, [ew, ss.makeGenericType(ey, [String])]);
  ss.initClass(eI, aa, {}, ss.makeGenericType(eO, [String]), [
    ew,
    ss.makeGenericType(ey, [String]),
    es,
  ]);
  ss.initClass(eJ, aa, {}, ss.makeGenericType(eO, [Boolean]), [
    ew,
    ss.makeGenericType(ey, [Boolean]),
    eo,
  ]);
  ss.initClass(eK, aa, {}, ss.makeGenericType(eO, [ss.Int32]), [
    ew,
    ss.makeGenericType(ey, [ss.Int32]),
    eq,
  ]);
  ss.initClass(eL, aa, {}, ss.makeGenericType(eO, [String]), [
    ew,
    ss.makeGenericType(ey, [String]),
    es,
  ]);
  ss.initClass(eM, aa, {});
  ss.initClass(eN, aa, {});
  ss.initInterface(eu, aa, {
    get_experiments: null,
    get_isGuest: null,
    get_isBasic: null,
    get_isPro: null,
    get_isTest: null,
    get_userId: null,
    get_localeId: null,
    get_languageId: null,
    get_page: null,
    get_templateId: null,
    get_themeId: null,
    get_overrides: null,
  });
  ss.initClass(
    eP,
    aa,
    {
      get_experiments: function () {
        return this.$1$1;
      },
      set_experiments: function (a) {
        this.$1$1 = a;
      },
      get_isGuest: function () {
        return this.$1$2;
      },
      set_isGuest: function (a) {
        this.$1$2 = a;
      },
      get_isBasic: function () {
        return this.$1$3;
      },
      set_isBasic: function (a) {
        this.$1$3 = a;
      },
      get_isPro: function () {
        return this.$1$4;
      },
      set_isPro: function (a) {
        this.$1$4 = a;
      },
      get_isTest: function () {
        return this.$1$5;
      },
      set_isTest: function (a) {
        this.$1$5 = a;
      },
      get_userId: function () {
        return this.$1$6;
      },
      set_userId: function (a) {
        this.$1$6 = a;
      },
      get_localeId: function () {
        return this.$1$7;
      },
      set_localeId: function (a) {
        this.$1$7 = a;
      },
      get_languageId: function () {
        return this.$1$8;
      },
      set_languageId: function (a) {
        this.$1$8 = a;
      },
      get_page: function () {
        return this.$1$9;
      },
      set_page: function (a) {
        this.$1$9 = a;
      },
      get_templateId: function () {
        return this.$1$10;
      },
      set_templateId: function (a) {
        this.$1$10 = a;
      },
      get_themeId: function () {
        return this.$1$11;
      },
      set_themeId: function (a) {
        this.$1$11 = a;
      },
      get_overrides: function () {
        return this.$1$12;
      },
      set_overrides: function (a) {
        this.$1$12 = a;
      },
    },
    null,
    [eu]
  );
  ss.initClass(eQ, aa, {});
  ss.initClass(eR, aa, {});
  ss.initClass(ei, aa, {});
  ss.initClass(ek, aa, {});
  ss.initClass(em, aa, {});
  ss.initClass(eA, aa, {});
  ss.initClass(eC, aa, {}, eN);
  ss.initClass(
    eE,
    aa,
    {
      get_experiments: function () {
        return [];
      },
      get_isGuest: function () {
        return true;
      },
      get_isBasic: function () {
        return false;
      },
      get_isPro: function () {
        return false;
      },
      get_isTest: function () {
        return false;
      },
      get_userId: function () {
        return 0;
      },
      get_localeId: function () {
        return 0;
      },
      get_languageId: function () {
        return 0;
      },
      get_page: function () {
        return 0;
      },
      get_templateId: function () {
        return 0;
      },
      get_themeId: function () {
        return 0;
      },
      get_overrides: function () {
        return new (ss.makeGenericType(ss.Dictionary$2, [String, String]))();
      },
    },
    null,
    [eu]
  );
  ss.setMetadata(fm, { enumFlags: true });
  ss.setMetadata(aO, {
    attr: [new eD()],
    members: [
      { name: ".ctor", type: 1, params: [] },
      { name: "EntryId", type: 4, returnType: ss.Int32, sname: "entryId" },
      { name: "Name", type: 4, returnType: String, sname: "name" },
      { name: "Score", type: 4, returnType: ss.Int32, sname: "score" },
      { name: "Time", type: 4, returnType: ss.Int32, sname: "time" },
    ],
  });
  ss.setMetadata(aS, {
    attr: [new eD()],
    members: [
      { name: ".ctor", type: 1, params: [] },
      {
        name: "AllowDuplicates",
        type: 4,
        returnType: Boolean,
        sname: "allowDuplicates",
      },
      { name: "Enabled", type: 4, returnType: Boolean, sname: "enabled" },
      {
        name: "EntryCount",
        type: 4,
        returnType: ss.Int32,
        sname: "entryCount",
      },
      { name: "Error", type: 4, returnType: String, sname: "error" },
      {
        name: "RemovalTime",
        type: 4,
        returnType: ss.Int32,
        sname: "removalTime",
      },
    ],
  });
  ss.setMetadata(eR, { attr: [new eD()] });
  ss.setMetadata(ei, { attr: [new eD()] });
  ss.setMetadata(ek, { attr: [new eD()] });
  ss.setMetadata(em, { attr: [new eD()] });
  (function () {
    fg.codeDefinedTypes = [1, 2, 13];
  })();
  (function () {
    fn.myActivitiesItemLimit = 500;
    fn.myResultsItemLimit = 500;
    fn.showAiFeedbackBannerKey = "ShowAiFeedbackBanner";
    fn.aiAssistClicksKey = "AIAssistClicks";
  })();
  (function () {
    fr.basecamp = "basecamp";
  })();
  (function () {
    ft.cdn = "//app.cdn.skynet.net/";
    ft.blob = "//wordwallapp.blob.core.windows.net/";
  })();
  (function () {
    fv.static$1 = "static";
    fv.test = "test";
    fv.about = "about";
    fv.imagePreviews = "previews";
  })();
  (function () {
    fx.blob = "//wordwallcache.blob.core.windows.net/";
  })();
  (function () {
    fz.activityText = "activity-text";
    fz.community = "community";
    fz.exchangeRate = "exchange-rates";
    fz.imageSearch = "image";
    fz.prebuild = "prebuild";
    fz.print = "print";
    fz.search = "search";
    fz.siteMap = "sitemap";
  })();
  (function () {
    ae.basic = 10;
    ae.individual = 14;
    ae.standard = 15;
    ae.pro = 16;
    ae.basicPlus = 17;
  })();
  (function () {
    ag.liveBitRate = 64;
    ag.maleVoice = "male";
    ag.femaleVoice = "female";
  })();
  (function () {
    ai.categoryEssential = "essential";
    ai.categoryFunctional = "functional";
    ai.categoryAnalytics = "analytics";
    ai.categoryMarketing = "marketing";
    ai.serviceGoogleClassroom = "googleClassroom";
    ai.serviceYouTube = "youTube";
  })();
  (function () {
    ak.blob = "//wordwalldata.blob.core.windows.net/";
  })();
  (function () {
    am.experimentScreenshots = "experiment-screenshots";
    am.activitySamples = "activity-samples";
  })();
  (function () {
    ao.pageVisit = 500;
    ao.pageLanding = 100;
  })();
  (function () {
    aq.fonts = "/content/icons/fonts/";
    aq.themes = "/content/icons/themes/";
    aq.printers = "/content/icons/printers/";
    aq.templates = "/content/icons/templates/";
  })();
  (function () {
    at.cdn = "//screens.cdn.skynet.net/";
    at.blob = "//wordwallscreens.blob.core.windows.net/";
  })();
  (function () {
    av.contentSoundsVolume = 0.25;
    av.soundEffectsVolume = 0.1;
    av.musicVolume = 0.05;
    av.loopingSoundVolume = 0.05;
  })();
  (function () {
    ax.maxAgeBands = 8;
    ax.maxSubjects = 3;
    ax.maxTopics = 3;
  })();
  (function () {
    az.cdn = "//themes.cdn.skynet.net/";
    az.blob = "//wordwallthemes.blob.core.windows.net/";
    az.assetsBlob = "//wordwallthemeassets.blob.core.windows.net/";
    az.containerName = "editing-themes";
    az.soundsSourceFolder = "sounds/src/";
    az.audioExperimentsSourceFolder = "sounds/src/sound-experiments/";
    az.imagesSourceFolder = "images/src/";
    az.themeXmlsFolderPattern = "xml/{0}/";
    az.xmlsNamePattern = "xml/{0}/{1}/{2}/{3}";
    az.audiosXmlName = "Audios.xml";
    az.animationsXmlName = "Animations.xml";
    az.buildersFolderName = "Builders";
    az.scenesFolderName = "Scenes";
    az.settingsXmlName = "Settings.xml";
    az.paletteXmlName = "Palette.xml";
    az.debugXmlName = "Debug.xml";
    az.workNameRegex = "^[a-zA-Z0-9]+$";
    az.assetNameRegex = "^[a-z0-9._/-]+$";
    az.maxSoundAssetFileSize = 512000;
  })();
  (function () {
    aB.blobDev = "//wordwalluserdev.blob.core.windows.net/";
    aB.blobLive = "//wordwalluser.blob.core.windows.net/";
    aB.cdnDev = "//wordwalluserdev-eff8heh8e8hxhcc7.z02.azurefd.net/";
    aB.cdnLive = "//user.cdn.skynet.net/";
    aB.cdn = "//user.cdn.skynet.net/";
    aB.blob = "//wordwalluser.blob.core.windows.net/";
  })();
  (function () {
    aD.profileImages = "profile-images";
    aD.contentSounds = "content-sounds";
    aD.contentModels = "content-models";
    aD.contentImages = "content-images";
    aD.documents = "documents";
    aD.assignmentGameStates = "assignment-gamestates";
    aD.assignmentPlayerStates = "assignment-playerstates";
    aD.assignmentImages = "assignment-images";
  })();
  (function () {
    aF.noTimeout = 0;
    aF.$0 = 100;
  })();
  (function () {
    dV.AllTemplateValue = "All";
  })();
  (function () {
    eN.keys = new (ss.makeGenericType(ss.Dictionary$2, [String, ew]))();
    eN.$0 = false;
  })();
  (function () {
    eA.$8 = new (ss.makeGenericType(ss.Dictionary$2, [String, ek]))();
    eA.$7 = [];
    eA.static$1 = new eE();
    eA.$6 = (10000).toString();
  })();
  (function () {
    eC.userFeedback = new eJ("User_Feedback", false);
    eC.allowDuplicateItemsInMatchUp = new eJ(
      "Allow_Duplicates_In_Match_Up",
      false
    );
    eC.musicDefaultMuteSetting = new eK("Music_Default_Mute_Setting", 0);
    eC.whackAMoleDecreaseMinimum = new eJ(
      "Whack_A_Mole_Decrease_Minimum",
      false
    );
    eC.labeledDiagramHighlightPinsWithLabels = new eJ(
      "Labeled_Diagram_Highlight_Pins_With_Labels",
      false
    );
    eC.cancelSubscriptionModal = new eJ("Cancel_Subscription_Modal", true);
    eC.missingWordEditorOverhaul = new eJ(
      "Missing_Word_Editor_Overhaul",
      false
    );
    eC.watchAndMemorizeEditorItemsHeader = new eJ(
      "Watch_And_Memorize_Editor_Items_Header",
      false
    );
    eC.pairsTurnOverTiming = new eJ("Pairs_Turn_Over_Timing", false);
    eC.pairsFinishButton = new eJ("Pairs_Finish_Button", false);
    eC.showBasicLimitBlock = new eJ("Show_Basic_Limit_Block", true);
    eC.quizEditorToggle = new eJ("Quiz_Editor_Toggle", false);
    eC.quizEditorNoPoll = new eJ("Quiz_Editor_No_Poll", false);
    eC.showBalloonPopLivesOption = new eJ(
      "Show_Balloon_Pop_Lives_Option",
      false
    );
    eC.matchUpAddSounds = new eJ("Match_Up_Add_Sounds", false);
    eC.speedsortInitialItems = new eK("Speedsort_Initial_Items", 1);
    eC.fillFromPairedItem = new eJ("Fill_From_Paired_Item", false);
    eC.unifiedShareModal = new eK("Unified_Share_Modal", 0);
    eC.printModalBottomButtons = new eJ("Print_Modal_Bottom_Buttons", false);
    eC.expandLeaderboardOptions = new eJ("Expand_Leaderboard_Options", false);
    eC.textToSpeechSpeedControls = new eJ(
      "Text_To_Speech_Speed_Controls",
      false
    );
    eC.enableAiGeneration2 = new eJ("Enable_Ai_Generation_2", false);
    eC.genAIFromFiles = new eJ("Gen_AI_From_Files", false);
    eC.aiGenFeedbackBanner = new eJ("AI_Gen_Feedback_Banner", false);
    eC.aiAssistFeedbackBanner = new eJ("AI_Assist_Feedback_Banner", false);
    eC.homepageVideo = new eJ("Homepage_Video", false);
    eC.storeGenAIPrompt = new eJ("Store_Gen_AI_Prompt", false);
    eC.keepExistingContentByDefault = new eJ(
      "Keep_Existing_Content_By_Default",
      false
    );
    eC.genAIQuizShuffleAnswers = new eK("Gen_AI_Shuffle_Answers", 0);
    eC.leaderboardOptionsShowRemove = new eJ(
      "Leaderboard_Options_Show_Remove",
      false
    );
    eC.hideAuthorLink = new eJ("Hide_Author_Link", false);
    eC.authorLinkProfileImage = new eJ("Author_Link_Profile_Image", false);
    eC.genAIUseExistingContent = new eJ("Gen_AI_Use_Existing_Content", false);
    eC.notifyForNewSubmissions = new eJ("Notify_For_New_Submissions", false);
    eC.basicAssignmentLimit = new eK("Basic_Assignment_Limit", 0);
    eC.genAIGenerateSimilarButton = new eK("Gen_AI_Generate_Similar_Button", 0);
    eC.showLikesInActivityPage = new eJ("Show_Likes_In_Activity_Page", false);
    eC.showLikesInAuthorPage = new eJ("Show_Likes_In_Author_Page", false);
    eC.updatedPolicyEffectiveDate = new eL(
      "Updated_Policy_Effective_Date",
      null
    );
    eC.googleUsersAcceptPolicy = new eJ("Google_Users_Accept_Policy", false);
    eC.revisedGenAIUI = new eK("Revised_GenAI_UI", 0);
    eC.aiContentWarnings = new eJ("AI_Content_Warnings", false);
  })();
  (function () {
    ea.allStudentsAssigneeMode = "ALL_STUDENTS";
    ea.individualStudentsAssigneeMode = "INDIVIDUAL_STUDENTS";
  })();
  (function () {
    ee.iframeInitializationFailed = "idpiframe_initialization_failed";
    ee.popUpClosedByUserErrorCode = "popup_closed";
    ee.accessDenied = "access_denied";
    ee.immediateFailed = "immediate_failed";
  })();
  (function () {
    er.submissionStateTurnedIn = "TURNED_IN";
  })();
  (function () {
    eQ.login = "login9";
    eQ.experiment = "expt";
    eQ.device = "device";
    eQ.licenseToBeExpiredBanner = "licensetobeexpired";
    eQ.newSubscriberFeedbackBanner = "newsubscriberfeedback";
    eQ.referrer = "referrer2";
    eQ.switchOverrides = "__debug__override";
    eQ.cookieConsent = "cc_cookie";
    eQ.debugCookieConsentHideFromBots = "__debug_cc_hide_from_bots";
    eQ.tempData = "temp";
  })();
})();
