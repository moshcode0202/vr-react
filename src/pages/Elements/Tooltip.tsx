import { Link } from 'react-router-dom';
import CodeHighlight from '../../components/Highlight';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import * as Tooltipp from '@radix-ui/react-tooltip';

const Tooltip = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Tooltips'));
    });
    const [codeArr, setCodeArr] = useState<string[]>([]);

    const toggleCode = (name: string) => {
        if (codeArr.includes(name)) {
            setCodeArr((value) => value.filter((d) => d !== name));
        } else {
            setCodeArr([...codeArr, name]);
        }
    };
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="#" className="text-primary hover:underline">
                        Elements
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Popovers</span>
                </li>
            </ul>
            <div className="pt-5 space-y-8">
                <div className="panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap">
                    <div className="ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path opacity="0.5" d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://www.npmjs.com/package/@tippyjs/react" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://www.npmjs.com/package/@tippyjs/react
                    </a>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    {/* Default */}
                    <div className="panel" id="default">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Default</h5>
                            <button
                                onClick={() => {
                                    toggleCode('code1');
                                }}
                                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            >
                                <span className="flex items-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ltr:mr-2 rtl:ml-2">
                                        <path
                                            d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path
                                            d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <div className="flex justify-center w-full gap-4">
                                <Tippy content="Popover using ANCHOR tag">
                                    <button type="button" className="btn bg-primary btn-primary">
                                        Link
                                    </button>
                                </Tippy>
                                <Tippy content="Popover using BUTTON tag">
                                    <button type="button" className="btn btn-success">
                                        Button
                                    </button>
                                </Tippy>
                            </div>
                        </div>
                        {codeArr.includes('code1') && (
                            <CodeHighlight>
                                <pre>{`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Popover using ANCHOR tag">
    <button type="button" className="btn bg-primary btn-primary">
        Link
    </button>
</Tippy>

<Tippy content="Popover using BUTTON tag">
    <button type="button" className="btn btn-success">
        Button
    </button>
</Tippy>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>

                    {/* Default */}
                    <div className="panel" id="default">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Default</h5>
                            <button
                                onClick={() => {
                                    toggleCode('code1');
                                }}
                                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            >
                                <span className="flex items-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ltr:mr-2 rtl:ml-2">
                                        <path
                                            d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path
                                            d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <div className="flex justify-center w-full gap-4">
                                <Tooltipp.Provider>
                                    <Tooltipp.Root delayDuration={0}>
                                        <Tooltipp.Trigger asChild>
                                            <button type="button" className="btn bg-primary btn-primary">
                                                Link
                                            </button>
                                        </Tooltipp.Trigger>
                                        <Tooltipp.Portal>
                                            <Tooltipp.Content
                                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                sideOffset={5}
                                            >
                                                Popover using ANCHOR tag
                                                <Tooltipp.Arrow className="fill-black" />
                                            </Tooltipp.Content>
                                        </Tooltipp.Portal>
                                    </Tooltipp.Root>
                                    <Tooltipp.Root delayDuration={0}>
                                        <Tooltipp.Trigger asChild>
                                            <button type="button" className="btn bg-success btn-success">
                                                Button
                                            </button>
                                        </Tooltipp.Trigger>
                                        <Tooltipp.Portal>
                                            <Tooltipp.Content
                                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                sideOffset={5}
                                            >
                                                Popover using BUTTON tag
                                                <Tooltipp.Arrow className="fill-white" />
                                            </Tooltipp.Content>
                                        </Tooltipp.Portal>
                                    </Tooltipp.Root>
                                </Tooltipp.Provider>
                            </div>
                        </div>
                        {codeArr.includes('code1') && (
                            <CodeHighlight>
                                <pre>{`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Popover using ANCHOR tag">
    <button type="button" className="btn bg-primary btn-primary">
        Link
    </button>
</Tippy>

<Tippy content="Popover using BUTTON tag">
    <button type="button" className="btn btn-success">
        Button
    </button>
</Tippy>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>

                    {/* Placement */}
                    <div className="panel" id="directions">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Placement</h5>
                            <button
                                onClick={() => {
                                    toggleCode('code2');
                                }}
                                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            >
                                <span className="flex items-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ltr:mr-2 rtl:ml-2">
                                        <path
                                            d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path
                                            d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <div className="flex flex-wrap justify-center gap-4 w-full">
                                <Tippy content="Popover on top" placement="top">
                                    <button type="button" className="btn btn-info">
                                        Tooltip on top
                                    </button>
                                </Tippy>
                                <Tippy content="Popover on left" placement="left">
                                    <button type="button" className="btn btn-secondary">
                                        Tooltip on left
                                    </button>
                                </Tippy>
                                <Tippy content="Popover on bottom" placement="bottom">
                                    <button type="button" className="btn btn-warning">
                                        Tooltip on bottom
                                    </button>
                                </Tippy>
                                <Tippy content="Popover on right" placement="right">
                                    <button type="button" className="btn btn-danger">
                                        Tooltip on right
                                    </button>
                                </Tippy>
                            </div>
                        </div>
                        {codeArr.includes('code2') && (
                            <CodeHighlight>
                                <pre>{`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Popover on top" placement="top">
    <button type="button" className="btn btn-info">
        Tooltip on top
    </button>
</Tippy>

<Tippy content="Popover on left" placement="left">
    <button type="button" className="btn btn-secondary">
        Tooltip on left
    </button>
</Tippy>

<Tippy content="Popover on right" placement="right">
    <button type="button" className="btn btn-danger">
        Tooltip on right
    </button>
</Tippy>

<Tippy content="Popover on bottom" placement="bottom">
    <button type="button" className="btn btn-warning">
        Tooltip on bottom
    </button>
</Tippy>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>
                    {/* Placement */}
                    <div className="panel" id="directions">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Placement</h5>
                            <button
                                onClick={() => {
                                    toggleCode('code2');
                                }}
                                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            >
                                <span className="flex items-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ltr:mr-2 rtl:ml-2">
                                        <path
                                            d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path
                                            d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <div className="flex flex-wrap justify-center gap-4 w-full">
                                <Tooltipp.Provider>
                                    <Tooltipp.Root delayDuration={0}>
                                        <Tooltipp.Trigger asChild>
                                            <button type="button" className="btn bg-primary btn-primary">
                                                Tooltip on top
                                            </button>
                                        </Tooltipp.Trigger>
                                        <Tooltipp.Portal>
                                            <Tooltipp.Content
                                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                sideOffset={5}
                                            >
                                                Popover on top
                                                <Tooltipp.Arrow className="fill-black" />
                                            </Tooltipp.Content>
                                        </Tooltipp.Portal>
                                    </Tooltipp.Root>
                                    <Tooltipp.Root delayDuration={0}>
                                        <Tooltipp.Trigger asChild>
                                            <button type="button" className="btn bg-secondary btn-secondary">
                                                Tooltip on left
                                            </button>
                                        </Tooltipp.Trigger>
                                        <Tooltipp.Portal>
                                            <Tooltipp.Content
                                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                sideOffset={5}
                                                side="left"
                                            >
                                                Popover on left
                                                <Tooltipp.Arrow className="fill-black" />
                                            </Tooltipp.Content>
                                        </Tooltipp.Portal>
                                    </Tooltipp.Root>
                                    <Tooltipp.Root delayDuration={0}>
                                        <Tooltipp.Trigger asChild>
                                            <button type="button" className="btn bg-warning btn-warning">
                                                Tooltip on right
                                            </button>
                                        </Tooltipp.Trigger>
                                        <Tooltipp.Portal>
                                            <Tooltipp.Content
                                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                sideOffset={5}
                                                side="right"
                                            >
                                                Popover on bottom
                                                <Tooltipp.Arrow className="fill-black" />
                                            </Tooltipp.Content>
                                        </Tooltipp.Portal>
                                    </Tooltipp.Root>
                                    <Tooltipp.Root delayDuration={0}>
                                        <Tooltipp.Trigger asChild>
                                            <button type="button" className="btn bg-danger btn-danger">
                                                Tooltip on right
                                            </button>
                                        </Tooltipp.Trigger>
                                        <Tooltipp.Portal>
                                            <Tooltipp.Content
                                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                sideOffset={5}
                                                side="bottom"
                                            >
                                                Popover on bottom
                                                <Tooltipp.Arrow className="fill-black" />
                                            </Tooltipp.Content>
                                        </Tooltipp.Portal>
                                    </Tooltipp.Root>
                                </Tooltipp.Provider>
                            </div>
                        </div>
                        {codeArr.includes('code2') && (
                            <CodeHighlight>
                                <pre>{`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Popover on top" placement="top">
    <button type="button" className="btn btn-info">
        Tooltip on top
    </button>
</Tippy>

<Tippy content="Popover on left" placement="left">
    <button type="button" className="btn btn-secondary">
        Tooltip on left
    </button>
</Tippy>

<Tippy content="Popover on right" placement="right">
    <button type="button" className="btn btn-danger">
        Tooltip on right
    </button>
</Tippy>

<Tippy content="Popover on bottom" placement="bottom">
    <button type="button" className="btn btn-warning">
        Tooltip on bottom
    </button>
</Tippy>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>
                    {/* Html popover */}
                    <div className="panel lg:row-start-1 lg:col-start-2" id="dismissible">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">HTML</h5>
                            <button
                                onClick={() => {
                                    toggleCode('code3');
                                }}
                                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            >
                                <span className="flex items-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ltr:mr-2 rtl:ml-2">
                                        <path
                                            d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path
                                            d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <div className="flex justify-center gap-4 w-full">
                                <Tooltipp.Provider>
                                    <Tooltipp.Root delayDuration={0}>
                                        <Tooltipp.Trigger asChild>
                                            <button type="button" className="btn bg-primary btn-primary">
                                                Tooltip on HTML
                                            </button>
                                        </Tooltipp.Trigger>
                                        <Tooltipp.Portal>
                                            <Tooltipp.Content
                                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                sideOffset={5}
                                                side="right"
                                            >
                                                <strong>Bolded content</strong>
                                                <Tooltipp.Arrow className="fill-black" />
                                            </Tooltipp.Content>
                                        </Tooltipp.Portal>
                                    </Tooltipp.Root>
                                </Tooltipp.Provider>
                                <Tippy content={<strong>Bolded content</strong>}>
                                    <button type="button" data-dismissable="true" className="btn btn-dark">
                                        Tooltip on HTML
                                    </button>
                                </Tippy>
                            </div>
                        </div>
                        {codeArr.includes('code3') && (
                            <CodeHighlight>
                                <pre>{`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Bolded content">
    <button type="button" data-dismissable="true" className="btn btn-dark">
        Tooltip on HTML
    </button>
</Tippy>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>
                    {/* Options */}
                    <div className="panel" id="options">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Options</h5>
                            <button
                                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                                onClick={() => {
                                    toggleCode('code4');
                                }}
                            >
                                <span className="flex items-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ltr:mr-2 rtl:ml-2">
                                        <path
                                            d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path
                                            d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <div className="flex flex-wrap justify-center gap-4 w-full">
                                <Tippy trigger="click" content="On Click">
                                    <button type="button" data-trigger="mouseenter" className="btn btn-primary">
                                        On Click
                                    </button>
                                </Tippy>
                                <Tippy trigger="focusin" content="On Focus">
                                    <button type="button" data-trigger="focus" className="btn btn-secondary">
                                        On Focus
                                    </button>
                                </Tippy>
                                <Tippy content="Delay 1s" delay={1000}>
                                    <button type="button" data-delay="1000" className="btn btn-info">
                                        Delay
                                    </button>
                                </Tippy>
                                <Tippy content="Disabled Animation">
                                    <button type="button" data-animation="false" className="btn btn-dark">
                                        Disabled Animation
                                    </button>
                                </Tippy>
                            </div>
                        </div>
                        {codeArr.includes('code4') && (
                            <CodeHighlight>
                                <pre>{`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="On Click">
    <button type="button" data-trigger="mouseenter" className="btn btn-primary">
        On Click
    </button>
</Tippy>

<Tippy trigger="focusin" content="On Focus">
    <button type="button" data-trigger="focus" className="btn btn-secondary">
        On Focus
    </button>
</Tippy>

<Tippy content="Delay 1s" delay={1000}>
    <button type="button" data-delay="1000" className="btn btn-info">
        Delay
    </button>
</Tippy>

<Tippy content="Disabled Animation">
    <button type="button" data-animation="false" className="btn btn-dark">
        Disabled Animation
    </button>
</Tippy>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>
                    {/* Options */}
                    <div className="panel" id="options">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Options</h5>
                            <button
                                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                                onClick={() => {
                                    toggleCode('code4');
                                }}
                            >
                                <span className="flex items-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ltr:mr-2 rtl:ml-2">
                                        <path
                                            d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path
                                            d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <div className="flex flex-wrap justify-center gap-4 w-full">
                                <Tooltipp.Provider >
                                    <Tooltipp.Root delayDuration={0} disableHoverableContent={true}>
                                        <Tooltipp.Trigger asChild>
                                            <button type="button" className="btn bg-primary btn-primary">
                                                On Click
                                            </button>
                                        </Tooltipp.Trigger>
                                        <Tooltipp.Portal>
                                            <Tooltipp.Content
                                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                sideOffset={5}
                                                
                                            >
                                                On Click
                                                <Tooltipp.Arrow className="fill-black" />
                                            </Tooltipp.Content>
                                        </Tooltipp.Portal>
                                    </Tooltipp.Root>
                                    <Tooltipp.Root delayDuration={0} >
                                        <Tooltipp.Trigger asChild>
                                            <button type="button" className="btn bg-secondary btn-secondary">
                                                On Focus
                                            </button>
                                        </Tooltipp.Trigger>
                                        <Tooltipp.Portal>
                                            <Tooltipp.Content
                                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                sideOffset={5}
                                                side="top"
                                            >
                                                On Focus
                                                <Tooltipp.Arrow className="fill-black" />
                                            </Tooltipp.Content>
                                        </Tooltipp.Portal>
                                    </Tooltipp.Root>
                                    <Tooltipp.Root delayDuration={1000}>
                                        <Tooltipp.Trigger asChild>
                                            <button type="button" className="btn bg-info btn-info">
                                                Delay
                                            </button>
                                        </Tooltipp.Trigger>
                                        <Tooltipp.Portal>
                                            <Tooltipp.Content
                                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                sideOffset={5}
                                                side="top"
                                            >
                                                Delay
                                                <Tooltipp.Arrow className="fill-black" />
                                            </Tooltipp.Content>
                                        </Tooltipp.Portal>
                                    </Tooltipp.Root>
                                    <Tooltipp.Root delayDuration={0}>
                                        <Tooltipp.Trigger asChild>
                                            <button type="button" className="btn bg-dark btn-dark">
                                                Disabled Animation
                                            </button>
                                        </Tooltipp.Trigger>
                                        <Tooltipp.Portal>
                                            <Tooltipp.Content
                                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                sideOffset={5}
                                                side="top"
                                            >
                                                Disabled Animation
                                                <Tooltipp.Arrow className="fill-black" />
                                            </Tooltipp.Content>
                                        </Tooltipp.Portal>
                                    </Tooltipp.Root>
                                </Tooltipp.Provider>
                                {/* <Tippy trigger="click" content="On Click">
                                    <button type="button" data-trigger="mouseenter" className="btn btn-primary">
                                        On Click
                                    </button>
                                </Tippy>
                                <Tippy trigger="focusin" content="On Focus">
                                    <button type="button" data-trigger="focus" className="btn btn-secondary">
                                        On Focus
                                    </button>
                                </Tippy>
                                <Tippy content="Delay 1s" delay={1000}>
                                    <button type="button" data-delay="1000" className="btn btn-info">
                                        Delay
                                    </button>
                                </Tippy>
                                <Tippy content="Disabled Animation">
                                    <button type="button" data-animation="false" className="btn btn-dark">
                                        Disabled Animation
                                    </button>
                                </Tippy> */}
                            </div>
                        </div>
                        {codeArr.includes('code4') && (
                            <CodeHighlight>
                                <pre>{`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="On Click">
    <button type="button" data-trigger="mouseenter" className="btn btn-primary">
        On Click
    </button>
</Tippy>

<Tippy trigger="focusin" content="On Focus">
    <button type="button" data-trigger="focus" className="btn btn-secondary">
        On Focus
    </button>
</Tippy>

<Tippy content="Delay 1s" delay={1000}>
    <button type="button" data-delay="1000" className="btn btn-info">
        Delay
    </button>
</Tippy>

<Tippy content="Disabled Animation">
    <button type="button" data-animation="false" className="btn btn-dark">
        Disabled Animation
    </button>
</Tippy>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>
                    {/* Colors */}
                    <div className="panel lg:col-span-2" id="colors">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Colors</h5>
                            <button
                                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                                onClick={() => {
                                    toggleCode('code5');
                                }}
                            >
                                <span className="flex items-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ltr:mr-2 rtl:ml-2">
                                        <path
                                            d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path
                                            d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <div className="flex flex-wrap justify-center gap-4 w-full">
                                <Tippy content="Primary" theme="primary">
                                    <button type="button" className="btn btn-primary">
                                        Primary
                                    </button>
                                </Tippy>
                                <Tippy content="Success" theme="success">
                                    <button type="button" className="btn btn-success">
                                        Success
                                    </button>
                                </Tippy>
                                <Tippy content="info" theme="info">
                                    <button type="button" className="btn btn-info">
                                        Info
                                    </button>
                                </Tippy>
                                <Tippy content="danger" theme="danger">
                                    <button type="button" className="btn btn-danger">
                                        Danger
                                    </button>
                                </Tippy>
                                <Tippy content="warning" theme="warning">
                                    <button type="button" className="btn btn-warning">
                                        Warning
                                    </button>
                                </Tippy>
                                <Tippy content="secondary" theme="secondary">
                                    <button type="button" className="btn btn-secondary">
                                        Secondary
                                    </button>
                                </Tippy>
                                <Tippy content="dark" theme="dark">
                                    <button type="button" className="btn btn-dark">
                                        Dark
                                    </button>
                                </Tippy>
                            </div>
                        </div>
                        {codeArr.includes('code5') && (
                            <CodeHighlight>
                                <pre>{`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Primary" theme="primary">
    <button type="button" className="btn btn-primary">
        Primary
    </button>
</Tippy>

<Tippy content="Success" theme="success">
    <button type="button" className="btn btn-success">
        Success
    </button>
</Tippy>

<Tippy content="info" theme="info">
    <button type="button" className="btn btn-info">
        Info
    </button>
</Tippy>

<Tippy content="danger" theme="danger">
    <button type="button" className="btn btn-danger">
        Danger
    </button>
</Tippy>

<Tippy content="warning" theme="warning">
    <button type="button" className="btn btn-warning">
        Warning
    </button>
</Tippy>

<Tippy content="secondary" theme="secondary">
    <button type="button" className="btn btn-secondary">
        Secondary
    </button>
</Tippy>

<Tippy content="dark" theme="dark">
    <button type="button" className="btn btn-dark">
        Dark
    </button>
</Tippy>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
