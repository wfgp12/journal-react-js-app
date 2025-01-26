export const fileUpload = async(file) => {
    if (!file) throw new Error('File is required');

    const CLOUD_URL = 'https://api.cloudinary.com/v1_1/dqwxyv3zc/image/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const response = await fetch(CLOUD_URL, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) throw new Error('No se pudo subir el archivo');

        const cloudResponse = await response.json();
        return cloudResponse.secure_url;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}