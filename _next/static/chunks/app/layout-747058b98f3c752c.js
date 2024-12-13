(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    5866: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 125, 23)),
        Promise.resolve().then(n.t.bind(n, 7367, 23)),
        Promise.resolve().then(n.t.bind(n, 7506, 23)),
        Promise.resolve().then(n.t.bind(n, 8920, 23)),
        Promise.resolve().then(n.t.bind(n, 8707, 23)),
        Promise.resolve().then(n.bind(n, 7913));
    },
    7913: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(9268),
        s = n(6006),
        r = n(5846),
        a = n.n(r);
      function l() {
        var e;
        let [t, n] = (0, s.useState)(!1),
          r = (0, s.useRef)(null),
          l = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let e = (e) => {
              let { target: i } = e;
              l.current &&
                r.current &&
                (!t || l.current.contains(i) || r.current.contains(i) || n(!1));
            };
            return (
              document.addEventListener("click", e),
              () => document.removeEventListener("click", e)
            );
          }),
          (0, s.useEffect)(() => {
            let e = (e) => {
              let { keyCode: i } = e;
              t && 27 === i && n(!1);
            };
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }),
          (0, i.jsxs)("div", {
            className: "md:hidden",
            children: [
              (0, i.jsxs)("button", {
                ref: r,
                className: "hamburger ".concat(t && "active"),
                "aria-controls": "mobile-nav",
                "aria-expanded": t,
                onClick: () => n(!t),
                children: [
                  (0, i.jsx)("span", {
                    className: "sr-only",
                    children: "Menu",
                  }),
                  (0, i.jsxs)("svg", {
                    className:
                      "w-6 h-6 text-gray-300 transition duration-150 ease-in-out fill-current hover:text-gray-200",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      (0, i.jsx)("rect", {
                        y: "4",
                        width: "24",
                        height: "2",
                        rx: "1",
                      }),
                      (0, i.jsx)("rect", {
                        y: "11",
                        width: "24",
                        height: "2",
                        rx: "1",
                      }),
                      (0, i.jsx)("rect", {
                        y: "18",
                        width: "24",
                        height: "2",
                        rx: "1",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("nav", {
                id: "mobile-nav",
                ref: l,
                className:
                  "absolute left-0 z-20 w-full px-4 overflow-hidden transition-all duration-300 ease-in-out top-full sm:px-6",
                style: t
                  ? {
                      maxHeight:
                        null === (e = l.current) || void 0 === e
                          ? void 0
                          : e.scrollHeight,
                      opacity: 1,
                    }
                  : { maxHeight: 0, opacity: 0.8 },
                children: (0, i.jsxs)("ul", {
                  className: "px-4 py-2 bg-gray-800",
                  children: [
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)(a(), {
                        href: "https://app-swapsicle.vercel.app/swap",
                        className:
                          "flex items-center px-4 py-3 font-medium text-white transition duration-150 ease-in-out hover:text-gray-200",
                        children: "Swap",
                      }),
                    }),
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)(a(), {
                        href: "https://pro.swapsicle.io/",
                        className:
                          "flex items-center px-4 py-3 font-medium text-white transition duration-150 ease-in-out hover:text-gray-200",
                        children: "Perpetuals",
                      }),
                    }),
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)(a(), {
                        href: "https://app-swapsicle.vercel.app/igloo",
                        className:
                          "flex items-center px-4 py-3 font-medium text-white transition duration-150 ease-in-out hover:text-gray-200",
                        children: "Earn",
                      }),
                    }),
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)(a(), {
                        href: "https://app-swapsicle.vercel.app/launchpad",
                        className:
                          "flex items-center px-4 py-3 font-medium text-white transition duration-150 ease-in-out hover:text-gray-200",
                        children: "Launchpad",
                      }),
                    }),
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)(a(), {
                        href: "https://zombieclub.swapsicle.io/",
                        className:
                          "flex items-center px-4 py-3 font-medium text-white transition duration-150 ease-in-out hover:text-gray-200",
                        children: "NFTs",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    7506: function () {},
    7367: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__Architects_Daughter_9f8b42', '__Architects_Daughter_Fallback_9f8b42'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_9f8b42",
        variable: "__variable_9f8b42",
      };
    },
    125: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_a64ecd', '__Inter_Fallback_a64ecd'",
          fontStyle: "normal",
        },
        className: "__className_a64ecd",
        variable: "__variable_a64ecd",
      };
    },
    5846: function (e, t, n) {
      e.exports = n(8920);
    },
  },
  function (e) {
    e.O(0, [688, 667, 488, 744], function () {
      return e((e.s = 5866));
    }),
      (_N_E = e.O());
  },
]);
