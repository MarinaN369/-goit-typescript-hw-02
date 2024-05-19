import toast from "react-hot-toast";

export const showError = (error: string): void => {toast.error(error, {
    position:"top-center",
    duration:3000,

}); }; 