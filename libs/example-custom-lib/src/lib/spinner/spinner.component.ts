import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'frontend-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor() { }
  @Input() testo : string;
  @Input() paused: boolean;
  ngOnInit(): void {
  }

}
