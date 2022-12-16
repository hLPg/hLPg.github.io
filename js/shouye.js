/* 首次访问弹窗 */
$(function(){
    if(window.localStorage.getItem("isClose") == 'yes'){
        $('#note')[0].style.display='none';
    }else
    {
         $('#note')[0].style.display='block';
    }
    
});
function closeclick()
{
   $('#note')[0].style.display='none';
   window.localStorage.setItem("isClose", "yes");
}