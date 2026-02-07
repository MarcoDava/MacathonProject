import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PodcastBulletinModeData: core.serialization.ObjectSchema<serializers.PodcastBulletinModeData.Raw, ElevenLabs.PodcastBulletinModeData>;
export declare namespace PodcastBulletinModeData {
    interface Raw {
        host_voice_id: string;
    }
}
