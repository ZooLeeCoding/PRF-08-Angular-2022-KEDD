import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parameter-pelda',
  templateUrl: './parameter-pelda.component.html',
  styleUrls: ['./parameter-pelda.component.css'],
})
export class ParameterPeldaComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  kotelezo = '';
  opcionalis = {};

  ngOnInit() {
    // paraméterekkel legkorábban az oninit, vagyis a komponens inícializálása során kezdhetünk el foglalkozni, a konstruktorban még nem érhetőek el
    this.route.params.subscribe((params) => {
      console.log(params);
      this.kotelezo = params.valami;
      this.opcionalis = params;
    });
  }
}
