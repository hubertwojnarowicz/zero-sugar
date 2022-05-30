import Skeleton from 'react-loading-skeleton';
import styledComponents from 'styled-components';

export default function ImagesSkeleton({ images }) {
  return (
    <SkeletonWrapper>
      {Array(images)
        .fill(0)
        .map((img, idx) => (
          <Skeleton key={idx} height={'375px'} />
        ))}
    </SkeletonWrapper>
  );
}

const SkeletonWrapper = styledComponents.div`
    display: grid;
    grid-template-columns: 1fr
    gap: 16px;
    align-self: flex-start;
    height: 100%;
`;
