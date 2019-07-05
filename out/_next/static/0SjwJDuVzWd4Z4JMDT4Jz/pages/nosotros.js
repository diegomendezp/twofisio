(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9fiv":function(e,t,n){(function(e,r){(function(t,n){"use strict";var a="default"in n?n.default:n;function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d(e,t,n[t])})}return e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?h(e):t}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v="react-accessible-accordion@AccordionContainer",g=function(e){function t(){var e,n;o(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return d(h(h(n=y(this,(e=p(t)).call.apply(e,[this].concat(a))))),"state",{items:n.props.items||[]}),d(h(h(n)),"addItem",function(e){n.setState(function(t){return t.items.some(function(t){return t.uuid===e.uuid})&&console.error('AccordionItem error: One item already has the uuid "'.concat(e.uuid,'". Uuid property must be unique. See: https://github.com/springload/react-accessible-accordion#accordionitem')),{items:n.props.accordion&&e.expanded?b(t.items.map(function(e){return s({},e,{expanded:!1})})).concat([e]):b(t.items).concat([e])}})}),d(h(h(n)),"removeItem",function(e){return n.setState(function(t){return{items:t.items.filter(function(t){return t.uuid!==e})}})}),d(h(h(n)),"setExpanded",function(e,t){return n.setState(function(r){return{items:r.items.map(function(r){return r.uuid===e?s({},r,{expanded:t}):n.props.accordion&&t?s({},r,{expanded:!1}):r})}},function(){n.props.onChange&&n.props.onChange(n.props.accordion?e:n.state.items.filter(function(e){return e.expanded}).map(function(e){return e.uuid}))})}),n}return l(t,n.Component),c(t,[{key:"getChildContext",value:function(){var e={items:this.state.items,accordion:!!this.props.accordion,addItem:this.addItem,removeItem:this.removeItem,setExpanded:this.setExpanded};return d({},v,e)}},{key:"render",value:function(){return this.props.children||null}}]),t}();d(g,"childContextTypes",d({},v,function(){return null}));var w=function(e){function t(){return o(this,t),y(this,p(t).apply(this,arguments))}return l(t,n.Component),c(t,[{key:"render",value:function(){return this.props.children(this.context[v])}}]),t}();d(w,"contextTypes",d({},v,function(){return null}));var E=function(e){var t=e.accordion,n=f(e,["accordion"]);return a.createElement("div",u({role:t?"tablist":null},n))};E.defaultProps={accordion:!0};var C=function(e){function t(){var e,n;o(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return d(h(h(n=y(this,(e=p(t)).call.apply(e,[this].concat(i))))),"renderAccordion",function(e){var t=n.props,r=(t.accordion,t.onChange,f(t,["accordion","onChange"]));return a.createElement(E,u({accordion:e.accordion},r))}),n}return l(t,n.Component),c(t,[{key:"render",value:function(){return a.createElement(g,{accordion:this.props.accordion,onChange:this.props.onChange},a.createElement(w,null,this.renderAccordion))}}]),t}();function x(e,t){return e(t={exports:{}},t.exports),t.exports}d(C,"defaultProps",{accordion:!0,onChange:function(){},className:"accordion",children:null});var O,j=x(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.createChangeEmitter=function(){var e=[],t=e;function n(){t===e&&(t=e.slice())}return{listen:function(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var r=!0;return n(),t.push(e),function(){if(r){r=!1,n();var a=t.indexOf(e);t.splice(a,1)}}},emit:function(){for(var n=e=t,r=0;r<n.length;r++)n[r].apply(n,arguments)}}}});(O=j)&&O.__esModule&&Object.prototype.hasOwnProperty.call(O,"default")&&O.default,j.createChangeEmitter,function(e){var t,n=e.Symbol;"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable"}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r),n.Component;var S=function(e,t,n){return void 0===n&&(n="children"),function(r){var o=a.createFactory(r),i=a.createFactory(e);return function(e){var r;return i(((r={})[n]=function(){return o(u({},e,t.apply(void 0,arguments)))},r))}}},I=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}},function(e){return e})},N=function(e,t,n){var r=e||0;return"number"!=typeof t&&(t=10),"number"!=typeof n&&(n=1),function(){var e;return void 0===t||10===t?(e=r,r+=n):(e=r.toString(),r=(parseInt(r,t)+n).toString(t)),e}},k="react-accessible-accordion@ItemContainer",_=function(e){function t(){return o(this,t),y(this,p(t).apply(this,arguments))}return l(t,n.Component),c(t,[{key:"getChildContext",value:function(){var e=this.props.uuid;return d({},k,{uuid:e})}},{key:"render",value:function(){return this.props.children||null}}]),t}();d(_,"childContextTypes",d({},k,function(){return null}));var P=function(e){function t(){return o(this,t),y(this,p(t).apply(this,arguments))}return l(t,n.Component),c(t,[{key:"render",value:function(){return this.props.children(this.context[k])}}]),t}();d(P,"contextTypes",d({},k,function(){return null}));var A=x(function(e){
/*!
    Copyright (c) 2016 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a))e.push(n.apply(null,a));else if("object"===o)for(var i in a)t.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}),T=function(e){function t(){return o(this,t),y(this,p(t).apply(this,arguments))}return l(t,n.Component),c(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.uuid,n=e.accordionStore,r=e.disabled;n.addItem({uuid:t,expanded:this.props.expanded||!1,disabled:r})}},{key:"componentWillUnmount",value:function(){this.props.accordionStore.removeItem(this.props.uuid)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.uuid,r=t.expanded,a=t.accordionStore;r!==e.expanded&&a.setExpanded(n,r)}},{key:"render",value:function(){var e=this.props,t=e.uuid,n=e.className,r=e.hideBodyClassName,o=e.accordionStore,i=(e.disabled,e.expanded,f(e,["uuid","className","hideBodyClassName","accordionStore","disabled","expanded"])),c=o.items.filter(function(e){return e.uuid===t})[0];return c?a.createElement("div",u({className:A(n,d({},r,!c.expanded&&r))},i)):null}}]),t}(),M=N(),U=function(e){function t(){var e,n;o(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return d(h(h(n=y(this,(e=p(t)).call.apply(e,[this].concat(a))))),"id",M()),n}return l(t,n.Component),c(t,[{key:"render",value:function(){var e=this.props,t=e.accordionStore,n=e.uuid,r=f(e,["accordionStore","uuid"]),o=void 0!==n?n:this.id;return a.createElement(_,{uuid:o},a.createElement(T,u({},r,{uuid:o,accordionStore:t})))}}]),t}();d(U,"defaultProps",{className:"accordion__item",hideBodyClassName:"",disabled:!1,expanded:!1,uuid:void 0});var F=I(S(w,function(e){return{accordionStore:e}}))(U),B=function(e){function t(){var e,n;o(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return d(h(h(n=y(this,(e=p(t)).call.apply(e,[this].concat(a))))),"handleClick",function(){var e=n.props,t=e.uuid,r=e.expanded;(0,e.setExpanded)(t,!r)}),d(h(h(n)),"handleKeyPress",function(e){13!==e.charCode&&32!==e.charCode||(e.preventDefault(),n.handleClick())}),n}return l(t,n.Component),c(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.hideBodyClassName,r=(e.item,e.accordion),o=(e.setExpanded,e.expanded),i=e.uuid,c=e.disabled,s=f(e,["className","hideBodyClassName","item","accordion","setExpanded","expanded","uuid","disabled"]),l="accordion__title-".concat(i),p="accordion__body-".concat(i),m=r?"tab":"button",h=A(t,d({},n,n&&!o));return"tab"===m?a.createElement("div",u({id:l,"aria-selected":o,"aria-controls":p,className:h,onClick:c?void 0:this.handleClick,role:m,tabIndex:"0",onKeyPress:this.handleKeyPress,disabled:c},s)):a.createElement("div",u({id:l,"aria-expanded":o,"aria-controls":p,className:h,onClick:c?void 0:this.handleClick,role:m,tabIndex:"0",onKeyPress:this.handleKeyPress,disabled:c},s))}}]),t}();d(B,"accordionElementName","AccordionItemTitle");var D=function(e){function t(){return o(this,t),y(this,p(t).apply(this,arguments))}return l(t,n.Component),c(t,[{key:"render",value:function(){var e=this.props,t=e.itemStore,n=e.accordionStore,r=f(e,["itemStore","accordionStore"]),o=t.uuid,i=n.items,c=n.accordion,d=i.filter(function(e){return e.uuid===o})[0];return a.createElement(B,u({},r,d,{setExpanded:n.setExpanded,accordion:c}))}}]),t}();d(D,"defaultProps",{className:"accordion__title",hideBodyClassName:""});var K=I(S(w,function(e){return{accordionStore:e}}),S(P,function(e){return{itemStore:e}}))(D),z=function(e){var t=e.className,n=e.hideBodyClassName,r=e.uuid,o=e.expanded,i=(e.disabled,e.accordion),c=f(e,["className","hideBodyClassName","uuid","expanded","disabled","accordion"]);return a.createElement("div",u({id:"accordion__body-".concat(r),className:A(t,d({},n,!o)),"aria-hidden":!o,"aria-labelledby":"accordion__title-".concat(r),role:i?"tabpanel":null},c))},R=function(e){function t(){return o(this,t),y(this,p(t).apply(this,arguments))}return l(t,n.Component),c(t,[{key:"render",value:function(){var e=this.props,t=e.itemStore,n=e.accordionStore,r=f(e,["itemStore","accordionStore"]),o=t.uuid,i=n.items,c=n.accordion,d=i.filter(function(e){return e.uuid===o})[0];return d?a.createElement(z,u({},r,d,{accordion:c})):null}}]),t}();d(R,"defaultProps",{className:"accordion__body",hideBodyClassName:"accordion__body--hidden"});var G=I(S(w,function(e){return{accordionStore:e}}),S(P,function(e){return{itemStore:e}}))(R);t.Accordion=C,t.AccordionItem=F,t.AccordionItemTitle=K,t.AccordionItemBody=G,t.resetNextUuid=function(){M=N()},Object.defineProperty(t,"__esModule",{value:!0})})(t,n("q1tI"))}).call(this,n("3r9c"),n("1/IK")(e))},"F+/a":function(e){e.exports=[{name:"Rebeca Poyatos",number:5474,curriculum:["Grado en fisioterapia (Universidad San Pablo Ceu)","Experto en osteopatía (Universidad Alcalá de Henares)","Ecografía músculo esquelética (Universidad autónoma de Madrid ONCE y MVClinic)","Fisioterapia invasiva (MVClinic)","Integración clínica osteopática (Escuela Thuban)","Experta en terapia miofascial (Universidad Europea de Madrid y 1 er curso en la Escuela de Andreu Pilat)","Formación en drenaje linfático manual (Escuela de formación en terapias manulaes Kabat)","Terapia manual y punción seca en el Síndrome miofascial. Puntos gatillo miofasciales (Escuela de Osteopatía de Madrid)","Curso de terapia cráneo-sacral I (Instituto Upledger)","Tratamiento fisioterápico en disfunciones articulación témporo-mandibular (Fisioterapia Arguelles)","Monitora de pilates (Federación Madrileña de Gimnasia)"],photo:"/static/twofisioRebeca.png"},{name:"Clara Taboada",number:6184,curriculum:["Diplomada en fisioterapia (Universidad Rey Juan Carlos)","Experto en terapia miofascial (Universidad Europea de Madrid)","Ecografía músculo esquelética (Universidad autónoma de Madrid ONCE y MVClinic)","Fisioterapia invasiva (MVClinic)","Monitor pilates suelo, aparatos estabilizadores nivel I y nivel II (Federación Madrileña de Gimnasia)","Terapia Manual y Punción Seca en el Síndrome de Dolor Miofascial. Puntos Gatillo Miofasciales (Escuela de Osteopatía de Madrid)","XXI Jornadas de Fisioterapia Deportiva. Actualizaciones en Regeneración Muscular y Tendinosa (Escuela de fisioterapia de la ONCE)","Terapia manual osteopática (Instituto Relater)","Integración clínica osteopática (Escuela Thuban)","Máster en fisioterapia deportiva (Universidad Europea de Madrid y Escuela de fisioterapia del Real Madrid)","Kinesiotaping nivel I y nivel II (Universidad Europea de Madrid)"],photo:"/static/twofisioClara.png"},{name:"Alejandro Méndez",number:9775,curriculum:["Grado en fisioterapia (Universidad Pontificia de Comillas)","Especialista en Fisioterapia Deportiva (Universidad Complutense de Madrid)","Especialista en Nutrición Deportiva y Fisiología del ejercicio (Dietas, Deportes y Tecnología S.L)","Experto en pilates y su aplicación a la fisioterapia (AEFEP)"],photo:"/static/twofisioAlejandro.png"},{name:"Lara González",number:12869,curriculum:["Grado en fisioterapia (Universidad Rey Juan Carlos)","Certificado “Ejercicio terapéutico y control motor basado en el método pilates suelo por la Dirección General de Investigación y Gestión del Conocimiento de la Consejería de Salud de la Junta de Andalucía (20h).","Certificado “Kinesio Taping Fundamentals And Advanced (KT1 & KT2)” por la Kinesio Taping International Association","Máster en fisioterapia deportiva (Universidad Pontificia de Salamanca y Clínica Cemtro)"],photo:"/static/twofisioLara.png"}]},Izlc:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nosotros",function(){var e=n("v/Qn");return{page:e.default||e}}])},"v/Qn":function(e,t,n){"use strict";n.r(t);var r=n("zrwo"),a=n("0iUn"),o=n("sLSF"),i=n("MI3g"),c=n("a7VT"),d=n("AT/M"),u=n("Tit0"),s=n("vYYK"),l=n("kOwS"),p=n("q1tI"),m=n.n(p),f=n("F+/a"),h=n("9fiv"),y=n("sCxc"),b=n("To5k"),v=function(e){function t(e){var n;return Object(a.default)(this,t),n=Object(i.default)(this,Object(c.default)(t).call(this,e)),Object(s.a)(Object(d.default)(n),"rotateImage",function(e){n.state.open?document.getElementById(e).style.webkitTransform="rotate(0deg)":document.getElementById(e).style.webkitTransform="rotate(180deg)";var t=!n.state.open;n.setState(Object(r.a)({},n.state,{open:t}))}),Object(s.a)(Object(d.default)(n),"displayCurriculum",function(e){return e.map(function(e,t){return m.a.createElement(h.AccordionItemBody,{key:t},"- ",e)})}),n.state={open:!1},n}return Object(u.default)(t,e),Object(o.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.name,r=t.number,a=t.curriculum,o=t.photo;return m.a.createElement("div",{className:"member"},m.a.createElement("img",{className:"member-img",src:o,alt:"".concat(n,"-photo")}),m.a.createElement(h.Accordion,null,m.a.createElement(h.AccordionItem,{onClick:function(){e.rotateImage("up-down-icon-".concat(n))}},m.a.createElement(h.AccordionItemTitle,null,m.a.createElement("div",{className:"member-info"},m.a.createElement(b.a,{className:"member-name"},n),m.a.createElement(y.a,{className:"member-cole"}," NºColegiado: ",r)),m.a.createElement("img",{src:"../../static/iconUpdown.svg",alt:"up-down-icon",id:"up-down-icon-".concat(n)})),this.displayCurriculum(a))))}}]),t}(m.a.Component),g=n("6yR0"),w=n("HXcA"),E=n("vOnD").a.div.withConfig({displayName:"NosotrosStyles",componentId:"ak83kl-0"})(['max-width:100vw;margin-bottom:15%;padding-top:10%;font-family:"Monserrat-Regular";font-size:0.8rem;letter-spacing:0.04rem;line-height:1.3rem;.accordion__body--hidden{display:none;opacity:0;animation:fadein 0.35s ease-in;}@keyframes fadein{0%{opacity:0;}100%{opacity:1;}}.member-img{margin-top:10%;width:100%;height:300px;object-fit:cover;}.member-description{width:90%;margin:0 auto;margin-bottom:20%;margin-top:15%;}.accordion{border:0;border-radius:0;max-width:100vw;}.member-info{width:100%;margin:0 auto;}.accordion__title{background-color:white;color:black;cursor:pointer;outline:none;padding:0px;width:100%;text-align:left;border:none;height:80px;display:flex;justify-content:space-evenly;width:90%;margin:0 auto;margin-bottom:1rem;}.member-name{color:#740a64;}.member-cole{margin-bottom:5%;}.accordion__body{margin:0 auto;margin-bottom:5%;padding:0px;animation:fadein 0.35s ease-in;width:90%;}.team{width:100%;}@media only screen and (min-width:415px) and (max-width:768px){font-size:0.8rem;.member-img{width:100%;height:250px;object-fit:cover;margin-top:10%;}.member{width:40%;}.team{display:flex;flex-wrap:wrap;justify-content:space-around;}.member-description{width:60%;margin-left:5%;margin-top:8%;margin-bottom:10%;}}@media only screen and (min-width:769px) and (max-width:1440px){font-size:1rem;.member-img{width:100%;height:350px;object-fit:cover;margin-top:10%;}.member{width:40%;}.team{display:flex;flex-wrap:wrap;justify-content:space-around;}.member-description{width:60%;margin-left:5%;margin-top:8%;margin-bottom:10%;}}@media only screen and (min-width:1441px){font-size:1rem;.member{width:40%;}.team{display:flex;flex-wrap:wrap;justify-content:space-around;}.member-description{width:60%;margin-left:5%;margin-top:8%;margin-bottom:10%;}.member-img{height:auto;margin-top:10%;}}']),C=n("TDWf");n.d(t,"default",function(){return x});var x=function(e){function t(){var e;return Object(a.default)(this,t),e=Object(i.default)(this,Object(c.default)(t).call(this)),Object(s.a)(Object(d.default)(e),"changeNavScroll",function(){window.addEventListener("scroll",function(){window.scrollY>10?e.setState(Object(r.a)({},e.state,{navColor:"white"})):e.setState(Object(r.a)({},e.state,{navColor:"transparent"}))})}),Object(s.a)(Object(d.default)(e),"changeLocalStorage",function(){e.props&&e.props.url.query.formPosition?localStorage.setItem("formPosition",e.props.url.query.formPosition):localStorage.removeItem("formPosition")}),e.state={navColor:"transparent"},e}return Object(u.default)(t,e),Object(o.default)(t,[{key:"componentDidMount",value:function(){this.changeLocalStorage(),document.getElementsByTagName("body")[0].style.position="relative",document.getElementsByTagName("body")[0].style.overflow="scroll",this.changeNavScroll()}},{key:"render",value:function(){var e=this.state.navColor;return m.a.createElement(m.a.Fragment,null,m.a.createElement(C.a,{title:"Twofisio – Nosotros"}),m.a.createElement(g.a,{link:"Cerrar",backgroundColor:e}),m.a.createElement(E,null,m.a.createElement(y.a,{className:"member-description"},"En nuestro centro de fisioterapia siempre será atendido por profesionales colegiados con amplia experiencia en el sector y en continua formación para ofrecerle el mejor tratamiento posible."),m.a.createElement("div",{className:"team"},f.map(function(e,t){return m.a.createElement(v,Object(l.a)({key:t},e))}))),m.a.createElement(w.a,null))}}]),t}(m.a.Component)}},[["Izlc",1,0]]]);