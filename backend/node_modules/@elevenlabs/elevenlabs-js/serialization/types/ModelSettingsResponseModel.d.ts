import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ModelSettingsResponseModel: core.serialization.ObjectSchema<serializers.ModelSettingsResponseModel.Raw, ElevenLabs.ModelSettingsResponseModel>;
export declare namespace ModelSettingsResponseModel {
    interface Raw {
        stability?: number | null;
    }
}
