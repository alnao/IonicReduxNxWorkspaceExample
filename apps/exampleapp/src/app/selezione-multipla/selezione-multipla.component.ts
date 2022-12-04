import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnotazioniEntity, getAllAnnotazioni, getAnnotazioniLoaded, loadAnnotazioniFailure, loadAnnotazioniInit, loadAnnotazioniSuccess } from '@frontend/example-central-lib';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
//import { IonModal } from '@ionic/angular';
//import { ModalController } from '@ionic/angular';

@Component({
  //standalone: true,
  //imports: [IonicModule,CommonModule,FormsModule],
  selector: 'frontend-selezione-multipla',
  templateUrl: './selezione-multipla.component.html',
  styleUrls: ['./selezione-multipla.component.scss']
})
export class SelezioneMultiplaComponent implements OnInit {
  isOpen: boolean=false;
  open(){this.isOpen=true;}
  close(){this.isOpen=false;}
  confirm(){this.isOpen=false;}

  selected=[];
  @Input() title='Search';
  @Input() data:any[];

  constructor(){}
  ngOnInit(): void {
  }
  

  

}
