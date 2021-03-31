import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSideNavOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
    window.location.href.includes('/auth/sign-up')? document.getElementById("nav_register").classList.add('active'):null;
    window.location.href.includes('/non-secure/field-info')? document.getElementById("nav_fieldInfo").classList.add('active'):null;
    window.location.href.includes('/non-secure/player-info')? document.getElementById("nav_playerInfo").classList.add('active'):null;
    window.location.href.includes('/non-secure/feature-list')? document.getElementById("nav_featureList").classList.add('active'):null;
    window.location.href.includes('/non-secure/home')? document.getElementById("nav_home").classList.add('active'):null;
    // window.location.href.includes('home')? $("#nav_home").addClass('active'):null;
    // window.location.href.includes('newGame')? $("#nav_newGame").addClass('active'):null;
    // window.location.href.includes('pastGames')? $("#nav_pastGames").addClass('active'):null;

  } 
  signOut(){

  }

  openMenu(){
    let menu = document.getElementById("navdrop")
    menu.classList.toggle('collapse')
  }

// $("[data-trigger]").on("click", function (e) {
//   e.preventDefault();
//   e.stopPropagation();
//   var offcanvas_id = $(this).attr("data-trigger");
//   $(offcanvas_id).toggleClass("show");
//   $("body").toggleClass("offcanvas-active");
//   $(".screen-overlay").toggleClass("show");
// });

// // Close menu when pressing ESC
// $(document).on("keydown", function (event) {
//   if (event.keyCode === 27) {
//     $(".mobile-offcanvas").removeClass("show");
//     $("body").removeClass("overlay-active");
//   }
// });

// $(".btn-close, .screen-overlay").click(function (e) {
//   $(".screen-overlay").removeClass("show");
//   $(".mobile-offcanvas").removeClass("show");
//   $("body").removeClass("offcanvas-active");
// });



}
