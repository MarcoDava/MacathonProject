import type * as ElevenLabs from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
import { WebhookHmacSettings } from "../../../../types/WebhookHmacSettings";
export declare const BodyCreateWorkspaceWebhookV1WorkspaceWebhooksPost: core.serialization.Schema<serializers.BodyCreateWorkspaceWebhookV1WorkspaceWebhooksPost.Raw, ElevenLabs.BodyCreateWorkspaceWebhookV1WorkspaceWebhooksPost>;
export declare namespace BodyCreateWorkspaceWebhookV1WorkspaceWebhooksPost {
    interface Raw {
        settings: WebhookHmacSettings.Raw;
    }
}
