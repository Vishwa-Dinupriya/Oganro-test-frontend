import { Component, OnInit } from '@angular/core';
import { LoremPicsumListService } from '../../services/lorem-picsum-list.service';

@Component({
  selector: 'app-lorem-picsum-list',
  templateUrl: './lorem-picsum-list.component.html',
  styleUrls: ['./lorem-picsum-list.component.css']
})
export class LoremPicsumListComponent implements OnInit {

  loremPics: any;
  constructor(private loremPicsumListService: LoremPicsumListService) { }

  ngOnInit(): void {
    this.getLoremPics();
  }

  getLoremPics(): any{
    this.loremPicsumListService.getLoremPicsums().subscribe({
      next: res => {
        this.loremPics = res;
      },
      error: error => {
        console.log(error);
      }
    })

  }
}
