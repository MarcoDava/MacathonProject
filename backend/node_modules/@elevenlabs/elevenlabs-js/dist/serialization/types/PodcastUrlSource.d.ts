import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PodcastUrlSource: core.serialization.ObjectSchema<serializers.PodcastUrlSource.Raw, ElevenLabs.PodcastUrlSource>;
export declare namespace PodcastUrlSource {
    interface Raw {
        type: "url";
        url: string;
    }
}
