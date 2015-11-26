!function($){return $(document).on("ready",function(){return $(document).find("[data-kerning]").each(function(){var n,e;return e=$(this).data("kerning"),n=null,e?(n=0<=e.indexOf("{")?$.kerning.parseJSON(e):e,$(this).kerning(n,$(this).data("kerning-extend"))):$(this).kerning()})}),$.kerning={},$.kerning.defaults={removeTags:!1,removeAnchorTags:!1,data:{kerning:{"、":[0,-.4],"。":[0,-.4],"（":[-.4,0],"）":[0,-.4],"〔":[-.4,0],"〕":[0,-.4],"［":[-.4,0],"］":[0,-.4],"｛":[-.4,0],"｝":[0,-.4],"〈":[-.4,0],"〉":[0,-.4],"《":[-.4,0],"》":[0,-.4],"「":[-.4,0],"」":[0,-.4],"『":[-.4,0],"』":[0,-.4],"【":[-.4,0],"】":[0,-.4],"・":[-.22,-.22],"：":[-.22,-.22],"；":[-.22,-.22],"｜":[-.22,-.22]}}},$.kerning.parseJSON=function(text){var O_o,o_O,obj;obj=null;try{return obj=JSON.parse(text)}catch(_error){O_o=_error,console.log("jquery.kerning : [WARN] As a result of JSON.parse, a trivial problem has occurred")}try{obj=eval("("+text+")")}catch(_error){return o_O=_error,console.error("jquery.kerning : [ERROR] JSON.parse failed"),null}return obj},$.fn.kerning=function(n,e){return null==e&&(e=!1),this.each(function(){var r,t,i,a,o,l,d,s;return l=$(this),r=l,s=l.html(),t="",d=a=null,i=function(){var n;for(n=[];l.find("[data-kerned]").length;)l.find("[data-kerned]").replaceWith(function(){return this.innerHTML}),n.push(s=l.html());return n},o=function(n){var o,u,c,g,h,f,k,p;for(l.find("[data-kerned]").length&&i(),d=e?$.extend(!0,{},$.kerning.defaults,n):$.extend({},$.kerning.defaults,n),a=d.data.kerning,d.removeAnchorTags?l.children("a").length?(r=l.children("a"),s=r.html().replace(/(<([^>]+)>)/gi,"").split("")):(r=l,s=l.html().replace(/(<([^>]+)>)/gi,"").split("")):d.removeTags?s=l.html().replace(/(<([^>]+)>)/gi,"").split(""):l.find("[data-kerned]").empty(),c=l.data("delimiter"),h=l.data("linebreak"),void 0!==c&&(s=(c+s.join(c)+c).split("")),g=k=0,p=s.length;p>=0?p>k:k>p;g=p>=0?++k:--k)f=s[g],o=0,u=0,a[f]?(o=a[f][0],u=a[f][1],void 0!==h&&(t+='<span style="display:inline-block;">'+h+"</span>"),t+=0!==o||0!==u?'<span data-kerned style="display:inline-block;margin-left:'+o+"em;margin-right:"+u+'em;">'+f+"</span>":f,void 0!==h&&(t+='<span style="display:inline-block;">'+h+"</span><br>")):t+=f;return r.html(t),r.find("[data-kerned]").each(function(){var n;return n=$(this),0!==parseInt(n.css("text-indent"),10)?n.css("text-indent",0):void 0}),l},"string"==typeof n?"destroy"===n?(i(),l):0<=n.indexOf(".json")?$.getJSON(n,function(n){return o({data:n})}):(console.error("jquery.kerning : [ERROR] Invalid configure"),l):o(n)})}}(jQuery);
//# sourceMappingURL=kerning-dist.js.map