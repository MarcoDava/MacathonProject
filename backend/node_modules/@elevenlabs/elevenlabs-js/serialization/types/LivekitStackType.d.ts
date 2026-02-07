import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LivekitStackType: core.serialization.Schema<serializers.LivekitStackType.Raw, ElevenLabs.LivekitStackType>;
export declare namespace LivekitStackType {
    type Raw = "standard" | "static";
}
