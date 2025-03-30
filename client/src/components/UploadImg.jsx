import { IKContext, IKUpload } from 'imagekitio-react';
import React, { useRef } from 'react';
import { toast } from "react-toastify";

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

    const ref=useRef(null);

    const onError = (err) => {
        console.log(err);   
        toast.error("Image Upload Failed");
    };
    const onSuccess = (res) => {
        console.log(res);
        setData(res);
        // toast.success("Cover Image Added");
        console.log(cover.filePath);
    };
    
    const onUploadProgress = (progress) => {
        console.log(progress);
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
                ref={ref}// using the reference in the div below we can automatically trigger the file input without it being displayed
                accept={`${type}/*`}
            />
            <div className='cursor-pointer' onClick={()=>ref.current.click()}>
                {children}
            </div>
        </IKContext>
    );
};

export default UploadImg;    