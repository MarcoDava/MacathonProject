import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const AudioIsolationConvertRequestFileFormat: core.serialization.Schema<serializers.AudioIsolationConvertRequestFileFormat.Raw, ElevenLabs.AudioIsolationConvertRequestFileFormat>;
export declare namespace AudioIsolationConvertRequestFileFormat {
    type Raw = "pcm_s16le_16" | "other";
}
