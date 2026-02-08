import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const KnowledgeBaseSortBy: core.serialization.Schema<serializers.KnowledgeBaseSortBy.Raw, ElevenLabs.KnowledgeBaseSortBy>;
export declare namespace KnowledgeBaseSortBy {
    type Raw = "name" | "created_at" | "updated_at" | "size";
}
