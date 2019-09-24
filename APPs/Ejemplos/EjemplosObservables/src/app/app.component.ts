import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EjemplosObservables';

  observable = new Observable( susbscriptor => {
    susbscriptor.next(1);
    susbscriptor.next(2);
    susbscriptor.next(3);
  });




}
