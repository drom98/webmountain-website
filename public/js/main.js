"use strict";document.addEventListener("DOMContentLoaded",function(){new SmoothScroll('a[href*="#"]',{speed:620}),new Gumshoe("#navbar-items a");var e=document.querySelector(".burger"),t=document.querySelector("#"+e.dataset.target);document.querySelector("#navbarMenu");e.addEventListener("click",function(){e.classList.toggle("is-active"),t.classList.toggle("is-active")});var s=document.querySelector(".form-message"),n=document.getElementById("name");document.getElementById("phone"),document.getElementById("phone");n.addEventListener("blur",function(){""==n.value?(n.classList.add("is-danger"),s.classList.remove("form-message")):(n.classList.remove("is-danger"),s.classList.add("form-message"))})});