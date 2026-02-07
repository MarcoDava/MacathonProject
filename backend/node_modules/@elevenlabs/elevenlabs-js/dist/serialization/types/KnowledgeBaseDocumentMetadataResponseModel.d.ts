import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const KnowledgeBaseDocumentMetadataResponseModel: core.serialization.ObjectSchema<serializers.KnowledgeBaseDocumentMetadataResponseModel.Raw, ElevenLabs.KnowledgeBaseDocumentMetadataResponseModel>;
export declare namespace KnowledgeBaseDocumentMetadataResponseModel {
    interface Raw {
        created_at_unix_secs: number;
        last_updated_at_unix_secs: number;
        size_bytes: number;
    }
}
