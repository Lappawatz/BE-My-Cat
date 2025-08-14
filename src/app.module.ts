import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:example@localhost:27017/be-my-cataas?authSource=admin'), CatsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
