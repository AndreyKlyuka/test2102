import {Component, Input, OnInit} from '@angular/core';
import {Stats} from "../../../services/little-core/types";

@Component({
  selector: 'app-pr-mvp-player-popup',
  templateUrl: './pr-mvp-player-popup.component.html',
  styleUrls: ['./pr-mvp-player-popup.component.scss']
})
export class PrMvpPlayerPopupComponent{
  @Input()mvpPlayer!: Stats

  public normalizeStat(stat: string | number): string | number{
    return stat || '-'
  }
}
