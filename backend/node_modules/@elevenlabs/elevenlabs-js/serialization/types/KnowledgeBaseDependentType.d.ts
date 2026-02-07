import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const KnowledgeBaseDependentType: core.serialization.Schema<serializers.KnowledgeBaseDependentType.Raw, ElevenLabs.KnowledgeBaseDependentType>;
export declare namespace KnowledgeBaseDependentType {
    type Raw = "direct" | "transitive" | "all";
}
