import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ImageAvatar } from "./ImageAvatar";
import { OrbAvatar } from "./OrbAvatar";
import { UrlAvatar } from "./UrlAvatar";
export declare const WidgetConfigInputAvatar: core.serialization.Schema<serializers.WidgetConfigInputAvatar.Raw, ElevenLabs.WidgetConfigInputAvatar>;
export declare namespace WidgetConfigInputAvatar {
    type Raw = WidgetConfigInputAvatar.Orb | WidgetConfigInputAvatar.Url | WidgetConfigInputAvatar.Image;
    interface Orb extends OrbAvatar.Raw {
        type: "orb";
    }
    interface Url extends UrlAvatar.Raw {
        type: "url";
    }
    interface Image extends ImageAvatar.Raw {
        type: "image";
    }
}
