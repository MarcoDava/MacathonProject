import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AgentConfigOverrideOutput } from "./AgentConfigOverrideOutput";
import { ConversationConfigOverride } from "./ConversationConfigOverride";
import { TtsConversationalConfigOverride } from "./TtsConversationalConfigOverride";
import { TurnConfigOverride } from "./TurnConfigOverride";
export declare const ConversationConfigClientOverrideOutput: core.serialization.ObjectSchema<serializers.ConversationConfigClientOverrideOutput.Raw, ElevenLabs.ConversationConfigClientOverrideOutput>;
export declare namespace ConversationConfigClientOverrideOutput {
    interface Raw {
        turn?: TurnConfigOverride.Raw | null;
        tts?: TtsConversationalConfigOverride.Raw | null;
        conversation?: ConversationConfigOverride.Raw | null;
        agent?: AgentConfigOverrideOutput.Raw | null;
    }
}
