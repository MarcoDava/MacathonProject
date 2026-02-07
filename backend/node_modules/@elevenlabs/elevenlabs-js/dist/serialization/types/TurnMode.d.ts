import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TurnMode: core.serialization.Schema<serializers.TurnMode.Raw, ElevenLabs.TurnMode>;
export declare namespace TurnMode {
    type Raw = "silence" | "turn";
}
