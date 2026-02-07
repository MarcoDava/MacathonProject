import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WorkflowEdgeModelInputBackwardCondition } from "./WorkflowEdgeModelInputBackwardCondition";
import { WorkflowEdgeModelInputForwardCondition } from "./WorkflowEdgeModelInputForwardCondition";
export declare const WorkflowEdgeModelInput: core.serialization.ObjectSchema<serializers.WorkflowEdgeModelInput.Raw, ElevenLabs.WorkflowEdgeModelInput>;
export declare namespace WorkflowEdgeModelInput {
    interface Raw {
        source: string;
        target: string;
        forward_condition?: WorkflowEdgeModelInputForwardCondition.Raw | null;
        backward_condition?: WorkflowEdgeModelInputBackwardCondition.Raw | null;
    }
}
