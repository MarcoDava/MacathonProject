import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const RenderType: core.serialization.Schema<serializers.RenderType.Raw, ElevenLabs.RenderType>;
export declare namespace RenderType {
    type Raw = "mp4" | "aac" | "mp3" | "wav" | "aaf" | "tracks_zip" | "clips_zip";
}
