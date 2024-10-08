import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsModule } from './payments/payments.module';
import { Payment } from './typeorm/entities/Payment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_payments_db',
      port: 3307,
      database: 'payments_db',
      entities: [
        Payment
      ],
      synchronize: true,
      username: 'testuser',
      password: 'secret',
    }),
    PaymentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
