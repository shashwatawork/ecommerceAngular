// ...existing code...
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideFooter = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const hiddenRoutes = ['/story', '/about', '/contact', '/appointment'];
        this.hideFooter = hiddenRoutes.includes(this.router.url);
      }
    });
  }
}
// ...existing code...