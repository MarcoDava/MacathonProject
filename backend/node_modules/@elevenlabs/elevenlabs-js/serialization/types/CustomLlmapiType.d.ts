import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CustomLlmapiType: core.serialization.Schema<serializers.CustomLlmapiType.Raw, ElevenLabs.CustomLlmapiType>;
export declare namespace CustomLlmapiType {
    type Raw = "chat_completions" | "responses";
}
