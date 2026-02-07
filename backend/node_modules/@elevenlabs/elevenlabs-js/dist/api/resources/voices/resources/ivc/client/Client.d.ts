import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace IvcClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class IvcClient {
    protected readonly _options: NormalizedClientOptions<IvcClient.Options>;
    constructor(options?: IvcClient.Options);
    /**
     * Create a voice clone and add it to your Voices
     *
     * @param {ElevenLabs.voices.BodyAddVoiceV1VoicesAddPost} request
     * @param {IvcClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.voices.ivc.create({
     *         files: [fs.createReadStream("/path/to/your/file")],
     *         name: "name"
     *     })
     */
    create(request: ElevenLabs.voices.BodyAddVoiceV1VoicesAddPost, requestOptions?: IvcClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.AddVoiceIvcResponseModel>;
    private __create;
}
