const t=document.querySelector("body"),e=document.querySelector("#startButton"),o=document.querySelector("#stopButton");let r;e.addEventListener("click",(()=>{r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.disabled=!0})),o.addEventListener("click",(()=>{clearInterval(r),t.style.backgroundColor="#FFFFFF",e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.677c7897.js.map