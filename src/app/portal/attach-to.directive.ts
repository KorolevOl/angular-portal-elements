import {Directive, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {PortalService} from "./portal.service";

@Directive({
  selector: '[appAttachTo]'
})
export class AttachToDirective implements OnInit, OnDestroy{
  @Input('appAttachTo') targetNmae: string

  constructor(
      private portalService: PortalService,
      private  template: TemplateRef<any>
  ) { }

  ngOnInit() {
    this.portalService.attachToTarget(this.targetNmae, this.template)
  }

  ngOnDestroy() {
    this.portalService.clearTarget(this.targetNmae)
  }

}
