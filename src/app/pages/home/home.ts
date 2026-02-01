import { Component } from '@angular/core';
import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";
import { Hero } from "./hero/hero";
import { Actus } from "./actus/actus";

@Component({
  selector: 'app-home',
  imports: [Header, Footer, Hero, Actus],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
