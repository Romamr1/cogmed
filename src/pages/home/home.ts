import { Component, ViewContainerRef } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';

import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModal } from './custom-modal-sample';



import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    overlay: Overlay,
    vcRef: ViewContainerRef,
    public modal: Modal,

  ) {
    overlay.defaultViewContainer = vcRef;
  }

  chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  chartLabels: string[] = ['Test 1', 'Test 2', 'Test 3', 'Test 4'];
  chartType: string = 'bar';
  chartLegend: boolean = true;

  chartData: any[] = [
    { data: [75, 80, 45, 100], label: 'Student A' },
    { data: [80, 55, 75, 95], label: 'Student B' },
    { data: [60, 20, 90, 45], label: 'Student C' }
  ];

  ngOnInit() { this.openCustom(); }

  onClick() {
    this.chartData = [
      { data: [0, 0, 45, 100], label: 'Student A' },
      { data: [80, 55, 0, 0], label: 'Student C' },
      { data: [60, 0, 90, 0], label: 'Student C' }
    ];
  }
	seyHello(){
		console.log('hello');
	}
  openCustom() {
    return this.modal.open(CustomModal,  overlayConfigFactory({}, BSModalContext));
  }
}
