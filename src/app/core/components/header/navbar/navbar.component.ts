import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', 'navbar-mobile.component.css']
})
export class NavBarComponent implements OnInit {

  lightTheme: boolean = false;

  ngOnInit(): void {
    const button = document.querySelector('#circle');
    const buttonMobile = document.querySelector('#circle-mobile');

    button?.classList.add('unchecked');
    buttonMobile?.classList.add('unchecked');

    this.activeMobileMenu();
  }

  theme(): void {
    document.body.classList.toggle('lightTheme');

    if (this.lightTheme == false) this.lightTheme = true;
    else this.lightTheme = false;

    const button = document.querySelector('#circle');
    const buttonMobile = document.querySelector('#circle-mobile');

    if (!this.lightTheme) {
      button?.classList.remove('checked');
      button?.classList.add('unchecked');

      buttonMobile?.classList.remove('checked');
      buttonMobile?.classList.add('unchecked');
    } else {
      button?.classList.remove('unchecked');
      button?.classList.add('checked');

      buttonMobile?.classList.remove('unchecked');
      buttonMobile?.classList.add('checked');
    }

  }

  activeMobileMenu(): void {
    const menuMobileBtn = document.querySelector(".menu-hamburger");
    const menuMobileLinks = document.querySelector(".nav-mobile");

    if(menuMobileBtn && menuMobileLinks) {
      menuMobileBtn.addEventListener('click', () => {
        menuMobileBtn.classList.toggle('is-active');
        menuMobileLinks.classList.toggle('is-active');
      });
    }
  }
}