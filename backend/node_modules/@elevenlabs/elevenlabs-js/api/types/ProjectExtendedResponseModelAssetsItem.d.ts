import type * as ElevenLabs from "../index";
export type ProjectExtendedResponseModelAssetsItem = ElevenLabs.ProjectExtendedResponseModelAssetsItem.Video | ElevenLabs.ProjectExtendedResponseModelAssetsItem.Audio | ElevenLabs.ProjectExtendedResponseModelAssetsItem.Image;
export declare namespace ProjectExtendedResponseModelAssetsItem {
    interface Video extends ElevenLabs.ProjectVideoResponseModel {
        type: "video";
    }
    interface Audio extends ElevenLabs.ProjectExternalAudioResponseModel {
        type: "audio";
    }
    interface Image extends ElevenLabs.ProjectImageResponseModel {
        type: "image";
    }
}
