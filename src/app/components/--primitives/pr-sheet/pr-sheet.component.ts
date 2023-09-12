import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {LittleCoreService} from 'src/app/services/little-core/little-core.service';
import {Player, Stats} from 'src/app/services/little-core/types';
import {MvpPopupDataService} from "../../../services/little-core/mvp-popup-data.service";

@Component({
  selector: 'app-pr-sheet',
  templateUrl: './pr-sheet.component.html',
  styleUrls: ['./pr-sheet.component.scss'],
})
export class PrSheetComponent implements OnChanges {
  @Input() players: Player[] = [];
  playersStats: Stats[] = [];

  constructor(private littleCoreService: LittleCoreService, private mvpPopupDataService: MvpPopupDataService) {}

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.players?.currentValue?.length) {
      const playerIds: number[] =  this.players.map((player: Player) => player.id)
      this.playersStats = await this.littleCoreService.getStats(playerIds);
      console.log(this.playersStats, 'this.playersStats', this.players);
      // if()
      this.setMvpPlayer(this.playersStats[0])
    }
  }
  private setMvpPlayer(player: Stats){
    this.mvpPopupDataService.set(player)
  }

  // private sortByFields(unsortedPlayers:Stats[]): Stats[]{
  //   const sortedPlayers: Stats[] = []
  //
  //   return sortedPlayers
  // }
}
