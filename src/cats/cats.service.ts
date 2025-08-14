import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CatsService {
  constructor(private readonly httpService: HttpService) {}

  async getCats() {
    const response = await firstValueFrom(this.httpService.get('https://cataas.com/cat?json=true'),)
    const cats = response.data
    return {id: cats.id, url: `https://cataas.com/cat/${cats.id}`};
  }

  async findOne(id: string) {
    const response = await firstValueFrom(this.httpService.get(`https://cataas.com/cat/${id}`),)
    const cat = response.data
    return {id: cat.id, url: `https://cataas.com/cat/${cat.id}`};
  }
}
