(this["webpackJsonpebook-cleaner"]=this["webpackJsonpebook-cleaner"]||[]).push([[30],{244:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_reorder",(function(){return a})),r.d(e,"ion_reorder_group",(function(){return c}));var n=r(5),i=r(22),o=r(19),s=r(276),a=function(){function t(t){Object(i.l)(this,t)}return t.prototype.onClick=function(t){t.preventDefault(),t.stopImmediatePropagation()},t.prototype.render=function(){var t=Object(o.b)(this),e="ios"===t?"reorder-three-outline":"reorder-two-sharp";return Object(i.j)(i.b,{class:t},Object(i.j)("slot",null,Object(i.j)("ion-icon",{name:e,lazy:!1,class:"reorder-icon",part:"icon"})))},t}();a.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};var c=function(){function t(t){Object(i.l)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(i.f)(this,"ionItemReorder",7)}return t.prototype.disabledChanged=function(){this.gesture&&this.gesture.enable(!this.disabled)},t.prototype.connectedCallback=function(){return Object(n.a)(this,void 0,void 0,(function(){var t,e,i,o=this;return Object(n.c)(this,(function(n){switch(n.label){case 0:return(t=this.el.closest("ion-content"))?(e=this,[4,t.getScrollElement()]):[3,2];case 1:e.scrollEl=n.sent(),n.label=2;case 2:return i=this,[4,Promise.resolve().then(r.bind(null,80))];case 3:return i.gesture=n.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(t){return o.canStart(t)},onStart:function(t){return o.onStart(t)},onMove:function(t){return o.onMove(t)},onEnd:function(){return o.onEnd()}}),this.disabledChanged(),[2]}}))}))},t.prototype.disconnectedCallback=function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.complete=function(t){return Promise.resolve(this.completeSync(t))},t.prototype.canStart=function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=h(e,this.el);return!!r&&(t.data=r,!0)},t.prototype.onStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var n=this.el,i=n.children;if(i&&0!==i.length){for(var o=0,a=0;a<i.length;a++){var c=i[a];o+=c.offsetHeight,r.push(o),c.$ionIndex=a}var h=n.getBoundingClientRect();if(this.containerTop=h.top,this.containerBottom=h.bottom,this.scrollEl){var u=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=u.top+d,this.scrollElBottom=u.bottom-d}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=l(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(p),Object(s.b)()}},t.prototype.onMove=function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),n=this.containerTop-r,i=this.containerBottom-r,o=Math.max(n,Math.min(t.currentY,i)),a=r+o-t.startY,c=o-n,h=this.itemIndexForTop(c);if(h!==this.lastToIndex){var d=l(e);this.lastToIndex=h,Object(s.c)(),this.reorderMove(d,h)}e.style.transform="translateY("+a+"px)"}},t.prototype.onEnd=function(){var t=this.selectedItemEl;if(this.state=2,t){var e=this.lastToIndex,r=l(t);e===r?this.completeSync():this.ionItemReorder.emit({from:r,to:e,complete:this.completeSync.bind(this)}),Object(s.d)()}else this.state=0},t.prototype.completeSync=function(t){var e=this.selectedItemEl;if(e&&2===this.state){var r=this.el.children,n=r.length,i=this.lastToIndex,o=l(e);if(i!==o&&(!t||!0===t)){var s=o<i?r[i+1]:r[i];this.el.insertBefore(e,s)}Array.isArray(t)&&(t=f(t,o,i));for(var a=0;a<n;a++)r[a].style.transform="";e.style.transition="",e.classList.remove(p),this.selectedItemEl=void 0,this.state=0}return t},t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,r=0;for(r=0;r<e.length&&!(e[r]>t);r++);return r},t.prototype.reorderMove=function(t,e){for(var r=this.selectedItemHeight,n=this.el.children,i=0;i<n.length;i++){var o="";i>t&&i<=e?o="translateY("+-r+"px)":i<t&&i>=e&&(o="translateY("+r+"px)"),n[i].style.transform=o}},t.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-u:t>this.scrollElBottom&&(e=u),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},t.prototype.render=function(){var t,e=Object(o.b)(this);return Object(i.j)(i.b,{class:(t={},t[e]=!0,t["reorder-enabled"]=!this.disabled,t["reorder-list-active"]=0!==this.state,t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.g)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),t}(),l=function(t){return t.$ionIndex},h=function(t,e){for(var r;t;){if((r=t.parentElement)===e)return t;t=r}},d=60,u=10,p="reorder-selected",f=function(t,e,r){var n=t[e];return t.splice(e,1),t.splice(r,0,n),t.slice()};c.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"},276:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return a})),r.d(e,"e",(function(){return i}));var n={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var r=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:r})}},notification:function(t){var e=this.getEngine();if(e){var r=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:r})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())}},i=function(){n.selection()},o=function(){n.selectionStart()},s=function(){n.selectionChanged()},a=function(){n.selectionEnd()},c=function(t){n.impact(t)}}}]);
//# sourceMappingURL=30.6fe277be.chunk.js.map