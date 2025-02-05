"use strict";
exports.id = 12;
exports.ids = [12];
exports.modules = {

/***/ 6012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A_": () => (/* binding */ ContainerTitleSection),
/* harmony export */   "Ac": () => (/* binding */ BodyText),
/* harmony export */   "Qb": () => (/* binding */ TitleSection)
/* harmony export */ });
/* unused harmony exports TitleH1, TitleH2, TitleH3 */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const TitleH1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
    componentId: "sc-40f3f9e3-0"
})`
	color: ${(props)=>props.theme.colors.title};

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
const TitleH2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
    componentId: "sc-40f3f9e3-1"
})`
	color: ${(props)=>props.theme.colors.title};

	@media (max-width: 1600px) {
		font-size: ${(props)=>props.theme.fontSizes.lg};
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
const TitleH3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-40f3f9e3-2"
})`
	z-index: 2;
	color: ${(props)=>props.theme.colors.title};
	font-size: ${(props)=>props.theme.fontSizes.md};

	@media (max-width: 900px) {
		font-size: ${(props)=>props.theme.fontSizes.sm};
	}
`;
const BodyText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-40f3f9e3-3"
})`
	color: ${(props)=>props.theme.colors.body};
	font-size: ${(props)=>props.theme.fontSizes.md};

	@media (max-width: 600px) {
		font-size: ${(props)=>props.theme.fontSizes.sm};
	}
`;
const TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
    componentId: "sc-40f3f9e3-4"
})`
	font-weight: 700;
	color: ${(props)=>props.theme.colors.branding};
	font-size: 26px;
	@media (max-width: 900px) {
		font-size: 18px;
	}
`;
const ContainerTitleSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-40f3f9e3-5"
})`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 30px;
	width: 100%;

	@media (max-width: 900px) {
		margin-top: 40px;
	}

	svg {
		color: ${(props)=>props.theme.colors.branding};
		width: 44px;
		height: 44px;
		margin-right: 10px;

		@media (max-width: 1400px) {
			width: 34px;
			height: 34px;
		}

		@media (max-width: 900px) {
			width: 28px;
			height: 28px;
		}
	}
`;


/***/ })

};
;