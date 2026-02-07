import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WhatsAppOutboundCallResponse: core.serialization.ObjectSchema<serializers.WhatsAppOutboundCallResponse.Raw, ElevenLabs.WhatsAppOutboundCallResponse>;
export declare namespace WhatsAppOutboundCallResponse {
    interface Raw {
        success: boolean;
        message: string;
        conversation_id?: string | null;
    }
}
