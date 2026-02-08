import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WorkflowUnconditionalModelInput: core.serialization.ObjectSchema<serializers.WorkflowUnconditionalModelInput.Raw, ElevenLabs.WorkflowUnconditionalModelInput>;
export declare namespace WorkflowUnconditionalModelInput {
    interface Raw {
        label?: string | null;
    }
}
