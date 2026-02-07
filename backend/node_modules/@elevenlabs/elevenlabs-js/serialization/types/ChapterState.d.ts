import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ChapterState: core.serialization.Schema<serializers.ChapterState.Raw, ElevenLabs.ChapterState>;
export declare namespace ChapterState {
    type Raw = "default" | "converting";
}
