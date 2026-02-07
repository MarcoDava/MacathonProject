import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
export declare namespace PreviewClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class PreviewClient {
    protected readonly _options: NormalizedClientOptions<PreviewClient.Options>;
    constructor(options?: PreviewClient.Options);
    /**
     * Stream a voice preview that was created via the /v1/text-to-voice/design endpoint.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    stream(generated_voice_id: string, requestOptions?: PreviewClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __stream;
}
