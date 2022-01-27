import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAllAnnotazioni, getAnnotazioniLoaded, loadAnnotazioniInit } from '@frontend/example-central-lib';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'frontend-annotazioni',
  templateUrl: './annotazioni.component.html',
  styleUrls: ['./annotazioni.component.scss']
})
export class AnnotazioniComponent implements OnInit {

  //costruttore con l'accesso allo store e al routing
  constructor(private store: Store, private router: Router) { }
  //proprietà del componente che richiano i selectors
  list$: Observable<any> = this.store.pipe(select(getAllAnnotazioni));
  isLoaded$: Observable<any> = this.store.pipe(select(getAnnotazioniLoaded));
  //dispatch della action init
  loadAnnotazioni() {
    this.store.dispatch(loadAnnotazioniInit());
  }

  ngOnInit(): void { this.loadAnnotazioni();  }

}
