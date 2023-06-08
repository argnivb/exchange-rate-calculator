import * as S from './styles';
import SkeletonLoader from '@/components/skeletonLoader';

export default function Loading() {
  return (
    <S.Container>
      <SkeletonLoader w={24} h={3} />
      <SkeletonLoader w={24} h={15} />
    </S.Container>
  );
}
