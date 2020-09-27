import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxGalleryImage } from "@kolkov/ngx-gallery/lib/ngx-gallery-image";
import { NgxGalleryOptions } from "@kolkov/ngx-gallery/lib/ngx-gallery-options";
import { NgxGalleryAnimation } from "@kolkov/ngx-gallery";
import { Property } from "src/app/model/property";
import { HousingService } from "src/app/services/housing.service";

@Component({
  selector: "app-property-detail",
  templateUrl: "./property-detail.component.html",
  styleUrls: ["./property-detail.component.scss"],
})
export class PropertyDetailComponent implements OnInit {
  propertyId: number;
  counter: number;
  property = new Property();

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService
  ) {}

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params["id"];
    this.route.data.subscribe((data: Property) => {
      this.property = data["prp"];
    });
    // this.route.params.subscribe((params) => {
    //   this.propertyId = +params["id"];
    //   this.housingService.getProperty(this.propertyId).subscribe(
    //     (data: Property) => {
    //       this.property = data;
    //     },
    //     (error) => this.router.navigate(["/"])
    //   );
    // });

    this.galleryOptions = [
      {
        width: "100%",
        height: "465px",
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: "100%",
        height: "600px",
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    this.galleryImages = [
      {
        small: "assets/images/gallery/1/1-small.jpg",
        medium: "assets/images/gallery/1/1-medium.jpg",
        big: "assets/images/gallery/1/1-big.jpg",
      },
      {
        small: "assets/images/gallery/1/5.jpg",
        medium: "assets/images/gallery/1/6.jpg",
        big: "assets/images/gallery/1/7.jpg",
      },
      {
        small: "assets/images/gallery/1/8.jpg",
        medium: "assets/images/gallery/1/9.jpg",
        big: "assets/images/gallery/1/10.jpg",
      },
      {
        small: "assets/images/gallery/1/11.jpg",
        medium: "assets/images/gallery/1/12.jpg",
        big: "assets/images/gallery/1/13.jpg",
      },
    ];
  }
  onSelectNext() {
    this.propertyId += 1;
    this.router.navigate(["property-detail", this.propertyId]);
    this.counter = this.counter + 1;
  }
}
