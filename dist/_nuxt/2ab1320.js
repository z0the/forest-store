(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{213:function(t,e,n){"use strict";n.r(e);n(63),n(34),n(10),n(27),n(48),n(94),n(216),n(35),n(25);var o=n(3),r=n(98);function c(){return(c=Object(o.a)(regeneratorRuntime.mark((function t(e){var body,n,o,data,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return body=c.length>1&&void 0!==c[1]?c[1]:{data:1},t.prev=1,e=r.a+e,body=JSON.stringify(body),n={method:"POST",body:body},t.next=7,fetch(e,n);case 7:return o=t.sent,t.next=10,o.json();case 10:return data=t.sent,t.abrupt("return",data);case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})))).apply(this,arguments)}var d=function(t){return c.apply(this,arguments)},l=(n(95),{data:function(){return{name:"",email:"",phone:"",question:"",placePhone:"Введите ваш номер телефона",response:!1,errorPhone:!1}},methods:{sendForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var body;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){e(t.validateForm())}));case 2:if(!e.sent){e.next=16;break}return body={name:t.name,email:t.email,phone:t.phone,question:t.question},t.name="",t.email="",t.phone="",t.question="",t.response=!0,setTimeout((function(){return t.response=!1}),2e3),e.next=13,d("/api/mail",body);case 13:e.sent,e.next=20;break;case 16:t.phone="",t.placePhone="Введите корректный номер телефона",t.errorPhone=!0,setTimeout((function(){t.placePhone="Введите ваш номер телефона",t.errorPhone=!1}),2500);case 20:case"end":return e.stop()}}),e)})))()},validateForm:function(){return 0===this.phone.trim().replace(/[.*+?^${}()|[\]\\]/g,"").split("").filter((function(i){return isNaN(i)})).length&&this.phone.length>0}}}),m=(n(219),n(23)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts"},[n("a",{staticClass:"contacts__link",attrs:{name:"contacts",id:"contacts"}}),t._v(" "),n("div",{staticClass:"contacts__container"},[n("div",{staticClass:"contacts__header"},[t._v("Оставить заявку")]),t._v(" "),n("div",{staticClass:"contacts__row"},[n("div",{staticClass:"contacts__column"},[t._m(0),t._v(" "),n("div",{staticClass:"social-links"},[n("a",{staticClass:"soc-link",attrs:{href:""}},[n("fa",{attrs:{icon:["fab","instagram"]}})],1),t._v(" "),n("a",{staticClass:"soc-link",attrs:{href:""}},[n("fa",{attrs:{icon:["fab","telegram"]}})],1),t._v(" "),n("a",{staticClass:"soc-link",attrs:{href:""}},[n("fa",{attrs:{icon:["fab","whatsapp"]}})],1)])]),t._v(" "),n("div",{staticClass:"contacts__column"},[n("form",{staticClass:"contacts__form",on:{submit:function(e){return e.preventDefault(),t.sendForm(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"contacts__input",attrs:{type:"text",placeholder:"Введите ваше имя",maxlength:"50"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"contacts__input",attrs:{type:"text",placeholder:"Введите email",maxlength:"30"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"contacts__input",class:{error:t.errorPhone},attrs:{placeholder:t.placePhone,type:"tel",maxlength:"30"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"contacts__area",attrs:{placeholder:"Заинтересовавший вас товар или вопрос(необязательно)",rows:"5",maxlength:"600"},domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}}),t._v(" "),n("div",{staticClass:"contacts__commit"},[n("button",{staticClass:"contacts__button",class:{hide:t.response},attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\tОтправить\n\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"contacts__succes",class:{active:t.response}},[t._v("\n\t\t\t\t\t\t\tВаша заявка успешно отправлена!\n\t\t\t\t\t\t")])]),t._v(" "),n("div",{staticClass:"contacts__rights"},[t._v('\n\t\t\t\t\t\tНажимая на кнопку "отправить" вы даете конкретное, информированное и сознательное согласие в соответствии с положениями Политики конфиденциальности.\n\t\t\t\t\t')])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contacts__addres"},[e("p",[this._v("Тел: + 7 916 968 08 77")]),this._v(" "),e("p",[this._v("E-mail: lesnye.radosti@gmail.com")])])}],!1,null,"789d9f22",null);e.default=component.exports;installComponents(component,{Form:n(213).default})},214:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},215:function(t,e,n){var content=n(220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("1018afb4",content,!0,{sourceMap:!1})},216:function(t,e,n){"use strict";var o=n(2),r=n(217).trim;o({target:"String",proto:!0,forced:n(218)("trim")},{trim:function(){return r(this)}})},217:function(t,e,n){var o=n(11),r="["+n(214)+"]",c=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),l=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},218:function(t,e,n){var o=n(6),r=n(214);t.exports=function(t){return o((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},219:function(t,e,n){"use strict";n(215)},220:function(t,e,n){(e=n(21)(!1)).push([t.i,'.soc-link[data-v-789d9f22]{font-size:28px;margin-right:3px}.soc-link[data-v-789d9f22]:last-child{margin:0}.contacts[data-v-789d9f22]{display:flex;flex-direction:column;justify-content:center;margin-bottom:50px;position:relative;padding:0 20px}.contacts__link[data-v-789d9f22]{position:absolute;top:-100px}.contacts__container[data-v-789d9f22]{max-width:960px;margin:0 auto}.contacts__header[data-v-789d9f22]{font-weight:600;font-size:42px;margin-bottom:65px}.contacts__header[data-v-789d9f22],.contacts__info[data-v-789d9f22]{display:flex;justify-content:center}.contacts__info[data-v-789d9f22]{text-align:justify;flex-direction:column;align-items:flex-start;font-size:24px;font-weight:300;max-width:605px;margin:0 auto 125px;line-height:1.3em}.contacts__p[data-v-789d9f22]{margin-bottom:10px}.contacts__row[data-v-789d9f22]{display:flex}.contacts__column[data-v-789d9f22]{display:flex;flex-direction:column;flex:1 1 50%}.contacts__addres[data-v-789d9f22]{font-size:28px;font-weight:300;margin-bottom:25px}.contacts__addres p[data-v-789d9f22]{margin-bottom:7px}.contacts__addres p[data-v-789d9f22]:last-child{margin:0}.contacts__form[data-v-789d9f22]{display:flex;flex-direction:column}.contacts__input[data-v-789d9f22]{height:60px;padding:0 15px;border:1px solid #cecece;margin-bottom:24px;border-radius:3px}.contacts__input.error[data-v-789d9f22]{border:1px solid red}.contacts__input.error[data-v-789d9f22]::-webkit-input-placeholder{color:red}.contacts__input.error[data-v-789d9f22]:-moz-placeholder,.contacts__input.error[data-v-789d9f22]::-moz-placeholder{color:red}.contacts__input.error[data-v-789d9f22]:-ms-input-placeholder{color:red}.contacts__area[data-v-789d9f22]{resize:none;border:1px solid #cecece;margin-bottom:24px;font-family:"Roboto","Helvetica Neue",Arial,sans-serif;padding:10px 15px 0}.contacts__commit[data-v-789d9f22]{position:relative;display:flex;justify-content:center}.contacts__button[data-v-789d9f22]{width:200px;height:60px;font-weight:700;color:#fff;border-radius:30px;background-color:#1f5bff;margin-bottom:24px;transition:all .3s ease 0s;z-index:10}.contacts__button[data-v-789d9f22]:hover{background-color:#1742b6}.contacts__button.hide[data-v-789d9f22]{opacity:0}.contacts__succes[data-v-789d9f22]{font-size:26px;position:absolute;top:25%;opacity:0;transition:all .3s ease 0s}.contacts__succes.active[data-v-789d9f22]{opacity:1}@media screen and (max-width:768px){.contacts__header[data-v-789d9f22]{font-size:28px;margin-bottom:25px}.contacts__info[data-v-789d9f22]{font-size:16px;margin-bottom:45px}.contacts__column[data-v-789d9f22]:first-child{flex:0 0 40%}.contacts__addres[data-v-789d9f22]{font-size:18px}.contacts__input[data-v-789d9f22]{height:45px;margin-bottom:24px}.contacts__succes[data-v-789d9f22]{margin-bottom:15px;font-size:18px}}@media screen and (max-width:576px){.contacts__row[data-v-789d9f22]{flex-direction:column}.contacts__column[data-v-789d9f22]:first-child{margin-bottom:25px}.contacts__button[data-v-789d9f22]{width:120px;height:35px}.contacts__succes[data-v-789d9f22]{font-size:24px}}',""]),t.exports=e},221:function(t,e,n){var content=n(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("ab9322f6",content,!0,{sourceMap:!1})},226:function(t,e,n){"use strict";n(221)},227:function(t,e,n){(e=n(21)(!1)).push([t.i,"b[data-v-5a27386b]{font-weight:600}.link[data-v-5a27386b]{color:#719c7b;text-decoration:underline}.main[data-v-5a27386b]{margin:0 auto;padding-top:100px;display:flex;flex-direction:column}.article[data-v-5a27386b]{margin-top:30px}.bold[data-v-5a27386b]{font-weight:600}.product[data-v-5a27386b]{background-color:#efefef;border-radius:3px;width:100%;padding:40px 20px;margin:0 auto 140px;max-width:1250px;display:flex}.product__columns[data-v-5a27386b]{display:flex;margin-bottom:15px}.product__column[data-v-5a27386b]{line-height:1.4em;display:flex;flex-direction:column}.product__column[data-v-5a27386b]:first-child{margin-right:20px}.product__image[data-v-5a27386b]{width:270px;background-position:50%;margin-bottom:20px;border-radius:3px;background-size:cover;height:350px}.product__price[data-v-5a27386b]{display:flex;justify-content:center;align-items:center;margin-bottom:8px;border:1px solid #000;border-radius:3px;height:35px;min-width:270px;max-width:100%;font-size:13px;font-weight:600;background-color:#fff;transition:all .3s ease 0s}.product__price[data-v-5a27386b]:hover{border:1px solid #fff;background-color:#000;color:#fff}.product__text[data-v-5a27386b]{text-align:justify;line-height:1.2em}.product__text p[data-v-5a27386b]{margin-bottom:20px}@media screen and (max-width:767px){.product[data-v-5a27386b]{flex-direction:column}.product__column[data-v-5a27386b]{align-items:center;margin-right:0!important;margin-bottom:20px}}",""]),t.exports=e},236:function(t,e,n){"use strict";n.r(e);n(34),n(25);var o=n(3),r=n(95),c={components:{Form:n(213).default},data:function(){return{product:"",text:"",products:{adaptogen:{image:"../images/products/adaptogen.webp",price:400},tea:{image:"../images/products/tea.webp",price:10},mushroom:{image:"../images/products/mushroom.webp",price:3e3},berries:{image:"../images/products/berries.webp",price:1500},mumie:{image:"../images/products/mumie.webp",price:250},moss:{image:"../images/products/moss.webp",price:350},"stone-oil":{image:"../images/products/stone-oil.webp",price:350},hedge:{image:"../images/products/hedge.webp",price:350},"raw-oil":{image:"../images/products/raw-oil.webp",price:400},"ghee-oil":{image:"../images/products/ghee-oil.webp",price:900},"cedar-coffee":{image:"../images/products/cedar-coffee.webp",price:350},"pine-nut":{image:"../images/products/pine-nut.webp",price:250},honey:{image:"../images/products/honey.webp",price:350},"cream-honey":{image:"../images/products/cream-honey.webp",price:250},"premium-honey":{image:"../images/products/premium-honey.webp",price:750},"fir-oil":{image:"../images/products/fir-oil.webp",price:300},"pine-production":{image:"../images/products/pine-production.webp",price:10},"gift-set":{image:"../images/products/gift-set.webp",price:2800},"burdock-juice":{image:"../images/products/burdock-juice.webp",price:10},"cedar-pillows":{image:"../images/products/cedar-pillows.webp",price:1e3},"royal-jelly":{image:"../images/products/royal-jelly.webp",price:1500},"red-brush":{image:"../images/products/red-brush.webp",price:500}}}},created:function(){this.product=this.$route.query.name,this.image=this.products["".concat(this.product)].image,this.price=this.products["".concat(this.product)].price},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.query.name,e.next=3,Object(r.a)("/api/product?name=".concat(n));case 3:o=e.sent,t.text=o.text,t.$refs.text.innerHTML=t.text;case 6:case"end":return e.stop()}}),e)})))()}},d=(n(226),n(23)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("style",{attrs:{type:"text/css"}},[t._v("\n\t\tb {\n\t\t\tfont-weight: 600;\n\t\t}\n\t\tp {\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t\t.article {\n\t\t\tmargin-top: 30px;\n\t\t}\n\t\t.product__columns {\n\t\t\tdisplay: flex;\n\t\t\tmargin-bottom: 15px;\n\t\t}\n\t\t.product__column {\n\t\t\tline-height: 1.4em;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\t\t.product__column::first-child {\n\t\t\tmargin-right: 20px;\n\t\t}\n\t")]),t._v(" "),n("div",{staticClass:"product"},[n("div",{staticClass:"product__column"},[n("div",{staticClass:"product__image",style:{"background-image":"url("+t.image+")"}}),t._v(" "),n("a",{staticClass:"product__price",attrs:{href:"#contacts"}},[t._v("от "+t._s(t.price)+" ₽")])]),t._v(" "),n("div",{ref:"text",staticClass:"product__text"})]),t._v(" "),n("Form")],1)}),[],!1,null,"5a27386b",null);e.default=component.exports;installComponents(component,{Form:n(213).default})}}]);