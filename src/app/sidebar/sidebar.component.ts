import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  image:string = "";
  constructor() { }

  ngOnInit(): void {
    this.image = 'https://th.bing.com/th/id/OIP.utlNG1U99Rc9yUqtUfc9ogHaDq?pid=ImgDet&rs=1'
  }

}
