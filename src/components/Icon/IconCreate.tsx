import React from 'react'
import IconCustom, {IconCustomProps} from './IconCustom'
export interface CreateIconOptions {
    scriptUrl: string | string[];
}


export interface IconFontProps extends IconCustomProps{
    icon:string;
}

function isValidCustomScriptUrl(scriptUrl: string): boolean {
    return typeof scriptUrl === 'string' && Boolean(scriptUrl.length)
}

function createScriptUrl(scriptUrls: string[], index: number = 0): void {
    const currentScriptUrl = scriptUrls[index];
    if (isValidCustomScriptUrl(currentScriptUrl)) {
        const script = document.createElement('script');
        script.setAttribute('src', currentScriptUrl);
        script.setAttribute('data-namespace', currentScriptUrl);
        if (scriptUrls.length > index + 1) {
            script.onload = () => {
                createScriptUrl(scriptUrls, index + 1);
            };
            script.onerror = () => {
                createScriptUrl(scriptUrls, index + 1);
            };
        }
        document.body.appendChild(script);
    }
}

const Create = (props:CreateIconOptions) => {

    const {scriptUrl} = props
    if (
        typeof document !== 'undefined' &&
        typeof window !== 'undefined' &&
        typeof document.createElement === 'function'
    ) {
        if (Array.isArray(scriptUrl)) {
            createScriptUrl(scriptUrl.reverse());
        } else {
            createScriptUrl([scriptUrl]);
        }
    }

    const IconFont:React.FC<IconFontProps>= (createProps) => {
        const { icon, ...restProps } = createProps
        let content = null;
        if (icon) {
            content =<use xlinkHref={`#${icon}`} />;
        }
        return (
            <IconCustom {...restProps}>
                {content}
            </IconCustom>
        )
    }
    return IconFont;
}

export default Create