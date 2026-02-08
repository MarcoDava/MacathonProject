import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DubbingMediaReference } from "./DubbingMediaReference";
import { RenderStatus } from "./RenderStatus";
import { RenderType } from "./RenderType";
export declare const Render: core.serialization.ObjectSchema<serializers.Render.Raw, ElevenLabs.Render>;
export declare namespace Render {
    interface Raw {
        id: string;
        version: number;
        language?: string | null;
        type?: RenderType.Raw | null;
        media_ref?: DubbingMediaReference.Raw | null;
        status: RenderStatus.Raw;
    }
}
