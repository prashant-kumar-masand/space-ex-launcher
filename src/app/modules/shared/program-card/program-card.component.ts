import { Component, OnInit, Input, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';

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
  public isPlatformServer: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isPlatformServer = isPlatformServer(this.platformId);
  }

  ngOnInit(): void {}
}
