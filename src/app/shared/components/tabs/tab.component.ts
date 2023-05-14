import { Component, Input } from "@angular/core";

@Component({
  selector: "ngx-tab",
  template: `<div [hidden]="!active" class="pane"><ng-content></ng-content></div>`,
  styles: [`.pane { padding: 10px 0;}`]
})
export default class TabComponent {
  @Input() tabTitle:string;
  @Input() active = false;
}
