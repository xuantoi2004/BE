import { Module } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { GeminiController } from './gemini.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileUtil } from 'file/file.util';
import { FileModule } from 'file/file.module';

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [FileModule],
      useFactory: (fileUtil: FileUtil) => ({
        fileFilter: fileUtil.validateImageFile,
        storage: diskStorage({
          destination: 'upload',
          filename: fileUtil.editFileName
        })
      }),
      inject: [FileUtil]
    })
  ],
  controllers: [GeminiController],
  providers: [GeminiService],
})
export class GeminiModule {}
