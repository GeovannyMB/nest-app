import { CreateCatDto } from './../cats/dto/cats.dto';
import { CreateDogDto } from './../dogs/dto/dogs.dto';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'catsapp',
        entities: [
          CreateCatDto, CreateDogDto
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];