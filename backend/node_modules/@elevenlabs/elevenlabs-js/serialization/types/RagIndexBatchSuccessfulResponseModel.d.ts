import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { RagDocumentIndexResponseModel } from "./RagDocumentIndexResponseModel";
export declare const RagIndexBatchSuccessfulResponseModel: core.serialization.ObjectSchema<serializers.RagIndexBatchSuccessfulResponseModel.Raw, ElevenLabs.RagIndexBatchSuccessfulResponseModel>;
export declare namespace RagIndexBatchSuccessfulResponseModel {
    interface Raw {
        data: RagDocumentIndexResponseModel.Raw;
    }
}
