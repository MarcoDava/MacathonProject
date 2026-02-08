import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
export declare const RemovePronunciationDictionaryRulesRequest: core.serialization.Schema<serializers.pronunciationDictionaries.RemovePronunciationDictionaryRulesRequest.Raw, ElevenLabs.pronunciationDictionaries.RemovePronunciationDictionaryRulesRequest>;
export declare namespace RemovePronunciationDictionaryRulesRequest {
    interface Raw {
        rule_strings: string[];
    }
}
