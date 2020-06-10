import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appEmptyBucket]',
})
export class EmptyBucketDirective {
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

    @Input() set emptyBucket(condition: boolean) {
        if (condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}
