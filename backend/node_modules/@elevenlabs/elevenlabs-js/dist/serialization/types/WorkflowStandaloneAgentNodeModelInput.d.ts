import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PositionInput } from "./PositionInput";
export declare const WorkflowStandaloneAgentNodeModelInput: core.serialization.ObjectSchema<serializers.WorkflowStandaloneAgentNodeModelInput.Raw, ElevenLabs.WorkflowStandaloneAgentNodeModelInput>;
export declare namespace WorkflowStandaloneAgentNodeModelInput {
    interface Raw {
        position?: PositionInput.Raw | null;
        edge_order?: string[] | null;
        agent_id: string;
        delay_ms?: number | null;
        transfer_message?: string | null;
        enable_transferred_agent_first_message?: boolean | null;
    }
}
