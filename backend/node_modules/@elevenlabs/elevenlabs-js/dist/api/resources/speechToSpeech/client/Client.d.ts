import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
export declare namespace SpeechToSpeechClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SpeechToSpeechClient {
    protected readonly _options: NormalizedClientOptions<SpeechToSpeechClient.Options>;
    constructor(options?: SpeechToSpeechClient.Options);
    /**
     * Transform audio from one voice to another. Maintain full control over emotion, timing and delivery.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    convert(voice_id: string, request: ElevenLabs.BodySpeechToSpeechV1SpeechToSpeechVoiceIdPost, requestOptions?: SpeechToSpeechClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __convert;
    /**
     * Stream audio from one voice to another. Maintain full control over emotion, timing and delivery.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    stream(voice_id: string, request: ElevenLabs.BodySpeechToSpeechStreamingV1SpeechToSpeechVoiceIdStreamPost, requestOptions?: SpeechToSpeechClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __stream;
}
