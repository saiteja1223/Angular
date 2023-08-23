import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
    array:any=[];
  data1:any="";
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files?.length) {
      const selectedFile = inputElement.files[0];
      console.log('Selected file:', selectedFile);
      this.data1=selectedFile.name;
      this.array.push(this.data1)
      console.log(inputElement.files[0])
      // You can perform further actions with the selected file, such as uploading it or processing it.
    }
  }
}
