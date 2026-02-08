import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ToolCallSoundType: core.serialization.Schema<serializers.ToolCallSoundType.Raw, ElevenLabs.ToolCallSoundType>;
export declare namespace ToolCallSoundType {
    type Raw = "typing" | "elevator1" | "elevator2" | "elevator3" | "elevator4";
}
