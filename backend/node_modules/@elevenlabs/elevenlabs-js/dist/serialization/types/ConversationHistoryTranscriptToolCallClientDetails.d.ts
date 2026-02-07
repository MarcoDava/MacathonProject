import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistoryTranscriptToolCallClientDetails: core.serialization.ObjectSchema<serializers.ConversationHistoryTranscriptToolCallClientDetails.Raw, ElevenLabs.ConversationHistoryTranscriptToolCallClientDetails>;
export declare namespace ConversationHistoryTranscriptToolCallClientDetails {
    interface Raw {
        parameters: string;
    }
}
