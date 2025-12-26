import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
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

  constructor(private readonly httpClient: HttpClient) {}

  ngOnDestroy(): void {
    this.sendMailSubscription?.unsubscribe();
  }

  protected submit(form: HTMLFormElement) {
    const data = new FormData(form);

    this.sendMailSubscription = this.httpClient.post(`${environment.apiUrl}/send-mail`, data).subscribe();
  }
}
