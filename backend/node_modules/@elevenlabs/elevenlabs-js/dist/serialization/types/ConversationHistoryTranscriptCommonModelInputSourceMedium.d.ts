import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistoryTranscriptCommonModelInputSourceMedium: core.serialization.Schema<serializers.ConversationHistoryTranscriptCommonModelInputSourceMedium.Raw, ElevenLabs.ConversationHistoryTranscriptCommonModelInputSourceMedium>;
export declare namespace ConversationHistoryTranscriptCommonModelInputSourceMedium {
    type Raw = "audio" | "text";
}
