"use strict";document.addEventListener("DOMContentLoaded",function(){new SmoothScroll('a[href*="#"]',{speed:620}),new Gumshoe("#navbar-items a");var e,n,o,t=document.querySelector(".burger"),c=document.querySelector("#"+t.dataset.target);document.querySelector("#navbarMenu");function i(e,t,n,o){e.classList.remove("is-danger"),e.classList.add("".concat(t)),n.style.display="".concat(o)}function l(e,t){e.disabled=t}t.addEventListener("click",function(){t.classList.toggle("is-active"),c.classList.toggle("is-active")}),e=document.querySelectorAll("form input, form textarea"),n=document.querySelectorAll("form p"),(o=document.querySelector("button[type=submit]")).disabled=!0,e.forEach(function(e,t){e.addEventListener("blur",function(){console.log(e),console.log(t),"name"==e.getAttribute("name")&&function(e,t){e.value.length<3?i(e,"is-danger",t,"block"):i(e,"is-light",t,"none")}(e,n[t-1]),"email"==e.getAttribute("name")&&function(e,t){0<e.value.length&&/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e.value)?(console.log("válido"),i(e,"is-light",t,"none")):(console.log("inválido"),i(e,"is-danger",t,"inline-block"))}(e,n[t-1]),"phone"==e.getAttribute("name")&&function(e,t){/^\d{9}$/.test(e.value)?i(e,"is-light",t,"none"):i(e,"is-danger",t,"block")}(e,n[t-1]),"checkbox"==e.getAttribute("type")&&function(e,t){e.addEventListener("click",function(){0==e.checked?(console.log("desmarcado"),l(t,!0)):(console.log("checked"),l(t,!1))})}(e,o)})})});