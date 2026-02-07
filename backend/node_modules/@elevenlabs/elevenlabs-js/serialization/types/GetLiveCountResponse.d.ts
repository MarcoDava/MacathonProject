import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const GetLiveCountResponse: core.serialization.ObjectSchema<serializers.GetLiveCountResponse.Raw, ElevenLabs.GetLiveCountResponse>;
export declare namespace GetLiveCountResponse {
    interface Raw {
        count: number;
    }
}
