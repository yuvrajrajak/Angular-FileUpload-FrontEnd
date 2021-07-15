import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'SingleFileUpload';
  image;
  images = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  selectImage(event) {
    if (event.target.files.length > 0) {
      console.log(event);
      console.log(event.target.files);
      // const file = event.target.files[0];
      // this.images = file;
      // this.images = event.target.files;
      this.images = event.target.files;

      // console.log(this.image);
    }
  }

  onSubmit() {
    //  const formData = new FormData();
    //  formData.append('file',this.image);

    const formData = new FormData();

    for (let img of this.images) {
      formData.append('files', img);
    }

    // this.http.post<any>('http://localhost:5000/file', formData).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );

    this.http.post<any>('http://localhost:5000/multiple', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
