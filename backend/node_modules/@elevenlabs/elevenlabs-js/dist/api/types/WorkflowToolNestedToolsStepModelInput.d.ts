import type * as ElevenLabs from "../index";
export interface WorkflowToolNestedToolsStepModelInput {
    stepLatencySecs: number;
    nodeId: string;
    requests: ElevenLabs.ConversationHistoryTranscriptToolCallCommonModelInput[];
    results: ElevenLabs.WorkflowToolNestedToolsStepModelInputResultsItem[];
    isSuccessful: boolean;
}
