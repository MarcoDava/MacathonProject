import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
import { AudioClient } from "../resources/audio/client/Client";
import { SpeakersClient } from "../resources/speakers/client/Client";
import { WaveformClient } from "../resources/waveform/client/Client";
export declare namespace SamplesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SamplesClient {
    protected readonly _options: NormalizedClientOptions<SamplesClient.Options>;
    protected _audio: AudioClient | undefined;
    protected _waveform: WaveformClient | undefined;
    protected _speakers: SpeakersClient | undefined;
    constructor(options?: SamplesClient.Options);
    get audio(): AudioClient;
    get waveform(): WaveformClient;
    get speakers(): SpeakersClient;
    /**
     * Add audio samples to a PVC voice
     *
     * @param {string} voice_id
     * @param {ElevenLabs.voices.pvc.BodyAddSamplesToPvcVoiceV1VoicesPvcVoiceIdSamplesPost} request
     * @param {SamplesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.voices.pvc.samples.create("21m00Tcm4TlvDq8ikWAM", {
     *         files: [fs.createReadStream("/path/to/your/file")]
     *     })
     */
    create(voice_id: string, request: ElevenLabs.voices.pvc.BodyAddSamplesToPvcVoiceV1VoicesPvcVoiceIdSamplesPost, requestOptions?: SamplesClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.VoiceSample[]>;
    private __create;
    /**
     * Update a PVC voice sample - apply noise removal, select speaker, change trim times or file name.
     *
     * @param {string} voice_id - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {string} sample_id - Sample ID to be used
     * @param {ElevenLabs.voices.pvc.BodyUpdatePvcVoiceSampleV1VoicesPvcVoiceIdSamplesSampleIdPost} request
     * @param {SamplesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.voices.pvc.samples.update("21m00Tcm4TlvDq8ikWAM", "VW7YKqPnjY4h39yTbx2L")
     */
    update(voice_id: string, sample_id: string, request?: ElevenLabs.voices.pvc.BodyUpdatePvcVoiceSampleV1VoicesPvcVoiceIdSamplesSampleIdPost, requestOptions?: SamplesClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.AddVoiceResponseModel>;
    private __update;
    /**
     * Delete a sample from a PVC voice.
     *
     * @param {string} voice_id - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {string} sample_id - Sample ID to be used
     * @param {SamplesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.voices.pvc.samples.delete("21m00Tcm4TlvDq8ikWAM", "VW7YKqPnjY4h39yTbx2L")
     */
    delete(voice_id: string, sample_id: string, requestOptions?: SamplesClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DeleteVoiceSampleResponseModel>;
    private __delete;
}
