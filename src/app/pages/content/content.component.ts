import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string ="https://th.bing.com/th/id/OIP.0flS2ZP6BT4WxWWsiAemCgHaER?pid=ImgDet&rs=1"
  contentTitle:string =""
  contentDescription:string =""

  constructor() { }

  ngOnInit(): void {
  }

}
