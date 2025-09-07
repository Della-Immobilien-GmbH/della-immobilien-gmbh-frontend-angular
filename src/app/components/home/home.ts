import { Component } from '@angular/core';
import { Info } from "./info/info";

@Component({
  selector: 'app-home',
  imports: [Info],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
