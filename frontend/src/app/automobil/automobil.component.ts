import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Automobil } from '../models/automobil';
import { LibraryServiceService } from '../services/library.service';

@Component({
  selector: 'app-automobil',
  templateUrl: './automobil.component.html',
  styleUrls: ['./automobil.component.css']
})
export class AutomobilComponent implements OnInit {
  automobil?:Automobil
  automobiliM?:Automobil[]
  constructor(private library: LibraryServiceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(url =>{
      this.library.dajAutomobil(url["id"]).subscribe(automobil=>{
        this.automobil = automobil;
      })
    })
  }


  pogledaj(id:String)
  {
    this.router.navigate(["/automobil/"+id])
  }
}
