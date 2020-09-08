import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import SearchForm from "./search/search-form";

const Header = ({ state }) => {
  const { title, description } = state.frontity;
  const { headerBg } = state.theme.colors;

  return (
    <PageHeader bg={headerBg} id="site-header">
      <HeaderInner>
        <TitleWrapper>
          {/* Heading and Description of the site */}
          <TitleGroup>
            <SiteTitle>
              <StyledLink link="/">
                <h1 className="name-1">Mental Health</h1>
                <h1 className="name-2">Resources</h1>
              </StyledLink>
            </SiteTitle>
            <SiteDescription>{description}</SiteDescription>
          </TitleGroup>
        </TitleWrapper>
      </HeaderInner>
      <SearchSection>
        <SearchForm />
      </SearchSection>
    </PageHeader>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const TitleGroup = styled.div`
  @media (min-width: 1000px) {
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -1rem 0 0 -2.4rem;
  }
`;

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 4rem;
  text-align: center;
  width: 100%;

  @media (min-width: 1000px) {
    width: auto;
    margin-right: 4rem;
    max-width: 50%;
    padding: 0;
    text-align: left;
  }
`;

const PageHeader = styled.header`
  z-index: 1;
  background: none;
  position: relative;
  padding-bottom: 20px;
`;

const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 2.8rem 0;
  max-width: 168rem;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
  }
`;

const SiteTitle = styled.h1`
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1;
  margin: 0 auto;

  @media (min-width: 1000px) {
    margin: 1rem 0 0 2.4rem;
  }
  @media (min-width: 700px) {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

const SiteDescription = styled.div`
  margin: 0;
  margin-top: 1rem;
  color: #6d6d6d;
  font-size: 1.8rem;
  font-weight: 500;
  display: none;
  letter-spacing: -0.0311em;
  transition: all 0.15s linear;

  @media (min-width: 1000px) {
    margin: 1rem 0 0 2.4rem;
  }

  @media (min-width: 700px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    text-decoration: none;
  }
`;

const SearchSection = styled.div`
  width: 580px;
  margin: 0 auto;

  @media (max-width: 700px) {
    & {
      width: 93%;
    }
  }
`;
