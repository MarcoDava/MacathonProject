import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PydanticPronunciationDictionaryVersionLocator: core.serialization.ObjectSchema<serializers.PydanticPronunciationDictionaryVersionLocator.Raw, ElevenLabs.PydanticPronunciationDictionaryVersionLocator>;
export declare namespace PydanticPronunciationDictionaryVersionLocator {
    interface Raw {
        pronunciation_dictionary_id: string;
        version_id?: string | null;
    }
}
