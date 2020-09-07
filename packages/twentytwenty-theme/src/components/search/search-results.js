import React from "react";
import { connect, styled } from "frontity";
import Archive from "../archive";
import ArchiveHeader from "../archive/archive-header";
import SectionContainer from "../styles/section-container";

const reverseFormat = query => query.replace("+", " ");

const SearchResults = ({ state }) => {
  const { primary } = state.theme.colors;

  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  // data.total → total pages that match the current path/url
  // data.searchQuery → query done to get search results
  const { total, searchQuery } = data;
  const isEmpty = data.total === 0;

  return (
    <>
      {isEmpty ? (
        <SearchContainer size="thin">
          <p>There are no matching results. Please try another topic</p>
        </SearchContainer>
      ) : (
        <Archive showExcerpt={true} showMedia={false} />
      )}
    </>
  );
};

export default connect(SearchResults);

const Text = styled.p`
  margin: 0 0 1em 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SearchContainer = styled(SectionContainer)`
  padding-top: 5rem;
  @media (min-width: 700px) {
    padding-top: 6rem;
  }
`;
