import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent implements OnInit {
  @Input()
  public flightNumber: number;
  @Input()
  public missionName: string;
  @Input()
  public rocketImageLink: string;
  @Input()
  public missionIds: Array<any>;
  @Input()
  public launchYear: string;
  @Input()
  public successfulLaunch: boolean;
  @Input()
  public successfulLanding: boolean;

  constructor() {}

  ngOnInit(): void {}
}
