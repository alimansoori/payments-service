import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "src/typeorm/entities/Payment";
import { Repository } from "typeorm";
import { CreatePaymentDto } from "./dto/CreatePayment.dto";

@Injectable()
export class PaymentsService {
    constructor(
        @InjectRepository(Payment) private paymentsRepository: Repository<Payment>
    ) {}

    createPayment(createPaymentDto: CreatePaymentDto): Promise<Payment> {
        const payment = this.paymentsRepository.create(createPaymentDto);
        return this.paymentsRepository.save(payment);
    }
}