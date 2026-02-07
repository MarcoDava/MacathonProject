import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WidgetExpandable: core.serialization.Schema<serializers.WidgetExpandable.Raw, ElevenLabs.WidgetExpandable>;
export declare namespace WidgetExpandable {
    type Raw = "never" | "mobile" | "desktop" | "always";
}
