import type * as ElevenLabs from "../index";
export interface WorkflowToolNestedToolsStepModelOutput {
    stepLatencySecs: number;
    nodeId: string;
    requests: ElevenLabs.ConversationHistoryTranscriptToolCallCommonModelOutput[];
    results: ElevenLabs.WorkflowToolNestedToolsStepModelOutputResultsItem[];
    isSuccessful: boolean;
}
