(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1458:function(e,t,a){"use strict";a.r(t);var n=a(408),s=a.n(n),i=a(452),c=a(8),r=a(9),o=a(11),l=a(10),p=a(12),u=a(0),m=a.n(u),h=a(21),d=a(20),f=a(1),g=a(24),x=a(3),y=a.n(x),b=a(18),v=a(16),w=a(48),E=a(23),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),p=0;p<n;p++)r[p]=arguments[p];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={},a.fetchCourse=function(e){w.b.get("/courses/contents",{params:e}).then(function(e){if(!e.data.success)return a.props.showMessage({message:"Get Course Failed"}),void a.props.history.push({pathname:"/courses"});a.setState(e.data.data)})},a.fetchActivity=function(){w.b.post("/activity/get/course",{courseId:a.props.match.params.id,userId:a.props.user.userId}).then(function(){var e=Object(i.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,t.data.doc.forEach(function(e){n.push(e.contentId)});case 3:a.setState({activities:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},a.startWatching=function(){a.props.history.push({pathname:"/browse/".concat(a.state._id,"/").concat(a.state.contents[a.state.activities.length]._id)})},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=Object(i.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchCourse({courseId:this.props.match.params.id});case 2:return e.next=4,this.fetchActivity();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.classes;return m.a.createElement(h.a,{animation:"transition.slideUpIn",delay:300,style:{background:"black"}},m.a.createElement("div",{className:y()(t.root,"w-full pt-16")},this.state._id&&this.state.contents&&this.state.activities&&m.a.createElement("div",null,m.a.createElement("section",{className:"container"},m.a.createElement("img",{src:""===this.state.coverimage?"assets/images/img/icons/s1.png":"".concat(w.a,"/uploads/").concat(this.state._id,"/").concat(this.state.coverimage,"?").concat(Date.now()),alt:"",style:{width:"100%",height:"230px"}}),m.a.createElement("br",null),m.a.createElement("h1",{style:{textAlign:"center"},className:t.title},this.state.name),m.a.createElement("h4",{style:{textAlign:"center",color:"#4f4f67"}},"".concat(this.state.contents.length," courses")),m.a.createElement("br",null),m.a.createElement(f.c,{type:"submit",variant:"contained",color:"primary",className:"w-full mx-auto normal-case",value:"legacy",onClick:this.startWatching},this.state.activities.length?"CONTINUE WATCHING":"START")),m.a.createElement("section",{className:"container"},m.a.createElement("div",{className:"section-head"},m.a.createElement("h4",{className:"title-main"},"Course Content")),m.a.createElement("div",{className:"c-wrapper"},m.a.createElement(f.x,{cols:0,cellHeight:80},this.state.contents.map(function(a,n){return m.a.createElement(f.y,{classes:{root:"w-full h-full",tile:"rounded-8 text-center w-full"},style:{display:"flex",background:"#000",padding:"10px",margin:"0 0 10px",border:"1px solid #000",position:"relative",boxShadow:"0px 0px 9px 1px rgba(252, 255, 255, 0.16)"},key:n},m.a.createElement(b.a,{to:"/browse/".concat(e.state._id,"/").concat(a._id),style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},m.a.createElement("div",{style:{display:"flex",alignItems:"center"}},m.a.createElement("img",{src:"assets/images/img/product/con1.png",alt:"Course image",style:{maxWidth:"70px"}}),m.a.createElement("div",{style:{marginLeft:"10px"}},m.a.createElement("h4",{style:{margin:0,fontWeight:"600",fontSize:"13px"},className:t.title},a.name),m.a.createElement("small",{style:{color:"#828caa",marginTop:"10px",display:"inherit",textAlign:"left"}},"3 Hours"))),-1!==e.state.activities.indexOf(a._id)?m.a.createElement("div",{style:{background:"#73ef9f",color:"#fff",width:"40px",height:"40px",display:"inline-block",borderRadius:"50%",lineHeight:"40px",textAlign:"center",fontSize:"20px",position:"absolute",top:"50%",right:"20px",transform:"translateY(-50%)"}},m.a.createElement(f.B,{className:"w-40 h-40"},"check")):m.a.createElement("div",{style:{background:"#dad5fe",color:"#fff",width:"40px",height:"40px",display:"inline-block",borderRadius:"50%",lineHeight:"40px",textAlign:"center",fontSize:"20px",position:"absolute",top:"50%",right:"20px",transform:"translateY(-50%)"}})))})))))))}}]),t}(u.Component);t.default=Object(g.withStyles)(function(e){return{root:{background:"black","& .container":{padding:"0px 10px"},"& section":{"& .section-head":{"& .title-main":{margin:"0",fontSize:"16px",color:"#9c9fa9",flex:8},display:"flex",alignItems:"center",marginTop:"30px",marginBottom:"15px"}}},title:{color:"white"}}},{withTheme:!0})(Object(d.b)(function(e){return{user:e.auth.user}},function(e){return Object(v.c)({showMessage:E.j},e)})(k))}}]);