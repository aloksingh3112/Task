import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  Links = [
    [
      { icon: "fa fa-home", name: "Home" },
      { icon: "fa fa-fire", name: "Trending" },
      {
        icon: "fa fa-film",
        name: "Subscriptions"
      }
    ],
    [
      { icon: "fa fa-folder", name: "Library" },
      {
        icon: "fa fa-history",
        name: "History"
      },
      {
        icon: "fa fa-clock-o",
        name: "Watch Later"
      },
      {
        icon: "fa fa-thumbs-up",
        name: "Liked Videos"
      },
      {
        icon: "fa fa-arrow-down",
        name: "Show More"
      }
    ],
    [
      {
        icon: "fa fa-youtube-play",
        name: "Youtube Premium"
      },
      {
        icon: "fa fa-film",
        name: "Youtube Movies"
      },
      {
        icon: "fa fa-gamepad",
        name: "Gaming"
      },
      {
        icon: "fa fa-rss",
        name: "Live"
      },
      {
        icon: "fa fa-shopping-bag",
        name: "Fashion"
      }
    ]
  ];

  constructor() { }

  ngOnInit() {
  }

}
