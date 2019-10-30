import { Component, OnInit } from '@angular/core';
import { Position } from '@angular/compiler';
import { PositionServiceService } from '../data/position-service.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  positions : Position[] ;
  getPositionsSub: any;
  loadingError : boolean = false;

  constructor(private PositionsService: PositionServiceService) { }

  ngOnInit() {
    
    this.getPositionsSub = this.PositionsService.getPositions().subscribe( data => {
      this.positions = data;
    }, () => {
      this.loadingError = true;
    });
  
    
  }

  ngOnDestroy() {
    if(this.getPositionsSub){this.getPositionsSub.unsubscribe();}
  
  }
  
  getPositions(): void{
    this.PositionsService.getPositions()
    .subscribe(positions => this.positions = positions);
  }


}
