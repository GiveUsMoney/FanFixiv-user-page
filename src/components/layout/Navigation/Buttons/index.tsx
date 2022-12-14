import theme from '@assets/theme/theme';
import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/material';
import { useIsLogin } from '@src/data-binding/model/Account/IsLogin';
import loginPopupState from '@src/states/loginPopup';
import signupPopupState from '@src/states/SignupPopup';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import ValidateLoginOnce from './action/ValidateLoginOnce';
import AdultSwitch from './AdultSwitch';
import ProfileAvatar from './ProfileAvatar';

const Root = styled.div`
  font-weight: bold;
  font-size: 16px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(MuiButton)`
  color: ${theme.palette.button.main};
  padding: 0;
  margin: 0;
  margin-left: 16px;
  text-transform: none;
`;

const MarginWrapper = styled.div`
  margin-left: 16px;
`;

export default function Buttons() {
  const [loginPopup, setLoginPopup] = useRecoilState(loginPopupState);
  const isLoginModel = useIsLogin();
  const action = new ValidateLoginOnce();

  useEffect(() => {
    action.doAction();
  }, []);
  const [signupPopup, setSignupPopup] = useRecoilState(signupPopupState);

  return (
    <Root>
      {!isLoginModel.isLogin ? (
        <div>
          <Button variant="text" onClick={() => setLoginPopup(!loginPopup)}>
            Login
          </Button>
          <Button variant="text" onClick={() => setSignupPopup(!signupPopup)}>
            Join
          </Button>
        </div>
      ) : (
        <MarginWrapper>
          <ProfileAvatar />
        </MarginWrapper>
      )}
      {isLoginModel.isLogin ? (
        <MarginWrapper>
          <AdultSwitch />
        </MarginWrapper>
      ) : (
        false
      )}
    </Root>
  );
}
