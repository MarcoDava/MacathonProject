import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
import { SubscriptionClient } from "../resources/subscription/client/Client";
export declare namespace UserClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class UserClient {
    protected readonly _options: NormalizedClientOptions<UserClient.Options>;
    protected _subscription: SubscriptionClient | undefined;
    constructor(options?: UserClient.Options);
    get subscription(): SubscriptionClient;
    /**
     * Gets information about the user
     *
     * @param {UserClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.user.get()
     */
    get(requestOptions?: UserClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.User>;
    private __get;
}
