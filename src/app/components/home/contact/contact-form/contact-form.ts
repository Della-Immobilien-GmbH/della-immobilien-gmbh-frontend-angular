import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, Signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm implements OnDestroy {
  private sendMailSubscription: Subscription | null = null;
  protected successSection = viewChild.required<ElementRef<HTMLElement>>('success');
  protected errorSection = viewChild.required<ElementRef<HTMLElement>>('error');

  constructor(private readonly httpClient: HttpClient) {}

  ngOnDestroy(): void {
    this.sendMailSubscription?.unsubscribe();
  }

  protected submit(event: Event) {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    this.sendMailSubscription = this.httpClient.post(`${environment.apiUrl}/send-mail`, data).subscribe({
      next: res => {
        this.toggleAndUntoggleSection(this.successSection);
      },
      error: err => {
        this.toggleAndUntoggleSection(this.errorSection);
      },
    });
  }

  private toggleAndUntoggleSection(section: Signal<ElementRef<HTMLElement>>): void {
    this.toggleSection(section);
    setTimeout(() => this.toggleSection(section), 5000);
  }

  private toggleSection(section: Signal<ElementRef<HTMLElement>>): void {
    section().nativeElement.classList.toggle('flex');
  }
}
