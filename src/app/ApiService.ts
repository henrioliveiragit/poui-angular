import axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.restful-api.dev/objects';

  constructor() { }

  public getObjects(): Promise<{ id: number; name: string; }[]> {
    return axios.get(this.apiUrl)
      .then(response => response.data.map((obj: any) => ({ id: obj.id, name: obj.name })))
      .catch(error => console.error('There was an error!', error));
  }
}
