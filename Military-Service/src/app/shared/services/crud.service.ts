import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class CrudService<T> {
  constructor(
    private readonly http: HttpClient,
    private readonly dataType: string
  ) {}

  findAll(): Observable<T[]> {
    return this.http
      .get<any>(`assets/mock/${this.dataType}.json`)
      .pipe(map((data) => data[this.dataType] as T[]));
  }
}
