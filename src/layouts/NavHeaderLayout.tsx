import { COLORS } from "@/common_style";
import {
    ZColumn,
    ZHeightEnum,
    ZNavHeader,
    ZWidthEnum,
} from "@/components";
import React from "react";

interface NavHeaderLayoutProps {
    children?: React.ReactNode;
    title?: string;
    withBack?: boolean;
}


const NavHeaderLayout = (props: NavHeaderLayoutProps) => {
    const { children, title = "", withBack = false } = props;
    return (
        <ZColumn
            width={ZWidthEnum.Full}
            height={ZHeightEnum.Full}
            style={{
                "background-color": COLORS.PAGE_BACKGROUND,
            }}
        >
            <ZNavHeader withBack={withBack} title={title}></ZNavHeader>
            {children}
        </ZColumn>
    )
}
export type { NavHeaderLayoutProps };
export { NavHeaderLayout };