import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
import { ApiKeysClient } from "../resources/apiKeys/client/Client";
export declare namespace ServiceAccountsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ServiceAccountsClient {
    protected readonly _options: NormalizedClientOptions<ServiceAccountsClient.Options>;
    protected _apiKeys: ApiKeysClient | undefined;
    constructor(options?: ServiceAccountsClient.Options);
    get apiKeys(): ApiKeysClient;
    /**
     * List all service accounts in the workspace
     *
     * @param {ServiceAccountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.serviceAccounts.list()
     */
    list(requestOptions?: ServiceAccountsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.WorkspaceServiceAccountListResponseModel>;
    private __list;
}
