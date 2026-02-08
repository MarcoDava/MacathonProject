import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ProjectResponse } from "./ProjectResponse";
export declare const PodcastProjectResponseModel: core.serialization.ObjectSchema<serializers.PodcastProjectResponseModel.Raw, ElevenLabs.PodcastProjectResponseModel>;
export declare namespace PodcastProjectResponseModel {
    interface Raw {
        project: ProjectResponse.Raw;
    }
}
