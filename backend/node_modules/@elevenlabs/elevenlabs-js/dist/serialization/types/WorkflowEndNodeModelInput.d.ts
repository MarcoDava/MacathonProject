import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PositionInput } from "./PositionInput";
export declare const WorkflowEndNodeModelInput: core.serialization.ObjectSchema<serializers.WorkflowEndNodeModelInput.Raw, ElevenLabs.WorkflowEndNodeModelInput>;
export declare namespace WorkflowEndNodeModelInput {
    interface Raw {
        position?: PositionInput.Raw | null;
        edge_order?: string[] | null;
    }
}
