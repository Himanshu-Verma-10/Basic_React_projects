import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import useAppDispatch from "../hooks/useAppDispatch";
import { RootState } from "../store";
import { getJoke } from "../store/reducers/joke";
import { JokeItem } from "./JokeItem";

export const JokesList = () => {
    const { items } = useSelector((state: RootState) => state.jokes);
    const dispatch = useAppDispatch();

    const item = items.length > 0 ? items[0] : null;
    const customItems = items.length > 0 ? items.slice(1) : [];

    const onClickFetch = () => {
        dispatch<any>(getJoke());
    }

    const onClickCopy = () => {
        const permissionName = "clipboard-write" as PermissionName;
        navigator.permissions.query({ name: permissionName }).then((result) => {
            if (result.state == "granted" || result.state == "prompt") {
                navigator.clipboard.writeText(item ? item.joke : "").then(() => {
                    toast('Copied to clipboard!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }, () => {
                    console.log("Failed");
                    toast('Something went wrong', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                });
            } else {
                toast('Unable to copy', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        });
    }

    return (
        <>
            <div className="bg-white rounded-lg shadow-sm w-full lg:w-6/12 mx-auto mb-10">
                <div className="container">
                    <div className="border-b border-gray-100 flex justify-between items-center p-5 font-semibold">
                        {item && <span>{item.joke}</span>}
                        <div className="flex gap-x-1">
                            <button onClick={onClickCopy} className="p-1 border border-gray-600 text-gray-600 hover:border-blue-800 hover:text-green-800 rounded-md ease-in-out duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                                </svg>
                            </button>
                            <button onClick={onClickFetch} className="p-1 border border-gray-600 text-gray-600 hover:border-blue-800 hover:text-blue-800 rounded-md ease-in-out duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {customItems.length > 0 && <div className="p-5 max-h-64 overflow-auto">
                        {customItems.map((joke, i) => <JokeItem item={joke} key={`joke-${i}`} />)}
                    </div>}
                </div>
                <div className="p-5 text-center border-t border-gray-100">
                    That's all folks!
                </div>
            </div>
            <ToastContainer />
        </>
    )
}