import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SpeechToTextCharacterResponseModel: core.serialization.ObjectSchema<serializers.SpeechToTextCharacterResponseModel.Raw, ElevenLabs.SpeechToTextCharacterResponseModel>;
export declare namespace SpeechToTextCharacterResponseModel {
    interface Raw {
        text: string;
        start?: number | null;
        end?: number | null;
    }
}
