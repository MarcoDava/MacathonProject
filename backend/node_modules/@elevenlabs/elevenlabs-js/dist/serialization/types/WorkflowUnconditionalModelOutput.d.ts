import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WorkflowUnconditionalModelOutput: core.serialization.ObjectSchema<serializers.WorkflowUnconditionalModelOutput.Raw, ElevenLabs.WorkflowUnconditionalModelOutput>;
export declare namespace WorkflowUnconditionalModelOutput {
    interface Raw {
        label?: string | null;
    }
}
