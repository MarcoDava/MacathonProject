import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PatchWorkspaceWebhookResponseModel: core.serialization.ObjectSchema<serializers.PatchWorkspaceWebhookResponseModel.Raw, ElevenLabs.PatchWorkspaceWebhookResponseModel>;
export declare namespace PatchWorkspaceWebhookResponseModel {
    interface Raw {
        status: string;
    }
}
