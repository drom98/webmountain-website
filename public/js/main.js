"use strict";document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0<t.length&&t.forEach(function(n){n.addEventListener("click",function(){var t=n.dataset.target,e=document.getElementById(t);n.classList.toggle("is-active"),e.classList.toggle("is-active")})})});