import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DubbingReleaseChannel: core.serialization.Schema<serializers.DubbingReleaseChannel.Raw, ElevenLabs.DubbingReleaseChannel>;
export declare namespace DubbingReleaseChannel {
    type Raw = "stable" | "release" | "experimental";
}
