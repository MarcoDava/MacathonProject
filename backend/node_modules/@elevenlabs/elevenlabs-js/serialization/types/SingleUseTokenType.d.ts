import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SingleUseTokenType: core.serialization.Schema<serializers.SingleUseTokenType.Raw, ElevenLabs.SingleUseTokenType>;
export declare namespace SingleUseTokenType {
    type Raw = "realtime_scribe" | "tts_websocket";
}
