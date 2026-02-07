import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SkipTurnToolResponseModel: core.serialization.ObjectSchema<serializers.SkipTurnToolResponseModel.Raw, ElevenLabs.SkipTurnToolResponseModel>;
export declare namespace SkipTurnToolResponseModel {
    interface Raw {
        status?: "success" | null;
        reason?: string | null;
    }
}
