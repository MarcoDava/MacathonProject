import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistoryTranscriptCommonModelOutputSourceMedium: core.serialization.Schema<serializers.ConversationHistoryTranscriptCommonModelOutputSourceMedium.Raw, ElevenLabs.ConversationHistoryTranscriptCommonModelOutputSourceMedium>;
export declare namespace ConversationHistoryTranscriptCommonModelOutputSourceMedium {
    type Raw = "audio" | "text";
}
