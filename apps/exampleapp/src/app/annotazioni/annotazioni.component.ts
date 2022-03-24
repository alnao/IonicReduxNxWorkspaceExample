import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnotazioniEntity, getAllAnnotazioni, getAnnotazioniLoaded, loadAnnotazioniInit } from '@frontend/example-central-lib';
import { select, Store } from '@ngrx/store';
import { AnnotazioniEffects } from 'libs/example-central-lib/src/lib/+state/annotazioni/annotazioni.effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'frontend-annotazioni',
  templateUrl: './annotazioni.component.html',
  styleUrls: ['./annotazioni.component.scss']
})
export class AnnotazioniComponent implements OnInit {
  //costruttore con l'accesso allo store e al routing
  constructor(private store: Store, private router: Router) {  }
  //proprietà del componente che richiano i selectors
  list$: Observable<AnnotazioniEntity[]> = this.store.pipe(select(getAllAnnotazioni));
  isLoaded$: Observable<any> = this.store.pipe(select(getAnnotazioniLoaded));
  //bottone che esegue il dispatch della action init
  buttonLoadAnnotazioni() {
    this.store.dispatch(loadAnnotazioniInit());
  }

  ngOnInit(): void {this.buttonLoadAnnotazioni();}

  filtra( el : any){
    const value=el.target.value;
    this.list$ = this.store.pipe(select(getAllAnnotazioni)).pipe(
      map(items => items.filter( item => item.nome.toLowerCase().indexOf(value) > -1 ))
    );
  }

}
