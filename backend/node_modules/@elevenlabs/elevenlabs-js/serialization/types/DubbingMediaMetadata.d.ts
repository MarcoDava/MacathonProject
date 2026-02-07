import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DubbingMediaMetadata: core.serialization.ObjectSchema<serializers.DubbingMediaMetadata.Raw, ElevenLabs.DubbingMediaMetadata>;
export declare namespace DubbingMediaMetadata {
    interface Raw {
        content_type: string;
        duration: number;
    }
}
