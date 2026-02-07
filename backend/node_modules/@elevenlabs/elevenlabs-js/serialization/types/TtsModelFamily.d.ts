import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TtsModelFamily: core.serialization.Schema<serializers.TtsModelFamily.Raw, ElevenLabs.TtsModelFamily>;
export declare namespace TtsModelFamily {
    type Raw = "turbo" | "flash" | "multilingual";
}
