import { createLoweredSymbol } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "src/app/services/housing.service";
import { IPropertyBase } from "../../model/iPropertyBase";

@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.component.html",
  styleUrls: ["./property-list.component.scss"],
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: IPropertyBase[];

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    // this.http.get('data/properties.json').subscribe(
    //   data => {
    //     this.properties = data
    //     console.log(data)
    //   }
    // )

    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(
      (data) => {
        this.properties = data;

        // const newProperty = JSON.parse(localStorage.getItem("newProp"));
        // console.log(newProperty[0]);
        // if (newProperty[0].SellRent === this.SellRent) {
        //   this.properties = [newProperty[0], ...this.properties];
        // }
        // console.log(data);
        // console.log(this.route.snapshot.url.toString());
      },
      (error) => {
        console.log("http-error");
        console.log(error);
      }
    );
  }
}
