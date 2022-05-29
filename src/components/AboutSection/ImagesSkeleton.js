import Skeleton from 'react-loading-skeleton';

export default function ImagesSkeleton({ images }) {
  return Array(images)
    .fill(0)
    .map((img, idx) => (
      <Skeleton key={idx} height={'385px'} style={{ borderRadius: '12px' }} />
    ));
}
