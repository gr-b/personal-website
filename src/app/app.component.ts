import { Component } from '@angular/core';
declare var UIkit:any;
export const uikit = UIkit;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title changed';
  showAlert(): void {
    UIkit.modal.alert('UIkit alert!');
  }
}
