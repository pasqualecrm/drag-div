import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements OnInit {
  src!: string | ArrayBuffer | null;
  imageList: Array<string | ArrayBuffer>  = [];
  constructor() { }

  ngOnInit(): void {
  }

  openFile(ev: DragEvent) {

    if (ev!.dataTransfer!.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev!.dataTransfer!.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev!.dataTransfer!.items[i].kind === 'file') {
          let file = this.uploadFile(ev!.dataTransfer!.items[i].getAsFile()) ;
        }
      }
    }
  }

  uploadFile(file: any) {
    let reader = new FileReader()
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        if(reader.result){
          // console.log(typeof reader.result)
           this.imageList = [...this.imageList, reader.result]
        }
        // this.src = reader.result;
      }
    }
  }

}
