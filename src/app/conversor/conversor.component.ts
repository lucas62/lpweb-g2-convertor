import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  @Input()
  conversor = 100;
  @Output()
  onBinario = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    binario(conversor) {
      this.onBinario.emit(conversor);
    }
  }

}
