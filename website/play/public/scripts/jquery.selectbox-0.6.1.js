jQuery.fn.selectbox=function(e){var s={className:"jquery-selectbox",animationSpeed:"normal",listboxMaxSize:30,replaceInvisible:!1},t="jquery-custom-selectboxes-replaced",a=!1,i=function(e){var t=e.parents("."+s.className);return e.slideDown(s.animationSpeed,function(){a=!0}),t.addClass("selecthover"),jQuery(document).bind("click",r),e},n=function(e){e.parents("."+s.className);return e.slideUp(s.animationSpeed,function(){a=!1,jQuery(this).parents("."+s.className).removeClass("selecthover")}),jQuery(document).unbind("click",r),e},r=function(e){var i=e.target,r=jQuery("."+s.className+"-list:visible").parent().find("*").andSelf();return jQuery.inArray(i,r)<0&&a&&n(jQuery("."+t+"-list")),!1};return s=jQuery.extend(s,e||{}),this.each(function(){var e=jQuery(this);if(0!=e.filter(":visible").length||s.replaceInvisible){var a=jQuery('<div class="'+s.className+" "+t+'"><div class="'+s.className+'-moreButton" /><div class="'+s.className+"-list "+t+'-list" /><span class="'+s.className+'-currentItem" /></div>');jQuery("option",e).each(function(e,t){var t=jQuery(t),r=jQuery('<span class="'+s.className+"-item value-"+t.val()+" item-"+e+'">'+t.text()+"</span>");r.click(function(){var e=jQuery(this),t=e.parents("."+s.className),a=e[0].className.split(" ");for(k1 in a)if(/^item-[0-9]+$/.test(a[k1])){a=parseInt(a[k1].replace("item-",""),10);break}var r=e[0].className.split(" ");for(k1 in r)if(/^value-.+$/.test(r[k1])){r=r[k1].replace("value-","");break}t.find("."+s.className+"-currentItem").text(e.text()),t.find("select").val(r).triggerHandler("change");var l=t.find("."+s.className+"-list");l.filter(":visible").length>0?n(l):i(l)}).bind("mouseenter",function(){jQuery(this).addClass("listelementhover")}).bind("mouseleave",function(){jQuery(this).removeClass("listelementhover")}),jQuery("."+s.className+"-list",a).append(r),t.filter(":selected").length>0&&jQuery("."+s.className+"-currentItem",a).text(t.text())}),a.find("."+s.className+"-moreButton").click(function(){var e=jQuery(this),t=jQuery("."+s.className+"-list").not(e.siblings("."+s.className+"-list"));n(t);var a=e.siblings("."+s.className+"-list");a.filter(":visible").length>0?n(a):i(a)}).bind("mouseenter",function(){jQuery(this).addClass("morebuttonhover")}).bind("mouseleave",function(){jQuery(this).removeClass("morebuttonhover")}),e.hide().replaceWith(a).appendTo(a);var r=a.find("."+s.className+"-list"),l=r.find("."+s.className+"-item").length;l>s.listboxMaxSize&&(l=s.listboxMaxSize),0==l&&(l=1);var c=Math.round(e.width()+5);-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&(c=.98*c),a.css("width","175px"),r.css({width:Math.round(c-5)+"px",height:s.listboxMaxSize+"px"})}})},jQuery.fn.unselectbox=function(){var e="jquery-custom-selectboxes-replaced";return this.each(function(){var s=jQuery(this).filter("."+e);s.replaceWith(s.find("select").show())})};
