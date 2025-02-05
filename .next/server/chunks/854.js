"use strict";
exports.id = 854;
exports.ids = [854];
exports.modules = {

/***/ 6854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TitleSpan": () => (/* binding */ TitleSpan),
  "default": () => (/* binding */ Portifolio)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__(8073);
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);
// EXTERNAL MODULE: ./context/SettingsContext.jsx + 3 modules
var SettingsContext = __webpack_require__(5452);
// EXTERNAL MODULE: ./styles/ui.jsx
var ui = __webpack_require__(6012);
// EXTERNAL MODULE: external "@styled-icons/fa-solid/Robot"
var Robot_ = __webpack_require__(8523);
// EXTERNAL MODULE: external "@styled-icons/evaicons-outline/GithubOutline"
var GithubOutline_ = __webpack_require__(9185);
// EXTERNAL MODULE: external "@styled-icons/fa-brands/Java"
var Java_ = __webpack_require__(2658);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Mongodb"
var Mongodb_ = __webpack_require__(1620);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Sqlite"
var Sqlite_ = __webpack_require__(3288);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Javascript"
var Javascript_ = __webpack_require__(2083);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/ReactLogo"
var ReactLogo_ = __webpack_require__(5746);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Nextdotjs"
var Nextdotjs_ = __webpack_require__(9075);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Python"
var Python_ = __webpack_require__(8228);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Nodejs"
var Nodejs_ = __webpack_require__(5265);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Css3"
var Css3_ = __webpack_require__(7620);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Html5"
var Html5_ = __webpack_require__(2864);
// EXTERNAL MODULE: external "@styled-icons/fluentui-system-filled/Live"
var Live_ = __webpack_require__(6770);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos"
var boxicons_logos_ = __webpack_require__(6862);
// EXTERNAL MODULE: external "@styled-icons/bootstrap"
var bootstrap_ = __webpack_require__(3665);
// EXTERNAL MODULE: external "@styled-icons/fluentui-system-filled"
var fluentui_system_filled_ = __webpack_require__(946);
// EXTERNAL MODULE: external "styled-icons/fa-solid"
var fa_solid_ = __webpack_require__(5217);
// EXTERNAL MODULE: external "@styled-icons/fluentui-system-filled/Password"
var Password_ = __webpack_require__(377);
// EXTERNAL MODULE: external "@styled-icons/simple-icons"
var simple_icons_ = __webpack_require__(6585);
;// CONCATENATED MODULE: ./components/Tooltip.jsx



const ToolTip = external_styled_components_default().div.withConfig({
    componentId: "sc-e9cd73f4-0"
})`
	/* Tooltip container */
	transition: all 0.3s ease;

	.tooltip {
		position: relative;
		display: inline-block;
		//border-bottom: 1px dotted black; /* If you want dots under the hoverable text */

		&:hover {
			svg {
				color: ${(props)=>props.theme.colors.branding};
			}
		}
	}

	/* Tooltip text */
	.tooltip .tooltiptext {
		visibility: hidden;
		width: 120px;
		background-color: ${(props)=>props.theme.colors.branding};
		color: ${(props)=>props.theme.colors.background};
		text-align: center;
		padding: 3px 0;
		border-radius: 4px;
		font-weight: 900;
		font-size: 14px;

		/* Position the tooltip text */
		position: absolute;
		z-index: 1;
		bottom: 125%;
		left: 50%;
		margin-left: -60px;

		/* Fade in tooltip */
		opacity: 0;
		transition: opacity 0.4s;
	}

	/* Tooltip arrow */
	.tooltip .tooltiptext::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: ${(props)=>props.theme.colors.branding} transparent transparent transparent;
	}

	/* Show the tooltip text when you mouse over the tooltip container */
	.tooltip:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}
`;
const Tooltip = ({ children , toolTipText  })=>/*#__PURE__*/ jsx_runtime_.jsx(ToolTip, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "tooltip",
            children: [
                children,
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "tooltiptext",
                    children: toolTipText
                })
            ]
        })
    });
/* harmony default export */ const components_Tooltip = (Tooltip);

;// CONCATENATED MODULE: ./components/RepositoryList.jsx

const FetchData = (url)=>{
    const [data, setData] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        fetch(url).then((response)=>response.json()).then((jsonData)=>setData(jsonData)).catch((error)=>console.error(error));
    }, [
        url
    ]);
    return data;
};
/* harmony default export */ const RepositoryList = (FetchData);

// EXTERNAL MODULE: external "styled-icons/crypto"
var crypto_ = __webpack_require__(9962);
;// CONCATENATED MODULE: ./pages/portfolio.jsx




//Context

//Styled-components

//Ícones






























//Custom components



const ContainerGrid = external_styled_components_default().div.withConfig({
    componentId: "sc-79b6e264-0"
})`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 60%;
	gap: 20px;
	transition: all 0.3s ease;

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const WrapperProjectCard = external_styled_components_default().div.withConfig({
    componentId: "sc-79b6e264-1"
})`
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	min-height: 270px;
	background-color: ${(props)=>props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	padding: 20px;
	transition: all 0.3s ease;
	border: 1px solid ${(props)=>props.theme.colors.backgroundPage};

	.created_at {
		color: ${(props)=>props.theme.colors.inactiveTitle};
		font-size: 12px;
		position: absolute;
		bottom: 10px;
	}

	:hover {
		border: 1px solid ${(props)=>props.theme.colors.branding};
		transform: scale(1.01);
		box-shadow: 0px 0px 20px 0px ${(props)=>props.theme.colors.branding}5E;
		// -webkit-box-shadow: 0px 0px 40px 0px ${(props)=>props.theme.colors.branding}5E;
		// -moz-box-shadow: 0px 0px 40px 0px ${(props)=>props.theme.colors.branding}5E;
	}

	.title-body {
		margin-top: 50px;

		.divider {
			margin-bottom: 20px;
		}
	}
`;
const WrapperTechStack = external_styled_components_default().div.withConfig({
    componentId: "sc-79b6e264-2"
})`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	height: 34px;
	width: 100%;
	margin-bottom: 10px;

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}

	svg {
		width: 22px;
		height: 22px;
		margin-right: 3px;
		color: ${(props)=>props.theme.colors.inactiveTitle};
		transition: all 0.3s ease;
	}

	a {
		svg {
			&:hover {
				cursor: pointer;
				color: ${(props)=>props.theme.colors.branding};
			}
		}
	}
`;
const WrapperTextChip = external_styled_components_default().div.withConfig({
    componentId: "sc-79b6e264-3"
})`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	top: 10px;
	right: 10px;

	div {
		span {
			//border: 1px solid ${(props)=>props.theme.colors.branding};
			color: ${(props)=>props.theme.colors.inactiveTitle};
			font-size: 12px;
			font-weight: 800;
			padding: 2px 8px 2px 8px;
			border-radius: 4px;
			margin-right: 3px;
			margin-left: 3px;
		}

		@media (max-width: 601px) {
			margin-bottom: 10px;
			font-size: 10px;
		}
	}

	@media (max-width: 601px) {
		display: none;
	}
`;
const ChipTechOptions = external_styled_components_default().div.withConfig({
    componentId: "sc-79b6e264-4"
})`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 20px;
	margin-bottom: 20px;
	//background-color: #ccc;
	width: 60%;

	svg {
		min-width: 28px;
		min-height: 28px;
		width: 28px;
		height: 28px;
		color: ${(props)=>props.theme.colors.branding};
		margin-right: 10px;

		@media (max-width: 601px) {
			min-width: 18px;
			min-height: 18px;
			width: 18px;
			height: 18px;
		}
	}

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 601px) {
		display: none;
	}
`;
const WrapperButtons = external_styled_components_default().div.withConfig({
    componentId: "sc-79b6e264-5"
})`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	right: 10px;
	bottom: 10px;
	transition: all 0.3s ease;
	a {
		//background-color: ${(props)=>props.theme.colors.branding};
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		padding: 5px;
		color: ${(props)=>props.theme.colors.branding};
		//border: solid 1px ${(props)=>props.theme.colors.branding};
		border-radius: 4px;
		//margin-left: 3px;
	}
`;
function formatDate(dateString) {
    const originalDate = new Date(dateString);
    const day = String(originalDate.getDate()).padStart(2, "0");
    const month = String(originalDate.getMonth() + 1).padStart(2, "0");
    const year = originalDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}
const Chip = external_styled_components_default().span.withConfig({
    componentId: "sc-79b6e264-6"
})`
	color: ${(props)=>props.active == true ? props.theme.colors.backgroundSecondary : props.theme.colors.inactiveTitle};
	background-color: ${(props)=>props.active == true ? props.theme.colors.branding : props.theme.colors.backgroundSecondary};
	border: 1px solid ${(props)=>props.active == true ? props.theme.colors.branding : props.theme.colors.inactiveTitle};
	padding: 2px 7px 3px 7px;
	margin: 3px;
	border-radius: 4px;
	font-weight: 700;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 601px) {
		font-weight: 700;
		font-size: 10px;
	}
`;
const TitleSpan = external_styled_components_default().h3.withConfig({
    componentId: "sc-79b6e264-7"
})`
	z-index: 2;
	position: absolute;
	top: 0;
	left: 0;
	padding: 5px 15px 5px 10px;
	color: ${(props)=>props.theme.colors.backgroundPage};
	background-color: ${(props)=>props.theme.colors.branding};
	font-size: ${(props)=>props.theme.fontSizes.md};
	border-radius: 4px 0 18px 0;

	@media (max-width: 900px) {
		font-size: ${(props)=>props.theme.fontSizes.sm};
	}

	@media (max-width: 600px) {
		font-size: ${(props)=>props.theme.fontSizes.xs};
	}
`;
const SectionPortifolio = external_styled_components_default().section.withConfig({
    componentId: "sc-79b6e264-8"
})`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	padding-top: 60px;
`;
function Portifolio() {
    const { language  } = (0,external_react_.useContext)(SettingsContext/* SettingsContext */.J);
    const [view, setView] = (0,external_react_.useState)("grid");
    const [stack, setStack] = (0,external_react_.useState)("TODOS");
    // Fetch data from my personnal GitHub account to list repositories
    const [url, setURL] = (0,external_react_.useState)("https://api.github.com/users/Diego-Carvalho-Dev/repos");
    const data = RepositoryList(url);
    const topicsIcons = {
        Robot: {
            iconName: "Robot",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Robot_.Robot, {})
        },
        java: {
            iconName: "Java",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Java_.Java, {})
        },
        mongodb: {
            iconName: "Mongodb",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Mongodb_.Mongodb, {})
        },
        Sqlite: {
            iconName: "Sqlite",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Sqlite_.Sqlite, {})
        },
        javascript: {
            iconName: "Javascript",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Javascript_.Javascript, {})
        },
        reactjs: {
            iconName: "Reactjs",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(ReactLogo_.ReactLogo, {})
        },
        Nextdotjs: {
            iconName: "Nextdotjs",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Nextdotjs_.Nextdotjs, {})
        },
        python3: {
            iconName: "Python",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Python_.Python, {})
        },
        nodejs: {
            iconName: "Nodejs",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Nodejs_.Nodejs, {})
        },
        css: {
            iconName: "CSS",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Css3_.Css3, {})
        },
        html5: {
            iconName: "HTML5",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Html5_.Html5, {})
        },
        Live: {
            iconName: "Live",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Live_.Live, {})
        },
        cpp: {
            iconName: "C++",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(boxicons_logos_.CPlusPlus, {})
        },
        c: {
            iconName: "C",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(simple_icons_.C, {})
        },
        "reverse-engineering": {
            iconName: "Reverse Engineering",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(bootstrap_.FileBinary, {})
        },
        vuejs: {
            iconName: "Vuejs",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(boxicons_logos_.Vuejs, {})
        },
        markdown: {
            iconName: "Markdown",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(boxicons_logos_.Markdown, {})
        },
        Default: {
            iconName: "BookmarkFill",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(bootstrap_.JournalBookmark, {})
        },
        github: {
            iconName: "Github",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(boxicons_logos_.Github, {})
        },
        "github-profile": {
            iconName: "Github Profile",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(boxicons_logos_.Github, {})
        },
        "desmos-api": {
            iconName: "Desmos API",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(fluentui_system_filled_.MathFormatLinear, {})
        },
        "drawing-app": {
            iconName: "Drawing App",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(fluentui_system_filled_.DrawShape, {})
        },
        pillow: {
            iconName: "Pillow",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(fluentui_system_filled_.DrawShape, {})
        },
        game: {
            iconName: "Game",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_solid_.Gamepad, {})
        },
        pentesting: {
            iconName: "Pentesting",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Password_.Password, {})
        },
        security: {
            iconName: "Security",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(bootstrap_.ShieldLockFill, {})
        },
        challenge: {
            iconName: "Challenge",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(bootstrap_.TrophyFill, {})
        },
        "3d-printing": {
            iconName: "3D printing",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(bootstrap_.Box, {})
        },
        solidworks: {
            iconName: "Solidworks",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(fluentui_system_filled_.DesignIdeas, {})
        },
        arduino: {
            iconName: "Arduino",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(simple_icons_.Arduino, {})
        }
    };
    function handleFilter(id) {
        setStack(id);
    }
    function handleView(event) {
        setView(event.target.id);
    }
    const array_projects = stack == "TODOS";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SectionPortifolio, {
        id: "section-portifolio",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ui/* ContainerTitleSection */.A_, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui/* TitleSection */.Qb, {
                    children: language.portifolioPage.title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ContainerGrid, {
                view: view,
                children: data ? data.map((project, index)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                        animateIn: "fadeIn",
                        animateOnce: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(WrapperProjectCard, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(WrapperTextChip, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: project.language
                                        })
                                    }, index)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TitleSpan, {
                                    children: project.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "title-body",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui/* BodyText */.Ac, {
                                        children: project.description
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(WrapperTechStack, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: project.topics ? project.topics.map((topic, index)=>topicsIcons[topic] ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Tooltip, {
                                                        toolTipText: topicsIcons[topic].iconName,
                                                        children: topicsIcons[topic].icon
                                                    })
                                                }, index) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Tooltip, {
                                                        toolTipText: topic,
                                                        children: topicsIcons["Default"].icon
                                                    })
                                                }, index)) : ""
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(WrapperButtons, {
                                            children: [
                                                project.homepage != null && project.homepage != "" && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: project.homepage,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Live_.Live, {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: project.svn_url,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(GithubOutline_.GithubOutline, {})
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "created_at",
                                    children: [
                                        language.portifolioPage.createdLabel,
                                        ": ",
                                        formatDate(project.created_at)
                                    ]
                                })
                            ]
                        })
                    }, index)) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Loading..."
                })
            })
        ]
    });
}


/***/ })

};
;