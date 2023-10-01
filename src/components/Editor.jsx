import React from "react";
import { useState } from "react";
import "../App.css";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

const Contanier = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;
const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
`;

const Editor = (props) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    props.onChange(value);
  };

  return (
    <Contanier style={open ? null : {flexGrow: 0}}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: props.color,
              display: "flex",
              height: 20,
              width: 20,
              borderRadius: 4,
              placeContent: "center",
              marginRight: 5,
              paddingBottom: 2,
              color: "#000",
              textShadow: 4,
            }}
          >
            {props.icon}
          </Box>
          {props.heading}
        </Heading>
        <CloseFullscreenIcon
            fontSize="small"
            style={{ cursor: "pointer", alignSelf: 'center' }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>
      <ControlledEditor
        className="controlled-editor"
        value={props.value}
        onBeforeChange={handleChange}
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Contanier>
  );
};

export default Editor;
