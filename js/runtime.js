var now=new Date;function createtime(){now.setTime(now.getTime()+1e3);var e=new Date("08/01/2022 00:00:00"),t=Math.trunc(234e8+(now-e)/1e3*17),a=(t/1496e5).toFixed(6),o=new Date("11/27/2022 00:00:00"),i=(now-o)/1e3/60/60/24,n=Math.floor(i),r=(now-o)/1e3/60/60-24*n,s=Math.floor(r);1==String(s).length&&(s="0"+s);var l=(now-o)/1e3/60-1440*n-60*s,d=Math.floor(l);1==String(d).length&&(d="0"+d);var g=(now-o)/1e3-86400*n-3600*s-60*d,h=Math.round(g);1==String(h).length&&(h="0"+h);let b="";b=s<18&&s>=9?`<img class='boardsign' src='https://img.shields.io/badge/H%E5%B0%8F%E7%AB%99-%E5%AD%A6%E4%B9%A0%E6%91%B8%E9%B1%BC%E4%B8%AD-1ade23?style=social&logo=Buy%20Me%20A%20Coffee' title='什么时候才能见到小呆瓜呀...'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${n} 天 ${s} 小时 ${d} 分 ${h} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`:`<img class='boardsign' src='https://img.shields.io/badge/H小站-打烊休息啦-6adea8?style=social&logo=coffeescript' title='休息时间就要好好放松一下哟~，嘿嘿~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${n} 天 ${s} 小时 ${d} 分 ${h} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=b)}setInterval((()=>{createtime()}),1e3);