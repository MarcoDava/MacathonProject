import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WorkflowEdgeModelOutputBackwardCondition } from "./WorkflowEdgeModelOutputBackwardCondition";
import { WorkflowEdgeModelOutputForwardCondition } from "./WorkflowEdgeModelOutputForwardCondition";
export declare const WorkflowEdgeModelOutput: core.serialization.ObjectSchema<serializers.WorkflowEdgeModelOutput.Raw, ElevenLabs.WorkflowEdgeModelOutput>;
export declare namespace WorkflowEdgeModelOutput {
    interface Raw {
        source: string;
        target: string;
        forward_condition?: WorkflowEdgeModelOutputForwardCondition.Raw | null;
        backward_condition?: WorkflowEdgeModelOutputBackwardCondition.Raw | null;
    }
}
