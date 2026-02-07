import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CaptionStyleModelTextWeight: core.serialization.Schema<serializers.CaptionStyleModelTextWeight.Raw, ElevenLabs.CaptionStyleModelTextWeight>;
export declare namespace CaptionStyleModelTextWeight {
    type Raw = "normal" | "bold";
}
