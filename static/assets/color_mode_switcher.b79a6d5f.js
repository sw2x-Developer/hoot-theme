function c(){const t=localStorage.getItem("theme");return t||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}function a(t){const r=document.querySelector(".theme-switch i.fas");r.classList.toggle("fa-moon",t==="dark"),r.classList.toggle("fa-sun",t!=="dark")}let e=c();document.documentElement.setAttribute("data-bs-theme",e);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{e=c(),document.documentElement.setAttribute("data-bs-theme",e),a(e)});window.addEventListener("load",()=>{a("dark"),document.querySelectorAll(".theme-switch").forEach(t=>{t.addEventListener("click",r=>{e=e==="light"?"dark":"light",document.documentElement.setAttribute("data-bs-theme",e),localStorage.setItem("theme",e),a(e),r.preventDefault()})})});