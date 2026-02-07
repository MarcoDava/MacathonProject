export interface ConversationHistoryTranscriptToolCallWebhookDetails {
    type?: "webhook";
    method: string;
    url: string;
    headers?: Record<string, string>;
    pathParams?: Record<string, string>;
    queryParams?: Record<string, string>;
    body?: string;
}
