import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NatsClientModule } from "src/nats-client/nats-client.module";
import { Payment } from "src/typeorm/entities/Payment";
import { PaymentsController } from "./payments.controller";
import { PaymentsService } from "./payments.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Payment]),
        NatsClientModule
    ],
    controllers: [PaymentsController],
    providers: [PaymentsService]
})
export class PaymentsModule { }