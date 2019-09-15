import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';

  getUrl()
{
  return "url('http://www.sclance.com/backgrounds/portfolio-background-image/portfolio-background-image_1793072.jpg')";
}
}
