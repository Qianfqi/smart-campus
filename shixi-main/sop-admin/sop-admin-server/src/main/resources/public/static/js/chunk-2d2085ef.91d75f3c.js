(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2085ef"],{a505:function(e,o,a){"use strict";a.r(o);var t=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"app-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchFormData,size:"mini"}},[a("el-form-item",{attrs:{label:"角色码"}},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:!0,placeholder:"输入角色码"},model:{value:e.searchFormData.roleCode,callback:function(o){e.$set(e.searchFormData,"roleCode",o)},expression:"searchFormData.roleCode"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.loadTable}},[e._v("查询")])],1)],1),e._v(" "),a("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:e.onAdd}},[e._v("新增角色")]),e._v(" "),a("el-table",{attrs:{data:e.pageInfo.rows,border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"roleCode",label:"角色码",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"description",label:"角色描述",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtCreate",label:"添加时间",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtModified",label:"修改时间",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(o){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.onTableUpdate(o.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.onTableDelete(o.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{"margin-top":"5px"},attrs:{background:"","current-page":e.searchFormData.pageIndex,"page-size":e.searchFormData.pageSize,"page-sizes":[5,10,20,40],total:e.pageInfo.total,layout:"total, sizes, prev, pager, next"},on:{"size-change":e.onSizeChange,"current-change":e.onPageIndexChange}}),e._v(" "),a("el-dialog",{attrs:{title:e.roleDialogTitle,visible:e.roleDialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(o){e.roleDialogVisible=o},close:function(o){return e.resetForm("roleForm")}}},[a("el-form",{ref:"roleForm",attrs:{rules:e.roleDialogFormRules,model:e.roleDialogFormData,"label-width":"120px",size:"mini"}},[a("el-form-item",{attrs:{prop:"roleCode",label:"角色码"}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:0===e.roleDialogFormData.id,expression:"roleDialogFormData.id === 0"}],model:{value:e.roleDialogFormData.roleCode,callback:function(o){e.$set(e.roleDialogFormData,"roleCode",o)},expression:"roleDialogFormData.roleCode"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.roleDialogFormData.id>0,expression:"roleDialogFormData.id > 0"}]},[e._v(e._s(e.roleDialogFormData.roleCode))])],1),e._v(" "),a("el-form-item",{attrs:{prop:"description",label:"角色描述"}},[a("el-input",{model:{value:e.roleDialogFormData.description,callback:function(o){e.$set(e.roleDialogFormData,"description",o)},expression:"roleDialogFormData.description"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(o){e.roleDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.onRoleDialogSave}},[e._v("保 存")])],1)],1)],1)},l=[],i={data:function(){return{searchFormData:{roleCode:"",pageIndex:1,pageSize:10},pageInfo:{rows:[],total:0},roleDialogVisible:!1,roleDialogTitle:"",roleDialogFormData:{id:0,roleCode:"",description:""},roleDialogFormRules:{roleCode:[{required:!0,message:"不能为空",trigger:"blur"},{min:1,max:64,message:"长度在 1 到 64 个字符",trigger:"blur"}],description:[{max:64,message:"不能超过 64 个字符",trigger:"blur"}]}}},created:function(){this.loadTable()},methods:{loadTable:function(){this.post("role.page",this.searchFormData,function(e){this.pageInfo=e.data})},onTableUpdate:function(e){var o=this;this.roleDialogTitle="修改角色",this.roleDialogVisible=!0,this.$nextTick(function(){Object.assign(o.roleDialogFormData,e)})},onTableDelete:function(e){this.confirm("确认要删除角色【".concat(e.roleCode,"】吗？"),function(o){var a={id:e.id};this.post("role.del",a,function(){o(),this.tip("删除成功"),this.loadTable()})})},onRoleDialogSave:function(){var e=this;this.$refs.roleForm.validate(function(o){if(o){var a=e.roleDialogFormData.id?"role.update":"role.add";e.post(a,e.roleDialogFormData,function(){this.roleDialogVisible=!1,this.loadTable()})}})},onSizeChange:function(e){this.searchFormData.pageSize=e,this.loadTable()},onAdd:function(){this.roleDialogTitle="新增角色",this.roleDialogVisible=!0,this.roleDialogFormData.id=0},onPageIndexChange:function(e){this.searchFormData.pageIndex=e,this.loadTable()}}},r=i,n=a("2877"),s=Object(n["a"])(r,t,l,!1,null,null,null);o["default"]=s.exports}}]);