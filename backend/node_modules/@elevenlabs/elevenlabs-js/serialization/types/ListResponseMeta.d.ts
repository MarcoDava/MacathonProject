import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ListResponseMeta: core.serialization.ObjectSchema<serializers.ListResponseMeta.Raw, ElevenLabs.ListResponseMeta>;
export declare namespace ListResponseMeta {
    interface Raw {
        total?: number | null;
        page?: number | null;
        page_size?: number | null;
    }
}
