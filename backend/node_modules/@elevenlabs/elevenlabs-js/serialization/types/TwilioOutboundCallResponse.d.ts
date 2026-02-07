import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TwilioOutboundCallResponse: core.serialization.ObjectSchema<serializers.TwilioOutboundCallResponse.Raw, ElevenLabs.TwilioOutboundCallResponse>;
export declare namespace TwilioOutboundCallResponse {
    interface Raw {
        success: boolean;
        message: string;
        conversation_id?: string | null;
        callSid?: string | null;
    }
}
