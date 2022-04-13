import { Component, OnInit, SystemJsNgModuleLoader, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnotazioniEntity, getAllAnnotazioni, getAnnotazioniLoaded, loadAnnotazioniFailure, loadAnnotazioniInit, loadAnnotazioniSuccess, loadUpdateannotazioneFailure, loadUpdateannotazioneSuccess } from '@frontend/example-central-lib';
import { IonSearchbar } from '@ionic/angular';
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
    ){  }
  //proprietà del componente che richiano i selectors
  list$: Observable<AnnotazioniEntity[]> = this.store.pipe(select(getAllAnnotazioni));
  isLoaded$: Observable<any> = this.store.pipe(select(getAnnotazioniLoaded));
  //bottone che esegue il dispatch della action init
  buttonLoadAnnotazioni() {
    this.store.dispatch(loadAnnotazioniInit());
  }
  @ViewChild('autofocus', { static: false }) searchbar: IonSearchbar;

  ngOnInit(): void {
    this.buttonLoadAnnotazioni();
    

    this.actionListener$.pipe(skip(1) // optional: skips initial logging done by ngrx
    ).pipe(ofType(loadAnnotazioniFailure),
      ).subscribe((action) => {
        console.log("Errore:" + action.error.message);
        this.alertError(action.error.message , "" );
      });
    setTimeout(() => this.searchbar.setFocus(), 300);
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
  }

  filtra( el : any){
    const value=el.target.value;
    this.list$ = this.store.pipe(select(getAllAnnotazioni)).pipe(
      map(items => items.filter( item => item.nome.toLowerCase().indexOf(value) > -1 ))
    );
  }

}
