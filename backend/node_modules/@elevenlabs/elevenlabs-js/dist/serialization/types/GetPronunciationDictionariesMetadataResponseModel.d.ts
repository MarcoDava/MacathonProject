import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { GetPronunciationDictionaryMetadataResponse } from "./GetPronunciationDictionaryMetadataResponse";
export declare const GetPronunciationDictionariesMetadataResponseModel: core.serialization.ObjectSchema<serializers.GetPronunciationDictionariesMetadataResponseModel.Raw, ElevenLabs.GetPronunciationDictionariesMetadataResponseModel>;
export declare namespace GetPronunciationDictionariesMetadataResponseModel {
    interface Raw {
        pronunciation_dictionaries: GetPronunciationDictionaryMetadataResponse.Raw[];
        next_cursor?: string | null;
        has_more: boolean;
    }
}
