import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WorkflowLlmConditionModelOutput: core.serialization.ObjectSchema<serializers.WorkflowLlmConditionModelOutput.Raw, ElevenLabs.WorkflowLlmConditionModelOutput>;
export declare namespace WorkflowLlmConditionModelOutput {
    interface Raw {
        label?: string | null;
        condition: string;
    }
}
