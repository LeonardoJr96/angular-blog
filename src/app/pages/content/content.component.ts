import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string ="https://th.bing.com/th/id/OIP.0flS2ZP6BT4WxWWsiAemCgHaER?pid=ImgDet&rs=1"
  contentTitle:string ="NOTICIA EXEMPLO"
  contentDescription:string ="bla bla bla"

  constructor(
    private ROUTE:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ROUTE.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
