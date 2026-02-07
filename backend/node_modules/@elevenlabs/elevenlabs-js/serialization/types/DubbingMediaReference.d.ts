import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DubbingMediaReference: core.serialization.ObjectSchema<serializers.DubbingMediaReference.Raw, ElevenLabs.DubbingMediaReference>;
export declare namespace DubbingMediaReference {
    interface Raw {
        src: string;
        content_type: string;
        bucket_name: string;
        random_path_slug: string;
        duration_secs: number;
        is_audio: boolean;
        url: string;
    }
}
