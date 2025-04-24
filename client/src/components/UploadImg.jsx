import { IKContext, IKUpload } from 'imagekitio-react';
import React, { useRef } from 'react';
import { toast, Flip } from "react-toastify";

const authenticator = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/upload-auth`);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};

const UploadImg = ({ children, type, setProgress, setData }) => {

    const ref = useRef(null);

    const onError = (err) => {
        toast.error("Image Upload Failed", {
            autoClose: 2000,
            hideProgressBar: true,
            theme: "dark",
            transition: Flip,
        });
    };
    const onSuccess = (res) => {
        setData(res);
        toast.success("Image Added", {
            autoClose: 2000,
            hideProgressBar: true,
            theme: "dark",
            transition: Flip,
        });
    };

    const onUploadProgress = (progress) => {
        setProgress(Math.round((progress.loaded / progress.total) * 100));
    };

    return (
        <IKContext
            publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            authenticator={authenticator}
        >
            <IKUpload
                useUniqueFileName
                onError={onError}
                onSuccess={onSuccess}
                onUploadProgress={onUploadProgress}
                className="hidden"
                ref={ref}
                accept={`${type}/*`}
            />
            <div
                className='w-full h-full'
                onClick={() => ref.current.click()}
            >
                {children}
            </div>
        </IKContext>
    );
};

export default UploadImg;