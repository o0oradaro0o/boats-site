import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameSimple, content } from 'src/app/GameSimple';
import { DataGrabberService } from 'src/app/data-grabber.service';

@Component({
  selector: 'app-stat-dashboard',
  templateUrl: './stat-dashboard.component.html',
  styleUrls: ['./stat-dashboard.component.scss']
})
export class StatDashboardComponent implements OnInit {

  SimpleGamesList: Observable<content>;
  constructor(loader: DataGrabberService) {
    // .valueChanges is missing the initial value; add it:
    

    // List reacts to filter and sort changes
    this.SimpleGamesList = loader.getGames();

  }

  ngOnInit() {
  }

}
