import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TransferToNumberResultErrorModel: core.serialization.ObjectSchema<serializers.TransferToNumberResultErrorModel.Raw, ElevenLabs.TransferToNumberResultErrorModel>;
export declare namespace TransferToNumberResultErrorModel {
    interface Raw {
        status?: "error" | null;
        error: string;
        details?: string | null;
    }
}
