import { ImageList, ImageListItem } from "@mui/material";
import PropTypes from 'prop-types';


export const ImageGallery = ({ images = [] }) => {
    return (
        <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={175}>
            {images.map((image) => (
                <ImageListItem key={image}>
                    <img
                        srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${image}?w=164&h=164&fit=crop&auto=format`}
                        alt={image}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string)
};
