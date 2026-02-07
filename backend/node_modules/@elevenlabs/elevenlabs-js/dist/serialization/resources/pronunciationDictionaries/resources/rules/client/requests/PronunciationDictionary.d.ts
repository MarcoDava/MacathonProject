import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
import { PronunciationDictionaryRule } from "../../types/PronunciationDictionaryRule";
export declare const PronunciationDictionary: core.serialization.Schema<serializers.pronunciationDictionaries.PronunciationDictionary.Raw, ElevenLabs.pronunciationDictionaries.PronunciationDictionary>;
export declare namespace PronunciationDictionary {
    interface Raw {
        rules: PronunciationDictionaryRule.Raw[];
    }
}
