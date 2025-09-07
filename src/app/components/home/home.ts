import { Component } from '@angular/core';
import { Info } from "./info/info";
import { About } from "./about/about";
import { Services } from "./services/services";

@Component({
  selector: 'app-home',
  imports: [Info, About, Services],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
