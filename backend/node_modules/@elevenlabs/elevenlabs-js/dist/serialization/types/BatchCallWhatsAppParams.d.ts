import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BatchCallWhatsAppParams: core.serialization.ObjectSchema<serializers.BatchCallWhatsAppParams.Raw, ElevenLabs.BatchCallWhatsAppParams>;
export declare namespace BatchCallWhatsAppParams {
    interface Raw {
        whatsapp_phone_number_id?: string | null;
        whatsapp_call_permission_request_template_name: string;
        whatsapp_call_permission_request_template_language_code: string;
    }
}
