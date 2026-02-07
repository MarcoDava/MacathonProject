import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TransferToAgentToolResultErrorModel: core.serialization.ObjectSchema<serializers.TransferToAgentToolResultErrorModel.Raw, ElevenLabs.TransferToAgentToolResultErrorModel>;
export declare namespace TransferToAgentToolResultErrorModel {
    interface Raw {
        status?: "error" | null;
        from_agent: string;
        error: string;
    }
}
