import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
import { PronunciationDictionaryAliasRuleRequestModel } from "../../../../../types/PronunciationDictionaryAliasRuleRequestModel";
import { PronunciationDictionaryPhonemeRuleRequestModel } from "../../../../../types/PronunciationDictionaryPhonemeRuleRequestModel";
export declare const PronunciationDictionaryRule: core.serialization.Schema<serializers.pronunciationDictionaries.PronunciationDictionaryRule.Raw, ElevenLabs.pronunciationDictionaries.PronunciationDictionaryRule>;
export declare namespace PronunciationDictionaryRule {
    type Raw = PronunciationDictionaryRule.Alias | PronunciationDictionaryRule.Phoneme;
    interface Alias extends PronunciationDictionaryAliasRuleRequestModel.Raw {
        type: "alias";
    }
    interface Phoneme extends PronunciationDictionaryPhonemeRuleRequestModel.Raw {
        type: "phoneme";
    }
}
