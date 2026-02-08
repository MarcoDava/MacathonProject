import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistoryTranscriptCommonModelOutputRole: core.serialization.Schema<serializers.ConversationHistoryTranscriptCommonModelOutputRole.Raw, ElevenLabs.ConversationHistoryTranscriptCommonModelOutputRole>;
export declare namespace ConversationHistoryTranscriptCommonModelOutputRole {
    type Raw = "user" | "agent";
}
