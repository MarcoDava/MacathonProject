import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationHistoryTranscriptToolCallCommonModelInputToolDetails } from "./ConversationHistoryTranscriptToolCallCommonModelInputToolDetails";
import { ToolType } from "./ToolType";
export declare const ConversationHistoryTranscriptToolCallCommonModelInput: core.serialization.ObjectSchema<serializers.ConversationHistoryTranscriptToolCallCommonModelInput.Raw, ElevenLabs.ConversationHistoryTranscriptToolCallCommonModelInput>;
export declare namespace ConversationHistoryTranscriptToolCallCommonModelInput {
    interface Raw {
        type?: ToolType.Raw | null;
        request_id: string;
        tool_name: string;
        params_as_json: string;
        tool_has_been_called: boolean;
        tool_details?: ConversationHistoryTranscriptToolCallCommonModelInputToolDetails.Raw | null;
    }
}
