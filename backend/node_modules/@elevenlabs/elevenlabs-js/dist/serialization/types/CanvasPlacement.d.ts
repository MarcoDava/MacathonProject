import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CanvasPlacement: core.serialization.ObjectSchema<serializers.CanvasPlacement.Raw, ElevenLabs.CanvasPlacement>;
export declare namespace CanvasPlacement {
    interface Raw {
        x?: number | null;
        y?: number | null;
        scale_x?: number | null;
        scale_y?: number | null;
        pivot_x?: number | null;
        pivot_y?: number | null;
        skew_x?: number | null;
        skew_y?: number | null;
    }
}
