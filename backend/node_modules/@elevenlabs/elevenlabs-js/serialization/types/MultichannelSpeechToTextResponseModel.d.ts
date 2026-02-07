import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { SpeechToTextChunkResponseModel } from "./SpeechToTextChunkResponseModel";
export declare const MultichannelSpeechToTextResponseModel: core.serialization.ObjectSchema<serializers.MultichannelSpeechToTextResponseModel.Raw, ElevenLabs.MultichannelSpeechToTextResponseModel>;
export declare namespace MultichannelSpeechToTextResponseModel {
    interface Raw {
        transcripts: SpeechToTextChunkResponseModel.Raw[];
        transcription_id?: string | null;
    }
}
