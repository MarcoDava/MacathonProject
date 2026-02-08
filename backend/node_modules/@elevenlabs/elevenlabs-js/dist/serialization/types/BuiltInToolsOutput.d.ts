import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { SystemToolConfigOutput } from "./SystemToolConfigOutput";
export declare const BuiltInToolsOutput: core.serialization.ObjectSchema<serializers.BuiltInToolsOutput.Raw, ElevenLabs.BuiltInToolsOutput>;
export declare namespace BuiltInToolsOutput {
    interface Raw {
        end_call?: SystemToolConfigOutput.Raw | null;
        language_detection?: SystemToolConfigOutput.Raw | null;
        transfer_to_agent?: SystemToolConfigOutput.Raw | null;
        transfer_to_number?: SystemToolConfigOutput.Raw | null;
        skip_turn?: SystemToolConfigOutput.Raw | null;
        play_keypad_touch_tone?: SystemToolConfigOutput.Raw | null;
        voicemail_detection?: SystemToolConfigOutput.Raw | null;
    }
}
