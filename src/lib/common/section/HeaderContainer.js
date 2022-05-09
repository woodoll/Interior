import { connect } from 'react-redux';
import HeaderSection from './HeaderSection';
import { logout } from 'lib/reducer/user';

const mapStateToProps = (store) => ({});

const mapDispatchToProps = (dispatch) => ({
  disLogout: () => dispatch(logout()),
});

const HeaderContainer = ({
  pagename,
  pageuser,
  user,
  disLogout,
  FontColor,
}) => {
  return (
    <HeaderSection
      pagename={pagename}
      pageuser={pageuser}
      user={user}
      disLogout={disLogout}
      FontColor={FontColor}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
