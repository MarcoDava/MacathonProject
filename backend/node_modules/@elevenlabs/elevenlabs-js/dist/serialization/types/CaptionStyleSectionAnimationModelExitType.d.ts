import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CaptionStyleSectionAnimationModelExitType: core.serialization.Schema<serializers.CaptionStyleSectionAnimationModelExitType.Raw, ElevenLabs.CaptionStyleSectionAnimationModelExitType>;
export declare namespace CaptionStyleSectionAnimationModelExitType {
    type Raw = "none" | "fade" | "scale";
}
