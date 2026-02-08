import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const InvoiceResponseModelPaymentIntentStatus: core.serialization.Schema<serializers.InvoiceResponseModelPaymentIntentStatus.Raw, ElevenLabs.InvoiceResponseModelPaymentIntentStatus>;
export declare namespace InvoiceResponseModelPaymentIntentStatus {
    type Raw = "canceled" | "processing" | "requires_action" | "requires_capture" | "requires_confirmation" | "requires_payment_method" | "succeeded";
}
