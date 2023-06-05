import * as S from './styles';

export const ConvertButton = ({
  disabled,
  loading,
}: {
  disabled: boolean;
  loading: boolean;
}) => {
  return (
    <S.Button type="submit" disabled={disabled}>
      {loading ? 'Converting...' : 'Convert'}
    </S.Button>
  );
};

export default ConvertButton;
