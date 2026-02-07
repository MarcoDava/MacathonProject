import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PronunciationDictionaryRulesResponseModel: core.serialization.ObjectSchema<serializers.PronunciationDictionaryRulesResponseModel.Raw, ElevenLabs.PronunciationDictionaryRulesResponseModel>;
export declare namespace PronunciationDictionaryRulesResponseModel {
    interface Raw {
        id: string;
        version_id: string;
        version_rules_num: number;
    }
}
