import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DubbingMetadataResponse } from "./DubbingMetadataResponse";
export declare const DubbingMetadataPageResponseModel: core.serialization.ObjectSchema<serializers.DubbingMetadataPageResponseModel.Raw, ElevenLabs.DubbingMetadataPageResponseModel>;
export declare namespace DubbingMetadataPageResponseModel {
    interface Raw {
        dubs: DubbingMetadataResponse.Raw[];
        next_cursor?: string | null;
        has_more: boolean;
    }
}
