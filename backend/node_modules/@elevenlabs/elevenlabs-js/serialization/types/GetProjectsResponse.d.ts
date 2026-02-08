import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ProjectResponse } from "./ProjectResponse";
export declare const GetProjectsResponse: core.serialization.ObjectSchema<serializers.GetProjectsResponse.Raw, ElevenLabs.GetProjectsResponse>;
export declare namespace GetProjectsResponse {
    interface Raw {
        projects: ProjectResponse.Raw[];
    }
}
