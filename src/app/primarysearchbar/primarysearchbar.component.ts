import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-primarysearchbar',
  templateUrl: './primarysearchbar.component.html',
  styleUrls: ['./primarysearchbar.component.css']
})
export class PrimarysearchbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  private onClick(){

    this.router.navigate(['advancedsearch']);
}
}
