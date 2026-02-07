import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationHistoryTranscriptToolCallCommonModelOutputToolDetails } from "./ConversationHistoryTranscriptToolCallCommonModelOutputToolDetails";
import { ToolType } from "./ToolType";
export declare const ConversationHistoryTranscriptToolCallCommonModelOutput: core.serialization.ObjectSchema<serializers.ConversationHistoryTranscriptToolCallCommonModelOutput.Raw, ElevenLabs.ConversationHistoryTranscriptToolCallCommonModelOutput>;
export declare namespace ConversationHistoryTranscriptToolCallCommonModelOutput {
    interface Raw {
        type?: ToolType.Raw | null;
        request_id: string;
        tool_name: string;
        params_as_json: string;
        tool_has_been_called: boolean;
        tool_details?: ConversationHistoryTranscriptToolCallCommonModelOutputToolDetails.Raw | null;
    }
}
