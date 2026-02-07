import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DetectedEntity: core.serialization.ObjectSchema<serializers.DetectedEntity.Raw, ElevenLabs.DetectedEntity>;
export declare namespace DetectedEntity {
    interface Raw {
        text: string;
        entity_type: string;
        start_char: number;
        end_char: number;
    }
}
