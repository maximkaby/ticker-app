import React from 'react';
import {components} from "react-select";
import {ReactComponent as SearchIcon} from "assets/icons/search.svg";

const Control: React.FC = ({ children, ...props }: any) => (
  <components.Control {...props}>
    <div style={{
      paddingLeft: '17px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <SearchIcon></SearchIcon>
    </div>
    {children}
  </components.Control>
);

export default Control;