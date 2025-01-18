
import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";

import { JournalLayout } from "../layout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
    const { isSaving, active } = useSelector((state) => state.journal);
    const dispatch = useDispatch();

    const onClickNewNote = () => {
        dispatch(startNewNote());
    }
    return (
        <JournalLayout>
            {/* <Typography>Nulla esse ea est nisi cupidatat consectetur tempor consectetur quis. Fugiat nisi qui ex occaecat nisi eu fugiat deserunt magna. Sunt sint anim ad aliquip labore eiusmod. Consequat sint minim nostrud ut duis.</Typography> */}
            {active 
                ? <NoteView />
                : <NothingSelectedView />
            }

            <IconButton
                disabled={isSaving}
                onClick={onClickNewNote}
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    transition: 'all .2s',
                    ':hover': { backgroundColor: 'error.main', opacity: .9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    )
}
