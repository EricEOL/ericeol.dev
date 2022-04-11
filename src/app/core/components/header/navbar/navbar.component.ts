import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {

  lightTheme: boolean = false;

  ngOnInit(): void {
    const button = document.querySelector('#circle');
    button?.classList.add('unchecked');
  }

  theme(): void {
    document.body.classList.toggle('lightTheme');

    if(this.lightTheme == false) this.lightTheme = true;
    else this.lightTheme = false;

    const button = document.querySelector('#circle');

    if(this.lightTheme == false) {
      button?.classList.remove('unchecked');
      button?.classList.add('checked');
    } else {
      button?.classList.remove('checked');
      button?.classList.add('unchecked');
    } 

  }
}