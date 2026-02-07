import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PromptEvaluationCriteria: core.serialization.ObjectSchema<serializers.PromptEvaluationCriteria.Raw, ElevenLabs.PromptEvaluationCriteria>;
export declare namespace PromptEvaluationCriteria {
    interface Raw {
        id: string;
        name: string;
        type?: "prompt" | null;
        conversation_goal_prompt: string;
        use_knowledge_base?: boolean | null;
    }
}
