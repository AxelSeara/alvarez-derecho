"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,660];
exports.modules = {

/***/ 4973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/index.js
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (pages),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(6004);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Navbar.jsx
var Navbar = __webpack_require__(1788);
;// CONCATENATED MODULE: ./components/Hero.jsx


const Hero = ()=>{
    const [opacity, setOpacity] = (0,external_react_.useState)(1);
    const handleClick = ()=>{
        setOpacity(0.7);
        setTimeout(()=>{
            setOpacity(1);
            const contactoDiv = document.getElementById("contacto");
            if (contactoDiv) {
                contactoDiv.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }, 90);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "text-black m-2",
        id: "principal",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-[800px]  mt-[100px] w-auto h-[50vh] mx-auto text-center flex flex-col justify-center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    className: "text-[#ffbf00] md:text-6xl sm:text-5xl text-4xl font-sans font-bold my-2",
                    children: "Luchamos por una justa indemnizaci\xf3n en tus casos legales"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "font-bold my-2",
                    children: "Expertos en accidentes de tr\xe1fico y litigios, comprometidos a lograr los mejores resultados para ti"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-center md:col-2 col-1 m-2 items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: "bg-[#ffbf00] w-[200px] rounded-md font-medium my-2 py-3 text-white",
                            onClick: handleClick,
                            style: {
                                opacity
                            },
                            children: "Consultanso ya"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-left p-2",
                            children: "Te respaldamos en cada paso"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Hero = (Hero);

;// CONCATENATED MODULE: ./components/Specialist.jsx


const Specialist = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "w-full py-10 px-4",
        id: "asesoramiento",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-[1280px] mx-auto grid md:grid-cols-2",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    className: "w-[400px] mx-auto my-4 rounded-md shadow-sm",
                    src: "/assets/road.jpg",
                    alt: "/"
                }),
                " ",
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col justify-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            className: "text-[#ffbf00] font-bold md:text-4xl sm:text-3xl text-2xl py-2",
                            children: "Nuestro Compromiso Legal: \xc9tica, Experiencia, Resultados"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-black",
                            children: "Somos una firma legal que:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "list-disc pl-5 text-black",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: "Se compromete con la \xe9tica en cada acci\xf3n y decisi\xf3n"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: "Est\xe1 respaldada por una amplia experiencia y un historial de casos exitosos"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: "Se enfoca en soluciones personalizadas para cada caso, garantizando que tus necesidades espec\xedficas se cumplan"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: "Brinda asesoramiento claro y efectivo, asegurando que entiendas cada paso del proceso legal"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: "Te representa con integridad, luchando por tus derechos y por una compensaci\xf3n justa"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-black",
                            children: "Conf\xeda en nosotros para obtener los resultados que necesitas."
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Specialist = (Specialist);

;// CONCATENATED MODULE: ./components/Contact.jsx


const Contact = ()=>{
    const handleWhatsAppClick = ()=>{
        const phoneNumber = "+34639303038";
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        window.open(whatsappLink);
        // Envía el evento de clic de WhatsApp a Google Analytics si está disponible
        if (false) {}
    };
    const handleContactClick = ()=>{
        const email = "info@despachoalvarez.es";
        const subject = encodeURIComponent("Asunto de contacto");
        const body = encodeURIComponent("Tu consulta");
        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
        window.open(mailtoLink);
        // Envía el evento de clic de contacto a Google Analytics si está disponible
        if (false) {}
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "w-full py-16 text-black px-4 m-2",
        id: "contacto",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-[1240px] mx-auto grid lg:grid-cols-3",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "lg:col-span-2 my-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            className: "md:text-4xl sm:text-3xl text-2xl font-bold py-2",
                            children: "Necesitas asesoramiento, cont\xe1ctanos"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: "Tu tranquilidad es nuestra prioridad. Hablemos de tus necesidades legales, Cont\xe1ctanos hoy."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "my-4 flex items-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "bg-[#25D366] rounded-md font-medium w-full mx-3 my-2 py-2 px-5 text-white focus:outline-none focus:ring-2 focus:ring-white",
                                onClick: handleWhatsAppClick,
                                children: "WhatsApp"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "bg-[#ffbf00] rounded-md font-medium w-full mx-3 my-2 py-2 px-5 text-white focus:outline-none focus:ring-2 focus:ring-white",
                                onClick: handleContactClick,
                                children: "Contactar"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Contact = (Contact);

;// CONCATENATED MODULE: ./components/Cards.jsx

function Cards() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "w-full py-[10rem] px-4",
        id: "servicios",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            className: "w-20 mx-auto mt-[-3rem] bg-whitesmoke",
                            src: "/assets/law.png",
                            alt: "/"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "text-2xl font-bold text-center py-8",
                            children: "Da\xf1os en el hogar, disputas con transportistas, inconvenientes bancarios."
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-center text-4xl font-bold",
                            children: "Reclamamos tu indemnizaci\xf3n"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center font-medium",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "py-2 border-b mx-8 mt-8",
                                    children: "Informaci\xf3n: todos los informes m\xe9dicos, fotograf\xedas, testigos, facturas o cualquier otro documento que demuestre da\xf1os y perjuicios sufridos"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "py-2 border-b mx-8",
                                    children: "Seguimiento: Te vamos informando de todos los pasos que tiene el proceso y resolveremos cualquier duda que vaya surgiendo"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "py-2 mx-8",
                                    children: "Negociaci\xf3n: solicitaremos la debida indemnizaci\xf3n por las consecuencias sufridas y en caso negativo llevamos el caso a los tribunales."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            className: "w-20 mx-auto mt-[-3rem] bg-whitesmoke",
                            src: "/assets/car.png",
                            alt: "/"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "text-2xl font-bold text-center py-8",
                            children: "Accidentes de coche, moto, cami\xf3n, barco. Accidentes en v\xeda p\xfablica, transporte p\xfablico."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: "text-center text-4xl font-bold",
                            children: [
                                "Accidentes de ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                "tr\xe1fico"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center font-medium",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "py-2 border-b mx-8 mt-8",
                                    children: "Evidencia: re\xfane toda la evidencia relevante que respalde tu reclamaci\xf3n, toda la documentaci\xf3n que demuestre los hechos"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "py-2 border-b mx-8",
                                    children: "Proceso: nuestra experiencia nos abala, te proporcionaremos una orientaci\xf3n especifica en todo momento"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "py-2 mx-8",
                                    children: "Demanda: en caso de que la negociaci\xf3n con la parte involucrada no fuera fruct\xedfera tu caso avanzar\xeda a trav\xe9s del sistema legal"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            className: "w-20 mx-auto mt-[-4rem] bg-whitesmoke",
                            src: "/assets/work.png",
                            alt: "/"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "text-2xl font-bold text-center py-8",
                            children: "Un libro escrito por un autor, un medicamento nuevo, el logotipo de Nike"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-center text-4xl font-bold",
                            children: "Propiedad Intelectual"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center font-medium",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "py-2 border-b mx-8 mt-8",
                                    children: "Derechos de autor: protegemos obras literarias y art\xedsticas que otorgan al autor el control exclusivo sobre la reproducci\xf3n, distribuci\xf3n y comunicaci\xf3n p\xfablica de su obra"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "py-2 border-b mx-8",
                                    children: "Patentes: Protegemos las invenciones y nuevos desarrollos tecnol\xf3gicos, otorgando al titular el derecho exclusivo durante un periodo de tiempo determinado"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "py-2 mx-8",
                                    children: "Marcas registradas: Protegemos los signos distintivos de productos o servicios de una empresa"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const components_Cards = (Cards);

// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__(6082);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/LatestBlogPosts.jsx



const LatestBlogPosts = ({ posts })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-4xl font-bold text-center py-10",
                children: "Nuestras \xfaltimas publicaciones"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8",
                children: posts && posts.map((post)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                className: "w-full h-[250px] object-cover rounded-t-lg",
                                src: post.image,
                                alt: post.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col justify-between flex-1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "text-2xl font-bold text-center py-8",
                                                children: post.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "text-xl text-center py-4",
                                                children: post.description
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: `/blog/${post.slug}`,
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "text-center text-lg font-bold mt-4 hover:text-blue-500",
                                            children: "Leer m\xe1s"
                                        })
                                    })
                                ]
                            })
                        ]
                    }, post.slug))
            })
        ]
    });
};
/* harmony default export */ const components_LatestBlogPosts = (LatestBlogPosts);

;// CONCATENATED MODULE: ./pages/index.js













function HomePage({ posts }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Alvarez Derecho"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "\xc1lvarez Derecho - Somos un bufete de abogados en Galicia especializado en diversas \xe1reas legales. Ofrecemos asesoramiento jur\xeddico en casos de derecho civil, penal, laboral y m\xe1s. Con amplia experiencia y profundo conocimiento del sistema legal gallego, brindamos soluciones efectivas y personalizadas a nuestros clientes. Cont\xe1ctanos hoy mismo para una consulta gratuita."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(components_Hero, {}),
            /*#__PURE__*/ jsx_runtime.jsx(components_Cards, {}),
            /*#__PURE__*/ jsx_runtime.jsx(components_Specialist, {}),
            /*#__PURE__*/ jsx_runtime.jsx(components_Contact, {}),
            /*#__PURE__*/ jsx_runtime.jsx(components_LatestBlogPosts, {
                posts: posts
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    });
}
async function getStaticProps() {
    const postsDirectory = external_path_default().join(process.cwd(), "posts");
    const filenames = external_fs_default().readdirSync(postsDirectory);
    const posts = filenames.map((filename)=>{
        const filePath = external_path_default().join(postsDirectory, filename);
        const fileContents = external_fs_default().readFileSync(filePath, "utf8");
        const { data } = external_gray_matter_default()(fileContents);
        return {
            title: data.title,
            description: data.description,
            slug: filename.replace(/\.md$/, ""),
            image: data.image,
            date: data.date
        };
    });
    const latestPosts = posts.sort((a, b)=>new Date(b.date) - new Date(a.date)).slice(0, 3);
    return {
        props: {
            posts: latestPosts
        }
    };
}
/* harmony default export */ const pages = (HomePage);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: (_document_default()),
          },
          userland: pages_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 4466:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,812,664,95], () => (__webpack_exec__(4973)));
module.exports = __webpack_exports__;

})();