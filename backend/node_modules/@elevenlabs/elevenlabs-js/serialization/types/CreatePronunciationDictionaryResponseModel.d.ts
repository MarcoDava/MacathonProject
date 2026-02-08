import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreatePronunciationDictionaryResponseModel: core.serialization.ObjectSchema<serializers.CreatePronunciationDictionaryResponseModel.Raw, ElevenLabs.CreatePronunciationDictionaryResponseModel>;
export declare namespace CreatePronunciationDictionaryResponseModel {
    interface Raw {
        status: string;
    }
}
