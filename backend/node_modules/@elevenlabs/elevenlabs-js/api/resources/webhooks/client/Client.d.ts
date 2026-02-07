import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
export declare namespace WebhooksClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class WebhooksClient {
    protected readonly _options: NormalizedClientOptions<WebhooksClient.Options>;
    constructor(options?: WebhooksClient.Options);
    /**
     * List all webhooks for a workspace
     *
     * @param {ElevenLabs.WebhooksListRequest} request
     * @param {WebhooksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.webhooks.list({
     *         includeUsages: false
     *     })
     */
    list(request?: ElevenLabs.WebhooksListRequest, requestOptions?: WebhooksClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.WorkspaceWebhookListResponseModel>;
    private __list;
    /**
     * Create a new webhook for the workspace with the specified authentication type.
     *
     * @param {ElevenLabs.BodyCreateWorkspaceWebhookV1WorkspaceWebhooksPost} request
     * @param {WebhooksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.webhooks.create({
     *         settings: {
     *             authType: "hmac",
     *             name: "name",
     *             webhookUrl: "webhook_url"
     *         }
     *     })
     */
    create(request: ElevenLabs.BodyCreateWorkspaceWebhookV1WorkspaceWebhooksPost, requestOptions?: WebhooksClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.WorkspaceCreateWebhookResponseModel>;
    private __create;
    /**
     * Delete the specified workspace webhook
     *
     * @param {string} webhook_id - The unique ID for the webhook
     * @param {WebhooksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.webhooks.delete("G007vmtq9uWYl7SUW9zGS8GZZa1K")
     */
    delete(webhook_id: string, requestOptions?: WebhooksClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DeleteWorkspaceWebhookResponseModel>;
    private __delete;
    /**
     * Update the specified workspace webhook
     *
     * @param {string} webhook_id - The unique ID for the webhook
     * @param {ElevenLabs.BodyUpdateWorkspaceWebhookV1WorkspaceWebhooksWebhookIdPatch} request
     * @param {WebhooksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.webhooks.update("G007vmtq9uWYl7SUW9zGS8GZZa1K", {
     *         isDisabled: true,
     *         name: "My Callback Webhook"
     *     })
     */
    update(webhook_id: string, request: ElevenLabs.BodyUpdateWorkspaceWebhookV1WorkspaceWebhooksWebhookIdPatch, requestOptions?: WebhooksClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.PatchWorkspaceWebhookResponseModel>;
    private __update;
}
