declare const framework: {
    framework: string;
    templates: {
        [x: string]: {
            [templateName: string]: {
                [templateType: string]: ((classes: {
                    [refName: string]: string[] | undefined;
                }) => (context: any) => Element) | ((context: any) => Element);
            };
        };
    };
};
export default framework;
