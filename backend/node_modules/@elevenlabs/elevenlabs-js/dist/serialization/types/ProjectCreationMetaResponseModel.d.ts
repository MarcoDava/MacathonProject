import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ProjectCreationMetaResponseModelStatus } from "./ProjectCreationMetaResponseModelStatus";
import { ProjectCreationMetaResponseModelType } from "./ProjectCreationMetaResponseModelType";
export declare const ProjectCreationMetaResponseModel: core.serialization.ObjectSchema<serializers.ProjectCreationMetaResponseModel.Raw, ElevenLabs.ProjectCreationMetaResponseModel>;
export declare namespace ProjectCreationMetaResponseModel {
    interface Raw {
        creation_progress: number;
        status: ProjectCreationMetaResponseModelStatus.Raw;
        type: ProjectCreationMetaResponseModelType.Raw;
    }
}
