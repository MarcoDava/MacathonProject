/** Content type for the request body. Only applies to POST/PUT/PATCH requests. */
export declare const WebhookToolApiSchemaConfigOutputContentType: {
    readonly ApplicationJson: "application/json";
    readonly ApplicationXWwwFormUrlencoded: "application/x-www-form-urlencoded";
};
export type WebhookToolApiSchemaConfigOutputContentType = (typeof WebhookToolApiSchemaConfigOutputContentType)[keyof typeof WebhookToolApiSchemaConfigOutputContentType];
