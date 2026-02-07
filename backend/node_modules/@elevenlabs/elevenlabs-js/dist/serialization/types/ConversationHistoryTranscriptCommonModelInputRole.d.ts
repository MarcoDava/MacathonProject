import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistoryTranscriptCommonModelInputRole: core.serialization.Schema<serializers.ConversationHistoryTranscriptCommonModelInputRole.Raw, ElevenLabs.ConversationHistoryTranscriptCommonModelInputRole>;
export declare namespace ConversationHistoryTranscriptCommonModelInputRole {
    type Raw = "user" | "agent";
}
