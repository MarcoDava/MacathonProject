import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CaptionStyleModelTextStyle: core.serialization.Schema<serializers.CaptionStyleModelTextStyle.Raw, ElevenLabs.CaptionStyleModelTextStyle>;
export declare namespace CaptionStyleModelTextStyle {
    type Raw = "normal" | "italic";
}
