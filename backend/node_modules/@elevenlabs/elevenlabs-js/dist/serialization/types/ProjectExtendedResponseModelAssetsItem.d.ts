import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ProjectExternalAudioResponseModel } from "./ProjectExternalAudioResponseModel";
import { ProjectImageResponseModel } from "./ProjectImageResponseModel";
import { ProjectVideoResponseModel } from "./ProjectVideoResponseModel";
export declare const ProjectExtendedResponseModelAssetsItem: core.serialization.Schema<serializers.ProjectExtendedResponseModelAssetsItem.Raw, ElevenLabs.ProjectExtendedResponseModelAssetsItem>;
export declare namespace ProjectExtendedResponseModelAssetsItem {
    type Raw = ProjectExtendedResponseModelAssetsItem.Video | ProjectExtendedResponseModelAssetsItem.Audio | ProjectExtendedResponseModelAssetsItem.Image;
    interface Video extends ProjectVideoResponseModel.Raw {
        type: "video";
    }
    interface Audio extends ProjectExternalAudioResponseModel.Raw {
        type: "audio";
    }
    interface Image extends ProjectImageResponseModel.Raw {
        type: "image";
    }
}
