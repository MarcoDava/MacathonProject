import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CaptionStyleVerticalPlacementModelAlign } from "./CaptionStyleVerticalPlacementModelAlign";
export declare const CaptionStyleVerticalPlacementModel: core.serialization.ObjectSchema<serializers.CaptionStyleVerticalPlacementModel.Raw, ElevenLabs.CaptionStyleVerticalPlacementModel>;
export declare namespace CaptionStyleVerticalPlacementModel {
    interface Raw {
        align: CaptionStyleVerticalPlacementModelAlign.Raw;
        translate_pct: number;
    }
}
