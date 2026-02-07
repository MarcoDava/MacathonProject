import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const DubbingCreateRequestMode: core.serialization.Schema<serializers.DubbingCreateRequestMode.Raw, ElevenLabs.DubbingCreateRequestMode>;
export declare namespace DubbingCreateRequestMode {
    type Raw = "automatic" | "manual";
}
