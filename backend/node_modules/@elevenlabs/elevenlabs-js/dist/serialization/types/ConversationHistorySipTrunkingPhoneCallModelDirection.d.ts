import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistorySipTrunkingPhoneCallModelDirection: core.serialization.Schema<serializers.ConversationHistorySipTrunkingPhoneCallModelDirection.Raw, ElevenLabs.ConversationHistorySipTrunkingPhoneCallModelDirection>;
export declare namespace ConversationHistorySipTrunkingPhoneCallModelDirection {
    type Raw = "inbound" | "outbound";
}
