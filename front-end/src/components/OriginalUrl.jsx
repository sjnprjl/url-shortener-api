import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetch-data";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Text404 = styled.h1`
  font-size: 10rem;
  color: ${(p) => p.theme.danger};
  line-height: 0;
`;
const TextSmall = styled(Text404).attrs({ as: "span" })`
  font-size: 2rem;
  color: ${p => p.theme.accent[1]};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const NotFound = () => {
  return (
    <div>
      <Text404>Broken Link!</Text404>
    </div>
  );
};

export const OriginalUrl = () => {
  const { shortUrl } = useParams();
  const [status, setStatus] = useState(null);
  const [originalUrl, setOriginalUrl] = useState(null);
  const [message, setMessage] = useState(null);
  const response = fetchData(
    "http://localhost:8080/api/v1/original-url",
    "POST",
    { shortUrl }
  );
  response.then((data) => {
    setStatus(data.status);
    const res = data.json();
    res.then((c) => {
      setOriginalUrl(c.redirectUrl);
      setMessage(c.message);
    });
  });

  useEffect(() => {
    if (status === 200) {
      setTimeout(() => {
        window.location.href = originalUrl;
      }, 2000);
    }
  }, [status, originalUrl]);

  return (
    <Container>
      {status === 404 && <NotFound />}
      {status === 200 && <TextSmall>Redirecting to {originalUrl}</TextSmall>}
    </Container>
  );
};
