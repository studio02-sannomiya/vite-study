import { useState } from "react";

export default function EventError({ src, alt }) {
    const [path, setPath] = useState(src);

    const handleError = () => setPath('/noimage.jpg');

    return (
        <img src={path} alt={alt} onError={handleError} />
    )
};