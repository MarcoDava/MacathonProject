import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
export declare const BodyCreateTextDocumentV1ConvaiKnowledgeBaseTextPost: core.serialization.Schema<serializers.conversationalAi.knowledgeBase.BodyCreateTextDocumentV1ConvaiKnowledgeBaseTextPost.Raw, ElevenLabs.conversationalAi.knowledgeBase.BodyCreateTextDocumentV1ConvaiKnowledgeBaseTextPost>;
export declare namespace BodyCreateTextDocumentV1ConvaiKnowledgeBaseTextPost {
    interface Raw {
        text: string;
        name?: string | null;
        parent_folder_id?: string | null;
    }
}
