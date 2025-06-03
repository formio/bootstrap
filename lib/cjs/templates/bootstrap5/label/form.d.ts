import { Component } from '@formio/core';
type LabelContext = {
    component: Component;
    iconClass: (icon: string) => string;
    t: (val: string, options?: {
        _userInput: boolean;
    }) => string;
    instance: {
        id: string;
    };
    customStyles?: {
        [refName: string]: {
            classes: string[] | undefined;
            override?: boolean;
        };
    };
};
type DefaultClasses = {
    [refName: string]: string[] | undefined;
} | undefined;
declare const _default: (classes: DefaultClasses) => (context: LabelContext) => Element;
export default _default;
