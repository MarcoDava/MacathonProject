import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PlayDtmfToolConfig: core.serialization.ObjectSchema<serializers.PlayDtmfToolConfig.Raw, ElevenLabs.PlayDtmfToolConfig>;
export declare namespace PlayDtmfToolConfig {
    interface Raw {
        use_out_of_band_dtmf?: boolean | null;
    }
}
