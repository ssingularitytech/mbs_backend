(window.webpackJsonpmbs_frontend=window.webpackJsonpmbs_frontend||[]).push([[3],{301:function(e,t,a){"use strict";var n=a(7),r=function e(){Object(n.a)(this,e)};r.getUserList=function(){return function(e,t,a){return a.fetch("/api/v1/simulation_results").then(function(e){return e.json().then(function(e){return e})}).catch(function(e){return console.log(e),null})}},r.getUserData=function(e){return function(t,a,n){return n.fetch("/api/v1/simulation_results/"+e+"/simulation_show/1").then(function(e){return e.json().then(function(e){return e})}).catch(function(e){return console.log(e),null})}},r.getUserListOfSimulation=function(e){return function(t,a,n){return n.fetch("/api/v1/simulation_results/simulation_index/"+e).then(function(e){return e.json().then(function(e){return e})}).catch(function(e){console.log(e)})}},t.a=r},898:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(17),i=a(29),s=a(27),o=a(28),l=a(1),c=a.n(l),p=a(2),u=a.n(p),h=a(56),m=(a(82),a(201),a(691)),g=a.n(m),d=a(692),f=a.n(d),y=a(879),b=a(327),v=a(8),E=a(301),w=a(20),x=a(5),M=a(904),C=a(594),O=a(881),j=a(326),S=a(458),k=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[{name:isNaN(this.props.value)?"-":Math.round(this.props.value)+"%",value:isNaN(this.props.value)?0:Math.round(this.props.value)},{name:"",value:isNaN(this.props.value)?100:100-Math.round(this.props.value)}];return c.a.createElement("div",{style:{position:"relative",width:this.props.width,height:this.props.height}},c.a.createElement(S.c,{width:this.props.width,height:this.props.height},c.a.createElement(S.b,{data:t,cx:"50%",cy:"50%",innerRadius:this.props.width/2-40,outerRadius:this.props.width/2-20,fill:this.props.color,paddingAngle:5,dataKey:"value"},t.map(function(t,a){return c.a.createElement(S.a,{key:"cell-".concat(a),fill:0===a?e.props.color:"#cccccc"})}))),c.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#454545"}},t[0].name))}}]),t}(l.PureComponent);k.defaultProps={width:200,height:200,color:"#8884d8"};var A=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(S.h,{cx:"50%",cy:"50%",outerRadius:this.props.width/3.25,width:this.props.width,height:this.props.height,data:this.props.data},c.a.createElement(S.e,null),c.a.createElement(S.d,{dataKey:"competency"}),c.a.createElement(S.f,{domain:[0,100]}),c.a.createElement(S.g,{name:"Competency Score",dataKey:"actual",stroke:Object(x.a)().colors.secondary,fill:"#82ca9d",fillOpacity:.8}),c.a.createElement(S.i,null))}}]),t}(l.PureComponent);A.defaultProps={width:700,height:700,color:"#fe3456"};var P=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={score:a.props.competencyMap.overall,competencyMap:[{competency:"Analytical",actual:a.props.competencyMap.analytical,fullMark:100},{competency:"Creative",actual:a.props.competencyMap.creative,fullMark:100},{competency:"Methodical",actual:a.props.competencyMap.methodical,fullMark:100},{competency:"Frugal",actual:a.props.competencyMap.frugal,fullMark:100}],problemSolving:a.props.competencyMap.problemSolving,decisionMaking:a.props.competencyMap.decisionMaking,balanced:a.props.competencyMap.balanced,timeManagement:a.props.competencyMap.timeManagement,costManagement:a.props.competencyMap.costManagement,resourceful:a.props.competencyMap.resourceful},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e={textAlign:"center",lineHeight:"1.1"};return console.log(this.props.questions),c.a.createElement(M.a,{basic:!0},c.a.createElement("div",{style:{margin:"100px 5% 0 5%",width:"90%",textAlign:"center"}},c.a.createElement(M.a,null,c.a.createElement("h2",{style:{margin:0}},"AGGREGATE SCORE:"),c.a.createElement("h1",{style:{margin:0,fontSize:"3.2em"}},this.state.score,"%"))),c.a.createElement("div",{style:{margin:"40px 5% 20px 5%",width:"90%"}},c.a.createElement(C.a,null),c.a.createElement("h1",{style:{margin:"-32px auto",width:"300px",background:"#f5f5f5",textAlign:"center"}},"COMPETENCY MAP")),c.a.createElement(M.a,{basic:!0,style:{width:"760px",textAlign:"center",padding:"0"}},c.a.createElement(O.a,null,c.a.createElement(O.a.Row,null,c.a.createElement(O.a.Column,{width:9},c.a.createElement(M.a,{basic:!0,style:{marginLeft:"15px"}},c.a.createElement(A,{width:380,height:380,data:this.state.competencyMap}))),c.a.createElement(O.a.Column,{width:7},c.a.createElement(M.a,{basic:!0,style:{paddingBottom:"21px"}},c.a.createElement(O.a,null,c.a.createElement(O.a.Row,null,c.a.createElement(O.a.Column,{width:8,style:e},c.a.createElement(k,{width:128,height:100,color:Object(x.a)().colors.master,value:this.state.problemSolving}),"Problem Solving"),c.a.createElement(O.a.Column,{width:8,style:e},c.a.createElement(k,{width:128,height:100,color:Object(x.a)().colors.master,value:this.state.decisionMaking}),"Decision Making"),c.a.createElement(O.a.Column,{width:8,style:e},c.a.createElement(k,{width:128,height:100,color:Object(x.a)().colors.master,value:this.state.balanced}),"Balanced Approach"),c.a.createElement(O.a.Column,{width:8,style:e},c.a.createElement(k,{width:128,height:100,color:Object(x.a)().colors.master,value:this.state.timeManagement}),"Time Management"),c.a.createElement(O.a.Column,{width:8,style:e},c.a.createElement(k,{width:128,height:100,color:Object(x.a)().colors.master,value:this.state.costManagement}),"Cost Management"),c.a.createElement(O.a.Column,{width:8,style:e},c.a.createElement(k,{width:128,height:100,color:Object(x.a)().colors.master,value:this.state.resourceful}),"Resourcefulness")))))))),c.a.createElement("div",{style:{margin:"20px 5% 40px 5%",width:"90%"}},c.a.createElement(C.a,null),c.a.createElement("h1",{style:{margin:"-32px auto",width:"300px",background:"#f5f5f5",textAlign:"center"}},"KEY ATTRIBUTES")),c.a.createElement(M.a,{basic:!0,style:{textAlign:"center"}},u.a.map(this.props.questionList.slice(3,this.props.questionList.length),function(e,t){return c.a.createElement(j.a,{color:"yellow",key:"profile-tag-"+t,size:"big",style:{marginBottom:"5px"}},e.response)})))}}]),t}(l.PureComponent);a.d(t,"AnalyticsContainer",function(){return I});var I=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).downloadReportPage=function(e){a.setState({syncing:!0},function(){var t=document.querySelector(".reportPage");g()(t,{useCORS:!0}).then(function(t){var n=t.toDataURL("image/png"),r=new f.a("p","mm","a4",!0),i=r.internal.pageSize.getWidth(),s=r.internal.pageSize.getHeight();r.addImage(n,"PNG",0,0,i,s,"","SLOW"),r.save((e+".pdf").replace(/ /g,"_").toLowerCase()),a.setState({syncing:!1})})})},a.nameToHex=function(e){for(var t=0,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);for(var n="#",r=0;r<3;r++){n+=("00"+(t>>8*r&255).toString(16)).substr(-2)}return n},a.fixColor=function(e){var t=a.nameToHex(e),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);if(.299*parseInt(n[1],16)+.587*parseInt(n[2],16)+.114*parseInt(n[3],16)>186){var r=parseInt(t.substring(1,3),16),i=parseInt(t.substring(3,5),16),s=parseInt(t.substring(5,7),16);return r=parseInt(60*r/100,0),i=(i=parseInt(60*i/100,0))<255?i:255,s=(s=parseInt(60*s/100,0))<255?s:255,"#"+(1===(r=r<255?r:255).toString(16).length?"0"+r.toString(16):r.toString(16))+(1===i.toString(16).length?"0"+i.toString(16):i.toString(16))+(1===s.toString(16).length?"0"+s.toString(16):s.toString(16))}return t},a.getAvatar=function(e,t){return c.a.createElement("svg",{height:t,width:t},c.a.createElement("rect",{fill:a.fixColor(e),x:"0",y:"0",height:t,width:t}),c.a.createElement("text",{fill:"#ffffff",fontSize:t/2,textAnchor:"middle",x:.5*t,y:.67*t},u.a.upperCase(e.split(" ")[0][0]),u.a.upperCase(1===e.split(" ").length?u.a.upperCase(e.split(" ")[0][1]):e.split(" ")[1][0])))},a.goBack=function(){return v.d.push("/analytics")},a.state={username:"",userCollege:"",userDesc:"",userData:{},fetchComplete:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;"0"===this.props.params.id?this.setState({username:u.a.find(this.props.questions,{questionId:"A1"}).response,userCollege:u.a.find(this.props.questions,{questionId:"A2"}).response,userDesc:u.a.find(this.props.questions,{questionId:"A3"}).response,fetchComplete:!0}):this.props.actions.getUserData(this.props.params.id).then(function(t){e.setState({userData:t,username:t.user.name,userCollege:t.user.email,userDesc:t.user.nickname,fetchComplete:!0})})}},{key:"render",value:function(){var e=this,t=window.innerHeight>window.innerWidth,a={width:t?"calc(100% - 50px)":"calc(100%)",height:"100%",marginLeft:t?"50px":"auto",paddingTop:"8px"},n={container:{position:"relative",width:"800px",height:"1100px",margin:"20px auto",background:"#f5f5f5",boxShadow:"1px 1px 1px 1px #ccc"},tabber:{position:"absolute",left:"0",top:"10px",transformOrigin:"0px 0px",transform:"rotate(90deg)"},bannerSection:{width:"100%",height:"0",paddingBottom:"12.5%",position:"relative"}},r={image:{width:"100%"},overlay:{position:"absolute",top:"0",left:"0",width:"100%",height:"0",paddingBottom:"12.5%",background:"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)",opacity:"0.5"},profileImage:{position:"absolute",left:"40px",bottom:"-100px",width:"160px",height:"160px",background:"#ffffff",boxShadow:"1px 1px 1px 1px #666666"},profileName:{position:"absolute",left:"220px",bottom:"-100px",zIndex:"9999",width:"400px"},userName:{padding:0,margin:0},pageTitle:{position:"absolute",right:"15%",top:"28%",transform:"translate(0,-50%)",color:"#ffffff",lineHeight:"0.9",textAlign:"right"},actionMenu:{position:"absolute",right:"40px",bottom:"-80px",zIndex:"9999"},logo:{width:"25%",height:"100%",background:"#454545",position:"absolute",top:"0",right:"0"},logoImage:{width:"80%",margin:"10%"}};return this.state.fetchComplete?c.a.createElement("div",{className:"full-height isRelative"},c.a.createElement("div",{style:a},c.a.createElement("div",{style:n.container,className:"reportPage"},c.a.createElement("div",{style:n.bannerSection},c.a.createElement(y.a,{src:"assets/images/reportBanners/"+this.nameToHex(this.state.username)[1]+".jpg",style:r.image}),c.a.createElement("div",{style:r.overlay}),c.a.createElement("div",{style:r.profileImage},this.getAvatar(this.state.username,160)),c.a.createElement("div",{style:r.profileName},c.a.createElement("h1",{style:r.userName},this.state.username),c.a.createElement("h3",{style:r.userName},this.state.userCollege),c.a.createElement("p",{style:{fontSize:this.state.userDesc.length>30?"0.8em":"1em"}},this.state.userDesc)),!this.state.syncing&&c.a.createElement("div",{style:r.actionMenu},c.a.createElement(b.a,{link:!0,circular:!0,inverted:!0,name:"chevron left",size:"big",onClick:this.goBack}),c.a.createElement(b.a,{link:!0,circular:!0,inverted:!0,name:"print",size:"big",onClick:function(){return e.downloadReportPage("learner_analytics_"+e.state.username.replace(" ","_"))}})),c.a.createElement("div",{style:r.logo},c.a.createElement(y.a,{src:"assets/images/configurable/logo.png",style:r.logoImage}))),c.a.createElement(P,Object.assign({},this.props,{questionList:"0"===this.props.params.id?this.props.questions:this.state.userData.user_data.questions,competencyMap:"0"===this.props.params.id?this.props.simParams.competencyMap:this.state.userData.user_data.simParams.competencyMap,downloadReportPage:this.downloadReportPage,mailReportPage:this.mailReportPage,getAvatar:this.getAvatar,nameToHex:this.nameToHex,syncing:this.state.syncing}))))):c.a.createElement(w.a,null)}}]),t}(c.a.Component);t.default=Object(h.b)(function(e){return{auth:e.auth,questions:e.questions,simParams:e.simParams,opsRecords:e.opsRecords}},function(e){return{actions:{getUserList:function(){return e(E.a.getUserList())},getUserData:function(t){return e(E.a.getUserData(t))}}}})(I)}}]);
//# sourceMappingURL=analytics.5fb33c2f.chunk.js.map