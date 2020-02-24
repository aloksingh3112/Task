import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.css']
})
export class SidebarLinkComponent implements OnInit {
  @Input() link;

  constructor() { }

  ngOnInit() {
  }

}
