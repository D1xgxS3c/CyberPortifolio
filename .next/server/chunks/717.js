"use strict";
exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AProposDeMoi)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/SettingsContext.jsx + 3 modules
var SettingsContext = __webpack_require__(5452);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__(8073);
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);
// EXTERNAL MODULE: ./components/SocialNetworkRowStack.jsx
var SocialNetworkRowStack = __webpack_require__(8923);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Amazonaws"
var Amazonaws_ = __webpack_require__(1944);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Visualstudiocode"
var Visualstudiocode_ = __webpack_require__(7797);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Mongodb"
var Mongodb_ = __webpack_require__(1620);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Postgresql"
var Postgresql_ = __webpack_require__(8928);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Sqlite"
var Sqlite_ = __webpack_require__(3288);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Javascript"
var Javascript_ = __webpack_require__(2083);
// EXTERNAL MODULE: external "@styled-icons/fa-brands/Java"
var Java_ = __webpack_require__(2658);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Python"
var Python_ = __webpack_require__(8228);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Nodejs"
var Nodejs_ = __webpack_require__(5265);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Html5"
var Html5_ = __webpack_require__(2864);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Git"
var Git_ = __webpack_require__(9398);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Oracle"
var Oracle_ = __webpack_require__(2471);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Mysql"
var Mysql_ = __webpack_require__(6365);
// EXTERNAL MODULE: external "@styled-icons/fa-brands/Linux"
var Linux_ = __webpack_require__(9990);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Windows"
var Windows_ = __webpack_require__(9479);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Android"
var Android_ = __webpack_require__(2302);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Ios"
var Ios_ = __webpack_require__(5976);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Figma"
var Figma_ = __webpack_require__(1704);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Adobephotoshop"
var Adobephotoshop_ = __webpack_require__(7132);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Docker"
var Docker_ = __webpack_require__(5394);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Wordpress"
var Wordpress_ = __webpack_require__(6099);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Kalilinux"
var Kalilinux_ = __webpack_require__(2150);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Nextcloud"
var Nextcloud_ = __webpack_require__(6929);
// EXTERNAL MODULE: external "@styled-icons/simple-icons/Nginx"
var Nginx_ = __webpack_require__(2330);
;// CONCATENATED MODULE: ./components/TechsGrid.jsx




//Contexto
//Ícones
























const TechGrid = external_styled_components_default().footer.withConfig({
    componentId: "sc-fdd29039-0"
})`
	padding-top: 30px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	grid-column-gap: 5px;
	grid-row-gap: 15px;
	transition: all 0.3s ease;
	width: 100%;
	text-align: center;
	margin: auto;
`;
const Tech = external_styled_components_default().div.withConfig({
    componentId: "sc-fdd29039-1"
})`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-width: 100px;
	height: 44px;
	//background-color: ${(props)=>props.theme.colors.backgroundSecondary};
	padding: 15px;
	border-radius: 4px;

	svg {
		width: 34px;
		height: 34px;
		color: ${(props)=>props.theme.colors.backgroundSecondary};
		transition: all 0.3s ease;
	}

	svg:hover {
		color: ${(props)=>props.theme.colors.branding};
	}
`;
const TitleSection = external_styled_components_default().h2.withConfig({
    componentId: "sc-fdd29039-2"
})`
	font-weight: 700;
	color: ${(props)=>props.theme.colors.branding};
	font-size: 26px;
	padding-top: 30px;
	text-align: center;

	@media (max-width: 900px) {
		font-size: 18px;
	}
`;
function TechsGrid(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TechGrid, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Docker_.Docker, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Wordpress_.Wordpress, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Kalilinux_.Kalilinux, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Nextcloud_.Nextcloud, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Nginx_.Nginx, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Amazonaws_.Amazonaws, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Visualstudiocode_.Visualstudiocode, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Mongodb_.Mongodb, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Postgresql_.Postgresql, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Sqlite_.Sqlite, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Javascript_.Javascript, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Java_.Java, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Python_.Python, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Nodejs_.Nodejs, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Html5_.Html5, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Git_.Git, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Oracle_.Oracle, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Mysql_.Mysql, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Linux_.Linux, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Windows_.Windows, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Android_.Android, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Ios_.Ios, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Figma_.Figma, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                animateIn: "fadeIn",
                animateOnce: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tech, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Adobephotoshop_.Adobephotoshop, {})
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/a-propos.jsx


//Contexto

//Third's librarys



//Custom components


const WrapperAboutMe = external_styled_components_default().div.withConfig({
    componentId: "sc-bf1be93c-0"
})`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 60%;

	@media (max-width: 1600px) {
		width: 85%;
	}

	.container {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: row;
		width: 100%;

		@media (max-width: 900px) {
			align-items: center;
			justify-content: center;
			flex-direction: column;
			width: 100%;
			height: auto;
		}

		.left-view {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			width: 30%;
			height: 100%;

			@media (max-width: 1200px) {
				width: 45%;
			}

			@media (max-width: 900px) {
				width: 100%;
				align-items: center;
				justify-content: center;
				margin-top: 20px;
			}
		}

		.right-view {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			width: 70%;
			height: 100%;

			.tech-and-cv {
				display: flex;
				align-items: center;
				justify-content: space-between;

				@media (max-width: 601px) {
					flex-direction: column;
				}
			}

			@media (max-width: 1200px) {
				width: 55%;
			}

			@media (max-width: 900px) {
				width: 100%;
				align-items: flex-start;
				justify-content: flex-start;
				margin-top: 20px;
			}

			h3 {
				color: ${(props)=>props.theme.colors.branding};
				font-size: 26px;

				@media (max-width: 900px) {
					font-size: 18px;
				}
			}

			p {
				color: ${(props)=>props.theme.colors.body};
				font-size: ${(props)=>props.theme.fontSizes.md};
				text-align: justify;
				margin-top: 15px;
				margin-bottom: 15px;

				strong {
					font-weight: 700;
					color: ${(props)=>props.theme.colors.branding};
				}

				@media (max-width: 600px) {
					font-size: ${(props)=>props.theme.fontSizes.sm};
				}
			}
		}
	}
`;
const GithubStatsCard = external_styled_components_default().div.withConfig({
    componentId: "sc-bf1be93c-1"
})`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 300px;
	height: 420px;
	border: 2px solid ${(props)=>props.theme.colors.branding};
	background-color: ${(props)=>props.theme.colors.backgroundPage};
	border-radius: 8px;
	flex-direction: column;
	overflow: hidden;
	position: relative;

	@media (max-width: 601px) {
		width: 100%;
	}

	.image-rounded {
		border-radius: 50%;
	}

	.background {
		width: 100%;
		height: 150px;
		background-color: ${(props)=>props.theme.colors.branding};
	}

	.img {
		width: 140px;
		height: 140px;
		border-radius: 50%;
		border: 5px solid ${(props)=>props.theme.colors.branding};
		background-color: ${(props)=>props.theme.colors.backgroundSecondary};
		position: absolute;
		top: 30px;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 20px;

		h3 {
			color: ${(props)=>props.theme.colors.title};
			margin-top: 60px;
		}

		a {
			color: ${(props)=>props.theme.colors.body};
			margin-bottom: 20px;
			font-size: 14px;
			margin-top: 5px;
			font-weight: 300;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}

		p {
			text-align: center;
			color: ${(props)=>props.theme.colors.body};
		}
	}

	.github-stats {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 90%;
		height: 60px;
		background: ${(props)=>props.theme.colors.backgroundSecondary};
		border-radius: 8px;
		padding: 10px;
		position: absolute;
		bottom: 15px;

		.stats {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			p {
				font-size: 18px;
				font-weight: 900;
				color: ${(props)=>props.theme.colors.title};
				margin-bottom: 5px;
			}

			span {
				font-size: 10px;
				color: ${(props)=>props.theme.colors.body};
			}
		}
	}
`;
const ButtonCV = external_styled_components_default().a.withConfig({
    componentId: "sc-bf1be93c-2"
})`
	z-index: 1;
	position: relative;
	width: 200px;
	height: 44px;
	margin-top: 15px;
	margin-bottom: 15px;
	font-size: ${(props)=>props.theme.fontSizes.lg};
	transition: all 0.3s ease;
	border: none;
	text-decoration: none;
	color: ${(props)=>props.theme.colors.background};
	border-radius: 4px;
	background-color: ${(props)=>props.theme.colors.branding};
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	@media (max-width: 601px) {
		width: 100%;
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;
const SectionAProposDeMoi = external_styled_components_default().section.withConfig({
    componentId: "sc-bf1be93c-3"
})`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 80px;
	width: 100%;
	//height: auto;
`;
function AProposDeMoi(props) {
    const { language  } = (0,external_react_.useContext)(SettingsContext/* SettingsContext */.J);
    const [githubUserData, setGithubUserData] = (0,external_react_.useState)({});
    (0,external_react_.useEffect)(()=>{
        async function fetchGithubStats() {
            const response = await fetch("https://api.github.com/users/Diego-Carvalho-Dev");
            const json = await response.json();
            setGithubUserData(json);
        }
        fetchGithubStats();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(SectionAProposDeMoi, {
        id: "section-a-propos",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(WrapperAboutMe, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "left-view",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                                animateIn: "fadeIn",
                                animateOnce: true,
                                delay: 200,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GithubStatsCard, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "background"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "/img/1724962994715.jpeg",
                                                alt: language.aboutMePage.alt_dev_img,
                                                layout: "fill",
                                                objectFit: "cover",
                                                className: "image-rounded"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: githubUserData?.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: githubUserData?.html_url,
                                                    target: "_blank",
                                                    children: [
                                                        "@",
                                                        githubUserData?.login
                                                    ]
                                                }),
                                                githubUserData?.bio?.split("|").map((line, index)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: line
                                                    })),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "github-stats",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "stats",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: githubUserData?.followers
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: language.aboutMePage.github_card.followers
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "stats",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: githubUserData?.following
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: language.aboutMePage.github_card.following
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "stats",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: githubUserData?.public_repos
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: language.aboutMePage.github_card.repos
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "right-view",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_animate_on_scroll_default()), {
                                animateIn: "fadeIn",
                                animateOnce: true,
                                delay: 200,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: language.aboutMePage.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: language.aboutMePage.paragraph_one
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: language.aboutMePage.paragraph_two
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: language.aboutMePage.paragraph_three
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "tech-and-cv",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(SocialNetworkRowStack/* default */.Z, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonCV, {
                                                href: "https://drive.google.com/file/d/12nRHN9ZhDxcwPw6iGRz2F5a92YQCdLp7/view?usp=sharing",
                                                target: "_blank",
                                                "data-splitbee-event": "Download CV",
                                                children: "Download CV"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(TechsGrid, {})
            ]
        })
    });
}


/***/ })

};
;