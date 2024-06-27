import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    MatFormField,
    MatIcon,
    MatInputModule,
    NgIf
  ],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css'
})
export class PasswordStrengthComponent {
  public password: string = '';
  public sections: string[] = ['gray', 'gray', 'gray'];

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide);
    event.stopPropagation();
  }

 getPasswordStrength() {
    if (this.password.length === 0) {
      this.sections = ['gray', 'gray', 'gray'];
    } else if (this.password.length < 8) {
      this.sections = ['red', 'red', 'red'];
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /[0-9]/.test(this.password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.sections = ['green', 'green', 'green'];
      } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        this.sections = ['yellow', 'yellow', 'gray'];
      } else {
        this.sections = ['red', 'gray', 'gray'];
      }
    }
  }
}
