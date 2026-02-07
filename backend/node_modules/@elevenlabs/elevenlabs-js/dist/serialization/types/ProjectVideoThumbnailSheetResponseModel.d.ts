import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectVideoThumbnailSheetResponseModel: core.serialization.ObjectSchema<serializers.ProjectVideoThumbnailSheetResponseModel.Raw, ElevenLabs.ProjectVideoThumbnailSheetResponseModel>;
export declare namespace ProjectVideoThumbnailSheetResponseModel {
    interface Raw {
        start_thumbnail_index: number;
        thumbnail_count: number;
        signed_cloud_url: string;
    }
}
