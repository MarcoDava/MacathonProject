import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { EmbeddingModelEnum } from "./EmbeddingModelEnum";
export declare const GetOrCreateRagIndexRequestModel: core.serialization.ObjectSchema<serializers.GetOrCreateRagIndexRequestModel.Raw, ElevenLabs.GetOrCreateRagIndexRequestModel>;
export declare namespace GetOrCreateRagIndexRequestModel {
    interface Raw {
        document_id: string;
        create_if_missing: boolean;
        model: EmbeddingModelEnum.Raw;
    }
}
