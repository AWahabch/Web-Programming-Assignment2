import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-send-image',
  templateUrl: './send-image.component.html',
  styleUrls: ['./send-image.component.css']
})
export class SendImageComponent implements OnInit {

  selectedFile: File;
  selectedFileName: string = '';
  loadedImage: boolean = false;  
  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    var fileType = event.target.files[0]["type"];
    // Check for valid files
    var validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if (validImageTypes.includes(fileType)) {
      this.selectedFile = event.target.files[0];
      this.selectedFileName = this.selectedFile.name;
      this.loadedImage = true;            
    }
  }

  onUpload() {
    this.sendBase64(this.selectedFile);
  }

  sendBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    var _this = this;
    reader.onload = function () {
      _this.chatService.sendImage(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }


}
