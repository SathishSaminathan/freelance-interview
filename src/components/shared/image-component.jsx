import React from 'react';
import { images } from '@assets/img';

const ImageComponent = ({ className, style, src = images.k, alt = 'k', onClick }) => {
	return <img alt={alt} className={className} style={style} src={src} onError={() => images.k} onClick={onClick} />;
};

export default ImageComponent;
