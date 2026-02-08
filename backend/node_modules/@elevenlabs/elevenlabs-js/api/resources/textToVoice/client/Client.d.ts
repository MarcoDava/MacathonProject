import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
import { PreviewClient } from "../resources/preview/client/Client";
export declare namespace TextToVoiceClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TextToVoiceClient {
    protected readonly _options: NormalizedClientOptions<TextToVoiceClient.Options>;
    protected _preview: PreviewClient | undefined;
    constructor(options?: TextToVoiceClient.Options);
    get preview(): PreviewClient;
    /**
     * Create a voice from a text prompt.
     *
     * @param {ElevenLabs.VoiceDesignRequest} request
     * @param {TextToVoiceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.textToVoice.createPreviews({
     *         outputFormat: "mp3_22050_32",
     *         voiceDescription: "A sassy squeaky mouse"
     *     })
     */
    createPreviews(request: ElevenLabs.VoiceDesignRequest, requestOptions?: TextToVoiceClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.VoiceDesignPreviewResponse>;
    private __createPreviews;
    /**
     * Create a voice from previously generated voice preview. This endpoint should be called after you fetched a generated_voice_id using POST /v1/text-to-voice/design or POST /v1/text-to-voice/:voice_id/remix.
     *
     * @param {ElevenLabs.BodyCreateANewVoiceFromVoicePreviewV1TextToVoicePost} request
     * @param {TextToVoiceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.textToVoice.create({
     *         voiceName: "Sassy squeaky mouse",
     *         voiceDescription: "A sassy squeaky mouse",
     *         generatedVoiceId: "37HceQefKmEi3bGovXjL"
     *     })
     */
    create(request: ElevenLabs.BodyCreateANewVoiceFromVoicePreviewV1TextToVoicePost, requestOptions?: TextToVoiceClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.Voice>;
    private __create;
    /**
     * Design a voice via a prompt. This method returns a list of voice previews. Each preview has a generated_voice_id and a sample of the voice as base64 encoded mp3 audio. To create a voice use the generated_voice_id of the preferred preview with the /v1/text-to-voice endpoint.
     *
     * @param {ElevenLabs.VoiceDesignRequestModel} request
     * @param {TextToVoiceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.textToVoice.design({
     *         outputFormat: "mp3_22050_32",
     *         voiceDescription: "A sassy squeaky mouse"
     *     })
     */
    design(request: ElevenLabs.VoiceDesignRequestModel, requestOptions?: TextToVoiceClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.VoiceDesignPreviewResponse>;
    private __design;
    /**
     * Remix an existing voice via a prompt. This method returns a list of voice previews. Each preview has a generated_voice_id and a sample of the voice as base64 encoded mp3 audio. To create a voice use the generated_voice_id of the preferred preview with the /v1/text-to-voice endpoint.
     *
     * @param {string} voice_id - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {ElevenLabs.VoiceRemixRequestModel} request
     * @param {TextToVoiceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.textToVoice.remix("21m00Tcm4TlvDq8ikWAM", {
     *         outputFormat: "mp3_22050_32",
     *         voiceDescription: "Make the voice have a higher pitch."
     *     })
     */
    remix(voice_id: string, request: ElevenLabs.VoiceRemixRequestModel, requestOptions?: TextToVoiceClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.VoiceDesignPreviewResponse>;
    private __remix;
}
