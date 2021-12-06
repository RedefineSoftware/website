import { Component } from '@angular/core';

@Component({
  selector: 'rs-root',
  template: `
    <div class="container-centered">
      <div>
        <div class="logo">
          <h1>Redefine Software</h1>
        </div>
        <div class="tagline">
          <p>what's an app?</p>
        </div>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .container-centered {
      display: flex; 
      align-items: center; 
      justify-content: center;
      width: 100vw;
      height: 100vh;
    }

    .tagline {
      text-align: center;
      margin-top: 12px;
      color: #999;
    }
  `]
})
export class AppComponent {
  title = 'redefine-website';
}
