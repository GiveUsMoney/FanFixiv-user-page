import theme from '@assets/theme/theme';
import styled from '@emotion/styled';
import { HashIcon, SearchIcon } from '@icons';
import { IconButton as MuiIconButton, InputBase } from '@mui/material';

const SearchBox = styled.div`
  width: 605px;
  height: 42px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled(InputBase)`
  margin-left: 18px;
  font-family: MinSans;
  font-size: 16px;
  color: black;
  &::placeholder {
    color: ${theme.palette.gray2.main};
  }
  width: calc(100% - 100px);
`;

const ButtonsWrapper = styled.div`
  margin-right: 18px;
`;

const Button = styled.img`
  width: 24px;
  height: 24px;
`;

const IconButton = styled(MuiIconButton)`
  width: 24px;
  height: 24px;
  margin-left: 8px;
`;

export default function Search() {
  return (
    <SearchBox>
      <SearchInput placeholder="검색어를 입력해주세요." />
      <ButtonsWrapper>
        <IconButton type="button">
          <HashIcon />
        </IconButton>
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
      </ButtonsWrapper>
    </SearchBox>
  );
}
