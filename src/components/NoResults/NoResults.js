import styledComponents from 'styled-components';

export default function NoResults() {
  return (
    <NoResultsWrapper>
      <NoResultsImg alt="No content avaible" src="/images/collections.png" />
    </NoResultsWrapper>
  );
}

const NoResultsWrapper = styledComponents.div``;

const NoResultsImg = styledComponents.img``;
