document.onkeydown=function(e){if(123==e.keyCode||e.ctrlKey&&e.shiftKey&&(74===e.keyCode||73===e.keyCode||67===e.keyCode)||e.ctrlKey&&85===e.keyCode)return btf.snackbarShow("不可以哟~"),event.keyCode=0,event.returnValue=!1,!1},document.oncontextmenu=function(e){window.event&&(e=window.event);try{var t=e.srcElement;return"INPUT"==t.tagName&&"text"==t.type.toLowerCase()||"TEXTAREA"==t.tagName}catch(e){return!1}};