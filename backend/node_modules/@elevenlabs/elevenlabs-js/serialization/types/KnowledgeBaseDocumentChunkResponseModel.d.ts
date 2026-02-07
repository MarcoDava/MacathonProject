import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const KnowledgeBaseDocumentChunkResponseModel: core.serialization.ObjectSchema<serializers.KnowledgeBaseDocumentChunkResponseModel.Raw, ElevenLabs.KnowledgeBaseDocumentChunkResponseModel>;
export declare namespace KnowledgeBaseDocumentChunkResponseModel {
    interface Raw {
        id: string;
        name: string;
        content: string;
    }
}
