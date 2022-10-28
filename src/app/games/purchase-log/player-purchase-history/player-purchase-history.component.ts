import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-purchase-history',
  templateUrl: './player-purchase-history.component.html',
  styleUrls: ['./player-purchase-history.component.scss']
})
export class PlayerPurchaseHistoryComponent implements OnInit {
  @Input() teamPlayers: [];
  constructor() {}

  ngOnInit() {}
}
