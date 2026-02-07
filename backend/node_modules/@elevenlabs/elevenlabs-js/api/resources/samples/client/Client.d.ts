import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
export declare namespace SamplesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Access to your samples. A sample is any audio file you attached to a voice. A voice can have one or more samples.
 */
export declare class SamplesClient {
    protected readonly _options: NormalizedClientOptions<SamplesClient.Options>;
    constructor(options?: SamplesClient.Options);
    /**
     * Removes a sample by its ID.
     *
     * @param {string} voice_id - ID of the voice to be used. You can use the [Get voices](/docs/api-reference/voices/search) endpoint list all the available voices.
     * @param {string} sample_id - ID of the sample to be used. You can use the [Get voices](/docs/api-reference/voices/get) endpoint list all the available samples for a voice.
     * @param {SamplesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.samples.delete("21m00Tcm4TlvDq8ikWAM", "VW7YKqPnjY4h39yTbx2L")
     */
    delete(voice_id: string, sample_id: string, requestOptions?: SamplesClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DeleteSampleResponse>;
    private __delete;
}
