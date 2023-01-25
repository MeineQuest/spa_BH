import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.scss']
})
export class AddPeopleComponent {

  name = "";
  link = "";

  constructor(
    public dialogRef: MatDialogRef<AddPeopleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isBuyer: boolean, people: string },
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    if(this.data.isBuyer){
      this.dialogRef.close({name: this.name, link: this.link});
    }else{
      this.dialogRef.close({name: this.name});
    }
  }
}
