import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Stats} from "./types";

@Injectable({
  providedIn: 'root'
})
export class MvpPopupDataService {
  private _mvpPlayer$: Subject<Stats> = new Subject<Stats>();
  public mvpPlayer$: Observable<Stats> = this._mvpPlayer$.asObservable()
  constructor() { }

  public set(player: Stats): void{
    this._mvpPlayer$.next(player)
  }
}
