import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'frontend-informazioni-generali',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informazioni-generali.component.html',
  styleUrls: ['./informazioni-generali.component.scss']
})
export class InformazioniGeneraliComponent implements OnInit {
  isOpen: boolean=false;
  open(){this.isOpen=true;}
  close(){this.isOpen=false;}

  constructor(){}
  ngOnInit(): void {
  }
}
