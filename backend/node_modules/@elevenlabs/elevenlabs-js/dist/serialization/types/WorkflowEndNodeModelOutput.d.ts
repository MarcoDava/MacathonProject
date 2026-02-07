import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PositionOutput } from "./PositionOutput";
export declare const WorkflowEndNodeModelOutput: core.serialization.ObjectSchema<serializers.WorkflowEndNodeModelOutput.Raw, ElevenLabs.WorkflowEndNodeModelOutput>;
export declare namespace WorkflowEndNodeModelOutput {
    interface Raw {
        position: PositionOutput.Raw;
        edge_order: string[];
    }
}
