import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WorkflowResultConditionModelInput: core.serialization.ObjectSchema<serializers.WorkflowResultConditionModelInput.Raw, ElevenLabs.WorkflowResultConditionModelInput>;
export declare namespace WorkflowResultConditionModelInput {
    interface Raw {
        label?: string | null;
        successful: boolean;
    }
}
