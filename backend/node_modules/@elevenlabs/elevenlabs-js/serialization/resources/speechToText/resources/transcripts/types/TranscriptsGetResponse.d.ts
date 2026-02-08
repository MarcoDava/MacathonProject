import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
import { MultichannelSpeechToTextResponseModel } from "../../../../../types/MultichannelSpeechToTextResponseModel";
import { SpeechToTextChunkResponseModel } from "../../../../../types/SpeechToTextChunkResponseModel";
export declare const TranscriptsGetResponse: core.serialization.Schema<serializers.speechToText.TranscriptsGetResponse.Raw, ElevenLabs.speechToText.TranscriptsGetResponse>;
export declare namespace TranscriptsGetResponse {
    type Raw = SpeechToTextChunkResponseModel.Raw | MultichannelSpeechToTextResponseModel.Raw;
}
