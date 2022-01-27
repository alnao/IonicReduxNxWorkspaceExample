import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnotazioniEntity, getAllAnnotazioni, getAnnotazioniLoaded } from '@frontend/example-central-lib';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'frontend-annotazione',
  templateUrl: './annotazione.component.html',
  styleUrls: ['./annotazione.component.scss']
})
export class AnnotazioneComponent implements OnInit {

  constructor(private store: Store, private router: Router,private route: ActivatedRoute) { }
  list$: Observable<AnnotazioniEntity[]> = this.store.pipe(select(getAllAnnotazioni)
  ).pipe(map(annotazioni => annotazioni.filter( annotazione => annotazione.id===this.route.snapshot.params.id)));
  isLoaded$: Observable<any> = this.store.pipe(select(getAnnotazioniLoaded));

  ngOnInit(): void {
  console.log(this.route.snapshot.params.id);
  //this.list$=this.list$.map(annotazioni => annotazioni.filter( annotazione => annotazione.id===this.route.snapshot.params.id));
  }

}
