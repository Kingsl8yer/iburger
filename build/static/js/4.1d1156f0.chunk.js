(this.webpackJsonpiburguer=this.webpackJsonpiburguer||[]).push([[4],{100:function(e,t,n){e.exports={Input:"Input_Input__1priY",Label:"Input_Label__-BPFS",InputElement:"Input_InputElement__bzdjc",Invalid:"Input_Invalid__3Eyof"}},104:function(e,t,n){e.exports={Auth:"Auth_Auth__3E2Y-"}},105:function(e,t,n){"use strict";n.r(t);var a=n(25),i=n(6),u=n(7),r=n(9),l=n(8),s=n(0),c=n(1),o=n(99),d=n(33),h=n(104),p=n.n(h),b=n(18),j=n(17),v=n(42),g=n(5),f=n(4),m=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var u=arguments.length,r=new Array(u),l=0;l<u;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},e.inputChangedHandler=function(t,n){var i=Object(f.b)(e.state.controls,Object(a.a)({},n,Object(f.b)(e.state.controls[n],{value:t.target.value,valid:Object(f.a)(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:i})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetRedirectPath("/")}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return Object(s.jsx)(o.a,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)}));this.props.loading&&(a=Object(s.jsx)(v.a,{}));var i=null;this.props.error&&(i=Object(s.jsx)("p",{children:this.props.error.message}));var u=null;return this.props.isAuthenticated&&(u=Object(s.jsx)(g.a,{to:this.props.authRedirectPath})),Object(s.jsxs)("div",{className:p.a.Auth,children:[u,i,Object(s.jsxs)("form",{onSubmit:this.submitHandler,children:[a,Object(s.jsx)(d.a,{btnType:"Success",children:"SUBMIT"})]}),Object(s.jsxs)(d.a,{clicked:this.switchAuthModeHandler,btnType:"Danger",children:["SWITCH TO ",this.state.isSignup?"SIGN IN":"SIGN UP"]})]})}}]),n}(c.Component);t.default=Object(j.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(b.b(t,n,a))},onSetRedirectPath:function(){return e(b.j("/"))}}}))(m)},99:function(e,t,n){"use strict";var a=n(10),i=n(0),u=(n(1),n(100)),r=n.n(u);t.a=function(e){var t=null,n=[r.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(r.a.Invalid),e.elementType){case"input":t=Object(i.jsx)("input",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(i.jsx)("textarea",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(i.jsx)("select",{className:n.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(i.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(i.jsx)("input",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(i.jsxs)("div",{className:r.a.Input,children:[Object(i.jsx)("label",{className:r.a.Label,children:e.label}),t]})}}}]);
//# sourceMappingURL=4.1d1156f0.chunk.js.map