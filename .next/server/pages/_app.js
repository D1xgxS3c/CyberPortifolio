(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ scrollToSection)
/* harmony export */ });
function scrollToSection(event) {
    event.preventDefault();
    try {
        var section = document.querySelector(event.target.parentElement.getAttribute("href"));
        if (section == null) {
            section = document.querySelector(event.target.getAttribute("href"));
        }
        section.scrollIntoView({
            behavior: "smooth"
        });
    } catch (error) {
        console.error(error);
        console.error(event.target);
    }
}


/***/ }),

/***/ 8367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/font.css
var font = __webpack_require__(7826);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/globalStyle.jsx

const GlobalStyle = external_styled_components_.createGlobalStyle` 
  
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing:border-box;
}

html, body, :root {
    //font-family: 'Open Sans', sans-serif;    
    font-family: 'Fira Sans', sans-serif;
    //font-family: 'Lato', sans-serif;
    min-height: 100%;    
    scroll-behavior: smooth;
    overflow-x: hidden;
  }  

  ::selection {
    background: ${(props)=>props.theme.colors.branding};
    color: ${(props)=>props.theme.colors.background};
  }
       
  ::-webkit-scrollbar {
    width: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background: #a8a8a8;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${(props)=>props.theme.colors.branding}; 
    //border: 1px solid #ffffff;
  }

  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
    cursor: pointer;
  }  
`;
/* harmony default export */ const globalStyle = (GlobalStyle);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-reveal/Fade"
const Fade_namespaceObject = require("react-reveal/Fade");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./context/SettingsContext.jsx + 3 modules
var SettingsContext = __webpack_require__(5452);
;// CONCATENATED MODULE: external "@styled-icons/material-rounded/DarkMode"
const DarkMode_namespaceObject = require("@styled-icons/material-rounded/DarkMode");
;// CONCATENATED MODULE: external "@styled-icons/entypo/LightDown"
const LightDown_namespaceObject = require("@styled-icons/entypo/LightDown");
;// CONCATENATED MODULE: ./components/SwitchThemeButton.jsx




//Contexto

//ícones


const SwitchButton = external_styled_components_default().div.withConfig({
    componentId: "sc-89efac8f-0"
})`
	margin-left: 8px;
	margin-right: 8px;

	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 30px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: ${(props)=>props.theme.colors.backgroundSecondary};
		-webkit-transition: 0.4s;
		transition: 0.4s;
		//border: 2px solid ${(props)=>props.theme.colors.branding};
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 22px;
		width: 22px;
		left: 4px;
		bottom: 4px;
		background-color: ${(props)=>props.theme.colors.branding};
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
`;
const LanguageWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-89efac8f-1"
})`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin-left: 15px;

	svg {
		width: 28px;
		height: 28px;
		color: ${(props)=>props.theme.colors.branding};
	}
`;
function SwitchThemeButton() {
    const { changeLanguageLocalization , changeTheme  } = (0,external_react_.useContext)(SettingsContext/* SettingsContext */.J);
    const [checked, setChecked] = (0,external_react_.useState)(false);
    function handleCheckSwitch() {
        setChecked(!checked);
        //changeLanguageLocalization();
        changeTheme(checked ? "dark" : "light");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LanguageWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DarkMode_namespaceObject.DarkMode, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SwitchButton, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    className: "switch",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "checkbox",
                            checked: checked,
                            onClick: handleCheckSwitch,
                            readOnly: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "slider round"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LightDown_namespaceObject.LightDown, {})
        ]
    });
}

// EXTERNAL MODULE: ./components/SmoothScroll.jsx
var SmoothScroll = __webpack_require__(2015);
;// CONCATENATED MODULE: ./components/LayoutTemplate.jsx


//Third part librarys



//Custom components


//Contexto

const Main = external_styled_components_default().main.withConfig({
    componentId: "sc-3f5e5b67-0"
})`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	background-color: ${(props)=>props.theme.colors.backgroundPage};
`;
const ContainerPage = external_styled_components_default().div.withConfig({
    componentId: "sc-3f5e5b67-1"
})`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;
const HeaderContainer = external_styled_components_default().header.withConfig({
    componentId: "sc-3f5e5b67-2"
})`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 64px;
	position: fixed;
	top: 0;
	z-index: 3;

	//Deixar header com efeito de Glassmorphin
	//background-color: rgba(0, 0, 0, 0.1) !important;
	backdrop-filter: saturate(180%) blur(30px);
	-webkit-backdrop-filter: saturate(180%) blur(30px);

	@media (max-width: 600px) {
		justify-content: space-between;
	}
`;
const LogoContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-3f5e5b67-3"
})`
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	@media (max-width: 600px) {
		margin-left: 30px;
	}
`;
const LogoText = external_styled_components_default().h3.withConfig({
    componentId: "sc-3f5e5b67-4"
})`
	color: ${(props)=>props.theme.colors.title};
	font-weight: 700;
	font-size: 30px;

	@media (max-width: 900px) {
		font-size: ${(props)=>props.theme.fontSizes.xl};
	}
`;
const CaracteresLogo = external_styled_components_default().span.withConfig({
    componentId: "sc-3f5e5b67-5"
})`
	color: ${(props)=>props.theme.colors.branding};
	font-weight: 700;
`;
const NavbarOptionContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-3f5e5b67-6"
})`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 600px) {
		display: none;
	}
`;
const SwitchMenuContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-3f5e5b67-7"
})`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;

	@media (min-width: 601px) {
		display: none;
	}
`;
const NavbarOption = external_styled_components_default().h4.withConfig({
    componentId: "sc-3f5e5b67-8"
})`
	color: ${(props)=>props.theme.colors.title};
	font-weight: 800;
	margin-left: 5px;
	margin-right: 5px;
	text-decoration: none;
	border-bottom: 4px solid transparent;
	transition: all 0.3s ease;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background-color: ${(props)=>props.theme.colors.branding};
		transform-origin: bottom right;
		transform: scaleX(0);
		transition: transform 0.5s ease;
	}

	&:hover::before {
		transform-origin: bottom left;
		transform: scaleX(1);
	}

	&:hover {
		cursor: pointer;
		color: ${(props)=>props.theme.colors.branding};
		//border-bottom: 4px solid ${(props)=>props.theme.colors.branding};
	}

	@media (max-width: 1400px) {
		font-size: ${(props)=>props.theme.fontSizes.md};
	}

	@media (max-width: 1200px) {
		font-size: ${(props)=>props.theme.fontSizes.sm};
	}

	@media (max-width: 900px) {
		font-size: ${(props)=>props.theme.fontSizes.xs};
	}
`;
const SideBarTheme = external_styled_components_default().aside.withConfig({
    componentId: "sc-3f5e5b67-9"
})`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 60px;
	height: 100vh;
	position: fixed;
	left: 0;

	@media (max-width: 600px) {
		display: none;
	}
`;
function LayoutTemplate({ children  }) {
    const { language  } = (0,external_react_.useContext)(SettingsContext/* SettingsContext */.J);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
                        top: true,
                        delay: 100,
                        duration: 200,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            style: {
                                textDecoration: "none"
                            },
                            href: "http://localhost:3000",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(LogoContainer, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LogoText, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(CaracteresLogo, {
                                            children: "<"
                                        }),
                                        "D1xgx ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(CaracteresLogo, {
                                            children: "/>"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavbarOptionContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
                                top: true,
                                delay: 100,
                                duration: 200,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        textDecoration: "none"
                                    },
                                    href: "#section-home",
                                    onClick: SmoothScroll/* scrollToSection */.Q,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarOption, {
                                        children: language.navbarMenu.labelHome
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
                                top: true,
                                delay: 200,
                                duration: 200,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        textDecoration: "none"
                                    },
                                    href: "#section-services",
                                    onClick: SmoothScroll/* scrollToSection */.Q,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarOption, {
                                        children: language.navbarMenu.labelServices
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
                                top: true,
                                delay: 300,
                                duration: 200,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        textDecoration: "none"
                                    },
                                    href: "#section-a-propos",
                                    onClick: SmoothScroll/* scrollToSection */.Q,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarOption, {
                                        children: language.navbarMenu.labelAboutMe
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
                                top: true,
                                delay: 400,
                                duration: 200,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        textDecoration: "none"
                                    },
                                    href: "#section-portifolio",
                                    onClick: SmoothScroll/* scrollToSection */.Q,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarOption, {
                                        children: language.navbarMenu.labelPortifolio
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
                                top: true,
                                delay: 500,
                                duration: 200,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        textDecoration: "none"
                                    },
                                    href: "#section-experiencia",
                                    onClick: SmoothScroll/* scrollToSection */.Q,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarOption, {
                                        children: language.navbarMenu.labelExperience
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
                                top: true,
                                delay: 600,
                                duration: 200,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(SwitchThemeButton, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SwitchMenuContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SwitchThemeButton, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
                left: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(SideBarTheme, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ContainerPage, {
                    children: children
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.jsx






function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SettingsContext/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://cdn.splitbee.io/sb.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(globalStyle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(LayoutTemplate, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 7826:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,676,835,452], () => (__webpack_exec__(8367)));
module.exports = __webpack_exports__;

})();