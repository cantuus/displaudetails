import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showSecret = false;
  public logDataString: string;

  public logData = [];
  private counter = 0;

  public onToggle() {
    this.showSecret = !this.showSecret;

    this.counter++;

    this.logData.push(this.counter);
    this.logDataString = this.logData.toString();
  }
}
