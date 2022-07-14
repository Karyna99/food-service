import { useState } from "react";

const useTogglePopup = () => {
    const [state, setState] = useState(false);
    return [state, setState];
};

export { useTogglePopup };