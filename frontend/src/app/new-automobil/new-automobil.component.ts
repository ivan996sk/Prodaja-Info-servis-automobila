import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Automobil } from '../models/automobil';
import { LibraryServiceService } from '../services/library.service';

@Component({
  selector: 'app-new-automobil',
  templateUrl: './new-automobil.component.html',
  styleUrls: ['./new-automobil.component.css']
})
export class NewAutomobilComponent implements OnInit {

  automobil:Automobil= {} as Automobil
  constructor(private router:Router, private library: LibraryServiceService) { }

  ngOnInit(): void {
    
  }


  back()
  {
    this.router.navigate(["/homepage"])
  }

  dodaj(automobil:Automobil)
  {
    this.library.unesiAutomobil(automobil).subscribe(automobil=>{
      this.router.navigate(["/automobil/"+automobil.id])
    })
  }


}
