import { useSelector } from "react-redux"
import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"

import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useMemo } from "react"

export const NoteView = () => {
    const {active: note} = useSelector(state => state.journal);
    const {title,  body, date, imageUrls, onIdChange, isFormValid} = useForm(note);

    const dateString = useMemo(() => new Date(date).toUTCString(), [date]);

    return (
        <Grid container
            className='animate__animated animate__fadeIn animate__faster'
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                mb: 1
            }}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight="light">{dateString}</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="ingrese un titulo"
                    label="Titulo"
                    sx={{
                        border: "none",
                        mb: 1
                    }}
                    name="title"
                    value={title}
                    onChange={onIdChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedió hoy?"
                    minRows={6}
                    name="body"
                    value={body}
                    onChange={onIdChange}
                />

                <ImageGallery />
            </Grid>
        </Grid>
    )
}
