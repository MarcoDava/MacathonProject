import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const McpServerMetadataResponseModel: core.serialization.ObjectSchema<serializers.McpServerMetadataResponseModel.Raw, ElevenLabs.McpServerMetadataResponseModel>;
export declare namespace McpServerMetadataResponseModel {
    interface Raw {
        created_at: number;
        owner_user_id?: string | null;
    }
}
