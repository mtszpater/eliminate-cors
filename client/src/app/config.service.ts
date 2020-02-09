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
    return this.http.get("http://127.0.0.1:8080/hello", httpOptions);
  }
}
