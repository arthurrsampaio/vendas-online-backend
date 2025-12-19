import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env.development.local'],
  }),
  TypeOrmModule.forRoot({
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    type: 'postgres',
    entities: [`${__dirname}/**/*.entity{.ts,.js}`],
    migrations: [`${__dirname}/migration/{.ts,*.js}`],
    migrationsRun: true,
  }),
    UserModule,
    StateModule,
    CityModule,
    AddressModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
