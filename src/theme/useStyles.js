import styled from "@emotion/styled"
import { Grid, Link } from "@mui/material"

const useStyles = () => {
    const gridmb = styled(Grid)(({
        marginBottom: 20
    }));

    const LinkEdited = styled(Link)(({
        color: "inherit",
        textDecoration: "none"
    }))

    return {
        gridmb,
        LinkEdited
    }
}

export default useStyles;