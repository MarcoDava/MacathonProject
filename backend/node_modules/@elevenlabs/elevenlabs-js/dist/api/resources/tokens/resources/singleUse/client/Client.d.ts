import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace SingleUseClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SingleUseClient {
    protected readonly _options: NormalizedClientOptions<SingleUseClient.Options>;
    constructor(options?: SingleUseClient.Options);
    /**
     * Generate a time limited single-use token with embedded authentication for frontend clients.
     *
     * @param {ElevenLabs.SingleUseTokenType} token_type
     * @param {SingleUseClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.tokens.singleUse.create("realtime_scribe")
     */
    create(token_type: ElevenLabs.SingleUseTokenType, requestOptions?: SingleUseClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.SingleUseTokenResponseModel>;
    private __create;
}
