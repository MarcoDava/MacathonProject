import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TurnEagerness: core.serialization.Schema<serializers.TurnEagerness.Raw, ElevenLabs.TurnEagerness>;
export declare namespace TurnEagerness {
    type Raw = "patient" | "normal" | "eager";
}
