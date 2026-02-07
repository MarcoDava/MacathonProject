import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WorkflowToolMaxIterationsExceededStepModel: core.serialization.ObjectSchema<serializers.WorkflowToolMaxIterationsExceededStepModel.Raw, ElevenLabs.WorkflowToolMaxIterationsExceededStepModel>;
export declare namespace WorkflowToolMaxIterationsExceededStepModel {
    interface Raw {
        step_latency_secs: number;
        max_iterations: number;
    }
}
