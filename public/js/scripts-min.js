"use strict";document.getElementById("gallery")&&new Macy({container:"#gallery",trueOrder:!1,waitForImages:!1,useOwnImageLoader:!1,debug:!0,mobileFirst:!0,colum:1,margin:{y:15,x:15},breakAt:{1200:5,940:4,520:1,360:1}});var topbar=document.getElementById("topbar"),loginModal=document.getElementById("login-modal"),registerModal=document.getElementById("register-modal"),loginForm=document.getElementById("login-form"),registerForm=document.getElementById("register-form");topbar&&topbar.addEventListener("click",(function(e){null!=e.target.parentElement.dataset.type&&("login"==e.target.parentElement.dataset.type?loginModal.classList.add("lightbox--show"):"register"==e.target.parentElement.dataset.type&&registerModal.classList.add("lightbox--show"))})),loginModal&&loginModal.addEventListener("click",(function(e){e.target.classList.contains("lightbox")&&loginModal.classList.remove("lightbox--show")})),registerModal&&registerModal.addEventListener("click",(function(e){e.target.classList.contains("lightbox")&&registerModal.classList.remove("lightbox--show")}));var toggleMenu=document.getElementById("toggle-menu"),sidebar=document.getElementById("sidebar");toggleMenu.addEventListener("click",(function(e){"toggle-menu"!=e.target.id&&"toggle-menu"!=e.target.parentElement.id||(sidebar.classList.toggle("show-menu"),toggleMenu.classList.toggle("show-menu"))}));