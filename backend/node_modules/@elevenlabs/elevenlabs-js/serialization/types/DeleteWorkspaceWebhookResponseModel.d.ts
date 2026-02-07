import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DeleteWorkspaceWebhookResponseModel: core.serialization.ObjectSchema<serializers.DeleteWorkspaceWebhookResponseModel.Raw, ElevenLabs.DeleteWorkspaceWebhookResponseModel>;
export declare namespace DeleteWorkspaceWebhookResponseModel {
    interface Raw {
        status: string;
    }
}
