import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [

     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'inventario',
      autoLoadEntities: true,
      synchronize: true, // en desarrollo, true; en producción, false
    }),

     UsersModule,

     AuthModule,

     CategoriesModule,

     ProductsModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
