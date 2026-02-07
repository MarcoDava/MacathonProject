import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WorkflowLlmConditionModelInput: core.serialization.ObjectSchema<serializers.WorkflowLlmConditionModelInput.Raw, ElevenLabs.WorkflowLlmConditionModelInput>;
export declare namespace WorkflowLlmConditionModelInput {
    interface Raw {
        label?: string | null;
        condition: string;
    }
}
