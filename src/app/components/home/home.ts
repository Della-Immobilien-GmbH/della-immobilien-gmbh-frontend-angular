import { Component } from '@angular/core';
import { Info } from "./info/info";
import { About } from "./about/about";
import { Services } from "./services/services";
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-home',
  imports: [Info, About, Services, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
