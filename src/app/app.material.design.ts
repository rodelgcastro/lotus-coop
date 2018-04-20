import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatExpansionModule,
  MatTableModule,
  MatProgressBarModule
} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatTableModule,
    MatProgressBarModule
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatTableModule,
    MatProgressBarModule
  ]
})
export class AppMaterialDesignModule {}
