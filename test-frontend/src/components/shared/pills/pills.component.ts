import { Component, Input, OnInit } from '@angular/core';

export enum PillStates {
  ALIVE = 'alive',
  DEAD = 'dead',
  UNKNOWN = 'unknown',
}

@Component({
  selector: 'app-pill',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.scss'],
})
export class PillComponent implements OnInit {
  @Input() text: string;
  bgColor: string;

  constructor() {}

  ngOnInit(): void {
    switch (this.text.toLowerCase()) {
      case PillStates.ALIVE:
        this.text = 'ALIVE';
        break;
      case PillStates.DEAD:
        this.text = 'DEAD';
        break;
      case PillStates.UNKNOWN:
        this.text = 'UNKNOWN';
        break;
      default:
        this.text = 'UNKNOWN';
    }
  }
}
