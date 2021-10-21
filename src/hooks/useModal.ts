import { useState } from "react";

const useModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    function toggleModal() {
        setIsModalVisible((prev) => !prev);
    }

    return {
        isModalVisible,
        toggleModal,
    };
};

export default useModal;
