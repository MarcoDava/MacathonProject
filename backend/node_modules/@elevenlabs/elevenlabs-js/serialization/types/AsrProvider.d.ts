import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AsrProvider: core.serialization.Schema<serializers.AsrProvider.Raw, ElevenLabs.AsrProvider>;
export declare namespace AsrProvider {
    type Raw = "elevenlabs" | "scribe_realtime";
}
