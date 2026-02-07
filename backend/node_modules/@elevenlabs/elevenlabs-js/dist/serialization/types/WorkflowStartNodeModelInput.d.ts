import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PositionInput } from "./PositionInput";
export declare const WorkflowStartNodeModelInput: core.serialization.ObjectSchema<serializers.WorkflowStartNodeModelInput.Raw, ElevenLabs.WorkflowStartNodeModelInput>;
export declare namespace WorkflowStartNodeModelInput {
    interface Raw {
        position?: PositionInput.Raw | null;
        edge_order?: string[] | null;
    }
}
