import type * as ElevenLabs from "../index";
export interface ConversationHistoryTranscriptToolCallCommonModelOutput {
    type?: ElevenLabs.ToolType;
    requestId: string;
    toolName: string;
    paramsAsJson: string;
    toolHasBeenCalled: boolean;
    toolDetails?: ElevenLabs.ConversationHistoryTranscriptToolCallCommonModelOutputToolDetails;
}
