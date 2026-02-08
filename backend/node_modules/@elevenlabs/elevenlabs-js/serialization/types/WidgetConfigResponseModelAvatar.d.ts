import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ImageAvatar } from "./ImageAvatar";
import { OrbAvatar } from "./OrbAvatar";
import { UrlAvatar } from "./UrlAvatar";
export declare const WidgetConfigResponseModelAvatar: core.serialization.Schema<serializers.WidgetConfigResponseModelAvatar.Raw, ElevenLabs.WidgetConfigResponseModelAvatar>;
export declare namespace WidgetConfigResponseModelAvatar {
    type Raw = WidgetConfigResponseModelAvatar.Orb | WidgetConfigResponseModelAvatar.Url | WidgetConfigResponseModelAvatar.Image;
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
