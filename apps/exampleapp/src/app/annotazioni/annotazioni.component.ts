import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnotazioniEntity, getAllAnnotazioni, getAnnotazioniLoaded, loadAnnotazioniFailure, loadAnnotazioniInit, loadAnnotazioniSuccess, loadUpdateannotazioneFailure, loadUpdateannotazioneSuccess } from '@frontend/example-central-lib';
import { IonSearchbar, LoadingController } from '@ionic/angular';
import { AnnotazioniEffects } from 'libs/example-central-lib/src/lib/+state/annotazioni/annotazioni.effects';
import { Observable } from 'rxjs';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { map,skip } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'frontend-annotazioni',
  templateUrl: './annotazioni.component.html',
  styleUrls: ['./annotazioni.component.scss']
})
export class AnnotazioniComponent implements OnInit {
  //costruttore con l'accesso allo store e al routing
  constructor(private store: Store, private router: Router,
    private actionListener$: ActionsSubject,private alertController: AlertController
    ,private loadingController: LoadingController
    ){  }
  //proprietà del componente che richiano i selectors
  list$: Observable<AnnotazioniEntity[]> = this.store.pipe(select(getAllAnnotazioni));
  isLoaded$: Observable<any> = this.store.pipe(select(getAnnotazioniLoaded));
  spinnerMessage: string = "Caricamento in corso";
  //bottone che esegue il dispatch della action init
  buttonLoadAnnotazioni() {
    
    this.store.dispatch(loadAnnotazioniInit());
  }
  @ViewChild('autofocus', { static: false }) searchbar: IonSearchbar;

  ngOnInit(): void {
    this.loadingShow();
    this.buttonLoadAnnotazioni();
    

    this.actionListener$.pipe(skip(1) // optional: skips initial logging done by ngrx
    ).pipe(ofType(loadAnnotazioniFailure),
      ).subscribe((action) => {
        console.log("Errore:" + action.error.message);
        this.alertError(action.error.message + JSON.stringify(action.error), "" );
      });
    setTimeout(() => {if (this.isLoaded$ && this.searchbar) {this.searchbar.setFocus()}}, 1000);

    this.actionListener$.pipe(skip(1) // optional: skips initial logging done by ngrx
    ).pipe(ofType( loadAnnotazioniSuccess ),
      ).subscribe((action) => {
        this.loadingHide();
      });
  }
  async alertError(message:string, routerTo: string) {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Alert',
      //subHeader: 'Errore',
      message: message,
      buttons: [{text:'OK'
        ,handler: (el) => {   this.router.navigate([routerTo]);  }
      }]
      
    });
    await alert.present();
    this.loadingHide();
  }
  async loadingShow() { //https://ionicframework.com/docs/api/loading
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 3000000,
      spinner: 'circles'
    });
    loading.present();
    console.log("loadingShow present");
  }
  async loadingHide(){ //https://www.positronx.io/ionic-loading-controller-tutorial-with-ion-loading-example/
    console.log("loadingHide");
    const popover = await this.loadingController.getTop();
    if (popover)
      await popover.dismiss(null);    
    else  
      setTimeout(() => {this.loadingHide()}, 1000);
  }	

  filtra( el : any){
    const value=el.target.value;
    this.list$ = this.store.pipe(select(getAllAnnotazioni)).pipe(
      map(items => items.filter( item => item.nome.toLowerCase().indexOf(value) > -1 ))
    );
  }
  getImage(value){
    if (value=="arrow") return "arrow-forward";
    if (value=="attivo") return "checkmark";
    return "close";
  }

  //gestione ritornata dal selezione multipla
  selectedToCaller(event){
    const l : any[]=event;
    this.list$ = this.store.pipe(select(getAllAnnotazioni)).pipe(
      //per visualizzare solo i selezionati
      //map(items => items.filter( item => l.findIndex ( x => x.id == item.id)>=0 ? item : null ))
      //cambio lo stato,cio+ ciclo per ogni elemento, se è nella lista event cambio lo stato
      map( li => {
        let listaa : AnnotazioniEntity[]=[];
        li.forEach( el=> { 
          if (l.findIndex ( x => x.id == el.id)>=0){el.stato="arrow"; }
          listaa.push(el); 
        })
        return listaa;
      })
    );
  }

}
