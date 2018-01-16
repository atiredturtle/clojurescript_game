// Compiled by ClojureScript 1.9.908 {}
goog.provide('testCLJS.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
testCLJS.core.canvas = document.getElementById("myCanvas");
testCLJS.core.ctx = testCLJS.core.canvas.getContext("2d");
testCLJS.core.player = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"vx","vx",-1685168462),(4),new cljs.core.Keyword(null,"vy","vy",-2018509997),(0),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"color","color",1011675173),"red"], null);
testCLJS.core.drawObject = (function testCLJS$core$drawObject(obj){
var map__31230 = obj;
var map__31230__$1 = ((((!((map__31230 == null)))?((((map__31230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31230):map__31230);
var x = cljs.core.get.call(null,map__31230__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__31230__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__31230__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__31230__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var color = cljs.core.get.call(null,map__31230__$1,new cljs.core.Keyword(null,"color","color",1011675173));
testCLJS.core.ctx.fillStyle = color;

return testCLJS.core.ctx.fillRect(x,y,width,height);
});
testCLJS.core.moveObject = (function testCLJS$core$moveObject(obj){
var map__31232 = obj;
var map__31232__$1 = ((((!((map__31232 == null)))?((((map__31232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31232):map__31232);
var x = cljs.core.get.call(null,map__31232__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__31232__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.call(null,map__31232__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__31232__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"x","x",2099068185),(x + vx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + vy));
});
testCLJS.core.mainLoop = (function testCLJS$core$mainLoop(){
return null;
});
testCLJS.core.keyDownHandler = (function testCLJS$core$keyDownHandler(e){
return alert(e.keyCode);
});
setInterval(testCLJS.core.mainLoop,(10));

//# sourceMappingURL=core.js.map?rel=1516083330446
