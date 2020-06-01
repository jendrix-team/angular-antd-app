import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
    exports: [
        NzLayoutModule,
        NzMenuModule,
        NzGridModule
    ],
})
export class NgZorroAntdModule {}