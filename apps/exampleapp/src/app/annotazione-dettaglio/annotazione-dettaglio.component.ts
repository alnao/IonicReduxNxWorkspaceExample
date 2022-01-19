import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAllAnnotazioni, getAnnotazioniLoaded } from '@frontend/example-central-lib';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'frontend-annotazione-dettaglio',
  templateUrl: './annotazione-dettaglio.component.html',
  styleUrls: ['./annotazione-dettaglio.component.scss']
})
export class AnnotazioneDettaglioComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }
  list$: Observable<any> = this.store.pipe(select(getAllAnnotazioni));
  isLoaded$: Observable<any> = this.store.pipe(select(getAnnotazioniLoaded));

  ngOnInit(): void {
  }

}
