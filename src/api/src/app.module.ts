import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EstablishmentModule } from './establishment/establishment.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    EstablishmentModule,
    ItemsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
