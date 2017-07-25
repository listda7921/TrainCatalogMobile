import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {NgZone} from '@angular/core';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  public message = 'testing';
  public options: CameraOptions = {
    quality: 100,
    targetWidth: 500,
    correctOrientation: true,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  public options2: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    targetWidth: 500,
    correctOrientation: true,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  constructor(public apiPro: ApiProvider, public navCtrl: NavController, private camera: Camera, private ngZone: NgZone) {
    //this.base64Image = "https://unsplash.it/200/300/?random";
    this.ngZone = new NgZone({ enableLongStackTrace: false });
  }
  sendPhoto() {
    console.log(this.base64Image);
    this.message = 'Sending Photo...';
    this.apiPro.sendPhoto(this.base64Image).subscribe((data) => {
      this.message = data.message;
      this.base64Image = null;
    })
  }
  selectPhoto() {
    this.camera.getPicture(this.options2).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(this.base64Image);
      console.log(this.base64Image);
    }, (err) => {
      alert(err);
      // Handle error
    });
  }
  getPhoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(this.base64Image);
      console.log(this.base64Image);
    }, (err) => {
      alert(err);
      // Handle error
    });
  }
}
