import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WorkspaceCreateWebhookResponseModel: core.serialization.ObjectSchema<serializers.WorkspaceCreateWebhookResponseModel.Raw, ElevenLabs.WorkspaceCreateWebhookResponseModel>;
export declare namespace WorkspaceCreateWebhookResponseModel {
    interface Raw {
        webhook_id: string;
        webhook_secret?: string | null;
    }
}
