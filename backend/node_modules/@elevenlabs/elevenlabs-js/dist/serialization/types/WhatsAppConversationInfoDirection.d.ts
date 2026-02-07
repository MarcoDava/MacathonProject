import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WhatsAppConversationInfoDirection: core.serialization.Schema<serializers.WhatsAppConversationInfoDirection.Raw, ElevenLabs.WhatsAppConversationInfoDirection>;
export declare namespace WhatsAppConversationInfoDirection {
    type Raw = "inbound" | "outbound" | "unknown";
}
