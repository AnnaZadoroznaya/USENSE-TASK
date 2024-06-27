import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PasswordStrengthComponent} from "./password-strength/password-strength.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordStrengthComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
