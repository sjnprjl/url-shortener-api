import { UrlShortnerInputField } from "./components/UrlShortnerInputField";
import { Copy } from "react-feather";
import { Layout } from "./components/Layout";
import { useEffect, useState } from "react";
import { fetchData } from "./utils/fetch-data";
import { CopyToClipboard } from "react-copy-to-clipboard";

import styled from "styled-components";

const Heading = styled.h1`
  color: ${(p) => p.theme.light};
  padding-top: 15rem;
`;
const Container = styled.div`
  align-self: flex-start;
`;

const StatusContainer = styled.div`
  padding: 1rem;
  background: ${(p) => p.theme.light};
  width: 50%;
  margin-top: 1rem;
  border-radius: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Status = styled.span`
  font-weight: ${(p) => p.fontWeight};
  color: ${(p) =>
    (p.code === 0 && p.theme.danger) || (p.code === 1 && p.theme.success)};
`;
const CopyContent = styled.div`
  position: relative;
  cursor: pointer;
  &::before {
    position: absolute;
    content: "Copied!!!";
    top: -120%;
    left: -100%;
    z-index: 999;
    opacity: ${(p) => (p.isCopied === true && "1") || 0};
    background: ${(p) => p.theme.light};
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    pointer-events: none;
    color: ${(p) => p.theme.accent[1]};
    transition: all 0.3s ease;
  }
`;
export const Main = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleClick(payload) {
    const endPoint = `${process.env.REACT_APP_API_ENDPOINT}/url-short`;
    setLoading(true);
    try {
      const response = await fetchData(endPoint, "POST", payload);
      const data = await response.json();
      setError(response.status !== 200 ? data.message : null);
      const origin = "http://localhost:" + process.env.REACT_APP_PORT;
      setData(`${origin}/${data.shortUrl}`);
      setLoading(false);
    } catch (err) {
      console.log(err, `${process.env.REACT_APP_API_ENDPOINT}/url-short`);
      setError("Something went terribly wrong...");
      setLoading(false);
    }
  }
  useEffect(() => {
    const time = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(time);
  }, [copied]);
  return (
    <Layout>
      <Container>
        <Heading>
          Bringing you a URL Shortener.
          <br />
          Easy. Clean. Understandable.
        </Heading>
      </Container>
      <UrlShortnerInputField handleClick={handleClick} loading={loading} />
      {(error || data) && (
        <StatusContainer>
          <Status code={error !== null ? 0 : 1} fontWeight={800}>
            {(error && "Error") || "Generated"}
          </Status>
          <Status fontWeight={400}>{error || data}</Status>
          {!error && (
            <CopyToClipboard text={data} onCopy={() => setCopied(true)}>
              <CopyContent isCopied={copied}>
                <Copy />
              </CopyContent>
            </CopyToClipboard>
          )}
        </StatusContainer>
      )}
    </Layout>
  );
};
