(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[947],{11021:function(Se,V,s){"use strict";s.r(V),s.d(V,{default:function(){return Ze}});var xe=s(57338),X=s(25084),E=s(32059),we=s(57663),P=s(71577),M=s(2824),F=s(11849),Pe=s(34792),m=s(48086),h=s(3182),q=s(94043),l=s.n(q),_=s(49101),y=s(67294),f=s(43581),ee=s(81907),ae=s(85224),re=s(65319),se=s(37476),L=s(90672),R=s(52688),te=s(96459),Re=s(71194),ne=s(5644),x=s(3843),le=s(5966),$=s(64317),ue=s(86615),ie=s(22452),e=s(85893),de=function(t){var r=(0,f.YB)();return(0,e.jsxs)(x.Z,{stepsProps:{size:"small"},stepsFormRender:function(i,a){return(0,e.jsx)(ne.Z,{width:640,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:r.formatMessage({id:"pages.searchTable.updateForm.ruleConfig",defaultMessage:"\u89C4\u5219\u914D\u7F6E"}),visible:t.updateModalVisible,footer:a,onCancel:function(){t.onCancel()},children:i})},onFinish:t.onSubmit,children:[(0,e.jsxs)(x.Z.StepForm,{initialValues:{name:t.values.name,desc:t.values.desc},title:r.formatMessage({id:"pages.searchTable.updateForm.basicConfig",defaultMessage:"\u57FA\u672C\u4FE1\u606F"}),children:[(0,e.jsx)(le.Z,{name:"name",label:r.formatMessage({id:"pages.searchTable.updateForm.ruleName.nameLabel",defaultMessage:"\u89C4\u5219\u540D\u79F0"}),width:"md",rules:[{required:!0,message:(0,e.jsx)(f._H,{id:"pages.searchTable.updateForm.ruleName.nameRules",defaultMessage:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0\uFF01"})}]}),(0,e.jsx)(L.Z,{name:"desc",width:"md",label:r.formatMessage({id:"pages.searchTable.updateForm.ruleDesc.descLabel",defaultMessage:"\u89C4\u5219\u63CF\u8FF0"}),placeholder:r.formatMessage({id:"pages.searchTable.updateForm.ruleDesc.descPlaceholder",defaultMessage:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"}),rules:[{required:!0,message:(0,e.jsx)(f._H,{id:"pages.searchTable.updateForm.ruleDesc.descRules",defaultMessage:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u89C4\u5219\u63CF\u8FF0\uFF01"}),min:5}]})]}),(0,e.jsxs)(x.Z.StepForm,{initialValues:{target:"0",template:"0"},title:r.formatMessage({id:"pages.searchTable.updateForm.ruleProps.title",defaultMessage:"\u914D\u7F6E\u89C4\u5219\u5C5E\u6027"}),children:[(0,e.jsx)($.Z,{name:"target",width:"md",label:r.formatMessage({id:"pages.searchTable.updateForm.object",defaultMessage:"\u76D1\u63A7\u5BF9\u8C61"}),valueEnum:{0:"\u8868\u4E00",1:"\u8868\u4E8C"}}),(0,e.jsx)($.Z,{name:"template",width:"md",label:r.formatMessage({id:"pages.searchTable.updateForm.ruleProps.templateLabel",defaultMessage:"\u89C4\u5219\u6A21\u677F"}),valueEnum:{0:"\u89C4\u5219\u6A21\u677F\u4E00",1:"\u89C4\u5219\u6A21\u677F\u4E8C"}}),(0,e.jsx)(ue.Z.Group,{name:"type",label:r.formatMessage({id:"pages.searchTable.updateForm.ruleProps.typeLabel",defaultMessage:"\u89C4\u5219\u7C7B\u578B"}),options:[{value:"0",label:"\u5F3A"},{value:"1",label:"\u5F31"}]})]}),(0,e.jsxs)(x.Z.StepForm,{initialValues:{type:"1",frequency:"month"},title:r.formatMessage({id:"pages.searchTable.updateForm.schedulingPeriod.title",defaultMessage:"\u8BBE\u5B9A\u8C03\u5EA6\u5468\u671F"}),children:[(0,e.jsx)(ie.Z,{name:"time",width:"md",label:r.formatMessage({id:"pages.searchTable.updateForm.schedulingPeriod.timeLabel",defaultMessage:"\u5F00\u59CB\u65F6\u95F4"}),rules:[{required:!0,message:(0,e.jsx)(f._H,{id:"pages.searchTable.updateForm.schedulingPeriod.timeRules",defaultMessage:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\uFF01"})}]}),(0,e.jsx)($.Z,{name:"frequency",label:r.formatMessage({id:"pages.searchTable.updateForm.object",defaultMessage:"\u76D1\u63A7\u5BF9\u8C61"}),width:"md",valueEnum:{month:"\u6708",week:"\u5468"}})]})]})},oe=de,U=s(5029),D=s(11238);function ce(o,t){return H.apply(this,arguments)}function H(){return H=(0,h.Z)(l().mark(function o(t,r){return l().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,D.ZP)("/api/os/task-by-user",(0,F.Z)({method:"post",data:(0,F.Z)({},t)},r||{})));case 1:case"end":return i.stop()}},o)})),H.apply(this,arguments)}function fe(o,t){return A.apply(this,arguments)}function A(){return A=(0,h.Z)(l().mark(function o(t,r){return l().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,D.ZP)("/api/os/complete-task",(0,F.Z)({method:"post",data:(0,F.Z)({},t)},r||{})));case 1:case"end":return i.stop()}},o)})),A.apply(this,arguments)}function pe(o,t){return B.apply(this,arguments)}function B(){return B=(0,h.Z)(l().mark(function o(t,r){var n,i,a,d,w;return l().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log(t),n=t.transferencia||!1,i=n.transferencia,a=n.inventario,d=n.electronico,w={variables:{transferencia:{value:i},inventario:{value:a},electronico:{value:d}}},v.abrupt("return",(0,D.ZP)("/api/os/start",(0,F.Z)({method:"post",data:w},r||{})));case 4:case"end":return v.stop()}},o)})),B.apply(this,arguments)}var me=function(){var o=(0,h.Z)(l().mark(function t(r){var n;return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=m.default.loading("Adding"),a.prev=1,a.next=4,pe((0,F.Z)({},r));case 4:return n(),m.default.success("Added successfully"),a.abrupt("return",!0);case 9:return a.prev=9,a.t0=a.catch(1),n(),m.default.error("Adding failed, please try again!"),a.abrupt("return",!1);case 14:case"end":return a.stop()}},t,null,[[1,9]])}));return function(r){return o.apply(this,arguments)}}(),he=function(){var o=(0,h.Z)(l().mark(function t(r){var n;return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=m.default.loading("Configuring"),a.prev=1,a.next=4,(0,U.D7)({name:r.name,desc:r.description,key:r.id});case 4:return n(),m.default.success("Configuration is successful"),a.abrupt("return",!0);case 9:return a.prev=9,a.t0=a.catch(1),n(),m.default.error("Configuration failed, please try again!"),a.abrupt("return",!1);case 14:case"end":return a.stop()}},t,null,[[1,9]])}));return function(r){return o.apply(this,arguments)}}(),ve=function(){var o=(0,h.Z)(l().mark(function t(r,n){var i;return l().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(r){d.next=2;break}return d.abrupt("return",!0);case 2:return i=m.default.loading("Configuring"),console.log(r.id),d.prev=4,d.next=7,fe({processInstanceId:r.id});case 7:return i(),n.current&&n.current.reload(),m.default.success("Complete is successful"),d.abrupt("return",!0);case 13:return d.prev=13,d.t0=d.catch(4),i(),m.default.error("Complete failed, please try again!"),d.abrupt("return",!1);case 18:case"end":return d.stop()}},t,null,[[4,13]])}));return function(r,n){return o.apply(this,arguments)}}(),ge=function(){var o=(0,h.Z)(l().mark(function t(r){var n;return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(n=m.default.loading("deleting"),r){a.next=3;break}return a.abrupt("return",!0);case 3:return a.prev=3,a.next=6,(0,U.DV)({key:r.map(function(d){return d.id})});case 6:return n(),m.default.success("Deleted successfully and will refresh soon"),a.abrupt("return",!0);case 11:return a.prev=11,a.t0=a.catch(3),n(),m.default.error("Delete failed, please try again"),a.abrupt("return",!1);case 16:case"end":return a.stop()}},t,null,[[3,11]])}));return function(r){return o.apply(this,arguments)}}(),be=function(){var t,r=(0,y.useState)(!1),n=(0,M.Z)(r,2),i=n[0],a=n[1],d=(0,f.tT)("@@initialState"),w=d.initialState,I=w||{},v=I.currentUser,je=(0,y.useState)(!1),N=(0,M.Z)(je,2),Fe=N[0],O=N[1],ye=(0,y.useState)(!1),k=(0,M.Z)(ye,2),G=k[0],W=k[1],Z=(0,y.useRef)(),Te=(0,y.useState)(),Y=(0,M.Z)(Te,2),g=Y[0],C=Y[1],Me=(0,y.useState)([]),z=(0,M.Z)(Me,2),S=z[0],K=z[1],J=(v==null?void 0:v.access)==="admin",Ce=(0,f.YB)(),Q=[{title:(0,e.jsx)(f._H,{id:"pages.searchTable.updateForm.ruleName.nameLabel",defaultMessage:"Task"}),dataIndex:"name",tip:"The rule name is the unique key",render:function(c,u){return(0,e.jsx)("a",{onClick:function(){C(u),W(!0)},children:c})}},{title:(0,e.jsx)(f._H,{id:"pages.searchTable.titleDesc",defaultMessage:"Description"}),dataIndex:"description",valueType:"textarea"},{title:"Usuario",dataIndex:"assignee",hideInTable:!J},{title:(0,e.jsx)(f._H,{id:"pages.searchTable.titleUpdatedAt",defaultMessage:"Last scheduled time"}),sorter:!0,dataIndex:"created",valueType:"dateTime"},{title:(0,e.jsx)(f._H,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(c,u){return[(0,e.jsx)("a",{onClick:function(){Z.current&&ve(u,Z),C(u)},children:(0,e.jsx)(f._H,{id:"pages.searchTable.complete",defaultMessage:"Complete"})},"complete")]}}];return(0,e.jsxs)(ee.ZP,{children:[(0,e.jsx)(re.ZP,(t={headerTitle:Ce.formatMessage({id:"pages.searchTable.title",defaultMessage:"Enquiry form"}),actionRef:Z,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return J?[(0,e.jsxs)(P.Z,{type:"primary",onClick:function(){a(!0)},children:[(0,e.jsx)(_.Z,{})," ",(0,e.jsx)(f._H,{id:"pages.searchTable.new",defaultMessage:"New"})]},"primary")]:[]},request:(0,h.Z)(l().mark(function p(){return l().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",ce({username:v==null?void 0:v.access}));case 1:case"end":return u.stop()}},p)})),columns:Q},(0,E.Z)(t,"search",!1),(0,E.Z)(t,"rowSelection",{onChange:function(c,u){K(u)}}),t)),(S==null?void 0:S.length)>0&&(0,e.jsxs)(ae.Z,{extra:(0,e.jsxs)("div",{children:[(0,e.jsx)(f._H,{id:"pages.searchTable.chosen",defaultMessage:"Chosen"})," ",(0,e.jsx)("a",{style:{fontWeight:600},children:S.length})," ",(0,e.jsx)(f._H,{id:"pages.searchTable.item",defaultMessage:"\u9879"})]}),children:[(0,e.jsx)(P.Z,{onClick:(0,h.Z)(l().mark(function p(){var c,u;return l().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,ge(S);case 2:K([]),(c=Z.current)===null||c===void 0||(u=c.reloadAndRest)===null||u===void 0||u.call(c);case 4:case"end":return T.stop()}},p)})),children:(0,e.jsx)(f._H,{id:"pages.searchTable.batchDeletion",defaultMessage:"Batch deletion"})}),(0,e.jsx)(P.Z,{type:"primary",children:(0,e.jsx)(f._H,{id:"pages.searchTable.batchApproval",defaultMessage:"Batch approval"})})]}),(0,e.jsxs)(se.Z,{title:"Nueva Orden de servicio",width:"400px",visible:i,onVisibleChange:a,onFinish:function(){var p=(0,h.Z)(l().mark(function c(u){var j;return l().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,me(u);case 2:j=b.sent,j&&(a(!1),Z.current&&Z.current.reload());case 4:case"end":return b.stop()}},c)}));return function(c){return p.apply(this,arguments)}}(),children:[(0,e.jsx)(L.Z,{width:"md",name:"comment",label:"Anotaci\xF3n"}),(0,e.jsx)(R.Z,{name:"transferencia",label:"Es transferencia?"}),(0,e.jsx)(R.Z,{name:"inventario",label:"Hay inventario?"}),(0,e.jsx)(R.Z,{name:"electronico",label:"Es medio electr\xF3nico?"})]}),(0,e.jsx)(oe,{onSubmit:function(){var p=(0,h.Z)(l().mark(function c(u){var j;return l().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,he(u);case 2:j=b.sent,j&&(O(!1),C(void 0),Z.current&&Z.current.reload());case 4:case"end":return b.stop()}},c)}));return function(c){return p.apply(this,arguments)}}(),onCancel:function(){O(!1),G||C(void 0)},updateModalVisible:Fe,values:g||{}}),(0,e.jsx)(X.Z,{width:600,visible:G,onClose:function(){C(void 0),W(!1)},closable:!1,children:(g==null?void 0:g.name)&&(0,e.jsx)(te.Z,{column:2,title:g==null?void 0:g.name,request:(0,h.Z)(l().mark(function p(){return l().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",{data:g||{}});case 1:case"end":return u.stop()}},p)})),params:{id:g==null?void 0:g.name},columns:Q})})]})},Ze=be}}]);
