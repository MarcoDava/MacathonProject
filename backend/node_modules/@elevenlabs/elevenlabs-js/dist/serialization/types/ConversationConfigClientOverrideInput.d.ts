import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AgentConfigOverrideInput } from "./AgentConfigOverrideInput";
import { ConversationConfigOverride } from "./ConversationConfigOverride";
import { TtsConversationalConfigOverride } from "./TtsConversationalConfigOverride";
import { TurnConfigOverride } from "./TurnConfigOverride";
export declare const ConversationConfigClientOverrideInput: core.serialization.ObjectSchema<serializers.ConversationConfigClientOverrideInput.Raw, ElevenLabs.ConversationConfigClientOverrideInput>;
export declare namespace ConversationConfigClientOverrideInput {
    interface Raw {
        turn?: TurnConfigOverride.Raw | null;
        tts?: TtsConversationalConfigOverride.Raw | null;
        conversation?: ConversationConfigOverride.Raw | null;
        agent?: AgentConfigOverrideInput.Raw | null;
    }
}
