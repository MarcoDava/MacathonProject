import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LanguagePresetTranslation: core.serialization.ObjectSchema<serializers.LanguagePresetTranslation.Raw, ElevenLabs.LanguagePresetTranslation>;
export declare namespace LanguagePresetTranslation {
    interface Raw {
        source_hash: string;
        text: string;
    }
}
