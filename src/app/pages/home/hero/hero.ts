import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { InfosTrafic } from "../infos-trafic/infos-trafic";

@Component({
  selector: 'app-hero',
  imports: [RouterLink, InfosTrafic],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
