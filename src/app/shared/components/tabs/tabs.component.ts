import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit
} from "@angular/core";

import TabComponent from "./tab.component";

@Component({
  selector: "ngx-tabs",
  template: `
    <div class="tabs-container">
      <ul class="nav nav-tabs">
        <li *ngFor="let tab of tabs" class="tab" [ngClass]="{'active': tab.active === true }" (click)="selectTab(tab)">{{ tab.tabTitle }} </li>
      </ul>
      <ng-content ></ng-content>
    </div>
  `,
  styles: [
    `
      .tabs-container {
        min-height: 179px;
        max-height: 332px;
        margin:10px 20px;
      }
      .tabs-container .tab{
        border-radius:5px 5px 0 0;
        padding:10px;
        text-align:center;
        width:50%;
        background: rgba(18, 92, 142, 0.75);
        cursor: pointer;
        color: white;

      }
      .tabs-container .tab:hover{
         
         /*border-radius:2px;*/
           opacity:90%;
      }
       .tabs-container .tab.active{
         color:white;
         background-color:#125C8E;
         border-bottom:4px solid #5CBA60;
         }
    `
  ]
})
export default class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor() {
    console.log(this.tabs);
  }
  ngAfterContentInit() {
    console.log(this.tabs);
    const activeTabs = this.tabs.filter(tab => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(tab => (tab.active = false));
    tab.active = true;
  }
}
