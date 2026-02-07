import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SipTrunkOutboundCallResponse: core.serialization.ObjectSchema<serializers.SipTrunkOutboundCallResponse.Raw, ElevenLabs.SipTrunkOutboundCallResponse>;
export declare namespace SipTrunkOutboundCallResponse {
    interface Raw {
        success: boolean;
        message: string;
        conversation_id?: string | null;
        sip_call_id?: string | null;
    }
}
