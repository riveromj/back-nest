import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/:27017/mean-db'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('AppModule constructor', process.env);
  }
}
