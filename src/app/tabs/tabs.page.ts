import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { SheetPage } from '../sheet/sheet.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private modalCtrl: ModalController) {} // inject the modal controller

  // below code will add a bottom sheet to the page
  //bottom sheet start
  async add() {
    // create a modal
    const modal = await this.modalCtrl.create({
      component: SheetPage, // the component to show
      breakpoints: [0.8], // 70% of screen height
      initialBreakpoint: 0.8, // start at 70% of screen height
      handle: false, // hide the handle
    });

    await modal.present(); // show the modal
  }
  //bottom sheet end
}
