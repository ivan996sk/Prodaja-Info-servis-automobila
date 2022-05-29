import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Automobil } from '../models/automobil';
import { LibraryServiceService } from '../services/library.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  automobili?:Automobil[]
  constructor(private library : LibraryServiceService, private router:Router) { }

  ngOnInit(): void {
    
    this.library.dajAutomobile().subscribe(automobili =>{
      this.automobili = automobili
    })
  }

  pogledaj(id:String)
  {
    this.router.navigate(["/automobil/"+id])
  }

  izmeni(automobil:Automobil)
  {
    this.router.navigate(['/izmeniAutomobil/'+automobil.id])
  }

  obrisi(automobil:Automobil)
  {
    this.library.obrisiAutomobil(automobil.id).subscribe(req=>{
      
        this.library.dajAutomobile().subscribe(automobili =>{
          this.automobili = automobili
        })
    })
  }

}
