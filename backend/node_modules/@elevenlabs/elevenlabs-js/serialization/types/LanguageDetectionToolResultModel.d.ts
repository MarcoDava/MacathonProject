import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LanguageDetectionToolResultModel: core.serialization.ObjectSchema<serializers.LanguageDetectionToolResultModel.Raw, ElevenLabs.LanguageDetectionToolResultModel>;
export declare namespace LanguageDetectionToolResultModel {
    interface Raw {
        status?: "success" | null;
        reason?: string | null;
        language?: string | null;
    }
}
