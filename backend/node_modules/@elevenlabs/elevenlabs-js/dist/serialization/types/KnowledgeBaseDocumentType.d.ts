import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const KnowledgeBaseDocumentType: core.serialization.Schema<serializers.KnowledgeBaseDocumentType.Raw, ElevenLabs.KnowledgeBaseDocumentType>;
export declare namespace KnowledgeBaseDocumentType {
    type Raw = "file" | "url" | "text" | "folder";
}
