import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { MultichannelSpeechToTextResponseModel } from "../../../types/MultichannelSpeechToTextResponseModel";
import { SpeechToTextChunkResponseModel } from "../../../types/SpeechToTextChunkResponseModel";
import { SpeechToTextWebhookResponseModel } from "../../../types/SpeechToTextWebhookResponseModel";
export declare const SpeechToTextConvertResponse: core.serialization.Schema<serializers.SpeechToTextConvertResponse.Raw, ElevenLabs.SpeechToTextConvertResponse>;
export declare namespace SpeechToTextConvertResponse {
    type Raw = SpeechToTextChunkResponseModel.Raw | MultichannelSpeechToTextResponseModel.Raw | SpeechToTextWebhookResponseModel.Raw;
}
