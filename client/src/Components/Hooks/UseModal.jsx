import { useEffect } from 'react';

const useModal = () => {
    useEffect(() => {
        const overflow = document.body.style.overflow;
        if(overflow !== 'hidden') {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = ''
            }
        }
    }, []);
    return undefined;
}

export default useModal;