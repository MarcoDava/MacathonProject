import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CaptionStyleTemplateModel: core.serialization.ObjectSchema<serializers.CaptionStyleTemplateModel.Raw, ElevenLabs.CaptionStyleTemplateModel>;
export declare namespace CaptionStyleTemplateModel {
    interface Raw {
        key: string;
        label: string;
        requires_high_fps?: boolean | null;
    }
}
