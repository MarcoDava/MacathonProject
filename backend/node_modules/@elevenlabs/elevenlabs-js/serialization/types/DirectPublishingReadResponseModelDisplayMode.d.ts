import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DirectPublishingReadResponseModelDisplayMode: core.serialization.Schema<serializers.DirectPublishingReadResponseModelDisplayMode.Raw, ElevenLabs.DirectPublishingReadResponseModelDisplayMode>;
export declare namespace DirectPublishingReadResponseModelDisplayMode {
    type Raw = "text" | "audio-only" | "text-with-audio";
}
