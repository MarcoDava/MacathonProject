export interface DeleteWorkspaceWebhookResponseModel {
    /** The status of the workspace webhook deletion request. If the request was successful, the status will be 'ok'. Otherwise an error message with status 500 will be returned. */
    status: string;
}
