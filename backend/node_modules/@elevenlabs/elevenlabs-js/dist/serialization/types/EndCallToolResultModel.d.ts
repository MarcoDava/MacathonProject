import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const EndCallToolResultModel: core.serialization.ObjectSchema<serializers.EndCallToolResultModel.Raw, ElevenLabs.EndCallToolResultModel>;
export declare namespace EndCallToolResultModel {
    interface Raw {
        status?: "success" | null;
        reason?: string | null;
        message?: string | null;
    }
}
