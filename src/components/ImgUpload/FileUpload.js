import httpCommon from "../../shared/httpCommon";


const upload = (file, onUploadProgress) => {
    let formData = new FormData();

    formData.append("file", file);

    return httpCommon.post("http://localhost:8080/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
    });
};

const getFiles = () => {
    return httpCommon.get("/files");
};

const FileUploadService = {
    upload,
    getFiles,
};

export default FileUploadService; 