import worker from '@jsc/danmaku/worker-loader/inline';

// 运行在work中的弹幕解析器，可直接从B站新版脚本中提取更新
export default <new () => Worker><unknown>function () {
  return worker(`/*! #metadata# @jsc/video: 2.87.0-5980467e (2022-09-20T10:03:56.417Z) */!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="//s1.hdslb.com/bfs/static/player/main/",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var a=function(e,t){var r={};for(var a in e)e.hasOwnProperty(a)&&(r[a]=e[a]);for(var a in t)t.hasOwnProperty(a)&&(r[a]=t[a]);return r},n=function(e,t,r){return r||(e=e.replace(/&/g,"").replace(/</g,"").replace(/>/g,"").replace(/"/g,"").replace(/\'/g,"").replace(/\\//g,"").replace(/:/g,"").replace(/;/g,"")),e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\'/g,"&#x27;").replace(/\\//g,"&#x2f;").replace(/ /g,t?" ":"&nbsp;").replace(/\\n/g,"<br>")};Object.create;function i(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],a=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,n,i=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)o.push(a.value)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return o}Object.create;var s=function(){function e(){this.class_names=["text","button","path"],this.variableTable={},this.varibaleRegOrder=0,this.templateTable={},this.tpl_name_id=0,this.obj_name_id=0,this.allowsVariable=[]}return e.prototype.on_String_value=function(e){var t,r,a=[];try{for(var n=i(e),o=n.next();!o.done;o=n.next()){var s=o.value;switch(s.type){case"char":var u=null;switch(s.value.charAt(1)){case"n":u="\\n";break;case"r":u="\\r";break;case"t":u="\\t";break;case"\\\\":u="\\\\";break;case"\'":u="\'";break;case\'"\':u=\'"\';break;default:u=s.charAt(1)}a.push(u);break;case"unicode":var p=s.value.substr(2);a.push(String.fromCharCode(parseInt(p,16)));break;case"ascii":p=s.value.substr(2);a.push(String.fromCharCode(parseInt(p,16)));break;case"seg":a.push(s.value)}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}return new l({type:"String",value:a.join("")})},e.prototype.on_Num_value=function(e,t,r){return new l({type:"Num",value:{numType:(r="%"===r)?"percent":"number",value:(e="+"===e?1:-1)*parseFloat(t)}})},e.prototype.on_Time_value=function(e){for(var t=!0,r=0,a=0,n="",i=null;null!=(i=t?e.match(/^(\\d*\\.?\\d+(?:[eE][\\+\\-]?\\d+)?)(.*)$/):e.match(/^([hms]+)(.*)$/));){if(n=i[1],t)a=parseFloat(n);else switch(n){case"h":r+=3600*a*1e3;break;case"m":r+=60*a*1e3;break;case"s":r+=1e3*a;break;case"ms":r+=a}e=i[2],t=!t}return new l({type:"Time",value:r})},e.prototype.on_Hex_value=function(e){return new l({type:"Hex",value:parseInt(e.substr(2),16)})},e.prototype.on_Object_value=function(e,t){return new l({type:"Object",value:t})},e.prototype.on_Array_value=function(e){return new l({type:"Array",value:e})},e.prototype.on_Variable_value=function(e){return new l({type:"Variable",value:e})},e.prototype.on_KeyValue_list=function(e,t,r){return void 0===r&&(r=null),null==r&&(r=this.peek_allows_varable()),t},e.prototype.on_let_object_binding=function(e,t){t.obj_type;var r=t.name\n;return this.unregister_variable(r),t.name=e,this.register_variable(e,t),t},e.prototype.on_def_object=function(e,t,r){var a={type:"Def"+this.capitalization_str(e),obj_type:e,name:t,attrs:{}},n=this.on_KeyValue_list(e,r,!1);return this.fill_kv_obj(a.attrs,n),this.register_variable(t,a),a},e.prototype.on_def_template=function(e,t,r,a){var n={type:"template",obj_type:e,name:t,attrs:{},tpl_list:[]},i=this.on_KeyValue_list(e,a,!0);return this.check_variables_on_template_body(r,i),this.fill_kv_obj(n.attrs,a),n.tpl_list=r,this.register_template(t,n),n},e.prototype.on_object_modification=function(e,t){if(!this.has_variable_obj(e)){if(-1!==this.class_names.indexOf(e)){var r=this.new_variable_name_of_template_application(e);return this.on_def_object(e,r,t)}return null}var a=this.get_variable_obj(e),n=a.obj_type,i=this.new_variable_name_of_variable_modification(e),o={type:"Def"+this.capitalization_str(n),obj_type:n,name:i,attrs:{}},s=this.on_KeyValue_list(n,t,!1),l=this.merge_list(a.attrs,s);return this.fill_kv_obj(o.attrs,l),this.register_variable(i,o),o},e.prototype.on_tmp_object_modification=function(e,t){var r=e.name,a=this.on_object_modification(r,t);return this.unregister_variable(r),a},e.prototype.on_template_application=function(e,t){var r=this.get_template_obj(e);if(null==r)return null;var a=r.obj_type,n=this.new_variable_name_of_template_application(e),i={type:"Def"+this.capitalization_str(a),obj_type:a,name:n,attrs:{}},o=this.evaluation_template(r.attrs,r.tpl_list,t);return this.fill_kv_obj(i.attrs,o),this.register_variable(n,i),i},e.prototype.on_ArgList=function(e){var t,r,a=[],n=[];try{for(var s=i(e),l=s.next();!l.done;l=s.next()){var u=o(l.value,2),p=u[0],c=u[1];null==p?a.push(c):n.push([p,c])}}catch(e){t={error:e}}finally{try{l&&!l.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}return{naked_params:a,named_params:n}},e.prototype.on_unit_set_expr=function(e,t,r){var a=o(r,2),n={type:"Unit",duration:a[0],default_easing:a[1],target_name:e,attrs:{}},i=this.get_variable_type(e),s=this.on_KeyValue_list(i,t,!1);return this.fill_kv_obj(n.attrs,s),n},e.prototype.on_temporary_target_set_expr=function(e,t,r){var a=e.obj_type,n=e.name,i=o(r,2),s={type:"Unit",duration:i[0],default_easing:i[1],target_name:n,attrs:{}},l=this.on_KeyValue_list(a,t,!1);return this.fill_kv_obj(s.attrs,l),s},e.prototype.on_then_set_expr=function(e,t){return"Serial"===e.type?(e.items.push(t),e):{type:"Serial",items:[e,t]}},e.prototype.on_group_set_expr=function(e){return{type:"Parallel",items:e}},e.prototype.has_variable_obj=function(e){return this.variableTable.hasOwnProperty(e)},e.prototype.get_variable_obj=function(e){return this.variableTable.hasOwnProperty(e)?this.variableTable[e]:(console.error("var "+e+" is not defined."),null)},e.prototype.get_template_obj=function(e){return this.templateTable.hasOwnProperty(e)?this.templateTable[e]:(console.error("tpl "+e+" is not defined."),null)},e.prototype.get_variable_type=function(e){return this.get_variable_obj(e).obj_type},e.prototype.get_template_type=function(e){return this.get_template_obj(e).obj_type},e.prototype.fill_kv_obj=function(e,t){var r,a;try{for(var n=i(t),s=n.next();!s.done;s=n.next()){var l=o(s.value,2),u=l[0],p=l[1];e[u]=p}}catch(e){r={error:e}}finally{try{s&&!s.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}},e.prototype.merge_list=function(e,t){var r,a,n={};this.fill_kv_obj(n,t);var s=[];for(var l in e)n.hasOwnProperty(l)?s.push([l,n[l]]):s.push([l,e[l]]);try{for(var u=i(t),p=u.next();!p.done;p=u.next()){var c=o(p.value,2),h=(l=c[0],c[1]);e.hasOwnProperty(l)||s.push([l,h])}}catch(e){r={error:e}}finally{try{p&&!p.done&&(a=u.return)&&a.call(u)}finally{if(r)throw r.error}}return s},e.prototype.evaluation_template=function(e,t,r){var a,n,s,l,u=r.naked_params,p=r.named_params,c={},h=t.map((function(e,t){var r=o(e,2),a=r[0];r[1];return c[a]=t,{key:a,matched:!1}})),_={};try{for(var f=i(p),b=f.next();!b.done;b=f.next()){var y=o(b.value,2),v=y[0],d=y[1];_[v]=d,c.hasOwnProperty(v)?h[c[v]].matched=!0:console.error("看看命名参数是不是没有在定义参数里面..")}}catch(e){a={error:e}}finally{try{\nb&&!b.done&&(n=f.return)&&n.call(f)}finally{if(a)throw a.error}}var g=h.filter((function(e){return!e.matched}));g.length<u.length&&console.error("参数太多了..");for(var m=0;m<u.length&&m<g.length;m++){_[v=g[m].key]=u[m]}var k={};try{for(var T=i(t),j=T.next();!j.done;j=T.next()){var w=o(j.value,2);v=w[0],d=w[1];_.hasOwnProperty(v)?k[v]=_[v]:k[v]=d}}catch(e){s={error:e}}finally{try{j&&!j.done&&(l=T.return)&&l.call(T)}finally{if(s)throw s.error}}var x=[];for(var v in e){var S=e[v];if("Variable"===S.type){var O=S.value;k.hasOwnProperty(O)?x.push([v,k[O]]):console.error("eval template err: no variable named "+O+" is provided.")}else x.push([v,S])}return x},e.prototype.capitalization_str=function(e){return e.substr(0,1).toUpperCase()+e.substr(1)},e.prototype.new_variable_name_of_template_application=function(e){var t="tpl_"+e+"_"+this.tpl_name_id;return this.tpl_name_id+=1,t},e.prototype.new_variable_name_of_variable_modification=function(e){var t="obj_"+e+"_"+this.obj_name_id;return this.obj_name_id+=1,t},e.prototype.register_variable=function(e,t){this.variableTable.hasOwnProperty(e)&&console.log("var "+e+" is already exists, and will be shadowed."),t._reg_order=this.varibaleRegOrder,this.variableTable[e]=t,this.varibaleRegOrder+=1},e.prototype.unregister_variable=function(e){delete this.variableTable[e]},e.prototype.register_template=function(e,t){this.templateTable.hasOwnProperty(e)&&console.log("tpl "+e+" is already exists, and will be shadowed."),this.templateTable[e]=t},e.prototype.on_enter_scope=function(){},e.prototype.on_leave_scope=function(){},e.prototype.on_enter_tpl=function(){this.allowsVariable.push(!0)},e.prototype.on_leave_tpl=function(){this.allowsVariable.pop()},e.prototype.peek_allows_varable=function(){return this.allowsVariable.length>0&&this.allowsVariable[this.allowsVariable.length-1]},e.prototype.check_variables_on_template_body=function(e,t){var r,a,n={};this.fill_kv_obj(n,t);try{for(var s=i(e),l=s.next();!l.done;l=s.next()){var u=o(l.value,2),p=(u[0],u[1]);if("Variable"===p.type){var c=p.value;n.hasOwnProperty(c)||console.error("varibale "+c+" in template\'s body is not present at arguments.")}}}catch(e){r={error:e}}finally{try{l&&!l.done&&(a=s.return)&&a.call(s)}finally{if(r)throw r.error}}},e.prototype.on_Result=function(e){var t=[];for(var r in this.variableTable)t.push(this.variableTable[r]);return t.sort((function(e,t){return e.obj_name_id-t.obj_name_id})),{sets:e.filter((function(e){return"SetExpr"===e.type})).map((function(e){return e.params})),defs:t}},e}(),l=function(){function e(e){this.type=e.type,this.value=e.value}return e.prototype.as_string=function(){if("String"===this.type)return this.value},e.prototype.as_integer=function(){return"Hex"===this.type?this.value:"Num"===this.type?Math.floor(this.value.value):void 0},e.prototype.as_number=function(){if("Num"===this.type)return this.value},e.prototype.as_time=function(){if("Time"===this.type)return this.value},e.prototype.as_object=function(){if("Object"===this.type)return this.value},e}(),u=4294967295,p=4294967295,c=function(){function e(){\nthis.transTable=[[!1,[4294967295,2,1],[[0,42,0],[43,43,1],[44,44,2]]],[!1,[4294967295,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3],[[0,2,0],[3,3,1],[4,4,2],[5,5,3],[6,6,4],[7,7,5],[8,8,6],[9,9,7],[10,10,8],[11,11,9],[12,12,10],[13,13,11],[14,14,12],[15,15,13],[16,16,14],[17,17,15],[18,18,16],[19,19,17],[20,20,18],[21,21,19],[22,22,20],[23,37,21],[38,38,22],[39,39,23],[40,41,24],[42,42,25],[43,44,0]]],[!1,[30,28,29,4294967295],[[0,0,0],[1,20,1],[21,21,2],[22,39,1],[40,40,3],[41,42,1],[43,44,3]]],[!1,[4294967295,31],[[0,41,0],[42,42,1],[43,44,0]]],[!1,[4294967295,4],[[0,39,0],[40,41,1],[42,44,0]]],[!1,[4294967295,14,37,36,35,34,33,32],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,31,0],[32,32,3],[33,34,4],[35,35,5],[36,37,6],[38,38,7],[39,39,1],[40,44,0]]],[!1,[4294967295,38],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!0],[!0],[!0],[!0],[!1,[4294967295,7,39],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,35,1],[36,36,2],[37,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,40],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,35,1],[36,36,2],[37,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,14,37,36,34,33,32],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,31,0],[32,32,3],[33,34,0],[35,35,4],[36,37,5],[38,38,6],[39,39,1],[40,44,0]]],[!1,[4294967295,7,41],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,31,1],[32,32,2],[33,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,42],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,35,1],[36,36,2],[37,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!0],[!0],[!0],[!0],[!0],[!1,[4294967295,7,43],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,30,1],[31,31,2],[32,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,44],[[0,6,0],[7,8,1],[9,13,0],[14,16,1],[17,17,2],[18,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!0],[!0],[!0],[!0],[!0],[!0],[!1,[45,4294967295,47,46],[[0,0,0],[1,1,1],[2,2,0],[3,14,1],[15,15,0],[16,20,1],[21,21,0],[22,27,1],[28,28,2],[29,30,0],[31,33,1],[34,34,3],[35,44,1]]],[!1,[31,48,4294967295],[[0,39,0],[40,40,1],[41,42,0],[43,44,2]]],[!1,[4294967295,38],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,49,50],[[0,15,0],[16,16,1],[17,19,0],[20,20,2],[21,21,0],[22,22,2],[23,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,51,53,52],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,37,0],[38,38,3],[39,39,1],[40,44,0]]],[!1,[4294967295,54],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,55,56],[[0,15,0],[16,16,1],[17,37,0],[38,38,2],[39,39,1],[40,44,0]]],[!1,[4294967295,57,58],[[0,15,0],[16,16,1],[17,37,0],[38,38,2],[39,39,1],[40,44,0]]],[!1,[4294967295,38,37,36,34,33],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,31,0],[32,32,3],[33,34,0],[35,35,4],[36,37,5],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,59],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,2],[16,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,60],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,2],[16,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,61],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,35,1],[36,36,2],[37,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,62],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,26,1],[27,27,2],[28,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,63],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,30,1],[31,31,2],[32,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,64],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,24,1],[25,25,2],[26,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!0],[!1,[4294967295,65],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,66],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,48],[[0,39,0],[40,40,1],[41,44,0]]],[!1,[4294967295,49,37,36,34],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,31,0],[32,32,3],[33,34,0],[35,35,4],[36,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,49],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,51,37,68,67,52],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,34,0],[35,35,3],[36,37,4],[38,38,5],[39,39,1],[40,44,0]]],[!1,[4294967295,69],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!0],[!1,[4294967295,54],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,55,37,34,70,56],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,34,0],[35,35,3],[36,37,4],[38,38,5],[39,39,1],[40,44,0]]],[!1,[4294967295,71],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,57,68,72,58],[[0,15,0],[16,16,1],[17,34,0],[35,35,2],[36,37,3],[38,38,4],[39,39,1],[40,44,0]]],[!1,[4294967295,73],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,74],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,29,1],[30,30,2],[31,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,75],[[0,6,0],[7,8,1],[9,13,0],[14,16,1],[17,17,2],[18,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,76],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,29,1],[30,30,2],[31,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,77],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,78],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,79,80],[[0,15,0],[16,16,1],[17,19,0],[20,20,2],[21,21,0],[22,22,2],[23,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,53],[[0,17,0],[18,18,1],[19,44,0]]],[!1,[4294967295,69,37,68,67],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,34,0],[35,35,3],[36,37,4],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,81,82],[[0,15,0],[16,16,1],[17,19,0],[20,20,2],[21,21,0],[22,22,2],[23,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,71,37,34,70],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,34,0],[35,35,3],[36,37,4],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,83,84],[[0,15,0],[16,16,1],[17,19,0],[20,20,2],[21,21,0],[22,22,2],[23,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,73,68,72],[[0,15,0],[16,16,1],[17,34,0],[35,35,2],[36,37,3],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,85],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,23,1],[24,24,2],[25,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,86],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,35,1],[36,36,2],[37,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!0],[!1,[4294967295,87],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,79,37,68],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,34,0],[35,35,3],[36,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,79],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,81,37,34],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,34,0],[35,35,3],[36,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,81],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,83,68],[[0,15,0],[16,16,1],[17,34,0],[35,35,2],[36,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,83],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,88],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!0]],\nthis.finalTable={4:1,5:3,6:26,7:30,8:5,9:7,10:6,11:27,12:30,13:30,14:3,15:30,16:30,17:19,18:22,19:23,20:29,21:20,22:30,23:30,24:24,25:28,26:21,27:25,28:12,29:11,31:0,34:2,36:2,37:2,38:3,39:30,40:30,41:30,42:30,43:30,44:30,45:8,48:0,49:3,53:2,54:4,59:13,60:14,61:30,62:15,63:30,64:30,74:18,75:30,76:30,77:10,85:16,86:17,88:9},this.inputTable=[[0,8,1],[9,9,41],[10,10,40],[11,11,1],[12,12,41],[13,13,40],[14,31,1],[32,32,41],[33,33,1],[34,34,21],[35,35,1],[36,36,23],[37,37,10],[38,38,1],[39,39,2],[40,40,9],[41,41,4],[42,42,1],[43,43,22],[44,44,19],[45,45,20],[46,46,38],[47,47,42],[48,48,39],[49,57,16],[58,58,1],[59,59,5],[60,60,1],[61,61,13],[62,63,1],[64,64,23],[65,68,26],[69,69,37],[70,70,26],[71,87,23],[88,88,33],[89,90,23],[91,91,12],[92,92,0],[93,93,11],[94,94,1],[95,95,23],[96,96,1],[97,97,8],[98,98,26],[99,99,7],[100,100,14],[101,101,36],[102,102,27],[103,103,23],[104,104,32],[105,107,23],[108,108,17],[109,109,35],[110,110,30],[111,111,25],[112,112,31],[113,113,23],[114,114,29],[115,115,18],[116,116,15],[117,117,28],[118,119,23],[120,120,34],[121,121,24],[122,122,23],[123,123,6],[124,124,1],[125,125,3],[126,65535,1]],this.initialTable={STRING:1,INITIAL:2}}return e.lexSeq=function(t){var r=new e;r.source=t;for(var a=[],n=r.token;"<$>"!==n;)a.push({token:n,text:r.yytext,start:r.startIdx,end:r.endIdx}),r.advance(),n=r.token;return a},e.prototype.yyrestart=function(e){void 0===e&&(e=null),null!=e&&(this.sourceString=e),this.ended=!1,this.start=0,this.oldStart=0,this.line=1,this.col=0,this.advanced=!0,this.tokenNameString=null,this.yyObject={},this.initialState="INITIAL"},Object.defineProperty(e.prototype,"source",{set:function(e){this.sourceString=e,this.yyrestart()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"token",{get:function(){return this.advanced&&(this.tokenNameString=this.next(),this.advanced=!1),this.tokenNameString},enumerable:!1,configurable:!0}),e.prototype.advance=function(){this.advanced=!0},Object.defineProperty(e.prototype,"startIdx",{get:function(){return this.oldStart},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"endIdx",{get:function(){return this.start},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"position",{get:function(){return[this.line,this.col]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"positionInfo",{get:function(){return this.token+"@row:"+this.position.join("col:")},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"yytext",{get:function(){return this.yyText},set:function(e){this.yyText=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"yyleng",{get:function(){return this.endIdx-this.startIdx},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"yy",{get:function(){return this.yyObject},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tokenName",{get:function(){return this.tokenNameString},enumerable:!1,configurable:!0}),e.prototype.next=function(){for(var e,t,r,a,n,i,o,s,l;;)for(e=null,t=null,r=0,a=this.start,n=this.start,i=p,s=u,l=this.start,o=this.transTable[0][1][this.initialInput];;){if(r=this.sourceString.charCodeAt(n),i!==p&&(13===r?(this.col=0,this.line++):10===r?13!==i&&(this.col=0,this.line++):this.col++),i=r,(t=this.trans(o,r))===u){if(a===l){if(this.start===this.sourceString.length){if(this.ended)throw new Error("已经到达末尾.");return this.ended=!0,"<$>"}throw new Error("意外的字符,line:"+this.position.join(",col:")+"of "+this.sourceString.substr(a,20))}switch(e=this.finalTable[s],this.start=l,this.oldStart=a,this.yyText=this.sourceString.substring(this.startIdx,this.endIdx),e){case 2:return"time";case 3:return"number";case 4:return"hex";case 5:return"+";case 6:return"-";case 7:return this.begin("STRING"),"str_start";case 8:return"str_esc_char";case 9:return"str_esc_unicode";case 10:return"str_esc_ascii";case 11:return this.begin("INITIAL"),"str_end";case 12:return"str_seg";case 13:return"set";case 14:return"let";case 15:return"def";case 16:return"apply";case 17:return"clone";case 18:return"then";case 19:return"=";case 20:return"("\n;case 21:return")";case 22:return"[";case 23:return"]";case 24:return"{";case 25:return"}";case 26:return".";case 27:return",";case 28:return";";case 29:return"%";case 30:return"id"}break}null!=(e=this.finalTable[t])&&(s=t,l=n+1),n+=1,o=t}},e.prototype.trans=function(e,t){if(isNaN(t))return u;if(t<this.inputTable[0][0]||t>this.inputTable[this.inputTable.length-1][1])throw new Error("输入超出有效范围,line:"+this.position.join(",col:"));if(!0===this.transTable[e][0])return u;var r=this.find(t,this.inputTable),a=this.find(r,this.transTable[e][2]);return this.transTable[e][1][a]},e.prototype.find=function(e,t){var r,a,n;for(r=0,a=t.length-1;;){if(t[n=r+a>>>1][0]<=e&&t[n][1]>=e)return t[n][2];t[n][0]>e?a=n-1:r=n+1}},e.prototype.begin=function(e){void 0===e&&(e=null),this.initialState=null!=e?e:"INITIAL"},Object.defineProperty(e.prototype,"initialState",{get:function(){return this.initialStateString},set:function(e){if(void 0===this.initialTable[e])throw new Error("未定义的起始状态:"+e);this.initialStateString=e,this.initialInput=this.initialTable[e]},enumerable:!1,configurable:!0}),e}(),h=function(){function e(){this.ast_helper=new s,this.actionTable=[null,{0:6,1:1,2:2,67:54,68:36,69:20,70:16,8:4,9:8,10:10,76:12,77:32,78:50,73:148,74:44,85:52,89:14,90:150,29:18,101:120,41:150,43:36,47:104,112:40,115:34,116:38,120:56,124:150,125:42},{0:6,2:9,67:54,4:22,69:20,70:16,8:4,9:8,10:10,76:12,77:32,14:9,73:148,18:9,85:52,78:50,24:28,25:9,90:150,74:44,29:18,68:36,89:14,36:26,101:120,41:150,43:36,47:104,112:40,115:34,116:38,120:56,124:150,125:42},{3:25,5:33,6:35,7:37,12:43,16:57,19:68,21:43,23:68,26:68,28:43,30:87,31:68,32:95,35:87,38:87,39:68,40:68,44:66,45:87,47:104,48:106,53:102,54:98,61:96,62:100,64:132,65:134,66:68,71:87,72:87,75:187,79:68,80:201,82:140,86:95,87:112,88:87,92:64,93:94,94:70,95:90,96:92,98:87,101:120,106:239,107:138,109:110,110:108,113:46,114:72,117:136,121:68,122:87},{0:6,2:11,67:54,4:22,69:20,70:16,8:4,9:8,10:10,11:41,68:36,13:49,14:11,73:148,18:11,20:65,77:32,78:50,124:150,24:28,25:11,90:150,27:81,92:161,29:18,33:135,34:30,91:229,36:26,74:44,85:52,76:12,41:150,89:14,43:36,101:120,46:161,47:104,112:40,115:34,99:161,120:56,116:38,125:42},{19:68,23:68,24:28,25:24,29:18,30:89,31:68,35:139,36:26,37:141,39:68,43:36,44:66,45:159,47:104,48:106,53:102,54:98,61:96,62:100,64:132,65:134,66:68,68:36,69:20,70:16,71:183,76:12,77:32,79:68,82:140,87:112,88:225,89:14,92:64,93:94,94:70,95:90,96:92,98:237,101:120,107:138,109:110,110:108,113:46,114:72,115:34,116:38,117:136,121:68,122:48,123:251},{0:6,2:13,67:54,4:22,69:20,70:16,8:4,9:8,10:10,76:12,77:32,14:13,73:148,18:13,85:52,78:50,24:28,25:13,90:150,74:44,29:18,68:36,89:14,36:26,101:120,41:150,43:36,47:104,112:40,115:34,116:38,120:56,124:150,125:42},{3:27,20:67,21:45,27:83,12:45,28:45,15:55},{64:132,65:134,67:54,94:70,117:136,72:185,120:56,111:243,78:50,82:140,85:52,22:71,87:112,26:68,92:64,93:94,86:80,95:90,32:80,33:137,100:84,101:120,38:143,40:68,107:138,44:66,109:110,110:108,47:104,48:106,96:92,114:72,108:76,53:102,54:98,55:173,56:74,57:78,58:82,59:86,60:88,61:96,62:100},{36:39,69:20,70:16,10:39,43:36,76:12,77:32,47:104,115:34,116:38,68:36,101:120,24:39,89:14,29:18},{64:132,65:134,117:136,118:144,77:197,82:140,83:146,84:215,87:112,92:64,93:94,94:231,95:90,96:92,100:84,101:120,107:138,109:110,110:108,47:104,48:106,53:102,54:98,119:142,57:175,58:82,59:86,60:88,61:96,62:100},{0:6,2:15,67:54,68:36,69:20,70:16,8:4,9:8,10:10,76:12,77:32,78:50,73:148,74:44,85:52,89:14,90:150,29:18,101:120,41:150,43:36,47:104,112:40,115:34,116:38,120:56,124:150,125:42},{0:6,2:17,67:54,68:36,69:20,70:16,8:4,9:8,10:10,76:12,77:32,78:50,73:148,74:44,85:52,89:14,90:150,29:18,101:120,41:150,43:36,47:104,112:40,115:34,116:38,120:56,124:150,125:42},{17:59,42:153,46:163},{32:97,75:97,52:97,86:97,80:97,106:97,43:97,68:97},{32:99,80:99,106:99,75:99,52:99,86:99},{32:118,49:114,50:116,52:118,86:118,80:118,106:118,75:118,63:177},{87:221},{32:101,80:101,106:101,75:101,52:101,86:101},{32:103,80:103,106:103,75:103,52:103,86:103},{32:105,97:105,52:105,86:105,80:105,106:105,75:105},{104:126,81:205,105:128,51:130,102:122,103:124},{\n104:126,81:207,105:128,51:130,102:122,103:124},{104:126,81:209,105:128,51:130,102:122,103:124},{104:126,81:211,105:128,51:130,102:122,103:124},{104:126,81:213,105:128,51:130,102:122,103:124},{32:107,80:107,75:107,86:107},{101:120,118:144,109:110,110:108,47:104,48:106,83:146,52:167,53:102,54:98,87:112,84:217,61:96,62:100,119:142},{67:54,85:52,120:56,41:149,90:149,124:149,78:50}],this.gotoTable={64:{52:171},29:{0:5},30:{0:7},31:{2:19},32:{2:21},33:{25:75,18:61,2:23,14:51},34:{79:199,23:73,19:63,39:145,40:147,121:247,26:79,66:179,31:93},35:{68:181,43:155},36:{3:29},37:{4:31},38:{14:53},39:{25:77},40:{12:47,21:69,28:85},41:{32:109,75:109,52:109,86:109,80:109,106:109,43:157,68:157},42:{97:233},43:{32:111,97:235,52:111,86:111,80:111,106:111,75:111},44:{124:253,41:151,90:227},45:{113:245},46:{122:249},47:{32:113},49:{75:189},50:{88:91,98:91,35:91,38:91,71:91,72:91,122:91,45:91,30:91},51:{75:191},52:{32:115,86:219},53:{32:117,86:117},54:{32:119,80:203,86:119},55:{32:121,80:121,106:241,75:193,52:169,86:121},56:{32:123,80:123,75:195,86:123},57:{32:125,80:125,106:125,75:125,52:125,86:125},58:{32:127,80:127,106:127,75:127,52:127,86:127},59:{32:129,80:129,106:129,75:129,52:129,86:129},60:{87:223},61:{51:165},62:{32:131,80:131,75:131,86:131},63:{32:133,80:133,75:133,86:133}},this.prodList=[[65,2],[29,1],[30,2],[30,0],[31,1],[31,1],[33,6],[33,6],[33,5],[33,3],[33,5],[37,0],[39,0],[38,2],[38,1],[36,3],[35,1],[35,3],[35,0],[42,1],[32,7],[32,12],[32,5],[45,0],[46,0],[40,4],[40,4],[40,3],[40,6],[48,3],[48,1],[48,0],[49,1],[34,2],[34,0],[50,3],[50,4],[47,1],[52,3],[52,1],[52,0],[53,1],[53,3],[54,1],[54,1],[51,1],[51,1],[51,1],[55,1],[55,1],[55,1],[55,1],[41,1],[58,1],[57,3],[60,1],[60,0],[59,1],[59,1],[59,0],[43,3],[61,2],[61,2],[61,2],[61,2],[61,0],[56,1],[56,1],[63,4],[62,3],[62,2],[64,3],[64,3],[64,1],[44,1],[44,0]],this.inputTable={"<$>":1,set:2,id:3,"{":4,"}":5,apply:6,"(":7,")":8,then:9,",":10,def:11,let:12,"=":13,time:14,hex:15,number:16,"%":17,"+":18,"-":19,str_start:20,str_end:21,str_esc_char:22,str_esc_unicode:23,str_esc_ascii:24,str_seg:25,"[":26,"]":27,";":28}}return e.parse=function(t){var r=new c;return r.source=t,(new e).parseLexer(r)},e.prototype.parseLexer=function(e){for(var t,r,a,n=[0],i=[];;){if(r=e.token,t=n[n.length-1],null==this.actionTable[this.inputTable[r]][t])throw new Error("Parse Error:"+e.positionInfo);if(1===(a=this.actionTable[this.inputTable[r]][t]))return i.pop();if(1==(1&a))i.push(e.yytext),n.push((a>>>1)-1),e.advance();else if(0==(1&a)){var o=a>>>1,s=this.prodList[o][1],l=null;switch(s>0&&(l=i[i.length-s]),o){case 1:l=this.ast_helper.on_Result(i[i.length-1]);break;case 2:case 13:case 33:(l=i[i.length-2]).push(i[i.length-1]);break;case 3:case 18:case 31:case 34:case 40:case 65:l=[];break;case 4:case 19:case 43:case 44:case 45:case 46:case 47:case 48:case 49:case 50:case 51:case 55:case 56:case 57:case 58:case 66:case 67:case 74:case 75:break;case 5:l={type:"SetExpr",params:i[i.length-1]};break;case 6:l=this.ast_helper.on_unit_set_expr(i[i.length-5],i[i.length-3],i[i.length-1]);break;case 7:l=this.ast_helper.on_temporary_target_set_expr(i[i.length-5],i[i.length-3],i[i.length-1]);break;case 8:l={type:"ApplyExpr",params:[i[i.length-4],i[i.length-2]]};break;case 9:l=this.ast_helper.on_then_set_expr(i[i.length-3],i[i.length-1]);break;case 10:l=this.ast_helper.on_group_set_expr(i[i.length-3]);break;case 11:this.ast_helper.on_enter_scope();break;case 12:this.ast_helper.on_leave_scope();break;case 14:case 16:case 30:case 39:case 73:l=[i[i.length-1]];break;case 15:case 27:l=i[i.length-2];break;case 17:case 35:case 42:l=[i[i.length-3],i[i.length-1]];break;case 20:l=this.ast_helper.on_def_object(i[i.length-6],i[i.length-5],i[i.length-3]);break;case 21:l=this.ast_helper.on_def_template(i[i.length-11],i[i.length-10],i[i.length-8],i[i.length-4]);break;case 22:l=this.ast_helper.on_let_object_binding(i[i.length-4],i[i.length-2]);break;case 23:this.ast_helper.on_enter_tpl();break;case 24:this.ast_helper.on_leave_tpl();break;case 25:l=this.ast_helper.on_object_modification(i[i.length-4],i[i.length-2]);break;case 26:\nl=this.ast_helper.on_template_application(i[i.length-4],i[i.length-2]);break;case 28:l=this.ast_helper.on_tmp_object_modification(i[i.length-5],i[i.length-3]);break;case 29:case 71:case 72:(l=i[i.length-3]).push(i[i.length-1]);break;case 32:l=this.ast_helper.on_Variable_value(i[i.length-1]);break;case 36:l=[i[i.length-4],i[i.length-2]];break;case 37:l=this.ast_helper.on_ArgList(i[i.length-1]);break;case 38:(l=i[i.length-1]).unshift(i[i.length-3]);break;case 41:l=[null,i[i.length-1]];break;case 52:l=this.ast_helper.on_Time_value(i[i.length-1]);break;case 53:l=this.ast_helper.on_Hex_value(i[i.length-1]);break;case 54:l=this.ast_helper.on_Num_value(i[i.length-3],i[i.length-2],i[i.length-1]);break;case 59:l="+";break;case 60:l=this.ast_helper.on_String_value(i[i.length-2]);break;case 61:(l=i[i.length-2]).push({type:"char",value:i[i.length-1]});break;case 62:(l=i[i.length-2]).push({type:"unicode",value:i[i.length-1]});break;case 63:(l=i[i.length-2]).push({type:"ascii",value:i[i.length-1]});break;case 64:(l=i[i.length-2]).push({type:"seg",value:i[i.length-1]});break;case 68:l=this.ast_helper.on_Object_value(i[i.length-4],this.ast_helper.on_KeyValue_list(i[i.length-4],i[i.length-2]));break;case 69:l=this.ast_helper.on_Array_value(i[i.length-2]);break;case 70:l=this.ast_helper.on_Array_value([])}for(var u=0;u<s;)n.pop(),i.pop(),u++;if(t=n[n.length-1],null==this.gotoTable[this.prodList[o][0]][t])throw new Error("Goto Error!"+e.positionInfo);a=this.gotoTable[this.prodList[o][0]][t],n.push((a>>>1)-1),i.push(l)}}},e}();var _=function(e,t){void 0===t&&(t=!0);var r={x:{numType:"number",value:0},y:{numType:"number",value:0},zIndex:{numType:"number",value:0},scale:{numType:"number",value:1},duration:void 0},i={content:"请输入内容",alpha:{numType:"number",value:1},color:16777215,anchorX:{numType:"number",value:0},anchorY:{numType:"number",value:0},fontSize:{numType:"number",value:25},fontFamily:"SimHei",bold:{numType:"number",value:1},textShadow:{numType:"number",value:1},strokeWidth:{numType:"number",value:0},strokeColor:16777215,rotateX:{numType:"number",value:0},rotateY:{numType:"number",value:0},rotateZ:{numType:"number",value:0},parent:void 0},o={text:"请输入内容",fontSize:{numType:"number",value:25},textColor:0,textAlpha:{numType:"number",value:1},fillColor:16777215,fillAlpha:{numType:"number",value:1},target:void 0},s={d:void 0,viewBox:void 0,borderColor:0,borderAlpha:{numType:"number",value:1},borderWidth:{numType:"number",value:0},fillColor:16777215,fillAlpha:{numType:"number",value:1}};function l(e){for(var t in e)if(e.hasOwnProperty(t))switch((void 0!==e[t].value&&void 0!==e[t].value.numType&&void 0===e[t].easing||void 0!==e[t].value&&void 0!==e[t].type)&&(e[t]=e[t].value),t){case"content":case"text":e[t]=n(e[t],!1,!0);break;case"fontFamily":case"d":case"viewBox":e[t]=n(e[t],!0,!1);break;case"parent":e[t]=n(e[t],!1,!1);break;default:"string"==typeof e[t]&&(e[t]=n(e[t],!1,!1))}}function u(e){l(e.attrs),e.duration=e.duration.value,e.defaultEasing=e.default_easing&&n(e.default_easing.value,!1,!1),e.targetName=e.target_name}try{var p=h.parse(e),c={};c.defs=p.defs;for(var _=0;_<c.defs.length;_++){if(l(c.defs[_].attrs),c.defs[_].attrs.target){for(var f={objType:"seek"},b=0;b<c.defs[_].attrs.target.length;b++){var y=c.defs[_].attrs.target[b];"seasonId"===y[0]||"episodeId"===y[0]?f.objType="bangumi":"av"!==y[0]&&"page"!==y[0]||(f.objType="av"),y[1].value&&y[1].value.value?f[y[0]]=y[1].value.value:y[1].value&&(f[y[0]]=y[1].value)}c.defs[_].attrs.target=f}c.defs[_].attrs=a(r,p.defs[_].attrs),"DefText"===c.defs[_].type?c.defs[_].attrs=a(i,p.defs[_].attrs):"DefButton"===c.defs[_].type?c.defs[_].attrs=a(o,p.defs[_].attrs):"DefPath"===c.defs[_].type&&(c.defs[_].attrs=a(s,p.defs[_].attrs))}c.sets=p.sets;for(_=0;_<c.sets.length;_++)if(c.sets[_].items)for(b=0;b<c.sets[_].items.length;b++)c.sets[_].items[b].attrs&&u(c.sets[_].items[b]);else u(c.sets[_]);return c}catch(e){throw new Error(e.message)}},f=self;f.addEventListener("message",(function(e){var t=e.data;try{var r=_(t.text);t.defs=r.defs,t.sets=r.sets,f.postMessage(t)}catch(e){\nconsole.warn("Error in BAS parser: ",e),f.postMessage({error:e.message})}}));t.default={}}]);`, "Worker", undefined, undefined);
}
