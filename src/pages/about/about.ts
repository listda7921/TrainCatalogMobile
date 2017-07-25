import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Content } from 'ionic-angular';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Content) content: Content;
  public photos;
  public results;
  public dbResults;
  public folderResults;
  public date_uploaded;
  constructor(public api: ApiProvider, public navCtrl: NavController) {
    this.results = {
      base64: '',
      db: {
        date_uploaded: ''
      }
    }
    this.api.getPhotos().subscribe((data) => {
      console.log(data);
      this.results = data;
      this.photos = data.results;
      this.dbResults = data.dbResults;
      this.folderResults = data.folderResults;
      this.date_uploaded = data.date_uploaded;
      this.arraySort();
    });
  }
  doRefresh(refresher) {
    this.api.getPhotos().subscribe((data) => {
      console.log(data);
      this.results = data;
      this.photos = data.results;
      this.dbResults = data.dbResults;
      this.folderResults = data.folderResults;
      this.date_uploaded = data.date_uploaded;
      this.arraySort();
      refresher.complete();
    });
  }
  scrollToTop() {
    this.content.scrollToTop();
  }
  arraySort() {
    this.photos.sort((a1, a2) => {
      return a2.db.id - a1.db.id;
    })
    console.log(this.photos);
  }
}
