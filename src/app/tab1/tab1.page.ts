import { Component } from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import homeData from '../../assets/data/home.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule, FormsModule],
})
export class Tab1Page {
  videos: any[] = [];
  segments: any[] = [];
  constructor() {
    this.segments = [
      // this is the array of segments
      'All',
      'New To You',
      'Gaming',
      'Sitcoms',
      'Computer Programming',
      'Documentaries',
      'Music',
    ].map((val) => ({
      // map the array to an object
      title: val,
      selected: false,
    }));

    this.videos = homeData;

    // setTimeout(() => {
    //   // simulate a delay
    //   this.selectSegment(0); // this is the default segment
    //   this.videos = homeData; // this is the array of videos
    // }, 5000); // 5 seconds
  }

  selectSegment(index: number) {
    // this is the function that will be called when a segment is clicked
    this.segments.map((val) => {
      // loop through the array of segments
      val.selected = false; // set all segments to false
    });
    this.segments[index].selected = true; // set the clicked segment to true
  }

  doRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }
}
