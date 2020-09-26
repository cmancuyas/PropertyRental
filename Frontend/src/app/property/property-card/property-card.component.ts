import { Component, Input, OnInit } from "@angular/core";
import { IProperty } from '../../model/iProperty';

@Component({
  selector: "app-property-card",
  templateUrl: "property-card.component.html",
  styleUrls: ["property-card.component.scss"],
})
export class PropertyCardComponent implements OnInit {
  @Input() property: IProperty;
  @Input() hideIcons: boolean;
  constructor() {}

  ngOnInit() {}
}
