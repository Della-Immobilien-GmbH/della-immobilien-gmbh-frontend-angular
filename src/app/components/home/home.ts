import { Component } from '@angular/core';
import { Info } from "./info/info";
import { About } from "./about/about";

@Component({
  selector: 'app-home',
  imports: [Info, About],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
