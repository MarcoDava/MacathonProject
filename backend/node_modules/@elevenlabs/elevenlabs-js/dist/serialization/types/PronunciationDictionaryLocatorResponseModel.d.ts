import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PronunciationDictionaryLocatorResponseModel: core.serialization.ObjectSchema<serializers.PronunciationDictionaryLocatorResponseModel.Raw, ElevenLabs.PronunciationDictionaryLocatorResponseModel>;
export declare namespace PronunciationDictionaryLocatorResponseModel {
    interface Raw {
        pronunciation_dictionary_id: string;
        version_id?: string | null;
    }
}
