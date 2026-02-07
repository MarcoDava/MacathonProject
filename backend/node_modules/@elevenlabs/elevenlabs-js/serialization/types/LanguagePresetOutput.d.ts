import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationConfigClientOverrideOutput } from "./ConversationConfigClientOverrideOutput";
import { LanguagePresetTranslation } from "./LanguagePresetTranslation";
export declare const LanguagePresetOutput: core.serialization.ObjectSchema<serializers.LanguagePresetOutput.Raw, ElevenLabs.LanguagePresetOutput>;
export declare namespace LanguagePresetOutput {
    interface Raw {
        overrides: ConversationConfigClientOverrideOutput.Raw;
        first_message_translation?: LanguagePresetTranslation.Raw | null;
        soft_timeout_translation?: LanguagePresetTranslation.Raw | null;
    }
}
