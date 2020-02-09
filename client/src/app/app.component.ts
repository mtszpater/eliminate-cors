import {Component} from '@angular/core';
import {ConfigService} from "./config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private configService: ConfigService){
    this.configService.getHello().subscribe(value => console.log(value));
  }


}
