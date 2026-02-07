import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../../../BaseClient";
import * as core from "../../../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../../../index";
export declare namespace AudioClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AudioClient {
    protected readonly _options: NormalizedClientOptions<AudioClient.Options>;
    constructor(options?: AudioClient.Options);
    /**
     * Retrieve the first 30 seconds of voice sample audio with or without noise removal.
     *
     * @param {string} voice_id - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {string} sample_id - Sample ID to be used
     * @param {ElevenLabs.voices.pvc.samples.AudioGetRequest} request
     * @param {AudioClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.voices.pvc.samples.audio.get("21m00Tcm4TlvDq8ikWAM", "VW7YKqPnjY4h39yTbx2L", {
     *         removeBackgroundNoise: true
     *     })
     */
    get(voice_id: string, sample_id: string, request?: ElevenLabs.voices.pvc.samples.AudioGetRequest, requestOptions?: AudioClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.VoiceSamplePreviewResponseModel>;
    private __get;
}
