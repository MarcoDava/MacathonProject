import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ToolMockConfig: core.serialization.ObjectSchema<serializers.ToolMockConfig.Raw, ElevenLabs.ToolMockConfig>;
export declare namespace ToolMockConfig {
    interface Raw {
        default_return_value?: string | null;
        default_is_error?: boolean | null;
    }
}
