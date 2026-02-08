import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
export declare namespace AudioClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AudioClient {
    protected readonly _options: NormalizedClientOptions<AudioClient.Options>;
    constructor(options?: AudioClient.Options);
    /**
     * Returns the audio corresponding to a sample attached to a voice.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    get(voice_id: string, sample_id: string, requestOptions?: AudioClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __get;
}
