import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DoDubbingResponse: core.serialization.ObjectSchema<serializers.DoDubbingResponse.Raw, ElevenLabs.DoDubbingResponse>;
export declare namespace DoDubbingResponse {
    interface Raw {
        dubbing_id: string;
        expected_duration_sec: number;
    }
}
