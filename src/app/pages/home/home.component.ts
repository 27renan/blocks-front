import { Component, OnInit } from '@angular/core';
import { BlocksService } from 'src/app/services/blocks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listCards: any[] = [];
  newChamada: any;
  skip = 0;
  take = 10;

  constructor(private service: BlocksService) { }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.service.findAll().subscribe({
      next: (data) => {
        this.listCards = data;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }



  nextBlocks() {
    this.skip += 10;
    this.service.newFind(this.skip).subscribe({
      next: (data) => {
        this.listCards = data;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }


}
