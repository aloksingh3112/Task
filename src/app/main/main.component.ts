import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  videoDatas = [
    {
      videoLink: "https://www.youtube.com/embed/sJG-rXBbmCc",
      about: "This is my first video ",
      views: "15M Views",
      date: "1 Month Ago",
      image:
        "https://i.dailymail.co.uk/i/pix/2017/02/02/21/3CB97D1300000578-0-One_of_the_beautiful_people_Actress_Angelina_Jolie_Photography_h-a-132_1486072162004.jpg"
    },
    {
      videoLink: "https://www.youtube.com/embed/sJG-rXBbmCc",
      about: "This is my tech video",
      views: "15k Views",
      date: "2 Month Ago",
      image:
        "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA="
    },
    {
      videoLink: "https://www.youtube.com/embed/sJG-rXBbmCc",
      about: "There is lot of stuff",
      views: "20k Views",
      date: "3 month ago ",
      image:
        "https://static.spin.com/files/2019/01/GettyImages-923487444-1546559810-640x427.jpg"
    },
    {
      videoLink: "https://www.youtube.com/embed/sJG-rXBbmCc",
      about: "There is lot of stuff",
      views: "20k Views",
      date: "3 month ago ",
      image:
        "https://video-images.vice.com/_uncategorized/1505214661961-emil.jpeg"
    },
    {
      videoLink: "https://www.youtube.com/embed/sJG-rXBbmCc",
      about: "There is lot of stuff",
      views: "20k Views",
      date: "3 month ago ",
      image:
        "https://www.billboard.com/files/styles/article_main_image/public/media/ed-sheeran-and-khalid-mtv-vmas-2017-a-billboard-1548.jpg"
    },
    {
      videoLink: "https://www.youtube.com/embed/sJG-rXBbmCc",
      about: "There is lot of stuff of phone",
      views: "20k",
      date: "3 month ago ",
      image:
        "https://curiosityhuman.com/wp-content/uploads/2017/01/Michael-Jackson-Most-beautiful-People-in-the-world.jpg"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
