import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { EmbeddingModelEnum } from "./EmbeddingModelEnum";
export declare const RagIndexOverviewEmbeddingModelResponseModel: core.serialization.ObjectSchema<serializers.RagIndexOverviewEmbeddingModelResponseModel.Raw, ElevenLabs.RagIndexOverviewEmbeddingModelResponseModel>;
export declare namespace RagIndexOverviewEmbeddingModelResponseModel {
    interface Raw {
        model: EmbeddingModelEnum.Raw;
        used_bytes: number;
    }
}
