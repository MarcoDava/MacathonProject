import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AgentTransfer } from "./AgentTransfer";
export declare const TransferToAgentToolConfig: core.serialization.ObjectSchema<serializers.TransferToAgentToolConfig.Raw, ElevenLabs.TransferToAgentToolConfig>;
export declare namespace TransferToAgentToolConfig {
    interface Raw {
        transfers: AgentTransfer.Raw[];
    }
}
