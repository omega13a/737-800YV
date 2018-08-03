(function(d,h,j){var g="tmgSticky"+(h.jasmine?"Fashion":""),b={activeClass:"is-tmg-sticky",childSelector:".component-content > *",containerSelector:"body",initAttemptDelay:200,initAttempt:0,maxInitAttempts:30,offsetY:{top:10,bottom:50}};
function k(n,m){this.element=n;
this.$element=d(n);
this.options=d.extend({},b,m);
this.init()
}k.prototype={init:function l(){if(this.isSupported()){this.setContainer();
this.attach()
}},setContainer:function c(){var m=this.$element;
this.$container=m.closest(this.options.containerSelector)
},attach:function f(){var o=this.$element,q=this.$container,n=this.options;
if(!this.allowStickyBehaviour()){return false
}o.css({"max-width":o.css("width"),height:o.outerHeight()}).addClass(n.activeClass).affix({offset:{top:function p(r){return this.top=r.offset().top-n.offsetY.top
},bottom:function m(){return this.bottom=d(j).height()-q.offset().top-q.height()+n.offsetY.bottom
}}});
if(d("html").hasClass("ua-ie")||d("html").hasClass("ua-gecko")){o.on("affixed.bs.affix",function(){o.trigger("scroll.bs.affix.data-api")
})
}if(o.hasClass("affix")){o.trigger("scroll.bs.affix.data-api")
}},isSupported:function a(){var n=!d("html").hasClass("ua-mobile"),p=d("html").hasClass("ua-ie-8")||d("html").hasClass("ua-ie-9")||false,m=!!d.fn.affix,o=h===h.parent;
return n&&m&&o&&!p
},allowStickyBehaviour:function e(){var p=this.$element,s=this.$container,o=this.options;
var m=p.find(o.childSelector).length>0,r=d(j).height()-p.offset().top-p.outerHeight(true),n=d(j).height()-s.offset().top-s.height()+o.offsetY.bottom,q=!p.next().length;
return m&&r>n&&q
}};
d.fn[g]=function(n){var m=n||{};
d.data(this,"plugin_"+g,new k(this,m))
};
d.fn[g].VERSION="0.1.0";
function i(){if(d(".advert-header-wrapper.js-advert[data-advert--ad-loaded='true']").length===0){b.initAttempt++;
if(b.initAttempt<b.maxInitAttempts){setTimeout(i,b.initAttemptDelay)
}return
}setTimeout(function(){var m=".tmg-sticky-ad-container-enabled";
d(m).find(".js-tmg-sticky-ad:last").each(function(){d(this)[g]({activeClass:"is-tmg-sticky-ad",containerSelector:m})
})
},10)
}if(j.readyState==="complete"){i()
}else{d(h).on("load",function(){i()
})
}})(tmgJQ,window,document);