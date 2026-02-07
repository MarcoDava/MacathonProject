import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PronunciationDictionaryVersionLocator: core.serialization.ObjectSchema<serializers.PronunciationDictionaryVersionLocator.Raw, ElevenLabs.PronunciationDictionaryVersionLocator>;
export declare namespace PronunciationDictionaryVersionLocator {
    interface Raw {
        pronunciation_dictionary_id: string;
        version_id?: string | null;
    }
}
