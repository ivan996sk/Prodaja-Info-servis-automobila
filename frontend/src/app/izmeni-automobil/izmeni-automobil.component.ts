import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Automobil } from '../models/automobil';
import { LibraryServiceService } from '../services/library.service';

@Component({
  selector: 'app-izmeni-automobil',
  templateUrl: './izmeni-automobil.component.html',
  styleUrls: ['./izmeni-automobil.component.css']
})
export class IzmeniAutomobilComponent implements OnInit {
  automobil?:Automobil
  izmenio?:boolean
  constructor(private router:Router,private library:LibraryServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(url=>{
      this.library.dajAutomobil(url["id"]).subscribe(automobil =>{
        this.automobil = automobil
      })
    })
  }

  izmeni(automobil?:Automobil)
  {
    this.library.izmeniAutomobil(automobil).subscribe(automobil=>{
      this.route.params.subscribe(url=>{
        this.library.dajAutomobil(url["id"]).subscribe(automobil =>{
          this.automobil = automobil
          this.izmenio = true;
        })
      })
    })
  }

  back()
  {
    this.router.navigate(["/homepage"])
  }



}
