exports.id = 897;
exports.ids = [897];
exports.modules = {

/***/ 897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Experiencia)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-vertical-timeline-component"
var external_react_vertical_timeline_component_ = __webpack_require__(8938);
// EXTERNAL MODULE: ./node_modules/react-vertical-timeline-component/style.min.css
var style_min = __webpack_require__(1164);
// EXTERNAL MODULE: ./context/SettingsContext.jsx + 3 modules
var context_SettingsContext = __webpack_require__(5452);
// EXTERNAL MODULE: external "@styled-icons/ionicons-outline/School"
var School_ = __webpack_require__(2231);
// EXTERNAL MODULE: external "@styled-icons/fluentui-system-filled/LearningApp"
var LearningApp_ = __webpack_require__(5320);
// EXTERNAL MODULE: external "@styled-icons/material-rounded/Work"
var Work_ = __webpack_require__(5479);
;// CONCATENATED MODULE: ./components/TimelineExperienciaFormacao.jsx






//Contexto

//ícones



const LearningAppIcon = external_styled_components_default()(LearningApp_.LearningApp).withConfig({
    componentId: "sc-27eabd69-0"
})`
	color: ${(props)=>props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;
const SchoolIcon = external_styled_components_default()(School_.School).withConfig({
    componentId: "sc-27eabd69-1"
})`
	color: ${(props)=>props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;
const WorkIcon = external_styled_components_default()(Work_.Work).withConfig({
    componentId: "sc-27eabd69-2"
})`
	color: ${(props)=>props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;
const TimelineContent = external_styled_components_default().div.withConfig({
    componentId: "sc-27eabd69-3"
})`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;
const TitleContentTimeline = external_styled_components_default().h3.withConfig({
    componentId: "sc-27eabd69-4"
})`
	.vertical-timeline-element-title {
		color: ${(props)=>props.theme.colors.branding};
	}
	@media (max-width: 1600px) {
		font-size: ${(props)=>props.theme.fontSizes.xl};
	}

	@media (max-width: 1400px) {
		font-size: ${(props)=>props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props)=>props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props)=>props.theme.fontSizes.sm};
	}
`;
const BoldText = external_styled_components_default().h4.withConfig({
    componentId: "sc-27eabd69-5"
})`
	color: ${(props)=>props.theme.colors.contrastText};
	font-weight: 800;
	margin-top: 2px;
	margin-bottom: 2px;
	span {
		font-weight: 400;
	}
`;
function TimelinePortifolio(props) {
    const { language  } = useContext(SettingsContext);
    const theme = useTheme();
    return /*#__PURE__*/ _jsxs(VerticalTimeline, {
        lineColor: theme.colors.branding,
        children: [
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(LearningAppIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2011"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "S.O.S. Educa\xe7\xe3o Profissional"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: language.experiencePage.timeline.labelProfessionalCourse
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ":",
                                " ",
                                /*#__PURE__*/ _jsxs("span", {
                                    children: [
                                        " ",
                                        language.id == "frfr" ? "Administra\xe7\xe3o, empregabilidade, digita\xe7\xe3o e inform\xe1tica fundamental" : "Administration, employability, typing and fundamental informatics"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(WorkIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2013"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCompany,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Armaz\xe9m Para\xedba"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelPosition,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Auxiliar administrativo"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(LearningAppIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2014"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "SENAC - Servi\xe7o Nacional de Aprendizagem Comercial"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: language.experiencePage.timeline.labelProfessionalCourse
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Aperfei\xe7oamento em opera\xe7\xf5es log\xedsticas"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(SchoolIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2014"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Centro Universit\xe1rio Maur\xedcio de Nassau"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: language.experiencePage.timeline.labelBachelorDegree
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Sistemas de Informa\xe7\xf5es"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(LearningAppIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2018"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Centro Universit\xe1rio Maur\xedcio de Nassau"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Workshop"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "IaaS - Infraestrutura como servi\xe7o"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    boxShadow: `0 0 0 0 `
                },
                icon: /*#__PURE__*/ _jsx(LearningAppIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2018"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "F\xe1brica de G\xeanios"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: language.experiencePage.timeline.labelExtensionCourse
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Arduino - Essencial para Automa\xe7\xe3o Residencial"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(LearningAppIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2019"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Udemy"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: language.experiencePage.timeline.labelExtensionCourse
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Java: Fundamentos de programa\xe7\xe3o"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(LearningAppIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2019"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Udemy"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: language.experiencePage.timeline.labelExtensionCourse
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Framework bootstrap 4 - Completo, pr\xe1tico e responsivo"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(LearningAppIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2019"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Udemy"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: language.experiencePage.timeline.labelExtensionCourse
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Django 2.0 avan\xe7ado, dominando o framework"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(LearningAppIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2019"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Udemy"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: language.experiencePage.timeline.labelExtensionCourse
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Desenvolvimento de aplicativos Android com Java e Android Studio"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(LearningAppIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2019"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "SENAC - Servi\xe7o Nacional de Aprendizagem Comercial"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Workshop"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Relacionamento interpessoal no trabalho"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(LearningAppIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2019"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "The Forense"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Congresso digital"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Direito, Tecnologia e Prote\xe7\xe3o de Dados"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(LearningAppIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2020"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Udemy"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: language.experiencePage.timeline.labelExtensionCourse
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Constru\xe7\xe3o de aplicativos mobile do zero com React Native e Redux"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(LearningAppIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2020"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Udemy"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: language.experiencePage.timeline.labelExtensionCourse
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Criando poderosas API's RESTful com Django Rest Framework"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(LearningAppIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2020"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelInstitution,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Alura"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCategory,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: language.experiencePage.timeline.labelExtensionCourse
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelTitle,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Fundamentos de SEO: Primeiros passos para ranquear seu site na Busca Org\xe2nica"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(VerticalTimelineElement, {
                className: "vertical-timeline-element--work",
                contentStyle: {
                    color: "#000",
                    borderBottom: `8px solid ${theme.colors.branding}`,
                    boxShadow: "0px 0px 0px 0px #ccc"
                },
                iconStyle: {
                    background: theme.colors.branding,
                    color: "#fff",
                    boxShadow: `0 0 0 0px ${theme.colors.branding}`
                },
                icon: /*#__PURE__*/ _jsx(WorkIcon, {}),
                children: /*#__PURE__*/ _jsxs(TimelineContent, {
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            style: {
                                color: theme.colors.backgroundSecondary,
                                backgroundColor: theme.colors.branding,
                                padding: "0 6px 0 6px",
                                borderRadius: "4px"
                            },
                            children: "2021"
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelCompany,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Armaz\xe9m Para\xedba"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(BoldText, {
                            children: [
                                language.experiencePage.timeline.labelPosition,
                                ": ",
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Desenvolvedor J\xfanior"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./styles/ui.jsx
var ui = __webpack_require__(6012);
;// CONCATENATED MODULE: ./pages/experience.jsx



//Custom components


//Contexto

//Styled-components

const SectionExperiencia = external_styled_components_default().section.withConfig({
    componentId: "sc-cef52dd1-0"
})`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 60px;
	width: 100%;
	min-height: 100vh;
`;
function Experiencia() {
    const { language  } = (0,external_react_.useContext)(context_SettingsContext/* SettingsContext */.J);
    const theme = (0,external_styled_components_.useTheme)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SectionExperiencia, {
        id: "section-experiencia",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ui/* ContainerTitleSection */.A_, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui/* TitleSection */.Qb, {
                    children: language.experiencePage.title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                style: {
                    color: `${theme.colors.branding}`
                },
                children: "Em breve..."
            })
        ]
    });
}


/***/ }),

/***/ 1164:
/***/ (() => {



/***/ })

};
;