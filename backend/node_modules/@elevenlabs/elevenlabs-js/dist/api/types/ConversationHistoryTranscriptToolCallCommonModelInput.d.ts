import type * as ElevenLabs from "../index";
export interface ConversationHistoryTranscriptToolCallCommonModelInput {
    type?: ElevenLabs.ToolType;
    requestId: string;
    toolName: string;
    paramsAsJson: string;
    toolHasBeenCalled: boolean;
    toolDetails?: ElevenLabs.ConversationHistoryTranscriptToolCallCommonModelInputToolDetails;
}
