import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemRecordContent } from 'src/app/models/player-item-record';
import { DataGrabberService } from 'src/app/data-grabber.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  ItemRecordList$: Observable<ItemRecordContent>;

  constructor(loader: DataGrabberService) { 
    this.ItemRecordList$ = loader.getItemData();
  }

  ngOnInit() {
  }

}
