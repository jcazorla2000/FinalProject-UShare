(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{266:function(e,t){},362:function(e,t,a){e.exports=a(533)},367:function(e,t,a){},368:function(e,t,a){},439:function(e,t){},531:function(e,t,a){},533:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),i=(a(367),a(56)),c=a(123),s=a(147),u=(a(278),a(150)),m=(a(368),a(554)),d=a(24);function p(){var e=Object(s.a)(["\n    width: 100%;\n    ","\n    background-color: black;\n    color: white!important;\n    height: 7vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    h2 {\n        color: white;\n    }\n"]);return p=function(){return e},e}var h=m.a.SubMenu,g=u.a.nav(p(),"");function f(){return r.a.createElement(g,null,r.a.createElement("img",{style:{width:"70px",marginRight:"-6vw",marginTop:"1.3vh"},alt:"logoimage",src:"logo_transparent.png"}),r.a.createElement(i.b,{style:{marginTop:"2vh",marginLeft:"4.5vw",color:"white"},to:"/rideChoice"},r.a.createElement("h2",null,"UShare")),r.a.createElement(m.a,{style:{backgroundColor:"black"},mode:"horizontal"},r.a.createElement(h,{title:r.a.createElement("span",{className:"submenu-title-wrapper"},r.a.createElement(d.a,{style:{backgroundColor:"none",fontSize:"26px",color:"white",border:"0 solid black",marginTop:"2vh"},type:"menu"}))},r.a.createElement(m.a.ItemGroup,{style:{marginTop:"-20px"},title:""},localStorage.user?r.a.createElement(m.a.ItemGroup,{title:""},r.a.createElement(m.a.Item,{key:"Perfil"},r.a.createElement(i.b,{to:"/profile",style:{marginRight:"4vw"}},r.a.createElement("p",null,r.a.createElement(d.a,{type:"user"}),"Perfil"))),r.a.createElement(m.a.Item,{key:"MisViajes"},r.a.createElement(i.b,{to:"/myRides",style:{marginRight:"4vw"}},r.a.createElement("p",null,r.a.createElement(d.a,{type:"car"}),"Mis viajes"))),r.a.createElement(m.a.Item,{key:"BuscarViajes"},r.a.createElement(i.b,{to:"/feed",style:{marginRight:"4vw"}},r.a.createElement("p",null,r.a.createElement(d.a,{type:"search"}),"Buscar viaje")))):r.a.createElement(m.a.ItemGroup,{title:""},r.a.createElement(m.a.Item,{key:"Iniciar sesi\xf3n"},r.a.createElement(i.b,{to:"/login",style:{marginRight:"4vw"}},r.a.createElement("p",null,"Iniciar sesi\xf3n"))),r.a.createElement(m.a.Item,{key:"Registrarme"},r.a.createElement(i.b,{to:"/signup",style:{marginRight:"4vw"}},r.a.createElement("p",null,"Registrarme")))),localStorage.user&&"driver"===JSON.parse(localStorage.user).role?r.a.createElement(m.a.Item,{key:"Crear"},r.a.createElement(i.b,{to:"/create",style:{marginRight:"4vw"}},r.a.createElement("p",null,r.a.createElement(d.a,{type:"plus-circle"}),"Nuevo viaje"))):null))))}var E=a(542).a.Footer;function y(){return r.a.createElement("div",null,r.a.createElement(E,{style:{textAlign:"center",backgroundColor:"#265652",color:"white"}},"UShare \xa92019 Creado por Jos\xe9 Manuel Cazorla G\xf3mez"))}function v(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{style:{height:"120vh",backgroundColor:"#79a7a3",display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("img",{style:{border:"0 solid white",borderRadius:"14px",width:"300px",margin:"1.5vh 0"},src:"/carpool.png",alt:"CarpoolImage"}),r.a.createElement("div",{style:{width:"80%",textAlign:"justify"}},r.a.createElement("h1",null,"\xbfViajas solo?"),r.a.createElement("h2",null,"Comparte tu auto y mejora tus trayectos diarios")),r.a.createElement("img",{style:{border:"0 solid white",borderRadius:"14px",width:"300px",margin:"1.5vh 0"},src:"/carpool2.jpg",alt:"CarpoolImage"}),r.a.createElement("div",{style:{width:"80%",textAlign:"justify"}},r.a.createElement("h2",null,"\xbfPor qu\xe9 compartir auto?"),r.a.createElement("h3",null,"Es una forma r\xe1pida, divertida y asequible de desplazarse. Ushare te permite elegir si quieres conducir o unirte a un viaje con otras personas que realizan la misma ruta que t\xfa.")),r.a.createElement("hr",null),r.a.createElement("div",{style:{width:"80%",textAlign:"justify"}},r.a.createElement("h2",null,"Conoce a personas de tu misma universidad y comparte el costo del combustible"))),r.a.createElement(y,null))}var b=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not found"))},S=a(555),C=a(38),x=a.n(C),w=a(36),k=a(317),I=a(318),j=a(333),D=a(319),R=a(335),O=a(82),F=a.n(O),T=a(320),N=a.n(T).a.create({withCredentials:!0,baseURL:"https://still-retreat-53219.herokuapp.com/"}),M={test:function(){return x.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.awrap(N.get("/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},signup:function(e){return x.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.awrap(N.post("/signup",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},login:function(e){return x.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.awrap(N.post("/login",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},logout:function(){return x.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.awrap(N.get("/logout"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},create:function(e){return x.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.awrap(N.post("/create",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},feed:function(e){return x.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.awrap(N.post("/feed",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},endRide:function(e){return x.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.awrap(N.post("/myRides",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}},U=(a(301),a(302),a(549)),L=Object(n.createContext)(),P=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(j.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(l)))).state={loggedUser:!1,id:"",formSignup:{fullName:"",email:"",telephoneNumber:"",password:"",university:"",departureTime:"",returnTime:"",role:"",carModel:"",carColor:""},file:{},signupFinished:0,formSignupStep:0,formCreateStep:0,formLogin:{email:"",password:""},user:{},formCreate:{rideDirection:"",universityDirection:"",departureTime:"",numberPlaces:"",driver:"",coords:{lat:"",long:"",address:""}},foundRides:[],viewport:{latitude:37.7577,longitude:-122.4376,zoom:8},searchResultLayer:null,userCoordinates:[],maxDistance:0,rideId:"",rideUserId:""},a.mapRef=r.a.createRef(),a.handleViewportChange=function(e){a.setState({viewport:Object(w.a)({},a.state.viewport,{},e)})},a.handleGeocoderViewportChange=function(e){return a.handleViewportChange(Object(w.a)({},e,{},{transitionDuration:1e3}))},a.handleOnResult=function(e){a.setState(Object(w.a)({},a.state,{formCreate:Object(w.a)({},a.state.formCreate,{coords:{lat:e.result.center[0],long:e.result.center[1]},placeName:e.result.place_name})})),a.setState({searchResultLayer:new U.a({id:"search-result",data:e.result.geometry,getFillColor:[255,0,0,128],getRadius:1e3,pointRadiusMinPixels:10,pointRadiusMaxPixels:10})})},a.handleChangeRole=function(e){a.setState(Object(w.a)({},a.state,{formSignup:Object(w.a)({},a.state.formSignup,{role:e})}))},a.handleChangeUniversity=function(e){a.setState(Object(w.a)({},a.state,{formSignup:Object(w.a)({},a.state.formSignup,{university:e})}))},a.handleChangeUniversityDirection=function(e){a.setState(Object(w.a)({},a.state,{formCreate:Object(w.a)({},a.state.formCreate,{universityDirection:e})}))},a.handleChangeRideDirection=function(e){a.setState(Object(w.a)({},a.state,{formCreate:Object(w.a)({},a.state.formCreate,{rideDirection:e})}))},a.handleChangeNumberPlaces=function(e){a.setState(Object(w.a)({},a.state,{formCreate:Object(w.a)({},a.state.formCreate,{numberPlaces:e})}))},a.handleChangeDepartureCreate=function(e,t){a.setState(Object(w.a)({},a.state,{formCreate:Object(w.a)({},a.state.formCreate,{departureTime:t})}))},a.handleChangeReturn=function(e,t){a.setState(Object(w.a)({},a.state,{formSignup:Object(w.a)({},a.state.formSignup,{returnTime:t})}))},a.handleChangeDeparture=function(e,t){a.setState(Object(w.a)({},a.state,{formSignup:Object(w.a)({},a.state.formSignup,{departureTime:t})}))},a.componentDidUpdate=function(){navigator.geolocation.getCurrentPosition((function(e){var t=[e.coords.longitude,e.coords.latitude];a.setState({userCoordinates:t})})),navigator.geolocation.getCurrentPosition((function(e){var t=[e.coords.longitude,e.coords.latitude];a.setState({userCoordinates:t})}),(function(){return null}),{timeout:500}),localStorage.user&&!a.state.id&&a.setState({id:JSON.parse(localStorage.getItem("user"))._id})},a.findRides=function(){var e={maxDistance:a.state.maxDistance,userCoordinates:a.state.userCoordinates};M.feed(e).then((function(e){var t=e.data.ride;a.setState(Object(w.a)({},a.state,{foundRides:t}))})).catch((function(e){return console.log(e)}))},a.handleChangeMaxDistance=function(e){a.setState(Object(w.a)({},a.state,{maxDistance:e}))},a.handleSignup=function(e){var t,n,r;return x.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:for(n in e.preventDefault(),t=new FormData,a.state.formSignup)t.append(n,a.state.formSignup[n]);return t.append("photo",a.state.file),l.next=6,x.a.awrap(M.signup(t));case 6:r=l.sent,r.data,F.a.fire("Cuenta creada","Inicie sesi\xf3n por favor","success"),a.setState(Object(w.a)({},a.state,{formSignupStep:0}));case 10:case"end":return l.stop()}}))},a.handleLogin=function(e,t){e.preventDefault(),M.login(a.state.formLogin).then((function(e){var n=e.data;a.setState({loggedUser:!0,user:n.user});var r=JSON.stringify(n.user);localStorage.setItem("user",r),t(),F.a.fire("Bienvenido ".concat(n.user.fullName," "),"","success")})).catch((function(e){F.a.fire("Usuario o contrase\xf1a erroneos"),console.log(e)}))},a.handleLogout=function(e){return x.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),window.localStorage.clear(),a.setState({loggedUser:!1,user:{}});case 3:case"end":return t.stop()}}))},a.nextStep1=function(e){e.preventDefault();var t=a.state.formSignup,n=t.fullName,r=t.password;""!==n&&""!==r?a.setState({formSignupStep:++a.state.formSignupStep}):F.a.fire("Campos sin rellenar")},a.nextStep2=function(e){e.preventDefault();var t=a.state.formSignup,n=t.email,r=t.telephoneNumber,l=t.role,o=t.university;""!==n&&""!==r&&""!==l&&""!==o?a.setState({formSignupStep:++a.state.formSignupStep}):F.a.fire("Campos sin rellenar")},a.nextCreateStep=function(){a.setState(Object(w.a)({},a.state,{formCreateStep:++a.state.formCreateStep}))},a.handleInput=function(e,t){var n=a.state[t];n[e.target.name]=e.target.value,a.setState({obj:n})},a.handleSignupSubmit=function(e,t){e.preventDefault();var n=a.state.formSignup,r=n.role,l=n.carColor,o=n.carModel;"driver"===r&&""!==l&&""!==o?(a.handleSignup(e),a.setState({signupFinished:++a.state.signupFinished}),t()):"passenger"===r?(a.handleSignup(e),a.setState({signupFinished:++a.state.signupFinished}),t()):F.a.fire("Campos sin rellenar")},a.handleCreate=function(e){var t,n;return x.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.persist(),F.a.fire("Viaje creado","","success"),r.next=4,x.a.awrap(M.create(a.state.formCreate,JSON.parse(localStorage.user)));case 4:t=r.sent,n=t.data.usr,n=JSON.stringify(n),localStorage.setItem("user",n),a.setState(Object(w.a)({},a.state,{formCreateStep:0}));case 9:case"end":return r.stop()}}))},a.handleCreateSubmit=function(e,t){e.preventDefault();var n=a.state.formCreate,r=n.coords,l=n.departureTime,o=n.numberPlaces,i=n.universityDirection,c=n.rideDirection,s=r.lat,u=r.long;JSON.parse(localStorage.user)._id;a.setState(Object(w.a)({},a.state,{formCreate:Object(w.a)({},a.state.formCreate,{driver:a.state.id})})),""!==r&&""!==l&&""!==o&&""!==i&&""!==c&&""!==s&&""!==u?(setTimeout((function(){return a.handleCreate(e)}),200),t()):F.a.fire("Campos sin rellenar")},a.showState=function(){console.log(a.state.formCreate)},a.endRide=function(e,t){var a,n,r,l;return x.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e.preventDefault(),a=JSON.parse(localStorage.user)._id,n={elementId:t,userId:a},F.a.fire("Viaje terminado","","success"),o.next=6,x.a.awrap(M.endRide(n));case 6:r=o.sent,l=r.data.usr,l=JSON.stringify(l),localStorage.setItem("user",l);case 10:case"end":return o.stop()}}))},a.selectPlace=function(e,t,a){var n,r,l;return x.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e.preventDefault(),n={elementId:t,userId:a},F.a.fire("Ahora formas parte de este viaje ","","success"),o.next=5,x.a.awrap(M.feed(n));case 5:r=o.sent,l=r.data.user,l=JSON.stringify(l),localStorage.setItem("user",l);case 9:case"end":return o.stop()}}))},a.handleFile=function(e){return x.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.awrap(a.setState(Object(w.a)({},a.state,{file:e.target.files[0]})));case 2:case"end":return t.stop()}}))},a}return Object(R.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({userCoordinates:[]}),navigator.geolocation.getCurrentPosition((function(t){var a=[t.coords.longitude,t.coords.latitude];e.setState({userCoordinates:a})})),document.cookie&&M.getUser().then((function(t){var a=t.data;e.setState({loggedUser:!0,user:a.user}),F.a.fire("Bienvenido ".concat(a.user.fullName," "),"","success")})).catch((function(e){return console.log(e)})),localStorage.user&&this.setState({id:JSON.parse(localStorage.getItem("user"))._id})}},{key:"render",value:function(){return r.a.createElement(L.Provider,{value:{loggedUser:this.state.loggedUser,formSignup:this.state.formSignup,formLogin:this.state.formLogin,handleInput:this.handleInput,handleSignup:this.handleSignup,handleLogin:this.handleLogin,handleLogout:this.handleLogout,formSignupStep:this.state.formSignupStep,nextStep1:this.nextStep1,nextStep2:this.nextStep2,showState:this.showState,handleChangeRole:this.handleChangeRole,handleChangeUniversity:this.handleChangeUniversity,handleChangeUniversityDirection:this.handleChangeUniversityDirection,user:this.state.user,handleChangeDeparture:this.handleChangeDeparture,handleChangeReturn:this.handleChangeReturn,nextCreateStep:this.nextCreateStep,handleChangeRideDirection:this.handleChangeRideDirection,formCreateStep:this.state.formCreateStep,rideDirection:this.state.formCreate.rideDirection,handleSignupSubmit:this.handleSignupSubmit,signupFinished:this.state.signupFinished,viewport:this.state.viewport,searchResultLayer:this.state.searchResultLayer,mapRef:this.mapRef,handleViewportChange:this.handleViewportChange,handleOnResult:this.handleOnResult,handleGeocoderViewportChange:this.handleGeocoderViewportChange,handleChangeNumberPlaces:this.handleChangeNumberPlaces,handleChangeDepartureCreate:this.handleChangeDepartureCreate,handleCreateSubmit:this.handleCreateSubmit,findRides:this.findRides,foundRides:this.state.foundRides,endRide:this.endRide,handleChangeMaxDistance:this.handleChangeMaxDistance,selectPlace:this.selectPlace,handleFile:this.handleFile}},this.props.children)}}]),t}(n.Component),J=a(551),V=a(550),z=a(332),A=a(552),B=a(270),_=S.a.Step,q=J.a.Option,G=r.a.createElement(J.a,{placeholder:"+55",style:{width:70}},r.a.createElement(q,{value:"34"},"+34"),r.a.createElement(q,{value:"55"},"+55"));function H(e){return r.a.createElement(L.Consumer,null,(function(t){return r.a.createElement(r.a.Fragment,null,localStorage.user?e.history.push("/rideChoice"):r.a.createElement("div",{style:{backgroundColor:"#79a7a3",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{width:"88vw",height:"92vh",boder:"2px solid #a7bdbb",borderRadius:"10px",backgroundColor:"#a7bdbb",display:"flex",alignItems:"center",flexDirection:"column",boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"}},r.a.createElement("div",{style:{width:"70%",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"-15vw"}},r.a.createElement(S.a,{direction:"vertical",size:"small",current:t.formSignupStep,style:{marginTop:"2vh",width:"25%"}},r.a.createElement(_,{title:""}),r.a.createElement(_,{title:""}),r.a.createElement(_,{title:""})),r.a.createElement("img",{src:"logo_transparent.png",alt:"Logo",style:{width:"160px"}})),r.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}},0===t.formSignupStep?r.a.createElement(V.a,{onSubmit:t.handleInput},r.a.createElement(V.a.Item,{label:r.a.createElement("span",null,"Nombre completo\xa0",r.a.createElement(z.a,{title:"As\xed te ver\xe1n los dem\xe1s usuarios"},r.a.createElement(d.a,{type:"question-circle-o"})))},r.a.createElement(A.a,{name:"fullName",type:"text",onChange:function(e){return t.handleInput(e,"formSignup")},value:t.formSignup.fullName})),r.a.createElement(V.a.Item,{label:"Password",hasFeedback:!0},r.a.createElement(A.a.Password,{name:"password",type:"password",onChange:function(e){return t.handleInput(e,"formSignup")},value:t.formSignup.password})),r.a.createElement(B.a,{style:{marginBottom:"1vh",backgroundColor:"black",border:"2px solid black"},onClick:t.nextStep1,type:"primary",htmlType:"submit"},"Siguiente"),r.a.createElement("br",null),"Ya tienes una cuenta?",r.a.createElement(i.b,{to:"/login"}," Inicia sesi\xf3n!")):1===t.formSignupStep?r.a.createElement(V.a,{onSubmit:t.handleInput},r.a.createElement(V.a.Item,{label:"Correo electr\xf3nico"},r.a.createElement(A.a,{type:"email",name:"email",onChange:function(e){return t.handleInput(e,"formSignup")},value:t.formSignup.email})),r.a.createElement(V.a.Item,{label:"N\xfamero de tel\xe9fono"},r.a.createElement(A.a,{addonBefore:G,style:{width:"100%"},name:"telephoneNumber",onChange:function(e){return t.handleInput(e,"formSignup")},value:t.formSignup.telephoneNumber})),r.a.createElement(V.a.Item,{label:"Rol"},r.a.createElement(J.a,{placeholder:"Seleccione",style:{width:250},onChange:t.handleChangeRole},r.a.createElement(q,{value:"passenger"},"Pasajero"),r.a.createElement(q,{value:"driver"},"Conductor"))),r.a.createElement(V.a.Item,{label:"Universidad"},r.a.createElement(J.a,{placeholder:"Seleccione",default:"Tecnologico de Monterrey, Santa Fe",style:{width:250},onChange:t.handleChangeUniversity},r.a.createElement(q,{value:"Tecnologico de Monterrey, Santa Fe"},"Tecnologico de Monterrey, Santa Fe"),r.a.createElement(q,{value:"Universidad Iberoamericana"},"Universidad Iberoamericana"))),r.a.createElement(V.a.Item,null),r.a.createElement(B.a,{style:{backgroundColor:"black",border:"2px solid black"},onClick:t.nextStep2,type:"primary",htmlType:"submit"},"Siguiente")):"driver"===t.formSignup.role?r.a.createElement(V.a,{style:{width:"340px"}},r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"60%",alignItems:"center"}},r.a.createElement(V.a.Item,{label:"Modelo de su coche"},r.a.createElement(A.a,{name:"carModel",type:"text",onChange:function(e){return t.handleInput(e,"formSignup")},value:t.formSignup.carModel})),r.a.createElement(V.a.Item,{label:"Color de su coche"},r.a.createElement(A.a,{name:"carColor",type:"text",onChange:function(e){return t.handleInput(e,"formSignup")},value:t.formSignup.carColor})),r.a.createElement(V.a.Item,{style:{marginTop:"5vh"}},r.a.createElement("p",null,"Suba una foto"),r.a.createElement("input",{onChange:t.handleFile,type:"file",name:"photo"})),r.a.createElement(B.a,{style:{backgroundColor:"black",border:"2px solid black"},type:"primary",htmlType:"submit",onClick:function(a){return t.handleSignupSubmit(a,(function(){return e.history.push("/login")}))}},"Finalizar")))):r.a.createElement(V.a,{style:{width:"340px"}},r.a.createElement(V.a.Item,{style:{marginTop:"5vh"}},r.a.createElement("p",null,"Suba una foto"),r.a.createElement("input",{onChange:t.handleFile,type:"file",name:"photo"})),r.a.createElement(B.a,{style:{backgroundColor:"black",border:"2px solid black"},type:"primary",htmlType:"submit",onClick:function(a){return t.handleSignupSubmit(a,(function(){return e.history.push("/login")}))}},"Finalizar"))))))}))}var W=a(556);a(531);function Y(e){return r.a.createElement("div",{style:{backgroundColor:"#79a7a3",width:"100vw",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{width:"88vw",height:"92vh",display:"flex",alignItems:"center",flexDirection:"column"}},e.children))}function X(e){return r.a.createElement(L.Consumer,null,(function(t){return r.a.createElement(r.a.Fragment,null,localStorage.user?e.history.push("/rideChoice"):r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null,r.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},r.a.createElement("img",{style:{width:"200px",marginTop:"-30vpx",marginBottom:"10px"},src:"logo_transparent.png",alt:"LogoImage"}),r.a.createElement(V.a,{onSubmit:t.handleInput,className:"login-form"},r.a.createElement(V.a.Item,null,r.a.createElement(A.a,{prefix:r.a.createElement(d.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),type:"email",name:"email",value:t.formLogin.email,placeholder:"Email",onChange:function(e){return t.handleInput(e,"formLogin")}})),r.a.createElement(V.a.Item,null,r.a.createElement(A.a,{prefix:r.a.createElement(d.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",name:"password",value:t.formLogin.password,placeholder:"Contrase\xf1a",onChange:function(e){return t.handleInput(e,"formLogin")}})),r.a.createElement(V.a.Item,null,r.a.createElement(W.a,null,"Recu\xe9rdame"),r.a.createElement(B.a,{style:{backgroundColor:"black",border:"2px solid black"},type:"primary",htmlType:"submit",className:"login-form-button",onClick:function(a){t.handleLogin(a,(function(){return e.history.push("/rideChoice")}))}},"Logearme"),"\xbfNo tienes una cuenta?",r.a.createElement(i.b,{to:"/signup"}," \xa1reg\xedstrate ahora!"))))),r.a.createElement(y,null)))}))}function Z(){var e=Object(s.a)(["\n    height: 320px;\n    width: 80vw;\n    background-color: whitesmoke;\n    border: 4px solid whitesmoke;\n    border-radius: 6px;\n    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\n    margin: 3vh 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    p {\n        color: black;\n    }\n"]);return Z=function(){return e},e}var K=J.a.Option,Q=u.a.div(Z());function $(e){return r.a.createElement(L.Consumer,null,(function(t){return r.a.createElement(r.a.Fragment,null,localStorage.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("div",{style:{width:"100vw",height:"100vh",backgroundColor:"#79a7a3",paddingTop:"2vh"}},r.a.createElement("div",null,r.a.createElement("h2",{style:{marginBottom:"10px"},onClick:t.findRides},"Viajes disponibles")),r.a.createElement("div",null,r.a.createElement("h3",null,"M\xe1xima distancia de los viajes"),r.a.createElement(J.a,{placeholder:"Seleccione",default:"1000",style:{width:130},onChange:t.handleChangeMaxDistance},r.a.createElement(K,{value:"500"},"500m"),r.a.createElement(K,{value:"1000"},"1km"),r.a.createElement(K,{value:"2000"},"2km"),r.a.createElement(K,{value:"3000"},"3km"),r.a.createElement(K,{value:"4000"},"4km")),r.a.createElement(B.a,{style:{marginBottom:"1vh",backgroundColor:"black",border:"2px solid black"},onClick:t.findRides,type:"primary",htmlType:"submit"},"Buscar")),r.a.createElement("div",{style:{overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"center",height:"85vh"}},t.foundRides.map((function(e,a){return r.a.createElement("div",{key:a,style:{height:"290px",marginBottom:"5vh"}},r.a.createElement(Q,{key:a},r.a.createElement("div",{style:{display:"flex",justifyContent:"flexStart",width:"100%"}},r.a.createElement("img",{style:{width:"40px",height:"40px",margin:"10px 20px 0 10px"},src:e.driver.profile.photo,alt:"Driverimage"}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("h4",null,e.driver.fullName),r.a.createElement("p",null,"Tecnologico de Monterrey, Santa Fe"===e.driver.profile.university?"TEC Campus Santa Fe":"Universidad Iberoamericana"))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%"}},r.a.createElement("p",{style:{marginLeft:"20px"}},r.a.createElement("strong",null,"Modelo del coche")," ",e.driver.profile.carModel),r.a.createElement("p",{style:{marginLeft:"20px"}},r.a.createElement("strong",null,"Color")," ",e.driver.profile.carColor)),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",width:"100%"}},r.a.createElement("p",{style:{marginLeft:"20px"}},r.a.createElement("strong",null,"Hora salida")," ",e.departureTime),r.a.createElement("p",{style:{marginLeft:"20px"}},r.a.createElement("strong",null,"Plazas restantes")," ",e.numberPlaces)),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},"toUniversity"===e.rideDirection?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Salida")," ",e.placeName," "),r.a.createElement(d.a,{style:{color:"black"},type:"down"}),r.a.createElement("p",null,r.a.createElement("strong",null,"Destino")," ","Tecnologico de Monterrey, Santa Fe"===e.universityDirection?"TEC Campus Santa Fe":"Iberoamericana")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Salida")," ","Tecnologico de Monterrey, Santa Fe"===e.universityDirection?"TEC Campus Santa Fe":"Iberoamericana"," "),r.a.createElement(d.a,{style:{color:"black"},type:"down"}),r.a.createElement("p",null,r.a.createElement("strong",null,"Destino")," ",e.placeName)),0===e.numberPlaces?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,r.a.createElement("strong",null,"No quedan plazas disponibles!"))):e.driver._id===JSON.parse(localStorage.user)._id?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,r.a.createElement("strong",null,"Es tu viaje!"))):e.passengers.includes(JSON.parse(localStorage.user)._id)?r.a.createElement("h3",null,r.a.createElement("strong",null,"Ya formas parte de este viaje!")):r.a.createElement(B.a,{style:{marginBottom:"1vh",backgroundColor:"black",border:"2px solid black",color:"white"},onClick:function(a){return t.selectPlace(a,e._id,JSON.parse(localStorage.user)._id)},type:"primary",htmlType:"submit"},"Seleccionar plaza"))))})))),r.a.createElement(y,null)):e.history.push("/login"))}))}var ee=a(548),te=ee.a.Meta;function ae(e){return r.a.createElement(L.Consumer,null,(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(Y,null,r.a.createElement("div",{style:{marginTop:"8vh",height:"80%",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}},localStorage.user?"driver"===JSON.parse(localStorage.user).role?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/create"},r.a.createElement(ee.a,{hoverable:!0,style:{width:"300px",height:"270px",border:"6px solid white",borderRadius:"10px",boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"},cover:r.a.createElement("img",{alt:"example",src:"https://cnet2.cbsistatic.com/img/B7-zkuz2jA4PZDXw5VibK63Fbw4=/2018/11/08/8d5d245a-7f16-43e2-a885-d376734fbc95/uberpool-pr-photo.jpg"})},r.a.createElement(te,{title:"Ofrezca un viaje ahora"}))),r.a.createElement(i.b,{to:"/feed"},r.a.createElement(ee.a,{hoverable:!0,style:{width:"300px",height:"270px",border:"6px solid white",borderRadius:"10px",boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"},cover:r.a.createElement("img",{alt:"example",src:"https://medici-prod.s3-us-west-2.amazonaws.com/uploads/challenges-opportunities-ride-sharing-industry.jpg"})},r.a.createElement(te,{title:"Busca un viaje ahora"})))):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/feed"},r.a.createElement(ee.a,{hoverable:!0,style:{width:"300px",height:"270px",border:"6px solid white",borderRadius:"10px"},cover:r.a.createElement("img",{alt:"example",src:"https://medici-prod.s3-us-west-2.amazonaws.com/uploads/challenges-opportunities-ride-sharing-industry.jpg"})},r.a.createElement(te,{title:"Busca un viaje ahora"})))):e.history.push("/login"))),r.a.createElement(y,null))}))}var ne=a(553),re=a(78),le=a.n(re),oe=a(182),ie=a(557),ce=a(269),se=J.a.Option,ue="HH:mm",me="pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA";function de(e){return r.a.createElement(L.Consumer,null,(function(t){return r.a.createElement(r.a.Fragment,null,localStorage.user&&"driver"===JSON.parse(localStorage.user).role?r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(Y,null,r.a.createElement("div",{style:{marginTop:"5vh"}},r.a.createElement("h1",null,"Creaci\xf3n"),t.formCreateStep>0?"toUniversity"===t.rideDirection?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"A qu\xe9 universidad vas?"),r.a.createElement(V.a.Item,null,r.a.createElement(J.a,{placeholder:"Seleccione",default:"Tecnologico de Monterrey, Santa Fe",style:{width:250},onChange:t.handleChangeUniversityDirection},r.a.createElement(se,{value:"Tecnologico de Monterrey, Santa Fe"},"Tecnologico de Monterrey, Santa Fe"),r.a.createElement(se,{value:"Universidad Iberoamericana"},"Universidad Iberoamericana"))),r.a.createElement("h4",null,"De d\xf3nde sales?"),r.a.createElement("div",{style:{height:"30vh",width:"82vw"}},r.a.createElement(oe.b,Object.assign({ref:t.mapRef},t.viewport,{width:"100%",height:"100%",onViewportChange:t.handleViewportChange,mapboxApiAccessToken:me}),r.a.createElement(ce.a,{mapRef:t.mapRef,onResult:t.handleOnResult,onViewportChange:t.handleGeocoderViewportChange,mapboxApiAccessToken:me,position:"top-left"}),r.a.createElement(ie.a,Object.assign({},t.viewport,{layers:[t.searchResultLayer]})))),r.a.createElement(V.a.Item,null,r.a.createElement("h4",null,"N\xfamero de plazas disponibles"),r.a.createElement(J.a,{name:"numberPlaces",placeholder:"Seleccione",default:"1",style:{width:130},onChange:t.handleChangeNumberPlaces},r.a.createElement(se,{value:"1"},"1"),r.a.createElement(se,{value:"2"},"2"),r.a.createElement(se,{value:"3"},"3"),r.a.createElement(se,{value:"4"},"4"),r.a.createElement(se,{value:"5"},"5"))),r.a.createElement(V.a.Item,null,r.a.createElement("h4",null,"A qu\xe9 hora sales?"),r.a.createElement(ne.a,{placeholder:"Seleccione",defaultValue:le()("12:08",ue),format:ue,onChange:t.handleChangeDepartureCreate})),r.a.createElement(V.a.Item,null,r.a.createElement(B.a,{style:{marginBottom:"1vh",backgroundColor:"black",border:"2px solid black"},onClick:function(a){return t.handleCreateSubmit(a,(function(){return e.history.push("/feed")}))},type:"primary",htmlType:"submit"},"Finalizar"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"De qu\xe9 universidad sales?"),r.a.createElement(J.a,{placeholder:"Seleccione",default:"Tecnologico de Monterrey, Santa Fe",style:{width:250},onChange:t.handleChangeUniversityDirection},r.a.createElement(se,{value:"Tecnologico de Monterrey, Santa Fe"},"Tecnologico de Monterrey, Santa Fe"),r.a.createElement(se,{value:"Universidad Iberoamericana"},"Universidad Iberoamericana")),r.a.createElement(V.a.Item,null),r.a.createElement("h4",null,"A d\xf3nde vas?"),r.a.createElement("div",{style:{height:"26vh",width:"82vw"}},r.a.createElement(oe.b,Object.assign({ref:t.mapRef},t.viewport,{width:"100%",height:"100%",onViewportChange:t.handleViewportChange,mapboxApiAccessToken:me}),r.a.createElement(ce.a,{mapRef:t.mapRef,onResult:t.handleOnResult,onViewportChange:t.handleGeocoderViewportChange,mapboxApiAccessToken:me,position:"top-left"}),r.a.createElement(ie.a,Object.assign({},t.viewport,{layers:[t.searchResultLayer]})))),r.a.createElement(V.a.Item,null),r.a.createElement(V.a.Item,null,r.a.createElement("h4",null,"N\xfamero de plazas disponibles"),r.a.createElement(J.a,{placeholder:"Seleccione",default:"1",style:{width:130},onChange:t.handleChangeNumberPlaces},r.a.createElement(se,{value:"1"},"1"),r.a.createElement(se,{value:"2"},"2"),r.a.createElement(se,{value:"3"},"3"),r.a.createElement(se,{value:"4"},"4"),r.a.createElement(se,{value:"5"},"5"))),r.a.createElement(V.a.Item,null,r.a.createElement("h4",null,"A qu\xe9 hora sales?"),r.a.createElement(ne.a,{placeholder:"Seleccione",defaultValue:le()("12:08",ue),format:ue,onChange:t.handleChangeDepartureCreate})),r.a.createElement(V.a.Item,null,r.a.createElement(B.a,{style:{marginBottom:"1vh",backgroundColor:"black",border:"2px solid black"},onClick:function(a){return t.handleCreateSubmit(a,(function(){return e.history.push("/feed")}))},type:"primary",htmlType:"submit"},"Finalizar"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a.Item,null,r.a.createElement(J.a,{placeholder:"Seleccione",default:"Tecnologico de Monterrey, Santa Fe",style:{width:250},onChange:t.handleChangeRideDirection},r.a.createElement(se,{value:"toUniversity"},"Voy a la universidad"),r.a.createElement(se,{value:"fromUniversity"},"Vuelvo de la universidad"))),r.a.createElement(V.a.Item,null,r.a.createElement(B.a,{style:{backgroundColor:"black",border:"2px solid black"},onClick:t.nextCreateStep,type:"primary",htmlType:"submit"},"Siguiente")))))):e.history.push("/login"),r.a.createElement(y,null))}))}var pe=a(547);function he(e){return r.a.createElement(L.Consumer,null,(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(Y,null,localStorage.user?r.a.createElement("div",{style:{height:"60vh",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",marginTop:"20px"}},r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("strong",null,"Perfil"))),r.a.createElement(pe.a,{style:{backgroundColor:"whitesmoke",width:"100px",height:"100px"},src:JSON.parse(localStorage.user).profile.photo}),r.a.createElement("h2",null,r.a.createElement("strong",null,JSON.parse(localStorage.user).fullName)),r.a.createElement("h3",null,r.a.createElement("strong",null,"Email")),r.a.createElement("h4",{style:{marginTop:"-30px"}},JSON.parse(localStorage.user).email),r.a.createElement("h3",null,r.a.createElement("strong",null,"Estudiante en")),r.a.createElement("h4",{style:{marginTop:"-30px"}},JSON.parse(localStorage.user).profile.university),r.a.createElement("h3",null,r.a.createElement("strong",null,"N\xfamero de tel\xe9fono")," +55 ",JSON.parse(localStorage.user).profile.telephoneNumber),r.a.createElement(B.a,{style:{backgroundColor:"black",border:"2px solid black"},type:"primary",htmlType:"submit",className:"login-form-button",onClick:function(e){t.handleLogout(e)}},"Cerrar sesi\xf3n")):e.history.push("/login")),r.a.createElement(y,null))}))}function ge(){var e=Object(s.a)(["\n    height: 230px;\n    width: 80vw;\n    background-color: whitesmoke;\n    border: 4px solid whitesmoke;\n    border-radius: 6px;\n    boxShadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\n    margin: 3vh 0;\n"]);return ge=function(){return e},e}var fe=u.a.div(ge());function Ee(e){return r.a.createElement(L.Consumer,null,(function(t){return r.a.createElement(r.a.Fragment,null,localStorage.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("div",{style:{width:"100vw",height:"100vh",backgroundColor:"#79a7a3",paddingTop:"2vh"}},"driver"===JSON.parse(localStorage.user).role?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("strong",null,"Mis viajes"))),r.a.createElement("div",{style:{overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"center",height:"40vh"}},0===JSON.parse(localStorage.user).ownedRides.length?r.a.createElement("h2",null,"Aun no tienes viajes"):JSON.parse(localStorage.user).ownedRides.map((function(e,a){return r.a.createElement("div",{key:a,style:{height:"200px",marginBottom:"5vh",color:"black"}},r.a.createElement(fe,{key:a},r.a.createElement("p",null,r.a.createElement("strong",null,"Hora Salida")),r.a.createElement("p",null,e.departureTime),"toUniversity"===e.rideDirection?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Salida")," ",e.placeName," "),r.a.createElement(d.a,{style:{color:"black"},type:"down"}),r.a.createElement("p",null,r.a.createElement("strong",null,"Destino")," ","Tecnologico de Monterrey, Santa Fe"===e.universityDirection?"TEC Campus Santa Fe":"Iberoamericana")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Salida")," ","Tecnologico de Monterrey, Santa Fe"===e.universityDirection?"TEC Campus Santa Fe":"Iberoamericana"," "),r.a.createElement(d.a,{style:{color:"black"},type:"down"}),r.a.createElement("p",null,r.a.createElement("strong",null,"Destino")," ",e.placeName)),r.a.createElement(B.a,{style:{marginBottom:"1vh",backgroundColor:"black",border:"2px solid black"},onClick:function(a){return t.endRide(a,e._id)},type:"primary",htmlType:"submit"},"Terminar viaje")))})))):null,r.a.createElement("h2",{style:{marginTop:"5vh"}},r.a.createElement("strong",null,"Pasajero en")),r.a.createElement("div",{style:{overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"center",height:"40vh"}},0===JSON.parse(localStorage.user).actualRides.length?r.a.createElement("h2",null,"Aun no tienes viajes"):JSON.parse(localStorage.user).actualRides.map((function(e,t){return r.a.createElement("div",{key:t,style:{height:"200px",marginBottom:"5vh",color:"black"}},r.a.createElement(fe,{key:t},r.a.createElement("p",null,r.a.createElement("strong",null,"Hora Salida")),r.a.createElement("p",null,e.departureTime),"toUniversity"===e.rideDirection?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Salida")," ",e.placeName," "),r.a.createElement(d.a,{style:{color:"black"},type:"down"}),r.a.createElement("p",null,r.a.createElement("strong",null,"Destino")," ","Tecnologico de Monterrey, Santa Fe"===e.universityDirection?"TEC Campus Santa Fe":"Iberoamericana")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Salida")," ","Tecnologico de Monterrey, Santa Fe"===e.universityDirection?"TEC Campus Santa Fe":"Iberoamericana"," "),r.a.createElement(d.a,{style:{color:"black"},type:"down"}),r.a.createElement("p",null,r.a.createElement("strong",null,"Destino")," ",e.placeName))))})))),r.a.createElement(y,null)):e.history.push("/login"))}))}var ye=function(){return r.a.createElement(i.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:v}),r.a.createElement(c.a,{exact:!0,path:"/signup",component:H}),r.a.createElement(c.a,{exact:!0,path:"/login",component:X}),r.a.createElement(c.a,{exact:!0,path:"/rideChoice",component:ae}),r.a.createElement(c.a,{exact:!0,path:"/feed",component:$}),r.a.createElement(c.a,{exact:!0,path:"/create",component:de}),r.a.createElement(c.a,{exact:!0,path:"/profile",component:he}),r.a.createElement(c.a,{exact:!0,path:"/myRides",component:Ee}),r.a.createElement(c.a,{component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null,r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[362,1,2]]]);
//# sourceMappingURL=main.faca9ffb.chunk.js.map