import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  input,
  effect,
  inject,
} from '@angular/core';

@Directive({
  selector: '[showOnce]',
  exportAs: 'showOnce',
  standalone: true
})
export class ShowOnceDirective {
  key = input('', { alias: 'showOnce' });
  private templateRef = inject(TemplateRef<unknown>);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      this.viewContainerRef.clear();
      const value = localStorage.getItem(this.key());
      if (!value) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    });
  }

  clear() {
    localStorage.setItem(this.key(), 'true');
    this.viewContainerRef.clear();
  }
}


// how to use in template
//  <ng-template showOnce="bannerDismissed" #showOnce="showOnce">
//     <app-welcome-banner (dismiss)="showOnce.clear()"></app-welcome-banner>
//   </ng-template>