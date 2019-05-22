import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicineRoutingModule } from './medicine-routing.module';
import { MedicineComponent } from './medicine.component';

@NgModule({
    imports: [CommonModule, MedicineRoutingModule],
    declarations: [MedicineComponent]
})
export class MedicineModule {}
