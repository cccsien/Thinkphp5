$(function(){$(".j-del").click(function(){var a=$(this).data("id");return $.jBox.show({title:"提示",content:_.template($("#tpl_jbox_simple").html(),{content:"删除后将不可恢复，是否继续？"}),btnOK:{onBtnClick:function(b){$.jBox.close(b),$.ajax({url:"/System/delDelivery",type:"post",dataType:"json",data:{id:a},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，删除成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，删除失败："+a.msg),$.jBox.hideloading()}})}}}),!1}),$(".btn_table_delAll").click(function(){var a=[],b=$(".table-ckbs:checked");return b.each(function(){a.push($(this).data("id"))}),a.length?($.jBox.show({title:"提示",content:_.template($("#tpl_jbox_simple").html(),{content:"删除后将不可恢复，是否继续？"}),btnOK:{onBtnClick:function(c){$.jBox.close(c),$.ajax({url:"/System/delDelivery",type:"post",dataType:"json",data:{id:a},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?b.parents("tr").fadeOut(300,function(){HYD.hint("success","恭喜您，删除成功！")}):HYD.hint("danger","对不起，删除失败："+a.msg),$.jBox.hideloading(),setTimeout(function(){window.location.reload()},1e3)}})}}}),!1):void HYD.hint("warning","对不起，请选择要删除的数据！")}),$(".J_default").click(function(){var a=$(this).data("id");$.ajax({url:"/System/setDefaultDelivery",type:"post",dataType:"json",data:{id:a},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，设置成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，设置失败："+a.msg),$.jBox.hideloading()}})}),$(".J_cancel_default").click(function(){var a=$(this).data("id");$.ajax({url:"/System/cancelDefaultDelivery",type:"post",dataType:"json",data:{id:a},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，设置成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，设置失败："+a.msg),$.jBox.hideloading()}})})});