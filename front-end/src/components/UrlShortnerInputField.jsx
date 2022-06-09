import React, { useEffect } from "react";
import { useState } from "react";

import styled, { useTheme } from "styled-components";
import { Search, ArrowRight, Loader } from "react-feather";

const FieldStyle = styled.div`
  background: ${(p) => p.theme.light};
  border-radius: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  width: ${(p) => p.width};
`;

const InputField = styled.input`
  flex: 0.95;
  border: none;
  outline: none;
  font-size: 1rem;
  color: ${(p) => p.theme.dark};
  font-weight: bold;
`;

const Button = styled.button`
  background: ${(p) => p.theme.accent[1]};
  border: none;
  color: ${(p) => p.theme.light};
  padding: 0.8em 1.4em;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 2rem;
  cursor: pointer;
  display: inherit;
  align-items: center;
`;

export const UrlShortnerInputField = ({ handleClick, loading }) => {
  const theme = useTheme();

  const [inputValue, setValue] = useState("");
  return (
    <FieldStyle width={"50%"}>
      <Search color={theme.accent[1]} />
      <InputField
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your url. https://example.com"
      />
      <Button
        onClick={(e) => handleClick({ url: inputValue })}
        disabled={loading}
      >
        Short URL {(loading && <Loader />) || <ArrowRight />}
      </Button>
    </FieldStyle>
  );
};
