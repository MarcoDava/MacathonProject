import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistoryTwilioPhoneCallModelDirection: core.serialization.Schema<serializers.ConversationHistoryTwilioPhoneCallModelDirection.Raw, ElevenLabs.ConversationHistoryTwilioPhoneCallModelDirection>;
export declare namespace ConversationHistoryTwilioPhoneCallModelDirection {
    type Raw = "inbound" | "outbound";
}
