import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
   providers: [SchoolsService]
})
export class HomePageComponent implements OnInit {
  public values: any[];

  constructor(private _dataService: SchoolsService) { }

  ngOnInit() {
  }

  // liveSearch(event){
  //   console.log(event);
  // }

  name = '';
  minlength=3;
 

  liveSearch(event: any) { // without type info
      this.name = event.target.value;
      var length  = event.target.value.length;
      
      if(length >= this.minlength){
          console.log("search me");

        return  this._dataService
          .getAll<any[]>()
          .subscribe((data: any[]) => this.values = data,
          error => () => {
            console.log('Something went wrong...');
               
          },
          () => {
            
            
            return this.values;
          });


      }else{
        console.log("Toooooo smaaaaaaaaaaaaaaaaal");
      }

    }
}
