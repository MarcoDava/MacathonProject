import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { RagIndexOverviewEmbeddingModelResponseModel } from "./RagIndexOverviewEmbeddingModelResponseModel";
export declare const RagIndexOverviewResponseModel: core.serialization.ObjectSchema<serializers.RagIndexOverviewResponseModel.Raw, ElevenLabs.RagIndexOverviewResponseModel>;
export declare namespace RagIndexOverviewResponseModel {
    interface Raw {
        total_used_bytes: number;
        total_max_bytes: number;
        models: RagIndexOverviewEmbeddingModelResponseModel.Raw[];
    }
}
