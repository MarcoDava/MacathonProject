/** Content type for the request body. Only applies to POST/PUT/PATCH requests. */
export declare const WebhookToolApiSchemaConfigInputContentType: {
    readonly ApplicationJson: "application/json";
    readonly ApplicationXWwwFormUrlencoded: "application/x-www-form-urlencoded";
};
export type WebhookToolApiSchemaConfigInputContentType = (typeof WebhookToolApiSchemaConfigInputContentType)[keyof typeof WebhookToolApiSchemaConfigInputContentType];
