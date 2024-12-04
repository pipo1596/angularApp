import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule explicitly
import { HttpClient } from '@angular/common/http';  // Import HttpClient

@Component({
  selector: 'app-root',
  standalone: true,  // Marking this as a standalone component
  imports: [RouterOutlet, SharedModule, HttpClientModule],  // Add HttpClientModule to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = '';
  fullname = '';
  loading=true;
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
    this.http.get('https://10.32.234.54/cgi/CGOELMBLOG',{withCredentials:true}).subscribe(response => {

      this.data = response;
      if(this.data.title) this.title = this.data.title;
      if(this.data.fullname) this.fullname = this.data.fullname;
      document.getElementById("loader")?.classList.add("d-none");
      this.loading =false;
    });
  }

  
  

}
