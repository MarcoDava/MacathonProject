import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const InvoiceResponseModelPaymentIntentStatussesItem: core.serialization.Schema<serializers.InvoiceResponseModelPaymentIntentStatussesItem.Raw, ElevenLabs.InvoiceResponseModelPaymentIntentStatussesItem>;
export declare namespace InvoiceResponseModelPaymentIntentStatussesItem {
    type Raw = "canceled" | "processing" | "requires_action" | "requires_capture" | "requires_confirmation" | "requires_payment_method" | "succeeded";
}
