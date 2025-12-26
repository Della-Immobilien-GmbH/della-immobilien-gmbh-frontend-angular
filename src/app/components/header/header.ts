import { Component, ElementRef, viewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected faBars = faBars;
  protected nav = viewChild.required<ElementRef<HTMLElement>>('nav');

  protected toggleNav(): void {
    this.nav().nativeElement.classList.toggle('open');
  }
}
