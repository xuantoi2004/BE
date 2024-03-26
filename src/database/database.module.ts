import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createDataSourceOptions } from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return createDataSourceOptions()
      }
    })
  ]
})
export class DatabaseModule {}
