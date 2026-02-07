import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PositionOutput: core.serialization.ObjectSchema<serializers.PositionOutput.Raw, ElevenLabs.PositionOutput>;
export declare namespace PositionOutput {
    interface Raw {
        x: number;
        y: number;
    }
}
