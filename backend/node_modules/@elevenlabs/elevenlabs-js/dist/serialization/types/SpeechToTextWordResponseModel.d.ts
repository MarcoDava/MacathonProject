import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { SpeechToTextCharacterResponseModel } from "./SpeechToTextCharacterResponseModel";
import { SpeechToTextWordResponseModelType } from "./SpeechToTextWordResponseModelType";
export declare const SpeechToTextWordResponseModel: core.serialization.ObjectSchema<serializers.SpeechToTextWordResponseModel.Raw, ElevenLabs.SpeechToTextWordResponseModel>;
export declare namespace SpeechToTextWordResponseModel {
    interface Raw {
        text: string;
        start?: number | null;
        end?: number | null;
        type: SpeechToTextWordResponseModelType.Raw;
        speaker_id?: string | null;
        logprob: number;
        characters?: SpeechToTextCharacterResponseModel.Raw[] | null;
    }
}
