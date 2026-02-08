import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { RagDocumentIndexResponseModel } from "./RagDocumentIndexResponseModel";
export declare const RagDocumentIndexesResponseModel: core.serialization.ObjectSchema<serializers.RagDocumentIndexesResponseModel.Raw, ElevenLabs.RagDocumentIndexesResponseModel>;
export declare namespace RagDocumentIndexesResponseModel {
    interface Raw {
        indexes: RagDocumentIndexResponseModel.Raw[];
    }
}
