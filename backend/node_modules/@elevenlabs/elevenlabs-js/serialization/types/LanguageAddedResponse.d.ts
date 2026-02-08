import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LanguageAddedResponse: core.serialization.ObjectSchema<serializers.LanguageAddedResponse.Raw, ElevenLabs.LanguageAddedResponse>;
export declare namespace LanguageAddedResponse {
    interface Raw {
        version: number;
    }
}
