import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DiscountResponseModel } from "./DiscountResponseModel";
import { InvoiceResponseModelPaymentIntentStatus } from "./InvoiceResponseModelPaymentIntentStatus";
import { InvoiceResponseModelPaymentIntentStatussesItem } from "./InvoiceResponseModelPaymentIntentStatussesItem";
export declare const InvoiceResponse: core.serialization.ObjectSchema<serializers.InvoiceResponse.Raw, ElevenLabs.InvoiceResponse>;
export declare namespace InvoiceResponse {
    interface Raw {
        amount_due_cents: number;
        subtotal_cents?: number | null;
        tax_cents?: number | null;
        discount_percent_off?: number | null;
        discount_amount_off?: number | null;
        discounts: DiscountResponseModel.Raw[];
        next_payment_attempt_unix: number;
        payment_intent_status?: InvoiceResponseModelPaymentIntentStatus.Raw | null;
        payment_intent_statusses: InvoiceResponseModelPaymentIntentStatussesItem.Raw[];
    }
}
