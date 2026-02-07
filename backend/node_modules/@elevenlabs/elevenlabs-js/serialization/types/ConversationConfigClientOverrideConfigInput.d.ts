import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AgentConfigOverrideConfig } from "./AgentConfigOverrideConfig";
import { ConversationConfigOverrideConfig } from "./ConversationConfigOverrideConfig";
import { TtsConversationalConfigOverrideConfig } from "./TtsConversationalConfigOverrideConfig";
import { TurnConfigOverrideConfig } from "./TurnConfigOverrideConfig";
export declare const ConversationConfigClientOverrideConfigInput: core.serialization.ObjectSchema<serializers.ConversationConfigClientOverrideConfigInput.Raw, ElevenLabs.ConversationConfigClientOverrideConfigInput>;
export declare namespace ConversationConfigClientOverrideConfigInput {
    interface Raw {
        turn?: TurnConfigOverrideConfig.Raw | null;
        tts?: TtsConversationalConfigOverrideConfig.Raw | null;
        conversation?: ConversationConfigOverrideConfig.Raw | null;
        agent?: AgentConfigOverrideConfig.Raw | null;
    }
}
