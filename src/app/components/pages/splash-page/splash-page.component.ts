import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { LittleCoreService } from 'src/app/services/little-core/little-core.service';
import {Player, Stats} from 'src/app/services/little-core/types';
import {MvpPopupDataService} from "../../../services/little-core/mvp-popup-data.service";

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss'],
})
export class SplashPageComponent implements OnInit, OnDestroy {
  players: Player[] = [];
  activePlayers: Player[] = [];
  popupMvpPlayerData!: Stats

  playersSubscription: Subscription | undefined;
  popupSubscription: Subscription | undefined;

  constructor(private littleCoreService: LittleCoreService, private mvpPopupDataService: MvpPopupDataService) {}

  ngOnInit(): void {
    this.initSubscriptions()
  }

  ngOnDestroy(): void {
    this.unsubscribeAllSubscriptions()
  }

  public toggleActive(index: number):void {
    this.players[index].isActive = !this.players[index].isActive;
    this.activePlayers = this.players.filter(
      (player: Player) => player.isActive
    );
  }
  private initSubscriptions(): void{
    this.playersSubscription = this.littleCoreService.players.subscribe(
        (players: Player[]) => (this.players = [...players])
    );
    this.popupSubscription = this.mvpPopupDataService.mvpPlayer$.subscribe(
        player => this.popupMvpPlayerData = player
    )
  }
  private unsubscribeAllSubscriptions():void{
    this.playersSubscription?.unsubscribe();
    this.popupSubscription?.unsubscribe()
  }
}
