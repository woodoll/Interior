import axios from 'axios';

const CLIENT_ID = '85adb6305c9d8f89236af879d4b8a100';
const REDIRECT_URI = 'http://172.30.1.5:8081/home/user_kakao/siginIn';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

// 카카오 로그인
export const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'GET',
      url: `http://172.30.1.5:8081/home/user_kakao/siginIn?code=${code}`,
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem('token', ACCESS_TOKEN); //예시로 로컬에 저장함

        history.replace('/master'); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log('소셜로그인 에러', err);
        window.alert('로그인에 실패하였습니다.');
        history.replace('/master/login'); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};
