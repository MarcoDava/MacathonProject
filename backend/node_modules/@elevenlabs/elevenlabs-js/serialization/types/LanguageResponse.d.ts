import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LanguageResponse: core.serialization.ObjectSchema<serializers.LanguageResponse.Raw, ElevenLabs.LanguageResponse>;
export declare namespace LanguageResponse {
    interface Raw {
        language_id: string;
        name: string;
    }
}
