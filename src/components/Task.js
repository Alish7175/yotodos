import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";

export default function Task({
  id,
  title,
  description,
  isCompleted,
  index,
  handleDelete,
  updateBtnClick,
  taskStatus
}) {
  //for Accordian one at a time feature
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded && panel);
  };

  

  return (
    <div>
      <Accordion
        className="accord_task"
        sx={() =>
          !isCompleted
            ? {
                margin: "2rem auto",
                boxShadow: 5,
                backgroundColor: "rebeccapurple",
                color: '#fff'
              }
            : {
                margin: "2rem auto",
                boxShadow: 5,
                backgroundColor: "#46e534"
              }
        }
        expanded={expanded === "panel" + index}
        onChange={handleChange("panel" + index)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={"panel" + index + "d" + "-content"}
          id={"panel" + index + "d" + "-header"}
          sx={() => expanded && { margin: "2rem auto" }}
        >
          <Typography
            variant="h4"
            sx={() =>
              isCompleted
                ? {
                    width: "33%",
                    flexShrink: 0,
                    textDecoration: "line-through",
                  }
                : { width: "33%", flexShrink: 0 }
            }
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">{description}</Typography>
        </AccordionDetails>

        <div className="btns-container">
          <FormControlLabel
            sx={{
              margin: "2rem",
              display: "-ms-flexbox",
              textOverflow: "clip",
            }}
            control={<Checkbox color="success" size="large" />}
            label="Completed"
            onClick={() => taskStatus(id)}
          />
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button color="info" onClick={() => updateBtnClick(id)}>
              <UpdateIcon fontSize="large" />
              &nbsp;
            </Button>
            <Button color="error" onClick={() => handleDelete(id)}>
              <DeleteIcon fontSize="large" />
              &nbsp;
            </Button>
          </ButtonGroup>
        </div>
      </Accordion>
    </div>
  );
}
