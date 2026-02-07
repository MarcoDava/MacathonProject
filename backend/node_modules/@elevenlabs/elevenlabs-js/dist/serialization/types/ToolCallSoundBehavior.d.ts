import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ToolCallSoundBehavior: core.serialization.Schema<serializers.ToolCallSoundBehavior.Raw, ElevenLabs.ToolCallSoundBehavior>;
export declare namespace ToolCallSoundBehavior {
    type Raw = "auto" | "always";
}
