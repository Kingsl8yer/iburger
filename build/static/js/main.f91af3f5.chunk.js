(this.webpackJsonpiburguer=this.webpackJsonpiburguer||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return i})),n.d(t,"p",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"k",(function(){return o})),n.d(t,"l",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"m",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return b})),n.d(t,"g",(function(){return h})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"o",(function(){return O}));var r="ADD_INGREDIENT",i="REMOVE_INGREDIENT",c="SET_INGREDIENTS",a="FETCH_INGREDIENTS_FAILED",o="PURCHASE_BURGER_START",s="PURCHASE_BURGER_SUCCESS",u="PURCHASE_BURGER_FAIL",d="PURCHASE_INIT",l="FETCH_ORDERS_START",b="FETCH_ORDERS_SUCCESS",h="FETCH_ORDERS_FAIL",j="AUTH_START",p="AUTH_SUCCESS",f="AUTH_FAIL",g="AUTH_LOGOUT",O="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(10),i=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},c=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"i",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return g})),n.d(t,"f",(function(){return p})),n.d(t,"j",(function(){return O})),n.d(t,"c",(function(){return m}));var r=n(2),i=n(20),c=function(e){return{type:r.a,ingredientName:e}},a=function(e){return{type:r.n,ingredientName:e}},o=function(){return function(e){i.a.get("https://iburger-70f9c.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},s=n(10),u=function(e,t){return function(n){n({type:r.k}),i.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},d=function(){return{type:r.m}},l=function(e,t){return function(n){n({type:r.h});var c="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';i.a.get("/orders.json"+c).then((function(e){var t,i=[];for(var c in e.data)i.push(Object(s.a)(Object(s.a)({},e.data[c]),{},{id:c}));n((t=i,{type:r.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.g,error:t}))}))}},b=n(31),h=n.n(b),j=function(e,t){return{type:r.e,idToken:e,userId:t}},p=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},f=function(e){return function(t){setTimeout((function(){t(p())}),1e3*e)}},g=function(e,t,n){return function(i){i({type:r.d});var c={email:e,password:t,returnSecureToken:!0},a="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDsf2YpNZSnsi9uqIQFjFb6Q5_kC9aKj5Y";n||(a="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDsf2YpNZSnsi9uqIQFjFb6Q5_kC9aKj5Y"),h.a.post(a,c).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),i(j(e.data.idToken,e.data.localId)),i(f(e.data.expiresIn))})).catch((function(e){var t;i((t=e.response.data.error,{type:r.b,error:t}))}))}},O=function(e){return{type:r.o,path:e}},m=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date);else{var r=localStorage.getItem("userId");e(j(t,r)),e(f((n.getTime()-(new Date).getTime())/1e3))}}else e(p())}}},function(e,t,n){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__1mtin",BreadTop:"BurgerIngredients_BreadTop__2yXzW",Seeds1:"BurgerIngredients_Seeds1__2a-Ng",Seeds2:"BurgerIngredients_Seeds2__1-Ibu",Meat:"BurgerIngredients_Meat__Hic3r",Cheese:"BurgerIngredients_Cheese__2bezx",Salad:"BurgerIngredients_Salad__3WZ8o",Bacon:"BurgerIngredients_Bacon__Iz8Sx"}},function(e,t,n){"use strict";var r=n(31),i=n.n(r).a.create({baseURL:"https://iburger-70f9c.firebaseio.com/"});t.a=i},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2TFkQ",Open:"SideDrawer_Open__XUltM",Close:"SideDrawer_Close__1xxF-",Logo:"SideDrawer_Logo__ALGIu"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__3ecd4",Label:"BuildControl_Label__2H-Fv",Less:"BuildControl_Less__3iXUo",More:"BuildControl_More__1P9BR"}},,function(e,t,n){"use strict";var r=n(0),i=(n(1),n(56)),c=n.n(i);t.a=function(e){return e.show?Object(r.jsx)("div",{className:c.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(6),i=n(7),c=n(9),a=n(8),o=n(0),s=n(1),u=n(62),d=n.n(u),l=n(13),b=n(29),h=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(o.jsxs)(l.a,{children:[Object(o.jsx)(b.a,{show:this.props.show,clicked:this.props.modalClosed}),Object(o.jsx)("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(s.Component);t.a=h},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__31w2o",Logo:"Toolbar_Logo__2OvBp",DesktopOnly:"Toolbar_DesktopOnly__1f4x4"}},function(e,t,n){"use strict";var r=n(0),i=(n(1),n(41)),c=n.n(i);t.a=function(e){return Object(r.jsx)("button",{onClick:e.clicked,disabled:e.disabled,className:[c.a.Button,c.a[e.btnType]].join(" "),children:e.children})}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__bOaOy",active:"NavigationItem_active__pr7Ne"}},,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1f3EQ",OrderButton:"BuildControls_OrderButton__18GXa",enable:"BuildControls_enable__2LCYd"}},function(e,t,n){e.exports={Button:"Button_Button__3Nu1P",Success:"Button_Success__376w8",Danger:"Button_Danger__3_HAW"}},function(e,t,n){"use strict";var r=n(0),i=(n(1),n(63)),c=n.n(i);t.a=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:c.a.Loader,children:"Loading..."})})}},function(e,t,n){"use strict";var r=n(10),i=n(6),c=n(7),a=n(9),o=n(8),s=n(0),u=n(1),d=n(30),l=n(13);t.a=function(e,t){return function(n){Object(a.a)(b,n);var u=Object(o.a)(b);function b(){var e;Object(i.a)(this,b);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=u.call.apply(u,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(c.a)(b,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(s.jsxs)(l.a,{children:[Object(s.jsx)(d.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(s.jsx)(e,Object(r.a)({},this.props))]})}}]),b}(u.Component)}},,,,,,,,,,function(e,t,n){"use strict";var r=n(65),i=n(0),c=n(1),a=n(61),o=n.n(a),s=n(6),u=n(7),d=n(9),l=n(8),b=n(19),h=n.n(b),j=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(i.jsx)("div",{className:h.a.BreadBottom});break;case"bread-top":e=Object(i.jsxs)("div",{className:h.a.BreadTop,children:[Object(i.jsx)("div",{className:h.a.Seeds1}),Object(i.jsx)("div",{className:h.a.Seeds2})]});break;case"meat":e=Object(i.jsx)("div",{className:h.a.Meat});break;case"cheese":e=Object(i.jsx)("div",{className:h.a.Cheese});break;case"bacon":e=Object(i.jsx)("div",{className:h.a.Bacon});break;case"salad":e=Object(i.jsx)("div",{className:h.a.Salad});break;default:e=null}return e}}]),n}(c.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return Object(i.jsx)(j,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(i.jsx)("p",{children:"Please start adding ingredients!"})),Object(i.jsxs)("div",{className:o.a.Burger,children:[Object(i.jsx)(j,{type:"bread-top"}),t,Object(i.jsx)(j,{type:"bread-bottom"})]})}},function(e,t,n){e.exports={Logo:"Logo_Logo__Eem7_"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1rbLu"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2itfo"}},function(e,t,n){e.exports={Content:"Layout_Content__2Tgwy"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__15zGQ"}},,,function(e,t,n){e.exports={Burger:"Burger_Burger__3k7iV"}},function(e,t,n){e.exports={Modal:"Modal_Modal__22aR1"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__21lc9",load1:"Spinner_load1__2NiCP"}},,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),c=n(28),a=n.n(c),o=(n(71),n(6)),s=n(7),u=n(9),d=n(8),l=n.p+"static/media/burger-logo.ec69c7f6.png",b=n(54),h=n.n(b),j=function(e){return Object(r.jsx)("div",{className:h.a.Logo,style:{height:e.height},children:Object(r.jsx)("img",{src:l,alt:"MyBurger"})})},p=n(55),f=n.n(p),g=n(36),O=n.n(g),m=n(22),_=function(e){return Object(r.jsx)("li",{className:O.a.NavigationItem,children:Object(r.jsx)(m.b,{to:e.link,exact:e.exact,activeClassName:O.a.active,children:e.children})})},x=function(e){return Object(r.jsxs)("ul",{className:f.a.NavigationItems,children:[Object(r.jsx)(_,{link:"/",exact:!0,children:"Burger Builder"}),e.isAuthenticated?Object(r.jsx)(_,{link:"/orders",children:"Orders"}):null,e.isAuthenticated?Object(r.jsx)(_,{link:"/logout",children:"Logout"}):Object(r.jsx)(_,{link:"/auth",children:"Authenticate"})]})},v=n(24),y=n.n(v),k=n(29),C=n(13),S=function(e){var t=[y.a.SideDrawer,y.a.Close];return e.open&&(t=[y.a.SideDrawer,y.a.Open]),Object(r.jsxs)(C.a,{children:[Object(r.jsx)(k.a,{show:e.open,clicked:e.closed}),Object(r.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(r.jsx)("div",{className:y.a.Logo,children:Object(r.jsx)(j,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(x,{isAuthenticated:e.isAuth})})]})]})},I=n(57),N=n.n(I),B=n(32),T=n.n(B),w=n(58),D=n.n(w),A=function(e){return Object(r.jsxs)("div",{onClick:e.clicked,className:D.a.DrawerToggle,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},L=function(e){return Object(r.jsxs)("header",{className:T.a.Toolbar,children:[Object(r.jsx)(A,{clicked:e.drawerToggleClicked}),Object(r.jsx)("div",{className:T.a.Logo,children:Object(r.jsx)(j,{})}),Object(r.jsx)("nav",{className:T.a.DesktopOnly,children:Object(r.jsx)(x,{isAuthenticated:e.isAuth})})]})},E=n(17),R=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(C.a,{children:[Object(r.jsx)(L,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),Object(r.jsx)(S,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),Object(r.jsx)("main",{className:N.a.Content,children:this.props.children})]})}}]),n}(i.Component),P=Object(E.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(R),H=n(10),U=n(53),F=n(40),M=n.n(F),z=n(27),G=n.n(z),q=function(e){return Object(r.jsxs)("div",{className:G.a.BuildControl,children:[Object(r.jsx)("div",{className:G.a.Label,children:e.ingredLabel}),Object(r.jsx)("button",{className:G.a.Less,onClick:e.remove,disabled:e.disabled,children:"Less"}),Object(r.jsx)("button",{className:G.a.More,onClick:e.add,children:"More"})]})},W=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Y=function(e){return Object(r.jsxs)("div",{className:M.a.BuildControls,children:[Object(r.jsxs)("p",{children:["Current Price: ",Object(r.jsx)("strong",{children:e.price.toFixed(2)})," $"]}),W.map((function(t){return Object(r.jsx)(q,{ingredLabel:t.label,add:function(){return e.ingredientAdd(t.type)},remove:function(){return e.ingredientRemove(t.type)},disabled:e.ingredientDisabled[t.type]},t.label)})),Object(r.jsx)("button",{className:M.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"})]})},Q=n(30),X=n(33),$=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsxs)("span",{style:{textTransform:"capitalize"},children:[t,":"]})," ",e.props.ingredients[t]]},t)}));return Object(r.jsxs)(C.a,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"A delicious burger with the followings ingredients: "}),Object(r.jsx)("ul",{children:t}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total Price : ",this.props.summaryPrice.toFixed(2)]})}),Object(r.jsx)("p",{children:"Continue to checkout?"}),Object(r.jsx)(X.a,{btnType:"Danger",clicked:this.props.purchaseCanceled,children:"CANCEL"}),Object(r.jsx)(X.a,{btnType:"Success",clicked:this.props.purchaseContinued,children:"CONTINUE"})]})}}]),n}(i.Component),Z=n(20),J=n(42),K=n(43),V=n(18),ee=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={purchasing:!1},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(s.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(H.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,i=this.props.error?Object(r.jsx)("p",{children:"Ingredients cant be loaded"}):Object(r.jsx)(J.a,{});return this.props.ings&&(i=Object(r.jsxs)(C.a,{children:[Object(r.jsx)(U.a,{ingredients:this.props.ings}),Object(r.jsx)(Y,{ingredientAdd:this.props.onIngredientAdded,ingredientRemove:this.props.onIngredientRemoved,ingredientDisabled:e,purchasable:this.updatePurchaseState(this.props.ings),price:this.props.price,ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated})]}),n=Object(r.jsx)($,{ingredients:this.props.ings,purchaseCanceled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,summaryPrice:this.props.price})),Object(r.jsxs)(C.a,{children:[Object(r.jsx)(Q.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:n}),i]})}}]),n}(i.Component),te=Object(E.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(V.a(t))},onIngredientRemoved:function(t){return e(V.i(t))},onInitIngredients:function(){return e(V.e())},onInitPurchase:function(){return e(V.h())},onSetRedirectPath:function(t){return e(V.j(t))}}}))(Object(K.a)(ee,Z.a)),ne=n(5),re=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(r.jsx)(ne.a,{to:"/"})}}]),n}(i.Component),ie=Object(E.b)(null,(function(e){return{onLogout:function(){return e(V.f())}}}))(re),ce=function(e){return function(t){Object(u.a)(i,t);var n=Object(d.a)(i);function i(){var e;Object(o.a)(this,i);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={component:null},e}return Object(s.a)(i,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(r.jsx)(e,Object(H.a)({},this.props)):null}}]),i}(i.Component)},ae=ce((function(){return n.e(3).then(n.bind(null,107))})),oe=ce((function(){return n.e(5).then(n.bind(null,108))})),se=ce((function(){return n.e(4).then(n.bind(null,105))})),ue=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=Object(r.jsxs)(ne.d,{children:[Object(r.jsx)(ne.b,{path:"/auth",exact:!0,component:se}),Object(r.jsx)(ne.b,{path:"/",exact:!0,component:te}),Object(r.jsx)(ne.a,{to:"/"})]});return this.props.isAuthenticated&&(e=Object(r.jsxs)(ne.d,{children:[Object(r.jsx)(ne.b,{path:"/checkout",component:ae}),Object(r.jsx)(ne.b,{path:"/orders",component:oe}),Object(r.jsx)(ne.b,{path:"/logout",exact:!0,component:ie}),Object(r.jsx)(ne.b,{path:"/auth",exact:!0,component:se}),Object(r.jsx)(ne.b,{path:"/",exact:!0,component:te}),Object(r.jsx)(ne.a,{to:"/"})]})),Object(r.jsx)("div",{children:Object(r.jsx)(P,{children:e})})}}]),n}(i.Component),de=Object(ne.g)(Object(E.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(V.c())}}}))(ue)),le=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,106)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))},be=n(21),he=n(64),je=n(25),pe=n(2),fe=n(4),ge={ingredients:null,totalPrice:4,error:!1,building:!1},Oe={salad:.5,cheese:.4,meat:1.3,bacon:.7},me=function(e,t){var n=Object(je.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(fe.b)(e.ingredients,n),totalPrice:e.totalPrice+Oe[t.ingredientName],building:!0};return Object(fe.b)(e,r)},_e=function(e,t){var n=Object(je.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(fe.b)(e.ingredients,n),totalPrice:e.totalPrice+Oe[t.ingredientName]};return Object(fe.b)(e,r)},xe=function(e,t){return Object(fe.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},ve=function(e,t){return Object(fe.b)(e,{error:!0})},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.a:return me(e,t);case pe.n:return _e(e,t);case pe.p:return xe(e,t);case pe.f:return ve(e);default:return e}},ke={order:[],loading:!1,purchased:!1},Ce=function(e,t){return Object(fe.b)(e,{purchased:!1})},Se=function(e,t){return Object(fe.b)(e,{loading:!0})},Ie=function(e,t){var n=Object(fe.b)(t.orderData,{id:t.orderId});return Object(fe.b)(e,{loading:!1,purchased:!0,order:e.order.concat(n)})},Ne=function(e,t){return Object(fe.b)(e,{loading:!1})},Be=function(e,t){return Object(fe.b)(e,{loading:!0})},Te=function(e,t){return Object(fe.b)(e,{order:t.orders,loading:!1})},we=function(e,t){return Object(fe.b)(e,{loading:!1})},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.m:return Ce(e);case pe.k:return Se(e);case pe.l:return Ie(e,t);case pe.j:return Ne(e);case pe.h:return Be(e);case pe.i:return Te(e,t);case pe.g:return we(e);default:return Object(H.a)({},e)}},Ae={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Le=function(e,t){return Object(fe.b)(e,{error:null,loading:!0})},Ee=function(e,t){return Object(fe.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Re=function(e,t){return Object(fe.b)(e,{error:t.error,loading:!1})},Pe=function(e,t){return Object(fe.b)(e,{token:null,userId:null})},He=function(e,t){return Object(fe.b)(e,{authRedirectPath:t.path})},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.d:return Le(e);case pe.e:return Ee(e,t);case pe.b:return Re(e,t);case pe.c:return Pe(e);case pe.o:return He(e,t);default:return e}},Fe=be.d,Me=Object(be.c)({burgerBuilder:ye,order:De,auth:Ue}),ze=Object(be.e)(Me,Fe(Object(be.a)(he.a))),Ge=Object(r.jsx)(E.a,{store:ze,children:Object(r.jsx)(m.a,{children:Object(r.jsx)(de,{})})});a.a.render(Ge,document.getElementById("root")),le()}],[[98,1,2]]]);
//# sourceMappingURL=main.f91af3f5.chunk.js.map