import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nadvar',
  templateUrl: './nadvar.component.html',
  styleUrls: ['./nadvar.component.scss']
})
export class NadvarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label  : ' inicio', icon : ' pi pi-home ', url:'#home'},
      { label  : ' Sobre mi', icon: 'pi pi-user', url:'#about'},
      { label  : ' Habilidades', icon: 'pi pi-slack', url:'#habilidades' },
      // { label  : ' Trabajo', icon: 'pi pi-briefcase'  },
      { label  : ' Contacto', icon: 'pi pi-phone', url:'#contacto'  },
  ];
  }

}
