import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PromptAgentApiModelOverride } from "./PromptAgentApiModelOverride";
export declare const AgentConfigOverrideInput: core.serialization.ObjectSchema<serializers.AgentConfigOverrideInput.Raw, ElevenLabs.AgentConfigOverrideInput>;
export declare namespace AgentConfigOverrideInput {
    interface Raw {
        first_message?: string | null;
        language?: string | null;
        prompt?: PromptAgentApiModelOverride.Raw | null;
    }
}
