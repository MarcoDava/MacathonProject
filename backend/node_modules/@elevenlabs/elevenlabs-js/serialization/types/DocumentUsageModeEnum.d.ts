import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DocumentUsageModeEnum: core.serialization.Schema<serializers.DocumentUsageModeEnum.Raw, ElevenLabs.DocumentUsageModeEnum>;
export declare namespace DocumentUsageModeEnum {
    type Raw = "prompt" | "auto";
}
