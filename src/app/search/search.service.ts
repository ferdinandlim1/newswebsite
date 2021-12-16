import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SearchOption } from './searchOption';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private SERVER_URL = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=b779c8886401443db69b90daaa9744a6';

  constructor(private http: HttpClient) {}

  private selectedOption = new BehaviorSubject<SearchOption>({
    id: '',
    name: '',
    description: '',
    author: '',
    title: '',
    content: '',
  });

  private selectedOptions = new BehaviorSubject<SearchOption[]>([]);

  option$ = this.selectedOption.asObservable();
  options$ = this.selectedOptions.asObservable();

  isOptionEmpty$!: Observable<boolean>;

  isOptionsEmpty$!: Observable<boolean>;

  search(q: string): Observable<SearchOption[]> {
    return this.http.get<SearchOption[]>(
      this.SERVER_URL + 'products?title_like=' + q
    );
  }

  updateSelectedOption(option: SearchOption) {
    this.selectedOption.next(option);
  }

  updateSelectedOptions(options: SearchOption[]) {
    this.selectedOptions.next(options);
  }
}
