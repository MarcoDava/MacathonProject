import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const MusicSeparateStemsRequestStemVariationId: core.serialization.Schema<serializers.MusicSeparateStemsRequestStemVariationId.Raw, ElevenLabs.MusicSeparateStemsRequestStemVariationId>;
export declare namespace MusicSeparateStemsRequestStemVariationId {
    type Raw = "two_stems_v1" | "six_stems_v1";
}
