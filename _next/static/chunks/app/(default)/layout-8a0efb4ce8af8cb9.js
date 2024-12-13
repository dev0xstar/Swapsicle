(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [534],
  {
    9768: function (e, t, i) {
      e.exports = (function () {
        "use strict";
        var e =
            "undefined" != typeof window
              ? window
              : void 0 !== i.g
              ? i.g
              : "undefined" != typeof self
              ? self
              : {},
          t = "Expected a function",
          a = NaN,
          n = /^\s+|\s+$/g,
          o = /^[-+]0x[0-9a-f]+$/i,
          r = /^0b[01]+$/i,
          s = /^0o[0-7]+$/i,
          c = parseInt,
          l = "object" == typeof e && e && e.Object === Object && e,
          d = "object" == typeof self && self && self.Object === Object && self,
          m = l || d || Function("return this")(),
          u = Object.prototype.toString,
          f = Math.max,
          p = Math.min,
          h = function () {
            return m.Date.now();
          };
        function g(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function v(e) {
          if ("number" == typeof e) return e;
          if (
            "symbol" == typeof (t = e) ||
            (t && "object" == typeof t && "[object Symbol]" == u.call(t))
          )
            return a;
          if (g(e)) {
            var t,
              i = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(i) ? i + "" : i;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(n, "");
          var l = r.test(e);
          return l || s.test(e) ? c(e.slice(2), l ? 2 : 8) : o.test(e) ? a : +e;
        }
        var b = function (e, i, a) {
            var n = !0,
              o = !0;
            if ("function" != typeof e) throw TypeError(t);
            return (
              g(a) &&
                ((n = "leading" in a ? !!a.leading : n),
                (o = "trailing" in a ? !!a.trailing : o)),
              (function (e, i, a) {
                var n,
                  o,
                  r,
                  s,
                  c,
                  l,
                  d = 0,
                  m = !1,
                  u = !1,
                  b = !0;
                if ("function" != typeof e) throw TypeError(t);
                function w(t) {
                  var i = n,
                    a = o;
                  return (n = o = void 0), (d = t), (s = e.apply(a, i));
                }
                function x(e) {
                  var t = e - l;
                  return void 0 === l || t >= i || t < 0 || (u && e - d >= r);
                }
                function y() {
                  var e,
                    t = h();
                  if (x(t)) return j(t);
                  c = setTimeout(
                    y,
                    ((e = i - (t - l)), u ? p(e, r - (t - d)) : e)
                  );
                }
                function j(e) {
                  return (c = void 0), b && n ? w(e) : ((n = o = void 0), s);
                }
                function N() {
                  var e,
                    t = h(),
                    a = x(t);
                  if (((n = arguments), (o = this), (l = t), a)) {
                    if (void 0 === c)
                      return (d = e = l), (c = setTimeout(y, i)), m ? w(e) : s;
                    if (u) return (c = setTimeout(y, i)), w(l);
                  }
                  return void 0 === c && (c = setTimeout(y, i)), s;
                }
                return (
                  (i = v(i) || 0),
                  g(a) &&
                    ((m = !!a.leading),
                    (r = (u = "maxWait" in a) ? f(v(a.maxWait) || 0, i) : r),
                    (b = "trailing" in a ? !!a.trailing : b)),
                  (N.cancel = function () {
                    void 0 !== c && clearTimeout(c),
                      (d = 0),
                      (n = l = o = c = void 0);
                  }),
                  (N.flush = function () {
                    return void 0 === c ? s : j(h());
                  }),
                  N
                );
              })(e, i, { leading: n, maxWait: i, trailing: o })
            );
          },
          w = NaN,
          x = /^\s+|\s+$/g,
          y = /^[-+]0x[0-9a-f]+$/i,
          j = /^0b[01]+$/i,
          N = /^0o[0-7]+$/i,
          k = parseInt,
          A = "object" == typeof e && e && e.Object === Object && e,
          E = "object" == typeof self && self && self.Object === Object && self,
          O = A || E || Function("return this")(),
          C = Object.prototype.toString,
          S = Math.max,
          T = Math.min,
          M = function () {
            return O.Date.now();
          };
        function z(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function D(e) {
          if ("number" == typeof e) return e;
          if (
            "symbol" == typeof (t = e) ||
            (t && "object" == typeof t && "[object Symbol]" == C.call(t))
          )
            return w;
          if (z(e)) {
            var t,
              i = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = z(i) ? i + "" : i;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(x, "");
          var a = j.test(e);
          return a || N.test(e) ? k(e.slice(2), a ? 2 : 8) : y.test(e) ? w : +e;
        }
        var L = function (e, t, i) {
            var a,
              n,
              o,
              r,
              s,
              c,
              l = 0,
              d = !1,
              m = !1,
              u = !0;
            if ("function" != typeof e) throw TypeError("Expected a function");
            function f(t) {
              var i = a,
                o = n;
              return (a = n = void 0), (l = t), (r = e.apply(o, i));
            }
            function p(e) {
              var i = e - c;
              return void 0 === c || i >= t || i < 0 || (m && e - l >= o);
            }
            function h() {
              var e,
                i = M();
              if (p(i)) return g(i);
              s = setTimeout(h, ((e = t - (i - c)), m ? T(e, o - (i - l)) : e));
            }
            function g(e) {
              return (s = void 0), u && a ? f(e) : ((a = n = void 0), r);
            }
            function v() {
              var e,
                i = M(),
                o = p(i);
              if (((a = arguments), (n = this), (c = i), o)) {
                if (void 0 === s)
                  return (l = e = c), (s = setTimeout(h, t)), d ? f(e) : r;
                if (m) return (s = setTimeout(h, t)), f(c);
              }
              return void 0 === s && (s = setTimeout(h, t)), r;
            }
            return (
              (t = D(t) || 0),
              z(i) &&
                ((d = !!i.leading),
                (o = (m = "maxWait" in i) ? S(D(i.maxWait) || 0, t) : o),
                (u = "trailing" in i ? !!i.trailing : u)),
              (v.cancel = function () {
                void 0 !== s && clearTimeout(s),
                  (l = 0),
                  (a = c = n = s = void 0);
              }),
              (v.flush = function () {
                return void 0 === s ? r : g(M());
              }),
              v
            );
          },
          q = function () {};
        function H(e) {
          e &&
            e.forEach(function (e) {
              var t = Array.prototype.slice.call(e.addedNodes),
                i = Array.prototype.slice.call(e.removedNodes);
              if (
                (function e(t) {
                  var i = void 0,
                    a = void 0;
                  for (i = 0; i < t.length; i += 1)
                    if (
                      ((a = t[i]).dataset && a.dataset.aos) ||
                      (a.children && e(a.children))
                    )
                      return !0;
                  return !1;
                })(t.concat(i))
              )
                return q();
            });
        }
        function P() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        var B = {
            isSupported: function () {
              return !!P();
            },
            ready: function (e, t) {
              var i = window.document,
                a = new (P())(H);
              (q = t),
                a.observe(i.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0,
                });
            },
          },
          _ = function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          },
          Z = (function () {
            function e(e, t) {
              for (var i = 0; i < t.length; i++) {
                var a = t[i];
                (a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  "value" in a && (a.writable = !0),
                  Object.defineProperty(e, a.key, a);
              }
            }
            return function (t, i, a) {
              return i && e(t.prototype, i), a && e(t, a), t;
            };
          })(),
          F =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var a in i)
                  Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
              }
              return e;
            },
          R =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          U =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          V =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          W =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
        function G() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        var J = new ((function () {
            function e() {
              _(this, e);
            }
            return (
              Z(e, [
                {
                  key: "phone",
                  value: function () {
                    var e = G();
                    return !(!R.test(e) && !U.test(e.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var e = G();
                    return !(!V.test(e) && !W.test(e.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
                {
                  key: "ie11",
                  value: function () {
                    return (
                      "-ms-scroll-limit" in document.documentElement.style &&
                      "-ms-ime-align" in document.documentElement.style
                    );
                  },
                },
              ]),
              e
            );
          })())(),
          Y = function (e, t) {
            var i = void 0;
            return (
              J.ie11()
                ? (i = document.createEvent("CustomEvent")).initCustomEvent(
                    e,
                    !0,
                    !0,
                    { detail: t }
                  )
                : (i = new CustomEvent(e, { detail: t })),
              document.dispatchEvent(i)
            );
          },
          $ = function (e) {
            return e.forEach(function (e, t) {
              var i, a, n, o, r, s;
              return (
                (i = window.pageYOffset),
                (a = e.options),
                (n = e.position),
                (o = e.node),
                e.data,
                (r = function () {
                  var t;
                  e.animated &&
                    ((t = a.animatedClassNames) &&
                      t.forEach(function (e) {
                        return o.classList.remove(e);
                      }),
                    Y("aos:out", o),
                    e.options.id && Y("aos:in:" + e.options.id, o),
                    (e.animated = !1));
                }),
                void (a.mirror && i >= n.out && !a.once
                  ? r()
                  : i >= n.in
                  ? e.animated ||
                    ((s = a.animatedClassNames) &&
                      s.forEach(function (e) {
                        return o.classList.add(e);
                      }),
                    Y("aos:in", o),
                    e.options.id && Y("aos:in:" + e.options.id, o),
                    (e.animated = !0))
                  : e.animated && !a.once && r())
              );
            });
          },
          X = function (e) {
            for (
              var t = 0, i = 0;
              e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

            )
              (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                (i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                (e = e.offsetParent);
            return { top: i, left: t };
          },
          K = function (e, t, i) {
            var a = e.getAttribute("data-aos-" + t);
            if (void 0 !== a) {
              if ("true" === a) return !0;
              if ("false" === a) return !1;
            }
            return a || i;
          },
          I = function () {
            var e = document.querySelectorAll("[data-aos]");
            return Array.prototype.map.call(e, function (e) {
              return { node: e };
            });
          },
          Q = [],
          ee = !1,
          et = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            mirror: !1,
            anchorPlacement: "top-bottom",
            startEvent: "DOMContentLoaded",
            animatedClassName: "aos-animate",
            initClassName: "aos-init",
            useClassNames: !1,
            disableMutationObserver: !1,
            throttleDelay: 99,
            debounceDelay: 50,
          },
          ei = function () {
            return document.all && !window.atob;
          },
          ea = function () {
            var e, t;
            arguments.length > 0 &&
              void 0 !== arguments[0] &&
              arguments[0] &&
              (ee = !0),
              ee &&
                ((e = Q),
                (t = et),
                e.forEach(function (e, i) {
                  var a,
                    n,
                    o,
                    r,
                    s,
                    c = K(e.node, "mirror", t.mirror),
                    l = K(e.node, "once", t.once),
                    d = K(e.node, "id"),
                    m = t.useClassNames && e.node.getAttribute("data-aos"),
                    u = [t.animatedClassName]
                      .concat(m ? m.split(" ") : [])
                      .filter(function (e) {
                        return "string" == typeof e;
                      });
                  t.initClassName && e.node.classList.add(t.initClassName),
                    (e.position = {
                      in: (function (e, t, i) {
                        var a = window.innerHeight,
                          n = K(e, "anchor"),
                          o = K(e, "anchor-placement"),
                          r = Number(K(e, "offset", o ? 0 : t)),
                          s = o || i,
                          c = e;
                        n &&
                          document.querySelectorAll(n) &&
                          (c = document.querySelectorAll(n)[0]);
                        var l = X(c).top - a;
                        switch (s) {
                          case "top-bottom":
                            break;
                          case "center-bottom":
                            l += c.offsetHeight / 2;
                            break;
                          case "bottom-bottom":
                            l += c.offsetHeight;
                            break;
                          case "top-center":
                            l += a / 2;
                            break;
                          case "center-center":
                            l += a / 2 + c.offsetHeight / 2;
                            break;
                          case "bottom-center":
                            l += a / 2 + c.offsetHeight;
                            break;
                          case "top-top":
                            l += a;
                            break;
                          case "bottom-top":
                            l += a + c.offsetHeight;
                            break;
                          case "center-top":
                            l += a + c.offsetHeight / 2;
                        }
                        return l + r;
                      })(e.node, t.offset, t.anchorPlacement),
                      out:
                        c &&
                        ((a = e.node),
                        (n = t.offset),
                        window.innerHeight,
                        (o = K(a, "anchor")),
                        (r = K(a, "offset", n)),
                        (s = a),
                        o &&
                          document.querySelectorAll(o) &&
                          (s = document.querySelectorAll(o)[0]),
                        X(s).top + s.offsetHeight - r),
                    }),
                    (e.options = {
                      once: l,
                      mirror: c,
                      animatedClassNames: u,
                      id: d,
                    });
                }),
                $((Q = e)),
                window.addEventListener(
                  "scroll",
                  b(function () {
                    $(Q, et.once);
                  }, et.throttleDelay)
                ));
          },
          en = function () {
            if (((Q = I()), er(et.disable) || ei())) return eo();
            ea();
          },
          eo = function () {
            Q.forEach(function (e, t) {
              e.node.removeAttribute("data-aos"),
                e.node.removeAttribute("data-aos-easing"),
                e.node.removeAttribute("data-aos-duration"),
                e.node.removeAttribute("data-aos-delay"),
                et.initClassName && e.node.classList.remove(et.initClassName),
                et.animatedClassName &&
                  e.node.classList.remove(et.animatedClassName);
            });
          },
          er = function (e) {
            return (
              !0 === e ||
              ("mobile" === e && J.mobile()) ||
              ("phone" === e && J.phone()) ||
              ("tablet" === e && J.tablet()) ||
              ("function" == typeof e && !0 === e())
            );
          };
        return {
          init: function (e) {
            return (
              (et = F(et, e)),
              (Q = I()),
              et.disableMutationObserver ||
                B.isSupported() ||
                (console.info(
                  '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                ),
                (et.disableMutationObserver = !0)),
              et.disableMutationObserver || B.ready("[data-aos]", en),
              er(et.disable) || ei()
                ? eo()
                : (document
                    .querySelector("body")
                    .setAttribute("data-aos-easing", et.easing),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-duration", et.duration),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-delay", et.delay),
                  -1 === ["DOMContentLoaded", "load"].indexOf(et.startEvent)
                    ? document.addEventListener(et.startEvent, function () {
                        ea(!0);
                      })
                    : window.addEventListener("load", function () {
                        ea(!0);
                      }),
                  "DOMContentLoaded" === et.startEvent &&
                    ["complete", "interactive"].indexOf(document.readyState) >
                      -1 &&
                    ea(!0),
                  window.addEventListener(
                    "resize",
                    L(ea, et.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "orientationchange",
                    L(ea, et.debounceDelay, !0)
                  ),
                  Q)
            );
          },
          refresh: ea,
          refreshHard: en,
        };
      })();
    },
    9911: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 4748));
    },
    4748: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return f;
          },
        });
      var a = i(9268),
        n = i(6006),
        o = i(9768),
        r = i.n(o);
      i(3263);
      var s = i(5846),
        c = i.n(s),
        l = i(6394),
        d = i.n(l),
        m = {
          src: "/images/logo.png",
          height: 500,
          width: 500,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEWVot1ld/pQYvnD3PCsufZuhPJIXfxRZPu069mg69F2jvj///+HlfdYbfmzv/Vuf/edp/dQY/55jPfK1vJ1i/WTpfO7yPKJt+3P7eeY9MeLv+mk8ta81C8SAAAAHHRSTlMBTFogiRsxtX5ZuwmRmHCKryltf6GaT2iVmIXa8eclnwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJwVyrcRwDAMALFXoEjKOaf99/SpQwEWVS0AGihRgAphiMCc+2ndq5DymA+5Xui2E9zav80/b0hm/vw8JgHrnTp6pgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        };
      function u() {
        return (0, a.jsx)("footer", {
          children: (0, a.jsx)("div", {
            className: "py-12 border-t border-gray-800 md:py-16",
            children: (0, a.jsxs)("div", {
              className: "max-w-6xl px-4 mx-auto sm:px-6",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "grid gap-8 mb-8 md:grid-cols-12 lg:gap-20 md:mb-12",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "md:col-span-4 lg:col-span-5",
                      children: [
                        (0, a.jsx)("div", {
                          className: "mb-2",
                          children: (0, a.jsx)(c(), {
                            href: "/",
                            className: "inline-block",
                            "aria-label": "Cruip",
                            children: (0, a.jsx)(d(), {
                              src: m,
                              alt: "Swapsicle Logo",
                              width: 40,
                              height: 40,
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "text-gray-400",
                          children:
                            "By interacting with or connecting a wallet to Swapsicle, you agree to the Terms of Use, Terms and Conditions and Privacy Policy found within the footer.",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "grid gap-8 md:col-span-8 lg:col-span-7 sm:grid-cols-3",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "text-sm",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "mb-1 font-medium text-gray-200",
                              children: "About",
                            }),
                            (0, a.jsxs)("ul", {
                              children: [
                                (0, a.jsx)("li", {
                                  className: "mb-1",
                                  children: (0, a.jsx)(c(), {
                                    href: "https://docs.swapsicle.io/",
                                    className:
                                      "text-gray-400 transition duration-150 ease-in-out hover:text-gray-100",
                                    children: "Documentation",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "mb-1",
                                  children: (0, a.jsx)(c(), {
                                    href: "https://dexscreener.com/telos/swapsicle",
                                    className:
                                      "text-gray-400 transition duration-150 ease-in-out hover:text-gray-100",
                                    children: "Dexscreener Telos",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "mb-1",
                                  children: (0, a.jsx)(c(), {
                                    href: "https://dexscreener.com/mantle/swapsicle",
                                    className:
                                      "text-gray-400 transition duration-150 ease-in-out hover:text-gray-100",
                                    children: "Dexscreener Mantle",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "mb-1",
                                  children: (0, a.jsx)(c(), {
                                    href: "https://www.geckoterminal.com/tlos/swapsicle-v2-telos/pools",
                                    className:
                                      "text-gray-400 transition duration-150 ease-in-out hover:text-gray-100",
                                    children: "GeckoTerminal Telos",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "mb-1",
                                  children: (0, a.jsx)(c(), {
                                    href: "https://www.geckoterminal.com/mantle/swapsicle-v2-mantle/pools",
                                    className:
                                      "text-gray-400 transition duration-150 ease-in-out hover:text-gray-100",
                                    children: "GeckoTerminal Mantle",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "mb-1",
                                  children: (0, a.jsx)(c(), {
                                    href: "https://defillama.com/protocol/swapsicle",
                                    className:
                                      "text-gray-400 transition duration-150 ease-in-out hover:text-gray-100",
                                    children: "DefiLlama",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "text-sm",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "mb-1 font-medium text-gray-200",
                              children: "Get in Touch",
                            }),
                            (0, a.jsxs)("ul", {
                              children: [
                                (0, a.jsx)("li", {
                                  className: "mb-1",
                                  children: (0, a.jsx)(c(), {
                                    href: "mailto:admin@swapsicle.io",
                                    className:
                                      "text-gray-400 transition duration-150 ease-in-out hover:text-gray-100",
                                    children: "Email",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "mb-1",
                                  children: (0, a.jsx)(c(), {
                                    href: "https://twitter.com/SwapsicleDEX",
                                    className:
                                      "text-gray-400 transition duration-150 ease-in-out hover:text-gray-100",
                                    children: "Twitter",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "mb-1",
                                  children: (0, a.jsx)(c(), {
                                    href: "https://discord.com/invite/6UxVtUS4F8",
                                    className:
                                      "text-gray-400 transition duration-150 ease-in-out hover:text-gray-100",
                                    children: "Discord",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "mb-1",
                                  children: (0, a.jsx)(c(), {
                                    href: "https://t.me/SwapsicleDAO",
                                    className:
                                      "text-gray-400 transition duration-150 ease-in-out hover:text-gray-100",
                                    children: "Telegram",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "text-sm",
                          children: [
                            (0, a.jsx)("h6", {
                              className: "mb-1 font-medium text-gray-200",
                              children: "Legals",
                            }),
                            (0, a.jsxs)("ul", {
                              children: [
                                (0, a.jsx)("li", {
                                  className: "mb-1",
                                  children: (0, a.jsx)(c(), {
                                    href: "https://app.swapsicle.io/Privacy.pdf",
                                    className:
                                      "text-gray-400 transition duration-150 ease-in-out hover:text-gray-100",
                                    children: "Privacy Policy",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "mb-1",
                                  children: (0, a.jsx)(c(), {
                                    href: "https://app.swapsicle.io/TermsOfUse.pdf",
                                    className:
                                      "text-gray-400 transition duration-150 ease-in-out hover:text-gray-100",
                                    children: "Terms of Service",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "mb-1",
                                  children: (0, a.jsx)(c(), {
                                    href: "https://app.swapsicle.io/Terms&Conditionsv3.pdf",
                                    className:
                                      "text-gray-400 transition duration-150 ease-in-out hover:text-gray-100",
                                    children: "Terms and Conditions",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "md:flex md:items-center md:justify-between",
                  children: [
                    (0, a.jsxs)("ul", {
                      className: "flex mb-4 md:order-1 md:ml-4 md:mb-0",
                      children: [
                        (0, a.jsx)("li", {
                          children: (0, a.jsx)(c(), {
                            href: "https://twitter.com/SwapsicleDEX",
                            className:
                              "flex items-center justify-center text-white transition duration-150 ease-in-out bg-gray-800 rounded-full hover:text-gray-100 hover:bg-purple-600",
                            "aria-label": "Twitter",
                            children: (0, a.jsx)("svg", {
                              className: "w-8 h-8 fill-current",
                              viewBox: "0 0 32 32",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, a.jsx)("path", {
                                d: "M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z",
                              }),
                            }),
                          }),
                        }),
                        (0, a.jsx)("li", {
                          className: "ml-4",
                          children: (0, a.jsx)(c(), {
                            href: "https://github.com/swapsicledex",
                            className:
                              "flex items-center justify-center text-white transition duration-150 ease-in-out bg-gray-800 rounded-full hover:text-gray-100 hover:bg-purple-600",
                            "aria-label": "Github",
                            children: (0, a.jsx)("svg", {
                              className: "w-8 h-8 fill-current",
                              viewBox: "0 0 32 32",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, a.jsx)("path", {
                                d: "M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z",
                              }),
                            }),
                          }),
                        }),
                        (0, a.jsx)("li", {
                          className: "ml-4",
                          children: (0, a.jsx)(c(), {
                            href: "https://discord.gg/swapsicle",
                            className:
                              "flex items-center justify-center text-white transition duration-150 ease-in-out bg-gray-800 rounded-full hover:text-gray-100 hover:bg-purple-600",
                            "aria-label": "Discord",
                            children: (0, a.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "w-8 h-8 p-1.5 fill-current",
                              viewBox: "0 0 640 512",
                              children: (0, a.jsx)("path", {
                                d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z",
                              }),
                            }),
                          }),
                        }),
                        (0, a.jsx)("li", {
                          className: "ml-4",
                          children: (0, a.jsx)(c(), {
                            href: "https://t.me/SwapsicleDAO",
                            className:
                              "flex items-center justify-center text-white transition duration-150 ease-in-out bg-gray-800 rounded-full hover:text-gray-100 hover:bg-purple-600",
                            "aria-label": "Telegram",
                            children: (0, a.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "w-8 h-8 p-1.5 fill-current",
                              viewBox: "0 0 496 512",
                              children: (0, a.jsx)("path", {
                                d: "M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z",
                              }),
                            }),
                          }),
                        }),
                        (0, a.jsx)("li", {
                          className: "ml-4",
                          children: (0, a.jsx)(c(), {
                            href: "https://medium.com/@swapsicle",
                            className:
                              "flex items-center justify-center text-white transition duration-150 ease-in-out bg-gray-800 rounded-full hover:text-gray-100 hover:bg-purple-600",
                            "aria-label": "Medium",
                            children: (0, a.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "w-8 h-8 p-1.5 fill-current",
                              viewBox: "0 0 640 512",
                              children: (0, a.jsx)("path", {
                                d: "M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "mr-4 text-sm text-gray-400",
                      children: "\xa9 Swapsicle.io All rights reserved.",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function f(e) {
        let { children: t } = e;
        (0, n.useEffect)(() => {
          r().init({
            once: !0,
            disable: "phone",
            duration: 600,
            easing: "ease-out-sine",
          });
        });
        let [i, o] = (0, n.useState)(1080);
        return (
          (0, n.useEffect)(() => {
            o(window.innerHeight);
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("main", {
                className: "grow",
                children: [
                  (0, a.jsxs)("div", {
                    className: "absolute left-0 z-0 w-full",
                    style: { height: "".concat(i, "px") },
                    children: [
                      (0, a.jsx)(d(), {
                        src: "/images/icebgtokenswap2.jpg",
                        alt: "",
                        width: 4100,
                        height: 2160,
                        quality: 100,
                        className: "object-cover w-full h-full overflow-hidden",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-black to-transparent",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-black to-transparent",
                      }),
                    ],
                  }),
                  t,
                ],
              }),
              (0, a.jsx)(u, {}),
            ],
          })
        );
      }
    },
    3263: function () {},
    6394: function (e, t, i) {
      e.exports = i(8707);
    },
    5846: function (e, t, i) {
      e.exports = i(8920);
    },
  },
  function (e) {
    e.O(0, [688, 2, 667, 488, 744], function () {
      return e((e.s = 9911));
    }),
      (_N_E = e.O());
  },
]);
