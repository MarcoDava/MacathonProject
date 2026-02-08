import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistoryTranscriptToolCallWebhookDetails: core.serialization.ObjectSchema<serializers.ConversationHistoryTranscriptToolCallWebhookDetails.Raw, ElevenLabs.ConversationHistoryTranscriptToolCallWebhookDetails>;
export declare namespace ConversationHistoryTranscriptToolCallWebhookDetails {
    interface Raw {
        type?: "webhook" | null;
        method: string;
        url: string;
        headers?: Record<string, string> | null;
        path_params?: Record<string, string> | null;
        query_params?: Record<string, string> | null;
        body?: string | null;
    }
}
