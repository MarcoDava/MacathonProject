import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PositionInput: core.serialization.ObjectSchema<serializers.PositionInput.Raw, ElevenLabs.PositionInput>;
export declare namespace PositionInput {
    interface Raw {
        x?: number | null;
        y?: number | null;
    }
}
