import type * as ElevenLabs from "../../../../../../../../../../api/index";
import * as core from "../../../../../../../../../../core";
import type * as serializers from "../../../../../../../../../index";
import { SummariesGetResponseValue } from "../types/SummariesGetResponseValue";
export declare const Response: core.serialization.Schema<serializers.conversationalAi.knowledgeBase.documents.summaries.get.Response.Raw, Record<string, ElevenLabs.conversationalAi.knowledgeBase.documents.SummariesGetResponseValue>>;
export declare namespace Response {
    type Raw = Record<string, SummariesGetResponseValue.Raw>;
}
