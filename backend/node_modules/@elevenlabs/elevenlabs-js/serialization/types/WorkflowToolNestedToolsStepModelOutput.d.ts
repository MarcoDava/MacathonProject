import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
import { ConversationHistoryTranscriptToolCallCommonModelOutput } from "./ConversationHistoryTranscriptToolCallCommonModelOutput";
export declare const WorkflowToolNestedToolsStepModelOutput: core.serialization.ObjectSchema<serializers.WorkflowToolNestedToolsStepModelOutput.Raw, ElevenLabs.WorkflowToolNestedToolsStepModelOutput>;
export declare namespace WorkflowToolNestedToolsStepModelOutput {
    interface Raw {
        step_latency_secs: number;
        node_id: string;
        requests: ConversationHistoryTranscriptToolCallCommonModelOutput.Raw[];
        results: serializers.WorkflowToolNestedToolsStepModelOutputResultsItem.Raw[];
        is_successful: boolean;
    }
}
