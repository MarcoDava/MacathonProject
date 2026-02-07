import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../../../BaseClient";
import * as core from "../../../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../../../index";
export declare namespace WaveformClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class WaveformClient {
    protected readonly _options: NormalizedClientOptions<WaveformClient.Options>;
    constructor(options?: WaveformClient.Options);
    /**
     * Retrieve the visual waveform of a voice sample.
     *
     * @param {string} voice_id - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {string} sample_id - Sample ID to be used
     * @param {WaveformClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.voices.pvc.samples.waveform.get("21m00Tcm4TlvDq8ikWAM", "VW7YKqPnjY4h39yTbx2L")
     */
    get(voice_id: string, sample_id: string, requestOptions?: WaveformClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.VoiceSampleVisualWaveformResponseModel>;
    private __get;
}
