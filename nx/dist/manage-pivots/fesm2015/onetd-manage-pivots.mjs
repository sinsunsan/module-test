import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

class LibTestComponent {
}
LibTestComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LibTestComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LibTestComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: LibTestComponent, selector: "nx-lib-test", ngImport: i0, template: "<p>lib-test works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LibTestComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nx-lib-test', template: "<p>lib-test works!</p>\n" }]
        }] });

class ManagePivotsModule {
}
ManagePivotsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ManagePivotsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ManagePivotsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ManagePivotsModule, declarations: [LibTestComponent], imports: [CommonModule], exports: [LibTestComponent] });
ManagePivotsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ManagePivotsModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ManagePivotsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [LibTestComponent],
                    declarations: [LibTestComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { LibTestComponent, ManagePivotsModule };
//# sourceMappingURL=onetd-manage-pivots.mjs.map
