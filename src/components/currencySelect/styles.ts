import Select from 'react-select';
import styled from 'styled-components';

export const StyledSelect = styled(Select)`
  .select__control {
    padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
    border-radius: ${({ theme }) => theme.radius.rounded};
    border: none;
    width: 120px;
  }
  .select__indicator-separator {
    display: none;
  }
  .select__menu {
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radius.rounded};
  }
  .select__menu-list {
    padding: 0;
  }
  .select__option {
    text-align: center;
    width: 100%;
  }
`;

StyledSelect.defaultProps = {
  classNamePrefix: 'select',
};
