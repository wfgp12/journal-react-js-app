import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2"

import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/"

export const NoteView = () => {
    const dispatch = useDispatch()

    const { active: note, messageSave, isSaving } = useSelector(state => state.journal);
    const { title, body, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => new Date(date).toUTCString(), [date]);

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if (messageSave.length > 0) {
            Swal.fire('Nota guardada', messageSave, 'success');
        }
    }, [messageSave])

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onFileInputChange = ({ target }) => {
        if (target.files.length === 0) return;

        dispatch(startUploadingFiles(target.files));
    }

    const onDeleteNote = () => {
        dispatch(startDeletingNote());
    }

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
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                />
                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>
                <Button
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color="primary"
                    sx={{ padding: 2 }}
                >
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
                    onChange={onInputChange}
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
                    onChange={onInputChange}
                />

                <Grid container justifyContent="end">
                    <Button
                        onClick={onDeleteNote}
                        sx={{mt: 2}}
                        color="error"
                    >
                        <DeleteOutline >
                            Borrar
                        </DeleteOutline>
                    </Button>
                </Grid>
                <ImageGallery images={note.imageUrls} />
            </Grid>
        </Grid>
    )
}
