import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
import { ConversationHistoryTranscriptToolCallCommonModelInput } from "./ConversationHistoryTranscriptToolCallCommonModelInput";
export declare const WorkflowToolNestedToolsStepModelInput: core.serialization.ObjectSchema<serializers.WorkflowToolNestedToolsStepModelInput.Raw, ElevenLabs.WorkflowToolNestedToolsStepModelInput>;
export declare namespace WorkflowToolNestedToolsStepModelInput {
    interface Raw {
        step_latency_secs: number;
        node_id: string;
        requests: ConversationHistoryTranscriptToolCallCommonModelInput.Raw[];
        results: serializers.WorkflowToolNestedToolsStepModelInputResultsItem.Raw[];
        is_successful: boolean;
    }
}
