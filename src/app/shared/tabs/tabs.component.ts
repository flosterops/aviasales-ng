import {Component, Input, OnInit} from '@angular/core';
import {ITabModel} from './models';
import { PriceTabs } from './config';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() tabs = [] as ITabModel[];
  public activeTabId: string;

  constructor() { }

  ngOnInit(): void {
    this.tabs = PriceTabs;
    this.setActiveTabId(this.tabs[0].id);
  }

  onTabChange(id: string): void {}

  setActiveTabId(id: string): void {
    this.activeTabId = id;
  }

}
