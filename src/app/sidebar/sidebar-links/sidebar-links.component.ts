import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-links',
  templateUrl: './sidebar-links.component.html',
  styleUrls: ['./sidebar-links.component.css']
})
export class SidebarLinksComponent implements OnInit {
  @Input() links;
  constructor() { }

  ngOnInit() {
  }

}
