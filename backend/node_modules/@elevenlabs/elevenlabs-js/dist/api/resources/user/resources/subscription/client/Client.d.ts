import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace SubscriptionClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SubscriptionClient {
    protected readonly _options: NormalizedClientOptions<SubscriptionClient.Options>;
    constructor(options?: SubscriptionClient.Options);
    /**
     * Gets extended information about the users subscription
     *
     * @param {SubscriptionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.user.subscription.get()
     */
    get(requestOptions?: SubscriptionClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.Subscription>;
    private __get;
}
