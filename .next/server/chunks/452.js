"use strict";
exports.id = 452;
exports.ids = [452];
exports.modules = {

/***/ 5452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ SettingsContext),
  "Z": () => (/* binding */ SettingsProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./styles/Theme.jsx
const darkTheme = {
    name: "dark",
    colors: {
        imageBlur: "url('/img/bg_circle-dark.png')",
        backgroundPage: "#161616",
        backgroundGradient: "linear-gradient(to left top, #252525, #0C0C0C)",
        backgroundRadial: "radial-gradient(ellipse at center, #2e2e2e, #0C0C0C)",
        background: "#000",
        backgroundSecondary: "#272727",
        branding: "#00c834",
        title: "#fff",
        inactiveTitle: "#8b8b8b",
        subtitle: "#ccc",
        body: "#ccc",
        contrastText: "#2b2b2b",
        caption: "#ccc",
        icon: "#fff",
        iconHover: "#9b883c",
        button: "",
        shadow: ""
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px"
    }
};
const lightTheme = {
    name: "light",
    colors: {
        imageBlur: "url('/img/bg_circle-light.png')",
        backgroundPage: "#eeeeee",
        backgroundGradient: "linear-gradient(202deg, #ffffff 0%, #e6e6e6 100%)",
        backgroundRadial: "radial-gradient(circle, #ffffff 0%, #e6e6e6 100%)",
        background: "#ffffff",
        backgroundSecondary: "#d3d3d3",
        branding: "#362f2f",
        title: "#00c834",
        inactiveTitle: "#8b8b8b",
        subtitle: "#383838",
        body: "#666666",
        contrastText: "#2b2b2b",
        caption: "#ccc",
        icon: "#fff",
        iconHover: "#000000",
        button: "",
        shadow: ""
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px"
    }
};

;// CONCATENATED MODULE: ./config/localization/frfr.json
const frfr_namespaceObject = JSON.parse('{"id":"enuk","navbarMenu":{"labelHome":"INÍCIO","labelServices":"SERVIÇOS","labelAboutMe":"SOBRE MIM","labelPortifolio":"PORTFÓLIO","labelExperience":"EXPERIÊNCIA"},"landingPage":{"apresentationText":"Olá Mundo,","typeText":"Diego CyberSec","resumeText":"Fascinado por TI e suas questões de segurança, estou migrando para a profissão de cibersegurança. Criativo e perseverante, gosto de enfrentar desafios em equipe para atender aos desafios atuais em termos de segurança da informação.","buttonText":"Sobre mim"},"servicesOffer":{"title":"Meus Serviços","cards":{"forensique":{"title":"Investigação Forense","contentText":"Sólido entendimento dos princípios básicos da computação forense, incluindo métodos de aquisição de dados, análise de dados e apresentação de evidências."},"devsecops":{"title":"DevSecOps","contentText":"Forte compreensão de desenvolvimento, segurança da informação e conformidade regulatória. Competente em CI/CD, segurança de rede, testes de penetração."},"pentesting":{"title":"Pentest","contentText":"Teste de penetração e vulnerabilidades comuns. Reconhecimento, exploração, pós-exploração e relatórios. Identificação e correção de vulnerabilidades para garantir a segurança de sistemas e redes."},"developpement":{"title":"Desenvolvimento","contentText":"Experiência em Python, NodeJs, JavaScript, Php e outros. Uso avançado do GitHub para controle de versão e colaboração em projetos pessoais e profissionais."}}},"aboutMePage":{"title":"SOBRE MIM","paragraph_one":"Tenho sólida experiência em desenvolvimento web, utilizando diversas linguagens e frameworks, além de graduação em Análise e Desenvolvimento de Sistemas.","paragraph_two":"Atualmente, estou aprimorando meus conhecimentos em cibersegurança através de pós-graduação em Cibersegurança e Cibercrime, com foco na certificação CEH.","paragraph_three":"Busco oportunidade em empresa inovadora que valorize a segurança da informação, onde possa aplicar meus conhecimentos para proteger sistemas e dados, contribuindo para a construção de soluções robustas e confiáveis.","github_card":{"followers":"Seguidores","following":"Seguindo","repos":"Repositórios"},"alt_dev_img":"Diego CyberSec"},"portifolioPage":{"title":"PORTFÓLIO","labelFilter":"TODOS","createdLabel":"Criado em"},"experiencePage":{"title":"EXPERIÊNCIA","timeline":{"labelPosition":"Posição","labelTitle":"Título","labelCompany":"Empresa","labelCategory":"Categoria","labelInstitution":"Instituição","labelProfessionalCourse":"Curso Profissionalizante","labelBachelorDegree":"Graduação","labelExtensionCourse":"Curso de Extensão"}},"footer":{"labelNavigation":{"title":"Navegação","labelHome":"Início","labelServices":"Serviços","labelAboutMe":"Sobre Mim","labelPortifolio":"Portfólio","labelExperience":"Experiência"},"labelHost":{"title":"Hospedagem"},"labelSourceCode":{"title":"Código Fonte"},"labelTechs":{"title":"Tecnologias"},"labelBuildVersion":"Versão"}}');
;// CONCATENATED MODULE: ./config/localization/enuk.json
const enuk_namespaceObject = JSON.parse('{"id":"enuk","navbarMenu":{"labelHome":"MAIN MENU","labelServices":"MY AREAS","labelAboutMe":"PROFILE","labelPortifolio":"PROJECTS","labelExperience":"EXPERIENCES"},"landingPage":{"apresentationText":"Hello World,","typeText":"Diego CyberSec","resumeText":"Fascinated by computer science and its security challenges, I am oriented towards cybersecurity careers. Creative and persevering, I enjoy taking on challenges as a team to meet current challenges in terms of IT security.","buttonText":"About me"},"servicesOffer":{"title":"My areas","cards":{"forensique":{"title":"Forensics","contentText":"Solid understanding of the basic principles of computer forensics, including data acquisition methods, data analysis, and evidence presentation."},"devsecops":{"title":"DevSecOps","contentText":"Strong understanding of development, information security, and regulatory compliance. Competent in CI/CD, network security, penetration testing."},"pentesting":{"title":"Pentesting","contentText":"Penetration testing and common vulnerabilities. Reconnaissance, exploitation, post-exploitation and reporting. Identification and correction of vulnerabilities to ensure the security of systems and networks."},"developpement":{"title":"Development","contentText":"Expertise in Java, Python, C++, JavaScript, Bash, Docker, and others. Advanced use of Github for version control and collaboration on personal and professional projects."}}},"aboutMePage":{"title":"PROFILE","paragraph_one":"Fifth-year student at ISEN Lille, I am currently on a professionalization contract at Orange Cyberdefense as a CSIRT engineer.","paragraph_two":"Experienced cybersecurity engineer, passionate about data protection and IT security. With industry experience, I specialize in implementing robust security systems for businesses of all sizes. I am also proficient in penetration testing, regulatory compliance, and security incident management. My goal is to provide advanced security solutions to help protect digital assets.","paragraph_three":"As a self-host, I firmly believe that everyone should have complete control over their data and online services. That\'s why I specialize in hosting my own websites, applications, and services, to avoid dependence on large online service providers. I like to share my knowledge and experiences with others to help them understand the benefits of self-hosting and get started on the adventure. My goal is to facilitate access to digital technology autonomy for everyone.","github_card":{"followers":"followers","following":"following","repos":"repos"},"alt_dev_img":"Diego CyberSec"},"portifolioPage":{"title":"PROJECTS","labelFilter":"ALL","createdLabel":"Created on"},"experiencePage":{"title":"EXPERIENCES","timeline":{"labelPosition":"Position","labelTitle":"Title","labelCompany":"Company","labelCategory":"Category","labelInstitution":"Institution","labelProfessionalCourse":"Professional Course","labelBachelorDegree":"Bachelor Degree","labelExtensionCourse":"Extension Course"}},"footer":{"labelNavigation":{"title":"Navigation","labelHome":"Main menu","labelServices":"My areas","labelAboutMe":"Whoami","labelPortifolio":"Projects","labelExperience":"Experiences"},"labelHost":{"title":"HOSTING"},"labelSourceCode":{"title":"SOURCE CODE"},"labelTechs":{"title":"TECHNOLOGIES"},"labelBuildVersion":"Version"}}');
;// CONCATENATED MODULE: ./context/SettingsContext.jsx



//Lista de temas

//Pacotes com textos de linguagens


const goToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
const SettingsContext = /*#__PURE__*/ (0,external_react_.createContext)({});
const listaTemas = {
    dark: darkTheme,
    light: lightTheme
};
function SettingsProvider({ children  }) {
    const [theme, setTheme] = (0,external_react_.useState)(darkTheme);
    const [changeLanguage, setLanguage] = (0,external_react_.useState)(false);
    function changeTheme(newTheme) {
        setTheme(listaTemas[newTheme]);
    }
    function changeLanguageLocalization() {
        setLanguage(!changeLanguage);
    }
    var language = changeLanguage == true ? enuk_namespaceObject : frfr_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx(SettingsContext.Provider, {
        value: {
            changeTheme,
            changeLanguageLocalization,
            language
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
            theme: theme,
            children: children
        })
    });
}


/***/ })

};
;