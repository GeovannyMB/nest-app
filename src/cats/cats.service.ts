import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/cats.dto';

@Injectable()
export class CatsService {
  private cats: CreateCatDto[] = [];

  create(cat: CreateCatDto) {
    // inserir no banco de dados usando o repository
    this.cats.push(cat);
  }

  findAll(): CreateCatDto[] {
    // buscará todos os elementos do bd
    return this.cats;
  }

  findOne(id: number): CreateCatDto[]{
    const cat = this.cats.filter(value =>value.id === id);
    return cat;
  }

  remove(id: number){
    const remove_cat = this.cats.filter(value => value.id !== id);
    this.cats = remove_cat;
  }

  update(CreateCatDto: CreateCatDto){
    const cat = this.findOne(CreateCatDto.id);
    this.cats.map(value => value.id)
    
  }
}
