import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
import { KnowledgeBaseGetOrCreateRagIndexesResponseValue } from "../types/KnowledgeBaseGetOrCreateRagIndexesResponseValue";
export declare const Response: core.serialization.Schema<serializers.conversationalAi.knowledgeBase.getOrCreateRagIndexes.Response.Raw, Record<string, ElevenLabs.conversationalAi.KnowledgeBaseGetOrCreateRagIndexesResponseValue>>;
export declare namespace Response {
    type Raw = Record<string, KnowledgeBaseGetOrCreateRagIndexesResponseValue.Raw>;
}
