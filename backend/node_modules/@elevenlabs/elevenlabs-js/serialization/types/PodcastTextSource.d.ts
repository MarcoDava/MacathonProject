import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PodcastTextSource: core.serialization.ObjectSchema<serializers.PodcastTextSource.Raw, ElevenLabs.PodcastTextSource>;
export declare namespace PodcastTextSource {
    interface Raw {
        type: "text";
        text: string;
    }
}
