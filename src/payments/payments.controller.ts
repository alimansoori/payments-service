import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, EventPattern, Payload } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dto/CreatePayment.dto";
import { PaymentsService } from "./payments.service";

@Controller()
export class PaymentsController {

    constructor(
        @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
        private paymentsService: PaymentsService
    ) {}

    @EventPattern('createPayment')
    async createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
        console.log(createPaymentDto);
        const newPayment = await this.paymentsService.createPayment(createPaymentDto);
        return this.natsClient.emit('paymentCreated', newPayment);
    }
}