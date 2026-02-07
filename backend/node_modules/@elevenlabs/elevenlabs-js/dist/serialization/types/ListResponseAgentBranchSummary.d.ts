import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AgentBranchSummary } from "./AgentBranchSummary";
import { ListResponseMeta } from "./ListResponseMeta";
export declare const ListResponseAgentBranchSummary: core.serialization.ObjectSchema<serializers.ListResponseAgentBranchSummary.Raw, ElevenLabs.ListResponseAgentBranchSummary>;
export declare namespace ListResponseAgentBranchSummary {
    interface Raw {
        meta?: ListResponseMeta.Raw | null;
        results: AgentBranchSummary.Raw[];
    }
}
