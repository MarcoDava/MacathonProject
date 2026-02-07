import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
export declare const BodyBulkMoveEntitiesToFolderV1ConvaiKnowledgeBaseBulkMovePost: core.serialization.Schema<serializers.conversationalAi.knowledgeBase.BodyBulkMoveEntitiesToFolderV1ConvaiKnowledgeBaseBulkMovePost.Raw, ElevenLabs.conversationalAi.knowledgeBase.BodyBulkMoveEntitiesToFolderV1ConvaiKnowledgeBaseBulkMovePost>;
export declare namespace BodyBulkMoveEntitiesToFolderV1ConvaiKnowledgeBaseBulkMovePost {
    interface Raw {
        document_ids: string[];
        move_to?: string | null;
    }
}
