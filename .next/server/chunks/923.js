"use strict";
exports.id = 923;
exports.ids = [923];
exports.modules = {

/***/ 8923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SocialNetworkRowStack)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_regular_MailSend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3468);
/* harmony import */ var _styled_icons_boxicons_regular_MailSend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_MailSend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_boxicons_logos_LinkedinSquare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2291);
/* harmony import */ var _styled_icons_boxicons_logos_LinkedinSquare__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_logos_LinkedinSquare__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_boxicons_logos_Twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1148);
/* harmony import */ var _styled_icons_boxicons_logos_Twitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_logos_Twitter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_bootstrap_Github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4872);
/* harmony import */ var _styled_icons_bootstrap_Github__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_bootstrap_Github__WEBPACK_IMPORTED_MODULE_5__);






const SocialMediaContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-f84d8cfb-0"
})`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;

	@media (max-width: 600px) {
		width: 100%;
		//justify-content: space-between;
		margin-bottom: 20px;
	}
`;
const ButtonSocialMediaIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
    componentId: "sc-f84d8cfb-1"
})`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 5px;
	width: 32px;
	height: 32px;
	transition: all 0.3s ease;
	border-radius: 4px;
	background-color: ${(props)=>props.theme.colors.backgroundSecondary};

	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}

	&:active {
		opacity: 0.5;
	}

	svg {
		color: ${(props)=>props.theme.colors.branding};
		width: 24px;
		height: 24px;
		transition: all 0.3s ease;

		&:hover {
			color: ${(props)=>props.theme.colors.branding};
		}
	}

	@media (max-width: 600px) {
		margin-left: 3px;
		margin-right: 3px;
	}

	/* :hover {
		transform: translateY(-7px);
	} */
`;
function SocialNetworkRowStack() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SocialMediaContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonSocialMediaIcon, {
                href: "https://github.com/Diego-Carvalho-Dev",
                target: "_blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_icons_bootstrap_Github__WEBPACK_IMPORTED_MODULE_5__.Github, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonSocialMediaIcon, {
                href: "mailto:diego.cyberdev@gmail.com",
                target: "_blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_icons_boxicons_regular_MailSend__WEBPACK_IMPORTED_MODULE_2__.MailSend, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonSocialMediaIcon, {
                href: "https://www.linkedin.com/in/diegocarvalhodev/ ",
                target: "_blank",
                "data-splitbee-event": "linkedin-access",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_icons_boxicons_logos_LinkedinSquare__WEBPACK_IMPORTED_MODULE_3__.LinkedinSquare, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonSocialMediaIcon, {
                href: "https://x.com/DiegoCyberSec_",
                target: "_blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_icons_boxicons_logos_Twitter__WEBPACK_IMPORTED_MODULE_4__.Twitter, {})
            })
        ]
    });
} /*

Container com as cores das techs

<SocialMediaContainer>
			<ButtonSocialMediaIcon onClick={redirectToFacebook}>
				<Facebook style={{ color: "#3C5A99" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToGithub}>
				<Github style={{ color: "#818181" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToEmail}>
				<MailSend style={{ color: "#DB4437" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToWhatsapp}>
				<LogoWhatsapp style={{ color: "#25d366" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToTelegram}>
				<Telegram style={{ color: "#0088cc" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToInstagram}>
				<Instagram style={{ color: "#c13584" }} />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon onClick={redirectToLinkedin}>
				<LinkedinSquare style={{ color: "#0077b5" }} />
			</ButtonSocialMediaIcon>
		</SocialMediaContainer>
*/ 


/***/ })

};
;