webpackJsonp([0],{"1uuo":function(e,t){},"70jW":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var r=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(e){n("1uuo")},"data-v-d8ec41bc",null).exports,l={name:"todo-item",props:{todo:{type:Object,required:!0},checkAll:{type:Boolean,required:!0}},data:function(){return{id:this.todo.id,title:this.todo.title,completed:this.todo.completed,editing:this.todo.editing,beforeEditCache:""}},created:function(){eventBus.$on("pluralize",this.handlePluralize)},beforeDestroy:function(){eventBus.$off("pluralize",this.handlePluralize)},watch:{checkAll:function(){this.completed=!!this.checkAll||this.todo.completed}},directives:{focus:{inserted:function(e){e.focus()}}},methods:{removeTodo:function(e){eventBus.$emit("removedTodo",e)},editTodo:function(){this.beforeEditCache=this.title,this.editing=!0},doneEdit:function(){""==this.title.trim()&&(this.title=this.beforeEditCache),this.editing=!1,eventBus.$emit("finishedEdit",{id:this.id,title:this.title,completed:this.completed,editing:this.editing})},cancelEdit:function(){this.title=this.beforeEditCache,this.editing=!1},pluralize:function(){eventBus.$emit("pluralize")},handlePluralize:function(){this.title=this.title+"s",eventBus.$emit("finishedEdit",{id:this.id,title:this.title,completed:this.completed,editing:this.editing})}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"todo-item"},[n("div",{staticClass:"todo-item-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?e._i(e.completed,null)>-1:e.completed},on:{change:[function(t){var n=e.completed,i=t.target,o=!!i.checked;if(Array.isArray(n)){var r=e._i(n,null);i.checked?r<0&&(e.completed=n.concat([null])):r>-1&&(e.completed=n.slice(0,r).concat(n.slice(r+1)))}else e.completed=o},e.doneEdit]}}),e._v(" "),e.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"},{name:"focus",rawName:"v-focus"}],staticClass:"todo-item-edit",attrs:{type:"text"},domProps:{value:e.title},on:{blur:e.doneEdit,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doneEdit(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cancelEdit(t)}],input:function(t){t.target.composing||(e.title=t.target.value)}}}):n("div",{staticClass:"todo-item-label",class:{completed:e.completed},on:{dblclick:e.editTodo}},[e._v(e._s(e.title))])]),e._v(" "),n("div",[n("span",{staticClass:"remove-item",on:{click:function(t){return e.removeTodo(e.todo.id)}}},[e._v("×")])])])},staticRenderFns:[]},d=n("VU/8")(l,s,!1,null,null,null).exports,a={name:"todo-remaining",props:{remaining:{type:Number,required:!0}}},c={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v(this._s(this.remaining)+" items left")])},staticRenderFns:[]},u=n("VU/8")(a,c,!1,null,null,null).exports,h={name:"todo-check-all",props:{anyRemaining:{type:Boolean,required:!0}},methods:{allChecked:function(){eventBus.$emit("checkAllChanged",this.anyRemaining)}}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("label",[t("input",{attrs:{type:"checkbox"},domProps:{checked:!this.anyRemaining},on:{change:this.allChecked}}),this._v(" Check All\n  ")])])},staticRenderFns:[]},f=n("VU/8")(h,m,!1,null,null,null).exports,v={name:"todo-filtered",data:function(){return{filter:"all"}},methods:{changeFilter:function(e){this.filter=e,eventBus.$emit("filterChanged",e)}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{class:{active:"all"==e.filter},on:{click:function(t){return e.changeFilter("all")}}},[e._v("All")]),e._v(" "),n("button",{class:{active:"active"==e.filter},on:{click:function(t){return e.changeFilter("active")}}},[e._v("Active")]),e._v(" "),n("button",{class:{active:"completed"==e.filter},on:{click:function(t){return e.changeFilter("completed")}}},[e._v("Completed")])])},staticRenderFns:[]},_=n("VU/8")(v,p,!1,null,null,null).exports,g={name:"todo-clear-completed",props:{showClearCompletedButton:{type:Boolean,required:!0}},methods:{clearCompleted:function(){eventBus.$emit("clearCompletedTodos")}}},k={render:function(){var e=this.$createElement,t=this._self._c||e;return this.showClearCompletedButton?t("button",{on:{click:this.clearCompleted}},[this._v("Clear Completed")]):this._e()},staticRenderFns:[]},C={name:"todo-list",components:{TodoItem:d,TodoItemsRemaining:u,TodoCheckAll:f,TodoFiltered:_,TodoClearCompleted:n("VU/8")(g,k,!1,null,null,null).exports},data:function(){return{newTodo:"",idForTodo:3,filter:"all",todos:[{id:1,title:"Find a new job",completed:!0,editing:!1},{id:2,title:"Clean the house",completed:!1,editing:!1}]}},created:function(){var e=this;eventBus.$on("removedTodo",function(t){return e.removeTodo(t)}),eventBus.$on("finishedEdit",function(t){return e.finishedEdit(t)}),eventBus.$on("checkAllChanged",function(t){return e.checkAllTodos(t)}),eventBus.$on("filterChanged",function(t){return e.filter=t}),eventBus.$on("clearCompletedTodos",function(){return e.clearCompleted()})},beforeDestroy:function(){eventBus.$off("removedTodo"),eventBus.$off("finishedEdit"),eventBus.$off("checkAllChanged"),eventBus.$off("filterChanged"),eventBus.$off("clearCompletedTodos")},computed:{remaining:function(){return this.todos.filter(function(e){return!e.completed}).length},anyRemaining:function(){return 0!=this.remaining},todosFiltered:function(){return"all"==this.filter?this.todos:"active"==this.filter?this.todos.filter(function(e){return!e.completed}):"completed"==this.filter?this.todos.filter(function(e){return e.completed}):this.todos},showClearCompletedButton:function(){return this.todos.filter(function(e){return e.completed}).length>0}},methods:{addTodo:function(){0!=this.newTodo.trim().length&&(this.todos.push({id:this.idForTodo,title:this.newTodo,completed:!1}),this.newTodo="",this.idForTodo++)},removeTodo:function(e){var t=this.todos.findIndex(function(t){return t.id==e});this.todos.splice(t,1)},checkAllTodos:function(){this.todos.forEach(function(e){return e.completed=event.target.checked})},clearCompleted:function(){this.todos=this.todos.filter(function(e){return!e.completed})},finishedEdit:function(e){var t=this.todos.findIndex(function(t){return t.id==e.id});this.todos.splice(t,1,e)}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],staticClass:"todo-input",attrs:{type:"text",placeholder:"Type here new todo..."},domProps:{value:e.newTodo},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}}),e._v(" "),n("transition-group",{attrs:{name:"fade","enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},e._l(e.todosFiltered,function(t){return n("todo-item",{key:t.id,attrs:{todo:t,checkAll:!e.anyRemaining}})}),1),e._v(" "),n("div",{staticClass:"extra-container"},[n("todo-check-all",{attrs:{anyRemaining:e.anyRemaining}}),e._v(" "),n("todo-items-remaining",{attrs:{remaining:e.remaining}})],1),e._v(" "),n("div",{staticClass:"extra-container"},[n("todo-filtered"),e._v(" "),n("div",[n("transition",{attrs:{name:"fade"}},[n("todo-clear-completed",{attrs:{showClearCompletedButton:e.showClearCompletedButton}})],1)],1)],1)],1)},staticRenderFns:[]};var T={name:"App",components:{HelloWorld:r,TodoList:n("VU/8")(C,y,!1,function(e){n("w660")},null,null).exports}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container",attrs:{id:"app"}},[t("todo-list")],1)},staticRenderFns:[]};var w=n("VU/8")(T,b,!1,function(e){n("70jW")},null,null).exports;window.eventBus=new i.a,i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:w},template:"<App/>"})},w660:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.753384a1d9020f934d32.js.map