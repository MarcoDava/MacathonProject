import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WorkflowResultConditionModelOutput: core.serialization.ObjectSchema<serializers.WorkflowResultConditionModelOutput.Raw, ElevenLabs.WorkflowResultConditionModelOutput>;
export declare namespace WorkflowResultConditionModelOutput {
    interface Raw {
        label?: string | null;
        successful: boolean;
    }
}
