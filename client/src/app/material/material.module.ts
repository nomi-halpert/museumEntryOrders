import { NgModule } from '@angular/core';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogActions} from '@angular/material/dialog';
import {MatDialogClose} from '@angular/material/dialog';
import {MatDialogContent} from '@angular/material/dialog';
import {MatDialogTitle} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({

imports: [
    MatFormFieldModule, MatInputModule,MatButtonToggleModule, FormsModule, MatButtonModule, MatIconModule,MatButtonModule//,MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule
],

exports: [
    MatFormFieldModule, MatInputModule,MatButtonToggleModule, FormsModule, MatButtonModule, MatIconModule, MatButtonModule//,MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule
]
})

export class MaterialModule {}