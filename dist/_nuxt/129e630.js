(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{251:function(t,e,n){"use strict";n.r(e);n(62),n(33),n(10),n(34),n(63),n(94),n(254),n(47),n(26);var o=n(5),r=n(95);function c(){return(c=Object(o.a)(regeneratorRuntime.mark((function t(e){var body,n,o,data,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return body=c.length>1&&void 0!==c[1]?c[1]:{data:1},t.prev=1,e=r.a+e,body=JSON.stringify(body),n={method:"POST",body:body},t.next=7,fetch(e,n);case 7:return o=t.sent,t.next=10,o.json();case 10:return data=t.sent,t.abrupt("return",data);case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})))).apply(this,arguments)}var l=function(t){return c.apply(this,arguments)},d=(n(143),{data:function(){return{name:"",email:"",phone:"",question:"",placePhone:"Введите ваш номер телефона",response:!1,errorPhone:!1}},methods:{sendForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var body;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){e(t.validateForm())}));case 2:if(!e.sent){e.next=16;break}return body={name:t.name,email:t.email,phone:t.phone,question:t.question},t.name="",t.email="",t.phone="",t.question="",t.response=!0,setTimeout((function(){return t.response=!1}),2e3),e.next=13,l("/api/foo",body);case 13:e.sent,e.next=20;break;case 16:t.phone="",t.placePhone="Введите корректный номер телефона",t.errorPhone=!0,setTimeout((function(){t.placePhone="Введите ваш номер телефона",t.errorPhone=!1}),2500);case 20:case"end":return e.stop()}}),e)})))()},validateForm:function(){return 0===this.phone.trim().replace(/[.*+?^${}()|[\]\\]/g,"").split("").filter((function(i){return isNaN(i)})).length&&this.phone.length>0}}}),f=(n(257),n(23)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts"},[n("a",{staticClass:"contacts__link",attrs:{name:"contacts"}}),t._v(" "),n("div",{staticClass:"contacts__container"},[n("div",{staticClass:"contacts__header"},[t._v("Оставить заявку")]),t._v(" "),n("div",{staticClass:"contacts__row"},[n("div",{staticClass:"contacts__column"},[t._m(0),t._v(" "),n("div",{staticClass:"social-links"},[n("a",{staticClass:"soc-link",attrs:{href:""}},[n("fa",{attrs:{icon:["fab","instagram"]}})],1),t._v(" "),n("a",{staticClass:"soc-link",attrs:{href:""}},[n("fa",{attrs:{icon:["fab","telegram"]}})],1),t._v(" "),n("a",{staticClass:"soc-link",attrs:{href:""}},[n("fa",{attrs:{icon:["fab","whatsapp"]}})],1)])]),t._v(" "),n("div",{staticClass:"contacts__column"},[n("form",{staticClass:"contacts__form",on:{submit:function(e){return e.preventDefault(),t.sendForm(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"contacts__input",attrs:{type:"text",placeholder:"Введите ваше имя",maxlength:"50"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"contacts__input",attrs:{type:"text",placeholder:"Введите email",maxlength:"30"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"contacts__input",class:{error:t.errorPhone},attrs:{placeholder:t.placePhone,type:"tel",maxlength:"30"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"contacts__area",attrs:{placeholder:"Заинтересовавший вас товар или вопрос(необязательно)",rows:"5",maxlength:"600"},domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}}),t._v(" "),n("div",{staticClass:"contacts__commit"},[n("button",{staticClass:"contacts__button",class:{hide:t.response},attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\tОтправить\n\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"contacts__succes",class:{active:t.response}},[t._v("\n\t\t\t\t\t\t\tВаша заявка успешно отправлена!\n\t\t\t\t\t\t")])]),t._v(" "),n("div",{staticClass:"contacts__rights"},[t._v("\n\t\t\t\t\t\tНажимая на кнопку, вы даете полное, информированное\n\t\t\t\t\t\tсогласие и блаблабла политика (гиперссылка)\n\t\t\t\t\t")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contacts__addres"},[e("p",[this._v("Тел: + 7 916 968 08 77")]),this._v(" "),e("p",[this._v("E-mail: lesnye.radosti@gmail.com")])])}],!1,null,"65f24288",null);e.default=component.exports;installComponents(component,{Form:n(251).default})},252:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},253:function(t,e,n){var content=n(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("3e6db3e4",content,!0,{sourceMap:!1})},254:function(t,e,n){"use strict";var o=n(2),r=n(255).trim;o({target:"String",proto:!0,forced:n(256)("trim")},{trim:function(){return r(this)}})},255:function(t,e,n){var o=n(11),r="["+n(252)+"]",c=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},256:function(t,e,n){var o=n(6),r=n(252);t.exports=function(t){return o((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},257:function(t,e,n){"use strict";n(253)},258:function(t,e,n){(e=n(21)(!1)).push([t.i,'.soc-link[data-v-65f24288]{font-size:28px;margin-right:3px}.soc-link[data-v-65f24288]:last-child{margin:0}.contacts[data-v-65f24288]{display:flex;flex-direction:column;justify-content:center;margin-bottom:50px;position:relative;padding:0 20px}.contacts__link[data-v-65f24288]{position:absolute;top:-100px}.contacts__container[data-v-65f24288]{max-width:960px;margin:0 auto}.contacts__header[data-v-65f24288]{font-weight:600;font-size:42px;margin-bottom:65px}.contacts__header[data-v-65f24288],.contacts__info[data-v-65f24288]{display:flex;justify-content:center}.contacts__info[data-v-65f24288]{text-align:justify;flex-direction:column;align-items:flex-start;font-size:24px;font-weight:300;max-width:605px;margin:0 auto 125px;line-height:1.3em}.contacts__p[data-v-65f24288]{margin-bottom:10px}.contacts__row[data-v-65f24288]{display:flex}.contacts__column[data-v-65f24288]{display:flex;flex-direction:column;flex:1 1 50%}.contacts__addres[data-v-65f24288]{font-size:28px;font-weight:300;margin-bottom:25px}.contacts__addres p[data-v-65f24288]{margin-bottom:7px}.contacts__addres p[data-v-65f24288]:last-child{margin:0}.contacts__form[data-v-65f24288]{display:flex;flex-direction:column}.contacts__input[data-v-65f24288]{height:60px;padding:0 15px;border:1px solid #cecece;margin-bottom:24px;border-radius:3px}.contacts__input.error[data-v-65f24288]{border:1px solid red}.contacts__input.error[data-v-65f24288]::-webkit-input-placeholder{color:red}.contacts__input.error[data-v-65f24288]:-moz-placeholder,.contacts__input.error[data-v-65f24288]::-moz-placeholder{color:red}.contacts__input.error[data-v-65f24288]:-ms-input-placeholder{color:red}.contacts__area[data-v-65f24288]{resize:none;border:1px solid #cecece;margin-bottom:24px;font-family:"Roboto","Helvetica Neue",Arial,sans-serif;padding:10px 15px 0}.contacts__commit[data-v-65f24288]{position:relative;display:flex;justify-content:center}.contacts__button[data-v-65f24288]{width:200px;height:60px;font-weight:700;color:#fff;border-radius:30px;background-color:#1f5bff;margin-bottom:24px;transition:all .3s ease 0s;z-index:10}.contacts__button[data-v-65f24288]:hover{background-color:#1742b6}.contacts__button.hide[data-v-65f24288]{opacity:0}.contacts__succes[data-v-65f24288]{font-size:26px;position:absolute;top:25%;opacity:0;transition:all .3s ease 0s}.contacts__succes.active[data-v-65f24288]{opacity:1}@media screen and (max-width:768px){.contacts__header[data-v-65f24288]{font-size:28px;margin-bottom:25px}.contacts__info[data-v-65f24288]{font-size:16px;margin-bottom:45px}.contacts__column[data-v-65f24288]:first-child{flex:0 0 40%}.contacts__addres[data-v-65f24288]{font-size:18px}.contacts__input[data-v-65f24288]{height:45px;margin-bottom:24px}.contacts__succes[data-v-65f24288]{font-size:18px}}@media screen and (max-width:576px){.contacts__row[data-v-65f24288]{flex-direction:column}.contacts__column[data-v-65f24288]:first-child{margin-bottom:25px}.contacts__button[data-v-65f24288]{width:120px;height:35px}.contacts__succes[data-v-65f24288]{font-size:24px}}',""]),t.exports=e},265:function(t,e,n){var content=n(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("5f15f94e",content,!0,{sourceMap:!1})},299:function(t,e,n){"use strict";n(265)},300:function(t,e,n){(e=n(21)(!1)).push([t.i,".link[data-v-202949de]{color:#719c7b;text-decoration:underline}.main[data-v-202949de]{margin:0 auto;padding-top:100px;display:flex;flex-direction:column}.article[data-v-202949de]{margin-top:30px}.bold[data-v-202949de]{font-weight:600}.product[data-v-202949de]{background-color:#efefef;border-radius:3px;width:100%;padding:40px 20px;margin:0 auto 140px;max-width:1250px;display:flex}.product__columns[data-v-202949de]{display:flex;margin-bottom:15px}.product__column[data-v-202949de]{line-height:1.4em;display:flex;flex-direction:column}.product__column[data-v-202949de]:first-child{margin-right:20px}.product__image[data-v-202949de]{width:270px;background-position:50%;margin-bottom:20px;border-radius:3px;background-size:cover;height:350px}.product__price[data-v-202949de]{display:flex;justify-content:center;align-items:center;margin-bottom:8px;border:1px solid #000;border-radius:3px;height:35px;min-width:270px;max-width:100%;font-size:13px;font-weight:600;background-color:#fff;transition:all .3s ease 0s}.product__price[data-v-202949de]:hover{border:1px solid #fff;background-color:#000;color:#fff}.product__text[data-v-202949de]{text-align:justify;line-height:1.2em}.product__text p[data-v-202949de]{margin-bottom:20px}@media screen and (max-width:767px){.product[data-v-202949de]{flex-direction:column}.product__column[data-v-202949de]{align-items:center;margin-right:0!important;margin-bottom:20px}}",""]),t.exports=e},347:function(t,e,n){"use strict";n.r(e);var o={components:{Form:n(251).default},data:function(){return{image:"../images/mushrooms.jpg"}}},r=(n(299),n(23)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("div",{staticClass:"product"},[e("div",{staticClass:"product__column"},[e("div",{staticClass:"product__image",style:{"background-image":"url("+this.image+")"}}),this._v(" "),e("a",{staticClass:"product__price",attrs:{href:"#contacts"}},[this._v("от 1000₽ ₽")])]),this._v(" "),this._m(0)]),this._v(" "),e("Form")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product__text"},[n("p",[n("span",{staticClass:"bold"},[t._v("Подушка со скорлупой кедрового ореха")]),t._v("\n\t\t\t\tобладает ортопедическим эффектом, жесткая, что стимулирует\n\t\t\t\tкровообращение, в скорлупе кедровых орехов содержится\n\t\t\t\tогромное количество полезных веществ, содержащиеся фитонциды\n\t\t\t\tи эфирные масла препятствуют размножению болезнетворных\n\t\t\t\tорганизмов и насекомых, подушка, набитая скорлупой кедровых\n\t\t\t\tорехов, позволяет:\n\t\t\t")]),t._v(" "),n("p",[n("span",{staticClass:"bold"},[t._v("Подушки с кедровой скорлупой - 1000 ₽")])]),t._v(" "),n("p",[n("span",{staticClass:"bold"},[t._v("Подушки успокаивающие - 1000₽")])]),t._v(" "),n("p",[n("ul",[n("li",[n("span",{staticClass:"bold"},[t._v("- нормализовать кровяное давление")])]),t._v(" "),n("li",[n("span",{staticClass:"bold"},[t._v("- привести в порядок нервную систему")])]),t._v(" "),n("li",[n("span",{staticClass:"bold"},[t._v("- снизить утомляемость")])]),t._v(" "),n("li",[n("span",{staticClass:"bold"},[t._v("- повысить работоспособность")])])])]),t._v(" "),n("p",[t._v('\n\t\t\t\tСон на кедровой подушке будет спокойным и крепким. Он\n\t\t\t\tпозволит гораздо быстрее восстановить силы. "Кедровый сон"\n\t\t\t\tпоможет улучшить самочувствие\n\t\t\t')]),t._v(" "),n("p",[n("span",{staticClass:"bold"},[t._v("Подушка с пленкой ядер кедровых орехов.")]),t._v(" Подушка не вызывает\n\t\t\t\tаллергии, не накапливает статическое электричество, имеет\n\t\t\t\tприятный запах. Подушка обладает и отличными ортопедическими\n\t\t\t\tсвойствами. Упругие свойства наполнителя помогают голове,\n\t\t\t\tшее, позвоночнику принять наиболее подходящее для сна\n\t\t\t\tположение.\n\t\t\t")]),t._v(" "),n("p",[t._v("\n\t\t\t\tПозволяет хорошо выспаться и даже за короткое время восстановить силы и работоспособность.\n\t\t\t")]),t._v(" "),n("p",[t._v("\n\t\t\t\tТонкий кедровый аромат делает сон  глубоким и спокойным. А фитонциды кедра дарят крепкое здоровье. \n\t\t\t")]),t._v(" "),n("p",[n("span",{staticClass:"bold"},[t._v("Доставка по Москве 150 - 300 ₽")])]),t._v(" "),n("p",[t._v("\n\t\t\t\tДоставка по регионам России- почтой, все интересующие\n\t\t\t\tвопросы по телефону или отправтье заявку с вопросом\n\t\t\t")]),t._v(" "),n("p",[n("span",{staticClass:"bold"},[t._v("По желанию можем составить индивидуальный, эффективный\n\t\t\t\t\tграфик правильного питания")]),t._v("\n\t\t\t\tи приема лекарственных трав в борьбе с инфекционными\n\t\t\t\tзаболеваниями (противовирусными, противобактериальными,\n\t\t\t\tпротивогрибковыми), для поднятия собственных, защитных сил\n\t\t\t\tорганизма-консультация платная, а так же научить правильному\n\t\t\t\tвегетарианскому питанию, не навредив здоровью\n\t\t\t")])])}],!1,null,"202949de",null);e.default=component.exports;installComponents(component,{Form:n(251).default})}}]);