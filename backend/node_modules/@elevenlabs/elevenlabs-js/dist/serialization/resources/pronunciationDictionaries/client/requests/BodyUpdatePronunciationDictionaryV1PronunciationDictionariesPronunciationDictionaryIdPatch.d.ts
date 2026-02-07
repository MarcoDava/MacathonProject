import type * as ElevenLabs from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
export declare const BodyUpdatePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdPatch: core.serialization.Schema<serializers.BodyUpdatePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdPatch.Raw, ElevenLabs.BodyUpdatePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdPatch>;
export declare namespace BodyUpdatePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdPatch {
    interface Raw {
        archived?: boolean | null;
        name?: string | null;
    }
}
