import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SpeechToTextWebhookResponseModel: core.serialization.ObjectSchema<serializers.SpeechToTextWebhookResponseModel.Raw, ElevenLabs.SpeechToTextWebhookResponseModel>;
export declare namespace SpeechToTextWebhookResponseModel {
    interface Raw {
        message: string;
        request_id: string;
        transcription_id?: string | null;
    }
}
