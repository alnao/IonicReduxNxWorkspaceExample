import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  //metodi per la gestione della visualizzazione del componente
  isOpen: boolean=false;
  open(){this.isOpen=true;}
  close(){this.isOpen=false;}
  confirm(){//emettitore di evento verso il chiamanete
    this.selectedToCaller.emit(this.selected); 
    this.isOpen=false;
  }
  //proprietà di input e output
  selected=[];
  @Input() title='Selezione multipla';
  @Input() data:Observable<AnnotazioniEntitySel[]> ;
  datal:AnnotazioniEntitySel[]=[] ;
  @Input() multiple = false;
  @Output() selectedToCaller: EventEmitter<any> = new EventEmitter();
  //costruttore e onInit che riceve la lista dal chiamante
  constructor(){}
  ngOnInit(): void {
    this.data.subscribe(l => this.datal=l);
  }
  //alla selezione di un elemento aggiorno la lista dei selezionati
  itemSelected(){
    this.selected = this.datal.filter( (item) => item.selected );
  }
}
interface AnnotazioniEntitySel extends AnnotazioniEntity{
  selected : boolean | null;
}
