import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-planes',
  templateUrl: './inicio-planes.component.html',
  styleUrls: ['./inicio-planes.component.css']
})
export class InicioPlanesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BTNr_completo(){
    this.router.navigate(['registro-completo'])  
  }

}
