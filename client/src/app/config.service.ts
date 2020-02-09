import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  getHello() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.get("http://localhost:3000/api/hello", httpOptions);
  }
}
