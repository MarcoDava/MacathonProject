import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
export declare namespace TextToSpeechClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TextToSpeechClient {
    protected readonly _options: NormalizedClientOptions<TextToSpeechClient.Options>;
    constructor(options?: TextToSpeechClient.Options);
    /**
     * Converts text into speech using a voice of your choice and returns audio.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    convert(voice_id: string, request: ElevenLabs.BodyTextToSpeechFull, requestOptions?: TextToSpeechClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __convert;
    /**
     * Generate speech from text with precise character-level timing information for audio-text synchronization.
     *
     * @param {string} voice_id - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {ElevenLabs.BodyTextToSpeechFullWithTimestamps} request
     * @param {TextToSpeechClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.textToSpeech.convertWithTimestamps("21m00Tcm4TlvDq8ikWAM", {
     *         enableLogging: true,
     *         optimizeStreamingLatency: 1,
     *         outputFormat: "alaw_8000",
     *         text: "This is a test for the API of ElevenLabs."
     *     })
     */
    convertWithTimestamps(voice_id: string, request: ElevenLabs.BodyTextToSpeechFullWithTimestamps, requestOptions?: TextToSpeechClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.AudioWithTimestampsResponse>;
    private __convertWithTimestamps;
    /**
     * Converts text into speech using a voice of your choice and returns audio as an audio stream.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    stream(voice_id: string, request: ElevenLabs.StreamTextToSpeechRequest, requestOptions?: TextToSpeechClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __stream;
    /**
     * Converts text into speech using a voice of your choice and returns a stream of JSONs containing audio as a base64 encoded string together with information on when which character was spoken.
     */
    streamWithTimestamps(voice_id: string, request: ElevenLabs.StreamTextToSpeechWithTimestampsRequest, requestOptions?: TextToSpeechClient.RequestOptions): core.HttpResponsePromise<core.Stream<ElevenLabs.StreamingAudioChunkWithTimestampsResponse>>;
    private __streamWithTimestamps;
}
