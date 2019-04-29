//动态获取当面屏幕的高度，然后再给各个模块首页的procur_main元素，让其底部的基本资料永远处在最下方
function load(){
    var win_height=$(window).height();
    if(win_height<=634){
        $('.procur_main').css({
            height:460
        });
    }
    else{
        $('.procur_main').css({
            height:win_height-172
        });
    }
}
load();
$(window).resize(function(){
    load();
});

//给"操作"，"新增行"按钮绑定点击事件
(function(){
    $('.btn').each(function(){
        $(this).on('click',function(event){
            event.stopPropagation();
            var $this=$(this);
            $this.next().toggle();
            //点击空白处让按钮下方的dl隐藏
            $(document).on('click',function(event){
                //去除事件冒泡
                event.stopPropagation();
                $this.next().hide();
            })
        })
    })
})();
//给查询按钮绑定点击事件
(function(){
    $('#search_btn').on('click',function(event){
        event.stopPropagation();  //取消事件冒泡
        $('#search-form').toggle();
        //点击空白处让按钮下方的dl隐藏
        $(document).on('click',function(event){
            //去除事件冒泡
            event.stopPropagation();
            $('#search-form').hide();
        });
    })
})();
//部门，业务员下拉框
(function(){
    $('.dif_input').each(function(){
        $(this).on({
            focus:function(){
                $(this).parent().next().show();
            },
            blur:function(){
                $(this).parent().next().hide();
            }
        })
    })

})();