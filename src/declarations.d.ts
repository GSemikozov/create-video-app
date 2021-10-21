/// <reference types="react-scripts" />
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: "development" | "production" | "test";
        PUBLIC_URL: string;
    }
}

declare module "*.bmp" {
    const src: string;
    export default src;
}

declare module "*.gif" {
    const src: string;
    export default src;
}

declare module "*.jpg" {
    const src: string;
    export default src;
}

declare module "*.jpeg" {
    const src: string;
    export default src;
}

declare module "*.wav" {
    const src: string;
    export default src;
}

declare module "*.mp3" {
    const src: string;
    export default src;
}

declare module "*.ogg" {
    const src: string;
    export default src;
}

declare module "*.png" {
    const src: string;
    export default src;
}

declare module "*.webp" {
    const src: string;
    export default src;
}

declare module "*.svg" {
    import * as React from "react";

    const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

    export default ReactComponent;
}

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.md";