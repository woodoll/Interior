import { connect } from 'react-redux';
import HeaderSection from './HeaderSection';
import { logout } from 'lib/reducer/user';
import VenderLoginContainer from 'user/vender/containers/login/LoginContainer';

const mapStateToProps = (store) => ({
  user: store.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  disLogout: () => dispatch(logout()),
});

const HeaderContainer = ({ pagename, pageuser, user, disLogout }) => {
  return (
    <HeaderSection
      pagename={pagename}
      pageuser={pageuser}
      user={user}
      disLogout={disLogout}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
