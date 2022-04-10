import { Component } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {

  theme(): boolean {
    document.body.classList.toggle('lightTheme');
    return true;
  }

}