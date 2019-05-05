import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataGrabberService } from 'src/app/data-grabber.service';
import { BoatRecordContent } from 'src/app/models/player-boat-record';

@Component({
  selector: 'boats-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class BoatsSummaryComponent {}