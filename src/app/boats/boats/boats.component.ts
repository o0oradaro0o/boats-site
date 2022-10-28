import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemRecordContent } from 'src/app/models/player-item-record';
import { DataGrabberService } from 'src/app/data-grabber.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.scss']
})
export class BoatsComponent implements OnInit {
  BoatRecordList: Observable<ItemRecordContent>;

  constructor(loader: DataGrabberService) {
    this.BoatRecordList = loader.getBoatData();
  }

  ngOnInit() {}
}
