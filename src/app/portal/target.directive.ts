import {Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {PortalService} from "./portal.service";

@Directive({
  selector: '[appTarget]'
})
export class TargetDirective implements OnInit {

  @Input('appTarget') targetName: string

  constructor(
      private portalService: PortalService,
      private viewContainer: ViewContainerRef
  ) { }

  ngOnInit() {
    this.portalService.addTarget(this.targetName, this.viewContainer)
  }

}
