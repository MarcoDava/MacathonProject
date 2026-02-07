import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace ApiKeysClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ApiKeysClient {
    protected readonly _options: NormalizedClientOptions<ApiKeysClient.Options>;
    constructor(options?: ApiKeysClient.Options);
    /**
     * Get all API keys for a service account
     *
     * @param {string} service_account_user_id
     * @param {ApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.serviceAccounts.apiKeys.list("service_account_user_id")
     */
    list(service_account_user_id: string, requestOptions?: ApiKeysClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.WorkspaceApiKeyListResponseModel>;
    private __list;
    /**
     * Create a new API key for a service account
     *
     * @param {string} service_account_user_id
     * @param {ElevenLabs.serviceAccounts.BodyCreateServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysPost} request
     * @param {ApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.serviceAccounts.apiKeys.create("service_account_user_id", {
     *         name: "name",
     *         permissions: "all"
     *     })
     */
    create(service_account_user_id: string, request: ElevenLabs.serviceAccounts.BodyCreateServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysPost, requestOptions?: ApiKeysClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.WorkspaceCreateApiKeyResponseModel>;
    private __create;
    /**
     * Delete an existing API key for a service account
     *
     * @param {string} service_account_user_id
     * @param {string} api_key_id
     * @param {ApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.serviceAccounts.apiKeys.delete("service_account_user_id", "api_key_id")
     */
    delete(service_account_user_id: string, api_key_id: string, requestOptions?: ApiKeysClient.RequestOptions): core.HttpResponsePromise<unknown>;
    private __delete;
    /**
     * Update an existing API key for a service account
     *
     * @param {string} service_account_user_id
     * @param {string} api_key_id
     * @param {ElevenLabs.serviceAccounts.BodyEditServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdPatch} request
     * @param {ApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.serviceAccounts.apiKeys.update("service_account_user_id", "api_key_id", {
     *         isEnabled: true,
     *         name: "Sneaky Fox",
     *         permissions: "all"
     *     })
     */
    update(service_account_user_id: string, api_key_id: string, request: ElevenLabs.serviceAccounts.BodyEditServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdPatch, requestOptions?: ApiKeysClient.RequestOptions): core.HttpResponsePromise<unknown>;
    private __update;
}
