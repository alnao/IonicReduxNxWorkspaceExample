import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'frontend-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  provaLista: number[] ;
  provaTotale: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.provaLista = [...Array(10).keys()].filter(el => el % 2 == 0);
    this.provaTotale = this.provaLista.reduce((sum, element) => sum + element, 0);


    if (id) {
      this.folder = id;
    }
  }
}
