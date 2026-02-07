import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
export declare namespace TextToDialogueClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TextToDialogueClient {
    protected readonly _options: NormalizedClientOptions<TextToDialogueClient.Options>;
    constructor(options?: TextToDialogueClient.Options);
    /**
     * Converts a list of text and voice ID pairs into speech (dialogue) and returns audio.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    convert(request: ElevenLabs.BodyTextToDialogueMultiVoiceV1TextToDialoguePost, requestOptions?: TextToDialogueClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __convert;
    /**
     * Converts a list of text and voice ID pairs into speech (dialogue) and returns an audio stream.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    stream(request: ElevenLabs.BodyTextToDialogueMultiVoiceStreamingV1TextToDialogueStreamPost, requestOptions?: TextToDialogueClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __stream;
    /**
     * Converts a list of text and voice ID pairs into speech (dialogue) and returns a stream of JSON blobs containing audio as a base64 encoded string and timestamps
     */
    streamWithTimestamps(request: ElevenLabs.BodyTextToDialogueStreamWithTimestamps, requestOptions?: TextToDialogueClient.RequestOptions): core.HttpResponsePromise<core.Stream<ElevenLabs.StreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModel>>;
    private __streamWithTimestamps;
    /**
     * Generate dialogue from text with precise character-level timing information for audio-text synchronization.
     *
     * @param {ElevenLabs.BodyTextToDialogueFullWithTimestamps} request
     * @param {TextToDialogueClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.textToDialogue.convertWithTimestamps({
     *         outputFormat: "alaw_8000",
     *         inputs: [{
     *                 text: "Hello, how are you?",
     *                 voiceId: "bYTqZQo3Jz7LQtmGTgwi"
     *             }, {
     *                 text: "I'm doing well, thank you!",
     *                 voiceId: "6lCwbsX1yVjD49QmpkTR"
     *             }]
     *     })
     */
    convertWithTimestamps(request: ElevenLabs.BodyTextToDialogueFullWithTimestamps, requestOptions?: TextToDialogueClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.AudioWithTimestampsAndVoiceSegmentsResponseModel>;
    private __convertWithTimestamps;
}
