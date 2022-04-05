import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-alapozas',
  templateUrl: './alapozas.component.html',
  styleUrls: ['./alapozas.component.css'],
})
export class AlapozasComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  userInput = '';

  lista = [];

  addToList() {
    if (this.userInput.length > 0) {
      this.lista.push(this.userInput);
      this.userInput = '';
    }
  }

  removeFromList(torlendo: string) {
    this.lista = this.lista.filter(function (value, index, arr) {
      return value !== torlendo;
    });
  }

  constructor() {}

  ngOnInit() {}
}
